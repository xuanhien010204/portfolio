import { motion } from "framer-motion";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
};

const SectionHeader = ({ label, title, description, centered = false }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-10 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}`}
    >
      <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2563EB]">{label}</p>
      <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#0F172A] md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-[#64748B] md:text-lg">{description}</p>}
    </motion.div>
  );
};

export default SectionHeader;
