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
    "white-onion": {
        overview:
            "Bulk-supplied dehydrated white onion products for international B2B buyers, food manufacturers, and HoReCa distribution. Processed under controlled dehydration conditions to meet export quality standards and buyer specifications.",
        categories: [
            {
                name: "Dehydrated White Onion",
                examples: "White Onion Powder, White Onion Flakes, White Onion Granules, White Onion Chopped, White Onion Minced",
            },
            {
                name: "Custom Blends",
                examples: "Onion Mix, Seasoning Bases, Curry Powders",
            },
            {
                name: "Food-Grade Ingredients",
                examples: "Culinary Applications, Seasoning Manufacturing",
            },
        ],
        applications: [
            "Food Manufacturing & Processing",
            "Instant Food Products",
            "HoReCa (Hotels, Restaurants, Catering)",
            "Ready-to-Eat Meal Manufacturers",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 20kg cartons with inner poly liners. Custom packaging configurations available for export orders.",
        quality:
            "Food-grade dehydration facility. Moisture content controlled per specifications. Microbiological testing. Export documentation and certificates of analysis provided.",
    },
    "red-onion": {
        overview:
            "Bulk-supplied dehydrated red onion products for international B2B buyers, food manufacturers, and HoReCa distribution. Processed under controlled dehydration conditions to meet export quality standards and buyer specifications.",
        categories: [
            {
                name: "Dehydrated Red Onion",
                examples: "Red Onion Powder, Red Onion Flakes, Red Onion Granules, Red Onion Chopped, Red Onion Minced",
            },
            {
                name: "Custom Blends",
                examples: "Onion Mix, Seasoning Bases, Curry Powders",
            },
            {
                name: "Food-Grade Ingredients",
                examples: "Culinary Applications, Seasoning Manufacturing",
            },
        ],
        applications: [
            "Food Manufacturing & Processing",
            "Instant Food Products",
            "HoReCa (Hotels, Restaurants, Catering)",
            "Ready-to-Eat Meal Manufacturers",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 20kg cartons with inner poly liners. Custom packaging configurations available for export orders.",
        quality:
            "Food-grade dehydration facility. Moisture content controlled per specifications. Microbiological testing. Export documentation and certificates of analysis provided.",
    },
    "pink-onion": {
        overview:
            "Bulk-supplied dehydrated pink onion products for international B2B buyers, food manufacturers, and HoReCa distribution. Processed under controlled dehydration conditions to meet export quality standards and buyer specifications.",
        categories: [
            {
                name: "Dehydrated Pink Onion",
                examples: "Pink Onion Powder, Pink Onion Flakes, Pink Onion Granules, Pink Onion Chopped, Pink Onion Minced",
            },
            {
                name: "Custom Blends",
                examples: "Onion Mix, Seasoning Bases, Curry Powders",
            },
            {
                name: "Food-Grade Ingredients",
                examples: "Culinary Applications, Seasoning Manufacturing",
            },
        ],
        applications: [
            "Food Manufacturing & Processing",
            "Instant Food Products",
            "HoReCa (Hotels, Restaurants, Catering)",
            "Ready-to-Eat Meal Manufacturers",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 20kg cartons with inner poly liners. Custom packaging configurations available for export orders.",
        quality:
            "Food-grade dehydration facility. Moisture content controlled per specifications. Microbiological testing. Export documentation and certificates of analysis provided.",
    },
    "garlic": {
        overview:
            "Bulk-supplied dehydrated garlic products for international B2B buyers, food manufacturers, and HoReCa distribution. Processed under controlled dehydration conditions to meet export quality standards and buyer specifications.",
        categories: [
            {
                name: "Dehydrated Garlic",
                examples: "Garlic Powder, Garlic Granules, Garlic Chopped, Garlic Minced, Garlic Cloves",
            },
            {
                name: "Custom Blends",
                examples: "Garlic Mix, Seasoning Bases, Curry Powders",
            },
            {
                name: "Food-Grade Ingredients",
                examples: "Culinary Applications, Seasoning Manufacturing",
            },
        ],
        applications: [
            "Food Manufacturing & Processing",
            "Instant Food Products",
            "HoReCa (Hotels, Restaurants, Catering)",
            "Ready-to-Eat Meal Manufacturers",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 20kg cartons with inner poly liners. Custom packaging configurations available for export orders.",
        quality:
            "Food-grade dehydration facility. Moisture content controlled per specifications. Microbiological testing. Export documentation and certificates of analysis provided.",
    },
    "seeds-dietary-fibers": {
        overview:
            "Bulk-supplied seeds and dietary fibers for international B2B buyers, food manufacturers, and HoReCa distribution. Processed and packed under controlled conditions to meet export quality standards.",
        categories: [
            {
                name: "Nutritional Seeds",
                examples:
                    "Chia Seeds, Flax Seeds, Pumpkin Seeds, Sunflower Seeds",
            },
            {
                name: "Specialty Seeds",
                examples: "Sesame Seeds, Poppy Seeds, Hemp Seeds, Basil Seeds",
            },
            {
                name: "Dietary Fibers",
                examples: "Psyllium Husk, Wheat Bran, Oat Fiber, Inulin",
            },
            {
                name: "Seed Powders",
                examples: "Flaxseed Powder, Chia Powder, Hemp Protein",
            },
        ],
        applications: [
            "Health Food Manufacturing",
            "Functional Food Products",
            "Supplement Industry",
            "Bakery & Snack Ingredients",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 25kg units with moisture-proof packaging. Custom configurations available for export orders.",
        quality:
            "Clean sorting facility. Purity testing. Microbiological testing. Organic certification available for select products. Export documentation provided.",
    },
    "jaggery-natural-sweeteners": {
        overview:
            "Bulk-supplied jaggery, natural sweeteners, and sugar alternatives for international B2B buyers, food manufacturers, and HoReCa distribution. Processed to meet export quality standards and destination market requirements.",
        categories: [
            {
                name: "Jaggery Products",
                examples: "Jaggery Powder, Jaggery Cubes, Liquid Jaggery",
            },
            {
                name: "Natural Sweeteners",
                examples: "Coconut Sugar, Date Sugar, Palm Sugar",
            },
            {
                name: "Sugar Alternatives",
                examples: "Stevia, Erythritol, Monk Fruit Sweetener",
            },
            {
                name: "Specialty Sugars",
                examples: "Muscovado, Demerara, Raw Cane Sugar",
            },
        ],
        applications: [
            "Health Food Manufacturing",
            "Sugar-Free Product Development",
            "Beverage Industry",
            "Bakery & Confectionery",
        ],
        packaging:
            "Bulk supply in 15kg, 20kg, 25kg units. Custom packaging available for export specifications.",
        quality:
            "Food-grade processing facility. Purity testing. Moisture content control. Export documentation and certificates of analysis provided.",
    },
    "nutritional-value-added-ingredients": {
        overview:
            "Bulk-supplied nutritional and value-added food ingredients for international B2B buyers, food manufacturers, and HoReCa distribution. Formulated and processed to meet export quality standards and functional specifications.",
        categories: [
            {
                name: "Protein Ingredients",
                examples:
                    "Pea Protein, Soy Protein, Rice Protein, Hemp Protein",
            },
            {
                name: "Superfoods",
                examples: "Spirulina, Moringa Powder, Wheatgrass, Chlorella",
            },
            {
                name: "Fortification Ingredients",
                examples:
                    "Vitamin Premixes, Mineral Blends, Functional Additives",
            },
            {
                name: "Value-Added Powders",
                examples:
                    "Nutritional Mixes, Health Drink Bases, Supplement Powders",
            },
        ],
        applications: [
            "Functional Food Manufacturing",
            "Supplement Industry",
            "Health & Wellness Products",
            "Fortified Food Products",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 25kg units with moisture-proof and light-resistant packaging. Custom configurations for export.",
        quality:
            "GMP facility for nutritional ingredients. Nutritional analysis and testing. Heavy metal testing. Export documentation and specifications provided.",
    },
    oilseeds: {
        overview:
            "High-quality oilseeds including sesame seeds, chia seeds, and premium peanuts for international B2B buyers and food manufacturers. Sourced from certified Indian farms and processed to meet export quality standards. Suitable for tahini, bakery, and Asian cuisine.",
        categories: [
            {
                name: "Sesame Seeds",
                examples: "Black Sesame Seeds, Hulled Sesame Seeds, Natural Sesame Seeds",
            },
            {
                name: "Super Seeds",
                examples: "Chia Seeds",
            },
            {
                name: "Premium Peanuts",
                examples: "Java Peanuts, TJ Peanuts, Bold Peanuts",
            },
            {
                name: "Roasted & Raw",
                examples: "Roasted Seeds, Raw Seeds for Processing",
            },
        ],
        applications: [
            "Bakery & Confectionery",
            "Health Food Manufacturing",
            "Oil Extraction Industry",
            "Tahini & Paste Production",
        ],
        packaging:
            "Bulk supply in 25kg, 50kg bags with moisture-proof packaging. Container loads available for export.",
        quality:
            "Certified processing facility. Purity testing. Microbiological analysis. Export documentation provided.",
    },
    "psyllium-husk": {
        overview:
            "Bulk-supplied psyllium seed and husk ingredients for international B2B buyers across nutraceutical, food, pharmaceutical, and animal nutrition segments. Export supply is aligned with purity requirements, packaging needs, and destination market documentation.",
        categories: [
            {
                name: "Psyllium Seeds",
                examples: "Premium quality seeds from Gujarat and Rajasthan",
            },
            {
                name: "Psyllium Husk",
                examples: "85%, 95%, 98%, 99% Purity grades",
            },
            {
                name: "Psyllium Husk Powder",
                examples: "80-100 mesh, 100-120 mesh - Food & Pharmaceutical grade",
            },
            {
                name: "Psyllium Khakha Powder",
                examples: "Fiber-rich byproduct for animal feed and agriculture",
            },
            {
                name: "Psyllium Cattle Feed Fiber",
                examples: "Natural fiber supplement for dairy and farm animals",
            },
        ],
        applications: [
            "Pharmaceutical & Nutraceutical Industry",
            "Food & Beverage Manufacturing",
            "Animal Feed & Livestock Nutrition",
            "Agriculture & Soil Conditioning",
            "Biodegradable & Industrial Products",
        ],
        packaging:
            "Bulk supply in 25kg bags with inner poly liners. Custom packaging available for export orders.",
        quality:
            "GMP-certified facility. Heavy metal testing. Microbial analysis. Full traceability and export documentation.",
    },
    jaggery: {
        overview:
            "Traditional Indian jaggery (unrefined cane sugar) in cubes and powder form for health-conscious food manufacturers and confectionery industries worldwide.",
        categories: [
            {
                name: "Jaggery Cubes",
                examples: "Small Cubes, Large Cubes, Cut Pieces",
            },
            {
                name: "Jaggery Powder",
                examples: "Fine Powder, Granulated Form",
            },
            {
                name: "Organic Jaggery",
                examples: "Certified Organic, Natural Processing",
            },
            {
                name: "Specialty Products",
                examples: "Flavored Jaggery, Export Grade",
            },
        ],
        applications: [
            "Confectionery Manufacturing",
            "Beverage Industry",
            "Health Food Products",
            "Traditional Sweet Making",
        ],
        packaging:
            "Bulk supply in 10kg, 25kg units. Custom packaging available for export markets.",
        quality:
            "Food-grade processing. Chemical-free production. Quality testing. Export documentation and certifications provided.",
    },
    "agro-allied-food-products": {
        overview:
            "Nutritional food ingredients including moringa powder, peanut butter, and peanut oil cake for health food and nutraceutical industries.",
        categories: [
            {
                name: "Moringa Products",
                examples: "Moringa Powder",
            },
            {
                name: "Peanut Products",
                examples: "Peanut Butter, Peanut Oil Cake",
            },
            {
                name: "Nutritional Powders",
                examples: "Protein-Rich, Superfood Blends",
            },
            {
                name: "Custom Formulations",
                examples: "Private Label, OEM Products",
            },
        ],
        applications: [
            "Health Food Manufacturing",
            "Supplement Industry",
            "Functional Food Products",
            "Animal Feed Industry",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 25kg units with moisture-proof and light-resistant packaging.",
        quality:
            "GMP facility for nutritional ingredients. Nutritional analysis. Heavy metal testing. Export documentation provided.",
    },
    spices: {
        overview:
            "Export-quality whole and powdered spices sourced from India's premier spice-growing regions with full traceability and quality assurance.",
        categories: [
            {
                name: "Seeds",
                examples: "Cumin Seeds, Fenugreek Seeds, Mustard Seeds, Fennel Seeds",
            },
            {
                name: "Whole Spices",
                examples: "Cinnamon, Cloves, Black Pepper, Cardamom",
            },
            {
                name: "Powdered Spices",
                examples: "Chilli Powder, Turmeric Powder, Spice Blends",
            },
            {
                name: "Export Grades",
                examples: "A-Grade, Export Quality, Organic Certified",
            },
        ],
        applications: [
            "Food Manufacturing & Processing",
            "Spice Blend Production",
            "HoReCa Supply",
            "Retail Packaging & Distribution",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 25kg bags with inner poly liners. Custom packaging for export.",
        quality:
            "Steam sterilization available. Purity testing. Microbiological analysis. Full traceability and export documentation.",
    },
    "value-added-dehydrated-products": {
        overview:
            "Premium value-added dehydrated onion products including toasted onion chopped, toasted onion kibbled, and dehydrated fried onion. Processed in India with controlled fat levels and multiple grade options for food manufacturers, snack producers, and ready-to-eat meal applications.",
        categories: [
            {
                name: "Toasted Onion",
                examples: "Toasted Onion Chopped, Toasted Onion Kibbled",
            },
            {
                name: "Fried Onion",
                examples: "Dehydrated Fried Onion (Flakes)",
            },
            {
                name: "Grades & Cuts",
                examples: "A Grade, B Grade, Commercial Grade – Flakes, Chopped – 12% or 8% Fat",
            },
        ],
        applications: [
            "Snack Flavouring & Coated Snacks",
            "Ready-to-Fry Mixes & Meal Kits",
            "Sauce Bases & Industrial Gravy",
            "Plant-Based & Instant Foods",
            "Seasoning Blends & Dry Rubs",
        ],
        packaging:
            "Flakes: 14kg strong poly bag in paper bag or 20kg strong poly bag in 5-ply carton. Custom packing available.",
        quality:
            "Food-grade value-added processing. Fat levels 12% or 8%. A Grade, B Grade, Commercial Grade and custom grades. Origin India. Export documentation and certificates of analysis provided.",
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
                  "International B2B sourcing",
                  "Food manufacturing",
                  "HoReCa distribution",
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
            description: "Commercial use cases supported across food manufacturing and trade channels.",
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
                description={metaDesc || `${category.name} – Export-grade from Pavanity Global. ${category.tagline}.`}
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
            <div className="pavanity-products-section pavanity-products-section--applications s-py-100">
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
