"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  badge?: string;
  status?: string;
  accent?: "sky" | "violet" | "emerald";
  actions?: { label: string; href: string; variant?: "primary" | "secondary" }[];
  children?: ReactNode;
};

const accentMap = {
  sky: {
    glow: "from-sky-400/18 via-sky-500/8 to-transparent",
    border: "border-sky-400/25",
    badge: "text-sky-200 bg-sky-500/10 border-sky-500/25",
  },
  violet: {
    glow: "from-violet-400/18 via-violet-500/8 to-transparent",
    border: "border-violet-400/25",
    badge: "text-violet-200 bg-violet-500/10 border-violet-500/25",
  },
  emerald: {
    glow: "from-emerald-400/18 via-emerald-500/8 to-transparent",
    border: "border-emerald-400/25",
    badge: "text-emerald-200 bg-emerald-500/10 border-emerald-500/25",
  },
};

export default function ProjectCard({
  title,
  description,
  technologies,
  badge,
  status,
  accent = "sky",
  actions = [],
  children,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-[2rem] border bg-slate-950/80 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.42)] md:p-7 ${accentMap[accent].border}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accentMap[accent].glow}`} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />

      <div className="relative z-10">
        {badge && (
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className={`inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] ${accentMap[accent].badge}`}>
              {badge}
            </span>
            {status && <span className="text-xs uppercase tracking-[0.14em] text-slate-400">{status}</span>}
          </div>
        )}

        <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white md:text-[2rem]">
          {title}
        </h3>

        <p className="mt-5 text-base leading-8 text-slate-300">{description}</p>

        {children}

        <div className="mt-8 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {actions.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                className={
                  action.variant === "primary"
                    ? "rounded-full bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
                    : "rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-slate-500 hover:bg-slate-800/80"
                }
              >
                {action.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}