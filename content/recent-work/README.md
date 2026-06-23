# Recent Work — content directory

Each `.md` file in this directory is one project that shows on the
website (homepage + /gallery page). Marcos edits these via Pages CMS at
[app.pagescms.org](https://app.pagescms.org/) — **do not** hand-edit
the Markdown unless you're cleaning up.

## Schema

Defined in `/.pages.yml` at the repo root. Each file has YAML
frontmatter only (no body):

```yaml
---
title: Internal name (not shown on site)
caption_en: Public caption (English)
caption_es: Public caption (Spanish — optional, falls back to English)
service_type: gutter_install | gutter_helmet | repair | cleaning | window_cleaning | solar_cleaning | other
featured: true | false       # if true, eligible for homepage (top 2 by order win)
order: 10                    # lower number = shows first
instagram_url: https://... # optional, used as fallback display if no photos
photos:                      # array of paths under public/recent-work
  - /recent-work/job-1-after.jpg
  - /recent-work/job-1-before.jpg
---
```

## Display rules

- A project shows uploaded **photos** if any are present.
- Falls back to embedding the **Instagram URL** if no photos.
- A project with neither is filtered out (won't appear on the site).
- Sort order: ascending by `order`. Use 10 for top, 100 for default.
- Homepage shows the top 2 with `featured: true`.

## Filenames

Pages CMS auto-generates filenames like `10-stone-oak-install.md`
based on `order` + slugified `title`. You don't pick filenames; just
fill in the form fields.

## Adding photos directly to git (developer-only workflow)

Drop image files into `/public/recent-work/`, reference them with
absolute paths starting with `/recent-work/...` in the frontmatter
`photos:` array. Run `npm run build` to verify.
