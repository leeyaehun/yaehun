import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LatestWritings } from "@/components/latest-writings"
import { writings } from "@/lib/data"

export const metadata = {
  title: "Writing - Yaehun",
  description: "Essays and reflections on creativity, process, and structured thinking.",
}

export default function WritingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pb-16 pt-20">
          <h1 className="font-serif text-3xl tracking-tight text-foreground">
            Writing
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Essays on creativity, process, and the discipline of structured thinking.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20">
          <LatestWritings writings={writings} />
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
