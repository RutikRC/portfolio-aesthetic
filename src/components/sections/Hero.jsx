import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
  GitBranch,
  Layers,
  Bot,
} from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { useReducedMotion } from "../../hooks";

const INITIAL_LOGS = [
  { text: "systemd[1]: Starting RutikRC Systems Framework...", type: "system" },
  { text: "node: v20.11.0 server listening on port 8080", type: "success" },
  { text: "mcp-server: Model Context Protocol listener initiated", type: "mcp" },
];

const SIM_COMMANDS = [
  { text: "GET /api/v1/crm/contacts - status: 200 OK - duration: 24ms (Redis cache HIT)", type: "api" },
  { text: "rabbitmq: event dispatched to 'pdf-invoice-exchange'", type: "system" },
  { text: "worker-3: completed task 'generateInvoice' [latency: 12ms]", type: "success" },
  { text: "mcp-client: requesting tool 'query_postgres_db'", type: "mcp" },
  { text: "postgres: connection pool size active: 12/20", type: "db" },
  { text: "llm-agent: token verification succeeded. response returned.", type: "success" },
];

const LOG_STYLES = {
  success: "text-emerald-400",
  api: "text-sky-400",
  mcp: "text-violet-400",
  db: "text-amber-400",
  system: "text-slate-400",
};

export default function Hero() {
  const { name, title, summary, focusedPitch, coreStrengths, location, email, github } =
    portfolioData.personal;
  const reduce = useReducedMotion();

  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [simulating, setSimulating] = useState(false);
  const simIndex = useRef(0);
  const timerRef = useRef(null);

  const stopSimulation = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setSimulating(false);
    simIndex.current = 0;
  }, []);

  const startSimulation = useCallback(() => {
    if (simulating) return;
    setSimulating(true);
    simIndex.current = 0;

    timerRef.current = setInterval(() => {
      const i = simIndex.current;
      if (i < SIM_COMMANDS.length) {
        const entry = SIM_COMMANDS[i];
        if (entry && typeof entry === "object" && entry.text) {
          setLogs((prev) => {
            const next = [...prev, entry];
            return next.length > 14 ? next.slice(next.length - 14) : next;
          });
        }
        simIndex.current += 1;
      } else {
        stopSimulation();
      }
    }, 900);
  }, [simulating, stopSimulation]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const container = {
    hidden: reduce ? undefined : { opacity: 0 },
    show: reduce
      ? undefined
      : {
          opacity: 1,
          transition: { staggerChildren: 0.09, delayChildren: 0.05 },
        },
  };

  const item = {
    hidden: reduce ? undefined : { opacity: 0, y: 26 },
    show: reduce
      ? undefined
      : { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 pb-20 pt-32 sm:px-6 md:px-10 lg:flex-row lg:gap-16 lg:pt-36"
    >
      <motion.div
        variants={container}
        initial={reduce ? undefined : "hidden"}
        animate="show"
        className="w-full flex-1 lg:max-w-2xl"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 font-mono text-[11px] font-medium tracking-wide text-violet-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            BACKEND · AI SYSTEMS · AGENTIC ENGINEERING
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem]"
        >
          {name.split(" ")[0]}{" "}
          <span className="u-gradient-text">Ravindra Chavan</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-lg font-semibold text-slate-200 sm:text-xl"
        >
          {title}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400"
        >
          {focusedPitch}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500"
        >
          {summary}
        </motion.p>

        <motion.div variants={item} className="mt-7 flex flex-wrap gap-2">
          {coreStrengths.map((strength) => (
            <span
              key={strength.label}
              title={strength.description}
              className="group inline-flex cursor-default items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] font-medium text-slate-300 transition-colors hover:border-violet-500/40 hover:text-violet-300"
            >
              {strength.label === "Backend Systems" ? (
                <Layers size={12} />
              ) : strength.label === "AI & Agentic Engineering" ? (
                <Bot size={12} />
              ) : (
                <GitBranch size={12} />
              )}
              {strength.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] text-slate-500"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} className="text-violet-500" />
            {location}
          </span>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-violet-300"
          >
            {email}
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-violet-300"
          >
            GitHub /{github.split("/").pop()}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:shadow-xl hover:shadow-violet-600/30 active:scale-[0.98]"
          >
            Explore My Work
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-violet-400/40 hover:text-violet-300"
          >
            Get In Touch
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduce ? undefined : { opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 w-full max-w-xl flex-1 lg:mt-0"
      >
        <div className="u-card relative overflow-hidden shadow-xl shadow-black/30">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

          <div className="flex items-center justify-between border-b border-white/5 bg-[#0f1015]/60 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
              <Terminal size={11} />
              rutik@systems: ~/server — node 80×24
            </span>
            <div className="w-10" aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-2">
            <span className="font-mono text-[10px] text-slate-400">
              <span className="text-violet-500">●</span> RutikRC · production
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
              <Cpu size={11} />
              v20.11.0
            </span>
          </div>

          <div
            className="h-[272px] overflow-y-auto bg-black/30 px-4 py-4 pb-2 text-left font-mono text-[11px] leading-relaxed scroll-smooth"
            aria-live="polite"
            aria-label="Live system logs simulation"
          >
            <AnimatePresence initial={false}>
              {logs.map((log, index) => (
                <motion.div
                  key={`${index}-${log.text}`}
                  initial={reduce ? undefined : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`mb-1.5 flex items-start gap-2 ${
                    LOG_STYLES[log?.type] || LOG_STYLES.system
                  }`}
                >
                  <span className="select-none text-slate-600">{" > "}</span>
                  <span className="break-words">{log?.text || ""}</span>
                </motion.div>
              ))}
            </AnimatePresence>

            {simulating && (
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
                <span className="u-caret" />
                processing…
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-white/5 bg-[#0f1015]/60 px-4 py-3">
            <span className="font-mono text-[10px] text-slate-500">
              <Sparkles size={11} className="mr-1 inline" />
              active: 4 connections · load: 0.15
            </span>
            <button
              onClick={startSimulation}
              disabled={simulating}
              className={`inline-flex items-center gap-1.5 rounded-md bg-violet-600 px-3 py-1.5 font-mono text-[10px] font-semibold text-white transition-all hover:bg-violet-500 active:scale-95 ${
                simulating ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {simulating ? "Streaming Logs…" : "▶ Simulate Requests"}
            </button>
          </div>
        </div>

        <p className="mt-3 text-center font-mono text-[10px] text-slate-600">
          MCP · RabbitMQ · Redis · REST — the systems behind this engineering practice.
        </p>
      </motion.div>
    </section>
  );
}