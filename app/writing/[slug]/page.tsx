import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ArrowLeft } from "lucide-react"
import remarkGfm from "remark-gfm"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getAllWritings, getWritingBySlug } from "@/lib/writings"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export async function generateStaticParams() {
  const writings = await getAllWritings()
  return writings.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const writing = await getWritingBySlug(slug)
  if (!writing) return { title: "Not Found" }
  return {
    title: `${writing.title} - Yaehun`,
    description: writing.excerpt,
  }
}

export default async function WritingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const writing = await getWritingBySlug(slug)

  if (!writing) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-[700px] px-6 pb-20 pt-16">
          <Link
            href="/writing"
            className="group mb-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to Writing
          </Link>

          <header className="mb-10">
            <h1 className="font-serif text-3xl leading-tight tracking-tight text-foreground text-balance">
              {writing.title}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <time className="text-sm text-muted-foreground" dateTime={writing.date}>
                {formatDate(writing.date)}
              </time>
              {writing.tag && (
                <Badge variant="outline" className="text-xs font-normal text-muted-foreground">
                  {writing.tag}
                </Badge>
              )}
            </div>
          </header>

          <Separator className="mb-10" />

          <MDXRemote
            source={writing.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
            components={{
              p: (props) => (
                <p
                  {...props}
                  className="mb-6 text-base leading-relaxed text-foreground/85"
                />
              ),
              h2: (props) => (
                <h2
                  {...props}
                  className="mb-4 mt-10 font-serif text-2xl tracking-tight text-foreground"
                />
              ),
              h3: (props) => (
                <h3
                  {...props}
                  className="mb-3 mt-8 font-serif text-xl tracking-tight text-foreground"
                />
              ),
              ul: (props) => <ul {...props} className="mb-6 list-disc space-y-2 pl-6" />,
              ol: (props) => (
                <ol {...props} className="mb-6 list-decimal space-y-2 pl-6" />
              ),
              li: (props) => (
                <li {...props} className="text-base leading-relaxed text-foreground/85" />
              ),
              blockquote: (props) => (
                <blockquote
                  {...props}
                  className="mb-6 border-l-2 border-border pl-4 italic text-foreground/75"
                />
              ),
              a: (props) => (
                <a
                  {...props}
                  className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
                />
              ),
              code: (props) => (
                <code
                  {...props}
                  className="rounded bg-accent px-1.5 py-0.5 font-mono text-sm"
                />
              ),
              pre: (props) => (
                <pre
                  {...props}
                  className="mb-6 overflow-x-auto rounded border border-border bg-card p-4"
                />
              ),
            }}
          />
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
