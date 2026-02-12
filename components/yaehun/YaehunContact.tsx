export default function YaehunContact() {
  return (
    <section id="contact" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Contact
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            If you want to collaborate, discuss an idea, or just connect, reach
            out anytime.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:yaehun@example.com"
              className="rounded-full bg-slate-900 px-5 py-2.5 font-medium text-white transition hover:bg-slate-800"
            >
              Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-5 py-2.5 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
