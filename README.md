# Sunil Ingale — Portfolio

Apple-style light bento portfolio built with **React 18 + TypeScript + Vite + Tailwind CSS** (icons: lucide-react).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Edit content

All text lives in `src/data/profile.ts` (profile, experience, projects, skills, education).
Change it there; the stats tiles recalculate automatically.

## Build & deploy

```bash
npm run build          # outputs dist/  -> deploy to Vercel, Netlify, Azure Static Web Apps, GitHub Pages
npm run build:single   # outputs dist-single/index.html (one self-contained file)
```

- **Vercel / Netlify:** import the repo, build command `npm run build`, output folder `dist`.
- **Azure Static Web Apps:** app location `/`, output location `dist`.

## Structure

```
src/
  data/profile.ts        content
  lib.ts                 date + search helpers
  components/
    Nav.tsx              floating glass navigation pill
    Hero.tsx             headline, profile, stats tiles, scrolling stack strip
    Work.tsx             expandable experience list
    Projects.tsx         bento project cards with drawn previews
    Skills.tsx           skill tiles with search
    About.tsx            education, recognition, languages, contact
  App.tsx                page layout
```

Light and dark mode follow the visitor's system setting.
