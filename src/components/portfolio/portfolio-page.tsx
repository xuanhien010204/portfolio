"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  BookOpenText,
  BriefcaseBusiness,
  CloudCog,
  Database,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Network,
  ShieldCheck,
  Sparkles,
  UserRound,
  Waypoints,
} from "lucide-react";
import Link from "next/link";
import {
  certifications,
  contactPillars,
  engineeringPrinciples,
  experienceTimeline,
  featuredProjects,
  githubHighlights,
  heroMetrics,
  heroSignals,
  leadershipItems,
  roadmap,
  siteConfig,
  skillGroups,
  systemDesignShowcase,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { SiteNavbar } from "./site-navbar";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const skillIcons = [BriefcaseBusiness, CloudCog, Database, Blocks];
const designIcons = [Layers3, Waypoints, Network];
const leadershipIcons = [ShieldCheck, UserRound, BookOpenText, GraduationCap];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <motion.div variants={itemVariants} className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.32em] text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">{title}</h2>
      <p className="section-copy mt-5">{copy}</p>
    </motion.div>
  );
}

function SectionWrapper({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn("section-shell py-20 sm:py-24", className)}
    >
      {children}
    </motion.section>
  );
}

function PillLink({
  href,
  children,
  primary,
  download,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  download?: boolean;
}) {
  return (
    <Link
      href={href}
      download={download}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5",
        primary
          ? "border-primary bg-primary text-white hover:bg-blue-700 dark:text-slate-950"
          : "border-border bg-surface text-text shadow-glass backdrop-blur-xl hover:border-primary/50 hover:text-primary",
      )}
    >
      {children}
    </Link>
  );
}

export function PortfolioPage() {
  return (
    <main className="relative overflow-x-hidden">
      <SiteNavbar />

      <section id="hero" className="relative isolate overflow-hidden pt-28">
        <div className="absolute inset-0 -z-20 bg-spotlight" />
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:42px_42px] opacity-40" />
        <div className="section-shell py-16 sm:py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
                <Sparkles className="h-4 w-4" />
                Backend Software Engineer at FPT Software
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
                {siteConfig.heroHeadline}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
                I&apos;m {siteConfig.displayName}, a backend engineer who cares about dependable APIs,
                well-structured services, and systems that stay understandable as the product and the
                team both scale.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <PillLink href="#projects" primary>
                  View featured work
                  <ArrowUpRight className="h-4 w-4" />
                </PillLink>
                <PillLink href={siteConfig.resumePath} download>
                  Download resume
                  <Download className="h-4 w-4" />
                </PillLink>
                <PillLink href={siteConfig.githubUrl}>
                  GitHub
                  <Github className="h-4 w-4" />
                </PillLink>
                <PillLink href={siteConfig.linkedinUrl}>
                  LinkedIn
                  <Linkedin className="h-4 w-4" />
                </PillLink>
                <PillLink href="#contact">
                  Contact
                  <ArrowUpRight className="h-4 w-4" />
                </PillLink>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {heroSignals.map((signal) => (
                  <div key={signal} className="surface-card px-5 py-4 text-sm text-muted">
                    {signal}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
              <div className="surface-card blueprint-grid relative overflow-hidden rounded-[40px] p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.32em] text-primary">
                      Profile snapshot
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-text">{siteConfig.displayName}</h2>
                    <p className="mt-2 max-w-sm text-sm leading-7 text-muted">{siteConfig.brandStatement}</p>
                  </div>
                  <div className="animate-float rounded-[32px] bg-slate-950 px-5 py-4 text-white shadow-glass dark:bg-white dark:text-slate-950">
                    <span className="text-3xl font-semibold">BXH</span>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {heroMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-[24px] border border-border bg-background/80 p-4 dark:bg-slate-950/50">
                      <p className="text-3xl font-semibold text-text">{metric.value}</p>
                      <p className="mt-2 text-sm leading-6 text-muted">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 rounded-[28px] border border-border bg-background/80 p-5 dark:bg-slate-950/50">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted">Current role</span>
                    <span className="text-sm font-medium text-text">{siteConfig.company}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted">Education</span>
                    <span className="text-sm font-medium text-text">{siteConfig.school}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted">Timeline</span>
                    <span className="text-sm font-medium text-text">{siteConfig.graduation}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-14 flex justify-center"
          >
            <Link
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted shadow-glass backdrop-blur-xl hover:border-primary/50 hover:text-primary"
            >
              Scroll for the engineering story
              <ArrowDown className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <SectionWrapper id="about">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionHeading
            eyebrow="About me"
            title="A backend engineer shaped by production thinking early."
            copy="I am building my career around systems that need to be dependable, structured, and ready to evolve. Working as a software engineer at FPT Software while completing my software engineering degree has pushed me to grow faster than a classroom-only path ever could."
          />

          <motion.div variants={itemVariants} className="space-y-6 text-base leading-8 text-muted md:text-lg">
            <p>
              My strongest interest is backend engineering: APIs, business rules, authorization,
              data flows, architecture boundaries, and the practical tradeoffs that appear when
              code meets real use cases.
            </p>
            <p>
              I do not want to build portfolio projects that only look finished from the outside.
              I want to build systems that make sense internally: clean application layers,
              predictable request handling, and cloud-ready delivery that can survive product
              growth.
            </p>
            <p>
              That mindset is visible across my work, from multi-brand restaurant platforms to
              course systems and cross-stack backend APIs. I am still early in my career, but the
              direction is clear: serious backend engineering, continuous learning, and increasing
              technical depth over time.
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {engineeringPrinciples.map((principle) => (
            <article key={principle.title} className="surface-card h-full p-6">
              <h3 className="text-lg font-semibold text-text">{principle.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{principle.description}</p>
            </article>
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper id="experience">
        <SectionHeading
          eyebrow="Experience timeline"
          title="Professional momentum, technical leadership, and architecture-focused project work."
          copy="The timeline below is less about titles alone and more about the trajectory: shipping software in a real company environment, leading a technical community, and building increasingly complex backend systems."
        />

        <motion.div variants={itemVariants} className="mt-12 space-y-6">
          {experienceTimeline.map((item, index) => (
            <article key={item.title} className="surface-card relative overflow-hidden p-6 sm:p-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-accent to-transparent" />
              <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.32em] text-primary">{item.period}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-text">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.organization}</p>
                  <p className="mt-5 text-sm text-muted">Milestone {index + 1}</p>
                </div>
                <div>
                  <p className="text-base leading-8 text-muted">{item.summary}</p>
                  <ul className="mt-5 grid gap-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-7 text-muted">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper id="skills">
        <SectionHeading
          eyebrow="Technical depth"
          title="Stack breadth is useful. Backend depth is the actual signal."
          copy="These skills are grouped the way I think about software delivery: core backend logic first, then infrastructure, data, and the surrounding product context needed to ship complete systems."
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[index] ?? BriefcaseBusiness;

            return (
              <motion.article key={group.title} variants={itemVariants} className="surface-card p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text">{group.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{group.summary}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper id="projects">
        <SectionHeading
          eyebrow="Featured projects"
          title="Projects that show architecture, business logic, and backend judgment."
          copy="Each project below is framed as an engineering case study rather than a screenshot gallery. The goal is to show how I think about structure, tradeoffs, and delivery."
        />

        <div className="mt-12 grid gap-6">
          {featuredProjects.map((project) => (
            <motion.article key={project.name} variants={itemVariants} className="surface-card p-6 sm:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <span className="chip">{project.status}</span>
                  <h3 className="mt-4 text-2xl font-semibold text-text sm:text-3xl">{project.name}</h3>
                  <p className="mt-5 text-base leading-8 text-muted">{project.overview}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-5 xl:grid-cols-3">
                <div className="rounded-[24px] border border-border bg-background/75 p-5 dark:bg-slate-950/50">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">Architecture highlights</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                    {project.architecture.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[24px] border border-border bg-background/75 p-5 dark:bg-slate-950/50">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">Challenges solved</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                    {project.challenges.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[24px] border border-border bg-background/75 p-5 dark:bg-slate-950/50">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">Business impact</h4>
                  <p className="mt-4 text-sm leading-7 text-muted">{project.impact}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="design">
        <SectionHeading
          eyebrow="System design showcase"
          title="Architecture is not a buzzword here. It is the center of the portfolio."
          copy="This section translates backend ideas into visual form so recruiters, leads, and clients can quickly understand how I structure software systems and why those choices matter."
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {systemDesignShowcase.map((showcase, index) => {
            const Icon = designIcons[index] ?? Layers3;

            return (
              <motion.article
                key={showcase.title}
                variants={itemVariants}
                className="surface-card blueprint-grid overflow-hidden p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">{showcase.eyebrow}</p>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-text">{showcase.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{showcase.description}</p>

                <div className="mt-8 space-y-3">
                  {showcase.nodes.map((node, nodeIndex) => (
                    <div key={node} className="relative rounded-[22px] border border-border bg-background/80 px-4 py-4 text-sm text-text dark:bg-slate-950/60">
                      <span>{node}</span>
                      {nodeIndex < showcase.nodes.length - 1 ? (
                        <span className="pointer-events-none absolute left-1/2 top-full h-3 w-px -translate-x-1/2 bg-border" />
                      ) : null}
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm leading-7 text-muted">{showcase.footer}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div variants={itemVariants} className="mt-6 surface-card p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-primary">Design rationale</p>
              <h3 className="mt-4 text-2xl font-semibold text-text">The portfolio mirrors the engineering message.</h3>
              <p className="mt-4 text-base leading-8 text-muted">
                Instead of treating system design as an afterthought, the site gives architecture its
                own dedicated surface. That matters because the right audience is not only hiring for
                syntax knowledge. They are hiring for how you think when systems become bigger,
                messier, and more business-critical.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-border bg-background/75 p-5 dark:bg-slate-950/50">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">API design</h4>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Contract clarity, validation boundaries, and response shapes designed for maintainable clients.
                </p>
              </div>
              <div className="rounded-[24px] border border-border bg-background/75 p-5 dark:bg-slate-950/50">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">Database design</h4>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Relational modeling, query intent, and consistency-aware persistence strategies across SQL platforms.
                </p>
              </div>
              <div className="rounded-[24px] border border-border bg-background/75 p-5 dark:bg-slate-950/50">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">Cloud architecture</h4>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Azure and AWS services considered as delivery building blocks, not resume keywords.
                </p>
              </div>
              <div className="rounded-[24px] border border-border bg-background/75 p-5 dark:bg-slate-950/50">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">Operational thinking</h4>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Docker, Nginx, CI/CD, and deployment workflows treated as part of the engineering story.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper id="github">
        <SectionHeading
          eyebrow="GitHub signal"
          title="Public activity that reinforces the private engineering mindset."
          copy="This section adds an external proof layer. Recruiters and technical leads can quickly scan contribution rhythm, language distribution, and ongoing activity without leaving the site for context first."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <motion.article variants={itemVariants} className="surface-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Github className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-text">GitHub overview</h3>
            </div>

            <p className="mt-5 text-base leading-8 text-muted">
              GitHub is where delivery habits become visible: commit consistency, repository depth,
              and the kinds of problems I choose to practice in public.
            </p>

            <ul className="mt-6 space-y-3">
              {githubHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-7 text-muted">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <PillLink href={siteConfig.githubUrl}>
                Visit profile
                <ArrowUpRight className="h-4 w-4" />
              </PillLink>
              <span className="chip font-mono">xuanhien010204</span>
            </div>
          </motion.article>

          <motion.div variants={itemVariants} className="grid gap-5">
            <div className="surface-card overflow-hidden p-3">
              <img
                src="https://github-readme-stats.vercel.app/api?username=xuanhien010204&show_icons=true&hide_border=true&bg_color=00000000&title_color=2563EB&text_color=64748B&icon_color=7C3AED&ring_color=2563EB"
                alt="GitHub contribution statistics for Bui Xuan Hien"
                className="h-auto w-full rounded-[24px]"
                loading="lazy"
              />
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="surface-card overflow-hidden p-3">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=xuanhien010204&layout=compact&hide_border=true&bg_color=00000000&title_color=2563EB&text_color=64748B"
                  alt="Top GitHub languages for Bui Xuan Hien"
                  className="h-auto w-full rounded-[24px]"
                  loading="lazy"
                />
              </div>
              <div className="surface-card overflow-hidden p-3">
                <img
                  src="https://streak-stats.demolab.com?user=xuanhien010204&hide_border=true&background=00000000&ring=2563EB&fire=7C3AED&currStreakLabel=0F172A&sideLabels=64748B&currStreakNum=0F172A&dates=64748B"
                  alt="GitHub activity streak for Bui Xuan Hien"
                  className="h-auto w-full rounded-[24px]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="certifications">
        <SectionHeading
          eyebrow="Certifications"
          title="A visible path for formal cloud validation."
          copy="The current portfolio is strongest in hands-on engineering evidence. This section makes the next layer of professional growth explicit without pretending those certifications are already complete."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((item) => (
            <motion.article key={item.title} variants={itemVariants} className="surface-card p-6">
              <span className="chip">{item.status}</span>
              <h3 className="mt-4 text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="leadership">
        <SectionHeading
          eyebrow="Leadership and community"
          title="Technical growth is stronger when it compounds through other people too."
          copy="Leadership here is practical rather than performative: building a student community, helping peers, documenting lessons, and learning how to create value beyond individual task completion."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {leadershipItems.map((item, index) => {
            const Icon = leadershipIcons[index] ?? ShieldCheck;

            return (
              <motion.article key={item.title} variants={itemVariants} className="surface-card p-6">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-text">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact" className="pb-28">
        <div className="surface-card overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-primary">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                If the work needs dependable backend engineering, I&apos;m interested in the conversation.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                I am most valuable in environments that care about reliable APIs, clear architecture,
                practical cloud delivery, and an engineer who wants to keep leveling up. If that is
                the bar, let&apos;s talk.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {contactPillars.map((pillar) => (
                  <span key={pillar} className="chip">
                    {pillar}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <PillLink href={siteConfig.githubUrl}>
                  GitHub
                  <Github className="h-4 w-4" />
                </PillLink>
                <PillLink href={siteConfig.linkedinUrl}>
                  LinkedIn
                  <Linkedin className="h-4 w-4" />
                </PillLink>
                <PillLink href={siteConfig.resumePath} download primary>
                  Resume snapshot
                  <Download className="h-4 w-4" />
                </PillLink>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-border bg-background/80 p-6 dark:bg-slate-950/50">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Current focus</p>
                <p className="mt-4 text-xl font-semibold text-text">
                  Reliable backend systems, architecture quality, and real growth in system design depth.
                </p>
              </div>

              <div className="rounded-[28px] border border-border bg-background/80 p-6 dark:bg-slate-950/50">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Future roadmap</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                  {roadmap.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <footer className="border-t border-border py-8">
        <div className="section-shell flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.displayName} • Backend Software Engineer</p>
          <p>Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>
    </main>
  );
}
