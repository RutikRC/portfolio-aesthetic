import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Box, GitBranch, Bot, CreditCard } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { useReducedMotion } from "../../hooks";

const PROJECT_ICONS = {
  Protocol: Box,
  Infrastructure: GitBranch,
  "Agentic AI": Bot,
  Fintech: CreditCard,
};

const ACCENT_TONES = {
  Protocol: {
    icon: "bg-violet-500/10 text-violet-300",
    border: "hover:border-violet-500/40",
    glow: "bg-violet-500/10",
  },
  Infrastructure: {
    icon: "bg-cyan-500/10 text-cyan-300",
    border: "hover:border-cyan-500/40",
    glow: "bg-cyan-500/10",
  },
  "Agentic AI": {
    icon: "bg-fuchsia-500/10 text-fuchsia-300",
    border: "hover:border-fuchsia-500/40",
    glow: "bg-fuchsia-500/10",
  },
  Fintech: {
    icon: "bg-emerald-500/10 text-emerald-300",
    border: "hover:border-emerald-500/40",
    glow: "bg-emerald-500/10",
  },
};

export default function Projects() {
  const { projects } = portfolioData;
  const [expanded, setExpanded] = useState(null);
  const reduce = useReducedMotion();

  const toggle = (index) => setExpanded(expanded === index ? null : index);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 md:px-10 md:py-32"
    >
      <div className="text-left">
        <span className="u-eyebrow">06 // Selected Work</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Engineering that <span className="u-gradient-text">moves systems</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-[15px]">
          A selection of the systems I have designed and shipped — protocol servers, event
          buses, AI automation cores, and payment infrastructure.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const isExpanded = expanded === index;
            const tone = ACCENT_TONES[project.accent] || ACCENT_TONES.Protocol;
            const Icon = PROJECT_ICONS[project.accent] || Box;

            return (
              <motion.div
                key={index}
                layout
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.08 }}
                className={`u-card u-card-hover group relative flex cursor-pointer flex-col overflow-hidden p-6 md:p-7 ${tone.border}`}
                onClick={() => toggle(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(index);
                  }
                }}
                aria-expanded={isExpanded}
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${tone.glow}`}
                />

                <div className="flex items-start justify-between">
                  <div className={`rounded-xl p-3 ${tone.icon}`}>
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">
                    {String(index + 1).padStart(2, "·")}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {project.problem && (
                  <div className="mt-4 rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Problem
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {project.problem}
                    </p>
                  </div>
                )}

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={reduce ? undefined : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={reduce ? undefined : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 border-t border-white/5 pt-4">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          System design
                        </span>
                        <p className="mt-2 text-xs leading-relaxed text-slate-400">
                          {project.details}
                        </p>

                        <span className="mt-4 block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Key outcomes
                        </span>
                        <ul className="mt-2 space-y-2">
                          {project.highlights.map((h, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-start gap-2 text-xs leading-relaxed text-slate-400"
                            >
                              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-violet-500" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] font-medium text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 transition-colors group-hover:text-violet-300">
                  <span>{isExpanded ? "Close system details" : "View architecture detail"}</span>
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}