type NavItem = {
  label: string;
  href: string;
};

type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  impact: string;
  points: string[];
};

type ProjectItem = {
  name: string;
  type: string;
  problem: string;
  solution: string;
  stack: string[];
  highlights: string[];
  link?: string;
};

const profile = {
  name: "Bùi Xuân Hiên",
  role: "Software Engineer at FPT Software",
  specialization: ".NET Backend Engineer",
  location: "Vietnam",
  github: "https://github.com/xuanhien010204",
  email: "buixuanhien2004qn@gmail.com",
  summary:
    "I build backend-first systems with ASP.NET Core, Clean Architecture, relational databases, cloud deployment, and AI-powered automation. My focus is turning business rules into reliable APIs and maintainable production-ready software.",
};

const navItems: NavItem[] = [
  { label: "Case Study", href: "#case-study" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const summaryCards = [
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
  {
    value: "Cloud + AI",
    label: "Current direction",
    detail: "Building capability around Azure, Docker, GitHub Actions, system design, and AI integration.",
  },
];

const caseStudy = {
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
  stack: ["ASP.NET Core", "EF Core", "PostgreSQL", "Clean Architecture", "Identity/JWT", "Redis", "Hangfire", "Docker", "Nginx", "GitHub Actions"],
};

const experiences: ExperienceItem[] = [
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

const skills: SkillGroup[] = [
  {
    title: "Backend",
    description: "Designing APIs, use cases, authentication, validation, business workflows, and maintainable service layers.",
    items: ["C#", "ASP.NET Core", "EF Core", "Identity/JWT", "REST API", "Clean Architecture", "Repository/Specification"],
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
    title: "Frontend Collaboration",
    description: "Building and integrating frontend features with strong API contracts and predictable data flows.",
    items: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Swagger/OpenAPI", "Responsive UI"],
  },
  {
    title: "AI Integration",
    description: "Using AI APIs as practical system capabilities, not just demos: automation, search, generation, and workflow support.",
    items: ["OpenAI API", "AI Search", "Prompt Design", "Azure Functions", "Automation", "Excel Processing"],
  },
  {
    title: "Engineering Practice",
    description: "Writing software that is understandable, testable, deployable, and safe to change as business rules evolve.",
    items: ["SOLID", "Clean Code", "Thin Controllers", "API Stability", "Logging", "Debugging", "Documentation"],
  },
];

const principles = [
  {
    title: "Business Rules First",
    text: "I prefer modeling the real business rule clearly before choosing framework code or database details.",
  },
  {
    title: "Thin Controllers",
    text: "Controllers should orchestrate HTTP concerns only. Real behavior belongs in application services and domain-aware workflows.",
  },
  {
    title: "Stable API Contracts",
    text: "Frontend and backend collaboration depends on predictable routes, DTOs, status codes, pagination, and error formats.",
  },
  {
    title: "Clean Architecture",
    text: "Dependencies should point inward. Domain and application logic must not depend on infrastructure details.",
  },
  {
    title: "Maintainability Over Cleverness",
    text: "I value readable code, small functions, clear naming, low side effects, and implementation that other developers can safely change.",
  },
  {
    title: "Deployable Systems",
    text: "A feature is not truly done if it only works locally. Deployment, logging, configuration, and failure modes matter.",
  },
];

const projects: ProjectItem[] = [
  {
    name: "ASRP Restaurant Platform",
    type: "Backend-heavy capstone/product system",
    problem:
      "Multi-brand restaurant operations require reliable ordering, branch ownership, pickup scheduling, review rules, payment status, and analytics.",
    solution:
      "Designed backend workflows around Clean Architecture, EF Core persistence, branch-scoped business rules, pickup scheduling service, live analytics, and deployment-ready infrastructure.",
    stack: ["ASP.NET Core", "EF Core", "PostgreSQL", "Redis/Hangfire", "Docker", "Nginx"],
    highlights: ["Pickup-first order flow", "Branch/menu ownership", "Completed-order review rule", "Live analytics", "GitHub Actions deploy"],
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
    problem:
      "Project task creation and Excel-based workflows can become repetitive, manual, and error-prone.",
    solution:
      "Used AI APIs with Azure Functions, Cosmos DB, and Excel automation to generate and export structured task data.",
    stack: ["Azure Functions", "Cosmos DB", "OpenAI API", "Excel Automation"],
    highlights: ["AI workflow", "Cloud function", "Data export", "Automation-first design"],
  },
  {
    name: "Restaurant Management System",
    type: "Restaurant operations practice system",
    problem:
      "Restaurant platforms need user management, roles, menu, reservations, orders, payment-related flows, and admin features.",
    solution:
      "Practiced backend APIs, relational modeling, authentication, and frontend integration using .NET, Spring Boot, PostgreSQL, and React.",
    stack: [".NET", "Spring Boot", "PostgreSQL", "React", "Tailwind CSS"],
    highlights: ["Domain modeling", "Auth flow", "Admin features", "Frontend integration"],
  },
];

const learningRoadmap = [
  {
    title: "Cloud Architecture",
    text: "Designing systems that can be deployed, monitored, scaled, and recovered safely.",
  },
  {
    title: "Azure Deepening",
    text: "Improving practical experience with App Service, Functions, databases, storage, and serverless workflows.",
  },
  {
    title: "Kubernetes Awareness",
    text: "Learning when Kubernetes is useful, when it is unnecessary, and how container orchestration changes deployment strategy.",
  },
  {
    title: "AI Engineering",
    text: "Building AI features as reliable product capabilities: search, chatbot, automation, guardrails, and evaluation.",
  },
  {
    title: "System Design",
    text: "Practicing trade-offs around consistency, availability, caching, queues, observability, and scalability.",
  },
];

const SectionHeading = ({ label, title, description }: { label: string; title: string; description?: string }) => (
  <div className="mb-12 max-w-4xl">
    <p className="text-xs font-black uppercase tracking-[0.32em] text-sky-300">{label}</p>
    <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
    {description && <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{description}</p>}
  </div>
);

const Pill = ({ children }: { children: string }) => (
  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-300">
    {children}
  </span>
);

const App = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050a14] text-white selection:bg-sky-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#020617_0%,#07111f_38%,#08111e_100%)]" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute right-[-160px] top-[420px] h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050a14]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="group flex items-center gap-3" aria-label="Back to home">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-sky-300/30 bg-sky-300/10 font-black text-sky-200 transition group-hover:bg-sky-300 group-hover:text-slate-950">
              H
            </span>
            <span>
              <span className="block text-sm font-black tracking-tight text-white md:text-base">Bùi Xuân Hiên</span>
              <span className="block text-xs font-semibold text-slate-400">.NET Backend Engineer</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-sky-300">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-black text-white transition hover:border-sky-300/50 hover:bg-sky-300 hover:text-slate-950"
          >
            GitHub
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-sm font-black text-sky-200">
                {profile.role}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-300">
                FPT University · Expected Nov 2026
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-[-0.055em] text-white md:text-7xl lg:text-8xl">
              Building backend systems that are reliable, maintainable, and production-ready.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl">
              {profile.summary}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#case-study"
                className="rounded-2xl bg-sky-300 px-6 py-4 text-center text-sm font-black text-slate-950 shadow-2xl shadow-sky-950 transition hover:-translate-y-1 hover:bg-sky-200"
              >
                View ASRP Case Study
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:border-sky-300/50"
              >
                Explore GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-2xl border border-white/10 px-6 py-4 text-center text-sm font-black text-slate-300 transition hover:-translate-y-1 hover:text-sky-300"
              >
                Contact
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-7">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-sky-300">Professional Snapshot</p>
            <div className="mt-7 space-y-5">
              {summaryCards.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                  <p className="text-2xl font-black text-white">{item.value}</p>
                  <p className="mt-1 text-sm font-bold text-slate-200">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="case-study" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-[2.25rem] border border-sky-300/20 bg-sky-300/[0.055] p-6 shadow-2xl shadow-black/30 md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeading
                label="Featured Case Study"
                title="ASRP Restaurant Platform"
                description="A real backend-heavy system where the main value is not UI effects, but business rules, architecture, data consistency, deployment, and maintainability."
              />
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">Problem</p>
                <p className="mt-4 text-base leading-8 text-slate-300">{caseStudy.problem}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-sky-300">Architecture Map</p>
              <div className="space-y-3">
                {["API", "Application", "Domain", "Infrastructure"].map((layer, index) => (
                  <div key={layer} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-lg font-black text-white">{layer}</p>
                      <span className="rounded-full bg-sky-300/10 px-3 py-1 text-xs font-black text-sky-200">Layer {index + 1}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{caseStudy.architecture[index]}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-dashed border-sky-300/30 p-4 text-sm leading-7 text-slate-300">
                Dependency Rule: API depends on Application; Application depends on Domain abstractions; Infrastructure implements external details.
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {caseStudy.decisions.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">Tech Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {caseStudy.stack.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
            <a
              href="https://github.com/xuanhien010204/asrp-be"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-2xl bg-white px-6 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-sky-200"
            >
              Open Repository
            </a>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Work, study, and leadership that support my engineering direction."
          description="The focus is impact and engineering growth, not a list of generic responsibilities."
        />
        <div className="relative space-y-5 before:absolute before:left-4 before:top-0 before:hidden before:h-full before:w-px before:bg-white/10 md:before:block">
          {experiences.map((item) => (
            <article key={item.title} className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:ml-12 md:p-8">
              <span className="absolute -left-[3.25rem] top-8 hidden h-8 w-8 rounded-full border border-sky-300/30 bg-sky-300/20 md:block" />
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">{item.impact}</p>
                  <h3 className="mt-3 text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-base font-bold text-slate-300">{item.company}</p>
                </div>
                <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-black text-slate-300">{item.date}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-slate-300 md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          label="Engineering Skills"
          title="I do not present skills as icons. I explain what I can build with them."
          description="The portfolio is backend-first: APIs, databases, architecture, deployment, and practical fullstack collaboration."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <article key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[0.065]">
              <h3 className="text-2xl font-black text-white">{group.title}</h3>
              <p className="mt-4 min-h-[88px] text-sm leading-7 text-slate-300">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          label="Engineering Principles"
          title="How I think when I build software."
          description="These are the principles I want my portfolio to communicate before someone even reads my code."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/55 p-6">
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          label="Selected Projects"
          title="Projects described by problem, solution, and architecture highlights."
          description="I avoid empty project cards. Each project explains what problem it solves and what engineering decisions matter."
        />
        <div className="space-y-6">
          {projects.map((project, index) => (
            <article key={project.name} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">0{index + 1} · {project.type}</p>
                  <h3 className="mt-4 text-3xl font-black text-white">{project.name}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer noopener" className="mt-5 inline-flex font-black text-sky-300 hover:text-sky-200">
                      View repository →
                    </a>
                  )}
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="font-black text-white">Business problem</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-black text-white">Solution</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.solution}</p>
                  </div>
                  <div>
                    <p className="font-black text-white">Tech stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Pill key={item}>{item}</Pill>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-black text-white">Architecture highlights</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.highlights.map((item) => (
                        <Pill key={item}>{item}</Pill>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          label="Current Learning"
          title="Where I am deliberately getting stronger."
          description="My next step is not only learning more frameworks, but learning how to make systems more reliable, scalable, observable, and useful."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {learningRoadmap.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-sky-300">Contact</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">Let's build something reliable.</h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                I am open to backend engineering opportunities, project collaboration, technical discussion, and systems that need strong API, database, cloud, or AI integration work.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={`mailto:${profile.email}`} className="rounded-2xl bg-sky-300 px-6 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-sky-200">
                Email Me
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer noopener" className="rounded-2xl border border-white/10 px-6 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:border-sky-300/50">
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Bùi Xuân Hiên. Built as an engineering portfolio.</p>
          <p>.NET Backend · Cloud · AI Integration · System Design</p>
        </div>
      </footer>
    </main>
  );
};

export default App;
