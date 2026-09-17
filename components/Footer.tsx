export default function Footer() {
  return (
    <footer className="py-10">
      <div className="section-shell flex flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-medium text-slate-200">Joylin Mathias</p>
          <p className="mt-1">Building with curiosity, purpose, and continuous learning.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href="https://github.com/joylinmhs" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/joylin-mathias" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
          <a href="mailto:joylinmathias30@gmail.com" className="transition-colors hover:text-white">Email</a>
        </div>

        <p>© 2026 Joylin Mathias</p>
      </div>
    </footer>
  );
}
