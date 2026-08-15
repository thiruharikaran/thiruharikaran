# Thiruharikaran R — Portfolio

A dark-themed, animated personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**, designed to feel like a real software engineer's site rather than a template.

**Signature element:** the hero panel is a small terminal window (`whoami.sh`) that "prints" the same facts a recruiter would look for — role, stack, location — in the voice of the subject's own tools.

## Tech Stack

- React 18 + Vite
- Tailwind CSS (custom dark palette + `Space Grotesk` / `Inter` / `JetBrains Mono` type system)
- Framer Motion (page-load sequence, scroll reveals, active-nav indicator)
- React Icons
- Vanilla `IntersectionObserver` for scroll-spy navigation (no router needed — this is a single-page portfolio)

## Folder Structure

```
portfolio/
├── index.html                 # SEO + Open Graph meta tags
├── public/
│   ├── favicon.svg
│   └── README-assets.txt      # notes on resume.pdf / og-image.png you need to add
├── src/
│   ├── main.jsx
│   ├── App.jsx                 # section layout + active-section tracking
│   ├── index.css               # Tailwind layers, glass/gradient utilities
│   ├── data/
│   │   └── portfolio.js        # ALL content lives here — edit this file to update the site
│   └── components/
│       ├── Loader.jsx
│       ├── ScrollProgress.jsx
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx        # includes the Full Stack / Blockchain / Web filter tabs
│       ├── Experience.jsx
│       ├── Education.jsx       # education + certifications
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── ScrollToTop.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Before you run it

1. Add your résumé PDF at `public/resume.pdf` (linked from the "Download Résumé" button).
2. Add a 1200×630 social preview image at `public/og-image.png`.
3. Update project/GitHub/live-demo links in `src/data/portfolio.js` if any change.
4. The contact form is **frontend-only**. Wire the `handleSubmit` function in `src/components/Contact.jsx` to a real backend (e.g. [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com), or your own API route) before relying on it.

## Setup

```bash
npm install
npm run dev       # starts local dev server (usually http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Deploying to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel            # first deploy, follow the prompts
vercel --prod     # promote to production
```

**Option B — Git integration (recommended)**
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**.

### Custom domain

Once deployed, add a custom domain under **Project → Settings → Domains** on Vercel:
- `thiruharikaran.dev`
- `thiruharikaran.in`

Point the domain's DNS to Vercel per the instructions Vercel shows after you add it (usually an `A` record to `76.76.21.21` or a `CNAME` to `cname.vercel-dns.com`, depending on whether it's an apex or subdomain).

## Notes

- All animations respect `prefers-reduced-motion`.
- Content is centralized in `src/data/portfolio.js` — update your info there instead of hunting through components.
- Replace the SVG favicon in `public/favicon.svg` with your own mark if you'd like something more custom.
