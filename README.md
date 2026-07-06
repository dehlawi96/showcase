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
## Core Parameters

* **Design Paradigm** — Asymmetric composition, strict monochromatic framework, intentional layout shifts, and heavy typographic hierarchy utilizing standard web-safe systems.
* **Performance** — Unbundled parallel CSS network requests to completely remove render-blocking pipeline latency. Zero third-party dependencies or heavy tracking frameworks.
* **Accessibility** — Complete WCAG 2.1 Level AA compliance engine featuring safe native operating system overrides for `prefers-reduced-motion`, programmatic focus-trapping routines, structural land-use semantic markers, and skip-link redirection blocks.

---
Engineered with structural clarity. 2026.