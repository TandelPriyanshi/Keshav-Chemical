import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoConfig, defaultSeo, SITE_NAME } from '../data/seo-config';

interface SeoHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

/**
 * Per-page SEO meta tags. Use with custom props for dynamic pages (products).
 * For static pages, it auto-detects from seo-config based on pathname.
 */
export default function SeoHead({ title, description, path, image }: SeoHeadProps) {
  const location = useLocation();
  const canonicalPath = path ?? (location.pathname || '/');
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.pavanityglobal.com';
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  const ogImage = image ?? `${baseUrl}/images/main_product_bc.png`;

  const config = title && description
    ? { title, description }
    : seoConfig[location.pathname] ?? defaultSeo;

  const fullTitle = config.title.includes('|') ? config.title : `${config.title} | ${SITE_NAME}`;
  const metaDescription = description ?? config.description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
