import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ExperimentCard } from "@/components/experiment-card"
import { experiments } from "@/lib/data"

export const metadata = {
  title: "Experiments - Yaehun",
  description:
    "A log of structured experiments exploring creativity, attention, and process.",
}

export default function ExperimentsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pb-16 pt-20">
          <h1 className="font-serif text-3xl tracking-tight text-foreground">
            Experiment Log
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Structured experiments with hypotheses, results, and documented
            lessons.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20">
          <div className="flex flex-col gap-8">
            {experiments.map((exp) => (
              <ExperimentCard key={exp.id} experiment={exp} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
