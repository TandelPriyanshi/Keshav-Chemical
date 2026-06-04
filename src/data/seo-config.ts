/**
 * SEO config for per-page meta tags. Used by SeoHead component.
 * SITE_URL is injected at runtime from window.location.origin for canonical/og:url.
 */
export const SITE_NAME = 'Keshav Chemical';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
}

export const seoConfig: Record<string, SeoConfig> = {
  '/': {
    title: 'Construction Chemicals & Tile Fixing Solutions',
    description:
      'Keshav Chemical supplies tile adhesives, epoxy grout, polymer grout, block fixing mortar, tile cleaner, SBR latex and construction chemical solutions for professional building projects.',
    keywords:
      'Keshav Chemical, tile adhesive, tile grout, epoxy grout, polymer grout, block fixing mortar, tile cleaner, SBR latex, construction chemicals',
  },
  '/about-us': {
    title: 'About Keshav Chemical',
    description:
      'Learn about Keshav Chemical — a construction chemicals brand offering tile adhesives, grouts, block jointing mortar, tile care and building protection products.',
    keywords:
      'Keshav Chemical, about, construction chemicals, tile adhesive manufacturer, India',
  },
  '/products': {
    title: 'Keshav Chemical Products | Tile Adhesives, Grouts & Construction Chemicals',
    description:
      'Explore Keshav Chemical products including tile adhesives, epoxy grout, polymer grout, block fixing mortar, tile cleaner, SBR latex and construction chemical solutions.',
    keywords:
      'Keshav Chemical, tile adhesive, epoxy grout, polymer grout, block fix, tile cleaner, SBR latex, construction chemicals',
  },
  '/products/tile-adhesives': {
    title: 'Tile Adhesives | Keshav Chemical KC Series & PU Adhesive',
    description:
      'Keshav Chemical tile adhesives — KC-1 to KC-6, No Limit range, and PU adhesive for ceramic, vitrified, marble and stone tile fixing on walls and floors.',
    keywords:
      'tile adhesive, Keshav KC-1, polymer modified tile adhesive, PU tile adhesive, Keshav Chemical',
  },
  '/products/grouts': {
    title: 'Tile Grouts | Polymer Grout, Epoxy Grout & Grout Admixture',
    description:
      'Keshav Chemical grouts including polymer grout, epoxy grout, premium and sparkle epoxy grouts, and grout admixture for durable tile joints.',
    keywords:
      'tile grout, epoxy grout, polymer grout, grout admixture, Keshav Chemical',
  },
  '/products/construction-chemicals': {
    title: 'Construction Chemicals | Keshav SBR Latex',
    description:
      'Keshav Chemical construction chemicals including SBR latex for bonding, waterproofing and cementitious repair applications.',
    keywords:
      'construction chemicals, SBR latex, bonding agent, waterproofing, Keshav Chemical',
  },
  '/products/tile-care-products': {
    title: 'Tile Care Products | Keshav Tile Cleaner',
    description:
      'Keshav Tile Cleaner for post-installation cleaning of tile and stone surfaces — removes cement residue and grout haze.',
    keywords: 'tile cleaner, grout haze remover, tile care, Keshav Chemical',
  },
  '/products/block-jointing-mortar': {
    title: 'Block Jointing Mortar | Keshav Block Fix',
    description:
      'Keshav Block Fix block jointing mortar for AAC and concrete block masonry — pre-mixed, site-ready formulation.',
    keywords:
      'block fixing mortar, block jointing mortar, AAC block mortar, Keshav Block Fix, Keshav Chemical',
  },
  '/quality-compliance': {
    title: 'Quality & Compliance',
    description:
      'Quality standards and compliance practices for Keshav Chemical construction and tile fixing products.',
    keywords:
      'quality compliance, construction chemicals quality, tile adhesive standards, Keshav Chemical',
  },
  '/private-label-custom-sourcing': {
    title: 'Private Label & Custom Solutions',
    description:
      'Private label and custom formulation support for tile adhesives, grouts, and construction chemicals from Keshav Chemical.',
    keywords:
      'private label, custom formulation, construction chemicals OEM, Keshav Chemical',
  },
  '/contact': {
    title: 'Contact Keshav Chemical',
    description:
      'Contact Keshav Chemical for product enquiries, bulk orders, and technical support on tile adhesives, grouts, and construction chemicals.',
    keywords:
      'contact Keshav Chemical, tile adhesive enquiry, construction chemicals supplier',
  },
};

/** Default SEO for unmatched routes (e.g. product detail fallback) */
export const defaultSeo: SeoConfig = {
  title: 'Products',
  description:
    'Keshav Chemical — tile adhesives, epoxy grout, polymer grout, block fixing mortar, tile cleaner, SBR latex and construction chemical solutions.',
  keywords:
    'Keshav Chemical, tile adhesive, epoxy grout, polymer grout, block fix, construction chemicals',
};
