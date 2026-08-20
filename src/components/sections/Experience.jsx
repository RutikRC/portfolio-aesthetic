import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { useReducedMotion } from "../../hooks";

const ACCENT_TONES = {
  "AI Engineering": {
    dot: "bg-fuchsia-500",
    border: "hover:border-fuchsia-500/40",
    tag: "bg-fuchsia-500/10 text-fuchsia-300",
  },
  "AI Systems": {
    dot: "bg-violet-500",
    border: "hover:border-violet-500/40",
    tag: "bg-violet-500/10 text-violet-300",
  },
  "Backend Systems": {
    dot: "bg-indigo-500",
    border: "hover:border-indigo-500/40",
    tag: "bg-indigo-500/10 text-indigo-300",
  },
};

export default function Experience() {
  const { experience } = portfolioData;
  const reduce = useReducedMotion();

  const containerVariant = {
    hidden: reduce ? undefined : {},
    show: reduce ? undefined : { transition: { staggerChildren: 0.15 } },
  };

  const itemVariant = {
    hidden: reduce ? undefined : { opacity: 0, y: 30 },
    show: reduce
      ? undefined
      : { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 md:px-10 md:py-32"
    >
      <div className="text-left">
        <span className="u-eyebrow">05 // Professional Track Record</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          A career built on <span className="u-gradient-text">shipping</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-[15px]">
          From corporate product engineering to founding an independent practice — every role
          has been about building reliable systems and owning the outcome.
        </p>

        <motion.div
          variants={containerVariant}
          initial={reduce ? undefined : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-16 space-y-12 border-l border-white/10 pl-6 md:pl-10"
        >
          {experience.map((job, index) => {
            const tone = ACCENT_TONES[job.accent] || ACCENT_TONES["Backend Systems"];
            return (
              <motion.div key={index} variants={itemVariant} className="relative group">
                <div
                  className={`absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-[#090a0f] bg-slate-600 transition-all duration-300 group-hover:scale-125 md:-left-[47px] ${tone.dot}`}
                />

                <div
                  className={`u-card u-card-hover relative overflow-hidden p-6 md:p-8 ${tone.border}`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/5 blur-2xl" />

                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-white">
                          {job.role}
                        </h3>
                        <span
                          className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-semibold ${tone.tag}`}
                        >
                          {job.accent}
                        </span>
                      </div>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-slate-300">
                        <span className="text-violet-300">{job.company}</span>
                        {job.type && (
                          <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-medium text-slate-400">
                            {job.type}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] font-bold text-slate-400">
                        <Calendar size={12} />
                        {job.period}
                      </span>
                      {job.location && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
                          <MapPin size={12} />
                          {job.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-4 text-sm font-medium leading-relaxed text-slate-300">
                    {job.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {job.description.map((bullet, bulletIdx) => (
                      <li
                        key={bulletIdx}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-400"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] font-medium text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}