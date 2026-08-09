import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
          Featured Projects
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Things I've built.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <ProjectCard
            title="🦻 SoundSense"
            description="AI-powered hearing screening platform that enables accessible hearing assessment through intelligent audio analysis and a scalable web experience."
            technologies={[
              "React",
              "TypeScript",
              "Tailwind",
              "Machine Learning",
            ]}
          />

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