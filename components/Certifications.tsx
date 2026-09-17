"use client";

import { motion } from "framer-motion";

const certs = [
  "Introduction to Cybersecurity",
  "Generative AI with Large Language Models",
  "Google Cloud Computing Foundations achievement badges",
];

export default function Certifications() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">Certifications</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {certs.map((item) => (
              <div key={item} className="panel-surface rounded-[1.5rem] p-5">
                <p className="text-base font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
