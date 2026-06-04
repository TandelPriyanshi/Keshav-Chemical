// Keshav Chemical - Construction Chemicals & Tile Fixing Solutions

// ============================================
// PRODUCT DIVISIONS (aligned with product catalog)
// ============================================

export interface Division {
    id: number;
    name: string;
    slug: string;
    tagline: string;
    description: string;
    image: string;
}

export const divisions: Division[] = [
    {
        id: 1,
        name: "Tile Adhesives",
        slug: "tile-adhesives",
        tagline: "Polymer Modified Fixing",
        description:
            "Cement-based polymer modified tile adhesives for ceramic, vitrified, marble, and stone installations on walls and floors.",
        image: "/images/products/tile-adhesives.png",
    },
    {
        id: 2,
        name: "Grouts",
        slug: "grouts",
        tagline: "Joint Filling Systems",
        description:
            "Polymer grouts, epoxy grouts, premium and sparkle epoxy systems, and grout admixtures for durable tile joints.",
        image: "/images/products/grouts.png",
    },
    {
        id: 3,
        name: "Construction Chemicals",
        slug: "construction-chemicals",
        tagline: "Building Protection",
        description:
            "Construction chemical solutions including SBR latex for bonding, waterproofing, and cementitious applications.",
        image: "/images/products/construction-chemicals.png",
    },
    {
        id: 4,
        name: "Tile Care Products",
        slug: "tile-care-products",
        tagline: "Surface Maintenance",
        description:
            "Tile care products for post-installation cleaning and maintenance of tiled surfaces.",
        image: "/images/products/tile-care-products.png",
    },
    {
        id: 5,
        name: "Block Jointing Mortar",
        slug: "block-jointing-mortar",
        tagline: "Masonry Solutions",
        description:
            "Pre-mixed block jointing mortar for AAC and concrete block masonry work.",
        image: "/images/products/block-jointing-mortar.png",
    },
];

// ============================================
// BUSINESS CONTINUITY (3 Cards)
// ============================================

export interface BusinessContinuity {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export const businessContinuity: BusinessContinuity[] = [
    {
        id: 1,
        title: "Consistent Supply",
        description:
            "Product supply structured to support dealers, contractors, and project requirements with dependable availability.",
        icon: "supply",
    },
    {
        id: 2,
        title: "Technical Clarity",
        description:
            "Clear product specifications, mixing guidance, and application information for site-ready use.",
        icon: "commercial",
    },
    {
        id: 3,
        title: "Quality Focus",
        description:
            "Manufacturing aligned with defined quality parameters for construction and tile fixing applications.",
        icon: "trade",
    },
];

// ============================================
// COMMERCIAL SCOPE (4 Cards)
// ============================================

export interface CommercialScope {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export const commercialScope: CommercialScope[] = [
    {
        id: 1,
        title: "Product Range",
        description:
            "Tile adhesives, grouts, construction chemicals, tile care, and block jointing mortar for building projects.",
        icon: "export",
    },
    {
        id: 2,
        title: "Project Support",
        description:
            "Support for bulk orders, dealer networks, and project-based material requirements.",
        icon: "custom-development",
    },
    {
        id: 3,
        title: "Applications",
        description:
            "Residential, commercial, and infrastructure tile fixing and masonry applications.",
        icon: "markets",
    },
    {
        id: 4,
        title: "Compliance",
        description:
            "Products developed in line with applicable quality and construction industry practices.",
        icon: "compliance",
    },
];

// ============================================
// GLOBAL MARKETS (Regions)
// ============================================

export interface GlobalMarket {
    id: number;
    region: string;
    countries?: string[];
}

export const globalMarkets: GlobalMarket[] = [
    { id: 1, region: "North India" },
    { id: 2, region: "West India" },
    { id: 3, region: "South India" },
    { id: 4, region: "East India" },
    { id: 5, region: "Dealer Network" },
];

// ============================================
// HERO SECTION CONTENT
// ============================================

export const heroContent = {
    h1: ["Construction Chemicals", "&", "Tile Fixing Solutions"],
    h2: "Tile Adhesives, Grouts & Building Products",
    description:
        "Professional-grade tile adhesives, grouts, block jointing mortar, and construction chemicals for contractors and building projects.",
    primaryCTA: "Request Quote",
    secondaryCTA: "View Products",
    trustIndicators: [
        "Quality Products",
        "Technical Support",
        "Project Ready",
    ],
};

// ============================================
// BUSINESS ENQUIRIES SECTION
// ============================================

export const businessEnquiries = {
    heading: "For product enquiries, bulk orders, and technical support.",
    email: "info@keshavchemical.com",
    response: "Response within 24–48 working hours.",
    ctaText: "Contact Us",
};

// ============================================
// NAVIGATION LINKS
// ============================================

export const navLinks = [
    {
        name: "Products",
        path: "/products",
        hasDropdown: true,
        dropdownItems: [],
    },
    {
        name: "Quality & Compliance",
        path: "/quality-compliance",
        hasDropdown: false,
    },
    {
        name: "Private Label & Custom Sourcing",
        path: "/private-label-custom-sourcing",
        hasDropdown: false,
    },
    {
        name: "About Us",
        path: "/about-us",
        hasDropdown: false,
    },
    {
        name: "Contact",
        path: "/contact",
        hasDropdown: false,
    },
];

// ============================================
// FOOTER LINKS
// ============================================

export const footerQuickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Products", path: "/products" },
    { name: "Quality & Compliance", path: "/quality-compliance" },
    { name: "Private Label & Custom Sourcing", path: "/private-label-custom-sourcing" },
    { name: "Contact", path: "/contact" },
];

export const footerProductCategories = [
    { name: "Tile Adhesives", path: "/products/tile-adhesives" },
    { name: "Grouts", path: "/products/grouts" },
    { name: "Construction Chemicals", path: "/products/construction-chemicals" },
    { name: "Tile Care Products", path: "/products/tile-care-products" },
    { name: "Block Jointing Mortar", path: "/products/block-jointing-mortar" },
];

export const footerLegalLinks: Array<{ name: string; path: string }> = [];

export const footerContent = {
    brandName: "KESHAV CHEMICAL",
    tagline: "Construction Chemicals & Tile Fixing Solutions",
    motto: "Bond. Build. Last.",
    copyright: "© 2025 Keshav Chemical. All rights reserved.",
    description:
        "Keshav Chemical manufactures and supplies tile adhesives, grouts, construction chemicals, tile care products, and block jointing mortar for professional building applications.",
};

export const socialMedia = [
    { name: "WhatsApp", url: "#", icon: "whatsapp" },
    { name: "Instagram", url: "#", icon: "instagram" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
];

// ============================================
// CONTACT INFORMATION
// ============================================

export const contactInfo = {
    email: "info@keshavchemical.com",
    phone: "+91 00000 00000",
    address: "Gujarat, India",
    responseTime: "24-48 working hours",
};

// ============================================
// OFFICE LOCATIONS
// ============================================

export const officeLocations = [
    {
        id: 1,
        country: "India",
        address: "Gujarat, India",
    },
];
