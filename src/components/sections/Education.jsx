import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

export default function Education() {
  const { certifications, education } = portfolioData;

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
      <div className="text-left grid gap-12 lg:grid-cols-2">
        
        {/* Education Column */}
        <div>
          <span className="font-mono text-xs font-semibold tracking-widest text-violet-400 uppercase">
            06 // Education
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-2 sm:text-4xl dark:text-white light:text-slate-900">
            Academic Foundation
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-md dark:text-slate-400 light:text-slate-600">
            Formal technical education supporting system design, data structures, and computer applications logic.
          </p>

          <div className="mt-10 space-y-6">
            {education.map((edu, index) => (
              <motion.div
                whileHover={{ x: 4 }}
                key={index}
                className="rounded-xl border border-white/5 bg-[#12131a]/60 p-6 dark:border-white/5 dark:bg-[#12131a]/60 light:border-black/10 light:bg-slate-50"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-violet-500/10 p-3 light:bg-violet-100">
                    <GraduationCap className="text-violet-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-950">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-violet-400 mt-1">
                      {edu.institution}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400 font-mono dark:text-slate-400 light:text-slate-600">
                      <span>{edu.grade}</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards Column */}
        <div>
          <span className="font-mono text-xs font-semibold tracking-widest text-violet-400 uppercase">
            07 // Accomplishments
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-2 sm:text-4xl dark:text-white light:text-slate-900">
            Certifications & Awards
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-md dark:text-slate-400 light:text-slate-600">
            Industry training, specialized AI engineering credentials, and hackathon accomplishments.
          </p>

          <div className="mt-10 space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                whileHover={{ x: 4 }}
                key={index}
                className="flex items-start gap-4 rounded-xl border border-white/5 bg-[#12131a]/40 p-4 dark:border-white/5 dark:bg-[#12131a]/40 light:border-black/10 light:bg-slate-50"
              >
                <div className="rounded-lg bg-violet-500/10 p-2 mt-0.5 light:bg-violet-100">
                  {cert.title.includes("Prize") ? (
                    <Award className="text-amber-400" size={18} />
                  ) : (
                    <CheckCircle className="text-violet-400" size={18} />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 dark:text-slate-400 light:text-slate-600">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
