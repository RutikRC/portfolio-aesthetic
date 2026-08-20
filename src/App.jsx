import Navbar from "./components/Navbar";
import BackgroundGrid from "./components/BackgroundGrid";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import TechnicalDepth from "./components/sections/TechnicalDepth";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import { ArrowUp } from "lucide-react";
import "./App.css";

const DIVIDER =
  "mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent";

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#090a0f]/40 py-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:px-6 md:flex-row md:px-10">
        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
          RC.DEV // RUTIK RAVINDRA CHAVAN
        </span>
        <span className="font-mono text-[10px] text-slate-600">
          © {new Date().getFullYear()} — Built with React, Tailwind & Framer Motion
        </span>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium text-slate-500 transition-colors hover:text-violet-300"
          aria-label="Back to top"
        >
          Back to top
          <ArrowUp size={12} />
        </a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="u-noise relative min-h-screen w-full overflow-x-hidden text-slate-100">
      <BackgroundGrid />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className={DIVIDER} />
        <About />
        <div className={DIVIDER} />
        <Skills />
        <div className={DIVIDER} />
        <TechnicalDepth />
        <div className={DIVIDER} />
        <Experience />
        <div className={DIVIDER} />
        <Projects />
        <div className={DIVIDER} />
        <Education />
        <div className={DIVIDER} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;