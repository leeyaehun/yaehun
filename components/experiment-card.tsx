import { Separator } from "@/components/ui/separator"
import type { Experiment } from "@/lib/data"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function ExperimentCard({ experiment }: { experiment: Experiment }) {
  return (
    <article className="rounded-sm border border-border p-6 transition-colors hover:bg-accent/30">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase text-muted-foreground">
            {experiment.id}
          </span>
          <h3 className="font-serif text-lg text-foreground">
            {experiment.title}
          </h3>
        </div>
        <time
          className="flex-shrink-0 text-xs text-muted-foreground pt-1"
          dateTime={experiment.date}
        >
          {formatDate(experiment.date)}
        </time>
      </div>

      <Separator className="my-5" />

      {/* Hypothesis */}
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Hypothesis
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/85">
          {experiment.hypothesis}
        </p>
      </div>

      {/* Result */}
      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Result
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/85">
          {experiment.result}
        </p>
      </div>

      {/* Lessons Learned */}
      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Lessons Learned
        </p>
        <ul className="mt-2 flex flex-col gap-1.5">
          {experiment.lessons.map((lesson, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85"
            >
              <span className="mt-2 block h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/50" aria-hidden="true" />
              {lesson}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
