import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "About - Yaehun",
  description: "About Yaehun and the thinking behind this site.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-[700px] px-6 pb-20 pt-20">
          <h1 className="font-serif text-3xl tracking-tight text-foreground">
            About
          </h1>

          <Separator className="my-8" />

          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-foreground/85">
              This is Yaehun&apos;s personal site. It is a structured space for
              thinking, writing, and documenting experiments.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              The writing here explores themes of creativity, constraints,
              attention, and process. Each piece is an attempt to think clearly
              about a particular idea and follow a thread of inquiry.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              The experiment log documents structured explorations with explicit
              hypotheses, observed results, and practical lessons.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              The design of this space is quiet and focused. Every element is
              tuned for clarity.
            </p>
          </div>

          <Separator className="my-10" />

          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Principles
            </h2>
            <ul className="flex flex-col gap-3">
              {[
                "Clarity over decoration",
                "Substance over style",
                "Process over outcomes",
                "Depth over breadth",
                "Intention over spontaneity",
              ].map((principle) => (
                <li
                  key={principle}
                  className="flex items-center gap-2.5 text-sm text-foreground/85"
                >
                  <span
                    className="block h-1 w-1 rounded-full bg-muted-foreground/50"
                    aria-hidden="true"
                  />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
