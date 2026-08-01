"use client";
import { motion } from "framer-motion"
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="absolute right-10 bottom-20 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />
      <motion.div 
        className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="mb-4 text-lg text-gray-400">
          Hello,
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          I'm Joylin Mathias
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
          Final-year Computer Science student passionate about AI,
          software engineering, and building meaningful digital experiences.
        </p>

        <div className="mt-10 flex flex-row flex-wrap justify-center gap-4">
          <button className="rounded-full bg-white px-6 py-3 text-black font-medium transition transition-all duration-300 hover:scale-105 hover:shadow-xl">
            View Projects
          </button>
        <button className="rounded-full border border-gray-600 px-6 py-3 text-white transition hover:border-white">
          Download Resume
        </button>
      </div>
    </motion.div>
  </section>
  );
}