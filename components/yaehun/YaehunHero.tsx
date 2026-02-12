export default function YaehunHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.24),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.18),transparent_50%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 py-20 sm:px-8 lg:py-24">
        <p className="w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100">
          Personal Website
        </p>

        <div className="space-y-5">
          <h1 className="text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Yaehun
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Building practical products with a focus on clear UX, measurable
            impact, and continuous learning.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="#projects"
            className="rounded-full bg-cyan-300 px-5 py-2.5 font-medium text-slate-950 transition hover:bg-cyan-200"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 px-5 py-2.5 font-medium text-white transition hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
