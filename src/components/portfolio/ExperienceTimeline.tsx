import { motion } from "framer-motion";

import type { ExperienceItem } from "../../types/portfolio";

type ExperienceTimelineProps = {
  experiences: ExperienceItem[];
};

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => (
  <div className="relative space-y-5 before:absolute before:left-4 before:top-0 before:hidden before:h-full before:w-px before:bg-[#E2E8F0] md:before:block">
    {experiences.map((item) => (
      <motion.article
        key={`${item.title}-${item.company}`}
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80 md:ml-12 md:p-8"
      >
        <span className="absolute -left-[3.25rem] top-8 hidden h-8 w-8 rounded-full border-4 border-[#F8FAFC] bg-[#2563EB] shadow-md md:block" />
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#7C3AED]">{item.impact}</p>
            <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#0F172A]">{item.title}</h3>
            <p className="mt-2 text-base font-bold text-[#64748B]">{item.company}</p>
          </div>
          <span className="w-fit rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm font-black text-[#475569]">{item.date}</span>
        </div>
        <ul className="mt-6 space-y-3">
          {item.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-7 text-[#64748B] md:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
              {point}
            </li>
          ))}
        </ul>
      </motion.article>
    ))}
  </div>
);

export default ExperienceTimeline;
