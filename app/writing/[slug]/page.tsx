import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { writings } from "@/lib/data"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export async function generateStaticParams() {
  return writings.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const writing = writings.find((w) => w.slug === slug)
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
  const writing = writings.find((w) => w.slug === slug)

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

          <div className="flex flex-col gap-6">
            {writing.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/85">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
