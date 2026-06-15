import { motion } from "framer-motion";

import type { ProjectItem } from "../../types/portfolio";
import Pill from "./Pill";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
  featured?: boolean;
};

const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`rounded-[2rem] border p-6 transition hover:-translate-y-1 hover:shadow-2xl md:p-8 ${
        featured
          ? "border-[#2563EB]/20 bg-white shadow-xl shadow-blue-100/70"
          : "border-[#E2E8F0] bg-white shadow-sm hover:shadow-slate-200/80"
      }`}
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#2563EB]">
            {String(index + 1).padStart(2, "0")} · {project.type}
          </p>
          <h3 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#0F172A]">{project.name}</h3>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer noopener" className="mt-5 inline-flex font-black text-[#2563EB] hover:text-[#7C3AED]">
              View repository →
            </a>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <p className="font-black text-[#0F172A]">Business problem</p>
            <p className="mt-3 text-sm leading-7 text-[#64748B]">{project.problem}</p>
          </div>
          <div>
            <p className="font-black text-[#0F172A]">Solution</p>
            <p className="mt-3 text-sm leading-7 text-[#64748B]">{project.solution}</p>
          </div>
          <div>
            <p className="font-black text-[#0F172A]">Tech stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Pill key={item} accent={featured}>{item}</Pill>
              ))}
            </div>
          </div>
          <div>
            <p className="font-black text-[#0F172A]">Architecture highlights</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.highlights.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
