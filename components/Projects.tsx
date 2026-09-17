import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Selected work with technical depth.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 md:text-base">
            I focus on projects that combine real problems, interesting systems, and hands-on engineering.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <ProjectCard
            title="Multi-Agent AI Research Assistant"
            description="What started as an exploration of AI agents evolved into a full-stack research system designed to make working with information more intelligent. The project combines retrieval, summarization, and conversational memory to help move from raw documents to grounded answers with clearer context."
            technologies={["Python", "FastAPI", "React.js", "LangChain", "ChromaDB", "RAG"]}
            badge="Currently Building"
            accent="sky"
            actions={[
              { label: "GitHub", href: "#todo", variant: "secondary" },
              { label: "Live Demo", href: "#todo", variant: "primary" },
            ]}
          >
            <div className="mt-7 rounded-[1.5rem] border border-slate-700 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Architecture</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Specialized agents work together around document retrieval and contextual question answering, supported by vector embeddings, semantic search, and fact verification workflows.
              </p>
            </div>
          </ProjectCard>

          <div className="grid gap-6 xl:grid-cols-2">
            <ProjectCard
              title="SoundSense"
              description="SoundSense explores how AI can support accessible hearing screening by analyzing sound patterns and turning them into understandable, practical feedback. It was a meaningful attempt to apply technology to a health-related problem with a strong user-facing experience."
              technologies={["Machine Learning", "Web Development", "Vercel", "Audio Analysis", "Result Visualization"]}
              badge="Third Place · Project Exhibition"
              accent="violet"
              actions={[
                { label: "GitHub", href: "#todo", variant: "secondary" },
                { label: "Live Demo", href: "#todo", variant: "primary" },
              ]}
            >
              <div className="mt-7 rounded-[1.5rem] border border-violet-500/20 bg-violet-500/5 p-4 text-sm leading-7 text-slate-300">
                Recognized with Third Place at the Project Exhibition for its application of technology to accessible hearing screening.
              </div>
            </ProjectCard>

            <ProjectCard
              title="Sanjeevani / Project Phoenix"
              description="Built during the SJEC Winter Hackathon, Sanjeevani looks at how digital systems can make emergency healthcare resources easier to discover when time matters. The experience combined frontend and backend work with a healthcare-oriented product mindset, map-based discovery, and resource coordination."
              technologies={["React", "Tailwind CSS", "Framer Motion", "Firebase", "Firestore", "Google Maps"]}
              badge="SJEC Winter Hackathon"
              accent="emerald"
              actions={[
                { label: "GitHub", href: "https://github.com/joylinmhs/WinterHackathon-ProjectPhoenix", variant: "secondary" },
              ]}
            >
              <div className="mt-7 rounded-[1.5rem] border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm leading-7 text-slate-300">
                Features included nearby hospital discovery, emergency resource visibility, ICU and oxygen availability checks, and guidance for critical situations.
              </div>
            </ProjectCard>
          </div>
        </div>
      </div>
    </section>
  );
}