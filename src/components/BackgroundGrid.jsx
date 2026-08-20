import { useEffect, useState } from "react";

export default function BackgroundGrid() {
  const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* App background */}
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-[#090a0f] transition-colors duration-500" />

      {/* Subtle grid */}
      <div className="u-grid-bg absolute inset-0 opacity-60" />

      {/* Radial glow following cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: mousePosition.x === -9999 ? 0 : 1,
          background: `radial-gradient(620px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.07), transparent 65%)`,
        }}
      />

      {/* Ambient corner glows */}
      <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.07),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(99,102,241,0.055),transparent_70%)]" />
      <div className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.07),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(168,85,247,0.05),transparent_70%)]" />

      {/* Vertical section tint */}
      <div className="absolute top-1/3 left-1/2 h-[420px] w-[820px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(139,92,246,0.05),transparent_70%)] blur-3xl" />
    </div>
  );
}