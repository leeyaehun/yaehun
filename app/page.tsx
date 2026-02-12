import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { writings, experiments } from "@/lib/data"
import { LatestWritings } from "@/components/latest-writings"
import { RecentExperiments } from "@/components/recent-experiments"

export default function HomePage() {
  const latestWritings = writings.slice(0, 5)
  const recentExperiments = experiments.slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pb-16 pt-20">
          <h1 className="font-serif text-4xl tracking-tight text-foreground text-balance">
            Yaehun
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty">
            A structured space for writing, experimentation, and building
            thoughtful products.
          </p>
        </section>

        <div className="mx-auto max-w-3xl px-6">
          <Separator />
        </div>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Latest Writings
            </h2>
            <Link
              href="/writing"
              className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View all
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-8">
            <LatestWritings writings={latestWritings} />
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6">
          <Separator />
        </div>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Recent Experiments
            </h2>
            <Link
              href="/experiments"
              className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View all
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-8">
            <RecentExperiments experiments={recentExperiments} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
