# Aurelia Private Estates — Quiet Luxury

Static marketing site for a luxury real estate brand. Designed for **GitHub** hosting of source and **AWS S3** (or any static host) for production HTML, assets, and fragments.

## Repository layout

| Path | Purpose |
|------|---------|
| `index.html` | Homepage (hero, listings, narrative, FAQ, etc.) |
| `*.html` | Other pages |
| `components/` | Reusable HTML fragments (`site-header.html`, `site-footer.html`) loaded by `js/site-shell.js` |
| `css/tokens.css` | Global design tokens (palette, fonts) |
| `css/pages/` | Page-scoped CSS (e.g. `home.css`) |
| `js/` | Client scripts (shell, sliders, forms) |

Fragments are loaded with `fetch()`. **Open the site over HTTP** (not `file://`) so the header and footer load correctly.

## Local preview

```bash
npx --yes serve .
```

Then open the URL printed in the terminal (often `http://localhost:3000`).

## AWS S3 deployment (static)

1. Build step is optional today; upload the repo root (or a `dist/` folder if you add a bundler later).
2. Enable **static website hosting** on the bucket, with `index.html` as the index document.
3. Set bucket policy for public read on `s3:GetObject` for the site prefix (or use CloudFront + OAI).
4. Ensure **MIME types** are correct (`text/html`, `text/css`, `application/javascript`). Most S3 sync tools map these by extension.

## Future backend / CMS

Section roots use `data-api-section="…"` so a later build step or hydration script can replace markup from an API or headless CMS without restructuring the page. Keep new sections following that pattern.
