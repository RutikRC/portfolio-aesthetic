import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="experience" className="py-20 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
      <div className="text-left">
        {/* Section Header */}
        <span className="font-mono text-xs font-semibold tracking-widest text-violet-400 uppercase">
          04 // Timeline
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white mt-2 sm:text-4xl dark:text-white light:text-slate-900">
          Professional Track Record
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-xl dark:text-slate-400 light:text-slate-600">
          A history of constructing resilient backend servers, deploying production automation tools, and designing AI pipelines.
        </p>

        {/* Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 relative border-l border-white/5 pl-6 md:pl-10 space-y-12 dark:border-white/5 light:border-black/10"
        >
          {experience.map((job, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 border-[#0b0c10] bg-slate-800 transition-all duration-300 group-hover:bg-violet-500 group-hover:border-violet-400 group-hover:scale-125 light:bg-slate-300 light:border-white" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                {/* Title and Organization */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors dark:text-white light:text-slate-950">
                    {job.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <span className="text-violet-400">{job.company}</span>
                    {job.type && (
                      <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-slate-400 dark:bg-white/5 light:bg-slate-100 light:text-slate-600">
                        {job.type}
                      </span>
                    )}
                  </div>
                </div>

                {/* Period / Date Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 font-mono text-[10px] font-bold text-slate-400 dark:bg-white/5 light:bg-slate-100 light:text-slate-600">
                  <Calendar size={12} />
                  {job.period}
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="mt-6 space-y-3 pl-4 list-disc text-xs leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
                {job.description.map((bullet, bulletIdx) => {
                  // Highlight key metrics dynamically in the UI
                  const highlightedText = bullet
                    .replace("approximately 35%", "**approximately 35%**")
                    .replace("up to 40%", "**up to 40%**")
                    .replace("approximately 25%", "**approximately 25%**")
                    .replace("approximately 30%", "**approximately 30%**")
                    .replace("approximately 50%", "**approximately 50%**");

                  return (
                    <li key={bulletIdx} className="marker:text-violet-500">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: highlightedText
                            .replace(/\*\*(.*?)\*\*/g, '<span class="text-violet-300 dark:text-violet-300 light:text-violet-700 font-bold">$1</span>'),
                        }}
                      />
                    </li>
                  );
                })}
              </ul>

              {/* Used Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-white/5 px-2 py-1 font-mono text-[9px] font-bold text-slate-400 dark:bg-white/5 light:bg-slate-100 light:text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Connector line overlay */}
              {index < experience.length - 1 && (
                <div className="absolute left-[-24px] md:left-[-40px] top-6 bottom-[-48px] w-[1px] bg-gradient-to-b from-violet-500/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
