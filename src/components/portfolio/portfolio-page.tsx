import { ArrowRight, Check, Cloud, Database, Download, Github, Linkedin, Radio, ShieldCheck, TimerReset, Workflow } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { AsrpArchitecture, CleanArchitectureDiagram, FlowRail, RequestLifecycle, SkillConstellation } from "@/components/portfolio/system-diagrams";
import { TerminalCard } from "@/components/portfolio/terminal-card";
import { HeroSystemScene } from "@/components/three/hero-system-scene";
import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { experience, githubRepositories, metrics, principles, projects, siteConfig, skillGroups } from "@/data/portfolio";
import { SiteNavbar } from "./site-navbar";

const challengeIcons = [TimerReset, ShieldCheck, Database, Workflow, Cloud];
const challenges = [
  { title: "Pickup scheduling", copy: "Centralized preparation rules, branch configuration, workload, and pickup constraints." },
  { title: "Data consistency", copy: "Transactional state transitions keep orders and payments inside valid business states." },
  { title: "Caching", copy: "Redis supports frequently accessed and transient data behind purposeful cache boundaries." },
  { title: "Background jobs", copy: "Hangfire moves retryable work outside the synchronous request lifecycle." },
  { title: "Delivery", copy: "GitHub Actions, Docker, Nginx, Linux, and HTTPS form a repeatable path to production." },
] as const;

export function PortfolioPage() {
  const asrp = projects[0];
  return (
    <main className="overflow-hidden">
      <SiteNavbar />

      <section id="home" className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <Container className="relative z-10 pt-32 sm:pt-36 lg:pt-40">
          <div className="grid min-h-[820px] items-center gap-14 pb-20 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8 lg:pb-28">
            <div>
              <div className="availability"><i className="status-dot" /> Available for software engineering opportunities</div>
              <p className="mt-8 font-mono text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">Bùi Xuân Hiên</p>
              <h1 className="mt-4 text-balance text-[3.15rem] font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-7xl lg:text-[5.25rem]">
                .NET Backend<br /><span className="text-gradient">Engineer.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-balance text-xl font-medium leading-8 text-slate-200 sm:text-2xl">
                Building reliable APIs, scalable backend systems, and cloud-ready software architectures.
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                I turn complex business rules into maintainable systems using ASP.NET Core, Clean Architecture, relational databases, cloud infrastructure, and production-oriented engineering practices.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ActionLink href="#projects" variant="primary">Explore my work</ActionLink>
                <ActionLink href={siteConfig.githubUrl}>View GitHub</ActionLink>
                <ActionLink href={siteConfig.resumePath} download variant="ghost"><Download className="h-4 w-4" /> Resume</ActionLink>
              </div>
              <div className="mt-9 flex flex-wrap gap-2" aria-label="Primary technologies">
                {[".NET", "ASP.NET Core", "PostgreSQL", "Azure", "Docker", "React"].map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}
              </div>
            </div>
            <HeroSystemScene />
          </div>
        </Container>
      </section>

      <Container className="relative z-20 -mt-8">
        <Reveal className="metric-strip">
          {metrics.map((metric) => <div key={metric.label} className="metric"><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        </Reveal>
      </Container>

      <section id="about" className="section-space">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <Reveal>
              <SectionHeading eyebrow="Beyond CRUD" title="I care about what happens after the controller." copy="Reliable backend work lives in the decisions that keep a system coherent when requirements, traffic, and teams change." />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Business rules", "Data consistency", "API contracts", "Failure handling", "Deployment", "Maintainability"].map((item) => <div key={item} className="focus-item"><Check className="h-4 w-4" />{item}</div>)}
              </div>
            </Reveal>
            <Reveal delay={0.1}><CleanArchitectureDiagram /></Reveal>
          </div>
        </Container>
      </section>

      <section id="projects" className="section-space border-y border-white/[0.06] bg-[#070b17]">
        <Container>
          <Reveal><SectionHeading eyebrow="01 / Featured system" title="ASRP Restaurant Platform" copy={asrp.summary} /></Reveal>
          <div className="mt-12 flex flex-wrap gap-2">{asrp.technologies.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
          <div className="mt-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <Reveal><AsrpArchitecture /></Reveal>
            <Reveal delay={0.08} className="project-brief">
              <p className="eyebrow">System brief</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">Business-heavy workflows. Explicit engineering boundaries.</h3>
              <p className="mt-5 text-base leading-7 text-slate-400">{asrp.outcome}</p>
              <div className="mt-8 space-y-4">
                {["Order lifecycle and payments", "Pickup scheduling rules", "Redis and background work", "Dockerized CI/CD delivery"].map((item, index) => <div key={item} className="brief-line"><span>0{index + 1}</span><p>{item}</p><ArrowRight className="h-4 w-4" /></div>)}
              </div>
              <ActionLink href="/projects/asrp" variant="primary" className="mt-8">Read engineering case study</ActionLink>
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <p className="eyebrow mb-6">Order lifecycle</p>
            <FlowRail items={asrp.flow} />
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {challenges.map((challenge, index) => {
              const Icon = challengeIcons[index];
              return <Reveal key={challenge.title} delay={index * 0.04} className="challenge-card"><Icon className="h-5 w-5 text-cyan-300" /><span>0{index + 1}</span><h3>{challenge.title}</h3><p>{challenge.copy}</p></Reveal>;
            })}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <Reveal><SectionHeading eyebrow="More systems" title="Different problems. The same engineering discipline." copy="Each project connects product workflows to clear APIs, data boundaries, and a route to deployment." /></Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.slice(1).map((project) => <Reveal key={project.slug} className="project-card">
              <div className="flex items-start justify-between"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span></div>
              <h3>{project.shortName}</h3><p>{project.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">{project.technologies.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
              <FlowRail items={project.flow} />
              <Link href={`/projects/${project.slug}`} className="text-link">Explore case study <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>)}
          </div>
        </Container>
      </section>

      <section id="architecture" className="section-space border-y border-white/[0.06] bg-[#070b17]">
        <Container>
          <Reveal><SectionHeading eyebrow="How I think about systems" title="Follow the request. Protect each boundary." copy="System design is not a wall of logos. It is the path a request takes, the responsibilities it crosses, and the failure modes each layer owns." /></Reveal>
          <Reveal className="mt-12"><RequestLifecycle /></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle, index) => <Reveal key={principle.title} delay={index * 0.04} className="principle-card"><span>{principle.index}</span><h3>{principle.title}</h3><p>&ldquo;{principle.copy}&rdquo;</p></Reveal>)}
          </div>
        </Container>
      </section>

      <section id="skills" className="section-space">
        <Container>
          <div className="grid gap-12 xl:grid-cols-[0.74fr_1.26fr] xl:items-center">
            <Reveal><SectionHeading eyebrow="Capabilities" title="Backend first. Product aware. Delivery minded." copy="My strongest work sits where domain rules, APIs, data, and deployment meet. Frontend knowledge helps me build better contracts—not dilute that focus." />
              <div className="mt-8 space-y-3">{skillGroups.map((group) => <div className="skill-summary" key={group.label}><span>{group.label}</span><small>{group.skills.length} tools & practices</small></div>)}</div>
            </Reveal>
            <Reveal delay={0.08}><SkillConstellation /></Reveal>
          </div>
        </Container>
      </section>

      <section id="experience" className="section-space border-y border-white/[0.06] bg-[#070b17]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <Reveal><SectionHeading eyebrow="Experience" title="Engineering shaped by real delivery." /></Reveal>
              <div className="timeline mt-12">
                {experience.map((item, index) => <Reveal key={item.role} delay={index * 0.06} className="timeline-item">
                  <span className="timeline-dot" /><p className="eyebrow">{item.period}</p><h3>{item.role}</h3><h4>{item.company}</h4>
                  <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </Reveal>)}
              </div>
            </div>
            <div className="space-y-6 lg:pt-24">
              <Reveal><TerminalCard /></Reveal>
              <Reveal className="learning-card">
                <div><Radio className="h-5 w-5" /><span>Currently exploring</span></div>
                <div className="mt-6 grid grid-cols-2 gap-3">{["Cloud architecture", "System design", "Distributed systems", "AI engineering"].map((item) => <span key={item}>{item}</span>)}</div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section id="github" className="section-space">
        <Container>
          <Reveal className="github-panel">
            <div className="github-panel__icon"><Github className="h-8 w-8" /></div>
            <div><p className="eyebrow">Engineering in public</p><h2>Code is where the claims become inspectable.</h2><p>Explore repositories, implementation choices, and ongoing technical work on GitHub. The portfolio gives context; the code provides the evidence.</p>
              <div className="repo-list">{githubRepositories.map((repo) => <Link href={repo.url} key={repo.name} target="_blank" rel="noreferrer"><strong>{repo.name}</strong><span>{repo.language}</span><small>{repo.updated}</small></Link>)}</div>
            </div>
            <ActionLink href={siteConfig.githubUrl} variant="primary">View GitHub profile</ActionLink>
          </Reveal>
        </Container>
      </section>

      <section id="contact" className="pb-10 pt-16 sm:pt-24">
        <Container>
          <Reveal className="contact-panel">
            <div className="contact-network" aria-hidden="true" />
            <p className="eyebrow">Open to the right challenge</p>
            <h2>Let&apos;s build reliable software.</h2>
            <p>I&apos;m open to backend engineering opportunities, technical collaboration, and challenging systems involving APIs, databases, cloud infrastructure, or AI.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ActionLink href={siteConfig.linkedinUrl} variant="primary"><Linkedin className="h-4 w-4" /> Message me</ActionLink>
              <ActionLink href={siteConfig.githubUrl}><Github className="h-4 w-4" /> GitHub</ActionLink>
              <ActionLink href={siteConfig.resumePath} download variant="ghost"><Download className="h-4 w-4" /> Download resume</ActionLink>
            </div>
          </Reveal>
          <footer className="site-footer">
            <div><span className="logo-mark">&lt;XH/&gt;</span><p>Bùi Xuân Hiên · Software Engineer</p></div>
            <p>.NET Backend · Cloud · Clean Architecture · System Design</p>
            <p>Built with Next.js, TypeScript, and Three.js.</p>
          </footer>
        </Container>
      </section>
    </main>
  );
}
