import { motion } from "framer-motion";

import {
  ContactSection,
  ExperienceTimeline,
  Footer,
  Hero,
  Navbar,
  ProjectCard,
  SectionHeader,
  SkillGroup,
} from "./components/portfolio";
import {
  contactLinks,
  experiences,
  learningRoadmap,
  navItems,
  principles,
  profile,
  projects,
  skills,
  summaryCards,
} from "./data/portfolio";

const App = () => {
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] selection:bg-[#2563EB] selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_32%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.10),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      <Navbar profile={profile} navItems={navItems} />
      <Hero profile={profile} summaryCards={summaryCards} />

      <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader
          label="Featured Projects"
          title="Backend systems presented by problem, solution, and architecture depth."
          description="The main focus is ASRP because it shows backend thinking: business rules, Clean Architecture, data consistency, deployment, and API contracts."
        />
        <div className="space-y-6">
          <ProjectCard project={featuredProject} index={0} featured />
          <div className="grid gap-6 xl:grid-cols-2">
            {remainingProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader
          label="Skills"
          title="Technology grouped by what I can build with it."
          description="The portfolio is backend-first, but still shows practical fullstack collaboration, database thinking, cloud deployment, and architecture discipline."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader
          label="Experience"
          title="Work, study, and leadership aligned with backend engineering."
          description="The focus is engineering growth, real delivery habits, and the ability to communicate business rules through software."
        />
        <ExperienceTimeline experiences={experiences} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader label="Engineering Principles" title="How I think when I build software." />
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((item) => (
            <motion.article key={item.title} className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black text-[#0F172A]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#64748B]">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader label="Current Learning" title="Where I am deliberately getting stronger." />
        <div className="grid gap-5 md:grid-cols-3">
          {learningRoadmap.map((item) => (
            <motion.article key={item.title} className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80">
              <h3 className="text-lg font-black text-[#0F172A]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#64748B]">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <ContactSection profile={profile} contactLinks={contactLinks} />
      <Footer profile={profile} />
    </main>
  );
};

export default App;
