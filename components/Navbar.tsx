"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-800/80 bg-slate-950/75 shadow-[0_12px_30px_rgba(2,6,23,0.35)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="section-shell flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-[0.28em] text-slate-100 uppercase transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80 rounded-full">
            Joylin
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80 rounded-full px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 p-2 text-slate-100 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="sr-only">Menu</span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="section-shell pb-4 md:hidden">
            <div className="panel-surface rounded-2xl p-4">
              <div className="flex flex-col gap-2 text-sm text-slate-200">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 transition-colors hover:bg-slate-800/70 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}