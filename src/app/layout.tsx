import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.defaultSiteUrl;

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const themeInitScript = `
  (function() {
    try {
      var saved = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var theme = saved || (prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", theme === "dark");
    } catch (error) {}
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.displayName} | Backend Software Engineer`,
    template: `%s | ${siteConfig.displayName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Bui Xuan Hien",
    "Backend Software Engineer",
    "ASP.NET Core",
    ".NET 8",
    "Clean Architecture",
    "CQRS",
    "System Design",
    "Azure",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.displayName }],
  creator: siteConfig.displayName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.displayName} | Backend Software Engineer`,
    description: siteConfig.description,
    url: siteUrl,
    siteName: `${siteConfig.displayName} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.displayName} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.displayName} | Backend Software Engineer`,
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
