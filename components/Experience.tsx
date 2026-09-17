"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">Experience</p>

          <div className="panel-surface mt-8 rounded-[2rem] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xl font-semibold text-white md:text-2xl">ShadowFox</p>
                <p className="mt-2 text-base text-slate-300">Web Development Intern</p>
              </div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">2025 · Remote</p>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              My internship at ShadowFox gave me a more grounded view of how frontend work
              actually comes together in practice. I was exposed to responsive interfaces,
              component-based thinking, debugging, and deployment workflows, and it helped me
              sharpen how I approach building software that needs to work well beyond a demo.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React",
                "JavaScript",
                "Responsive UI",
                "Debugging",
                "Git/GitHub",
                "Deployment",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
