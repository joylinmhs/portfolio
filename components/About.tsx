"use client";
import {motion} from "framer-motion";
export default function About() {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
          ABOUT
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          Building software with curiosity,
          purpose, and continuous learning.
        </h2>
        <p className="mt-10 max-w-3xl text-lg leading-9 text-gray-400">
          I'm a final-year Computer Science student who enjoys turning ideas into
          thoughtful software. From AI-powered healthcare solutions to full-stack web
          applications and open-source contributions, I enjoy building technology that
          solves meaningful problems while continuously learning and growing as an
          engineer.
        </p>
        <p className="mt-8 max-w-2xl text-base italic text-gray-500">
          Driven by curiosity, guided by faith, and committed to building technology
          that serves people.
        </p>
      </motion.div>
    </section>
  );
}