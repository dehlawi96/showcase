# Muhammad Soheb — Portfolio Showcase
> Personal portfolio site for my graphic design and motion work.

---

## What this is

A typography-focused portfolio for showing off graphic layout and motion art pieces. Project info sits pinned on one side while the visuals scroll past on the other, basically a split-screen layout that keeps the text still and lets the images do the moving.

## File structure

```
Portfolio
├─ 404.html                # Custom "page not found" page
├─ accessibility.html      # Accessibility statement
├─ index.html              # Home page
├─ privacy.html            # Privacy policy
├─ README.md               # This file
├─ robots.txt              # Crawler rules
├─ sitemap.xml             # Sitemap for search engines
├─ work.html               # Work archive with filtering
│
├─ resource/               # Images, logo, favicon
│  ├─ favicon.ico
│  ├─ Muhammad Soheb logo.svg
│  └─ Poster/              # Project thumbnails
│     ├─ Ancient-drawing-poster.webp
│     ├─ Ethereal-poster.webp
│     ├─ Kobe-Mosque-Japan.webp
│     ├─ look-up-at-sky.webp
│     ├─ roman-brutalism.webp
│     └─ sekiro-brutalism.webp
│
└─ src/                    # CSS and JS
   ├─ 404.css              # Standalone styles for the 404 page
   ├─ archive.css          # Styles for the work page filters and drawer
   ├─ archive.js           # Filtering + case study drawer logic
   ├─ base.css             # Shared layout, nav, footer, a11y basics
   ├─ home.css             # Home/work page grid layout
   ├─ legal.css            # Styles for privacy/accessibility pages
   ├─ legal.js             # Toggle logic for the changelog + mobile menu on legal pages
   └─ script.js            # Mobile nav toggle

```
## Notes

* **Design** — high contrast, editorial grid, monospace for the small index numbers, system fonts for everything else.
* **Performance** — no `@import` in the CSS, stylesheets are linked directly so they load in parallel instead of blocking.
* **Accessibility** — working toward WCAG 2.1 AA. Skip-to-content link, `prefers-reduced-motion` support, semantic HTML, `aria-expanded` on interactive bits.

---
Built by Muhammad Soheb, 2026.