const highlights = [
  "Product-minded software engineering",
  "Data-informed decision making",
  "Fast iteration with strong code quality",
];

export default function YaehunAbout() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            About Yaehun
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            I design and ship software that solves real user problems. My
            current focus is building AI-assisted products and turning complex
            workflows into simple, reliable user experiences.
          </p>
        </div>

        <ul className="space-y-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
