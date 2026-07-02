# Project rules for AI collaborators (Claude, Codex, etc.)

Loaded automatically at the start of every Claude Code session in this
repo. Read before you touch site content.

---

## STANDING RULE — Never invent business facts

**Do not fabricate, extrapolate, or amplify services, reviews, ratings,
statistics, credentials, warranties, awards, or any other business
claims for Marx Service Companies.** If a section needs a fact the
owner (Marcos Munoz, via Michael Miranda) hasn't provided in writing,
use a placeholder and ASK before shipping.

### What "fabricate" has meant in past incidents

- Adding **window cleaning** and **solar panel cleaning** as offered
  services because the site's design template implied a multi-service
  contractor. Marx does neither.
- Adding a **"Storm damage? Same-day inspections"** banner during a
  design-differentiation pass. Marx does not offer same-day storm
  inspections.
- Populating `business.trust.googleRating = "5.0"` and
  `googleReviewCount = 3` to enable a `<ReviewsBadge />` — with no
  Google Business Profile in existence. Also mounting named quotes
  ("Lisa K. · Stone Oak", etc.) as real customer testimonials.
- Emitting an `aggregateRating` block in JSON-LD tied to those
  fabricated review values.
- Claiming a **"transferable performance warranty"** and **"Lifetime
  no-clog performance warranty"** for Gutter Helmet without owner
  confirmation of the exact language or manufacturer attribution.

All of these have been removed. Do not re-add without the owner
providing the exact facts in writing.

### The actual services (the ONLY ones)

1. Seamless 5" and 6" gutter installation
2. Gutter Helmet® (Marx is the only certified installer in the area)
3. Gutter screens & covers
4. Gutter repair & maintenance
5. Gutter cleaning

Everything else is off-list until the owner adds it.

### Approved existing claims (safe to keep)

- **"Only Certified Gutter Helmet® Installer in the Area"**
- **"Fully Insured"**
- **Discounts for military and first responders**
- **Established 2015**
- **Same-day RESPONSE / same-day ESTIMATE** — these are about
  responsiveness to inbound leads, NOT same-day storm inspections
- Generic weather / drainage copy: "Texas storms", "storm water",
  "aguaceros tejanos", "el agua de tormenta drene como debe" — these
  describe the problem gutter cleaning solves, not a storm-response
  service

### If you're about to add a claim and aren't sure

STOP. Ask Michael. Prefer a placeholder like `// TODO: awaiting real
value from owner` over any fabricated content.

---

## Where content lives

- **Copy (EN + ES):** `lib/i18n/en.ts`, `lib/i18n/es.ts`, types in
  `lib/i18n/types.ts`. This is the source of truth for every visible
  string.
- **Business facts:** `lib/business.ts`. Phone, address, hours, social
  URLs, trust config live here.
- **Structured data (JSON-LD):** inlined in
  `app/(en)/layout.tsx` and `app/es/layout.tsx`. When services change,
  the OfferCatalog auto-syncs because it maps over
  `en.services.items` / `es.services.items`.
- **Recent Work / gallery photos:** managed by Marcos via Pages CMS
  (`app.pagescms.org`). Markdown files land in
  `content/recent-work/*.md`. Never author the content itself; only
  the schema in `.pages.yml`.

---

## Deploy

`main` deploys to Vercel. There is no staging. Every push is
production.

Verification after any content-touching commit:

1. `npm run lint && npm run build` — both must be clean.
2. `grep -riE "window|solar|storm|ventana|paneles|tormenta"` across
   `lib/` `app/` `components/` `content/` — every remaining hit must
   be an approved generic weather / drainage phrase, not a service
   claim.
3. After the Vercel deploy: curl all 10 sitemap paths (5 EN + 5 ES)
   for 200 responses.
4. Spot-check the two contact-form dropdowns render exactly 7
   `<option>` tags each (1 disabled placeholder + 5 real services +
   "Multiple / Not sure").
5. Fetch the JSON-LD in both root layouts and confirm exactly 5
   `hasOfferCatalog.itemListElement` entries and no `aggregateRating`
   node.

---

## Not in scope for AI edits

- Legal name, DBA, licenses, insurance policies, ownership structure
- Pricing (including "combined rate" language)
- Guarantees, warranties, refund policy
- Anything that could form a consumer-facing representation subject to
  FTC or Texas Deceptive Trade Practices review

These require a human in the loop every time.
