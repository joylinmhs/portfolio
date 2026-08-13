import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
          Featured Projects
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Things I've built.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Featured SoundSense Card */}
          <div className="md:col-span-2 rounded-[2rem] border border-gray-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-10 shadow-2xl shadow-blue-500/5">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              ⭐ Featured Project
            </p>

            <h3 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              🦻 SoundSense
            </h3>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-400">
              AI-powered hearing screening platform that enables accessible
              hearing assessment through intelligent audio analysis, responsive
              web design, and scalable deployment for real-world usability.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Tailwind",
                "Machine Learning",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10"
              >
                View Live Demo
              </a>

              <a
                href="#"
                className="rounded-full border border-gray-700 px-6 py-3 text-white transition-colors hover:border-white"
              >
                View GitHub
              </a>
            </div>
          </div>

          {/* Other Projects */}
          <ProjectCard
            title="🤖 Multi-Agent AI Research Assistant"
            description="Autonomous AI agents that collaborate to research, summarize, and organize information efficiently."
            technologies={["Python", "AI Agents", "GitHub"]}
          />

          <ProjectCard
            title="💧 Water Intake Tracker"
            description="Responsive web application for tracking daily hydration goals with a clean and mobile-friendly interface."
            technologies={["React", "Tailwind", "Vercel"]}
          />

          <ProjectCard
            title="🌐 ShadowFox Web Development Projects"
            description="Frontend web projects built during my ShadowFox internship using modern web technologies and responsive design principles."
            technologies={["HTML", "CSS", "JavaScript", "React"]}
          />
        </div>
      </div>
    </section>
  );
}