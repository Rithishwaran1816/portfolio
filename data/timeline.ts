export interface TimelineEvent {
  id: string;
  stepNumber: string;
  title: string;
  phase: string;
  tagline: string;
  description: string;
  keyLearnings: string[];
  status: "COMPLETED" | "CURRENT FOCUS" | "FUTURE VISION";
  highlightColor: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "the-beginning",
    stepNumber: "01",
    phase: "THE BEGINNING",
    title: "Curiosity Sparked by Computation",
    tagline: "Asking how software transforms human thought into executable reality.",
    description:
      "My journey started with an insatiable curiosity for how digital systems operate beneath the interface. Rather than consuming technology passively, I was drawn to the mechanics of logic, computation, and software engineering.",
    keyLearnings: ["Algorithmic thinking", "Problem deconstruction", "Hardware & software fundamentals"],
    status: "COMPLETED",
    highlightColor: "#64748B",
  },
  {
    id: "exploring-programming",
    stepNumber: "02",
    phase: "EXPLORING PROGRAMMING",
    title: "Mastering Core Languages & Systems",
    tagline: "Writing foundational code in C, Java, and Python.",
    description:
      "Dived deep into systems programming and object-oriented architectures. Understanding pointers, memory allocation, time complexity, and data structures provided the rigid foundational discipline for everything that followed.",
    keyLearnings: ["C memory manipulation", "Java OOP architectures", "Python prototyping agility", "Data Structures & Algorithms"],
    status: "COMPLETED",
    highlightColor: "#38BDF8",
  },
  {
    id: "data-analytics",
    stepNumber: "03",
    phase: "DATA & ANALYTICS",
    title: "Uncovering Truth in Numbers",
    tagline: "Pandas, NumPy, statistical modeling, and Power BI dashboards.",
    description:
      "Realized that computation without data is incomplete. Immersed myself in statistical analysis, ETL data pipelines, SQL relational modeling, and visual storytelling through Python data libraries and Power BI.",
    keyLearnings: ["Pandas & NumPy tensor transformations", "Exploratory data analysis (EDA)", "SQL schema optimization", "BI Dashboarding"],
    status: "COMPLETED",
    highlightColor: "#F59E0B",
  },
  {
    id: "web-development",
    stepNumber: "04",
    phase: "WEB & FULL STACK DEVELOPMENT",
    title: "Engineering Scalable Digital Experiences",
    tagline: "From HTML/CSS foundations to React, Next.js, and Node.js microservices.",
    description:
      "Began building interactive web platforms. Mastered modern reactive frontend paradigms, REST APIs, asynchronous state management, and modern responsive design systems with Tailwind CSS.",
    keyLearnings: ["React & Next.js App Router", "Node.js & Flask REST APIs", "Database integration (MongoDB/SQL)", "State management"],
    status: "COMPLETED",
    highlightColor: "#10B981",
  },
  {
    id: "artificial-intelligence",
    stepNumber: "05",
    phase: "ARTIFICIAL INTELLIGENCE",
    title: "Entering Machine Learning & Neural Networks",
    tagline: "Exploring how machines learn patterns from high-dimensional representations.",
    description:
      "Transitioned from deterministic rules to probabilistic learning. Implemented classification models, regression pipelines, neural networks with backpropagation, and natural language processing pipelines.",
    keyLearnings: ["Gradient descent mathematics", "Deep neural network architectures", "Computer vision & NLP pipelines", "Feature engineering"],
    status: "COMPLETED",
    highlightColor: "#EC4899",
  },
  {
    id: "building-real-projects",
    stepNumber: "06",
    phase: "BUILDING REAL PROJECTS",
    title: "Solving Tangible Real-World Challenges",
    tagline: "Deploying AgriTrust, AquaGuard, and Mentoring Platform.",
    description:
      "Applied full stack development and machine learning to build end-to-end solutions. Built AgriTrust for crop trust telemetry, AquaGuard for community water hazard warning, and a multi-role Mentoring Platform.",
    keyLearnings: ["Full lifecycle product delivery", "Mobile cross-platform engineering (Flutter)", "GIS integration", "User-centered design"],
    status: "COMPLETED",
    highlightColor: "#00F0FF",
  },
  {
    id: "building-my-own-llm",
    stepNumber: "07",
    phase: "BUILDING MY OWN LLM",
    title: "Demystifying Transformers from Scratch",
    tagline: "Deconstructing tokenization, self-attention, and decoder architectures.",
    description:
      "Refusing to settle for black-box API wrappers, I committed to understanding what happens behind the prompt. Built and analyzed custom tokenizers, vector embeddings, multi-head self-attention, and transformer blocks in PyTorch from mathematical first principles.",
    keyLearnings: ["Scaled dot-product attention", "Token embedding vector math", "Transformer block stacking", "Autoregressive generation"],
    status: "CURRENT FOCUS",
    highlightColor: "#8B5CF6",
  },
  {
    id: "apex-labs",
    stepNumber: "08",
    phase: "FOUNDING APEX LABS",
    title: "Initiating a Technology & Digital Solutions Hub",
    tagline: "Empowering ideas with websites, chatbots, ML systems, and digital content.",
    description:
      "Founded Apex Labs as an entrepreneurial initiative to translate complex technological capabilities into practical products for creators, businesses, and communities.",
    keyLearnings: ["Technical leadership", "Client digital solutions", "Full stack agency execution", "Brand & social strategy"],
    status: "CURRENT FOCUS",
    highlightColor: "#A855F7",
  },
  {
    id: "whats-next",
    stepNumber: "09",
    phase: "WHAT'S NEXT?",
    title: "Pushing the Frontier of Intelligent Systems",
    tagline: "Autonomous multi-agent architectures, reasoning models, and global digital products.",
    description:
      "Continuing to explore cutting-edge AI research, distributed system architectures, high-performance web experiences, and scaling Apex Labs into a recognized digital innovation powerhouse.",
    keyLearnings: ["Agentic reasoning workflows", "Production ML deployment", "High-frequency digital experiences", "Global entrepreneurial impact"],
    status: "FUTURE VISION",
    highlightColor: "#38BDF8",
  },
];

