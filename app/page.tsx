"use client";

import { useState, FormEvent, useEffect } from "react";

// Data constants
const skills = [
  "TypeScript",
  "React & Next.js",
  "HTML & CSS",
  "Tailwind CSS",
  "Node.js",
  "UI/UX Thinking",
];

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of a project you're proud of. Explain what it does and what you worked on.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "Another project highlight. Focus on the problem you solved and impact or results.",
    tech: ["React", "Node.js"],
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "You can replace these with your real projects later. Keep each card short and scannable.",
    tech: ["Design", "Frontend"],
    link: "#",
  },
];

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    // This is just a placeholder for now – you can wire this up to an API or email service later.
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Animated background gradient */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.16),_transparent_55%)] animate-pulse-slow" />

      <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 pb-16 pt-10 sm:px-8 sm:pt-12 lg:px-10">
        {/* Header / Nav */}
        <header
          className={`sticky top-0 z-50 flex items-center justify-between rounded-2xl border border-slate-800/50 bg-slate-950/80 backdrop-blur-md p-4 transition-all duration-300 ${
            isScrolled ? "shadow-lg shadow-sky-500/10" : ""
          }`}
        >
          <a href="#" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/70 ring-1 ring-slate-700/70 shadow-md shadow-sky-500/20 transition-all hover:shadow-sky-500/40">
              <span className="text-sm font-semibold tracking-tight">TP</span>
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-medium text-slate-100">Tia Patel</p>
              <p className="text-xs text-slate-400">Frontend Developer & Designer</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex">
            <a
              href="#about"
              className="transition-all hover:text-sky-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="transition-all hover:text-sky-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="transition-all hover:text-sky-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="transition-all hover:text-sky-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 rounded-lg p-2 transition-all hover:bg-slate-800/50 sm:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-slate-300 transition-all ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-slate-300 transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-slate-300 transition-all ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </header>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-slate-950/95 backdrop-blur-md sm:hidden animate-fade-in">
            <a
              href="#about"
              className="text-lg font-medium text-slate-300 transition-all hover:text-sky-300 hover:scale-110"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-lg font-medium text-slate-300 transition-all hover:text-sky-300 hover:scale-110"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-lg font-medium text-slate-300 transition-all hover:text-sky-300 hover:scale-110"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-lg font-medium text-slate-300 transition-all hover:text-sky-300 hover:scale-110"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}

        {/* Hero / Intro */}
        <section className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] md:items-center animate-fade-in-up">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700/70 backdrop-blur animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)] animate-pulse" />
              Open to new opportunities
            </p>

            <div className="space-y-3">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl animate-fade-in-up delay-100">
                Crafting clean, thoughtful experiences for the web.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base animate-fade-in-up delay-200">
                I&apos;m Tia, a frontend developer who enjoys turning ideas into
                friendly digital interfaces. I focus on clear structure,
                accessible design, and small details that make products feel
                polished.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up delay-300">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition-all hover:-translate-y-0.5 hover:bg-sky-300 hover:shadow-sky-500/60 sm:text-sm"
              >
                View my work
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-slate-600/80 px-4 py-2 text-xs font-medium text-slate-200 transition-all hover:border-sky-400/80 hover:text-sky-200 hover:scale-105 sm:text-sm"
              >
                Let&apos;s collaborate
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-xs items-center justify-center md:max-w-sm animate-fade-in-up delay-200">
            <div className="absolute inset-0 -translate-y-6 rounded-3xl bg-gradient-to-b from-sky-400/25 via-sky-500/10 to-purple-500/10 blur-2xl animate-pulse-slow" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur transition-all hover:border-sky-500/50 hover:shadow-[0_18px_60px_rgba(56,189,248,0.2)]">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-200">
                  About this site
                </span>
                <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-300">
                  Portfolio
                </span>
              </div>
              <div className="mt-4 space-y-3 text-xs text-slate-300">
                <p>
                  Built with <span className="font-semibold">Next.js</span>,{" "}
                  <span className="font-semibold">TypeScript</span>, and{" "}
                  <span className="font-semibold">Tailwind CSS</span>.
                </p>
                <p className="text-slate-400">
                  Designed to be clean, minimal, and easy to extend as your
                  experience grows.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-[11px]">
                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3">
                  <p className="text-[10px] font-medium text-slate-400">
                    Focus
                  </p>
                  <p className="mt-1 font-medium text-slate-100">
                    Interfaces that feel calm, clear, and intentional.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3">
                  <p className="text-[10px] font-medium text-slate-400">
                    Strengths
                  </p>
                  <p className="mt-1 font-medium text-slate-100">
                    Frontend, design systems, and thoughtful details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About + Skills */}
        <section
          id="about"
          className="grid gap-10 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur-sm transition-all hover:border-slate-700/80 hover:shadow-[0_24px_80px_rgba(15,23,42,1)] sm:p-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)]"
        >
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              About me
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              I enjoy building interfaces that feel intuitive and considered.
              From early wireframes to polished interactions, I like staying
              close to both design and implementation so the final experience
              stays true to the original idea.
            </p>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Outside of coding, you&apos;ll often find me exploring new design
              inspiration, refining small details, or learning tools that help
              teams move faster while keeping quality high.
            </p>
          </div>

          <div id="skills" className="space-y-4 animate-fade-in-up delay-200">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-100 shadow-sm shadow-slate-900/80 transition-all hover:-translate-y-0.5 hover:border-sky-400/70 hover:text-sky-100 hover:shadow-sky-500/20"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-5">
          <div className="flex items-end justify-between gap-4 animate-fade-in-up">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Projects
              </h2>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                A quick look at some things I&apos;ve been working on recently.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.85)] transition-all hover:-translate-y-1 hover:border-sky-400/80 hover:shadow-[0_22px_80px_rgba(8,47,73,0.9)] animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-50 transition-colors group-hover:text-sky-200">
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium text-slate-300 ring-1 ring-slate-700/80 transition-all group-hover:ring-sky-500/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-xs font-medium text-sky-300 transition-all group-hover:text-sky-200 group-hover:gap-2"
                  >
                    View details
                    <span className="transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="grid gap-8 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.95)] backdrop-blur-sm transition-all hover:border-slate-700/80 sm:p-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] animate-fade-in-up"
        >
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Have a project in mind, a role to discuss, or just want to say
              hello? Send a quick note and I&apos;ll get back to you as soon as
              I can.
            </p>
            <p className="text-xs text-slate-400">
              This form is for demo purposes right now. You can connect it to an
              email service or API route later.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-sm text-slate-200"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-medium text-slate-300">
                  Name <span className="text-rose-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className={`w-full rounded-xl border px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 ${
                    status === "error" && !name.trim()
                      ? "border-rose-500/80 bg-slate-900/70 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/60"
                      : "border-slate-700/80 bg-slate-900/70 focus:border-sky-400/90 focus:ring-2 focus:ring-sky-500/60"
                  }`}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-slate-300">
                  Email <span className="text-rose-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className={`w-full rounded-xl border px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 ${
                    status === "error" && !email.trim()
                      ? "border-rose-500/80 bg-slate-900/70 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/60"
                      : "border-slate-700/80 bg-slate-900/70 focus:border-sky-400/90 focus:ring-2 focus:ring-sky-500/60"
                  }`}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-slate-300">
                Message <span className="text-rose-400">*</span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                rows={4}
                className={`w-full resize-none rounded-xl border px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 ${
                  status === "error" && !message.trim()
                    ? "border-rose-500/80 bg-slate-900/70 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/60"
                    : "border-slate-700/80 bg-slate-900/70 focus:border-sky-400/90 focus:ring-2 focus:ring-sky-500/60"
                }`}
                placeholder="Tell me a bit about what you have in mind."
                required
              />
            </div>

            {status === "error" && (
              <p className="text-xs text-rose-400 animate-fade-in">
                Please fill out all fields correctly before sending your message.
              </p>
            )}
            {status === "success" && (
              <p className="text-xs text-emerald-400 animate-fade-in">
                Thanks for reaching out! Your message has been sent.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition-all hover:-translate-y-0.5 hover:bg-sky-300 hover:shadow-sky-500/60 disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:translate-y-0 sm:text-sm"
            >
              {status === "submitting" ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                "Send message"
              )}
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-slate-800/80 pt-5 text-[11px] text-slate-500 sm:flex-row animate-fade-in">
          <p>© {new Date().getFullYear()} Tia Patel. All rights reserved.</p>
          <p className="text-xs">
            Built with <span className="font-medium text-slate-300">Next.js</span>{" "}
            &amp; <span className="font-medium text-slate-300">TypeScript</span>.
          </p>
        </footer>
      </main>
    </div>
  );
}
