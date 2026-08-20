import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={align === "center" ? "text-center" : "text-left"}>
        <span className="u-eyebrow">{eyebrow}</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="u-eyebrow"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-[2.6rem] md:leading-[1.15]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}