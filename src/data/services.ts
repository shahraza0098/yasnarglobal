export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  iconName: "Globe" | "Smartphone" | "Blocks" | "Bot" | "Palette" | "Cloud" | "Code2" | "Plug";
  capabilities: string[];
  overview: string;
  deliverables: string[];
}

export interface ServicePrinciple {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    shortDescription:
      "We build modern, responsive, and scalable websites and web applications tailored to your business needs.",
    iconName: "Globe",
    capabilities: [
      "Corporate websites",
      "Business websites",
      "SaaS platforms",
      "E-commerce websites",
      "Custom web applications",
      "API and backend development",
      "Website maintenance and optimization",
    ],
    overview:
      "Our web development practice delivers responsive, performant, and search-optimized web applications. From corporate web presences to complex web platforms, we engineer clean frontends and robust backends built to support business operations.",
    deliverables: [
      "Responsive, cross-browser web interfaces",
      "Modern full-stack architecture",
      "RESTful & GraphQL API integrations",
      "Performance optimization & SEO foundation",
    ],
  },
  {
    id: "mobile-app-development",
    number: "02",
    title: "Mobile App Development",
    shortDescription:
      "We develop intuitive, high-performance mobile applications that deliver seamless experiences across Android and iOS.",
    iconName: "Smartphone",
    capabilities: [
      "Android app development",
      "iOS app development",
      "Cross-platform applications",
      "Custom mobile applications",
      "App UI/UX implementation",
      "Backend and API integration",
      "App deployment and maintenance",
    ],
    overview:
      "We engineer intuitive, responsive mobile applications that provide reliable user experiences across Android and iOS. Our mobile engineering emphasizes clean architecture, accessible touch design, offline readiness, and fluid interactions.",
    deliverables: [
      "Native & cross-platform applications",
      "Responsive, device-adaptive layouts",
      "Secure API integration & offline storage",
      "Store release & deployment support",
    ],
  },
  {
    id: "blockchain-development",
    number: "03",
    title: "Blockchain Development",
    shortDescription:
      "We explore blockchain technology to build transparent, secure, and decentralized digital solutions for modern businesses.",
    iconName: "Blocks",
    capabilities: [
      "Blockchain application development",
      "Smart contract development",
      "Web3 applications",
      "Wallet integration",
      "Blockchain API integration",
      "Decentralized application development",
    ],
    overview:
      "We evaluate and build practical decentralized applications and blockchain integrations tailored to specific operational requirements. Our focus is on transparent architecture, deterministic logic, and secure interaction between traditional business systems and decentralized protocols.",
    deliverables: [
      "Decentralized application architectures",
      "Smart contract business logic",
      "Web3 wallet & identity integrations",
      "Node & network connectivity services",
    ],
  },
  {
    id: "ai-agent-workflow-integration",
    number: "04",
    title: "AI Agent & Workflow Integration",
    shortDescription:
      "We integrate AI-powered agents and intelligent automation into business workflows to reduce repetitive work and improve operational efficiency.",
    iconName: "Bot",
    capabilities: [
      "AI agent development",
      "Custom AI assistants",
      "Business workflow automation",
      "AI-powered customer support",
      "AI API integration",
      "LLM integration",
      "CRM and business tool integration",
      "Document and knowledge-base automation",
      "Multi-step AI workflows",
    ],
    overview:
      "We build intelligent assistants and automated agent workflows that streamline internal processes. By integrating modern large language models, retrieval systems, and existing business tools, we help organizations reduce manual repetition and improve response times.",
    deliverables: [
      "Custom conversational agents & assistants",
      "Automated document processing pipelines",
      "Knowledge retrieval (RAG) connections",
      "Integration with ticketing, CRM, & messaging tools",
    ],
  },
  {
    id: "ui-ux-design",
    number: "05",
    title: "UI/UX Design",
    shortDescription:
      "We design clean, intuitive, and engaging digital experiences that connect user needs with business goals.",
    iconName: "Palette",
    capabilities: [
      "Website design",
      "Mobile app design",
      "SaaS dashboard design",
      "User interface design",
      "User experience design",
      "Design systems",
      "Wireframes and prototypes",
    ],
    overview:
      "Our design practice blends purposeful visual simplicity with thoughtful user journeys. We create coherent design systems, intuitive navigation hierarchies, and responsive interfaces that make complex software approachable and easy to use.",
    deliverables: [
      "Interactive wireframes and user flow diagrams",
      "Comprehensive design systems & component libraries",
      "High-fidelity UI mockups for web and mobile",
      "Accessible design specifications & handover assets",
    ],
  },
  {
    id: "saas-product-development",
    number: "06",
    title: "SaaS Product Development",
    shortDescription:
      "We help transform ideas into scalable software products with thoughtful architecture, modern interfaces, and reliable functionality.",
    iconName: "Cloud",
    capabilities: [
      "SaaS MVP development",
      "Subscription-based platforms",
      "Admin dashboards",
      "Multi-user applications",
      "Payment integration",
      "Database architecture",
      "Cloud deployment",
    ],
    overview:
      "From initial MVP definition to production SaaS architecture, we build multi-tenant software platforms designed for stability and growth. We engineer secure authentication, billing, role-based controls, and structured database models.",
    deliverables: [
      "Minimum Viable Product (MVP) development",
      "Multi-tenant data modeling & authentication",
      "Subscription billing & payment gateways",
      "Scalable cloud infrastructure setup",
    ],
  },
  {
    id: "custom-software-development",
    number: "07",
    title: "Custom Software Development",
    shortDescription:
      "We create software solutions tailored to the unique processes, challenges, and goals of your business.",
    iconName: "Code2",
    capabilities: [
      "Business management software",
      "Custom dashboards",
      "Internal tools",
      "Enterprise applications",
      "Database-driven applications",
      "Third-party integrations",
      "Software modernization",
    ],
    overview:
      "When off-the-shelf software falls short, we develop custom solutions built directly around your operational procedures. We focus on clean code, maintainable systems, and direct integration with your existing data and operational tools.",
    deliverables: [
      "Custom internal tooling & operational portals",
      "Data reporting & management dashboards",
      "Legacy system modernization & refactoring",
      "Structured documentation & maintainability guides",
    ],
  },
  {
    id: "api-system-integration",
    number: "08",
    title: "API & System Integration",
    shortDescription:
      "We connect your digital systems, services, and platforms to create efficient and connected business workflows.",
    iconName: "Plug",
    capabilities: [
      "REST API development",
      "Third-party API integration",
      "Payment gateway integration",
      "CRM integrations",
      "Database integration",
      "Cloud service integration",
      "Backend system integration",
    ],
    overview:
      "We bridge disparate platforms, databases, and third-party APIs into synchronized, dependable systems. Our integration architectures emphasize predictable data flow, error handling, security, and low latency.",
    deliverables: [
      "Secure REST API endpoints & webhooks",
      "Third-party platform connectors (CRM, Payment, ERP)",
      "Automated data synchronization pipelines",
      "Comprehensive API documentation & logging",
    ],
  },
];

export const SERVICE_PRINCIPLES: ServicePrinciple[] = [
  {
    number: "01",
    title: "Purpose-Driven",
    description: "Technology designed around real business needs.",
  },
  {
    number: "02",
    title: "Scalable Solutions",
    description: "Flexible foundations that can grow with your requirements.",
  },
  {
    number: "03",
    title: "Modern Technology",
    description: "Thoughtful use of current tools, frameworks, and emerging technologies.",
  },
  {
    number: "04",
    title: "Collaborative Approach",
    description: "Clear communication and collaboration throughout the project.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "Understand your idea, business needs, and project goals.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Define the scope, technology direction, and project roadmap.",
  },
  {
    step: "03",
    title: "Build",
    description: "Design and develop the solution with regular feedback.",
  },
  {
    step: "04",
    title: "Launch & Improve",
    description: "Deploy the product and support future improvements as needed.",
  },
];
