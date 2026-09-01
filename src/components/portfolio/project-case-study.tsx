import { ArrowLeft, ArrowRight, Check, Github } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { AsrpArchitecture, FlowRail } from "@/components/portfolio/system-diagrams";
import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { TechBadge } from "@/components/ui/tech-badge";
import type { Project } from "@/data/portfolio";
import { projects, siteConfig } from "@/data/portfolio";
import { SiteNavbar } from "./site-navbar";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const related = projects.filter((item) => item.slug !== project.slug);
  return (
    <main className="overflow-hidden">
      <SiteNavbar />
      <section className="case-hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <Container className="relative z-10 pt-36 sm:pt-44">
          <Link href="/#projects" className="back-link"><ArrowLeft className="h-4 w-4" /> All projects</Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.58fr] lg:items-end">
            <div><p className="eyebrow">{project.number} / {project.category}</p><h1>{project.name}</h1><p className="case-lead">{project.summary}</p></div>
            <div className="case-outcome"><span>Engineering outcome</span><p>{project.outcome}</p></div>
          </div>
          <div className="mt-12 flex flex-wrap gap-2 pb-20">{project.technologies.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
        </Container>
      </section>

      <section className="section-space border-y border-white/[0.06] bg-[#070b17]">
        <Container>
          <Reveal><p className="eyebrow mb-6">End-to-end flow</p><FlowRail items={project.flow} /></Reveal>
          {project.slug === "asrp" ? <Reveal className="mt-12"><AsrpArchitecture /></Reveal> : null}
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="case-sections">
            {project.sections.map((section, index) => (
              <Reveal key={section.title} className="case-section">
                <div className="case-section__index">{String(index + 1).padStart(2, "0")}</div>
                <div><p className="eyebrow">{section.title}</p><h2>{section.title}</h2><p>{section.body}</p></div>
                <ul>{section.points.map((point) => <li key={point}><Check className="h-4 w-4" />{point}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {project.slug === "asrp" ? (
        <section className="section-space border-y border-white/[0.06] bg-[#070b17]">
          <Container>
            <Reveal className="deployment-panel">
              <div><p className="eyebrow">CI / CD</p><h2>From commit to HTTPS.</h2><p>Delivery is part of the system design, not an activity postponed until the feature is complete.</p></div>
              <FlowRail items={["GitHub", "Actions", "Build", "SSH deploy", "Docker", "Nginx", "HTTPS"]} />
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section className="section-space">
        <Container>
          <Reveal className="case-next">
            <div><p className="eyebrow">Continue exploring</p><h2>More engineering work</h2></div>
            <div className="grid gap-3 sm:grid-cols-2">{related.map((item) => <Link href={`/projects/${item.slug}`} key={item.slug}><span>{item.number}</span><strong>{item.shortName}</strong><ArrowRight className="h-4 w-4" /></Link>)}</div>
          </Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3"><ActionLink href={siteConfig.githubUrl}><Github className="h-4 w-4" /> View GitHub</ActionLink><ActionLink href="/#contact" variant="primary">Start a conversation</ActionLink></div>
        </Container>
      </section>
    </main>
  );
}
