export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-lg text-gray-400">
          Hello 👋
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          I'm Joylin Mathias
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
          Final-year Computer Science student passionate about AI,
          software engineering, and building meaningful digital experiences.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-white px-6 py-3 text-black font-medium transition hover:scale-105">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}