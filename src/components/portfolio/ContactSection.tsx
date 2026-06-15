import { motion } from "framer-motion";

import type { ContactLink, Profile } from "../../types/portfolio";

type ContactSectionProps = {
  profile: Profile;
  contactLinks: ContactLink[];
};

const ContactSection = ({ profile, contactLinks }: ContactSectionProps) => (
  <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="overflow-hidden rounded-[2.25rem] border border-[#E2E8F0] bg-white p-8 shadow-2xl shadow-slate-200/80 md:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[#2563EB]">Contact</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#0F172A] md:text-6xl">Build reliable software with me.</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#64748B] md:text-lg">
            I am open to backend engineering opportunities, project collaboration, technical discussion, and systems that need strong API, database, cloud, or AI integration work.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer noopener" : undefined}
              className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition hover:-translate-y-1 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-lg"
            >
              <span className="block text-sm font-black text-[#2563EB]">{item.label}</span>
              <span className="mt-1 block break-words text-sm font-bold text-[#0F172A]">{item.value}</span>
            </a>
          ))}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition hover:-translate-y-1 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-lg"
            >
              <span className="block text-sm font-black text-[#2563EB]">LinkedIn</span>
              <span className="mt-1 block break-words text-sm font-bold text-[#0F172A]">Professional profile</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </section>
);

export default ContactSection;
