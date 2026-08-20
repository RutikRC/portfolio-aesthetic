import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
      <div className="text-left">
        {/* Section Header */}
        <span className="font-mono text-xs font-semibold tracking-widest text-violet-400 uppercase">
          05 // Projects
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white mt-2 sm:text-4xl dark:text-white light:text-slate-900">
          Featured Engineering Work
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-xl dark:text-slate-400 light:text-slate-600">
          A collection of backend services, protocol integration utilities, and automation engines built for client workflows.
        </p>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index;

            return (
              <motion.div
                key={index}
                layout
                onClick={() => toggleExpand(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-[#12131a]/60 p-6 transition-all duration-300 hover:border-violet-500/20 hover:bg-[#12131a]/90 dark:border-white/5 dark:bg-[#12131a]/60 light:border-black/10 light:bg-slate-50 light:hover:bg-white"
              >
                {/* Visual Glow on Hover */}
                <div className="absolute top-0 right-0 h-[100px] w-[100px] bg-violet-600/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-violet-500/10 px-2 py-0.5 font-mono text-[9px] font-medium text-violet-300 dark:text-violet-300 light:text-violet-700 light:bg-violet-100"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[9px] font-medium text-slate-400 dark:bg-white/5 light:bg-slate-100 light:text-slate-600">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors dark:text-white light:text-slate-900">
                      {project.name}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-3 text-xs leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
                      {project.description}
                    </p>
                  </div>

                  {/* Expandable Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 border-t border-white/5 pt-4 text-left overflow-hidden dark:border-white/5 light:border-black/5"
                      >
                        <h4 className="text-xs font-mono font-bold text-slate-300 dark:text-slate-300 light:text-slate-800">
                          SYSTEM DESIGN DETAIL
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
                          {project.details}
                        </p>

                        <h4 className="mt-4 text-xs font-mono font-bold text-slate-300 dark:text-slate-300 light:text-slate-800">
                          CORE IMPLEMENTATION OUTCOMES
                        </h4>
                        <ul className="mt-2 space-y-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 list-disc pl-4">
                          {project.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="marker:text-violet-400">
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded bg-white/5 px-2 py-0.5 font-mono text-[9px] text-slate-400 dark:bg-white/5 light:bg-slate-100 light:text-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer action toggle */}
                  <div className="mt-6 flex items-center justify-between font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wide group-hover:text-slate-400">
                    <span className="flex items-center gap-1">
                      {isExpanded ? "Close System Details" : "View Architecture Detail"}
                    </span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
