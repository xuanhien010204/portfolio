import type { NavItem, Profile } from "../../types/portfolio";

type NavbarProps = {
  profile: Profile;
  navItems: NavItem[];
};

const Navbar = ({ profile, navItems }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0]/80 bg-white/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Back to home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-[#E2E8F0] bg-[#0F172A] text-sm font-black tracking-[-0.08em] text-white shadow-sm transition group-hover:-translate-y-0.5 group-hover:bg-[#2563EB]">
            &lt;XH/&gt;
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-tight text-[#0F172A] md:text-base">{profile.name}</span>
            <span className="block text-xs font-semibold text-[#64748B]">{profile.specialization}</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-bold text-[#64748B] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#2563EB]">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-black text-[#0F172A] shadow-sm transition hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:text-[#2563EB] hover:shadow-md"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
