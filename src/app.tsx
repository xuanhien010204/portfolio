const profile = {
  name: "Bùi Xuân Hiên",
  role: ".NET Backend Engineer",
  headline:
    "I build backend-first systems with ASP.NET Core, Clean Architecture, SQL, cloud deployment, and AI-powered automation.",
  location: "Vietnam",
  github: "https://github.com/xuanhien010204",
  email: "buixuanhien2004qn@gmail.com",
};

const stats = [
  { label: "Main stack", value: ".NET" },
  { label: "Current company", value: "FPT Software" },
  { label: "University", value: "FPT University" },
  { label: "Direction", value: "Backend + Cloud" },
];

const skills = [
  {
    title: "Backend Engineering",
    items: ["C#", "ASP.NET Core", "EF Core", "Identity/JWT", "REST API", "Clean Architecture"],
  },
  {
    title: "Database & Data",
    items: ["SQL Server", "PostgreSQL", "Cosmos DB", "Query Optimization", "Repository/Specification"],
  },
  {
    title: "Frontend Collaboration",
    items: ["React", "TypeScript", "Tailwind CSS", "API Contract", "Swagger/OpenAPI"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Azure Functions", "Azure App Service", "Docker", "GitHub Actions", "Nginx", "VPS"],
  },
];

const experiences = [
  {
    title: ".NET / Java Developer",
    company: "FPT Software Quy Nhon",
    date: "Apr 2025 - Present",
    points: [
      "Work with backend APIs, data processing, automation workflows, SQL, .NET, Java, and cloud-related services.",
      "Practice production-oriented habits: debugging, API contracts, maintainable implementation, and code review.",
    ],
  },
  {
    title: "Software Engineering Student",
    company: "FPT University",
    date: "2022 - Expected Nov 2026",
    points: [
      "Focus on backend development, database design, software architecture, teamwork, and fullstack delivery.",
      "Build academic and personal projects with ASP.NET Core, Spring Boot, React, TypeScript, SQL Server, and PostgreSQL.",
    ],
  },
  {
    title: "Founder / Lead",
    company: "FPT Cyber Security Club",
    date: "2025 - Present",
    points: [
      "Lead a student technology community around security, software engineering, teamwork, and practical technical activities.",
    ],
  },
];

const projects = [
  {
    name: "ASRP Restaurant Platform",
    label: "Featured Case Study",
    description:
      "A multi-brand restaurant platform focused on pickup-first ordering, branch/menu management, reviews, analytics, scheduling, authentication, payment flow, and production deployment.",
    stack: ["ASP.NET Core", "Clean Architecture", "EF Core", "PostgreSQL", "Redis/Hangfire", "Docker", "Nginx"],
    link: "https://github.com/xuanhien010204/asrp-be",
  },
  {
    name: "Course / Center Management System",
    label: "Backend System",
    description:
      "A management system covering account, course, class, assignment, Q&A, announcement, profile, notification, and progress modules.",
    stack: ["ASP.NET Core", "Identity/JWT", "EF Core", "SQL Server", "Hangfire"],
    link: "#",
  },
  {
    name: "AI Task Automation Tool",
    label: "AI + Cloud",
    description:
      "Automation-oriented project using AI APIs, Azure Functions, Cosmos DB, and Excel processing to generate and export structured project tasks.",
    stack: ["Azure Functions", "Cosmos DB", "OpenAI API", "Excel Automation"],
    link: "#",
  },
];

const principles = [
  "Business rules first",
  "Thin controllers",
  "Clear API contracts",
  "Clean Architecture",
  "Maintainable code",
  "Deployable systems",
];

const SectionTitle = ({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) => (
  <div className="mb-10 max-w-3xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
    <h2 className="text-3xl font-black text-white md:text-5xl">{title}</h2>
    {description && <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{description}</p>}
  </div>
);

const App = () => {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#07111f_45%,_#0f172a_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950 shadow-lg shadow-cyan-400/20">H</span>
            <div>
              <p className="text-base font-black leading-none">Bùi Xuân Hiên</p>
              <p className="mt-1 text-xs text-slate-400">Software Engineer</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
            <a href="#case-study" className="hover:text-cyan-300">ASRP</a>
            <a href="#skills" className="hover:text-cyan-300">Skills</a>
            <a href="#experience" className="hover:text-cyan-300">Experience</a>
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-cyan-300/40 px-5 py-2 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
          >
            GitHub
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">
            {profile.role} · {profile.location}
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            Building backend systems that are clean, reliable, and deployable.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl">{profile.headline}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#case-study"
              className="rounded-2xl bg-cyan-300 px-7 py-4 text-base font-black text-slate-950 shadow-xl shadow-cyan-300/20 transition hover:-translate-y-1"
            >
              View ASRP Case Study
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Explore GitHub
            </a>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Profile</p>
          <h2 className="mt-5 text-3xl font-black text-white">{profile.name}</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Software Engineering student at FPT University and developer at FPT Software Quy Nhon. I focus on ASP.NET Core APIs,
            Clean Architecture, database design, deployment, and AI/cloud automation.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <p className="text-xl font-black text-white">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="case-study" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-8 shadow-2xl shadow-cyan-950/30 md:p-12">
          <SectionTitle
            eyebrow="Featured Project"
            title="ASRP Restaurant Platform"
            description="The strongest project in my portfolio: a backend-heavy restaurant platform with real business rules, scheduling, payment flow, reviews, analytics, deployment, and maintainability concerns."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Architecture",
                text: "Clean Architecture, controller-thin pattern, Application service layer, DTOs, EF Core, repository/specification approach.",
              },
              {
                title: "Business Features",
                text: "Pickup-first ordering, branch/menu management, pickup scheduling, reviews, analytics, authentication, payment status flow.",
              },
              {
                title: "Deployment",
                text: "Docker, Nginx, VPS, GitHub Actions, PostgreSQL, Redis/Hangfire, production-style troubleshooting and logging.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>

          <a
            href="https://github.com/xuanhien010204/asrp-be"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:-translate-y-1"
          >
            Open ASRP Repository
          </a>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Technical Stack"
          title="Backend-focused, fullstack-capable."
          description="I position myself around backend engineering first, then extend into frontend collaboration, cloud deployment, DevOps, and AI integration."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group) => (
            <article key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <h3 className="text-xl font-black text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm font-semibold text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow="Experience" title="Work, study, and leadership." />
        <div className="space-y-6">
          {experiences.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-2 font-semibold text-cyan-300">{item.company}</p>
                </div>
                <p className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300">{item.date}</p>
              </div>
              <ul className="mt-6 space-y-3 text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="leading-7">• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow="Selected Projects" title="Systems that show how I think." />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="flex min-h-[360px] flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">{project.label}</p>
              <h3 className="mt-5 text-2xl font-black text-white">{project.name}</h3>
              <p className="mt-4 flex-1 leading-8 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-cyan-300/10 px-3 py-2 text-xs font-bold text-cyan-200">{item}</span>
                ))}
              </div>
              {project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noreferrer noopener" className="mt-6 font-black text-cyan-300 hover:text-cyan-200">
                  View repository →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow="Engineering Mindset" title="What I care about when building software." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-lg font-black text-white">
              <span className="mr-3 text-cyan-300">✓</span>{item}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black">{profile.name}</p>
            <p className="mt-2 text-slate-400">{profile.role} · Backend · Cloud · AI Integration</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer noopener" className="rounded-full border border-white/10 px-5 py-3 font-bold text-slate-300 hover:text-cyan-300">
              GitHub
            </a>
            <a href={`mailto:${profile.email}`} className="rounded-full bg-cyan-300 px-5 py-3 font-black text-slate-950">
              Contact Me
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
