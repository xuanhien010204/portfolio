export const siteConfig = {
  name: "Bùi Xuân Hiên",
  role: ".NET Backend Engineer",
  company: "FPT Software Quy Nhon",
  location: "Vietnam",
  siteUrl: "https://xuanhien.dev",
  githubUrl: "https://github.com/xuanhien010204",
  linkedinUrl: "https://vn.linkedin.com/in/b%C3%B9i-xu%C3%A2n-hi%C3%AAn-4a45042b7",
  resumePath: "/Bui-Xuan-Hien-Resume.md",
  description:
    ".NET Backend Engineer specializing in ASP.NET Core, Clean Architecture, PostgreSQL, cloud systems, and production-ready API development.",
} as const;

export const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#architecture", label: "Architecture" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;

export const metrics = [
  { value: "1+", label: "Years in professional engineering" },
  { value: ".NET", label: "Primary backend ecosystem" },
  { value: "3", label: "Major systems showcased" },
  { value: "Cloud", label: "Deployment-ready mindset" },
] as const;

export const skillGroups = [
  { label: "Backend engineering", skills: ["C#", "ASP.NET Core", "EF Core", "Java", "Spring Boot", "REST API", "JWT", "Identity"] },
  { label: "Data", skills: ["PostgreSQL", "SQL Server", "Cosmos DB", "Redis", "Relational modeling", "Query optimization"] },
  { label: "Cloud & delivery", skills: ["Azure", "AWS", "Docker", "GitHub Actions", "Nginx", "Linux", "CI/CD"] },
  { label: "Architecture", skills: ["Clean Architecture", "SOLID", "Repository", "Specification", "Dependency Injection", "System Design"] },
  { label: "Product surface", skills: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "OpenAPI", "Responsive UI"] },
] as const;

export const principles = [
  { index: "01", title: "Business rules first", copy: "Frameworks change. Business rules are the system." },
  { index: "02", title: "Stable API contracts", copy: "Predictable contracts make frontend/backend collaboration reliable." },
  { index: "03", title: "Deployable systems", copy: "A feature is not done if it only works locally." },
  { index: "04", title: "Maintainability", copy: "Software should be easier to change tomorrow than it was today." },
] as const;

export type ProjectSlug = "asrp" | "course-management" | "ai-automation";

export type Project = {
  slug: ProjectSlug;
  number: string;
  name: string;
  shortName: string;
  category: string;
  featured: boolean;
  summary: string;
  outcome: string;
  technologies: readonly string[];
  flow: readonly string[];
  sections: readonly { title: string; body: string; points: readonly string[] }[];
};

export const projects: readonly Project[] = [
  {
    slug: "asrp",
    number: "01",
    name: "ASRP — AI-Powered Smart Restaurant Platform",
    shortName: "ASRP Restaurant Platform",
    category: "Featured backend system",
    featured: true,
    summary: "A backend-heavy restaurant platform handling ordering, pickup scheduling, restaurant operations, reviews, payments, analytics, authentication, and deployment.",
    outcome: "A production-oriented system that keeps transactional order states, operational workflows, and infrastructure concerns behind stable API contracts.",
    technologies: ["ASP.NET Core", "EF Core", "PostgreSQL", "Redis", "Hangfire", "Docker", "Nginx", "GitHub Actions"],
    flow: ["Customer", "Branch", "Menu", "Cart", "Checkout", "Payment", "Confirm", "Kitchen", "Preparing", "Ready", "Pickup", "Complete"],
    sections: [
      { title: "Problem", body: "Restaurant ordering is more than CRUD: availability, pickup timing, payment, branch operations, and state transitions must agree under real business constraints.", points: ["Model explicit order states", "Keep customer and manager actions predictable", "Preserve API contracts as workflows evolve"] },
      { title: "Architecture", body: "The solution follows Clean Architecture so transport, application use cases, domain rules, and persistence remain independently understandable.", points: ["Thin API controllers", "Application-owned orchestration", "Domain-centered business rules", "Infrastructure behind abstractions"] },
      { title: "Pickup scheduling", body: "Scheduling logic is centralized around preparation rules, branch configuration, workload, and pickup constraints instead of being scattered across endpoints.", points: ["Single scheduling responsibility", "Explicit constraints", "Testable decisions"] },
      { title: "Data consistency", body: "Orders and payments cross multiple business states. Transaction boundaries and explicit transitions protect the system from invalid partial progress.", points: ["Transactional state changes", "Validation before mutation", "Concurrency-aware workflows"] },
      { title: "Caching & background work", body: "Redis supports frequently accessed or transient data while Hangfire moves appropriate work outside the request lifecycle.", points: ["Purposeful cache boundaries", "Retryable background jobs", "Fast request paths"] },
      { title: "Deployment", body: "The application is designed to leave the laptop: GitHub Actions builds and delivers Docker workloads through Nginx on Linux infrastructure with HTTPS.", points: ["Repeatable CI/CD", "Containerized runtime", "Reverse-proxy boundary"] },
    ],
  },
  {
    slug: "course-management",
    number: "02",
    name: "Course / Center Management System",
    shortName: "Course Management System",
    category: "Cloud-ready application",
    featured: false,
    summary: "An academic operations system spanning authentication, role-based access, courses, classes, assignments, progress, Q&A, and notifications.",
    outcome: "A broad product workflow organized around secure APIs and maintainable modules, with deployment considered as part of delivery.",
    technologies: ["ASP.NET Core", "EF Core", "SQL Server", "Identity", "JWT", "Hangfire", "Azure"],
    flow: ["Identity", "Role", "Course", "Class", "Assignment", "Progress", "Notification"],
    sections: [
      { title: "Problem", body: "Course operations cross several roles and connected records, so authorization and data ownership need to stay explicit.", points: ["Role-aware access", "Connected academic workflows", "Consistent API behavior"] },
      { title: "Architecture", body: "Modules separate authentication, course operations, assignments, progress, and notifications while sharing clear persistence patterns.", points: ["Thin endpoints", "EF Core persistence", "JWT and Identity"] },
      { title: "Background work", body: "Notification tasks can run outside the main request path, keeping user actions responsive and retryable.", points: ["Hangfire jobs", "Request-path discipline", "Operational visibility"] },
      { title: "What I learned", body: "Feature breadth only stays manageable when contracts, authorization, and module responsibilities are defined early.", points: ["Design boundaries before growth", "Treat deployment as engineering", "Prefer explicit ownership"] },
    ],
  },
  {
    slug: "ai-automation",
    number: "03",
    name: "AI Task Automation Tool",
    shortName: "AI Task Automation",
    category: "Serverless workflow",
    featured: false,
    summary: "A serverless automation flow that turns user input into structured tasks with AI processing, durable storage, and Excel export.",
    outcome: "A focused cloud workflow connecting AI output to a repeatable operational artifact rather than stopping at a chat response.",
    technologies: ["Azure Functions", "Cosmos DB", "OpenAI API", "Excel Automation"],
    flow: ["User input", "Azure Function", "AI processing", "Structured tasks", "Cosmos DB", "Excel export"],
    sections: [
      { title: "Problem", body: "Unstructured requests need to become consistent, useful task records without adding manual formatting work.", points: ["Normalize input", "Constrain AI output", "Produce structured results"] },
      { title: "Architecture", body: "A serverless function coordinates AI processing, persistence, and export with a deliberately small operational surface.", points: ["Event-oriented compute", "Cosmos DB persistence", "Explicit output shape"] },
      { title: "Engineering decisions", body: "The AI response is treated as untrusted external input and shaped before it becomes stored or exported data.", points: ["Validate structure", "Handle failures", "Keep boundaries observable"] },
      { title: "What I learned", body: "AI features become useful systems when they have contracts, persistence, recoverability, and a clear downstream workflow.", points: ["AI is one component", "Design for incomplete responses", "Measure operational value"] },
    ],
  },
] as const;

export const experience = [
  { period: "Apr 2025 — Present", role: ".NET / Java Developer", company: "FPT Software Quy Nhon", details: ["Backend APIs and data processing", ".NET, Java, and SQL", "Azure Functions and Cosmos DB", "Debugging, API contracts, and code review", "AI workflow integration"] },
  { period: "2022 — Expected Nov 2026", role: "Software Engineering", company: "FPT University", details: ["Software architecture", "Backend and API development", "Database design", "Cloud and full-stack delivery"] },
] as const;

export const githubRepositories = [
  { name: "GroupTravelRecommender.ChatBot-main", language: "Python", updated: "Aug 2026", url: "https://github.com/xuanhien010204/GroupTravelRecommender.ChatBot-main" },
  { name: "portfolio", language: "TypeScript", updated: "Jun 2026", url: "https://github.com/xuanhien010204/portfolio" },
  { name: "grab_food_backend", language: "C#", updated: "Mar 2026", url: "https://github.com/xuanhien010204/grab_food_backend" },
] as const;

export const requestLifecycle = [
  { label: "Client", detail: "A clear contract starts the request." },
  { label: "Nginx", detail: "TLS and reverse-proxy concerns stay at the edge." },
  { label: "API", detail: "Controllers translate transport, not business rules." },
  { label: "Auth", detail: "Identity and policy are checked before use cases run." },
  { label: "Application", detail: "The use case coordinates validation and dependencies." },
  { label: "Domain", detail: "Business invariants decide what is allowed." },
  { label: "Data", detail: "Cache and persistence serve distinct responsibilities." },
  { label: "Jobs", detail: "Deferred work leaves the synchronous request path." },
  { label: "Observe", detail: "Logs and health signals close the feedback loop." },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
