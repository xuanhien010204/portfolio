import { ArrowRight, ArrowUpRight, Braces, Cloud, Code2, Database, Github, Layers3, Linkedin, Mail, MapPin, Server, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { CredentialGallery } from "@/components/portfolio/credential-gallery";
import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { principles, profileAssets, projects, siteConfig } from "@/data/portfolio";
import { SiteNavbar } from "./site-navbar";

const heroTechnologies = [".NET", "ASP.NET Core", "Azure", "Docker", "PostgreSQL", "AI"];
const trustItems = [["FPT SOFTWARE", "Software Engineer"], ["MICROSOFT", "Verified credentials"], ["GITHUB", "Developer credentials"], ["CLAUDE / AI", "AI credentials"]] as const;
const expertiseIcons = [Server, Database, Cloud, Layers3, Code2];
const expertiseGroups = [
  { label: "BACKEND", skills: [".NET", "ASP.NET Core", "EF Core", "Java", "Spring Boot"] },
  { label: "CLOUD", skills: ["Azure", "Docker", "Nginx", "Linux", "CI/CD"] },
  { label: "DATA", skills: ["PostgreSQL", "SQL Server", "Redis", "Cosmos DB"] },
  { label: "AI", skills: ["Claude", "Microsoft AI", "AI Agents", "LLM Integration"] },
  { label: "FRONTEND", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
] as const;
const journey = [
  { place: "FPT UNIVERSITY", role: "Software Engineering", note: "Foundation" },
  { place: "FPT SOFTWARE", role: "Software Engineering OJT", note: "Industry" },
  { place: "FPT SOFTWARE", role: "Software Engineer", note: "Professional" },
  { place: "NOW", role: "Backend · Cloud · AI Engineering", note: "Building" },
] as const;

function ProfilePortrait({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "profile-portrait profile-portrait--compact" : "profile-portrait"}>
    <Image src={compact ? profileAssets.about : profileAssets.hero} alt="Bùi Xuân Hiên" fill loading={compact ? "lazy" : "eager"} sizes={compact ? "(max-width: 800px) 100vw, 45vw" : "(max-width: 800px) 90vw, 42vw"} className="profile-portrait__image" />
    <div className="portrait-grid" aria-hidden="true" /><div className="portrait-corners" aria-hidden="true"><i /><i /><i /><i /></div>
    <div className="portrait-scan" aria-hidden="true" />
  </div>;
}

function ProjectVisual({ index }: { index: number }) {
  if (index === 0) return <div className="system-visual system-visual--architecture" aria-label="ASRP architecture overview">
    <div className="visual-toolbar"><span>ASRP / SYSTEM MAP</span><i>LIVE ARCHITECTURE</i></div>
    <div className="architecture-flow"><span className="system-node system-node--client">Mobile / Client</span><i>↓</i><span className="system-node system-node--accent">ASP.NET Core API</span><i>↓</i><div className="layer-row"><span>Application</span><span>Domain</span><span>Infrastructure</span></div><i>↓</i><span className="system-node">PostgreSQL</span><div className="service-row"><span>Redis</span><span>Hangfire</span><span>Storage</span></div></div>
  </div>;
  const flow = index === 1 ? ["INPUT", "AZURE FUNCTION", "AI PROCESSING", "STRUCTURED DATA", "COSMOS DB", "AUTOMATION"] : ["IDENTITY", "COURSES", "CLASSES", "ASSIGNMENTS", "PROGRESS", "NOTIFICATIONS"];
  return <div className="system-visual system-visual--flow"><div className="visual-toolbar"><span>{index === 1 ? "AI / WORKFLOW" : "COURSE / MODULES"}</span><i>PROCESS MAP</i></div><div className="flow-stack">{flow.map((item, flowIndex) => <div className="flow-unit" key={item}><span>{String(flowIndex + 1).padStart(2, "0")}</span><strong>{item}</strong>{flowIndex < flow.length - 1 ? <i>→</i> : null}</div>)}</div></div>;
}

export function PortfolioPage() {
  const featuredProjects = [projects[0], projects[2], projects[1]];
  return <main className="portfolio-shell">
    <SiteNavbar />
    <section id="home" className="premium-hero"><div className="hero-aurora" aria-hidden="true" /><Container className="relative z-10 pt-28 sm:pt-32"><div className="premium-hero__grid">
      <Reveal className="hero-copy"><p className="hero-kicker"><span /> SOFTWARE ENGINEER · VIETNAM</p><h1><span>BÙI XUÂN</span> HIÊN</h1><p className="hero-role">Software Engineer <i>@</i> FPT Software</p><h2>Building reliable software across <em>backend, cloud and AI.</em></h2><p className="hero-intro">Focused on production-ready backend systems, cloud infrastructure and modern AI engineering.</p><div className="hero-tech">{heroTechnologies.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div><div className="hero-actions"><ActionLink href="#work" variant="primary">View my work</ActionLink><ActionLink href="#credentials">View credentials</ActionLink></div><div className="social-row"><Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer"><Github /> GitHub</Link><Link href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</Link><Link href={siteConfig.resumePath} download>Resume <ArrowUpRight /></Link></div></Reveal>
      <Reveal delay={0.12} className="hero-portrait-wrap"><div className="portrait-meta portrait-meta--top"><span>ROLE</span><strong>Software Engineer</strong></div><ProfilePortrait /><div className="portrait-meta portrait-meta--bottom"><span>FOCUS</span><strong>Backend · Cloud · AI</strong></div><div className="portrait-location"><MapPin /> VIETNAM</div></Reveal>
    </div></Container></section>

    <Container className="relative z-20"><Reveal className="credibility-strip">{trustItems.map(([title, copy]) => <div key={title}><span>{title}</span><strong>{copy}</strong></div>)}</Reveal></Container>

    <section id="work" className="section-space"><Container><Reveal><SectionHeading eyebrow="SELECTED WORK" title="Engineering systems, not just features." /></Reveal><div className="projects-showcase">{featuredProjects.map((project, index) => <Reveal key={project.slug} delay={index * 0.06} className={index === 0 ? "work-card work-card--featured" : "work-card"}><ProjectVisual index={index} /><div className="work-card__content"><div className="work-index">PROJECT / {String(index + 1).padStart(2, "0")}</div><p className="work-category">{index === 0 ? "Backend · Architecture · Production System" : index === 1 ? "AI · Cloud · Serverless" : "Backend · Cloud Application"}</p><h3>{index === 0 ? "ASRP" : project.shortName}</h3>{index === 0 ? <h4>AI-Powered Smart Restaurant Platform</h4> : null}<p>{project.summary}</p><div className="work-tech">{project.technologies.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div><Link href={`/projects/${project.slug}`} className="work-link">{index === 1 ? "Explore workflow" : index === 2 ? "View project" : "Explore case study"}<ArrowRight /></Link></div></Reveal>)}</div></Container></section>

    <section id="credentials" className="section-space section-tinted"><Container><Reveal><SectionHeading eyebrow="CREDENTIALS" title="Verified achievements." copy="Professional credentials supporting my growth across software engineering, AI and developer platforms." /></Reveal><CredentialGallery /></Container></section>

    <section id="expertise" className="section-space"><Container><Reveal><SectionHeading eyebrow="EXPERTISE" title="What I build with." /></Reveal><div className="expertise-grid">{expertiseGroups.map((group, index) => { const Icon = expertiseIcons[index]; return <Reveal key={group.label} delay={index * 0.04} className="expertise-card"><div><Icon /><span>0{index + 1}</span></div><h3>{group.label}</h3><div className="expertise-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></Reveal>; })}</div></Container></section>

    <section className="section-space section-tinted"><Container><Reveal><SectionHeading eyebrow="ENGINEERING PHILOSOPHY" title="How I approach software." /></Reveal><div className="philosophy-grid">{principles.map((principle, index) => <Reveal key={principle.title} delay={index * 0.05} className="philosophy-card"><span>{principle.index}</span><div className="philosophy-icon">{index === 0 ? <Braces /> : index === 1 ? <Layers3 /> : index === 2 ? <Cloud /> : <Sparkles />}</div><h3>{index === 0 ? "BUSINESS FIRST" : index === 1 ? "CLEAR ARCHITECTURE" : index === 2 ? "PRODUCTION READY" : "CONTINUOUS IMPROVEMENT"}</h3><p>{index === 0 ? "Understand the business rules before choosing the framework." : index === 1 ? "Keep responsibilities and dependencies explicit." : index === 2 ? "Software should work beyond localhost." : "Build, measure, learn and improve."}</p></Reveal>)}</div></Container></section>

    <section id="journey" className="section-space"><Container><Reveal><SectionHeading eyebrow="JOURNEY" title="Progress, with purpose." /></Reveal><div className="journey-track">{journey.map((item, index) => <Reveal key={item.place + item.role} delay={index * 0.06} className="journey-step"><div className="journey-node"><span>{String(index + 1).padStart(2, "0")}</span></div><p>{item.note}</p><h3>{item.place}</h3><strong>{item.role}</strong></Reveal>)}</div></Container></section>

    <section id="about" className="section-space section-tinted"><Container><div className="about-grid"><Reveal><ProfilePortrait compact /></Reveal><Reveal delay={0.1} className="about-copy"><p className="eyebrow">ABOUT</p><h2>Engineer behind the systems.</h2><p>I&apos;m Bùi Xuân Hiên, a Software Engineer at FPT Software focused on backend systems, cloud infrastructure and AI-enabled software.</p><p>I enjoy understanding how software behaves beyond the code — architecture, data, deployment and production reliability.</p><div className="about-facts"><div><span>ROLE</span><strong>Software Engineer</strong></div><div><span>FOCUS</span><strong>Backend · Cloud · AI</strong></div><div><span>LOCATION</span><strong>Vietnam</strong></div><div><span>PRIMARY STACK</span><strong>.NET · Azure</strong></div></div></Reveal></div></Container></section>

    <section id="github" className="section-space"><Container><Reveal><SectionHeading eyebrow="GITHUB" title="Engineering in public." /></Reveal><div className="repo-showcase">{["ASRP", "AI / Automation", "Backend projects", "Portfolio source"].map((name, index) => <Reveal key={name} delay={index * 0.04} className="repo-card"><div><Github /><span>PUBLIC WORK</span></div><h3>{name}</h3><p>{index === 0 ? "Restaurant platform architecture and backend workflows." : index === 1 ? "AI-enabled cloud and task automation experiments." : index === 2 ? "APIs, data and server-side engineering work." : "The source behind this portfolio experience."}</p><Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></Link></Reveal>)}</div><Reveal className="github-cta"><Github /><p>Explore implementation choices and ongoing work.</p><ActionLink href={siteConfig.githubUrl} variant="primary">View GitHub profile</ActionLink></Reveal></Container></section>

    <section id="contact" className="contact-section"><Container><Reveal className="contact-card"><div className="contact-orbit" aria-hidden="true" /><p className="eyebrow">CONTACT / OPEN CHANNEL</p><h2>Let&apos;s build something <em>meaningful.</em></h2><p>Open to meaningful software engineering opportunities, collaboration and challenging backend, cloud or AI systems.</p><div className="contact-actions"><ActionLink href={siteConfig.linkedinUrl} variant="primary"><Linkedin /> LinkedIn</ActionLink><ActionLink href={siteConfig.githubUrl}><Github /> GitHub</ActionLink><ActionLink href="mailto:contact@xuanhien.dev"><Mail /> Email</ActionLink><ActionLink href={siteConfig.resumePath} download>Resume</ActionLink></div></Reveal><footer className="premium-footer"><span>&lt;XH/&gt;</span><div><strong>Bùi Xuân Hiên</strong><small>Software Engineer · Backend · Cloud · AI</small></div><p>xuanhien.dev</p></footer></Container></section>
  </main>;
}
