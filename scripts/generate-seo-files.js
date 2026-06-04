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

const robotsTxt = `# Pavanity Global - Allow search engines to crawl the site
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
  { loc: '/products/white-onion', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/red-onion', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/pink-onion', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/garlic', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/oilseeds', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/psyllium-husk', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/jaggery', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/agro-allied-food-products', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/spices', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/value-added-dehydrated-products', changefreq: 'monthly', priority: '0.7' },
  // Individual product pages (category/product)
  ...[
    'white-onion', 'red-onion', 'pink-onion', 'garlic', 'oilseeds', 'psyllium-husk',
    'jaggery', 'agro-allied-food-products', 'spices', 'value-added-dehydrated-products',
  ].flatMap((cat) => {
    const products = {
      'white-onion': ['white-onion-powder', 'white-onion-flakes', 'white-onion-granules', 'white-onion-chopped', 'white-onion-minced'],
      'red-onion': ['red-onion-powder', 'red-onion-flakes', 'red-onion-granules', 'red-onion-chopped', 'red-onion-minced'],
      'pink-onion': ['pink-onion-powder', 'pink-onion-flakes', 'pink-onion-granules', 'pink-onion-chopped', 'pink-onion-minced'],
      'garlic': ['garlic-powder', 'garlic-granules', 'garlic-chopped', 'garlic-minced', 'garlic-cloves'],
      'oilseeds': ['black-sesame-seeds', 'hulled-sesame-seeds', 'natural-sesame-seeds', 'chia-seeds', 'java-peanuts', 'tj-peanuts', 'bold-peanuts'],
      'psyllium-husk': ['psyllium-seeds', 'psyllium-husk', 'psyllium-husk-powder', 'psyllium-khakha-powder', 'psyllium-cattle-feed-fiber'],
      'jaggery': ['jaggery-cubes', 'jaggery-powder'],
      'agro-allied-food-products': ['moringa-powder', 'peanut-butter', 'indian-groundnut-extraction-meal'],
      'spices': ['cumin-seeds', 'fenugreek-seeds', 'mustard-seeds', 'fennel-seeds', 'chilli-whole-powder', 'turmeric-whole-powder', 'cinnamon', 'cloves', 'black-pepper', 'cardamom', 'yellow-mustard-seeds'],
      'value-added-dehydrated-products': ['dehydrated-fried-onion', 'toasted-onion-kibbled', 'toasted-onion-chopped'],
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
