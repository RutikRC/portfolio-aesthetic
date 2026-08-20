import { motion } from "framer-motion";
import { Zap, Brain, Blocks, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { useReducedMotion } from "../../hooks";

// Pillar visuals — derived strictly from the CV's narrative.
const PILLAR_STYLES = {
  "Distributed Backend Architecture": {
    icon: Zap,
    tone: "violet",
  },
  "AI Integration & Agentic Systems": {
    icon: Brain,
    tone: "fuchsia",
  },
  "End-to-End Ownership": {
    icon: Blocks,
    tone: "indigo",
  },
};

const TONES = {
  violet: {
    iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-300 dark:bg-violet-500/10",
    border: "group-hover:border-violet-500/40",
    glow: "group-hover:bg-violet-500/[0.03]",
  },
  fuchsia: {
    iconBg: "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300 dark:bg-fuchsia-500/10",
    border: "group-hover:border-fuchsia-500/40",
    glow: "group-hover:bg-fuchsia-500/[0.03]",
  },
  indigo: {
    iconBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 dark:bg-indigo-500/10",
    border: "group-hover:border-indigo-500/40",
    glow: "group-hover:bg-indigo-500/[0.03]",
  },
};

export default function About() {
  const { focusedPitch, title } = portfolioData.personal;
  const reduce = useReducedMotion();

  const pillars = [
    {
      title: "Distributed Backend Architecture",
      description:
        "Designing scalable APIs, microservices, and asynchronous event streams using NestJS, RabbitMQ, and Redis to achieve high-throughput production services.",
    },
    {
      title: "AI Integration & Agentic Systems",
      description:
        "Developing secure tool integrations via Model Context Protocol (MCP) servers, orchestrating multi-agent state machines with LangGraph, and building RAG pipelines to automate client logic.",
    },
    {
      title: "End-to-End Ownership",
      description:
        "Covering the entire SDLC — architecting database schemas, implementing robust unit testing with Jest/Mocha, configuring Docker images, and deploying CI/CD pipelines.",
    },
  ];

  // The narrative paragraph blocks, drawn from the CV's professional summary.
  const narrative = [
    `I am a ${title.toLowerCase()} with ${"3+"} years of experience designing and operating web APIs, microservices, and database systems. Backend development, for me, is not just about routing requests — it is about building resilient systems that handle real production load gracefully.`,
    `Recently, I have focused on extending this foundation into AI engineering. By building custom MCP servers, RAG pipelines, and agentic workflows, I make it possible for large language models to interact securely and productively with real-world databases and business applications.`,
    `Whether I am operating my independent practice at Ruprakash Systems — delivering CRM, fintech, and AI-driven automation — or writing core services in a corporate setting, my focus remains constant: deliver clean, tested code that solves real business problems.`,
  ];

  const containerVariant = {
    hidden: reduce ? undefined : {},
    show: reduce ? undefined : { transition: { staggerChildren: 0.12 } },
  };

  const itemVariant = {
    hidden: reduce ? undefined : { opacity: 0, y: 24 },
    show: reduce
      ? undefined
      : { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 md:px-10 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        {/* ------------------------------------------------ Narrative column */}
        <div className="lg:col-span-7">
          <span className="u-eyebrow">01 // Professional Narrative</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Engineering systems that{" "}
            <span className="u-gradient-text">think and scale</span>
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
            {focusedPitch}
          </p>

          <motion.div
            variants={containerVariant}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-10 max-w-2xl space-y-5"
          >
            {narrative.map((paragraph, idx) => (
              <motion.p
                key={idx}
                variants={itemVariant}
                className="text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Quick facts */}
          <motion.div
            variants={containerVariant}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {[
              { k: "3+", v: "Years building" },
              { k: "2", v: "Companies served" },
              { k: "1", v: "Independent practice" },
            ].map((stat) => (
              <motion.div
                key={stat.v}
                variants={itemVariant}
                className="rounded-xl border border-slate-200 bg-white/50 p-4 text-center dark:border-white/5 dark:bg-white/[0.02]"
              >
                <div className="font-mono text-2xl font-bold text-violet-600 dark:text-violet-300">
                  {stat.k}
                </div>
                <div className="mt-1 text-[11px] font-medium text-slate-500 dark:text-slate-500">
                  {stat.v}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ------------------------------------------------ Pillars column */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <span className="u-eyebrow">02 // Technical Principles</span>
            <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
              How I approach engineering
            </h3>

            <div className="mt-8 space-y-4">
              {pillars.map((pillar) => {
                const style = PILLAR_STYLES[pillar.title] || PILLAR_STYLES["Distributed Backend Architecture"];
                const tone = TONES[style.tone];
                const Icon = style.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`group u-card u-card-hover relative overflow-hidden p-5 ${tone.border} ${tone.glow}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`rounded-xl p-3 ${tone.iconBg}`}>
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {pillar.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                          {pillar.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="mt-1 shrink-0 text-slate-300 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 dark:text-slate-600"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CV-backed callout */}
            <div className="mt-6 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 dark:bg-violet-500/[0.04]">
              <p className="text-xs leading-relaxed text-violet-700 dark:text-violet-300">
                <span className="font-mono font-bold">Focus:</span> delivering production-grade
                backend systems where reliability meets intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}