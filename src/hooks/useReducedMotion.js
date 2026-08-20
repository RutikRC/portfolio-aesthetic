import { useEffect, useState } from "react";

function getInitialReduced() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Respects the user's `prefers-reduced-motion` system preference.
 */
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(getInitialReduced);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}