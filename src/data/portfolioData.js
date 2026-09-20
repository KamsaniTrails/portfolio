export const portfolioData = {
  personal: {
    name: "Aayush Kashyap",
    initials: "AK",
    avatar: "/me.png",
    tagline: "Software engineer specializing in full-stack web development, cloud deployment, and AI-driven automation.",
    about: "I’m a Full-Stack Software Engineer building production-ready applications across frontend, backend, and cloud. I work with React, Next.js, TypeScript, Node.js, FastAPI, PostgreSQL, and AWS. I specialize in real-time systems using WebSockets, WebRTC, and Socket.io. I also build AI-powered solutions with RAG, vector databases, and LLM integrations.",
    email: "ayush.kashyap.work08@gmail.com",
    calLink: "https://cal.com/kashyaap.a/connect-w-kashyaap",
  },
  socials: {
    github: "https://github.com/AayushKP",
    linkedin: "https://linkedin.com/in/ayush-kashyap-240655257",
    x: "https://x.com/aayuk_5183",
  },
  work: [
    {
      id: "optimence",
      company: "Optimence",
      role: "SDE Intern",
      period: "Oct'25 - Nov'25",
      logo: "/optimence.png",
      description: "Engineered scalable full-stack features using React, TypeScript, Node.js, and PostgreSQL. Integrated microservices, optimized REST & WebSocket APIs, and implemented automated CI/CD deployment pipelines."
    },
    {
      id: "edunet",
      company: "Edunet Foundation",
      role: "AI & Cloud Intern",
      period: "July'25 - Aug'25",
      logo: "/edunet.png",
      description: "Developed and deployed cloud-native applications utilizing AWS and containerized workflows. Built AI-driven automation prototypes leveraging vector databases, LLM endpoints, and RAG pipelines."
    },
    {
      id: "hitk-work",
      company: "Heritage Institute of Technology",
      role: "Freelance Engineer",
      period: "June'25 - July'25",
      logo: "/hitk.webp",
      description: "Designed and developed custom web portals and IoT management dashboards with real-time telemetry, WebSocket streaming, and interactive data visualization charts."
    }
  ],
  education: [
    {
      institution: "Heritage Institute of Technology",
      degree: "B.Tech in CSE(IOT)",
      period: "2022 - 2026",
      logo: "/hitk.webp",
      link: "https://heritageit.edu"
    },
    {
      institution: "Vidya Bhawan Balika Vidyapith",
      degree: "Higher Secondary Education (Class 12th)",
      period: "2021 - 2022",
      logo: "/bvp.png",
      link: "http://balikavidyapith.com"
    }
  ],
  skills: [
    "Javascript",
    "React.js",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "Python",
    "C++",
    "AWS",
    "Postgres",
    "TailwindCSS",
    "MongoDB",
    "Docker",
    "Socket.io",
    "Prisma ORM",
    "Hono",
    "Cloudflare Workers",
    "Git",
    "GitHub",
    "Zustand",
    "Websockets",
    "WebRTC",
    "Supabase",
    "Redis",
    "Qdrant",
    "RAG",
    "VectorDB",
    "Prompt Eng"
  ],
  projects: [
    {
      id: "profiled",
      title: "Profiled",
      description: "A portfolio builder that lets users create professional portfolios using customizable templates, auto-fill details from resumes, and share them instantly via personalized subdomain links.",
      image: "/profiled.png",
      website: "https://profiled.site",
      source: "https://github.com/AayushKP/profiled",
      tags: ["Drizzle", "BetterAuth", "Supabase", "Next.js", "TailwindCSS", "Vercel"]
    },
    {
      id: "p2p",
      title: "P2P File Sharing System",
      description: "Browser-based peer-to-peer file sharing using WebRTC DataChannels, with WebSockets limited to signaling and optimized chunked streaming for large files",
      image: "/p2p-sharing.png",
      website: "https://p2p-sharing.vercel.app",
      source: "https://github.com/AayushKP/p2p-sharing",
      tags: ["React", "WebRTC", "WebSockets", "Node.js", "TailwindCSS"]
    },
    {
      id: "comuniq",
      title: "ComuniQ",
      description: "ComuniQ is a real-time chat application crafted for seamless communication through direct messages and group channels.",
      image: "/comuniq.png",
      website: "https://chat-comuniq.vercel.app",
      source: "https://github.com/AayushKP/ComuniQ",
      tags: ["React", "Tailwind", "Zustand", "Node.js", "Express", "Multer", "MongoDB", "Socket.io", "Cloudinary", "AWS", "NGINX"]
    },
    {
      id: "convowpdf",
      title: "ConvoWPDF: Conversational RAG Platform",
      description: "Production-oriented conversational RAG platform with Google OAuth, PDF ingestion, asynchronous processing, vector search, and context-aware document conversations using FastAPI, Qdrant, Redis RQ, and Gemini embeddings",
      image: "/convowpdf.png",
      website: "https://convowpdf.vercel.app",
      source: "https://github.com/AayushKP/PDF.chat",
      tags: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Qdrant", "Redis", "RAG", "Google Gemini", "Cloudflare R2", "Docker"]
    },
    {
      id: "taskqueue",
      title: "Distributed Task Queue",
      description: "High-throughput asynchronous task queue with worker pools, dead-letter queues, and Redis-backed state machine.",
      image: "/profiled.png",
      website: "https://github.com/AayushKP",
      source: "https://github.com/AayushKP",
      tags: ["Node.js", "Redis", "Docker", "TypeScript"],
      extra: true
    },
    {
      id: "vector-search",
      title: "Vector Semantic Search Engine",
      description: "Fast neural semantic search engine utilizing HNSW indexing, cross-encoders for re-ranking, and FastAPI backend.",
      image: "/convowpdf.png",
      website: "https://github.com/AayushKP",
      source: "https://github.com/AayushKP",
      tags: ["Python", "FastAPI", "Qdrant", "PyTorch"],
      extra: true
    }
  ],
  blogPosts: [
    {
      num: "01",
      title: "Neurons & Neural Networks",
      link: "https://medium.com/@kashyaap.a/neurons-neural-networks-efce5252b66a"
    },
    {
      num: "02",
      title: "How the JavaScript Engine Works",
      link: "https://medium.com/@kashyaap.a/how-the-javascript-engine-works-c56e9536d808"
    },
    {
      num: "03",
      title: "Behind the Scenes of JavaScript Asynchronous Magic",
      link: "https://medium.com/@kashyaap.a/behind-the-scenes-of-javascript-asynchronous-magic-b257a74c5bb5"
    },
    {
      num: "04",
      title: "Making My App Faster and Scalable: Redis",
      link: "https://medium.com/@kashyaap.a/making-my-app-faster-and-scalable-what-i-learned-about-redis-ac1256b8a68f"
    },
    {
      num: "05",
      title: "A Deep Dive into the Transformer Architecture",
      link: "https://medium.com/@kashyaap.a/a-deep-dive-into-the-transformer-architecture-714fec96f6b1?sharedUserId=kashyaap.a"
    }
  ]
};
