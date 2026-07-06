# Muhammad Soheb — Portfolio Showcase
> Editorial portfolio layout bridging structural design systems with fluid kinetics.

---

## The Concept

A clean, typography-focused editorial digital space designed to present selected graphic layout and motion art pieces. The architecture relies on an asynchronous split-screen dynamic: typographic project metadata pins statically along the viewport line while tactile visual assets slide continuously beneath the structural grid.

## Architecture

```
Portfolio
├─ accessibility.html      # WCAG 2.1 Level AA conformance matrix
├─ index.html     # Core application layout root
├─ privacy.html   # Non-tracking privacy disclosure
├─ resource/      # Binary media layer (Static assets)
│  ├─ favicon.ico
│  ├─ Muhammad Soheb logo.svg
│  └─ Poster
│     ├─ Ancient-drawing-poster.webp
│     ├─ Ethereal-poster.webp
│     ├─ Kobe-Mosque-Japan.webp
│     ├─ look-up-at-sky.webp
│     ├─ roman-brutalism.webp
│     └─ sekiro-brutalism.webp
├─ robot.txt      # Search crawler ingestion parameters
├─ sitemap.xml    # Synchronized indexing directory map
└─ src/     # Executable runtime environment
   ├─ base.css    # Global tokens, landmarks, accessibility hooks
   ├─ home.css    # Page-specific asymmetric split-grid rules
   ├─ legal.css   # Fluid typography bounds for policy frames
   └─ script.js   # Core interaction & focus loop engine

```
## Technical Overview

* **Design Approach** — High visual contrast, editorial grid choices, monospaced functional indexes, and standard system typography stacks.
* **Performance** — Removed internal `@import` dependencies inside the CSS. Stylesheets are loaded via standard parallel HTML links to avoid render-blocking request delays.
* **Accessibility** — Built to actively support work toward WCAG 2.1 Level AA benchmarks. Includes a visible keyboard skip-to-content link, global system media adjustments for `prefers-reduced-motion`, semantic HTML structures, and responsive `aria-expanded` interaction handling.

---
Engineered with structural clarity. 2026.