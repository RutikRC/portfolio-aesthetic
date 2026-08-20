import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle, Calendar } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { useReducedMotion } from "../../hooks";

export default function Education() {
  const { certifications, education } = portfolioData;
  const reduce = useReducedMotion();

  const containerVariant = {
    hidden: reduce ? undefined : {},
    show: reduce ? undefined : { transition: { staggerChildren: 0.12 } },
  };

  const itemVariant = {
    hidden: reduce ? undefined : { opacity: 0, y: 20 },
    show: reduce
      ? undefined
      : { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 md:px-10 md:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <span className="u-eyebrow">07 // Education</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academic foundation
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            Formal technical education supporting system design, data structures, and computer
            applications logic.
          </p>

          <motion.div
            variants={containerVariant}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-10 space-y-5"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                className="u-card u-card-hover p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-300">
                    <GraduationCap size={22} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-violet-300">
                      {edu.institution}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-slate-400">
                      <span>{edu.grade}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={11} />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <span className="u-eyebrow">08 // Accomplishments</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Certifications & awards
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            Industry training, specialized AI engineering credentials, and hackathon
            accomplishments.
          </p>

          <motion.div
            variants={containerVariant}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-10 space-y-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                className="u-card u-card-hover flex items-start gap-4 p-5"
              >
                <div className="rounded-lg bg-violet-500/10 p-2.5 text-violet-300">
                  {cert.title.includes("Prize") ? (
                    <Award size={18} />
                  ) : (
                    <CheckCircle size={18} />
                  )}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    {cert.issuer}
                  </p>
                  <span className="mt-2 inline-block rounded bg-white/5 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-slate-400">
                    {cert.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}