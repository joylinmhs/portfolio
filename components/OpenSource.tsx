"use client";

import { motion } from "framer-motion";

export default function OpenSource() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="panel-surface rounded-[2rem] p-6 md:p-8"
        >
          <p className="eyebrow">Open Source</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
            Contributing through real collaboration.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            I&apos;ve contributed to open-source work by handling issues, improving code, and using
            Git and GitHub workflows in a practical collaborative setting. That experience has
            shaped how I approach branching, review, and iterative development in teams.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Issue resolution",
              "Code improvements",
              "Pull requests",
              "GitHub workflows",
              "Branching",
              "Collaboration",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://github.com/joylinmhs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-slate-500 hover:bg-slate-800/70"
            >
              View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
