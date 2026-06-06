/**
 * Generates robots.txt and sitemap.xml. Uses SITE_URL from ./site-url.js (single place to change).
 * Run before build: npm run seo:generate (or it runs automatically via build)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITE_URL } from './site-url.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const baseUrl = SITE_URL.replace(/\/$/, '');

const robotsTxt = `# Keshav Chemical - Allow search engines to crawl the site
User-agent: *
Allow: /

# Sitemap (generated from scripts/site-url.js)
Sitemap: ${baseUrl}/sitemap.xml
`;

const lastmod = new Date().toISOString().split('T')[0];

const urls = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/about-us', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products', changefreq: 'weekly', priority: '0.9' },
  { loc: '/quality-compliance', changefreq: 'monthly', priority: '0.8' },
  { loc: '/private-label-custom-sourcing', changefreq: 'monthly', priority: '0.8' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products/tile-adhesives', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/grouts', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/construction-chemicals', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/tile-care-products', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/block-jointing-mortar', changefreq: 'monthly', priority: '0.7' },
  // Individual product pages (category/product)
  ...[
    'tile-adhesives', 'grouts', 'construction-chemicals', 'tile-care-products', 'block-jointing-mortar',
  ].flatMap((cat) => {
    const products = {
      'tile-adhesives': ['keshav-kc-1', 'keshav-kc-2', 'keshav-kc-3', 'keshav-kc-4-white', 'keshav-kc-5-no-limit-gray', 'keshav-kc-6-white-no-limit-white', 'keshav-pu-adhesive'],
      'grouts': ['keshav-polymer-grout', 'keshav-epoxy-grout', 'premium-epoxy-grouts', 'sparkle-epoxy-grouts', 'grout-admixture'],
      'construction-chemicals': ['keshav-sbr-latex'],
      'tile-care-products': ['keshav-tile-cleaner'],
      'block-jointing-mortar': ['keshav-block-fix'],
    }[cat] || [];
    return products.map((p) => ({ loc: `/products/${cat}/${p}`, changefreq: 'monthly', priority: '0.6' }));
  }),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${baseUrl}${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const publicDir = path.join(root, 'public');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);

console.log('[SEO] Generated robots.txt and sitemap.xml with base URL:', baseUrl);
