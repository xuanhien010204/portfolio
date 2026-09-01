import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { siteConfig } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.siteUrl;

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteUrl,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  alumniOf: { "@type": "CollegeOrUniversity", name: "FPT University" },
  worksFor: {
    "@type": "Organization",
    name: siteConfig.company,
  },
  sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
  knowsAbout: [
    "ASP.NET Core",
    "C#",
    ".NET",
    "Clean Architecture",
    "CQRS",
    "REST API",
    "System Design",
    "Azure",
    "Docker",
    "PostgreSQL",
  ],
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${siteConfig.name} Portfolio`,
  url: siteUrl,
  description: siteConfig.description,
};

const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: siteUrl,
  mainEntity: personStructuredData,
  name: `${siteConfig.name} — ${siteConfig.role}`,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileStructuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <PortfolioPage />
    </>
  );
}
