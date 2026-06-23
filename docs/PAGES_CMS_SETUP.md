# Pages CMS — Setup and Owner How-To

Marx Service Companies uses [Pages CMS](https://pagescms.org/) to let
Marcos add and update Recent Work projects on the website without
touching code. Content lives as Markdown frontmatter files in this
repo under `content/recent-work/`. When Marcos saves a change in
Pages CMS, it commits to GitHub, and Vercel auto-deploys (~60s).

**Cost:** Free forever. Pages CMS is MIT-licensed with no paid tier.

---

## One-time setup (Michael does this once)

1. Make sure Marcos has a GitHub account. If not:
   - Go to [github.com/join](https://github.com/join)
   - Sign up with his `info@marxservicecompanies.com` email
   - Pick a username (e.g. `marx-service-companies`)
   - Verify the email
2. Add Marcos as a **collaborator** on the `MarxServiceCompanies` repo
   with **Write** permission:
   - [github.com/miranmiconsulting/MarxServiceCompanies/settings/access](https://github.com/miranmiconsulting/MarxServiceCompanies/settings/access)
   - Click **Add people** → enter his GitHub username → role: **Write**
   - He'll get an email invite — have him accept it.
3. Open [app.pagescms.org](https://app.pagescms.org/) in Marcos's browser.
4. Click **Sign in with GitHub** → authorize Pages CMS to access the
   `miranmiconsulting/MarxServiceCompanies` repo. (Choose **Only select
   repositories** during the GitHub permission flow — don't grant
   access to all his repos.)
5. After auth, Pages CMS shows the repo. Click it. It auto-discovers
   `.pages.yml` and presents only the **Recent Work** collection.
6. Done. Marcos can now add/edit projects.

**Bookmark this:** `https://app.pagescms.org/miranmiconsulting/MarxServiceCompanies`

---

## Marcos's day-to-day workflow

### To add a new project (photos)

1. Open the Pages CMS bookmark on phone or laptop.
2. Click **Recent Work** → **+ New**.
3. Fill in:
   - **Project title** — internal name only (e.g. "Stone Oak gutter install")
   - **Caption (English)** — what shows on the website ("Seamless gutters on a Stone Oak home")
   - **Caption (Spanish)** — optional. Leave blank to use English on both pages.
   - **Service type** — pick from the dropdown
   - **Feature on homepage** — toggle on if it should appear on the homepage (top 2 win)
   - **Sort order** — leave at `100` for normal. Use `10` for a new "show first" project.
   - **Photos** — drag in 1–6 photos from his phone (or click to pick)
4. Click **Save** in the top right.
5. Wait ~60 seconds. New project is live.

### To add a new project (Instagram only)

1. Open Pages CMS → **+ New** as above.
2. Fill in the same fields, **leave Photos empty**.
3. Paste the Instagram URL into **Instagram URL** (full URL,
   e.g. `https://www.instagram.com/reel/CkIp1YCA2yW/`).
4. Save. Site updates in ~60s.

### To hide / reorder / delete a project

- **Hide from homepage:** open the project, toggle **Feature on homepage** off, Save.
- **Hide from gallery entirely:** delete the project (or just remove both Photos and Instagram URL — it'll be filtered out).
- **Reorder:** edit the **Sort order** number. Lower = first.

### Tips

- Photos are uploaded to `public/recent-work/` in the repo. Pages CMS
  handles the upload automatically — just drag them in.
- Best photo aspect ratio: 4:3 landscape. Square also works. Vertical
  reels are better as Instagram URLs.
- If a photo looks too dark or has a date stamp, retake the photo.
  Photo editing isn't in scope for the CMS.

---

## Troubleshooting

**"My change didn't appear after 2 minutes"**
- Check the Vercel deploy status at
  [vercel.com/miranmiconsulting/marx-service-companies/deployments](https://vercel.com/miranmiconsulting/marx-service-companies/deployments)
- If a deploy is red, the most common cause is a broken Instagram URL
  format. Make sure it starts with `https://www.instagram.com/`.

**"Pages CMS says I don't have access to the repo"**
- Re-check the GitHub collaborator step above. Marcos must be added
  with **Write** access AND he must have accepted the email invite.

**"I want to undo a change"**
- Every save is a git commit. Michael can roll back a single commit in
  ~30 seconds via `git revert` on the command line.

---

## What's NOT in the CMS (yet)

The following content is hardcoded and requires a developer edit:

- Hero copy, services list, why-us bullets, testimonials, contact info
  (all in `/lib/i18n/en.ts` and `/lib/i18n/es.ts`)
- Phone number, email, hours (`/lib/business.ts`)
- Page layout and design (`/components/*`)

If Marcos starts wanting to edit those, we add them to the CMS — but
the cost is more schema complexity, so we only do it when there's a
real recurring need.
