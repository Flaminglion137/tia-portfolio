"use client";

import Image from "next/image";
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
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Background gradient */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,198,255,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(255,214,170,0.26),_transparent_55%)]" />

      <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 pb-16 pt-6 sm:px-8 sm:pt-8 lg:px-10">
        {/* Header / Nav */}
        <header
          className={`sticky top-0 z-50 flex items-center justify-between rounded-2xl border border-zinc-200 bg-white/85 backdrop-blur-md px-5 py-3 transition-all duration-300 ${
            isScrolled ? "shadow-md shadow-zinc-300/50" : ""
          }`}
        >
          <a href="#" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-50 ring-1 ring-zinc-900/5 shadow-md shadow-zinc-400/40 transition-all hover:shadow-zinc-500/60">
              <span className="text-sm font-semibold tracking-tight">TP</span>
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-medium text-zinc-900">Tia Patel</p>
              <p className="text-xs text-zinc-500">Frontend Developer & Designer</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden gap-6 text-xs font-medium text-zinc-600 sm:flex">
            <a
              href="#about"
              className="transition-all hover:text-zinc-900 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="transition-all hover:text-zinc-900 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="transition-all hover:text-zinc-900 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="transition-all hover:text-zinc-900 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="/resume"
              className="transition-all hover:text-zinc-900 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              Résumé
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 rounded-lg p-2 transition-all hover:bg-zinc-100 sm:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-zinc-900 transition-all ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-zinc-900 transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-zinc-900 transition-all ${
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
            <a
              href="/resume"
              className="text-lg font-medium text-slate-300 transition-all hover:text-sky-300 hover:scale-110"
              onClick={() => setMobileMenuOpen(false)}
            >
              Résumé
            </a>
          </nav>
        )}

        {/* Hero / Intro */}
        <section className="flex min-h-[85vh] flex-col items-center justify-center gap-10 text-center animate-fade-in-up">
          <div className="space-y-3">
            <h1 className="bubble-heading bg-gradient-to-r from-purple-600 via-blue-500 to-sky-500 bg-clip-text text-4xl text-transparent sm:text-5xl lg:text-6xl">
              Hi, I&apos;m Tia Patel
            </h1>
            <p className="text-lg text-zinc-700 sm:text-xl">
              I create clean, functional web experiences and explore how global businesses evolve.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-300/50 transition-all hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-600 hover:shadow-blue-400/70"
            >
              View My Work
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/70 px-6 py-2.5 text-sm font-semibold text-blue-600 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Get In Touch
            </a>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center rounded-3xl border border-zinc-200 bg-white/90 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-zinc-100">
              <Image
                src="/tia.jpg"
                alt="Tia Patel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
                priority
              />
            </div>
          </div>
        </section>

        {/* About + Skills */}
        <section
          id="about"
          className="grid gap-10 rounded-3xl border border-zinc-200 bg-white/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)]"
        >
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              About Me
            </h2>
            <p className="text-base font-semibold leading-relaxed text-zinc-800">
              I have a strong interest in international management and how businesses operate on a global scale. Specifically, how large organizations make strategic decisions and adapt their structures in response to global economic, political, and cultural dynamics.
            </p>
            <p className="text-base leading-relaxed text-zinc-700">
              I hope to pursue a career at a multinational company where I can contribute to cross-border collaboration and innovation.
            </p>
          </div>

          <div id="skills" className="space-y-4 animate-fade-in-up delay-200">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-900 shadow-sm shadow-zinc-200 transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-700 hover:shadow-blue-100"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Preview */}
        <section
          id="resume"
          className="grid gap-8 rounded-3xl border border-zinc-200 bg-white/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
        >
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Résumé
            </h2>
            <p className="text-base leading-relaxed text-zinc-700">
              Highlights from my résumé: international management focus, experience in fintech and global conferences, strong analytical and communication skills, and involvement in leadership and volunteering.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 px-5 py-2 text-xs font-semibold text-white shadow-md shadow-blue-300/50 transition hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-600"
              >
                View full résumé
              </a>
              <a
                href="/tia-resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2 text-xs font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600"
              >
                Download PDF
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-inner">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/resume.jpg"
                alt="Résumé preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 460px"
              />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-5">
          <div className="flex items-end justify-between gap-4 animate-fade-in-up">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Projects
              </h2>
              <p className="mt-2 text-sm text-zinc-700 sm:text-base">
                A quick look at some things I&apos;ve been working on recently.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white/95 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-[0_22px_80px_rgba(59,130,246,0.15)] animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-zinc-900 transition-colors group-hover:text-zinc-700">
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-700">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-700 ring-1 ring-zinc-200 transition-all group-hover:ring-zinc-500/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-xs font-medium text-zinc-900 transition-all group-hover:text-zinc-700 group-hover:gap-2"
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
          className="grid gap-8 rounded-3xl border border-zinc-200 bg-white/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all hover:border-zinc-300 sm:p-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] animate-fade-in-up"
        >
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Contact
            </h2>
            <p className="text-sm leading-relaxed text-zinc-700 sm:text-base">
              Have a project in mind, a role to discuss, or just want to say
              hello? Send a quick note and I&apos;ll get back to you as soon as
              I can.
            </p>
            <p className="text-xs text-zinc-500">
              This form is for demo purposes right now. You can connect it to an
              email service or API route later.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-sm text-zinc-900"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-medium text-zinc-700">
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
                  className={`w-full rounded-xl border px-3 py-2 text-sm text-zinc-900 outline-none ring-0 transition-all placeholder:text-zinc-400 ${
                    status === "error" && !name.trim()
                      ? "border-rose-400 bg-rose-50 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                      : "border-zinc-200 bg-white focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                  }`}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-zinc-700">
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
                  className={`w-full rounded-xl border px-3 py-2 text-sm text-zinc-900 outline-none ring-0 transition-all placeholder:text-zinc-400 ${
                    status === "error" && !email.trim()
                      ? "border-rose-400 bg-rose-50 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                      : "border-zinc-200 bg-white focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                  }`}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-zinc-700">
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
                className={`w-full resize-none rounded-xl border px-3 py-2 text-sm text-zinc-900 outline-none ring-0 transition-all placeholder:text-zinc-400 ${
                  status === "error" && !message.trim()
                    ? "border-rose-400 bg-rose-50 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-zinc-200 bg-white focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                }`}
                placeholder="Tell me a bit about what you have in mind."
                required
              />
            </div>

            {status === "error" && (
              <p className="text-xs text-rose-500 animate-fade-in">
                Please fill out all fields correctly before sending your message.
              </p>
            )}
            {status === "success" && (
              <p className="text-xs text-emerald-600 animate-fade-in">
                Thanks for reaching out! Your message has been sent.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-zinc-300/60 transition-all hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-zinc-400/70 disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:translate-y-0 sm:text-sm"
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
        <footer className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-5 text-[11px] text-zinc-500 sm:flex-row animate-fade-in">
          <p>© {new Date().getFullYear()} Tia Patel. All rights reserved.</p>
          <p className="text-xs">
            Built with <span className="font-medium text-zinc-800">Next.js</span>{" "}
            &amp; <span className="font-medium text-zinc-800">TypeScript</span>.
          </p>
        </footer>
      </main>
    </div>
  );
}
