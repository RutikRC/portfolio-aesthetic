/**
 * ============================================================
 *  CONTENT SOURCE OF TRUTH
 *  Everything in this file is derived directly from the CV.
 *  Do NOT invent companies, roles, metrics, or projects here.
 * ============================================================
 */

export const portfolioData = {
  personal: {
    name: "Rutik Ravindra Chavan",
    shortName: "Rutik",
    title: "Backend-focused Software Engineer & AI Systems Builder",
    monogram: "RC",
    location: "Pune, Maharashtra",
    email: "rutikchavan.dev@gmail.com",
    phone: "+91-7448281734",
    linkedin: "https://linkedin.com/in/rutik-chavan",
    github: "https://github.com/RutikRC",
    summary:
      "Backend-focused Software Engineer with 3+ years of experience designing scalable APIs, microservices, and event-driven backend systems, now extending that foundation into AI Engineering and Agentic AI. Core strengths span Node.js, NestJS, TypeScript, PostgreSQL, MongoDB, Redis, and RabbitMQ, alongside hands-on work building MCP servers, RAG pipelines, and LLM-powered workflows with the OpenAI and Claude APIs. Founded and operated an independent technology practice delivering CRM platforms, fintech-oriented solutions, and AI-driven automation for clients.",
    focusedPitch:
      "I build reliable, distributed systems — and teach them how to think. Backend engineering is my foundation; AI tool orchestration is its natural extension.",
    coreStrengths: [
      {
        label: "Backend Systems",
        value: "Node.js · NestJS · Microservices",
        description:
          "Designing typed, event-driven APIs that hold up under real production load.",
      },
      {
        label: "AI & Agentic Engineering",
        value: "MCP · RAG · LangGraph",
        description:
          "Building the bridges that let LLMs act on real business data securely.",
      },
      {
        label: "Full Delivery Ownership",
        value: "Architecture → Production → Support",
        description:
          "Shipping features end-to-end across the entire software delivery lifecycle.",
      },
    ],
  },

  skills: {
    languages: ["TypeScript", "JavaScript", "Python"],
    backend: [
      "Node.js",
      "NestJS",
      "Express.js",
      "FastAPI",
      "Django REST Framework",
      "REST APIs",
      "Microservices",
      "Event-Driven Architecture",
      "RabbitMQ",
      "System Design",
    ],
    ai: [
      "Agentic AI",
      "RAG",
      "MCP (Model Context Protocol)",
      "LLM Application Development",
      "OpenAI API",
      "Claude API",
      "LangChain",
      "LangGraph",
      "Ollama",
      "AWS Bedrock",
      "AWS Strands",
    ],
    frontend: [
      "React",
      "Next.js",
      "Vite",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Responsive Web Design",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Database Design",
      "Query Optimization",
    ],
    devops: ["AWS (EC2, S3)", "Docker", "GitHub Actions", "CI/CD", "Linux", "Nginx"],
    testing: ["Jest", "Mocha", "Unit & Integration Testing"],
    tools: ["Git", "GitHub", "Postman", "VS Code"],
  },

  // Presentational cluster metadata — every item maps to a CV-backed skill.
  skillCategories: [
    {
      id: "core",
      label: "Core Stack",
      tagline: "Languages & application foundations",
      tools: [
        { name: "TypeScript", role: "Language", note: "Type-safe API design & services" },
        { name: "JavaScript", role: "Language", note: "Full-stack application development" },
        { name: "Python", role: "Language", note: "AI orchestration & FastAPI services" },
        { name: "Node.js", role: "Runtime", note: "Concurrent async APIs & services" },
        { name: "NestJS", role: "Framework", note: "Enterprise modular microservices" },
        { name: "Express.js", role: "Framework", note: "Lightweight REST services" },
        { name: "FastAPI", role: "Framework", note: "High-performance Python APIs" },
        { name: "Django REST Framework", role: "Framework", note: "Structured database-heavy APIs" },
      ],
    },
    {
      id: "backend",
      label: "Backend Architecture",
      tagline: "APIs, messaging, and distributed design",
      tools: [
        { name: "REST APIs", role: "Paradigm", note: "Resource-oriented API design" },
        { name: "Microservices", role: "Paradigm", note: "Loose-coupled service boundaries" },
        { name: "Event-Driven Architecture", role: "Paradigm", note: "Async publisher–subscriber flows" },
        { name: "RabbitMQ", role: "Broker", note: "Task queues & message routing" },
        { name: "System Design", role: "Discipline", note: "Reliability, scaling, decoupling" },
      ],
    },
    {
      id: "ai",
      label: "AI Engineering",
      tagline: "Agentic systems, RAG, and LLM tool use",
      tools: [
        { name: "Agentic AI", role: "Paradigm", note: "Autonomous multi-step workflows" },
        { name: "RAG", role: "Pattern", note: "Retrieval-augmented generation" },
        { name: "MCP (Model Context Protocol)", role: "Protocol", note: "Standardized LLM tool interfaces" },
        { name: "LLM Application Development", role: "Discipline", note: "Prompting, schemas, validation" },
        { name: "OpenAI API", role: "Provider", note: "GPT model integrations" },
        { name: "Claude API", role: "Provider", note: "Anthropic tool-calling workflows" },
        { name: "LangChain", role: "Framework", note: "LLM chains & compositions" },
        { name: "LangGraph", role: "Framework", note: "Stateful multi-agent graphs" },
        { name: "Ollama", role: "Runtime", note: "Local open-source model serving" },
        { name: "AWS Bedrock", role: "Provider", note: "Managed frontier model access" },
        { name: "AWS Strands", role: "Provider", note: "Cloud intelligence pipelines" },
      ],
    },
    {
      id: "frontend",
      label: "Frontend Engineering",
      tagline: "Interfaces for production systems",
      tools: [
        { name: "React", role: "Library", note: "Component-based interfaces" },
        { name: "Next.js", role: "Framework", note: "Full-stack React applications" },
        { name: "Vite", role: "Tooling", note: "Modern dev build tooling" },
        { name: "Vue.js", role: "Library", note: "Progressive web interfaces" },
        { name: "HTML5", role: "Standard", note: "Semantic document structure" },
        { name: "CSS3", role: "Standard", note: "Responsive design systems" },
        { name: "Responsive Web Design", role: "Discipline", note: "Adaptive multi-viewport layouts" },
      ],
    },
    {
      id: "data",
      label: "Databases & Caching",
      tagline: "Storage strategy & query efficiency",
      tools: [
        { name: "PostgreSQL", role: "Database", note: "Transactional relational storage" },
        { name: "MongoDB", role: "Database", note: "Flexible document storage" },
        { name: "MySQL", role: "Database", note: "Traditional relational storage" },
        { name: "Redis", role: "Cache", note: "In-memory caching & sessions" },
        { name: "Database Design", role: "Discipline", note: "Schema layout & migrations" },
        { name: "Query Optimization", role: "Discipline", note: "Execution-plan analysis" },
      ],
    },
    {
      id: "infra",
      label: "Cloud & DevOps",
      tagline: "Deployment, containers, automation",
      tools: [
        { name: "AWS (EC2, S3)", role: "Cloud", note: "Compute & object storage" },
        { name: "Docker", role: "Containerization", note: "Reproducible deployments" },
        { name: "GitHub Actions", role: "CI/CD", note: "Automated build & deploy" },
        { name: "CI/CD", role: "Practice", note: "Continuous delivery pipelines" },
        { name: "Linux", role: "OS", note: "Server administration & shell" },
        { name: "Nginx", role: "Proxy", note: "Reverse proxy & SSL" },
      ],
    },
    {
      id: "quality",
      label: "Quality & Tooling",
      tagline: "Testing and daily toolset",
      tools: [
        { name: "Jest", role: "Testing", note: "Unit & integration suites" },
        { name: "Mocha", role: "Testing", note: "Behavior-driven testing" },
        { name: "Unit & Integration Testing", role: "Practice", note: "Regression protection" },
        { name: "Git", role: "VCS", note: "Version control" },
        { name: "GitHub", role: "Platform", note: "Source hosting & review" },
        { name: "Postman", role: "Tool", note: "API debugging & contracts" },
        { name: "VS Code", role: "Editor", note: "Primary development environment" },
      ],
    },
  ],

  experience: [
    {
      role: "Founder",
      company: "Ruprakash Systems",
      type: "Independent practice",
      period: "April 2025 – Present",
      location: "Remote / India",
      summary:
        "Independent technology practice delivering CRM platforms, fintech-oriented solutions, and AI-driven automation.",
      description: [
        "Architected and delivered end-to-end web solutions and CRM platforms for clients, owning requirements gathering, system design, development, deployment, and ongoing iteration.",
        "Designed and integrated AI-powered workflows into CRM and business applications, using LLM-based tool orchestration to automate repetitive business operations for clients.",
        "Built fintech-oriented automation solutions, combining backend engineering with AI-driven workflow design to solve client-specific business problems.",
        "Served as sole technical owner across the full delivery lifecycle — client requirements, solution architecture, engineering, deployment, and support — while managing project execution and client relationships directly.",
      ],
      technologies: [
        "Node.js",
        "NestJS",
        "React",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "LLM Integration",
        "AI Workflows",
        "Fintech API",
      ],
      accent: "AI Engineering",
    },
    {
      role: "AI Evaluation Specialist",
      company: "Handshake AI",
      type: "Freelance / Independent Contractor",
      period: "April 2025 – Present",
      summary:
        "Evaluating LLM output quality and reliability for model-performance improvements.",
      description: [
        "Evaluate AI-generated responses against structured quality and task-adherence criteria, contributing to model performance and reliability improvements.",
        "Apply engineering judgment to assess LLM output correctness, reasoning quality, and edge-case handling across evaluation tasks.",
        "Maintain this work alongside independent AI engineering projects (RAG, Agentic AI, MCP), deepening practical insight into LLM behavior that directly informs client-facing AI workflow design.",
      ],
      technologies: [
        "LLM Evaluation",
        "Agentic AI",
        "RAG",
        "MCP",
        "Prompt Engineering",
        "Quality Assessment",
      ],
      accent: "AI Systems",
    },
    {
      role: "Software Developer",
      company: "Karmacts Systems Pvt. Ltd.",
      period: "Dec 2022 – March 2025",
      summary:
        "Designed and operated the product platform: APIs, microservices, queues, payments, and delivery pipelines.",
      description: [
        "Designed and built backend APIs and microservices with Node.js, NestJS, Express.js, and FastAPI, integrating PostgreSQL, MongoDB, and Redis for data-driven applications.",
        "Developed an MCP (Model Context Protocol) server enabling AI agents to securely query, update, and automate CRM workflows through standard tool interfaces.",
        "Designed RabbitMQ-based event-driven messaging for async processing and background jobs, improving scalability and reducing request latency by approximately 35%.",
        "Built Redis caching layers for frequently accessed data, cutting API response times by up to 40%.",
        "Built responsive front-end applications with React, Vite, and Next.js, integrated with RESTful APIs, improving page responsiveness and UX by approximately 25%.",
        "Integrated Stripe and Razorpay payment gateways — secure payments, subscriptions, webhooks, and reconciliation.",
        "Wrote unit & integration tests with Jest and Mocha; diagnosed production issues by optimizing queries and API performance, reducing production incidents by approximately 30%.",
        "Built CI/CD pipelines with Git, GitHub Actions, Docker, and AWS, cutting deployment time by approximately 50%.",
        "Owned features end-to-end across the SDLC while mentoring junior engineers and driving code review and architectural decisions.",
      ],
      technologies: [
        "Node.js",
        "NestJS",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "MCP",
        "Docker",
        "Stripe",
        "Razorpay",
        "GitHub Actions",
        "Jest",
        "React",
      ],
      accent: "Backend Systems",
    },
  ],

  projects: [
    {
      name: "Standardized MCP Server for CRM Tool Access",
      short: "MCP Server",
      description:
        "An open-standard tool server connecting LLM agents to CRM data through secure, typed interfaces.",
      problem:
        "LLMs need guarded, structured access to business systems without breaking authentication boundaries.",
      details:
        "A production-grade implementation of Anthropic's Model Context Protocol exposing secure tool interfaces that let AI agents dynamically fetch, update, and execute actions on client database schemas and CRM pipelines — while preserving context limits and boundary control.",
      technologies: ["Node.js", "TypeScript", "MCP", "Express.js", "PostgreSQL", "LLM Tool-Calling"],
      highlights: [
        "JSON-RPC based messaging for tools, resources, and prompt templates",
        "Secure schema validation for LLM inputs to prevent query injection",
        "Direct integration with Claude / OpenAI agents automating sales & support flows",
      ],
      accent: "Protocol",
    },
    {
      name: "Scalable Event-Driven Microservices with RabbitMQ",
      short: "Event Bus",
      description:
        "Distributed background processor using RabbitMQ queues for low-latency service orchestration.",
      category: "Backend Systems",
      details:
        "Designed and built an event-driven architecture that offloads CPU-intensive operations (PDF invoice generation, notification delivery, webhook distribution) into background job queues.",
      technologies: ["NestJS", "RabbitMQ", "Redis", "Docker", "PostgreSQL", "FastAPI"],
      highlights: [
        "Reduced API request latency by approximately 35% via async delegation",
        "DLQ, retries, and worker rate-limiting for durable processing",
        "Redis caching cut database loads and improved query times by 40%",
      ],
      accent: "Infrastructure",
    },
    {
      name: "AI-Powered Business Process Automation Core",
      short: "AI Automation",
      description:
        "LLM-driven orchestration engine automating administrative actions, CRM updates, and client communication.",
      category: "AI Engineering",
      details:
        "A workflow engine built for Ruprakash Systems clients that uses LLMs to parse unstructured communication, extract actionable data via tool calls, update CRM structure, and trigger automation sequences.",
      problem:
        "Repetitive manual business operations cost clients time; the core reduces that operational drag.",
      technologies: ["Python", "FastAPI", "LangChain", "LangGraph", "OpenAI API", "Claude API", "PostgreSQL"],
      highlights: [
        "State-managed agent workflows in LangGraph handling edge cases & multi-turn flows",
        "RAG pipeline retrieving client policies and product docs",
        "Automated data extraction reducing manual operations time for clients",
      ],
      accent: "Agentic AI",
    },
    {
      name: "Stripe & Razorpay Payment & Subscription Integration",
      short: "Payments",
      description:
        "Secure fintech transaction layer supporting subscriptions, webhooks, and reconciliation.",
      category: "Fintech",
      details:
        "Integrated high-reliability payment routes for SaaS clients — multi-currency, trials, upgrades/downgrades, automated invoicing, and precise reconciliation.",
      problem:
        "SaaS clients need dependable recurring billing without manual financial drift.",
      technologies: ["Node.js", "Express.js", "Stripe API", "Razorpay API", "PostgreSQL", "Jest"],
      highlights: [
        "Signature verification + webhook transaction safety with idempotency keys",
        "Automatic reconciliation scripts minimizing financial mismatch risk",
        "Exhaustive Jest integration test suites with mocked payment endpoints",
      ],
      accent: "Fintech",
    },
  ],

  certifications: [
    {
      title: "Claude 101",
      issuer: "Anthropic",
      category: "AI Engineering",
    },
    {
      title: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      category: "AI Engineering",
    },
    {
      title: "Third Prize, CodeSprint",
      issuer: "National Level Hackathon, St. Aloysius University, Mangalore",
      category: "Competition",
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Zeal Institute of Business Administration, Computer Application and Research",
      grade: "CGPA: 7.39",
      period: "Aug 2022 – April 2024",
    },
  ],
};

export default portfolioData;