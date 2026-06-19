export const siteConfig = {
  name: "Bui Xuan Hien",
  displayName: "Bui Xuan Hien",
  nativeName: "Bui Xuan Hien",
  role: "Backend Software Engineer",
  company: "FPT Software",
  school: "FPT University",
  graduation: "Expected graduation: November 2026",
  location: "Ho Chi Minh City, Vietnam",
  brandStatement:
    "Backend Engineer focused on building reliable APIs, scalable cloud-ready systems, and clean architecture solutions.",
  heroHeadline:
    "Building reliable APIs, scalable backend systems, and clean architecture that holds up in production.",
  description:
    "Portfolio of Bui Xuan Hien, a backend software engineer at FPT Software focused on API design, system design, cloud-ready architecture, and production-minded engineering.",
  defaultSiteUrl: "https://xuanhien.dev",
  githubUrl: "https://github.com/xuanhien010204",
  linkedinUrl: "https://vn.linkedin.com/in/b%C3%B9i-xu%C3%A2n-hi%C3%AAn-4a45042b7",
  resumePath: "/Bui-Xuan-Hien-Resume.md",
} as const;

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "design", label: "System Design" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
] as const;

export const heroSignals = [
  "Backend-first engineering mindset",
  "Current role at FPT Software",
  "Building while studying at FPT University",
  "Clean Architecture and cloud-ready systems",
] as const;

export const heroMetrics = [
  { value: "3", label: "Flagship systems showcased" },
  { value: "2", label: "Primary backend ecosystems (.NET and Spring)" },
  { value: "2026", label: "Expected graduation while already shipping software" },
] as const;

export const engineeringPrinciples = [
  {
    title: "Reliability over demo code",
    description:
      "I care about transaction boundaries, authorization rules, state transitions, and the boring details that keep systems trustworthy in production.",
  },
  {
    title: "Architecture with intent",
    description:
      "I prefer clear boundaries between API, application, domain, and infrastructure so features stay understandable as the system grows.",
  },
  {
    title: "Cloud-ready delivery",
    description:
      "I design backend services to be deployable, observable, and easy to move through CI/CD pipelines instead of living only on a laptop.",
  },
  {
    title: "Continuous growth loop",
    description:
      "Working as an engineer while finishing university keeps my learning grounded in real constraints, real feedback, and real delivery pressure.",
  },
] as const;

export const experienceTimeline = [
  {
    period: "Current",
    title: "Software Engineer",
    organization: "FPT Software",
    summary:
      "Contributing as a professional engineer while still completing a software engineering degree, with a strong emphasis on backend execution quality and maintainable delivery.",
    bullets: [
      "Build backend features with an API-first mindset and careful attention to data consistency.",
      "Approach production work through clean boundaries, testability, and deployment readiness.",
      "Translate engineering requirements into reliable implementation details rather than surface-level feature code.",
    ],
  },
  {
    period: "2024 - Present",
    title: "Founder and Leader",
    organization: "FPT Cyber Security Club",
    summary:
      "Created and led a student technical community focused on security awareness, peer learning, and practical problem solving.",
    bullets: [
      "Set direction for club activities, knowledge sharing, and member growth.",
      "Helped connect technical curiosity with hands-on learning and engineering discipline.",
      "Built leadership experience alongside individual contributor engineering work.",
    ],
  },
  {
    period: "Flagship build",
    title: "Backend Engineer",
    organization: "ASRP Platform",
    summary:
      "Designed and implemented backend capabilities for a large-scale multi-brand restaurant platform with business-heavy workflows and architecture discipline.",
    bullets: [
      "Modeled order lifecycle rules, pickup scheduling logic, reviews, payments, analytics, and RBAC authorization.",
      "Applied Clean Architecture, CQRS, specification-based querying, and Docker-based delivery.",
      "Integrated PostgreSQL and AWS S3 while keeping feature growth aligned with a coherent application structure.",
    ],
  },
  {
    period: "Academic to production bridge",
    title: "Software Engineering Student",
    organization: "FPT University",
    summary:
      "Studying software engineering with a practical portfolio built around production-oriented backend systems rather than only classroom exercises.",
    bullets: [
      "Expected graduation in November 2026.",
      "Focused on turning coursework into architecture, deployment, and API design depth.",
      "Used projects as a laboratory for applying industry patterns under realistic constraints.",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Backend",
    summary:
      "The center of gravity is service design, request flow, authorization, persistence boundaries, and maintainable application logic.",
    skills: [
      "C#",
      "ASP.NET Core",
      ".NET 8 / .NET 10",
      "Entity Framework Core",
      "REST API",
      "Clean Architecture",
      "CQRS",
      "Specification Pattern",
      "JWT Authentication",
      "SignalR",
      "Hangfire",
      "Java",
      "Spring Boot",
    ],
  },
  {
    title: "Cloud and DevOps",
    summary:
      "I think about how software leaves development machines and survives real environments, releases, and infrastructure differences.",
    skills: [
      "Azure",
      "Azure Functions",
      "Cosmos DB",
      "AWS S3",
      "AWS RDS",
      "Docker",
      "Docker Compose",
      "Nginx",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    title: "Databases",
    summary:
      "Strong backend work depends on good data modeling, clear query intent, and respect for consistency, performance, and change over time.",
    skills: ["SQL Server", "PostgreSQL", "Redis", "Database Design", "Query Optimization"],
  },
  {
    title: "Frontend and Collaboration",
    summary:
      "Frontend is not the main identity, but understanding the client layer helps me design better contracts and smoother team workflows.",
    skills: ["React", "TypeScript", "Tailwind CSS", "API Contract Design", "GitHub", "Agile Collaboration"],
  },
] as const;

export const featuredProjects = [
  {
    name: "ASRP Platform",
    status: "Flagship architecture case study",
    overview:
      "A large-scale multi-brand restaurant platform designed to centralize operations across brands while keeping order workflows, reviews, payments, and analytics coherent.",
    architecture: [
      "Clean Architecture with strong separation between API, application, domain, and infrastructure concerns.",
      "CQRS-style request handling for clearer feature boundaries and more maintainable growth.",
      "PostgreSQL persistence combined with AWS S3 integration and Dockerized deployment workflows.",
    ],
    challenges: [
      "Handling a complex order lifecycle without letting state transitions become scattered across controllers.",
      "Designing pickup scheduling logic that respects business rules while staying testable and extensible.",
      "Keeping RBAC authorization and payment-related flows disciplined as features expand across multiple brands.",
    ],
    impact:
      "Shows my strongest backend profile: architecture-driven delivery, business workflow modeling, and platform thinking beyond a single CRUD module.",
    stack: [
      "ASP.NET Core",
      "Clean Architecture",
      "CQRS",
      "PostgreSQL",
      "AWS S3",
      "Docker",
      "RBAC",
      "Analytics",
    ],
  },
  {
    name: "Course Management System",
    status: "Cloud-deployed academic product build",
    overview:
      "A system covering authentication, course operations, assignments, Q&A, and notifications, built to connect backend implementation with a realistic product workflow.",
    architecture: [
      "Authentication and course management centered around clear API contracts and reliable state changes.",
      "Azure deployment used to move the project beyond local development and into cloud-oriented delivery.",
      "Feature surface designed to exercise practical modules instead of isolated textbook examples.",
    ],
    challenges: [
      "Balancing feature breadth across courses, assignments, Q&A, and notifications without losing backend clarity.",
      "Designing a structure that can support both operational features and future expansion.",
      "Connecting application logic with deployment concerns early in the project lifecycle.",
    ],
    impact:
      "Demonstrates growth from classroom implementation toward product-minded engineering with deployment awareness.",
    stack: ["ASP.NET Core", "Authentication", "Azure", "Notifications", "Course Workflows"],
  },
  {
    name: "Restaurant Management API",
    status: "Cross-stack backend proof point",
    overview:
      "A backend API focused on JWT authentication, menu management, reservations, and user management, built with Spring Boot to show cross-ecosystem backend fluency.",
    architecture: [
      "RESTful service design with clearly scoped modules for reservations, menus, and user operations.",
      "JWT-based authentication for secure access patterns across the platform.",
      "Backend design experience translated from .NET into Java and Spring Boot without losing engineering discipline.",
    ],
    challenges: [
      "Maintaining clean API behavior across multiple business areas in a different backend ecosystem.",
      "Designing reservation and menu flows that stay understandable and maintainable.",
      "Proving that my engineering mindset is architectural rather than framework-dependent.",
    ],
    impact:
      "Strengthens my positioning as a backend engineer who can transfer system design principles across technologies.",
    stack: ["Java", "Spring Boot", "JWT", "REST API", "User Management"],
  },
] as const;

export const systemDesignShowcase = [
  {
    eyebrow: "Clean Architecture",
    title: "Layered boundaries for long-term maintainability",
    description:
      "I structure systems so transport logic, use cases, business rules, and infrastructure concerns do not collapse into each other over time.",
    nodes: ["API", "Application", "Domain", "Infrastructure"],
    footer:
      "The payoff is thinner controllers, clearer dependencies, and easier feature growth when requirements become more complex.",
  },
  {
    eyebrow: "CQRS and API Design",
    title: "Separate intent, validation, and read complexity",
    description:
      "Commands capture state changes. Queries focus on read shape. The result is a codebase where responsibilities are easier to reason about and evolve.",
    nodes: ["Client", "Command / Query", "Validation", "Handler", "Read Model / Result"],
    footer:
      "This approach reduces feature coupling and makes edge cases more visible during implementation.",
  },
  {
    eyebrow: "Data and cloud delivery",
    title: "Persistence, caching, and deployment designed together",
    description:
      "Databases, storage, and delivery pipelines are part of system design, not afterthoughts added after the code already works locally.",
    nodes: ["PostgreSQL / SQL Server", "Redis", "AWS S3 / Azure", "Docker / Nginx", "GitHub Actions"],
    footer:
      "I focus on backend systems that are understandable to operate as well as understandable to code.",
  },
] as const;

export const githubHighlights = [
  "Active open source learner with a public GitHub profile that reflects ongoing practice, experimentation, and project depth.",
  "Uses GitHub as both a delivery tool and a learning surface for improving architecture, debugging, and collaboration habits.",
  "The profile complements the portfolio by showing code activity, language distribution, and consistency over time.",
] as const;

export const certifications = [
  {
    title: "Azure Fundamentals",
    status: "Target certification",
    description:
      "Natural next step for formalizing cloud fundamentals around services, pricing, architecture, and operational understanding.",
  },
  {
    title: "Azure Developer Associate",
    status: "Planned growth track",
    description:
      "Aligned with backend engineering goals around cloud-native development, deployments, integrations, and service design.",
  },
  {
    title: "AWS Cloud Practitioner",
    status: "Planned breadth",
    description:
      "Supports practical multi-cloud awareness, especially around storage, databases, and infrastructure vocabulary used in delivery teams.",
  },
  {
    title: "Continuous system design study",
    status: "Ongoing",
    description:
      "In practice, I am already strengthening this area through architecture-driven project work, backend writing, and production-minded learning.",
  },
] as const;

export const leadershipItems = [
  {
    title: "FPT Cyber Security Club",
    description:
      "Founded and led a technical student community focused on security awareness, practical learning, and engineering curiosity.",
  },
  {
    title: "Mentoring and peer support",
    description:
      "I enjoy helping peers think more clearly about backend design, debugging, and why implementation details matter beyond passing tests.",
  },
  {
    title: "Technical writing",
    description:
      "I document backend lessons such as concurrency, reliability, and engineering tradeoffs so knowledge compounds instead of disappearing after delivery.",
  },
  {
    title: "Work while studying",
    description:
      "Balancing professional engineering work with university has accelerated maturity, ownership, and the ability to learn under real delivery pressure.",
  },
] as const;

export const contactPillars = [
  "Backend engineering opportunities",
  "API and architecture discussions",
  "Cloud-ready product work",
  "Technical collaboration with founders or engineering leads",
] as const;

export const roadmap = [
  "Add real case-study pages for each flagship project with deeper architecture breakdowns.",
  "Publish technical articles and link them into the leadership and GitHub sections.",
  "Connect live GitHub and LinkedIn data through APIs for richer activity storytelling.",
  "Replace the resume snapshot with a branded PDF and add production analytics after deployment.",
] as const;
