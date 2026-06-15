import type { Profile } from "../../types/portfolio";

type FooterProps = {
  profile: Profile;
};

const Footer = ({ profile }: FooterProps) => (
  <footer className="border-t border-[#E2E8F0] bg-white/60 px-5 py-8 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#64748B] md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} {profile.name}. Built as an engineering portfolio.</p>
      <p>.NET Backend · Cloud · Clean Architecture · System Design</p>
    </div>
  </footer>
);

export default Footer;
