"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">Education</p>

          <div className="panel-surface mt-8 rounded-[2rem] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xl font-semibold text-white md:text-2xl">St Joseph Engineering College</p>
                <p className="mt-2 text-base text-slate-300">
                  Bachelor of Engineering in Computer Science
                </p>
              </div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Sep 2023 – Present</p>
            </div>

            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-slate-400">Mangalore, Karnataka</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Data Structures",
                "OOP",
                "DBMS",
                "Operating Systems",
                "Computer Networks",
                "Artificial Intelligence",
                "Machine Learning",
                "Software Engineering",
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
