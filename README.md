# Reeva Website

Vite + React + Tailwind CSS v4, structured to match content-spec.md's 6-page breakdown.

## Getting started
```
npm install
npm run dev
```

## Structure
```
src/
  main.jsx, App.jsx        — router setup (react-router-dom), 6 routes
  index.css                — Tailwind v4 theme tokens (brand colors, font)
  pages/                   — one file per site page: Home, Services, Projects,
                              About, Careers, Contact
  components/
    layout/                — Header, Footer (shared across all pages)
    services/               — ServiceCategoryCard (accordion), ServiceItem
    home/, projects/        — page-specific section components (add as you
                              build out each page's remaining sections)
    ui/                     — PlaceholderImage, GlossaryTerm (reused everywhere)
  data/
    services.js             — all Services page copy/brands/image names,
                              transcribed from content-spec.md — this is what
                              actually drives the accordion, not hardcoded JSX
  assets/images/            — drop real photos here later, named per
                              content-spec.md's naming guide, then swap them
                              into PlaceholderImage usages
```

## Theme colors (Tailwind v4, CSS-based config in src/index.css)
- `navy-900` (#1B3A57) — primary. Use `bg-navy-900`, `text-navy-900`, etc.
- `gold-500` (#F5A623) — secondary. Use `bg-gold-500`, `hover:bg-gold-600`, etc.
- `accent-white` (#FFFFFF) — text/space on dark backgrounds.
No hex codes appear inline in any component — everything routes through
these theme tokens so a future color tweak is a one-line change in index.css.

## Services accordion
`pages/Services.jsx` renders one `ServiceCategoryCard` per category from
`data/services.js`. Each card is independently toggleable (not
mutually-exclusive) via React state, animated open/closed with a
grid-template-rows transition (no fixed max-height guessing, respects
prefers-reduced-motion).

Deep-linking: Home's quick-nav icons (CCTV / Generators / Fit-Out /
Emergency) link to `/services#cctv` etc. `Services.jsx` reads
`location.hash` on mount, opens the matching card via `quickNavMap`, and
scrolls it into view — this is what content-spec.md's "jump straight to
the matching Services accordion section" build note describes.
