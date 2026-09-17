import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGrid from "@/components/CursorGrid";
import "@/components/CursorGrid.css";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-100 mix-blend-screen">
        <CursorGrid
          cellSize={64}
          color="#8ec5ff"
          radius={260}
          falloff="smooth"
          holdTime={680}
          fadeDuration={900}
          lineWidth={1.5}
          maxOpacity={1.8}
          fillOpacity={0.14}
          gridOpacity={0.22}
          cellRadius={4}
          clickPulse={false}
          pulseSpeed={240}
          className=""
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}