export interface ApexService {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  deliverables: string[];
  accentColor: string;
  glowColor: string;
  iconName: string;
}

export const APEX_SERVICES: ApexService[] = [
  {
    id: "web-solutions",
    number: "01",
    title: "WEB SOLUTIONS",
    shortDescription: "Modern, responsive, premium websites and digital experiences engineered for maximum impact.",
    fullDescription:
      "We design and engineer bespoke web platforms, high-conversion landing pages, interactive portfolios, and robust full-stack web applications using cutting-edge technologies like Next.js, React, and Tailwind CSS. Every site is built with fluid responsiveness, speed optimization, and cinematic motion design.",
    capabilities: [
      "Custom Full-Stack Next.js / React Development",
      "Interactive 3D & Micro-Motion Design",
      "High-Conversion UI/UX Architecture",
      "SEO, Performance & Mobile Responsiveness",
    ],
    deliverables: ["Custom Web Applications", "Brand & Portfolio Sites", "E-Commerce & SaaS Portals", "Responsive CMS Systems"],
    accentColor: "#00F0FF",
    glowColor: "rgba(0, 240, 255, 0.25)",
    iconName: "Globe",
  },
  {
    id: "chatbot-development",
    number: "02",
    title: "CHATBOT DEVELOPMENT",
    shortDescription: "Intelligent conversational chatbot systems designed for communication, automation, and elevated UX.",
    fullDescription:
      "Custom AI chatbot solutions powered by state-of-the-art Large Language Models and Retrieval-Augmented Generation (RAG). Built to handle customer inquiries, internal workflow automation, lead qualification, and domain-specific knowledge recall with strict accuracy.",
    capabilities: [
      "Custom RAG & Vector Knowledge Ingestion",
      "Multi-Turn Context & Structured Tool Calling",
      "Omnichannel Integration (Web, WhatsApp, Discord, Telegram)",
      "Continuous Guardrails & Quality Assurance",
    ],
    deliverables: ["Customer Support Bots", "Knowledge Base Search Agents", "Lead Capture Assistants", "Workflow Automation Integrations"],
    accentColor: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.25)",
    iconName: "Bot",
  },
  {
    id: "ml-projects",
    number: "03",
    title: "MACHINE LEARNING PROJECTS",
    shortDescription: "ML experiments, intelligent applications, predictive systems, and data-driven solutions.",
    fullDescription:
      "Practical machine learning and data analytics systems designed to transform raw tabular or visual data into predictive intelligence. From computer vision inspection to anomaly detection and statistical forecasting.",
    capabilities: [
      "Supervised & Unsupervised Model Training",
      "Predictive Analytics & Anomaly Detection",
      "Computer Vision & Image Classification",
      "Model Packaging & REST API Inference Pipelines",
    ],
    deliverables: ["Custom ML Inference Services", "Predictive Dashboards", "Classification & Regression Pipelines", "Data Processing Utilities"],
    accentColor: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.25)",
    iconName: "Cpu",
  },
  {
    id: "digital-solutions",
    number: "04",
    title: "DIGITAL SOLUTIONS",
    shortDescription: "Technology solutions engineered around practical problems, operational bottlenecks, and real-world needs.",
    fullDescription:
      "End-to-end digital transformation for modern businesses and individuals. We analyze operational workflows and craft tailored software utilities, database schemas, cloud infrastructure, and custom tools that eliminate friction.",
    capabilities: [
      "Custom Business Workflow Automation",
      "Database Architecture & API Integration",
      "Cloud Deployment & Infrastructure Setup",
      "Rapid MVP Scaffolding & Launch",
    ],
    deliverables: ["Custom Internal Tooling", "Database Systems", "API Integrations & Webhooks", "Production Deployment Pipelines"],
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.25)",
    iconName: "Zap",
  },
  {
    id: "social-media-activity",
    number: "05",
    title: "SOCIAL MEDIA ACTIVITY",
    shortDescription: "Creative digital content, brand communication, visual design, and engaging social media experiences.",
    fullDescription:
      "Dynamic creative direction and digital storytelling to build meaningful brand engagement. We produce polished visual assets, motion graphics, tech explainers, and campaign design that resonate with modern audiences.",
    capabilities: [
      "Visual Brand Identity & Style Guides",
      "Tech Storytelling & Educational Graphics",
      "High-Fidelity Social Media Assets",
      "Community Engagement Strategy",
    ],
    deliverables: ["Brand Identity Packages", "Social Content Systems", "Animated Motion Graphics", "Visual Campaign Assets"],
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.25)",
    iconName: "Share2",
  },
];

export const APEX_ECOSYSTEM_NODES = [
  { id: "web", name: "WEB SOLUTIONS", description: "High-performance websites & interactive 3D web products.", icon: "Globe", color: "#00F0FF" },
  { id: "ai", name: "AI & LLM LAB", description: "State-of-the-art neural systems, embeddings, and prompt engines.", icon: "Sparkles", color: "#8B5CF6" },
  { id: "chatbots", name: "CHATBOTS", description: "Intelligent conversational RAG agents & automated workflows.", icon: "Bot", color: "#EC4899" },
  { id: "ml", name: "MACHINE LEARNING", description: "Predictive algorithms, computer vision, and data intelligence.", icon: "Cpu", color: "#38BDF8" },
  { id: "digital", name: "DIGITAL SOLUTIONS", description: "Practical tools, cloud setups, and customized business software.", icon: "Zap", color: "#10B981" },
  { id: "social", name: "SOCIAL MEDIA", description: "Visual brand storytelling, creative design, and digital engagement.", icon: "Share2", color: "#F59E0B" },
];

