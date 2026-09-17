"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Building software with curiosity, purpose, and continuous learning.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I&apos;m a Computer Science student who enjoys turning ideas into software with a
              clear purpose. I like working on problems that are technically interesting,
              practically useful, and worth understanding deeply.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              My interests sit at the intersection of AI, engineering, and human-centered
              product thinking. I&apos;m especially drawn to systems that combine research,
              product intuition, and real-world impact.
            </p>
          </div>

          <div className="panel-surface rounded-[2rem] p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Perspective</p>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              I like building things that teach me something new, challenge the way I think,
              and help people work more effectively.
            </p>
            <p className="mt-6 border-t border-slate-700/80 pt-5 text-base italic leading-8 text-slate-300">
              Driven by curiosity, guided by faith, and committed to building technology that serves people.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}