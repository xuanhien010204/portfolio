import { motion } from "framer-motion";

import type { SkillGroup as SkillGroupType } from "../../types/portfolio";
import Pill from "./Pill";

type SkillGroupProps = {
  group: SkillGroupType;
};

const SkillGroup = ({ group }: SkillGroupProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-xl hover:shadow-slate-200/80"
    >
      <h3 className="text-2xl font-black tracking-[-0.03em] text-[#0F172A]">{group.title}</h3>
      <p className="mt-4 min-h-[88px] text-sm leading-7 text-[#64748B]">{group.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>
    </motion.article>
  );
};

export default SkillGroup;
