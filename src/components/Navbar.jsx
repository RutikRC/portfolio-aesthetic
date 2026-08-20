import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useTheme, useReducedMotion } from "../hooks";
import { portfolioData } from "../data/portfolioData";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#skills" },
  { name: "Architecture", href: "#playground" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const reduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { github, linkedin } = portfolioData.personal;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      let current = "";
      const offset = 140;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.href.slice(1));
        if (el && el.offsetTop <= window.scrollY + offset) {
          current = item.href.slice(1);
        }
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        current = "contact";
      }
      setActiveSection((prev) => (prev === current ? prev : current));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close drawer on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const headerMotion = reduce
    ? {}
    : {
        initial: { y: -80, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <>
      <motion.header
        {...headerMotion}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-[#090a0f]/80"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 md:px-10"
          aria-label="Primary navigation"
        >
          {/* Logo / monogram */}
          <a
            href="#top"
            className={`group flex items-center gap-2.5 py-5 ${
              scrolled ? "" : ""
            }`}
            aria-label="Back to top"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 font-mono text-[11px] font-bold text-violet-600 dark:text-violet-300 transition-all duration-300 group-hover:border-violet-500/60 group-hover:shadow-glow">
              RC
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              rc.dev
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative rounded-md px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    active
                      ? "text-violet-600 dark:text-violet-300"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-violet-500/70"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
              aria-label="GitHub profile"
            >
              <Github size={17} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={17} />
            </a>

            <button
              onClick={toggleTheme}
              className="rounded-lg border border-slate-200 p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="#contact"
              className="group ml-2 flex items-center gap-1.5 rounded-lg border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-[13px] font-semibold text-violet-600 transition-all hover:bg-violet-500/20 dark:text-violet-300"
            >
              Hire Me
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-lg border border-slate-200 p-2 text-slate-500 dark:border-white/10 dark:text-slate-400"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg border border-slate-200 p-2 text-slate-500 dark:border-white/10 dark:text-slate-400"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Scrim */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              initial={reduce ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduce ? undefined : { x: "100%" }}
              transition={{ type: "spring", bounce: 0.08, duration: 0.45 }}
              className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col border-l border-slate-200 bg-white px-6 pb-8 pt-24 dark:border-white/10 dark:bg-[#0b0c10]"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={reduce ? false : { opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduce ? 0 : 0.08 + i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between rounded-lg px-3 py-3 text-lg font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-violet-600 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-violet-300"
                  >
                    {item.name}
                    <ArrowUpRight
                      size={16}
                      className="text-slate-400 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto space-y-4">
                <div className="h-px bg-slate-200 dark:bg-white/10" />

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg border border-slate-200 p-2.5 text-slate-500 dark:border-white/10 dark:text-slate-400"
                      aria-label="GitHub profile"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg border border-slate-200 p-2.5 text-slate-500 dark:border-white/10 dark:text-slate-400"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-transform active:scale-[0.98]"
                >
                  Hire Me
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}