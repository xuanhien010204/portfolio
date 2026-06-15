import type {
  CaseStudy,
  ContactLink,
  ExperienceItem,
  LearningRoadmapItem,
  NavItem,
  Principle,
  Profile,
  ProjectItem,
  SkillGroup,
  SummaryCard,
} from "../types/portfolio";

export const profile: Profile = {
  name: "Bùi Xuân Hiên",
  role: "Software Engineer at FPT Software",
  specialization: ".NET Backend Engineer",
  location: "Vietnam",
  github: "https://github.com/xuanhien010204",
  email: "buixuanhien2004qn@gmail.com",
  summary:
    "I build backend-first systems with ASP.NET Core, Clean Architecture, relational databases, cloud deployment, and AI-powered automation. My focus is turning business rules into reliable APIs and maintainable production-ready software.",
};

export const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const summaryCards: SummaryCard[] = [
  {
    value: "1+ year",
    label: "Professional engineering experience",
    detail: "Working at FPT Software since Apr 2025 while continuing Software Engineering at FPT University.",
  },
  {
    value: ".NET-first",
    label: "Primary engineering stack",
    detail: "ASP.NET Core, EF Core, Identity/JWT, SQL Server, PostgreSQL, API design, and Clean Architecture.",
  },
  {
    value: "ASRP",
    label: "Strongest portfolio project",
    detail: "A backend-heavy restaurant platform with ordering, scheduling, reviews, analytics, payment flow, and deployment.",
  },
];

export const caseStudy: CaseStudy = {
  problem:
    "Restaurants need a reliable pickup-first system that can handle menu management, branch operations, customer ordering, pickup scheduling, payment status, reviews, and analytics without mixing business logic into controllers.",
  architecture: [
    "API layer stays thin and exposes stable REST contracts.",
    "Application layer owns use cases, validation, DTOs, and business workflows.",
    "Domain layer keeps core entities and business concepts independent from infrastructure.",
    "Infrastructure layer handles EF Core persistence, PostgreSQL, Redis/Hangfire, external services, and deployment concerns.",
  ],
  decisions: [
    {
      title: "Live analytics source of truth",
      text: "Analytics should aggregate from real order/payment state instead of stale cache tables when no active writer is guaranteed.",
    },
    {
      title: "Pickup scheduling as shared domain logic",
      text: "Pickup time calculation should be reused across preview, online order creation, kiosk flow, and confirmation flows.",
    },
    {
      title: "Review rules tied to completed orders",
      text: "Menu item reviews should require ownership of completed order items instead of allowing arbitrary public reviews.",
    },
    {
      title: "Deployment-aware backend",
      text: "The system is designed with Docker, Nginx, VPS, GitHub Actions, database connectivity, logging, and production troubleshooting in mind.",
    },
  ],
  stack: [
    "ASP.NET Core",
    "EF Core",
    "PostgreSQL",
    "Clean Architecture",
    "Identity/JWT",
    "Redis",
    "Hangfire",
    "Docker",
    "Nginx",
    "GitHub Actions",
  ],
};

export const experiences: ExperienceItem[] = [
  {
    title: ".NET / Java Developer",
    company: "FPT Software Quy Nhon",
    date: "Apr 2025 - Present",
    impact: "Professional engineering environment",
    points: [
      "Work with backend APIs, data workflows, SQL, .NET, Java, and cloud-related services.",
      "Practice production-oriented engineering habits: debugging, API contracts, maintainable implementation, and code review.",
      "Build experience around Azure Functions, Cosmos DB, Excel automation, and AI-powered workflow integration.",
    ],
  },
  {
    title: "Software Engineering Student",
    company: "FPT University",
    date: "2022 - Expected Nov 2026",
    impact: "Academic foundation and product-building practice",
    points: [
      "Focus on backend development, database design, software architecture, teamwork, and fullstack delivery.",
      "Build academic and personal systems with ASP.NET Core, Java Spring Boot, React, TypeScript, Tailwind CSS, SQL Server, and PostgreSQL.",
      "Practice Git/GitHub workflows, API documentation, sprint-based collaboration, and technical presentation.",
    ],
  },
  {
    title: "Founder / Lead",
    company: "FPT Cyber Security Club",
    date: "2025 - Present",
    impact: "Leadership and technical community building",
    points: [
      "Founded and led a university cyber security club focused on security, software engineering, teamwork, and practical technical activities.",
      "Coordinate people, content, communication, and operations while improving leadership and technical mentoring skills.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Backend",
    description: "Designing APIs, use cases, authentication, validation, business workflows, and maintainable service layers.",
    items: ["C#", "ASP.NET Core", "EF Core", "Identity/JWT", "REST API", "Clean Architecture", "Repository/Specification"],
  },
  {
    title: "Frontend",
    description: "Building clean interfaces and collaborating through stable API contracts and predictable data flows.",
    items: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Swagger/OpenAPI", "Responsive UI"],
  },
  {
    title: "Database",
    description: "Modeling relational data, handling persistence rules, optimizing queries, and keeping analytics grounded in reliable data.",
    items: ["SQL Server", "PostgreSQL", "Cosmos DB", "Migrations", "Query Design", "Data Consistency"],
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying backend systems and understanding the operational side of software beyond local development.",
    items: ["Azure Functions", "Azure App Service", "Docker", "GitHub Actions", "Nginx", "VPS", "AWS basics"],
  },
  {
    title: "Architecture",
    description: "Separating business rules from infrastructure details so systems stay testable, maintainable, and easier to change.",
    items: ["Clean Architecture", "SOLID", "Thin Controllers", "API Stability", "Logging", "Documentation"],
  },
];

export const principles: Principle[] = [
  {
    title: "Business Rules First",
    text: "I prefer modeling the real business rule clearly before choosing framework code or database details.",
  },
  {
    title: "Stable API Contracts",
    text: "Frontend and backend collaboration depends on predictable routes, DTOs, status codes, pagination, and error formats.",
  },
  {
    title: "Deployable Systems",
    text: "A feature is not truly done if it only works locally. Deployment, logging, configuration, and failure modes matter.",
  },
];

export const projects: ProjectItem[] = [
  {
    name: "ASRP Restaurant Platform",
    type: "Featured backend-heavy system",
    problem:
      "Multi-brand restaurant operations require reliable ordering, branch ownership, pickup scheduling, review rules, payment status, and analytics.",
    solution:
      "Designed backend workflows around Clean Architecture, EF Core persistence, branch-scoped business rules, pickup scheduling service, live analytics, and deployment-ready infrastructure.",
    stack: ["ASP.NET Core", "EF Core", "PostgreSQL", "Redis/Hangfire", "Docker", "Nginx", "GitHub Actions"],
    highlights: ["Pickup-first order flow", "Branch/menu ownership", "Completed-order review rule", "Live analytics"],
    link: "https://github.com/xuanhien010204/asrp-be",
  },
  {
    name: "Course / Center Management System",
    type: "Academic management system",
    problem:
      "Education centers need modules for accounts, courses, classes, assignments, Q&A, announcements, progress, and notifications.",
    solution:
      "Built backend features with ASP.NET Core, Identity/JWT, EF Core, SQL Server, Hangfire notifications, and API documentation for frontend integration.",
    stack: ["ASP.NET Core", "Identity/JWT", "EF Core", "SQL Server", "Hangfire"],
    highlights: ["Role-based access", "Progress tracking", "Notification jobs", "API-first structure"],
  },
  {
    name: "AI Task Automation Tool",
    type: "AI + cloud automation",
    problem: "Project task creation and Excel-based workflows can become repetitive, manual, and error-prone.",
    solution:
      "Used AI APIs with Azure Functions, Cosmos DB, and Excel automation to generate and export structured task data.",
    stack: ["Azure Functions", "Cosmos DB", "OpenAI API", "Excel Automation"],
    highlights: ["AI workflow", "Cloud function", "Data export", "Automation-first design"],
  },
];

export const learningRoadmap: LearningRoadmapItem[] = [
  {
    title: "Cloud Architecture",
    text: "Designing systems that can be deployed, monitored, scaled, and recovered safely.",
  },
  {
    title: "System Design",
    text: "Practicing trade-offs around consistency, availability, caching, queues, observability, and scalability.",
  },
  {
    title: "AI Engineering",
    text: "Building AI features as reliable product capabilities: search, chatbot, automation, guardrails, and evaluation.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    value: "github.com/xuanhien010204",
    href: profile.github,
    external: true,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
];
