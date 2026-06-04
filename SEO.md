# Getting "Pavanity Global" on Google

No .env needed. The site URL is set in **one place**: `scripts/site-url.js`.

---

## Set your live URL (one place)

1. Open **`scripts/site-url.js`** and set `SITE_URL` to your real live site URL (no trailing slash), e.g.:
   ```js
   export const SITE_URL = 'https://www.pavanityglobal.com';
   ```
   If you use a different domain (e.g. Vercel/Netlify), use that URL.

2. Run **`npm run build`**. That will:
   - Generate `robots.txt` and `sitemap.xml` with your URL
   - Inject your URL into `index.html` (canonical, Open Graph, Twitter, JSON-LD)

You can also run **`npm run seo:generate`** anytime to regenerate `robots.txt` and `sitemap.xml` after changing `scripts/site-url.js`.

---

## Still not showing on Google? Checklist

| Step | Action |
|------|--------|
| 1 | Site is **live** at the URL in `scripts/site-url.js` |
| 2 | You’ve run **`npm run build`** (or at least **`npm run seo:generate`**) after setting the URL |
| 3 | [Google Search Console](https://search.google.com/search-console): **Add property** with that exact URL and **verify** (HTML tag, file, or DNS) |
| 4 | In Search Console, **Sitemaps** → submit: `https://your-url/sitemap.xml` |
| 5 | **URL Inspection** → enter your homepage → **Request indexing**. Repeat for `/products` and `/contact` |
| 6 | **Wait 3–14 days**, then search: `site:your-url` to see if pages are indexed |

---

## What’s in the project

- **One URL** – `scripts/site-url.js` is used by the build to generate `robots.txt`, `sitemap.xml`, and to inject the URL into `index.html` (canonical, OG, Twitter, JSON-LD).
- **Title, description, keywords** – In `index.html` for search and social.
- **Structured data (JSON-LD)** – Organization, WebSite, BreadcrumbList for Google.
- **Dynamic canonical** – A small script in `index.html` sets the canonical link to the current domain at runtime.
- **Crawlable content** – `<noscript>` block with brand and links for crawlers.
- **theme-color, author** – Extra meta for browsers and SEO.
- **Sitemap** – Main pages and product category URLs; `lastmod` set at build time.

---

## Favicon on the site and in Google

- The favicon is linked with an **absolute URL** (`SITE_URL`/favicon.png and favicon.ico) so it works on Vercel and so Google can use it in search results.
- **favicon.ico** – Browsers often request `/favicon.ico` by default. Add a file named `favicon.ico` in the `public/` folder (e.g. convert your logo to .ico using [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net)). If you don’t add it, the PNG is still used via the other link tags.
- **In the browser:** After you deploy, the tab should show your favicon. If it doesn’t, do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R) or clear cache.
- **In Google search results:** Google can take days or weeks to show your favicon after indexing. For best results use a **square** image and at least **48×48 px**.

---

## Optional: speed up indexing

- Share your homepage and key pages (e.g. LinkedIn, Twitter).
- If you use **Google Business Profile**, link it to the same domain.
- After deploying, run **`npm run seo:generate`** (or build again) so `sitemap.xml` has today’s date.

---

**Summary:** Set your live URL in `scripts/site-url.js`, run `npm run build`, then verify in Google Search Console, submit the sitemap, and request indexing. No .env required.
