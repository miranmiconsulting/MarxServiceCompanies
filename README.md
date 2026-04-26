# Alamo Area Gutters by Marx Service Companies — Website

Production-ready Next.js 15 (App Router) website for **Marx Service Companies LLC**, a family-run gutter and exterior services company in San Antonio, TX. Built and delivered by **Miranmi Consulting & Analytics, LLC**.

- **Repository:** https://github.com/miranmiconsulting/MarxServiceCompanies.git
- **Stack:** Next.js 15 · React 19 · Tailwind CSS · TypeScript
- **Hosting target:** Vercel
- **Repo layout note:** this Next.js app lives in the `web/` subfolder of the larger consulting project. When deploying on Vercel, set **Root Directory** to `web`.

---

## 1. Brand & SEO Strategy

| Item | Value |
|---|---|
| Public-facing brand | **Alamo Area Gutters by Marx Service Companies** |
| Legal entity | Marx Service Companies LLC |
| Owner | Marcos Munoz |
| Tagline | Servicing Your Projects |
| Primary domain | `alamoareagutterhelmet.com` (existing equity preserved) |
| Suggested redirects → primary | `alamoareagutters.com`, `marxservicecompanies.com` |
| Homepage `<title>` | *Gutter Installation & Cleaning in San Antonio TX \| Alamo Area Gutters by Marx* |
| H1 | *San Antonio Gutter Pros — Installation, Guards, Repair & Cleaning* |
| Meta description | *Trusted San Antonio gutter installation, gutter guards, repairs and cleaning since 2011. Free estimates from Alamo Area Gutters by Marx Service Companies. Call 210-419-1528.* |
| Schema | `RoofingContractor` JSON-LD with full `areaServed[]`, `OfferCatalog`, hours, `founder`, `foundingDate` |

**Primary keywords:** seamless gutter installation San Antonio · 5"/6" gutters San Antonio · Gutter Helmet San Antonio · gutter guards San Antonio · gutter cleaning San Antonio · gutter repair near me · window cleaning San Antonio · solar panel cleaning San Antonio.

**Local geo-modifiers** (used in copy, schema, and area-served chips): San Antonio, Stone Oak, Alamo Heights, Castle Hills, Leon Valley, Helotes, Boerne, Bulverde, Schertz, Cibolo, Selma, Universal City, Live Oak, Converse, New Braunfels.

---

## 2. Site Structure

```
/                Home — hero, trust bar, services, why-us, recent work, CTA, areas
/services        Full services page (anchor links: #install, #helmet, #screens, #repair, #cleaning, #windows, #solar)
/about           Owner story + Gutter Helmet Certified Installer
/gallery         Recent work / Instagram-ready video grid
/contact         Contact info + free-estimate form (#estimate)
/sitemap.xml     Auto-generated from app/sitemap.ts
/robots.txt      Auto-generated from app/robots.ts
```

---

## 3. Conversion Copy

All copy lives in three places and is plain-spoken / owner-voice throughout:

- `lib/business.ts` — name, tagline, phone, email, hours, service areas
- `lib/services.ts` — short + long descriptions for each of the seven services
- The page files in `app/` — narrative copy for hero, about, why-us, etc.

Trust language used everywhere: *Established 2011 · Owner Marcos Munoz on every job · Free estimates · Call or text · Gutter Helmet® Certified Installer · Locally owned in San Antonio.*

Primary CTA on every page: **Call (210) 419-1528** (also as `tel:` and `sms:` links). Sticky bottom call/text bar on mobile is the single biggest conversion lever.

---

## 4. Codebase

```
web/
├── app/
│   ├── layout.tsx              Root layout, metadata, RoofingContractor JSON-LD
│   ├── page.tsx                Home
│   ├── services/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── gallery/page.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts              Auto sitemap
│   ├── robots.ts               Auto robots.txt
│   ├── icon.svg                Favicon
│   ├── globals.css             Tailwind layers + brand component classes
│   └── actions/
│       └── submit-estimate.ts  Server action — optional Resend integration
├── components/
│   ├── Navbar.tsx              Sticky header + mobile drawer
│   ├── Footer.tsx              Footer w/ Facebook + Instagram
│   ├── Hero.tsx                Homepage hero w/ Certified Installer badge
│   ├── TrustBar.tsx            Trust strip under hero
│   ├── ServicesGrid.tsx        Services card grid (compact or full)
│   ├── WhyUs.tsx               6 reasons w/ check marks
│   ├── CtaBand.tsx             Reusable estimate CTA band
│   ├── AreasServed.tsx         15 city chips
│   ├── PageHeader.tsx          Subpage hero
│   ├── VideoGrid.tsx           9:16 placeholder cards for Instagram embeds
│   ├── ContactForm.tsx         useActionState form
│   └── StickyCallBar.tsx       Mobile-only fixed call/text bar
├── lib/
│   ├── business.ts             Single source of truth for business info
│   └── services.ts             Service definitions
├── public/
│   ├── logo.svg                Vector recreation of business-card logo
│   └── certified.svg           Gutter Helmet Certified Installer badge
├── next.config.mjs             Compression, security headers, modern image formats
├── tailwind.config.ts          Brand color tokens
├── tsconfig.json               Strict mode, @/* path alias
├── postcss.config.mjs
├── package.json
├── .gitignore
├── .env.example
└── README.md                   You are here
```

**Brand color tokens** (sampled directly from the business card):

| Token | Hex | Used for |
|---|---|---|
| `navy` / `navy-dark` | `#1B2D5C` / `#11204A` | Headings, dark backgrounds, secondary buttons |
| `brand` / `brand-dark` / `brand-light` | `#2B95D6` / `#1F78B0` / `#E5F2FB` | Roof/accent blue, icon chips, link hover |
| `accent` / `accent-dark` | `#2EA043` / `#1F7A33` | Gutter Helmet ribbon green; primary CTAs only |

---

## 5. Local Development

```bash
cd web
npm install
cp .env.example .env.local        # then edit values
npm run dev                       # http://localhost:3000
```

Build & smoke-test before deploying:

```bash
npm run build
npm run start
```

### Environment variables

| Variable | Required? | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | recommended | Used in metadata, sitemap, JSON-LD. Set to your real production URL on Vercel. |
| `RESEND_API_KEY` | optional | Enables real email delivery from the contact form. If unset, submissions are logged to server console but the user still sees a success message. |
| `CONTACT_TO_EMAIL` | optional | Inbox that receives form submissions. Defaults to `info@alamoareagutters.com`. |
| `CONTACT_FROM_EMAIL` | optional | Verified Resend "from" address. |

---

## 6. Deployment — GitHub + Vercel

### A) Push to GitHub

The Git remote is already `https://github.com/miranmiconsulting/MarxServiceCompanies.git`. From the **`web/`** directory:

```bash
# one-time
git init
git checkout -b main
git remote add origin https://github.com/miranmiconsulting/MarxServiceCompanies.git
git add .
git commit -m "Initial site: Alamo Area Gutters by Marx Service Companies"
git push -u origin main
```

> If the repo already has a default branch / commit, run `git pull --rebase origin main` before pushing, or use `git push -u origin main --force-with-lease` only after confirming the repo is empty.

### B) Deploy on Vercel

1. Go to **vercel.com → Add New → Project**.
2. Import `miranmiconsulting/MarxServiceCompanies`.
3. **Framework preset:** Next.js (auto-detected).
4. **Root Directory:** `web` *(important — the Next app lives in the `web/` subfolder)*.
5. **Build Command:** `next build` (default).
6. **Output Directory:** `.next` (default).
7. Add **Environment Variables** (Production scope):
   - `NEXT_PUBLIC_SITE_URL` = `https://www.alamoareagutterhelmet.com`
   - `RESEND_API_KEY` = *(if/when wiring real email)*
   - `CONTACT_TO_EMAIL` = `info@alamoareagutters.com`
8. Click **Deploy**.

### C) Connect the custom domain

1. Vercel project → **Settings → Domains**.
2. Add `alamoareagutterhelmet.com` and `www.alamoareagutterhelmet.com`. Set the `www` version as primary.
3. Vercel will display the DNS records needed at your registrar:
   - `A` record on apex `@` → `76.76.21.21`
   - `CNAME` on `www` → `cname.vercel-dns.com`
4. Once DNS propagates, Vercel auto-issues an SSL certificate.
5. Add `alamoareagutters.com` and `marxservicecompanies.com` as additional domains, then set them to **Redirect → Primary** so they 301 to the primary domain.

### D) Continuous deployment & best practices

- **Every push to `main`** triggers a production deploy automatically.
- **Pull requests** get preview deploys at unique URLs — share these with the client for sign-off before merging.
- **Content edits** for services, hours, phone, etc. → edit `lib/business.ts` or `lib/services.ts`, commit, push. The whole site updates.
- **New gallery videos** → replace placeholders in `components/VideoGrid.tsx` with Instagram `<iframe>` embeds.
- **Image optimization** → drop real photos into `public/` and use `next/image` (already in use for the logo and badge).

---

## 7. Pre-Launch Checklist

1. Confirm phone, email, hours in `lib/business.ts`.
2. Replace `business.social.facebook` and `business.social.instagram` URLs with real handles.
3. Set `NEXT_PUBLIC_SITE_URL` in Vercel to the production domain.
4. (Optional) Wire Resend: add `RESEND_API_KEY` and verify the "from" domain.
5. Replace 6 gallery placeholders with real Instagram reel iframes.
6. Add real install photos to `public/img/` and reference from the homepage hero / services pages.
7. Claim & optimize the **Google Business Profile** (separate workflow) — use the description in the parent `Marx/README.md`.
8. After launch, request 10 reviews from recent customers.

---

## 8. How This Project Is Described as a Miranmi Consulting Deliverable

> **Client:** Marx Service Companies LLC — a family-run gutter and exterior services contractor based in San Antonio, TX, owned by Marcos Munoz and operating since 2011.
>
> **Engagement:** End-to-end digital strategy and website build, including brand positioning, local SEO architecture, conversion copywriting, UX/UI design, and full-stack engineering.
>
> **Deliverables:**
> - Recommended brand consolidation strategy (*Alamo Area Gutters by Marx Service Companies*) that preserves existing domain equity while expanding local search surface area.
> - Production Next.js 15 application with App Router, TypeScript, Tailwind CSS, and server actions.
> - Conversion-focused, mobile-first design with sticky click-to-call, dual call-and-text CTAs, and a free-estimate capture flow.
> - Complete on-page SEO: per-route metadata, OpenGraph/Twitter cards, canonical URLs, automated sitemap and robots, and `RoofingContractor` JSON-LD with 15 service areas and the full service catalog.
> - GitHub-based source control with continuous deployment to Vercel, custom-domain configuration, and an extensible content model in `lib/`.
>
> **Outcome:** A trust-forward, locally-optimized digital presence that converts San Antonio homeowners from organic search and Instagram traffic into phone calls and free-estimate requests — without dependence on third-party lead-generation marketplaces.

This engagement is suitable as a portfolio reference for **Miranmi Consulting & Analytics, LLC** under categories: *small-business digital strategy, local SEO, and full-stack web development for service-area trade businesses.*
