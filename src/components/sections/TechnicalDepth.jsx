import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Layers, Play, RotateCcw, Server, Database, Cpu, Activity } from "lucide-react";
import { useReducedMotion } from "../../hooks";

const MCP_STEPS = [
  {
    title: "1 · User intent → LLM",
    desc: "User asks: retrieve client status and update the CRM pipeline.",
    log: "user_query: 'Retrieve status and update CRM pipeline for client Ruprakash'",
    highlight: "llm",
  },
  {
    title: "2 · Tool definition match",
    desc: "The LLM (Claude / GPT) resolves the matching tool schema exposed by the MCP server.",
    log: "llm_agent: matched tool 'get_crm_details' from MCP registry. Dispatching JSON-RPC…",
    highlight: "llm-to-mcp",
  },
  {
    title: "3 · MCP server auth & SQL build",
    desc: "The server validates the JSON-RPC call, verifies permissions, and constructs the query.",
    log: "mcp_server: received 'get_crm_details(client_name: Ruprakash)'. Resolving pool…",
    highlight: "mcp",
  },
  {
    title: "4 · Database transaction",
    desc: "Optimized PostgreSQL query executes — Redis cache is checked first.",
    log: "database: SELECT * FROM clients WHERE name='Ruprakash' → 4.5ms (cache MISS)",
    highlight: "mcp-to-db",
  },
  {
    title: "5 · Standardized response",
    desc: "The MCP server packages the result as standard MCP content and returns it.",
    log: "mcp_server: returning tool response. Status: success",
    highlight: "mcp-to-llm",
  },
  {
    title: "6 · Action complete",
    desc: "The LLM parses the response and completes the workflow.",
    log: "llm_agent: CRM updated. Client 'Ruprakash' → 'Active Contract, renewal Apr 2026'.",
    highlight: "llm-done",
  },
];

const NODE_HIGHLIGHT = {
  llm: ["llm", "llm-done"],
  mcp: ["mcp"],
  db: ["mcp-to-db"],
};

function Node({ icon, label, active }) {
  return (
    <div
      className={`flex h-24 min-w-0 w-full flex-col items-center justify-center rounded-xl border p-2 text-center transition-all duration-300 sm:w-24 sm:p-3 ${
        active
          ? "border-violet-500/60 bg-violet-500/10 text-violet-400 shadow-glow"
          : "border-white/5 bg-white/[0.03] text-slate-500"
      }`}
    >
      {icon}
      <span className="mt-2 font-mono text-[9px] font-bold text-slate-300">
        {label}
      </span>
    </div>
  );
}

export default function TechnicalDepth() {
  const [activeTab, setActiveTab] = useState("mcp");
  const reduce = useReducedMotion();

  const [mcpStep, setMcpStep] = useState(0);
  const [mcpPlaying, setMcpPlaying] = useState(false);

  const [messages, setMessages] = useState([]);
  const [processedCount, setProcessedCount] = useState(0);

  useEffect(() => {
    if (!mcpPlaying) return;
    const interval = setInterval(() => {
      setMcpStep((prev) => {
        if (prev < MCP_STEPS.length - 1) return prev + 1;
        clearInterval(interval);
        setMcpPlaying(false);
        return prev;
      });
    }, 2200);
    return () => clearInterval(interval);
  }, [mcpPlaying]);

  const triggerMcp = () => {
    if (mcpPlaying) return;
    setMcpStep(0);
    setMcpPlaying(true);
  };

  const resetMcp = () => {
    setMcpPlaying(false);
    setMcpStep(0);
  };

  const publishTask = (taskType) => {
    const id = Math.random().toString(36).slice(2);
    const newMsg = { id, type: taskType, phase: "exchange" };
    setMessages((prev) => [...prev, newMsg]);

    setTimeout(() => {
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, phase: "queue" } : m)));
    }, 700);
    setTimeout(() => {
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, phase: "processing" } : m)));
    }, 1500);
    setTimeout(() => {
      setMessages((prev) => prev.filter((m) => m.id !== id));
      setProcessedCount((c) => c + 1);
    }, 2600);
  };

  const dotColor = (type) => (type === "pdf" ? "bg-cyan-400" : "bg-amber-400");

  return (
    <section
      id="playground"
      className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 md:px-10 md:py-32"
    >
      <div className="text-left">
        <span className="u-eyebrow">04 // Architecture Sandbox</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Systems, visualized <span className="u-gradient-text">live</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-[15px]">
          Two interactive models drawn from the systems I build in production — an MCP
          tool-calling loop and RabbitMQ event-driven messaging.
        </p>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Architecture demos">
          <button
            onClick={() => setActiveTab("mcp")}
            role="tab"
            aria-selected={activeTab === "mcp"}
            className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === "mcp"
                ? "border-violet-500/40 bg-violet-500/10 text-violet-300"
                : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20"
            }`}
          >
            <Brain size={14} />
            MCP Tool-Calling Loop
          </button>
          <button
            onClick={() => setActiveTab("rabbitmq")}
            role="tab"
            aria-selected={activeTab === "rabbitmq"}
            className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === "rabbitmq"
                ? "border-violet-500/40 bg-violet-500/10 text-violet-300"
                : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20"
            }`}
          >
            <Layers size={14} />
            RabbitMQ Event Bus
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] shadow-card backdrop-blur-sm">
          <AnimatePresence mode="wait">
            {activeTab === "mcp" ? (
              <motion.div
                key="mcp"
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid min-w-0 gap-6 p-4 sm:p-6 lg:grid-cols-12"
              >
                <div className="min-w-0 lg:col-span-6">
                  <div className="rounded-xl border border-white/5 bg-black/20 p-5">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      Dataflow graph
                    </h4>

                    <div className="mt-6 grid min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-1 sm:flex sm:justify-between sm:gap-2">
                      <Node
                        icon={<Brain size={22} />}
                        label="LLM Agent"
                        active={NODE_HIGHLIGHT.llm.includes(MCP_STEPS[mcpStep].highlight)}
                      />
                      <span className="text-slate-600">→</span>
                      <Node
                        icon={<Cpu size={22} />}
                        label="MCP Server"
                        active={NODE_HIGHLIGHT.mcp.includes(MCP_STEPS[mcpStep].highlight)}
                      />
                      <span className="text-slate-600">→</span>
                      <Node
                        icon={<Database size={22} />}
                        label="PostgreSQL"
                        active={NODE_HIGHLIGHT.db.includes(MCP_STEPS[mcpStep].highlight)}
                      />
                    </div>

                    <div className="mt-6 rounded-lg border border-violet-500/20 bg-violet-500/[0.04] p-4">
                      <h5 className="font-mono text-xs font-bold text-violet-300">
                        {MCP_STEPS[mcpStep].title}
                      </h5>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">
                        {MCP_STEPS[mcpStep].desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="min-w-0 lg:col-span-6">
                  <div className="flex h-full flex-col">
                    <div className="flex-1 overflow-hidden rounded-xl border border-white/5 bg-black/40">
                      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
                        <span className="font-mono text-[10px] text-slate-500">
                          CONSOLE PIPELINE
                        </span>
                        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
                          <Activity size={11} />
                          live
                        </span>
                      </div>
                      <div className="h-[260px] min-w-0 overflow-y-auto p-4 font-mono text-[10px] leading-relaxed">
                        {MCP_STEPS.slice(0, mcpStep + 1).map((step) => (
                          <motion.div
                            key={step.title}
                            initial={reduce ? undefined : { opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-2 min-w-0 break-words font-mono text-[10px] leading-relaxed text-slate-400"
                          >
                            <span className="select-none text-violet-500">
                              {" > "}
                            </span>
                            {step.log}
                            <span className="ml-2 text-emerald-500">✓</span>
                          </motion.div>
                        ))}
                        {mcpPlaying && (
                          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
                            <span className="u-caret" />
                            processing next tick…
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={triggerMcp}
                        disabled={mcpPlaying}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <Play size={13} />
                        {mcpPlaying ? "Loop Playing…" : "Trigger Loop"}
                      </button>
                      <button
                        onClick={resetMcp}
                        className="rounded-lg border border-white/10 px-4 py-2.5 text-xs font-semibold text-slate-400 transition-colors hover:bg-white/5"
                        aria-label="Reset MCP simulation"
                      >
                        <RotateCcw size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="rabbitmq"
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid min-w-0 gap-6 p-4 sm:p-6 lg:grid-cols-12"
              >
                <div className="min-w-0 lg:col-span-7">
                  <div className="rounded-xl border border-white/5 bg-black/20 p-5">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      Event broker flow
                    </h4>

                    <div className="mt-6 grid min-w-0 grid-cols-3 gap-2 sm:gap-3">
                      <div className="relative flex h-36 flex-col items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center">
                        <Server size={18} className="mb-2 text-slate-400" />
                        <span className="font-mono text-[10px] font-bold text-slate-300">
                          Exchange
                        </span>
                        <span className="mt-1 font-mono text-[9px] text-slate-500">
                          Publishers
                        </span>
                        <AnimatePresence>
                          {messages
                            .filter((m) => m.phase === "exchange")
                            .map((m) => (
                              <motion.span
                                key={m.id}
                                initial={reduce ? undefined : { scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={reduce ? undefined : { x: 40, opacity: 0 }}
                                transition={{ duration: 0.35 }}
                                className={`absolute bottom-4 h-2.5 w-2.5 rounded-full ${dotColor(m.type)}`}
                              />
                            ))}
                        </AnimatePresence>
                      </div>

                      <div className="relative flex h-36 flex-col items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center">
                        <Layers size={18} className="mb-2 text-violet-500" />
                        <span className="font-mono text-[10px] font-bold text-slate-300">
                          Task Queue
                        </span>
                        <span className="mt-1 font-mono text-[9px] text-violet-500">
                          {messages.filter((m) => m.phase !== "processing").length} jobs
                        </span>
                        <AnimatePresence>
                          {messages
                            .filter((m) => m.phase === "queue")
                            .map((m) => (
                              <motion.span
                                key={m.id}
                                initial={reduce ? false : { x: -40, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={reduce ? false : { x: 40, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className={`absolute bottom-4 h-2.5 w-2.5 rounded-full ${dotColor(m.type)}`}
                              />
                            ))}
                        </AnimatePresence>
                      </div>

                      <div className="relative flex h-36 flex-col items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center">
                        <Cpu size={18} className="mb-2 text-emerald-500" />
                        <span className="font-mono text-[10px] font-bold text-slate-300">
                          Workers
                        </span>
                        <span className="mt-1 font-mono text-[9px] text-emerald-500">
                          Nest / Node
                        </span>
                        <AnimatePresence>
                          {messages
                            .filter((m) => m.phase === "processing")
                            .map((m) => (
                              <motion.span
                                key={m.id}
                                initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                                animate={{ scale: 1.3, opacity: 1 }}
                                exit={reduce ? false : { opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute bottom-4 flex h-5 w-5 items-center justify-center rounded bg-emerald-500 font-mono text-[9px] font-bold text-white"
                              >
                                ✓
                              </motion.span>
                            ))}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="mt-5 rounded-lg border border-white/5 bg-white/[0.02] p-4">
                      <p className="text-xs leading-relaxed text-slate-400">
                        <strong className="text-slate-200">How it works:</strong>{" "}
                        Heavy jobs are published to an exchange and deferred to queues. Workers pull
                        asynchronously — the main request thread finishes without waiting for
                        database writes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="min-w-0 lg:col-span-5">
                  <div className="flex h-full flex-col">
                    <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        Metrics stack
                      </h4>

                      <div className="mt-5 space-y-4">
                        <div>
                          <span className="font-mono text-[10px] text-slate-500">
                            PROCESSED TASKS
                          </span>
                          <div className="mt-1 font-mono text-2xl font-bold text-white">
                            {processedCount}
                          </div>
                        </div>
                        <div>
                          <span className="font-mono text-[10px] text-slate-500">
                            API LATENCY IMPACT (CV-SOURCED)
                          </span>
                          <div className="mt-1 font-mono text-base font-bold text-emerald-400">
                            −35% response time
                          </div>
                        </div>
                        <div>
                          <span className="font-mono text-[10px] text-slate-500">
                            CACHE EFFECTIVENESS (CV-SOURCED)
                          </span>
                          <div className="mt-1 font-mono text-base font-bold text-violet-300">
                            Up to 40% Redis savings
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-2">
                      <button
                        onClick={() => publishTask("pdf")}
                        className="rounded-lg bg-cyan-600 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-cyan-500 active:scale-[0.98]"
                      >
                        Publish "Generate PDF Invoice" Event
                      </button>
                      <button
                        onClick={() => publishTask("webhook")}
                        className="rounded-lg bg-amber-600 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-amber-500 active:scale-[0.98]"
                      >
                        Publish "Webhook Sync Callback" Event
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}