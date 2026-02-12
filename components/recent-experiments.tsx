import type { Experiment } from "@/lib/data"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function RecentExperiments({
  experiments,
}: {
  experiments: Experiment[]
}) {
  return (
    <div className="flex flex-col gap-6">
      {experiments.map((exp) => (
        <article
          key={exp.id}
          className="rounded-sm border border-border p-6 transition-colors hover:bg-accent/30"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted-foreground uppercase">
                {exp.id}
              </span>
              <h3 className="font-serif text-base text-foreground">
                {exp.title}
              </h3>
            </div>
            <time
              className="flex-shrink-0 text-xs text-muted-foreground"
              dateTime={exp.date}
            >
              {formatDate(exp.date)}
            </time>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Hypothesis
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                {exp.hypothesis}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Result
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                {exp.result}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
