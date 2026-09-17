"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Email Me", href: "mailto:joylinmathias30@gmail.com" },
  { label: "GitHub", href: "https://github.com/joylinmhs" },
  { label: "LinkedIn", href: "https://linkedin.com/in/joylin-mathias" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="panel-surface rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            I&apos;m always open to thoughtful engineering work, good product conversations, and
            projects that sit at the intersection of AI, software, and real-world impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full bg-slate-100 px-5 py-3 text-sm font-medium text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
