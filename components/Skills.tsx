"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "C", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Frontend & Web",
    items: ["React.js", "Tailwind CSS", "FastAPI", "RAG", "LLMs", "Machine Learning"],
  },
  {
    title: "AI / ML",
    items: ["LangChain", "ChromaDB", "RAG", "LLMs", "Machine Learning", "Semantic Search"],
  },
  {
    title: "Developer Tools",
    items: ["VS Code", "Git", "GitHub", "MySQL Workbench", "Google Cloud Platform"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">Skills</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            Tools and systems I use to build and learn.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className="panel-surface rounded-[1.75rem] p-5"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-300/80">
                  {group.title}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(148,163,184,0.08)] transition-colors duration-200 hover:border-slate-500 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}