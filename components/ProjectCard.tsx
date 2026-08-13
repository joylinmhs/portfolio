type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="group rounded-3xl border border-gray-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10">
      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-gray-400">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300 transition-colors group-hover:border-gray-600 group-hover:text-white"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        <a
          href="#"
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
        >
          Live Demo
        </a>

        <a
          href="#"
          className="rounded-full border border-gray-700 px-5 py-2 text-sm text-white transition-colors hover:border-white"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}