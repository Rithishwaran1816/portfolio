export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  badge: string;
  isFlagship?: boolean;
  description: string;
  fullStory: string;
  architectureStages: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  glowColor: string;
  href: string;
  externalLink?: string;
  interactiveFlow?: { step: string; detail: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: "llm-from-scratch",
    number: "01",
    title: "BUILDING MY OWN LLM",
    subtitle: "From Tokenization to Transformer Architecture",
    tagline: "EXPLORING THE INNER WORKINGS OF INTELLIGENT LANGUAGE SYSTEMS.",
    category: "ARTIFICIAL INTELLIGENCE / TRANSFORMERS",
    badge: "FLAGSHIP RESEARCH & ENGINEERING",
    isFlagship: true,
    description:
      "Exploring the architecture behind intelligent language systems — from tokenization and embeddings to transformer architectures, multi-head self-attention, neural networks, normalization, and autoregressive output generation.",
    fullStory:
      "Rather than treating Large Language Models as black-box API endpoints, this project dives beneath the surface to deconstruct every mathematical and algorithmic component from scratch in Python and PyTorch. Starting with custom byte-pair & character tokenizers, building high-dimensional vector embeddings with positional encoding, constructing scaled dot-product multi-head self-attention mechanisms, implementing residual connections and LayerNorm, and training custom decoder-only transformer blocks on curated datasets.",
    architectureStages: [
      "Input Text & Character Normalization",
      "Byte-Pair / Token Encoding",
      "Dense Embedding & Sinusoidal Positional Encoding",
      "Multi-Head Scaled Dot-Product Self-Attention",
      "Residual Add & Pre-Layer Normalization",
      "Feed-Forward GELU Neural Sub-Networks",
      "Stacked Transformer Decoder Blocks",
      "Final LayerNorm & Linear Projection Head",
      "Softmax Logits & Temperature-Controlled Generation",
    ],
    techStack: [
      "Python",
      "PyTorch",
      "NumPy",
      "Transformers",
      "Self-Attention Math",
      "Tokenization Algorithms",
      "Vector Embeddings",
      "GPU Acceleration",
    ],
    metrics: [
      { label: "Core Architecture", value: "Decoder-Only Transformer" },
      { label: "Attention Heads", value: "Multi-Head Q/K/V" },
      { label: "Pipeline", value: "End-to-End from Scratch" },
      { label: "Purpose", value: "First-Principles AI Engineering" },
    ],
    accentColor: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.35)",
    href: "/llm-lab",
    interactiveFlow: [
      { step: "INPUT", detail: "Raw prompt string captured and sanitized." },
      { step: "TOKENIZATION", detail: "Text partitioned into discrete integer tokens." },
      { step: "EMBEDDINGS", detail: "Tokens mapped to N-dimensional continuous vector space + positional coordinates." },
      { step: "TRANSFORMER", detail: "Layers of Multi-Head Self-Attention compute contextual relationships." },
      { step: "FEED FORWARD", detail: "Non-linear multi-layer perceptron processes cross-token features." },
      { step: "OUTPUT", detail: "Probability distribution generates the next token autoregressively." },
    ],
  },
  {
    id: "agritrust",
    number: "02",
    title: "AGRITRUST",
    subtitle: "AI-Powered Agricultural Intelligence",
    tagline: "DATA. TRUST. AGRICULTURE.",
    category: "MACHINE LEARNING / DIGITAL ECOSYSTEMS",
    badge: "AGRITECH & DATA PLATFORM",
    isFlagship: false,
    description:
      "An AI-powered agricultural intelligence ecosystem connecting farm telemetry, crop disease diagnostics, soil telemetry, and predictive trust scoring to empower smarter farmer-to-market decisions.",
    fullStory:
      "AgriTrust bridges the data gap in modern farming. By aggregating localized soil moisture data, weather forecasts, and visual leaf analysis through machine learning, AgriTrust produces a verified Trust Score for crop batches. This allows farmers to validate produce quality and access fair financing, while buyers gain transparent crop health insights.",
    architectureStages: [
      "IoT Soil & Weather Telemetry Ingestion",
      "Computer Vision Leaf Pathology Classification",
      "Multi-Variable Crop Trust Scoring Engine",
      "Farmer Decision Intelligence Dashboard",
      "Decentralized Harvest Verification Records",
    ],
    techStack: [
      "Python",
      "TensorFlow / Keras",
      "Flask",
      "React",
      "Pandas",
      "Data Analytics",
      "REST APIs",
    ],
    metrics: [
      { label: "Trust Engine", value: "Multi-Factor Scoring" },
      { label: "Analysis", value: "Real-time Telemetry" },
      { label: "Impact", value: "Farmer-Centric Data" },
    ],
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.3)",
    href: "/#agritrust",
    interactiveFlow: [
      { step: "FARM DATA", detail: "Sensors & soil metrics ingest environmental telemetry." },
      { step: "ANALYSIS", detail: "ML models detect anomalies, soil stress, and pest vectors." },
      { step: "TRUST SCORE", detail: "Algorithmic index computes verified produce reliability (0-100)." },
      { step: "INSIGHTS", detail: "Actionable recommendations on irrigation and nutrition." },
      { step: "SMART DECISIONS", detail: "Optimized harvest timings and direct marketplace trust." },
    ],
  },
  {
    id: "aquaguard",
    number: "03",
    title: "AQUAGUARD",
    subtitle: "Community Water Health & Early Warning",
    tagline: "MONITOR. DETECT. ALERT.",
    category: "SMART CITIES / COMMUNITY HEALTH",
    badge: "PUBLIC HEALTH INTELLIGENCE",
    isFlagship: false,
    description:
      "A smart community health and water monitoring platform integrating water quality telemetry, citizen reporting, GIS mapping, and predictive risk modeling to trigger early warnings for waterborne hazards.",
    fullStory:
      "Contaminated water sources require immediate, coordinated response before widespread illness occurs. AquaGuard combines mobile crowd-sourced incident reports with sensor telemetry and GIS spatial analysis. When pathogen or turbidity anomalies are detected, the system automatically alerts local health officials and community residents.",
    architectureStages: [
      "Community Mobile Incident Submission",
      "Sensor Water Quality Telemetry (pH, Turbidity, TDS)",
      "Spatial GIS Heatmap & Clustering Engine",
      "Epidemiological Early Warning Risk Classifier",
      "Automated Multi-Channel Alert Dispatch",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Python",
      "Flask",
      "GIS Mapping",
      "Data Visualization",
    ],
    metrics: [
      { label: "Response Time", value: "< 2 Minutes Alerting" },
      { label: "Spatial Mapping", value: "GIS Grid Tracking" },
      { label: "Detection", value: "Anomaly Pattern ML" },
    ],
    accentColor: "#00F0FF",
    glowColor: "rgba(0, 240, 255, 0.35)",
    href: "/#aquaguard",
    interactiveFlow: [
      { step: "WATER REPORTING", detail: "Citizen mobile app reports taste, color, or contamination incidents." },
      { step: "HEALTH DATA", detail: "Cross-referenced with regional health clinic symptom spikes." },
      { step: "AI ANALYSIS", detail: "Spatial clustering algorithms identify contamination vectors." },
      { step: "EARLY WARNING", detail: "Predictive threat level calculated for affected neighborhoods." },
      { step: "ALERT SYSTEM", detail: "Instant notifications sent to residents and municipal responders." },
    ],
  },
  {
    id: "mentoring-app",
    number: "04",
    title: "MENTORING PLATFORM",
    subtitle: "Intelligent Connected Academic Ecosystem",
    tagline: "GUIDE. CONNECT. ELEVATE.",
    category: "FULL STACK / PLATFORM ENGINEERING",
    badge: "COLLABORATIVE ECOSYSTEM",
    isFlagship: false,
    description:
      "A multi-role academic and mentorship management platform connecting students, mentors, and institutional administrators with structured progress tracking, goal roadmaps, and analytics.",
    fullStory:
      "Designed to streamline institutional mentoring workflows, this platform provides role-tailored dashboards. Mentors can schedule 1-on-1 sessions, review milestone submissions, and give structured feedback, while students track their learning trajectory and admins oversee program health through interactive analytics.",
    architectureStages: [
      "Role-Based Access Control (Student, Mentor, Admin)",
      "Interactive Goal & Milestone Roadmaps",
      "Real-time Session Scheduling & Meeting Notes",
      "Progress Analytics & Institutional Reports",
      "Automated Milestone Feedback & Notification Webhooks",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT Auth",
      "Chart.js",
    ],
    metrics: [
      { label: "Roles Supported", value: "3 Dedicated Portals" },
      { label: "Tracking", value: "Milestone-Based" },
      { label: "Architecture", value: "Scalable Full Stack" },
    ],
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.3)",
    href: "/#mentoring-app",
    interactiveFlow: [
      { step: "MENTOR", detail: "Sets syllabus checkpoints, reviews submissions, and hosts sessions." },
      { step: "STUDENTS", detail: "Submits milestones, requests feedback, and logs technical progress." },
      { step: "GUIDANCE", detail: "Direct asynchronous review and live sync channels." },
      { step: "PROGRESS", detail: "Data-driven visual trajectory of skills mastery." },
      { step: "ADMINISTRATION", detail: "Institution-wide cohort metrics and mentor workload oversight." },
    ],
  },
];

