# Bùi Xuân Hiên — Portfolio

Personal software engineering portfolio for **Bùi Xuân Hiên**, published at **https://xuanhien.dev**.

The site focuses on backend engineering, cloud infrastructure, AI-enabled software, selected projects, engineering case studies, and verified credentials.

## Stack

- Next.js 16 with static export
- React 19 and TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber / Three.js where interactive 3D is used

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

Run these before merging:

```bash
npm run check-types
npm run lint
npm run build
```

The production build is exported to `out/`.

## Deployment

GitHub Actions deploys every successful push to `main`.

Pipeline:

```text
main
  -> npm ci
  -> type check
  -> lint
  -> Next.js static export
  -> gh-pages
  -> xuanhien.dev
```

The custom domain is stored in `public/CNAME`, so it is included in every static export. `public/.nojekyll` ensures GitHub Pages serves the `_next` assets directly.

## Project structure

```text
src/app/                    Next.js routes, metadata, robots and sitemap
src/components/portfolio/   Portfolio sections and case-study UI
src/components/ui/          Small reusable UI primitives
src/data/portfolio.ts       Portfolio content and project data
public/                     Static assets and GitHub Pages metadata
.github/workflows/          CI/CD pipeline
```

## Content

Portfolio claims, project descriptions, credentials, images, and resume content should represent verified real information. Placeholder profile and certificate assets should be replaced only with approved authentic assets.

## License and attribution

This repository contains work derived from an MIT-licensed portfolio project by **Sanidhya Kr. Verma**. The original copyright and MIT license are preserved in [LICENSE.md](./LICENSE.md).

Current portfolio implementation, content, and deployment configuration are maintained by Bùi Xuân Hiên.
