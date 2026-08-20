export default function Tag({ children, tone = "slate", className = "" }) {
  const tones = {
    violet:
      "bg-violet-500/10 text-violet-700 dark:text-violet-300 dark:bg-violet-500/10 border-violet-500/20",
    emerald:
      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 dark:bg-emerald-500/10 border-emerald-500/20",
    slate:
      "bg-slate-500/10 text-slate-700 dark:text-slate-400 dark:bg-white/5 border-slate-500/20 dark:border-white/10",
    amber:
      "bg-amber-500/10 text-amber-700 dark:text-amber-300 dark:bg-amber-500/10 border-amber-500/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide ${
        tones[tone] || tones.slate
      } ${className}`}
    >
      {children}
    </span>
  );
}