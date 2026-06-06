import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Images
import bg from "../../assets/img/main_product_bc1.png";
 
// Icons
import {
    FaCertificate,
    FaLeaf,
    FaShieldAlt,
} from "react-icons/fa";

// Data
import { getCategoryBySlug } from "../../data/products-data";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";
import SeoHead from "../../components/SeoHead";

import Aos from "aos";

type DivisionDetail = {
    overview: string;
    categories: Array<{
        name: string;
        examples: string;
    }>;
    applications: string[];
    packaging: string;
    quality: string;
};

// Product category detailed content - Export-focused
const divisionDetails: Record<string, DivisionDetail> = {
    "tile-adhesives": {
        overview:
            "Bulk-supplied polymer-modified cementitious tile adhesives for B2B distributors, building material suppliers, and construction projects. Formulated under strict manufacturing conditions to ensure high bond strength, flexibility, and compliance with industrial standards.",
        categories: [
            {
                name: "Cementitious Adhesives",
                examples: "KESHAV KC-1 Gray, KESHAV KC-2 Standard, KESHAV KC-3 High Bond",
            },
            {
                name: "Premium & White Adhesives",
                examples: "KESHAV KC-4 White, KESHAV KC-6 No Limit White",
            },
            {
                name: "Specialized Adhesives",
                examples: "KESHAV PU Adhesive (Polyurethane Base), Large Format Tile Adhesive",
            },
        ],
        applications: [
            "Residential & Commercial Wall/Floor Tiling",
            "Large Format Tile & Stone Installations",
            "Interior & Exterior Tiling Works",
            "High-Bond Heavy Duty Building Work",
        ],
        packaging:
            "Supplied in standard 20 kg and 40 kg moisture-resistant laminated paper/HDPE bags. Custom brand packaging and palletized shipping configurations available.",
        quality:
            "ISO 9001:2015 manufactured. Adhesion strength, open time, and slip resistance tested per EN/ANSI specifications. Batch test reports and technical data sheets provided.",
    },
    "grouts": {
        overview:
            "High-performance joint fillers and grouting systems for ceramic, vitrified, and natural stone installations. Our range covers cementitious polymer-modified grouts, multi-component epoxy grouts, and performance-enhancing liquid admixtures.",
        categories: [
            {
                name: "Epoxy Grouts",
                examples: "KESHAV Epoxy Grout, Premium Epoxy Grout, Sparkle Epoxy Grout (Decorative)",
            },
            {
                name: "Polymer Grouts",
                examples: "Cementitious Polymer Grout, Joint Fillers",
            },
            {
                name: "Grout Admixtures",
                examples: "Liquid Grout Admixture, Latex Joint Fortifier",
            },
        ],
        applications: [
            "Kitchens, Bathrooms, and Wet Areas",
            "Heavy-Traffic Commercial Flooring",
            "Designer Wall & Floor Tile Grouting",
            "Industrial Grade Joint Sealing",
        ],
        packaging:
            "Cementitious grouts in bags (1kg to 10kg), Epoxy systems in pre-measured multi-component kits, and Liquid admixtures in plastic containers.",
        quality:
            "Formulated for water repellency, stain resistance, and color uniformity. Tested against international standards for compressive and flexural strength.",
    },
    "construction-chemicals": {
        overview:
            "Advanced construction chemicals formulated to enhance building durability, structural bonding, and long-term water protection. Includes high-solids SBR latex, acrylic bonding agents, and integral waterproofing compounds.",
        categories: [
            {
                name: "Latex & Bonding Agents",
                examples: "KESHAV SBR LATEX Bonding Agent, Acrylic Modifiers",
            },
            {
                name: "Waterproofing Systems",
                examples: "Liquid Admixtures, Waterproofing Cement Additives",
            },
        ],
        applications: [
            "Structural Concrete Bonding Slurry",
            "Waterproofing Underlays & Roof Coatings",
            "Spalling Concrete Repairs & Plasters",
            "Structural Modification & Admixtures",
        ],
        packaging:
            "Available in 1L, 5L, 20L, and 200L HDPE containers/drums to suit project requirements. Custom private label options available.",
        quality:
            "Manufacturing processes certified to ISO standards. Formulated for high solids content and chemical stability. Material safety data sheets (MSDS) provided.",
    },
    "tile-care-products": {
        overview:
            "Formulated post-installation cleaning and maintenance solutions designed to preserve the aesthetic and structural integrity of tiled surfaces. Easily removes cementitious residues, grout haze, and construction grime.",
        categories: [
            {
                name: "Cleaning Formulations",
                examples: "KESHAV TILE CLEANER Acid Base, Heavy Duty Cleaner",
            },
            {
                name: "Maintenance & Sealing",
                examples: "Tile Sealers, Surface Protectors",
            },
        ],
        applications: [
            "Post-Installation Cement Residue Removal",
            "Grout Haze & Efflorescence Cleaning",
            "Regular Maintenance of Tiled Areas",
            "Stone Surface Care and Protection",
        ],
        packaging:
            "Supplied in 1L, 5L, and 20L HDPE jerry cans and bottles designed for safe handling and export logistics.",
        quality:
            "Non-damaging formulation for compatible tile surfaces. Tested for safe pH limits, surfactant activity, and effective residue breakdown.",
    },
    "block-jointing-mortar": {
        overview:
            "Pre-mixed, high-strength thin-bed jointing mortar designed for laying AAC blocks, fly ash bricks, and concrete blocks. Provides high bond strength, workability, and thermal insulation values.",
        categories: [
            {
                name: "Thin Bed Mortar",
                examples: "KESHAV BLOCK FIX Jointing Mortar",
            },
            {
                name: "Masonry Additives",
                examples: "Pre-mix Cementitious Block Mortars",
            },
        ],
        applications: [
            "AAC Block Masonry Work",
            "Fly Ash Brick Laying",
            "Concrete Block Masonry Walls",
            "Thin-Bed Jointing Applications",
        ],
        packaging:
            "Available in standard 40 kg moisture-resistant laminated woven sacks. Container shipment scheduling available.",
        quality:
            "Tested for compressive strength, water retention, and tensile adhesion. Complies with ASTM and Indian Standards for masonry mortars.",
    },
};

export default function DivisionDetail() {
    const { slug } = useParams<{ slug: string }>();
    const category = getCategoryBySlug(slug || "");

    useEffect(() => {
        Aos.init();
        window.scrollTo(0, 0);
    }, []);

    if (!category) {
        return (
            <>
                <NavbarPavanity />
                <div className="s-py-100 text-center">
                    <h2 className="text-3xl font-semibold">
                        Product Category Not Found
                    </h2>
                    <Link to="/products" className="btn btn-solid mt-6">
                        <span>View All Products</span>
                    </Link>
                </div>
                <FooterPavanity />
            </>
        );
    }

    const details: DivisionDetail = slug && divisionDetails[slug]
        ? divisionDetails[slug]
        : {
              overview: `Export-ready supply for ${category.name} with structured commercial coordination, buyer-aligned documentation, and quality support for international B2B markets.`,
              categories: [],
              applications: [
                  "International B2B supply",
                  "Construction projects",
                  "Dealer distribution networks",
              ],
              packaging:
                  "Packaging configurations can be aligned to buyer requirements and shipment needs.",
              quality:
                  "Quality parameters are reviewed against buyer specifications and export documentation requirements.",
          };

    const availableProductsHighlights = [
        {
            title: "Product Lines",
            value: `${category.products.length} Ready`,
            description: "Export-ready SKUs available inside this category.",
        },
        {
            title: "Applications",
            value: `${details.applications.length} Sectors`,
            description: "Commercial use cases supported across construction projects and trade channels.",
        },
        {
            title: "Buyer Support",
            value: "RFQ Ready",
            description: "Specifications, MOQ discussion, and export enquiry support available.",
        },
    ] as const;

    const overview = details?.overview ?? category.description;
    const metaDesc = (overview ?? '').slice(0, 155) + (overview && overview.length > 155 ? '...' : '');

    return (
        <>
            <SeoHead
                title={category.name}
                description={metaDesc || `${category.name} – Export-grade from Keshav Chemical. ${category.tagline}.`}
                path={`/products/${slug}`}
            />
            {/* Navbar */}
            <NavbarPavanity />

            <main className="pavanity-products-page pavanity-products-detail-page">
            {/* ============================================ */}
            {/* BREADCRUMB SECTION */}
            {/* ============================================ */}
            <div
                className="pavanity-page-hero pavanity-products-hero bg-overlay"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="pavanity-page-hero__content pavanity-products-hero__content">
                    {/* SEO: Changed h2 to h1 — category name is the primary heading for this page */}
                    <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">
                        {category.name}
                    </h1>
                    <p className="text-white text-lg md:text-xl mt-3">
                        {category.tagline}
                    </p>
                    <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-4 flex-wrap">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>/</li>
                        <li className="text-primary">{category.name}</li>
                    </ul>
                </div>
            </div>

            {/* ============================================ */}
            {/* DIVISION OVERVIEW SECTION */}
            {/* ============================================ */}
            {/*
            <div className="s-pb-100 pt-12 md:pt-16">
                <div
                    className="container-fluid"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
                        {/* Image Column *\/}
                        <div className="lg:bg-[#F8F8F9] lg:dark:bg-dark-secondary lg:pr-10 2xl:pr-0 relative">
                            <div>
                                <img
                                    className="object-cover w-full h-full"
                                    src={category.image || placeholderImage}
                                    alt={category.name}
                                />
                            </div>
                        </div>

                        {/* Content Column *\/}
                        <div className="flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px] bg-[#F8F8F9] dark:bg-dark-secondary">
                            <div className="lg:max-w-[600px]">
                                <div className="w-20 h-20 bg-primary rounded-[10px] flex items-center justify-center">
                                    <FaIndustry className="size-16 text-white" />
                                </div>
                                <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                    Division Overview
                                </h3>
                                <p className="mt-4 text-base sm:text-lg">
                                    {details.overview}
                                </p>
                                <div className="mt-6 md:mt-8">
                                    <Link
                                        to="/contact"
                                        className="inline-block bg-primary text-white px-6 py-3 text-base font-medium rounded-[5px] hover:bg-opacity-90 duration-300"
                                    >
                                        Request Product Catalog
                                    </Link>
                                </div>

                                {/* Product Specifications *\/}
                                {category.specifications && (
                                    <div className="mt-8 md:mt-10">
                                        <h4 className="font-semibold text-xl md:text-2xl mb-4">
                                            Product Specifications
                                        </h4>
                                        <div className="space-y-3">
                                            {category.specifications.size && (
                                                <div className="flex">
                                                    <span className="font-semibold text-base w-32 flex-shrink-0">Size:</span>
                                                    <span className="text-base">{category.specifications.size}</span>
                                                </div>
                                            )}
                                            {category.specifications.origin && (
                                                <div className="flex">
                                                    <span className="font-semibold text-base w-32 flex-shrink-0">Origin:</span>
                                                    <span className="text-base">{category.specifications.origin}</span>
                                                </div>
                                            )}
                                            {category.specifications.color && (
                                                <div className="flex">
                                                    <span className="font-semibold text-base w-32 flex-shrink-0">Color:</span>
                                                    <span className="text-base">{category.specifications.color}</span>
                                                </div>
                                            )}
                                            {category.specifications.aroma && (
                                                <div className="flex">
                                                    <span className="font-semibold text-base w-32 flex-shrink-0">Aroma:</span>
                                                    <span className="text-base">{category.specifications.aroma}</span>
                                                </div>
                                            )}
                                            {category.specifications.packing && (
                                                <div className="flex">
                                                    <span className="font-semibold text-base w-32 flex-shrink-0">Packing:</span>
                                                    <span className="text-base">{category.specifications.packing}</span>
                                                </div>
                                            )}
                                            {category.specifications.qualities && (
                                                <div className="flex">
                                                    <span className="font-semibold text-base w-32 flex-shrink-0">Qualities:</span>
                                                    <span className="text-base">{category.specifications.qualities}</span>
                                                </div>
                                            )}
                                            {category.specifications.standard && (
                                                <div className="flex">
                                                    <span className="font-semibold text-base w-32 flex-shrink-0">Standard:</span>
                                                    <span className="text-base">{category.specifications.standard}</span>
                                                </div>
                                            )}
                                            {category.specifications.moq && (
                                                <div className="flex">
                                                    <span className="font-semibold text-base w-32 flex-shrink-0">MOQ:</span>
                                                    <span className="text-base">{category.specifications.moq}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            */}

            {/* ============================================ */}
            {/* AVAILABLE PRODUCTS LIST */}
            {/* ============================================ */}
            <div className="pavanity-products-section pavanity-products-section--catalog s-py-100 bg-[#F8F8F9] dark:bg-dark-secondary">
                <div className="container-fluid">
                    <div
                        className="max-w-[1720px] mx-auto pavanity-products-catalog-shell pavanity-logo-watermark-surface"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="pavanity-products-catalog-top grid gap-6 xl:grid-cols-[minmax(0,1.04fr)_minmax(22rem,0.96fr)] xl:items-stretch">
                            <div className="pavanity-products-catalog-intro">
                                <div className="pavanity-icon-panel pavanity-products-catalog-intro__icon">
                                    <FaLeaf className="text-2xl" />
                                </div>
                                <p className="pavanity-products-catalog-intro__eyebrow">Available Products</p>
                                <h3 className="font-medium leading-none text-2xl md:text-3xl">
                                    Available Products
                                </h3>
                                <p className="pavanity-products-catalog-intro__copy">
                                    Export-ready products available for international B2B buyers,
                                    presented in a cleaner catalog view for faster evaluation and enquiry planning.
                                </p>
                            </div>
                            <div className="pavanity-products-catalog-summary">
                                <div className="pavanity-products-catalog-summary__header">
                                    <p className="pavanity-products-catalog-summary__eyebrow">Catalog Snapshot</p>
                                    <span className="pavanity-products-catalog-summary__badge">01 Category</span>
                                </div>
                                <div className="pavanity-products-catalog-summary__list">
                                    {availableProductsHighlights.map((item, index) => (
                                        <div key={item.title} className="pavanity-products-catalog-summary__item">
                                            <span className="pavanity-step-index">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <div>
                                                <h4>{item.title}</h4>
                                                <strong>{item.value}</strong>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pavanity-card-grid pavanity-products-grid grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                            {category.products.map((product, index) => {
                                const productSummary =
                                    product.description ??
                                    `Export-ready ${product.name.toLowerCase()} supplied with structured documentation and buyer-aligned specifications.`;

                                return (
                                <div
                                    key={product.id}
                                    className="pavanity-product-card pavanity-products-card pavanity-products-card--compact group overflow-hidden"
                                >
                                    {/* Product Image */}
                                    {product.image && (
                                        <div className="pavanity-products-card__media aspect-square overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-110 duration-500"
                                            />
                                        </div>
                                    )}
                                    <div className="pavanity-products-card__content pavanity-products-card__content--compact p-4">
                                        <div className="pavanity-products-card__meta">
                                            <span className="pavanity-products-card__eyebrow">Export Ready</span>
                                            <span className="pavanity-products-card__index" aria-hidden="true">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <h5 className="pavanity-products-card__title font-semibold text-base md:text-lg group-hover:text-primary duration-300">
                                            {product.name}
                                        </h5>
                                        <p className="pavanity-products-card__copy pavanity-products-card__copy--compact text-sm md:text-base">
                                            {productSummary.length > 145
                                                ? `${productSummary.slice(0, 145)}...`
                                                : productSummary}
                                        </p>
                                        <div className="pavanity-products-card__footer pavanity-products-card__footer--stacked">
                                            <span className="pavanity-products-card__footer-line" aria-hidden="true" />
                                            <Link
                                                to={`/products/${slug}/${product.slug}`}
                                                className="pavanity-products-card__button inline-block w-full bg-primary text-white px-4 py-2 text-sm font-medium text-center"
                                            >
                                                View Product
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                        <div className="max-w-3xl mx-auto mt-12 text-center" data-aos="fade-up" data-aos-delay="500">
                            <p className="text-base md:text-lg">
                                Need detailed specifications, pricing, or MOQ information for any of these products?
                            </p>
                            <Link
                                to="/contact"
                                className="pavanity-products-inline-button inline-block mt-4 bg-primary text-white px-8 py-3 text-base font-medium"
                            >
                                Request Product Specifications
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================ */}
            {/* APPLICATIONS SECTION */}
            {/* ============================================ */}
            <div className="pavanity-products-section pavanity-products-section--catalog s-py-100 bg-[#F8F8F9] dark:bg-dark-secondary">
                <div className="container-fluid">
                    <div
                        className="pavanity-surface-card-soft pavanity-products-info-panel max-w-[1720px] mx-auto p-8 md:p-12"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="pavanity-products-applications">
                            <div className="pavanity-products-applications__header flex items-center gap-3 mb-4">
                                <div className="pavanity-icon-panel pavanity-products-section-icon">
                                    <FaLeaf className="size-10 text-white" />
                                </div>
                                <h4 className="font-semibold text-xl md:text-2xl">
                                    Target Applications
                                </h4>
                            </div>
                            <ul className="pavanity-products-applications-grid">
                                {details.applications.map(
                                    (app: string, index: number) => (
                                        <li
                                            key={index}
                                            className="pavanity-products-application-card"
                                        >
                                            <div className="pavanity-products-application-card__header">
                                                <span className="pavanity-products-application-card__check" aria-hidden="true">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="pavanity-products-application-card__index" aria-hidden="true">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>
                                            <p className="pavanity-products-application-card__copy text-base md:text-lg">
                                                {app}
                                            </p>
                                            <div className="pavanity-products-application-card__footer" aria-hidden="true">
                                                <span className="pavanity-products-application-card__footer-line" />
                                                <span className="pavanity-products-application-card__footer-dot" />
                                            </div>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================ */}
            {/* QUALITY & PACKAGING SECTION */}
            {/* ============================================ */}
            <div className="pavanity-products-section pavanity-products-section--compliance s-pb-100">
                <div className="container-fluid">
                    <div
                        className="max-w-[1720px] mx-auto grid lg:grid-cols-2 gap-8"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {/* Quality Standards */}
                        <div className="pavanity-products-info-panel p-8 md:p-10 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="pavanity-icon-panel pavanity-products-section-icon">
                                    <FaShieldAlt className="size-10 text-white" />
                                </div>
                                <h4 className="font-semibold text-xl md:text-2xl">
                                    Quality & Compliance
                                </h4>
                            </div>
                            <p className="text-base md:text-lg">
                                {details.quality}
                            </p>
                        </div>

                        {/* Packaging Options */}
                        <div className="pavanity-products-info-panel p-8 md:p-10 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="pavanity-icon-panel pavanity-products-section-icon">
                                    <FaCertificate className="size-10 text-white" />
                                </div>
                                <h4 className="font-semibold text-xl md:text-2xl">
                                    Packaging Options
                                </h4>
                            </div>
                            <p className="text-base md:text-lg">
                                {details.packaging}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================ */}
            {/* BUSINESS ENQUIRY CTA */}
            {/* ============================================ */}
            <div className="pavanity-products-section s-pb-100">
                <div className="container-fluid">
                    <div
                        className="pavanity-cta-panel pavanity-products-cta-panel max-w-3xl mx-auto text-center p-8 md:p-12 bg-primary rounded-[10px]"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3 className="text-white text-2xl md:text-3xl font-semibold">
                            Interested in {category.name}?
                        </h3>
                        <p className="text-white text-base md:text-lg mt-4">
                            Contact our export team to discuss specifications,
                            pricing, MOQ requirements, and delivery timelines
                            for international supply.
                        </p>
                        <Link
                            to="/contact"
                            className="pavanity-products-cta-panel__button pavanity-products-cta-panel__button--light inline-block mt-6 bg-white text-primary px-8 py-4 text-base md:text-lg font-semibold rounded-[5px] hover:bg-opacity-90 duration-300"
                        >
                            Request Business Enquiry
                        </Link>
                    </div>
                </div>
            </div>

            </main>

            {/* Footer */}
            <FooterPavanity />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    );
}
