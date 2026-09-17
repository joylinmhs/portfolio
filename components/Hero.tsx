"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-20 md:pb-28">
      <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.12),transparent_60%)]" />
      <div className="absolute right-12 top-20 h-52 w-52 rounded-full bg-violet-500/6 blur-[120px]" />
      <div className="absolute left-8 top-40 h-48 w-48 rounded-full bg-sky-500/8 blur-[120px]" />

      <div className="section-shell relative mx-auto grid min-h-[78vh] items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.28em] text-sky-300/80">
            Hello, I&apos;m Joylin Mathias
          </p>

          <h1 className="text-4xl font-semibold tracking-[-0.06em] text-slate-50 md:text-6xl lg:text-7xl">
            Building thoughtful software at the intersection of AI, engineering, and real-world problems.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            I&apos;m a Computer Science student interested in AI, modern web development,
            and building technology that solves meaningful problems with clarity and care.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 shadow-[0_12px_32px_rgba(255,255,255,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80"
            >
              View Projects
            </a>
            <a
              href="/resume/resume.pdf"
              className="rounded-full border border-sky-300/40 bg-sky-500/12 px-5 py-3 text-sm font-medium text-sky-100 shadow-[0_0_30px_rgba(56,189,248,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200/70 hover:bg-sky-500/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-400/10 via-violet-500/8 to-transparent blur-2xl" />
            <div className="panel-surface relative overflow-hidden rounded-[2rem] p-3 shadow-[0_18px_60px_rgba(15,23,42,0.65)]">
              <div className="flex h-[420px] items-center justify-center rounded-[1.5rem] border border-slate-700/60 bg-[radial-gradient(circle_at_top,#1e293b_0%,#0f172a_42%,#020617_100%)] text-center text-slate-400">
                <div className="space-y-3 px-10">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-slate-600/70 text-lg text-slate-200">JP</div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Add profile photo</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}