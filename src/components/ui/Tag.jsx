export default function Tag({ children, tone = "slate", className = "" }) {
  const tones = {
    violet: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    slate: "bg-white/5 text-slate-400 border-white/10",
    amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
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