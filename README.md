# Reeva Website

Vite + React + Tailwind CSS v4, structured to match content-spec.md's 6-pa# Reeva Website

Website for Reeva Technical Services Contracting LLC (reevallc.com).
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

Deep-linking: links like `/services#cctv` open the matching card.
`Services.jsx` reads `location.hash` on mount, opens the card via
`quickNavMap`, and scrolls it into view.

## Deploying (Netlify)
Hosted on Netlify (project **reevallc**, team on reeva@reevallc.com).
Netlify's free plan blocks automatic deploys from this repo, so deploy
from your computer with the Netlify CLI.

After making changes:
```
git add .
git commit -m "Describe the change"
git push
npm run build
npx netlify-cli deploy --prod --dir=dist
```
Run each command on its own line. The site is live when the terminal
prints "Deploy is live!". Check it with Ctrl+F5.

First time on a new computer (or if it shows the wrong sites):
```
npx netlify-cli logout
npx netlify-cli login
```
Log in as reeva@reevallc.com, click Authorize, then run the deploy command
and choose "Choose from a list of your recently updated sites" → reevallc.

## Where things live
- Quote form: sends to operation@reevallc.com via FormSubmit (`src/pages/Contact.jsx`, `QUOTE_EMAIL`).
- Job applications: admin@reevallc.com (`src/pages/Careers.jsx`).
- Phone/WhatsApp, email, address: `src/components/layout/Footer.jsx`.
- Stats and hero text: `src/pages/Home.jsx`.
- Projects: `src/data/projects.js`. Services: `src/data/services.js`.
- Images: `public/images/` (replace a file with the same name to swap a photo).
ge breakdown.

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
