const base = import.meta.env.BASE_URL || '/';

export const portfolioData = {
  personal: {
    name: "K Mohana Sree",
    initials: "MS",
    avatar: `${base}mohana.jpg`,
    resumePdf: `${base}K_MohanaSree_Resume.pdf`,
    role: "Full Stack AI Engineer & Computer Science Undergraduate",
    tagline: "Building production-ready AI systems with RAG, Agentic AI, LangGraph multi-agent workflows, and resilient MERN full-stack architectures.",
    about: "I'm a Computer Science undergraduate and Full Stack AI Engineer building production-ready AI systems for Healthcare, Education, and Warehouse Intelligence. Skilled in RAG pipelines, Agentic AI, multi-agent LangGraph workflows, and secure React/Node full-stack applications. I possess strong core fundamentals in Java, Python, JavaScript, DSA (500+ problems solved across LeetCode & GeeksforGeeks), and DBMS, backed by AI-assisted development workflows and high end-to-end ownership across the SDLC. CGPA: 8.85/10.",
    email: "mohanasree9441@gmail.com",
    phone: "+91 9441936911",
    location: "Chittoor, Andhra Pradesh, India",
    educationLevel: "B.Tech in CSE (2023 - 2027) — RGUKT Srikakulam",
    cgpa: "8.85 / 10",
    pucGpa: "9.30 / 10",
    calLink: "mailto:mohanasree9441@gmail.com",
  },
  socials: {
    github: "https://github.com/KamsaniTrails",
    linkedin: "https://linkedin.com/in/",
    email: "mailto:mohanasree9441@gmail.com",
    phone: "tel:+919441936911",
  },
  achievements: [
    {
      metric: "500+",
      label: "DSA Problems Solved",
      description: "Across LeetCode and GeeksforGeeks, strengthening core algorithmic intuition and data structure problem-solving."
    },
    {
      metric: "4+",
      label: "AI-Native Production Systems",
      description: "Built end-to-end RAG pipelines, LangGraph multi-agent workflows, and LLM-powered EdTech platforms."
    },
    {
      metric: "24+",
      label: "REST APIs & 36+ React Components",
      description: "Engineered scalable RESTful microservices, JWT security, and reusable React design systems."
    },
    {
      metric: "8.85",
      label: "B.Tech CGPA / 10",
      description: "Top academic rank at Rajiv Gandhi University of Knowledge Technologies (RGUKT), Srikakulam."
    }
  ],
  work: [
    {
      id: "pratinik",
      company: "Pratinik Infotech Pvt Ltd",
      role: "Full Stack AI Engineer Intern",
      period: "May 2025 – Jul 2025",
      logo: `${base}pratinik.svg`,
      location: "India (Hybrid)",
      description: "Developed full-stack MERN applications using React.js, Node.js, Express.js, and MongoDB; built and integrated REST APIs, optimizing MongoDB schemas for efficient, scalable data management. Independently owned features end-to-end in a product engineering team — from design through debugging, API testing, and deployment — demonstrating initiative and high ownership in a real product environment.",
      highlights: [
        "Architected and integrated robust REST APIs with optimized MongoDB schema indexes for low-latency queries.",
        "Owned end-to-end feature deliverables across sprint cycles: design, coding, unit testing, and deployment.",
        "Implemented secure JWT authentication and role-based access control across MERN stack modules."
      ]
    }
  ],
  education: [
    {
      institution: "RGUKT, Srikakulam",
      degree: "B.Tech, Computer Science and Engineering",
      period: "2023 – 2027",
      score: "CGPA: 8.85 / 10",
      logo: `${base}rgukt.svg`,
      link: "https://www.rguktsklm.ac.in",
      details: "Focus on Data Structures & Algorithms, Object-Oriented Programming, DBMS, and Operating Systems."
    },
    {
      institution: "RGUKT, Srikakulam",
      degree: "Pre-University Course (PUC)",
      period: "2021 – 2023",
      score: "GPA: 9.30 / 10",
      logo: `${base}rgukt.svg`,
      link: "https://www.rguktsklm.ac.in",
      details: "Mathematics, Physics, and Chemistry integrated curriculum with top academic percentile honors."
    }
  ],
  skillsCategories: [
    {
      category: "AI & Agentic Systems",
      skills: [
        "RAG (Retrieval-Augmented Generation)",
        "Agentic AI",
        "LangGraph",
        "LangChain",
        "OpenAI API & GPT-4",
        "Prompt Engineering",
        "Tool & Function Calling",
        "Vector Embeddings",
        "Semantic Search",
        "Pinecone",
        "FAISS",
        "ChromaDB"
      ]
    },
    {
      category: "Languages & Core CS",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "C",
        "SQL",
        "Data Structures & Algorithms (500+)",
        "OOP",
        "DBMS",
        "Operating Systems"
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        "React.js",
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "Responsive Web Design"
      ]
    },
    {
      category: "Backend & Real-Time",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful API Design",
        "JWT Authentication",
        "WebRTC",
        "Socket.io",
        "Middleware Architecture"
      ]
    },
    {
      category: "Databases & AI Dev Tools",
      skills: [
        "MongoDB (Atlas / Cloud)",
        "PostgreSQL",
        "MySQL",
        "Database & Schema Design",
        "GitHub Copilot",
        "Claude Code",
        "Git & GitHub",
        "Postman",
        "VS Code",
        "SDLC & API Testing"
      ]
    }
  ],
  skills: [
    "RAG",
    "Agentic AI",
    "LangGraph",
    "LangChain",
    "OpenAI API",
    "Vector DB (Pinecone / FAISS)",
    "Python",
    "Java",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "WebRTC",
    "Socket.io",
    "REST APIs",
    "JWT Auth",
    "TailwindCSS",
    "Git / GitHub",
    "DSA (500+)"
  ],
  projects: [
    {
      id: "rag-document-qa",
      title: "RAG-based Document Q&A Chatbot",
      period: "May 2026 – Aug 2026",
      category: "Retrieval-Augmented Generation",
      tagline: "Enterprise document intelligence with cited answers and streaming UI",
      description: "Built a production RAG chain that answers queries over uploaded PDF and DOCX files with source-grounded responses, tailored for document-heavy healthcare and education workflows. Engineered ingestion chunking with Pinecone vector storage, modular LangChain orchestration, and a responsive React UI with citation highlighting.",
      bulletPoints: [
        "Built a RAG chain that answers queries over uploaded documents (PDF/DOCX) with source-grounded responses, applicable to document-heavy workflows in healthcare and education.",
        "Built a document ingestion pipeline (chunking, embeddings, Pinecone vector storage) and 6+ REST APIs for upload, query, and retrieval.",
        "Designed a modular RAG orchestration layer in LangChain, handling multi-document context windows and source citation mapping.",
        "Built a React.js chat UI with streaming responses, citation highlighting, and conversation history persisted in MongoDB.",
        "Informally evaluated retrieval accuracy and response groundedness across test queries to tune chunking size and retrieval parameters."
      ],
      image: `${base}project_rag.jpg`,
      source: "https://github.com/KamsaniTrails/rag_project",
      tags: ["LangChain", "Python", "Node.js", "React.js", "OpenAI API", "Pinecone", "MongoDB"]
    },
    {
      id: "langgraph-research-assistant",
      title: "Multi-Agent Research Assistant with LangGraph",
      period: "Aug 2026 – Sep 2026",
      category: "Agentic AI & State Graphs",
      tagline: "Stateful cyclic multi-agent reasoning and task decomposition",
      description: "Designed a stateful cyclic Agentic AI system featuring planner, retriever, and executor nodes coordinated through LangGraph's state graph API. Integrated persistent checkpointing, FAISS local vector retrieval, and OpenAI function calling with an interactive React visualizer to trace agent transitions and tool execution.",
      bulletPoints: [
        "Designed a stateful multi-agent (Agentic AI) workflow (planner, retriever, executor) as a cyclic graph with conditional edges, retries, and human-in-the-loop checkpoints.",
        "Built planner, retriever, and executor agent nodes with distinct system prompts and tool bindings, coordinated through LangGraph's state graph API.",
        "Implemented LangGraph checkpointing for persistent state and tool-calling agents for task decomposition.",
        "Integrated FAISS for local vector retrieval and OpenAI function calling for structured tool invocation within the agent loop.",
        "Improved accuracy on multi-hop queries over a single-chain RAG baseline; built a React.js view to trace agent state transitions and tool calls."
      ],
      image: `${base}project_langgraph.jpg`,
      source: "https://github.com/KamsaniTrails/langchain",
      tags: ["LangGraph", "LangChain", "Python", "Node.js", "OpenAI API", "FAISS", "React.js"]
    },
    {
      id: "ai-mock-interview",
      title: "AI Mock Interview Platform",
      period: "Jan 2026 – Apr 2026",
      category: "EdTech & Generative AI",
      tagline: "Role-based technical interview simulations with real-time speech evaluation",
      description: "Built an intelligent EdTech platform generating dynamic role-based technical interview questions via the OpenAI API. Features 8+ secure REST APIs with JWT authentication, MongoDB interview session schemas, real-time speech-to-text transcription, and an automated multi-criteria evaluation pipeline.",
      bulletPoints: [
        "Built an education-technology platform generating role-based technical interview questions via the OpenAI API.",
        "Developed 8+ secure REST APIs with JWT-based authentication and role-based access control.",
        "Designed MongoDB schemas for interview sessions, question banks, and user performance history.",
        "Developed 10+ reusable React components with speech recognition for real-time answer transcription.",
        "Built an OpenAI-based evaluation pipeline that scores responses and generates personalized feedback."
      ],
      image: `${base}project_interview.jpg`,
      source: "https://github.com/KamsaniTrails/ai-mockInterview",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Web Speech"]
    },
    {
      id: "webrtc-video-call",
      title: "Real-Time Video Call Application",
      period: "Nov 2025 – Dec 2025",
      category: "Real-Time Systems & WebRTC",
      tagline: "Peer-to-peer HD video conferencing with dynamic NAT traversal",
      description: "Developed a real-time peer-to-peer video calling application utilizing WebRTC media streaming and Socket.io signaling. Features dynamic ICE candidate exchange, multi-user rooms, camera and microphone toggling, screen sharing, and resilient reconnect handling.",
      bulletPoints: [
        "Built a real-time peer-to-peer video calling application using WebRTC for media streaming and Socket.io as the signaling server.",
        "Implemented room-based session management with dynamic ICE candidate exchange and configuration for NAT traversal.",
        "Added multi-user room support with mute/camera toggle and screen-sharing controls.",
        "Built a responsive React.js UI for call controls, participant grid, and connection status indicators.",
        "Handled peer disconnect/reconnect edge cases to improve call stability and reduce reconnection latency."
      ],
      image: `${base}project_video_call.jpg`,
      source: null,
      tags: ["React.js", "Node.js", "Express.js", "WebRTC", "Socket.io"]
    }
  ],
  blogPosts: [
    {
      num: "01",
      title: "Architecting Stateful Multi-Agent Systems with LangGraph & Cyclic Graphs",
      category: "Agentic AI",
      readTime: "7 min read",
      link: "https://github.com/"
    },
    {
      num: "02",
      title: "Optimizing Retrieval-Augmented Generation (RAG): Chunking Strategies & Vector Re-Ranking",
      category: "LLM & Vector DBs",
      readTime: "6 min read",
      link: "https://github.com/"
    },
    {
      num: "03",
      title: "Building Low-Latency Real-Time Video Communication using WebRTC & Socket.io",
      category: "WebRTC & Networking",
      readTime: "8 min read",
      link: "https://github.com/"
    },
    {
      num: "04",
      title: "Mastering 500+ DSA Problems: Patterns, Edge Cases & Algorithmic Intuition",
      category: "Algorithms & Problem Solving",
      readTime: "10 min read",
      link: "https://github.com/"
    },
    {
      num: "05",
      title: "Designing Production-Ready REST APIs with Express, JWT, and MongoDB Indexing",
      category: "Backend Architecture",
      readTime: "5 min read",
      link: "https://github.com/"
    }
  ]
};
