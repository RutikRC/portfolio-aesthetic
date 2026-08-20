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
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-slate-100 dark:text-slate-100 light:text-slate-800 transition-colors duration-500">
      {/* Background Layer */}
      <BackgroundGrid />

      {/* Navigation Header */}
      <Navbar />

      {/* Sections Wrapper */}
      <main className="relative z-10 mx-auto flex flex-col items-center">
        {/* Hero Section */}
        <Hero />

        {/* Section Divider Grid Accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/5 light:via-black/10 max-w-7xl mx-auto" />

        {/* About Narrative Section */}
        <About />

        {/* Section Divider Grid Accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/5 light:via-black/10 max-w-7xl mx-auto" />

        {/* Skills Matrix Section */}
        <Skills />

        {/* Section Divider Grid Accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/5 light:via-black/10 max-w-7xl mx-auto" />

        {/* Technical Architecture Playground */}
        <TechnicalDepth />

        {/* Section Divider Grid Accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/5 light:via-black/10 max-w-7xl mx-auto" />

        {/* Experience Timeline Section */}
        <Experience />

        {/* Section Divider Grid Accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/5 light:via-black/10 max-w-7xl mx-auto" />

        {/* Projects Grid Section */}
        <Projects />

        {/* Section Divider Grid Accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/5 light:via-black/10 max-w-7xl mx-auto" />

        {/* Certs and Education Section */}
        <Education />

        {/* Section Divider Grid Accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/5 light:via-black/10 max-w-7xl mx-auto" />

        {/* Contact details & form */}
        <Contact />
      </main>

      {/* Simple Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#0b0c10]/40 py-8 dark:border-white/5 dark:bg-[#0b0c10]/40 light:border-black/5 light:bg-slate-100/50">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <span className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
            RC.DEV // RUTIK RAVINDRA CHAVAN
          </span>
          <span className="font-mono text-[10px] text-slate-500">
            © {new Date().getFullYear()} All Rights Reserved. Built with React & Tailwind CSS.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
