// Product Categories and Items for Keshav Chemical

export interface ProductSpecifications {
    size?: string;
    origin?: string;
    color?: string;
    aroma?: string;
    packing?: string;
    qualities?: string;
    standard?: string;
    moq?: string;
    ingredients?: string;
    packingType?: string;
    fatLevel?: string;
    shelfLife?: string;
    mixingRatio?: string;
    coverage?: string;
    application?: string;
    advantages?: string;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    category: string;
    image?: string;
    description?: string;
    specifications?: ProductSpecifications;
}

export interface ProductCategory {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    tagline: string;
    description: string;
    products: Product[];
    specifications?: ProductSpecifications;
}

const DEFAULT_SHELF_LIFE =
    "12 months from the date of manufacturing in unopened condition";

export const productsData: ProductCategory[] = [
    {
        id: 1,
        name: "Tile Adhesives",
        slug: "tile-adhesives",
        icon: "adhesive",
        image: "/images/products/tile-adhesives.png",
        tagline: "Polymer Modified Tile Fixing",
        description:
            "Keshav Chemical tile adhesives are cement-based, polymer-modified systems for reliable bonding of ceramic, vitrified, and natural stone tiles on walls and floors. Formulated for strong adhesion, workability, and consistent site performance.",
        products: [
            {
                id: 101,
                name: "KESHAV KC-1",
                slug: "keshav-kc-1",
                category: "tile-adhesives",
                image: "/images/products/keshav-kc-1.png",
                description:
                    "KESHAV KC-1 is a grey cement based polymer modified tile adhesive. It gives excellent bond on cementitious surfaces like concrete and plaster and forms a waterproof barrier between two surfaces.",
                specifications: {
                    color: "Grey",
                    packing: "20 kg bag",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    mixingRatio: "5 to 6 litres clean water per 20 kg powder",
                    coverage:
                        "Approx. 40–50 sq. ft. per 20 kg bag using 6mm x 6mm notch trowel",
                    application:
                        "Ceramic wall tiles, internal wall application, vitrified tiles on floor",
                    advantages:
                        "Ready to use, high bond strength, flexible, shock and impact resistant, easy to apply",
                },
            },
            {
                id: 102,
                name: "KESHAV KC-2",
                slug: "keshav-kc-2",
                category: "tile-adhesives",
                image: "/images/products/keshav-kc-2.png",
                description:
                    "KESHAV KC-2 is a grey cement based polymer modified tile adhesive designed for floor and wall tile fixing with improved bond strength and workability on cementitious substrates.",
                specifications: {
                    color: "Grey",
                    packing: "20 kg bag",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Ceramic and vitrified tiles on internal floors and walls, cementitious surfaces",
                    advantages:
                        "Polymer modified, good bond strength, easy to spread, suitable for standard tile installations",
                },
            },
            {
                id: 103,
                name: "KESHAV KC-3",
                slug: "keshav-kc-3",
                category: "tile-adhesives",
                image: "/images/products/keshav-kc-3.png",
                description:
                    "KESHAV KC-3 is a high-performance polymer modified tile adhesive for demanding tile installations where strong adhesion and consistent application are required.",
                specifications: {
                    color: "Grey",
                    packing: "20 kg bag",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Vitrified and ceramic tiles, floor and wall applications on cementitious bases",
                    advantages:
                        "High bond strength, polymer modified formulation, good workability for site application",
                },
            },
            {
                id: 104,
                name: "KESHAV KC-4 WHITE",
                slug: "keshav-kc-4-white",
                category: "tile-adhesives",
                image: "/images/products/keshav-kc-4-white.png",
                description:
                    "KESHAV KC-4 WHITE is a white cement based polymer modified tile adhesive for fixing marble, granite, and light-coloured tiles where a clean aesthetic finish is required.",
                specifications: {
                    color: "White",
                    packing: "20 kg bag",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Marble, granite, designer tiles, light-coloured ceramic and vitrified tiles",
                    advantages:
                        "White cement base, polymer modified, suitable for visible and premium tile installations",
                },
            },
            {
                id: 105,
                name: "KESHAV KC-5 / NO LIMIT GRAY",
                slug: "keshav-kc-5-no-limit-gray",
                category: "tile-adhesives",
                image: "/images/products/keshav-kc-5-no-limit-gray.png",
                description:
                    "KESHAV KC-5 / NO LIMIT GRAY is an advanced grey polymer modified tile adhesive for heavy-duty and large-format tile fixing applications.",
                specifications: {
                    color: "Grey",
                    packing: "20 kg bag",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Large-format tiles, vitrified tiles, floor and wall installations on cementitious surfaces",
                    advantages:
                        "High-performance formulation, strong adhesion, designed for demanding tile fixing work",
                },
            },
            {
                id: 106,
                name: "KESHAV KC-6 WHITE / NO LIMIT WHITE",
                slug: "keshav-kc-6-white-no-limit-white",
                category: "tile-adhesives",
                image: "/images/products/keshav-kc-6-white-no-limit-white.png",
                description:
                    "KESHAV KC-6 WHITE / NO LIMIT WHITE is a white polymer modified tile adhesive for premium marble, granite, and designer tile installations.",
                specifications: {
                    color: "White",
                    packing: "20 kg bag",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Marble, granite, designer tiles, light-coloured stone and ceramic installations",
                    advantages:
                        "White polymer modified system, strong bond, suited for high-visibility tile work",
                },
            },
            {
                id: 107,
                name: "KESHAV PU ADHESIVE",
                slug: "keshav-pu-adhesive",
                category: "tile-adhesives",
                image: "/images/products/keshav-pu-adhesive.png",
                description:
                    "KESHAV PU ADHESIVE is a polyurethane-based tile adhesive for elastic bonding where movement accommodation and adhesion on varied substrates are needed.",
                specifications: {
                    packing: "As per pack size",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Tile fixing where PU-based elastic bonding is specified, compatible substrates as per product guidelines",
                    advantages:
                        "Polyurethane based, elastic bonding characteristics, suitable for specialised tile fixing requirements",
                },
            },
        ],
    },
    {
        id: 2,
        name: "Grouts",
        slug: "grouts",
        icon: "grout",
        image: "/images/products/grouts.png",
        tagline: "Joint Filling & Finishing",
        description:
            "Keshav Chemical grouts cover cementitious polymer-modified grouts, epoxy systems, and admixtures for durable, finished tile joints in residential and commercial projects.",
        products: [
            {
                id: 201,
                name: "KESHAV POLYMER GROUT",
                slug: "keshav-polymer-grout",
                category: "grouts",
                image: "/images/products/keshav-polymer-grout.png",
                description:
                    "KESHAV POLYMER GROUT is a cementitious polymer-modified grout for filling tile joints with improved strength, water resistance, and finish.",
                specifications: {
                    packing: "Available in bag packs as per grade",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application: "Grouting of wall and floor tile joints",
                    advantages:
                        "Polymer modified, smooth finish, suitable for ceramic and vitrified tile joints",
                },
            },
            {
                id: 202,
                name: "KESHAV EPOXY GROUT",
                slug: "keshav-epoxy-grout",
                category: "grouts",
                image: "/images/products/keshav-epoxy-grout.png",
                description:
                    "KESHAV EPOXY GROUT is a two-component epoxy grout system for tile joints requiring high stain resistance, durability, and a uniform finish.",
                specifications: {
                    packing: "Two-component kit",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Kitchen, bathroom, commercial floors, areas requiring epoxy joint filling",
                    advantages:
                        "Epoxy based, stain resistant, durable joint finish, suitable for wet and heavy-use areas",
                },
            },
            {
                id: 203,
                name: "PREMIUM EPOXY GROUTS",
                slug: "premium-epoxy-grouts",
                category: "grouts",
                image: "/images/products/premium-epoxy-grouts.png",
                description:
                    "PREMIUM EPOXY GROUTS are high-grade epoxy grout formulations from Keshav Chemical for premium tile installations and long-lasting joint performance.",
                specifications: {
                    packing: "Two-component kit",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Premium residential and commercial tile joints, designer flooring",
                    advantages:
                        "Premium epoxy system, excellent durability, uniform colour and finish",
                },
            },
            {
                id: 204,
                name: "SPARKLE EPOXY GROUTS",
                slug: "sparkle-epoxy-grouts",
                category: "grouts",
                image: "/images/products/sparkle-epoxy-grouts.png",
                description:
                    "SPARKLE EPOXY GROUTS are decorative epoxy grout options with sparkle finish for designer tile and stone installations.",
                specifications: {
                    packing: "Two-component kit",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Decorative tile joints, feature walls, designer flooring",
                    advantages:
                        "Sparkle finish, epoxy durability, enhances aesthetic tile installations",
                },
            },
            {
                id: 205,
                name: "GROUT ADMIXTURE",
                slug: "grout-admixture",
                category: "grouts",
                image: "/images/products/grout-admixture.png",
                description:
                    "GROUT ADMIXTURE is a liquid admixture used with cementitious grout to improve workability, bonding, and performance of tile joint filling.",
                specifications: {
                    packing: "Liquid pack",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application: "Added to cementitious grout mixes as per recommended dosage",
                    advantages:
                        "Improves grout workability and performance, easy to use on site",
                },
            },
        ],
    },
    {
        id: 3,
        name: "Construction Chemicals",
        slug: "construction-chemicals",
        icon: "chemical",
        image: "/images/products/construction-chemicals.png",
        tagline: "Building Protection & Bonding",
        description:
            "Construction chemical solutions from Keshav Chemical support waterproofing, bonding, and repair applications in building and infrastructure projects.",
        products: [
            {
                id: 301,
                name: "KESHAV SBR LATEX",
                slug: "keshav-sbr-latex",
                category: "construction-chemicals",
                image: "/images/products/keshav-sbr-latex.png",
                description:
                    "KESHAV SBR LATEX is a styrene-butadiene rubber latex used as a bonding agent and additive in cementitious mortars, plasters, and waterproofing applications.",
                specifications: {
                    packing: "Liquid container",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Bonding slurry, waterproofing coats, repair mortars, cementitious mixes",
                    advantages:
                        "Improves adhesion and flexibility of cement mixes, suitable for waterproofing and bonding applications",
                },
            },
        ],
    },
    {
        id: 4,
        name: "Tile Care Products",
        slug: "tile-care-products",
        icon: "care",
        image: "/images/products/tile-care-products.png",
        tagline: "Post-Installation Care",
        description:
            "Tile care products from Keshav Chemical help maintain and clean tiled surfaces after installation, supporting a professional project finish.",
        products: [
            {
                id: 401,
                name: "KESHAV TILE CLEANER",
                slug: "keshav-tile-cleaner",
                category: "tile-care-products",
                image: "/images/products/keshav-tile-cleaner.png",
                description:
                    "KESHAV TILE CLEANER is formulated to remove cement residue, grout haze, and general dirt from tile and stone surfaces after installation.",
                specifications: {
                    packing: "Liquid pack",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Post-installation cleaning of ceramic, vitrified, and natural stone tiles",
                    advantages:
                        "Effective on cement and grout residue, supports clean finished tile surfaces",
                },
            },
        ],
    },
    {
        id: 5,
        name: "Block Jointing Mortar",
        slug: "block-jointing-mortar",
        icon: "mortar",
        image: "/images/products/block-jointing-mortar.png",
        tagline: "Masonry & Block Work",
        description:
            "Keshav Chemical block jointing mortar is a pre-mixed solution for laying AAC blocks, concrete blocks, and related masonry work with consistent strength and workability.",
        products: [
            {
                id: 501,
                name: "KESHAV BLOCK FIX",
                slug: "keshav-block-fix",
                category: "block-jointing-mortar",
                image: "/images/products/keshav-block-fix.png",
                description:
                    "KESHAV BLOCK FIX is a ready-to-use block jointing mortar for AAC and concrete block masonry, offering uniform mixing and easy application on site.",
                specifications: {
                    packing: "Bag pack",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Jointing of AAC blocks, concrete blocks, and lightweight block masonry",
                    advantages:
                        "Pre-mixed formulation, good workability, designed for block masonry applications",
                },
            },
        ],
    },
];

export const getAllProducts = (): Product[] => {
    return productsData.flatMap((category) => category.products);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
    const category = productsData.find((cat) => cat.slug === categorySlug);
    return category ? category.products : [];
};

export const getProductBySlug = (productSlug: string): Product | undefined => {
    return getAllProducts().find((product) => product.slug === productSlug);
};

export const getCategoryBySlug = (
    categorySlug: string
): ProductCategory | undefined => {
    return productsData.find((cat) => cat.slug === categorySlug);
};

export const getTotalProductsCount = (): number => {
    return getAllProducts().length;
};

export const getCategoriesCount = (): number => {
    return productsData.length;
};
