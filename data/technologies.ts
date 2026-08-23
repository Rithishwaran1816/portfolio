export type TechLevel = "BUILDING WITH" | "EXPLORING" | "FOUNDATION";

export type TechCategory =
  | "AI & Machine Learning"
  | "Data & Analytics"
  | "Web & Full Stack"
  | "Database & Backend"
  | "Mobile Development"
  | "Cloud & DevOps"
  | "Languages & Systems"
  | "Design & Experience";

export interface TechnologyItem {
  id: string;
  name: string;
  category: TechCategory;
  level: TechLevel;
  description: string;
  relatedProjects: string[];
  connectedTech: string[];
  iconSlug?: string;
  highlightColor?: string;
}

export const TECHNOLOGIES: TechnologyItem[] = [
  // --- AI & MACHINE LEARNING ---
  {
    id: "transformer-arch",
    name: "Transformer Architecture",
    category: "AI & Machine Learning",
    level: "BUILDING WITH",
    description: "Multi-head self-attention mechanisms, feed-forward sublayers, residual streams, and positional encoding implemented from scratch.",
    relatedProjects: ["BUILDING MY OWN LLM"],
    connectedTech: ["Self-Attention", "Neural Networks", "PyTorch", "Python"],
    highlightColor: "#8B5CF6",
  },
  {
    id: "self-attention",
    name: "Self-Attention Mechanism",
    category: "AI & Machine Learning",
    level: "BUILDING WITH",
    description: "Query, Key, and Value dot-product projection mathematics used to compute dynamic contextual token relationships.",
    relatedProjects: ["BUILDING MY OWN LLM"],
    connectedTech: ["Transformer Architecture", "Vector Databases", "Python"],
    highlightColor: "#8B5CF6",
  },
  {
    id: "llms",
    name: "Large Language Models",
    category: "AI & Machine Learning",
    level: "BUILDING WITH",
    description: "Deconstructing autoregressive decoder architectures, training dynamics, loss convergence, and inference pipelines.",
    relatedProjects: ["BUILDING MY OWN LLM", "APEX LABS CHATBOTS"],
    connectedTech: ["Transformer Architecture", "NLP", "Prompt Engineering"],
    highlightColor: "#00F0FF",
  },
  {
    id: "deep-learning",
    name: "Deep Learning & PyTorch",
    category: "AI & Machine Learning",
    level: "BUILDING WITH",
    description: "Gradient descent, backpropagation algorithms, tensor operations, and neural layer design.",
    relatedProjects: ["BUILDING MY OWN LLM", "AGRITRUST"],
    connectedTech: ["Python", "Neural Networks", "NumPy"],
    highlightColor: "#EC4899",
  },
  {
    id: "rag",
    name: "RAG & Vector Databases",
    category: "AI & Machine Learning",
    level: "BUILDING WITH",
    description: "Retrieval-Augmented Generation architectures integrating vector embeddings for grounded contextual knowledge recall.",
    relatedProjects: ["APEX LABS CHATBOTS", "BUILDING MY OWN LLM"],
    connectedTech: ["LLMs", "Python", "Vector Databases"],
    highlightColor: "#38BDF8",
  },
  {
    id: "prompt-engineering",
    name: "Prompt Engineering & Tool Calling",
    category: "AI & Machine Learning",
    level: "BUILDING WITH",
    description: "Structured JSON schema enforcement, multi-step agent reasoning, function execution, and deterministic LLM outputs.",
    relatedProjects: ["APEX LABS CHATBOTS"],
    connectedTech: ["LLMs", "REST APIs", "JavaScript"],
    highlightColor: "#10B981",
  },
  {
    id: "nlp",
    name: "Natural Language Processing",
    category: "AI & Machine Learning",
    level: "BUILDING WITH",
    description: "Tokenization, vocabulary pruning, text normalization, semantic search, and sequence modeling.",
    relatedProjects: ["BUILDING MY OWN LLM", "APEX LABS"],
    connectedTech: ["Python", "Transformer Architecture"],
  },
  {
    id: "gen-ai",
    name: "Generative AI Systems",
    category: "AI & Machine Learning",
    level: "EXPLORING",
    description: "Exploring state-of-the-art diffusion models, multimodal architectures, and parameter-efficient fine-tuning (LoRA / QLoRA).",
    relatedProjects: ["APEX LABS DIGITAL SOLUTIONS"],
    connectedTech: ["LLMs", "PyTorch"],
  },

  // --- DATA & ANALYTICS ---
  {
    id: "python-data",
    name: "Python (Data Science)",
    category: "Data & Analytics",
    level: "BUILDING WITH",
    description: "Primary language for data manipulation, mathematical computing, statistical modeling, and ML pipelines.",
    relatedProjects: ["BUILDING MY OWN LLM", "AGRITRUST", "AQUAGUARD"],
    connectedTech: ["Pandas", "NumPy", "Matplotlib"],
    highlightColor: "#F59E0B",
  },
  {
    id: "pandas-numpy",
    name: "Pandas & NumPy",
    category: "Data & Analytics",
    level: "BUILDING WITH",
    description: "High-performance vector operations, tabular data cleansing, multi-index aggregation, and tensor transformations.",
    relatedProjects: ["AGRITRUST", "BUILDING MY OWN LLM"],
    connectedTech: ["Python", "Data Visualization"],
  },
  {
    id: "visualization",
    name: "Data Visualization (Matplotlib/Seaborn/Power BI)",
    category: "Data & Analytics",
    level: "BUILDING WITH",
    description: "Transforming raw data streams into actionable diagnostic charts, spatial distribution plots, and executive BI dashboards.",
    relatedProjects: ["AGRITRUST", "AQUAGUARD", "MENTORING PLATFORM"],
    connectedTech: ["Python", "SQL", "Excel"],
  },
  {
    id: "sql",
    name: "SQL & Relational Modeling",
    category: "Data & Analytics",
    level: "BUILDING WITH",
    description: "Relational schema design, complex multi-table joins, subqueries, indexing, and transactional integrity.",
    relatedProjects: ["MENTORING PLATFORM", "AGRITRUST"],
    connectedTech: ["MySQL", "PostgreSQL", "Database Architecture"],
  },
  {
    id: "r-studio-jupyter",
    name: "Jupyter Notebook & R Studio",
    category: "Data & Analytics",
    level: "FOUNDATION",
    description: "Exploratory data analysis environments for rapid mathematical hypothesis testing and statistical reporting.",
    relatedProjects: ["AGRITRUST", "ACADEMIC RESEARCH"],
    connectedTech: ["Python", "Data Analytics"],
  },

  // --- WEB & FULL STACK ---
  {
    id: "react-nextjs",
    name: "React & Next.js",
    category: "Web & Full Stack",
    level: "BUILDING WITH",
    description: "Modern SSR/SSG web application engineering with React Server Components, client state choreography, and optimized performance.",
    relatedProjects: ["PORTFOLIO (DIGITAL UNIVERSE)", "APEX LABS WEBSITES", "MENTORING PLATFORM"],
    connectedTech: ["TypeScript", "Tailwind CSS", "Node.js"],
    highlightColor: "#00F0FF",
  },
  {
    id: "typescript-js",
    name: "TypeScript & Modern JavaScript",
    category: "Web & Full Stack",
    level: "BUILDING WITH",
    description: "Type-safe systems programming, asynchronous event loops, reactive UI architectures, and modern ESNext features.",
    relatedProjects: ["PORTFOLIO", "APEX LABS", "MENTORING PLATFORM"],
    connectedTech: ["React", "Next.js", "Node.js"],
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS & Styling",
    category: "Web & Full Stack",
    level: "BUILDING WITH",
    description: "Utility-first responsive styling, micro-animations, glowing glass surfaces, and futuristic design systems.",
    relatedProjects: ["PORTFOLIO", "APEX LABS"],
    connectedTech: ["HTML5", "CSS3", "React"],
  },
  {
    id: "nodejs-flask",
    name: "Node.js & Flask",
    category: "Web & Full Stack",
    level: "BUILDING WITH",
    description: "Microservice backends, RESTful API endpoints, WebSockets, authentication pipelines, and ML inference servers.",
    relatedProjects: ["AGRITRUST", "MENTORING PLATFORM", "AQUAGUARD"],
    connectedTech: ["Python", "JavaScript", "REST APIs"],
  },
  {
    id: "rest-apis",
    name: "REST APIs & Middleware",
    category: "Web & Full Stack",
    level: "BUILDING WITH",
    description: "Designing structured JSON API contracts, error boundaries, rate-limiting, and stateless client-server integrations.",
    relatedProjects: ["MENTORING PLATFORM", "AQUAGUARD", "APEX LABS"],
    connectedTech: ["Flask", "Node.js", "Express"],
  },

  // --- DATABASE & BACKEND ---
  {
    id: "mongodb-mysql",
    name: "MongoDB & MySQL",
    category: "Database & Backend",
    level: "BUILDING WITH",
    description: "NoSQL document stores and relational databases with schema normalization and index optimization.",
    relatedProjects: ["MENTORING PLATFORM", "AGRITRUST"],
    connectedTech: ["Node.js", "SQL", "Flask"],
  },
  {
    id: "firebase",
    name: "Firebase & Real-time DB",
    category: "Database & Backend",
    level: "BUILDING WITH",
    description: "Real-time state synchronization, Firestore document rules, cloud functions, and mobile auth.",
    relatedProjects: ["AQUAGUARD", "APEX LABS"],
    connectedTech: ["Flutter", "React", "Mobile"],
  },
  {
    id: "sqlite",
    name: "SQLite & Embedded DBs",
    category: "Database & Backend",
    level: "FOUNDATION",
    description: "Lightweight local persistence for edge computing, IoT telemetry staging, and local testing.",
    relatedProjects: ["AGRITRUST", "AQUAGUARD"],
    connectedTech: ["Python", "SQL"],
  },

  // --- MOBILE DEVELOPMENT ---
  {
    id: "flutter-dart",
    name: "Flutter & Dart",
    category: "Mobile Development",
    level: "BUILDING WITH",
    description: "Cross-platform mobile UI engineering with reactive state streams, offline storage, and responsive layouts.",
    relatedProjects: ["AQUAGUARD"],
    connectedTech: ["Firebase", "Android Studio", "Dart"],
    highlightColor: "#38BDF8",
  },
  {
    id: "android-studio-kivy",
    name: "Android Studio & Kivy",
    category: "Mobile Development",
    level: "FOUNDATION",
    description: "Native Android emulator tooling, APK compilation, Python-based GUI prototyping with Kivy.",
    relatedProjects: ["AQUAGUARD", "IoT EXPERIMENTS"],
    connectedTech: ["Flutter", "Python"],
  },

  // --- CLOUD, DEVOPS & DEPLOYMENT ---
  {
    id: "git-github",
    name: "Git & GitHub",
    category: "Cloud & DevOps",
    level: "BUILDING WITH",
    description: "Version control workflows, trunk-based branching, PR reviews, CI/CD automation pipelines, and repo governance.",
    relatedProjects: ["ALL PROJECTS", "APEX LABS"],
    connectedTech: ["Vercel", "Docker"],
  },
  {
    id: "vercel-netlify",
    name: "Vercel & Netlify",
    category: "Cloud & DevOps",
    level: "BUILDING WITH",
    description: "Edge network deployments, serverless functions, automated previews, and DNS orchestration.",
    relatedProjects: ["PORTFOLIO", "APEX LABS"],
    connectedTech: ["Next.js", "React"],
  },
  {
    id: "aws-docker",
    name: "AWS & Docker Containers",
    category: "Cloud & DevOps",
    level: "EXPLORING",
    description: "Containerizing Python ML backends and Next.js applications; exploring S3 buckets, EC2 compute, and container orchestration.",
    relatedProjects: ["BUILDING MY OWN LLM", "APEX LABS"],
    connectedTech: ["Docker", "Kubernetes", "Linux"],
  },
  {
    id: "iis-cloud",
    name: "Windows IIS & Cloud Architecture",
    category: "Cloud & DevOps",
    level: "FOUNDATION",
    description: "Enterprise web server configurations, reverse proxies, and core cloud infrastructure principles.",
    relatedProjects: ["ENTERPRISE LABS"],
    connectedTech: ["Cloud Concepts", "Networking"],
  },

  // --- LANGUAGES & SYSTEMS ---
  {
    id: "c-java",
    name: "C & Java",
    category: "Languages & Systems",
    level: "FOUNDATION",
    description: "Strong grounding in low-level memory allocation, pointers, object-oriented design patterns, and compiled language execution.",
    relatedProjects: ["CORE COMPUTER SCIENCE CURRICULUM"],
    connectedTech: ["Python", "Algorithms", "Data Structures"],
  },

  // --- DESIGN & EXPERIENCE ---
  {
    id: "figma-design",
    name: "Figma & UI/UX Design",
    category: "Design & Experience",
    level: "BUILDING WITH",
    description: "Wireframing, vector UI component libraries, interaction prototyping, typography hierarchy, and visual design systems.",
    relatedProjects: ["PORTFOLIO", "APEX LABS", "AQUAGUARD"],
    connectedTech: ["Tailwind CSS", "Canva", "Brand Identity"],
    highlightColor: "#A855F7",
  },
  {
    id: "brand-social",
    name: "Brand Identity & Social Media Design",
    category: "Design & Experience",
    level: "BUILDING WITH",
    description: "Visual identity design, graphic assets, motion design aesthetics, and digital brand storytelling.",
    relatedProjects: ["APEX LABS SOCIAL MEDIA"],
    connectedTech: ["Figma", "Canva", "Creative Direction"],
  },
];

