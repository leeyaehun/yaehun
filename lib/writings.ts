import fs from "node:fs/promises"
import type { Dirent } from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const WRITINGS_DIR = path.join(process.cwd(), "content", "writings")
const WRITING_EXTENSIONS = new Set([".md", ".mdx"])

export interface WritingMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  tag?: string
}

export interface Writing extends WritingMeta {
  content: string
}

function sortByDateDesc(a: WritingMeta, b: WritingMeta) {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}

function parseWriting(fileName: string, source: string): Writing {
  const { data, content } = matter(source)
  const slug = path.basename(fileName, path.extname(fileName))

  if (typeof data.title !== "string") {
    throw new Error(`Missing title in writing file: ${fileName}`)
  }

  if (typeof data.excerpt !== "string") {
    throw new Error(`Missing excerpt in writing file: ${fileName}`)
  }

  if (!(typeof data.date === "string" || data.date instanceof Date)) {
    throw new Error(`Missing date in writing file: ${fileName}`)
  }

  const date =
    typeof data.date === "string"
      ? data.date
      : data.date.toISOString().slice(0, 10)

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date,
    tag: typeof data.tag === "string" ? data.tag : undefined,
    content: content.trim(),
  }
}

async function readWriting(fileName: string) {
  const filePath = path.join(WRITINGS_DIR, fileName)
  const source = await fs.readFile(filePath, "utf8")
  return parseWriting(fileName, source)
}

export async function getAllWritings(): Promise<WritingMeta[]> {
  let entries: Dirent[]

  try {
    entries = await fs.readdir(WRITINGS_DIR, { withFileTypes: true })
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return []
    }

    throw error
  }

  const fileNames = entries
    .filter(
      (entry) =>
        entry.isFile() && WRITING_EXTENSIONS.has(path.extname(entry.name))
    )
    .map((entry) => entry.name)

  const writings = await Promise.all(fileNames.map((fileName) => readWriting(fileName)))

  return writings
    .map(({ content: _content, ...meta }) => meta)
    .sort(sortByDateDesc)
}

export async function getWritingBySlug(slug: string): Promise<Writing | null> {
  for (const extension of WRITING_EXTENSIONS) {
    const fileName = `${slug}${extension}`

    try {
      return await readWriting(fileName)
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        continue
      }

      throw error
    }
  }

  return null
}
