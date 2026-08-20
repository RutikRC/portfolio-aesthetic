import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks";

/**
 * Scroll-triggered reveal wrapper. Honors reduced motion by rendering static content.
 */
export default function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}