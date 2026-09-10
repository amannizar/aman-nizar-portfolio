# Aman Nizar M P — Personal Developer Portfolio

A premium **olive editorial** portfolio for a Java Full Stack Developer — a full-screen scrolling experience built with **React + Vite**.

> Warm cream and deep olive. Editorial typography. Twelve full-screen sections that guide the viewport from screen to screen using native CSS scroll snap — natural scrolling, no wheel hijacking.

**Live:** https://amannizar.github.io/aman-nizar-portfolio/

---

## What's inside

| | |
|---|---|
| **01 — Hero** | Asymmetric editorial layout, real portrait, status indicator |
| **02 — About** | Statement + two-column copy + information grid |
| **03 — Toolkit** | Editorial skill list + Java ecosystem diagram |
| **04 — Selected Work** | Project index of the two real applications |
| **05 — Expense Tracker** | Case screen with real screenshot + live demo |
| **06 — Gym Management** | Reversed layout, real screenshot |
| **07 — Journey** | Vertical timeline, gold marker on current milestone |
| **08 — Education** | QSpiders (currently pursuing) + BCA degree card |
| **09 — Certifications** | Editorial gallery of real credentials |
| **10 — Next Step** | Deep-olive resume screen with "Before you go..." modal |
| **11 — Contact** | Details + working Formspree contact form |
| **12 — End** | Deep-olive footer |

Plus: floating navigation with active-section tracking, right-rail section indicator, scroll progress bar, floating CONNECT button, **Ctrl/Cmd + K command menu**, case-study modals, resume download flow with toast, reduced-motion support, full keyboard accessibility and SEO metadata.

## Technology

- **React 18 + Vite 5** — component-driven, production build
- **Manrope + DM Serif Display** — self-hosted via Fontsource (no external font CDN)
- **Native CSS scroll snap** — `scroll-snap-type: y mandatory` + `100svh` sections
- **Zero runtime dependencies** beyond React — no animation or UI libraries

## Repository layout

```
aman-nizar-portfolio/
├── index.html            ← production build (deployable site — this is what GitHub Pages serves)
├── assets/               ← built JS / CSS / fonts (hashed)
├── images/               ← profile photo, project screenshots, OG image
├── resume/               ← Aman-Nizar-Resume.pdf
├── favicon.svg, robots.txt, sitemap.xml, .nojekyll
└── source/               ← complete React + Vite project
    ├── index.html        ← Vite entry
    ├── package.json
    ├── vite.config.js
    ├── public/          ← static assets (copied into the build)
    └── src/
        ├── main.jsx / App.jsx
        ├── data/portfolio.js   ← ✏️ all content lives here
        ├── components/         ← Nav, modals, command menu, indicator, FAB…
        ├── sections/           ← the twelve full-screen sections
        ├── hooks/              ← active-section tracking
        └── styles/             ← base / components / sections CSS
```

The **repository root is the deployable site**; the full React source lives in `source/`.

## Local development

```bash
cd source
npm install
npm run dev        # → http://localhost:5173
```

## Building

```bash
cd source
npm run build        # builds to source/dist
npm run build:site   # builds AND publishes dist/ → repository root
```

After `npm run build:site`, commit and push — the root site is refreshed.


## Notes

- The contact form posts to a Formspree endpoint (no secrets in the repo).
- Project screenshots are the real images from the GitHub repositories of [Expense Tracker](https://github.com/amannizar/expense-tracker) and [Gym Management System](https://github.com/amannizar/gym-management-system).
- `prefers-reduced-motion` is fully respected: entrance animations, smooth scrolling and the ecosystem diagram all degrade gracefully.

---

© 2026 Aman Nizar M P
