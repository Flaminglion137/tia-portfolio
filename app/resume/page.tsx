export default function ResumePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-10 px-6 pb-16 pt-24 sm:px-8 lg:px-10">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
          Résumé
        </p>
        <h1 className="bubble-heading bg-gradient-to-r from-orange-500 via-rose-500 to-sky-500 bg-clip-text text-3xl text-transparent sm:text-4xl">
          Tia Patel
        </h1>
        <p className="text-sm text-zinc-600 sm:text-base">
          Frontend Developer &amp; aspiring international management professional.
        </p>
      </header>

      <section className="grid gap-8 rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]">
        <div className="space-y-6">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Profile
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 sm:text-base">
              I have a strong interest in international management and how
              businesses operate on a global scale. I&apos;m especially
              interested in how large organizations make strategic decisions and
              adapt their structures in response to global economic, political,
              and cultural dynamics.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Skills
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
              <li>TypeScript, React, Next.js</li>
              <li>UI design &amp; prototyping</li>
              <li>Cross-cultural communication</li>
              <li>Research &amp; analysis</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Experience &amp; Education
            </h2>
            <p className="mt-3 text-xs text-zinc-500">
              You can replace this section with your real roles, internships and
              studies.
            </p>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Contact
            </h3>
            <p className="mt-3 text-xs text-zinc-600">
              You can add your email, LinkedIn, or portfolio links here.
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-zinc-300 bg-white/70 p-4 text-xs text-zinc-500">
            <p>
              Want a downloadable version? You can add a PDF of your résumé to
              the <code className="rounded bg-zinc-100 px-1 py-0.5">public</code>{" "}
              folder (for example, <code className="rounded bg-zinc-100 px-1 py-0.5">/tia-resume.pdf</code>)
              and link to it from here.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

