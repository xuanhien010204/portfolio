import { motion } from "framer-motion";

import type { Profile, SummaryCard } from "../../types/portfolio";

type HeroProps = {
  profile: Profile;
  summaryCards: SummaryCard[];
};

const Hero = ({ profile, summaryCards }: HeroProps) => (
  <section id="home" className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[520px] max-w-5xl rounded-full bg-[#2563EB]/10 blur-3xl" />
    <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}>
        <div className="mb-7 flex flex-wrap gap-3">
          <span className="rounded-full border border-[#2563EB]/20 bg-[#2563EB]/10 px-4 py-2 text-sm font-black text-[#2563EB]">
            {profile.role}
          </span>
          <span className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-bold text-[#64748B] shadow-sm">
            FPT University · Expected Nov 2026
          </span>
        </div>

        <h1 className="max-w-5xl text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[#0F172A] md:text-6xl lg:text-7xl">
          Backend Engineer building reliable APIs, cloud-ready systems, and clean architecture solutions.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-[#64748B] md:text-xl">{profile.summary}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="rounded-2xl bg-[#2563EB] px-6 py-4 text-center text-sm font-black text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:bg-[#1D4ED8]">
            View Projects
          </a>
          <a href="#contact" className="rounded-2xl border border-[#E2E8F0] bg-white px-6 py-4 text-center text-sm font-black text-[#0F172A] shadow-sm transition hover:-translate-y-1 hover:border-[#2563EB]/40 hover:text-[#2563EB] hover:shadow-md">
            Contact Me
          </a>
          {profile.cvUrl && (
            <a href={profile.cvUrl} className="rounded-2xl border border-[#E2E8F0] px-6 py-4 text-center text-sm font-black text-[#64748B] transition hover:-translate-y-1 hover:text-[#2563EB]">
              Download CV
            </a>
          )}
        </div>
      </motion.div>

      <motion.aside initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.55, ease: "easeOut" }} className="rounded-[2rem] border border-[#E2E8F0] bg-white/90 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur md:p-7">
        <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#7C3AED]">Professional Snapshot</p>
          <div className="mt-6 space-y-5">
            {summaryCards.map((item) => (
              <div key={item.label} className="border-b border-[#E2E8F0] pb-5 last:border-b-0 last:pb-0">
                <p className="text-2xl font-black text-[#0F172A]">{item.value}</p>
                <p className="mt-1 text-sm font-bold text-[#334155]">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.aside>
    </div>
  </section>
);

export default Hero;
