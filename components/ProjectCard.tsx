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
    <div className="rounded-3xl border border-gray-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gray-700">
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
            className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}