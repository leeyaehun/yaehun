const projects = [
  {
    title: "AI Career Platform",
    description:
      "Built an end-to-end product that helps users plan career transitions using AI and labor market signals.",
    tags: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    title: "Skill Map Explorer",
    description:
      "Created an interactive skill graph to connect occupations, required skills, and practical learning paths.",
    tags: ["Data Modeling", "UX", "Visualization"],
  },
  {
    title: "Workflow Automation",
    description:
      "Automated repetitive analysis and reporting tasks to reduce turnaround time and improve consistency.",
    tags: ["Automation", "APIs", "Operations"],
  },
];

export default function YaehunProjects() {
  return (
    <section id="projects" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl space-y-8 px-6 py-16 sm:px-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Selected Projects
          </h2>
          <p className="text-sm text-slate-600 sm:text-base">
            A few things I have built and shipped.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
