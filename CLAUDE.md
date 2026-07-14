# OCTRI Website — Project Notes

Static marketing site for the Ocean Triathlon Team (OCTRI), deployed to GitHub Pages.

## Critical context: this is a STATIC SPA

The site was **migrated away from the original Lovable/TanStack Start + Cloudflare Workers
SSR setup**, which cannot run on GitHub Pages (static file host only). Do **not** reintroduce
SSR, server routes, Cloudflare Workers, TanStack Start/Query, or any backend runtime. The site
must stay fully static and client-rendered.

## Stack

- **Vite 7** + **React 19** + **React Router 7** (SPA, `createBrowserRouter`)
- **Tailwind CSS v4** (CSS-first config via `@tailwindcss/vite`, theme tokens in `src/styles.css`)
- No component library — only the small custom components in `src/components`. (The 50+ shadcn/Radix
  UI files from the original project were deleted as dead weight.)

## How it works

- `index.html` mounts `#root` via `src/main.tsx`.
- `src/App.tsx` = layout (Header/Footer) + `<Outlet/>` + error view.
- Pages live in `src/routes/*` as **default-exported** components. Page titles are set with the
  `useDocumentTitle` hook (not per-route meta).
- `@` alias → `src/` (configured in `vite.config.ts`).
- Images in `src/assets/` (fingerprinted into `dist/assets/` on build).
- `public/` → `favicon.svg`, `manifest.json`, `robots.txt`, `sitemap.xml` (copied verbatim).

## Deployment (GitHub Pages via GitHub Actions)

- `.github/workflows/deploy.yml`: push to `main` (or manual dispatch) → `npm ci` → `npm run build`
  → upload `dist/` → deploy with `actions/deploy-pages@v4`.
- **`dist/` is never committed** — it is built in CI. (`.gitignore` excludes it.)
- **SPA fallback:** `postbuild` copies `dist/index.html` → `dist/404.html` so deep links
  (`/about`, `/schedule`) resolve on refresh/direct open.

## Base path (IMPORTANT)

- Base path is set in `vite.config.ts` (`base`). It MUST match where Pages serves the site:
  - Root domain repo (`<user>.github.io`) → `base: "/"`.
  - Project repo (`<user>/<repo>`) → `base: "/<repo>/"` (otherwise assets 404).
- Keep `sitemap.xml` and `robots.txt` URLs in sync with the deploy URL.

## Common commands

```bash
npm install
npm run dev        # localhost:5173 (hot reload)
npm run build      # tsc --noEmit && vite build (+ 404.html copy)
npm run preview    # serve dist/ at localhost:4173
npm run lint
```

## Notes

- "Join Us" CTAs link to a Google Form (kept as a `JOIN_FORM` constant in each file that uses it).
- Images are full-resolution JPEG/PNG; convert to AVIF/WebP + `srcset` for better Lighthouse scores.
