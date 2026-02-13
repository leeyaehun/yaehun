import { NextResponse } from "next/server"

type CreateWritingPayload = {
  title: string
  excerpt: string
  date: string
  tag?: string
  body: string
  slug?: string
  overwrite?: boolean
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

function toBase64(value: string) {
  return Buffer.from(value, "utf8").toString("base64")
}

function isValidDate(input: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(input)
}

export async function POST(req: Request) {
  const configuredKey = process.env.WRITE_API_KEY
  if (configuredKey) {
    const incomingKey = req.headers.get("x-write-key")
    if (incomingKey !== configuredKey) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  const githubToken = process.env.GITHUB_TOKEN
  const githubOwner = process.env.GITHUB_OWNER
  const githubRepo = process.env.GITHUB_REPO
  const githubBranch = process.env.GITHUB_BRANCH || "main"

  if (!githubToken || !githubOwner || !githubRepo) {
    return NextResponse.json(
      {
        error:
          "Missing env vars. Set GITHUB_TOKEN, GITHUB_OWNER, and GITHUB_REPO in Vercel.",
      },
      { status: 500 }
    )
  }

  const payload = (await req.json()) as CreateWritingPayload
  const title = payload.title?.trim()
  const excerpt = payload.excerpt?.trim()
  const date = payload.date?.trim()
  const body = payload.body?.trim()
  const tag = payload.tag?.trim()
  const overwrite = payload.overwrite === true

  if (!title || !excerpt || !date || !body) {
    return NextResponse.json(
      { error: "title, excerpt, date, and body are required" },
      { status: 400 }
    )
  }

  if (!isValidDate(date)) {
    return NextResponse.json(
      { error: "date must be in YYYY-MM-DD format" },
      { status: 400 }
    )
  }

  const slug = slugify(payload.slug?.trim() || title)
  if (!slug) {
    return NextResponse.json({ error: "invalid slug" }, { status: 400 })
  }

  const filePath = `content/writings/${slug}.mdx`
  const encodedPath = filePath.split("/").map(encodeURIComponent).join("/")
  const url = `https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/${encodedPath}`

  const frontmatter = [
    "---",
    `title: \"${title.replaceAll('"', '\\\"')}\"`,
    `excerpt: \"${excerpt.replaceAll('"', '\\\"')}\"`,
    `date: \"${date}\"`,
    tag ? `tag: \"${tag.replaceAll('"', '\\\"')}\"` : null,
    "---",
    "",
  ]
    .filter(Boolean)
    .join("\n")

  const content = `${frontmatter}${body}\n`

  let sha: string | undefined

  const existing = await fetch(`${url}?ref=${encodeURIComponent(githubBranch)}`, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github+json",
    },
    cache: "no-store",
  })

  if (existing.ok) {
    const data = (await existing.json()) as { sha?: string }
    sha = data.sha
    if (!overwrite) {
      return NextResponse.json(
        { error: "A post with this slug already exists. Enable overwrite to replace it." },
        { status: 409 }
      )
    }
  } else if (existing.status !== 404) {
    const message = await existing.text()
    return NextResponse.json(
      { error: `Failed to check existing file: ${message}` },
      { status: 502 }
    )
  }

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `${sha ? "Update" : "Add"} writing: ${slug}`,
      content: toBase64(content),
      branch: githubBranch,
      sha,
    }),
  })

  if (!response.ok) {
    const message = await response.text()
    return NextResponse.json(
      { error: `GitHub commit failed: ${message}` },
      { status: 502 }
    )
  }

  return NextResponse.json({
    ok: true,
    slug,
    path: filePath,
    writingUrl: `/writing/${slug}`,
  })
}
