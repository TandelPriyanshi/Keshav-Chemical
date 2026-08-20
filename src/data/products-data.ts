// Product Categories and Items for Keshav Chemical
import cement1 from "../assets/image/1.png";
import cement2 from "../assets/image/2.png";
import cement3 from "../assets/image/3.png";
import cement4 from "../assets/image/4.png";
import cement5 from "../assets/image/5.png";
import cement6 from "../assets/image/6.png";

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
                image: cement1,
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
                image: cement2,
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
                image: cement3,
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
                image: cement4,
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
                image: cement5,
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
                image: cement6,
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
                image: cement1,
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
        name: "Tile Joint Fillers",
        slug: "tile-joint-fillers",
        icon: "grout",
        image: "/images/products/tile-joint-fillers.png",
        tagline: "Joint Filling & Finishing",
        description:
            "Keshav Chemical Tile Joint Fillers for durable, finished tile joints in residential and commercial projects.",
        products: [
            {
                id: 201,
                name: "TILE JOINT FILLERS",
                slug: "tile-joint-fillers",
                category: "tile-joint-fillers",
                image: "/images/products/tile-joint-fillers.png",
                description:
                    "TILE JOINT FILLERS from Keshav Chemical for filling and finishing tile joints on wall and floor installations.",
                specifications: {
                    packing: "As per pack size",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application: "Filling of wall and floor tile joints",
                    advantages: "Smooth finish, suitable for ceramic and vitrified tile joints",
                },
            },
        ],
    },
    {
        id: 3,
        name: "Tile and Stone Cleaner",
        slug: "tile-and-stone-cleaner",
        icon: "care",
        image: "/images/products/tile-and-stone-cleaner.png",
        tagline: "Post-Installation Care",
        description:
            "Tile and Stone Cleaner from Keshav Chemical helps maintain and clean tiled surfaces after installation, supporting a professional project finish.",
        products: [
            {
                id: 301,
                name: "TILE AND STONE CLEANER",
                slug: "tile-and-stone-cleaner",
                category: "tile-and-stone-cleaner",
                image: "/images/products/tile-and-stone-cleaner.png",
                description:
                    "TILE AND STONE CLEANER is formulated to remove cement residue, grout haze, and general dirt from tile and stone surfaces after installation.",
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
        id: 4,
        name: "Epoxy",
        slug: "epoxy",
        icon: "epoxy",
        image: "/images/products/epoxy.png",
        tagline: "Premium Epoxy Grouting Systems",
        description:
            "Keshav Chemical Epoxy for premium, stain-resistant, and long-lasting tile joint applications.",
        products: [
            {
                id: 401,
                name: "EPOXY",
                slug: "epoxy",
                category: "epoxy",
                image: "/images/products/epoxy.png",
                description:
                    "EPOXY is a two-component system from Keshav Chemical for tile joints requiring high stain resistance, durability, and a uniform finish.",
                specifications: {
                    packing: "Two-component kit",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Kitchen, bathroom, commercial floors, areas requiring epoxy joint filling",
                    advantages:
                        "Epoxy based, stain resistant, durable joint finish, suitable for wet and heavy-use areas",
                },
            },
        ],
    },
    {
        id: 5,
        name: "Application Tools",
        slug: "application-tools",
        icon: "tools",
        image: "/images/products/application-tools.png",
        tagline: "Tile Fixing & Finishing Accessories",
        description:
            "Keshav Chemical application tools support accurate, professional tile installation, including spacers, leveling systems, and finishing accessories.",
        products: [
            {
                id: 501,
                name: "TILE SPACERS",
                slug: "tile-spacers",
                category: "application-tools",
                image: "/images/products/tile-spacers.png",
                description:
                    "Tile spacers used to maintain consistent joint gaps between tiles during installation, available in multiple sizes.",
                specifications: {
                    size: "2mm, 3mm, 4mm, 5mm, 6mm, 8mm, 10mm, 12mm",
                    packing: "As per pack size",
                    application: "Maintaining uniform tile joint spacing during installation",
                    advantages:
                        "Available in multiple sizes, ensures consistent and professional joint lines",
                },
            },
            {
                id: 502,
                name: "TILE LEVELING CLIPS",
                slug: "tile-leveling-clips",
                category: "application-tools",
                image: "/images/products/tile-leveling-clips.png",
                description:
                    "Tile leveling clips used with wedges to keep adjoining tiles flush and level during installation, preventing lippage.",
                specifications: {
                    size: "3mm, 4mm",
                    packing: "As per pack size",
                    application: "Tile leveling system for floor and wall tile installations",
                    advantages:
                        "Prevents tile lippage, ensures a flat, even tiled surface",
                },
            },
            {
                id: 503,
                name: "LEVELING WEDGE (YELLOW)",
                slug: "leveling-wedge-yellow",
                category: "application-tools",
                image: "/images/products/leveling-wedge-yellow.png",
                description:
                    "Yellow leveling wedges used with tile leveling clips to apply even pressure and keep tiles level during setting.",
                specifications: {
                    color: "Yellow",
                    packing: "As per pack size",
                    application: "Used with tile leveling clips in the tile leveling system",
                    advantages:
                        "Reusable, applies consistent pressure for a level tile surface",
                },
            },
            {
                id: 504,
                name: "JACK (RED)",
                slug: "jack-red",
                category: "application-tools",
                image: "/images/products/jack-red.png",
                description:
                    "Red jack tool used to tighten leveling wedges against tile leveling clips for precise tile alignment.",
                specifications: {
                    color: "Red",
                    packing: "As per pack size",
                    application: "Tightening leveling wedges in the tile leveling system",
                    advantages:
                        "Durable, provides firm grip for consistent wedge tightening",
                },
            },
            {
                id: 505,
                name: "LEVELING PLIERS",
                slug: "leveling-pliers",
                category: "application-tools",
                image: "/images/products/leveling-pliers.png",
                description:
                    "Leveling pliers used to install and tighten the tile leveling clip and wedge system efficiently on site.",
                specifications: {
                    packing: "As per pack size",
                    application: "Installation and tightening of tile leveling clips and wedges",
                    advantages:
                        "Speeds up the tile leveling process, ergonomic and easy to use",
                },
            },
            {
                id: 506,
                name: "TOWEL (8MM)",
                slug: "towel-8mm",
                category: "application-tools",
                image: "/images/products/towel-8mm.png",
                description:
                    "8mm notch towel/trowel used for spreading tile adhesive evenly during tile installation.",
                specifications: {
                    size: "8mm",
                    packing: "As per pack size",
                    application: "Spreading tile adhesive on floors and walls before tile fixing",
                    advantages:
                        "Ensures even adhesive spread and consistent coverage",
                },
            },
            {
                id: 507,
                name: "ALUMINIUM DOUBLE SUCTION CUP",
                slug: "aluminium-double-suction-cup",
                category: "application-tools",
                image: "/images/products/aluminium-double-suction-cup.png",
                description:
                    "Aluminium double suction cup used for lifting and positioning large-format tiles and slabs safely during installation.",
                specifications: {
                    packing: "As per pack size",
                    application: "Lifting and handling large-format tiles, slabs, and stone panels",
                    advantages:
                        "Strong grip, aluminium build, supports safe handling of heavy tiles",
                },
            },
        ],
    },
    {
        id: 6,
        name: "Glitter",
        slug: "glitter",
        icon: "glitter",
        image: "/images/products/glitter.png",
        tagline: "Decorative Glitter Finishes",
        description:
            "Keshav Chemical Glitter range offers decorative finishes for epoxy and grout applications in Copper, Silver, Gold, and Rainbow.",
        products: [
            {
                id: 601,
                name: "GLITTER - COPPER",
                slug: "glitter-copper",
                category: "glitter",
                image: "/images/products/glitter-copper.png",
                description:
                    "GLITTER - COPPER is a decorative copper-toned glitter finish for use with epoxy and grout applications.",
                specifications: {
                    color: "Copper",
                    packing: "As per pack size",
                    application: "Decorative finish for epoxy and grout tile joint applications",
                    advantages: "Copper glitter finish, enhances aesthetic tile installations",
                },
            },
            {
                id: 602,
                name: "GLITTER - SILVER",
                slug: "glitter-silver",
                category: "glitter",
                image: "/images/products/glitter-silver.png",
                description:
                    "GLITTER - SILVER is a decorative silver-toned glitter finish for use with epoxy and grout applications.",
                specifications: {
                    color: "Silver",
                    packing: "As per pack size",
                    application: "Decorative finish for epoxy and grout tile joint applications",
                    advantages: "Silver glitter finish, enhances aesthetic tile installations",
                },
            },
            {
                id: 603,
                name: "GLITTER - GOLD",
                slug: "glitter-gold",
                category: "glitter",
                image: "/images/products/glitter-gold.png",
                description:
                    "GLITTER - GOLD is a decorative gold-toned glitter finish for use with epoxy and grout applications.",
                specifications: {
                    color: "Gold",
                    packing: "As per pack size",
                    application: "Decorative finish for epoxy and grout tile joint applications",
                    advantages: "Gold glitter finish, enhances aesthetic tile installations",
                },
            },
            {
                id: 604,
                name: "GLITTER - RAINBOW",
                slug: "glitter-rainbow",
                category: "glitter",
                image: "/images/products/glitter-rainbow.png",
                description:
                    "GLITTER - RAINBOW is a decorative multi-colour glitter finish for use with epoxy and grout applications.",
                specifications: {
                    color: "Rainbow",
                    packing: "As per pack size",
                    application: "Decorative finish for epoxy and grout tile joint applications",
                    advantages: "Rainbow glitter finish, enhances aesthetic tile installations",
                },
            },
        ],
    },
    {
        id: 7,
        name: "Construction Chemicals",
        slug: "construction-chemicals",
        icon: "chemical",
        image: "/images/products/construction-chemicals.png",
        tagline: "Building Protection & Bonding",
        description:
            "Construction chemical solutions from Keshav Chemical support waterproofing, bonding, and repair applications in building and infrastructure projects.",
        products: [
            {
                id: 701,
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
            {
                id: 702,
                name: "KESHAV BLOCK FIX",
                slug: "keshav-block-fix",
                category: "construction-chemicals",
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
            {
                id: 703,
                name: "KESHAV READY MIX",
                slug: "keshav-ready-mix",
                category: "construction-chemicals",
                image: "/images/products/keshav-ready-mix.png",
                description:
                    "KESHAV READY MIX is a pre-mixed construction chemical formulation for plastering and repair applications requiring consistent, ready-to-use material on site.",
                specifications: {
                    packing: "Bag pack",
                    shelfLife: DEFAULT_SHELF_LIFE,
                    application:
                        "Plastering, patch repair, and general construction applications requiring a ready mix",
                    advantages:
                        "Pre-mixed and ready to use, consistent quality, saves on-site mixing time",
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
