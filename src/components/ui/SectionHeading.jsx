import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const reduce = useReducedMotion();

  const alignClass = align === "center" ? "text-center" : "text-left";

  const heading = (
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
      {title}
    </h2>
  );

  if (reduce) {
    return (
      <div className={alignClass}>
        <span className="u-eyebrow">{eyebrow}</span>
        {heading}
        {description && (
          <p
            className={`mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-[15px] ${
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
    <div className={alignClass}>
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="u-eyebrow"
      >
        {eyebrow}
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      >
        {heading}
      </motion.div>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-[15px] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}