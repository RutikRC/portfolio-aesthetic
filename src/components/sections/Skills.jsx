import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useReducedMotion } from "../../hooks";

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const reduce = useReducedMotion();

  const active = skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];

  const categoryIcons = {
    core: "⌘",
    backend: "⚙",
    ai: "✦",
    frontend: "◇",
    data: "▤",
    infra: "☁",
    quality: "✓",
  };

  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 md:px-10 md:py-32">
      <div className="text-left">
        <span className="u-eyebrow">03 // Technical Expertise</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
          A precise engineering <span className="u-gradient-text">stack</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px]">
          Every technology here is part of the systems I design and ship — from typed backend
          code to LLM tool orchestration and cloud delivery pipelines.
        </p>

        {/* Category tabs */}
        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Technology categories"
        >
          {skillCategories.map((cat) => {
            const activeTab = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeTab}
                aria-controls={`panel-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  activeTab
                    ? "border-violet-500/40 bg-violet-500/10 text-violet-600 shadow-glow dark:text-violet-300"
                    : "border-slate-200 bg-white/50 text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-white"
                }`}
              >
                <span className="font-mono text-[13px] leading-none">{categoryIcons[cat.id]}</span>
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Active category header */}
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{active.label}</h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">{active.tagline}</p>
          </div>
          <span className="font-mono text-[11px] text-slate-400 dark:text-slate-600">
            {active.tools.length} technologies
          </span>
        </div>

        {/* Tool grid */}
        <div
          key={active.id}
          className="mt-6"
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-label={`${active.label} technologies`}
        >
          <motion.div
            layout
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {active.tools.map((tool) => (
                <motion.div
                  layout
                  key={tool.name}
                  initial={reduce ? undefined : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white/50 p-5 transition-all duration-300 hover:border-violet-500/30 hover:bg-white hover:shadow-card-hover dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-violet-500/30 dark:hover:bg-white/[0.06]"
                >
                  {/* decorative corner dot grid on hover */}
                  <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-violet-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                          {tool.name}
                        </span>
                      </div>
                      <span className="mt-1 inline-block rounded bg-violet-500/10 px-1.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
                        {tool.role}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-300 transition-colors group-hover:text-violet-400 dark:text-slate-600">
                      {String(active.tools.length).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {tool.note}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footnote summary of full breadth */}
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-slate-200 bg-white/40 px-5 py-4 dark:border-white/5 dark:bg-white/[0.02]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Full coverage
          </span>
          {[
            "Languages",
            "Backend",
            "AI / LLM",
            "Frontend",
            "Databases",
            "Cloud & DevOps",
            "Testing",
            "Tools",
          ].map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-slate-500 dark:text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}