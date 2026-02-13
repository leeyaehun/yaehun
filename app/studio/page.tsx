"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

type ApiResult = {
  ok?: boolean
  error?: string
  writingUrl?: string
  slug?: string
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

export default function StudioPage() {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [date, setDate] = useState(today())
  const [tag, setTag] = useState("")
  const [slug, setSlug] = useState("")
  const [body, setBody] = useState("# Title\\n\\nWrite your post in Markdown/MDX.")
  const [overwrite, setOverwrite] = useState(false)
  const [writeKey, setWriteKey] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [publishedUrl, setPublishedUrl] = useState<string | null>(null)

  const disabled = useMemo(() => {
    return !title.trim() || !excerpt.trim() || !date.trim() || !body.trim() || isSubmitting
  }, [title, excerpt, date, body, isSubmitting])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)
    setPublishedUrl(null)

    try {
      const response = await fetch("/api/writings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(writeKey.trim() ? { "x-write-key": writeKey.trim() } : {}),
        },
        body: JSON.stringify({
          title,
          excerpt,
          date,
          tag,
          slug,
          body,
          overwrite,
        }),
      })

      const result = (await response.json()) as ApiResult
      if (!response.ok || !result.ok) {
        setMessage(result.error || "Failed to publish post")
        return
      }

      setMessage("Published successfully. GitHub commit created.")
      setPublishedUrl(result.writingUrl || null)
    } catch {
      setMessage("Request failed. Check network and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pb-10 pt-16">
          <h1 className="font-serif text-3xl tracking-tight text-foreground">Studio</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Write in Markdown/MDX and publish directly to your GitHub repository.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <form onSubmit={onSubmit} className="grid gap-5 lg:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm">
              Title
              <input
                className="rounded border border-border bg-background px-3 py-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="First Writing"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm">
              Date
              <input
                className="rounded border border-border bg-background px-3 py-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="2026-02-13"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm lg:col-span-2">
              Excerpt
              <input
                className="rounded border border-border bg-background px-3 py-2"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Short summary"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm">
              Tag (optional)
              <input
                className="rounded border border-border bg-background px-3 py-2"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="Daily"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm">
              Slug (optional)
              <input
                className="rounded border border-border bg-background px-3 py-2"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="first-writing"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm lg:col-span-2">
              WRITE_API_KEY (optional if configured)
              <input
                type="password"
                className="rounded border border-border bg-background px-3 py-2"
                value={writeKey}
                onChange={(e) => setWriteKey(e.target.value)}
                placeholder="Enter write key"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm lg:col-span-2">
              Body (Markdown/MDX)
              <textarea
                className="min-h-[360px] rounded border border-border bg-background px-3 py-2 font-mono text-sm"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </label>

            <label className="flex items-center gap-2 text-sm lg:col-span-2">
              <input
                type="checkbox"
                checked={overwrite}
                onChange={(e) => setOverwrite(e.target.checked)}
              />
              Overwrite existing slug if already present
            </label>

            <div className="lg:col-span-2 flex items-center gap-3">
              <button
                type="submit"
                disabled={disabled}
                className="rounded bg-foreground px-4 py-2 text-sm text-background disabled:opacity-50"
              >
                {isSubmitting ? "Publishing..." : "Publish"}
              </button>

              {publishedUrl ? (
                <Link href={publishedUrl} className="text-sm underline underline-offset-4">
                  Open published post
                </Link>
              ) : null}
            </div>

            {message ? (
              <p className="lg:col-span-2 text-sm text-muted-foreground">{message}</p>
            ) : null}
          </form>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
