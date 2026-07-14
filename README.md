# OCTRI — Ocean Triathlon Team Egypt

Static marketing site for the Ocean Triathlon Team (OCTRI), deployed to GitHub Pages at
**https://octri-egypt.github.io/**.

## Architecture

This is a **static single-page application (SPA)** built with **Vite + React 19 + React Router 7**
and styled with **Tailwind CSS v4**. It replaced the original Lovable/TanStack Start project, which
was a server-rendered app targeting Cloudflare Workers and was therefore incompatible with
GitHub Pages (which only serves static files).

Key points:

- **No server, no SSR.** The site is fully pre-bundled at build time.
- **Client-side routing** via React Router (`createBrowserRouter`).
- **SPA fallback** — `dist/404.html` is a copy of `index.html`, so deep links like
  `/about` or `/schedule` resolve correctly when refreshed or opened directly on Pages.
- **Base path** is `/` (the site is served at the repository root on GitHub Pages).
- **Images** ship from `src/assets` and are fingerprinted into `dist/assets` by Vite.
- **Favicon, robots.txt, manifest.json, sitemap.xml** all live in `public/` and are copied to
  `dist/` untouched.

## Project structure

```
.
├── index.html              # SPA entry (mounts #root)
├── public/                 # Static assets copied verbatim to dist/
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.tsx            # Router setup + mount
│   ├── App.tsx             # Layout (Header/Footer) + outlet + error view
│   ├── styles.css          # Tailwind v4 theme + design tokens
│   ├── assets/             # Images
│   ├── components/         # Header, Footer, SectionHeading
│   ├── hooks/              # use-document-title
│   ├── lib/utils.ts        # cn() helper
│   └── routes/             # Home, About, Services, Schedule, Contact, NotFound
├── .github/workflows/      # GitHub Actions Pages deploy
├── vite.config.ts
├── tsconfig.json
└── eslint.config.js
```

## Prerequisites

- Node.js 22+ (CI uses 22; local 24 works)
- npm

## Development

```bash
npm install
npm run dev          # http://localhost:5173
```

## Build

```bash
npm run build        # tsc --noEmit && vite build  (also copies index.html -> 404.html)
npm run preview      # serve the built dist/ locally for a production-like check
```

`npm run build` produces `dist/`. The `postbuild` step copies `dist/index.html` to
`dist/404.html` so GitHub Pages serves the SPA for unknown client routes.

## Lint / Type-check

```bash
npm run lint
npm run build        # build also runs tsc --noEmit
```

## Deployment (GitHub Pages)

Deployment is fully automated via **GitHub Actions** (`.github/workflows/deploy.yml`):

1. The workflow runs on every push to `main` and on manual dispatch.
2. It installs dependencies with `npm ci`, builds with `npm run build`, and uploads `dist/`
   as a Pages artifact.
3. It deploys to GitHub Pages using `actions/deploy-pages@v4`.

To go live:

1. Initialize git in this folder (if not already) and create the `main` branch.
2. Create the GitHub repo `octri-egypt/octri-egypt.github.io`.
3. Enable **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push to `main`. The workflow deploys automatically.

No manual build artifacts are committed — the only thing that matters is that `main` builds
successfully.

## Notes & recommendations

- **Custom domain:** to serve from a real domain (e.g. `octri-egypt.com`), add a `CNAME` file
  in `public/` with the domain and configure it in Pages settings. The base path stays `/`.
- **Images:** currently full-resolution JPEGs (~100–190 KB each). For further Lighthouse gains,
  consider AVIF/WebP conversion and responsive `srcset`.
- **Analytics/SEO:** add Open Graph images (`og:image`) and structured data if needed later.
- **Form:** "Join Us" links to a Google Form; wire it to a backend or form service if you want
  submissions stored serverlessly (e.g. Formspree), keeping the site fully static.
