// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "GitHub",
    link: "https://github.com/xuanhien010204",
  },
];

// Services
export const SERVICES = [
  {
    title: "Backend Developer (.NET & Java)",
    icon: backend,
  },
  {
    title: "Fullstack Developer (React + TypeScript)",
    icon: web,
  },
  {
    title: "Database & API Designer",
    icon: mongodb,
  },
  {
    title: "Cloud & DevOps Learner",
    icon: docker,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "ASP.NET Core",
    icon: backend,
  },
  {
    name: "Spring Boot",
    icon: mobile,
  },
  {
    name: "SQL Server / PostgreSQL",
    icon: mongodb,
  },
  {
    name: "Azure",
    icon: threejs,
  },
  {
    name: "Git / GitHub",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Engineering Student",
    company_name: "FPT University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Studying Software Engineering with a strong focus on backend development, database design, software architecture, and fullstack product delivery.",
      "Built academic and capstone-style projects using ASP.NET Core, Java Spring Boot, React, TypeScript, Tailwind CSS, SQL Server, and PostgreSQL.",
      "Practiced Git, GitHub workflows, API documentation, teamwork, sprint-based delivery, and technical presentation for software projects.",
    ],
  },
  {
    title: "Java & .NET Developer Intern",
    company_name: "FPT Software Quy Nhon",
    icon: shopify,
    iconBg: "#383E56",
    date: "Apr 2025 - Present",
    points: [
      "Worked with backend APIs, data processing, and application features using .NET, Java, SQL, and cloud-related services.",
      "Practiced production-oriented development habits including clear API contracts, debugging, code review, and maintainable implementation.",
      "Integrated AI-powered workflows and automation ideas with Azure Functions, Cosmos DB, Excel processing, and API-driven systems.",
    ],
  },
  {
    title: "Backend / Fullstack Project Developer",
    company_name: "Personal & University Projects",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Designed and implemented backend-first systems with Clean Architecture, thin controllers, service layers, DTOs, validation, authentication, authorization, and EF Core persistence.",
      "Built fullstack features with React, TypeScript, Tailwind CSS, REST APIs, Swagger/OpenAPI, pagination, filtering, and role-based access control.",
      "Deployed and operated applications using Docker, Nginx, GitHub Actions, Azure services, VPS infrastructure, and cloud databases.",
    ],
  },
  {
    title: "Founder / Lead",
    company_name: "FPT Cyber Security Club",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Founded and led a university cyber security club to build a learning community around security, software engineering, teamwork, and practical technical activities.",
      "Coordinated people, content, communication, and operations while improving leadership, planning, and technical mentoring skills.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Focused on building backend systems with practical business rules, maintainable architecture, and real deployment experience.",
    name: "Portfolio Note",
    designation: "Personal positioning",
    company: "Bùi Xuân Hiên",
    image: user1,
  },
  {
    testimonial:
      "Main strengths include ASP.NET Core, EF Core, SQL, API design, authentication, cloud deployment, and fullstack collaboration.",
    name: "Technical Focus",
    designation: "Backend / Fullstack",
    company: "Portfolio",
    image: user2,
  },
  {
    testimonial:
      "Current direction: becoming a strong .NET backend engineer with fullstack, cloud, system design, and AI integration capability.",
    name: "Career Direction",
    designation: "Software Engineer",
    company: "Portfolio",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "ASRP Restaurant Platform",
    description:
      "A multi-brand restaurant platform focused on pickup-first ordering, branch/menu management, reviews, analytics, scheduling, authentication, payment flow, and production deployment. Built with Clean Architecture, ASP.NET Core, EF Core, PostgreSQL, Redis/Hangfire, Docker, Nginx, and GitHub Actions.",
    tags: [
      { name: "aspnetcore", color: "blue-text-gradient" },
      { name: "cleanarchitecture", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/xuanhien010204/asrp-be",
    live_site_link: "",
  },
  {
    name: "Center Management System",
    description:
      "A management system for students, classes, schedules, assignments, Q&A, announcements, notifications, and progress tracking. The backend uses ASP.NET Core, Identity/JWT, EF Core, SQL Server, Hangfire, and API documentation for frontend integration.",
    tags: [
      { name: "aspnetcore", color: "blue-text-gradient" },
      { name: "sqlserver", color: "green-text-gradient" },
      { name: "efcore", color: "pink-text-gradient" },
      { name: "hangfire", color: "blue-text-gradient" },
    ],
    image: project2,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "AI Task Automation Tool",
    description:
      "An automation-oriented project using AI APIs, Azure Functions, Cosmos DB, and Excel processing to generate and export structured project tasks. The project strengthened my experience with cloud functions, API integration, and data workflow automation.",
    tags: [
      { name: "azurefunctions", color: "blue-text-gradient" },
      { name: "cosmosdb", color: "green-text-gradient" },
      { name: "openaiapi", color: "pink-text-gradient" },
      { name: "excelautomation", color: "blue-text-gradient" },
    ],
    image: project3,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Restaurant Management System",
    description:
      "A restaurant management project covering users, roles, menu, reservations, orders, payment-related flows, and administration features. Built to practice backend APIs, relational modeling, authentication, and frontend integration.",
    tags: [
      { name: "dotnet", color: "blue-text-gradient" },
      { name: "springboot", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
    ],
    image: project4,
    source_code_link: "",
    live_site_link: "",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/xuanhien010204",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/",
  },
  {
    name: "Twitter / X",
    icon: twitter,
    link: "https://x.com/",
  },
] as const;
