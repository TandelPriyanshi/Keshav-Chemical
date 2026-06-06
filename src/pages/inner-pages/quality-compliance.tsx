import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import bg from '../../assets/img/quality.jpg'

// Icons 
import { FaShieldAlt, FaClipboardCheck, FaSeedling, FaBoxOpen, FaTags, FaShippingFast, FaListAlt } from 'react-icons/fa'

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

const qualityProcesses = [
    {
        title: "Sourcing Verification",
        description:
            "Chemical materials are sourced and manufactured under strict quality checks, with technical safety parameters reviewed prior to dispatch coordination.",
        icon: <FaSeedling className="text-2xl" />,
    },
    {
        title: "Specification Alignment",
        description:
            "Product specifications are aligned with buyer requirements and intended applications before export preparation.",
        icon: <FaClipboardCheck className="text-2xl" />,
    },
    {
        title: "Packaging & Labeling Review",
        description:
            "Export packaging and labeling are coordinated to align with destination market regulations and buyer specifications.",
        icon: <FaTags className="text-2xl" />,
    },
    {
        title: "Pre-Shipment Review",
        description:
            "Export documentation and shipment details are reviewed prior to dispatch to support international trade requirements.",
        icon: <FaShippingFast className="text-2xl" />,
    },
    {
        title: "Traceability Support",
        description:
            "Batch-level traceability is supported through coordinated records from sourcing to shipment for reference and compliance purposes.",
        icon: <FaListAlt className="text-2xl" />,
    },
    {
        title: "Export Documentation",
        description:
            "Export certificates, phytosanitary certificates, and compliance documentation provided as per destination requirements.",
        icon: <FaBoxOpen className="text-2xl" />,
    },
] as const;

const containerCapacityTables = [
    {
        index: "01",
        title: "Tile Adhesives (Powder Bags)",
        eyebrow: "Container Schedule",
        variantCount: "5 Variants",
        summary: [
            { label: "20' FCL", value: "Up to 15 MT" },
            { label: "40' FCL", value: "Up to 25 MT" },
            { label: "Packing", value: "20 KG / 40 KG" },
        ],
        columns: ["Sr No.", "Product", "20' FCL", "40' FCL", "Packing"],
        rows: [
            ["1", "KESHAV KC-1 Gray Adhesive", "15 MT", "25 MT", "20 KG bag packing (approx 750 / 1250 bags)"],
            ["2", "KESHAV KC-2 Gray Adhesive", "15 MT", "25 MT", "20 KG bag packing (approx 750 / 1250 bags)"],
            ["3", "KESHAV KC-3 High Bond", "15 MT", "25 MT", "20 KG bag packing (approx 750 / 1250 bags)"],
            ["4", "KESHAV KC-4 White Adhesive", "15 MT", "25 MT", "20 KG bag packing (approx 750 / 1250 bags)"],
            ["5", "KESHAV BLOCK FIX Mortar", "15 MT", "25 MT", "20 KG / 40 KG bag packing options"],
        ],
    },
    {
        index: "02",
        title: "Liquid Admixtures & Care Products",
        eyebrow: "Container Schedule",
        variantCount: "3 Variants",
        summary: [
            { label: "20' FCL", value: "12 MT to 15 MT" },
            { label: "40' FCL", value: "20 MT to 24 MT" },
            { label: "Packing", value: "1L / 5L / 20L Drums" },
        ],
        columns: ["Product", "20' FCL", "40' FCL", "Packing"],
        rows: [
            ["KESHAV SBR LATEX Bonding Agent", "12 MT", "22 MT", "1L / 5L / 20L plastic containers & drums"],
            ["KESHAV TILE CLEANER Acid Base", "12 MT", "22 MT", "1L / 5L / 20L plastic containers"],
            ["KESHAV GROUT ADMIXTURE Liquid", "12 MT", "22 MT", "1L / 5L plastic bottles"],
        ],
    },
] as const;

const containerCapacityHighlights = [
    {
        title: "20' FCL Range",
        value: "Up to 15 MT",
        description: "Standard loading support for adhesive and grout shipments.",
    },
    {
        title: "40' FCL Range",
        value: "Up to 25 MT",
        description: "Higher-volume dispatch capacity for recurring bulk programs.",
    },
    {
        title: "Packing Format",
        value: "20 KG to 40 KG / drums",
        description: "Standard packing formats aligned with logistics efficiency.",
    },
] as const;

const stuffingCapacityRows = [
    {
        size: "20 ft Container",
        withoutPallet: "9 MT",
        withPallet: "5 MT",
    },
    {
        size: "40 ft Container",
        withoutPallet: "20 MT",
        withPallet: "10 MT",
    },
] as const;

const stuffingCapacityHighlights = [
    {
        title: "Without Pallet",
        value: "Up to 20 MT",
        description: "Higher-volume stuffing format for bulk adhesive powder dispatch.",
    },
    {
        title: "With Pallets",
        value: "Up to 10 MT",
        description: "Organized palletized loading for easier handling and segregation.",
    },
    {
        title: "Container Formats",
        value: "20 ft / 40 ft",
        description: "Standard loading schedules for two common container sizes.",
    },
] as const;

export default function QualityCompliance() {

    useEffect(()=>{
        Aos.init()
        window.scrollTo(0,0)
    },[])

  return (
    <>
        {/* Navbar */}
        <NavbarPavanity/>

        {/* ============================================ */}
        {/* BREADCRUMB SECTION */}
        {/* ============================================ */}
        <div className="pavanity-page-hero bg-overlay" style={{backgroundImage:`url(${bg})`}}>
            <div className="pavanity-page-hero__content">
                <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Quality & Compliance</h1>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Quality & Compliance</li>
                </ul>
            </div>
        </div>

        {/* ============================================ */}
        {/* QUALITY OVERVIEW SECTION */}
        {/* ============================================ */}
        <div className="pavanity-page-section">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="pavanity-split-panel max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
                    {/* Image Column */}
                    <div className="pavanity-split-panel__media lg:pr-10 2xl:pr-0 relative">
                        <div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="pavanity-logo-watermark-surface flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px]">
                        <div className="lg:max-w-[600px]">
                            <div className="pavanity-icon-panel">
                                <FaShieldAlt className="size-16 text-white" />
                            </div>
                            <h2 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl text-stone-900">
                                Quality & Compliance Approach
                            </h2>
                            <p className="mt-3 text-base sm:text-lg">
                                Quality parameters are aligned with buyer specifications and destination market requirements. Export documentation and handling are coordinated to support international trade compliance.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                Quality parameters are aligned with buyer specifications and destination market requirements throughout the sourcing and export process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* QUALITY CONTROL PROCESSES - NEW STRUCTURE */}
        {/* ============================================ */}
        <div className="s-py-100 bg-[#F8F8F9] dark:bg-dark-secondary">
            <div className="container-fluid">
                <div className="pavanity-section-intro mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
                    <div className="pavanity-icon-panel mx-auto">
                        <FaClipboardCheck className="size-16 text-white" />
                    </div>
                    <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                        Quality Control Processes
                    </h3>
                    <p className="mt-3">
                        Quality parameters aligned with buyer specifications and market requirements
                    </p>
                </div>

                <div
                    className="pavanity-card-grid pavanity-home-feature-grid max-w-[1720px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    {qualityProcesses.map((process, index) => (
                        <div
                            key={process.title}
                            className="pavanity-feature-card pavanity-home-feature-card pavanity-home-feature-card--continuity"
                        >
                            <div className="pavanity-home-feature-card__header">
                                <div className="pavanity-icon-panel pavanity-home-feature-card__icon">
                                    {process.icon}
                                </div>
                                <span className="pavanity-home-feature-card__index" aria-hidden="true">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <div className="pavanity-home-feature-card__body">
                                <h5 className="pavanity-card-title font-semibold text-xl md:text-2xl">
                                    {process.title}
                                </h5>
                                <p className="pavanity-card-copy mt-4 text-base">
                                    {process.description}
                                </p>
                            </div>
                            <div className="pavanity-home-feature-card__footer" aria-hidden="true">
                                <span className="pavanity-home-feature-card__footer-line" />
                                <span className="pavanity-home-feature-card__footer-dot" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* CONTAINER LOAD CAPACITY */}
        {/* ============================================ */}
        <div className="s-py-100">
            <div className="container-fluid">
                <div className="pavanity-capacity-shell pavanity-logo-watermark-surface max-w-[1720px] mx-auto">
                    <div
                        className="pavanity-capacity-top grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] xl:items-stretch"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="pavanity-capacity-intro-panel">
                            <div className="pavanity-icon-panel pavanity-capacity-intro-panel__icon">
                                <FaShippingFast className="text-2xl" />
                            </div>
                            <p className="pavanity-capacity-intro-panel__eyebrow">Container Load Capacity</p>
                            <h3 className="font-medium leading-none text-2xl md:text-3xl">
                                Container Load Capacity
                            </h3>
                            <p className="pavanity-capacity-intro-panel__copy">
                                Standard FCL capacity for construction chemicals and adhesives,
                                structured to support dispatch planning, bulk shipment coordination,
                                and consistent delivery readiness.
                            </p>
                        </div>

                        <div className="pavanity-capacity-summary">
                            <div className="pavanity-capacity-summary__header">
                                <p className="pavanity-capacity-summary__eyebrow">Load Snapshot</p>
                                <span className="pavanity-capacity-summary__badge">02 Tables</span>
                            </div>
                            <div className="pavanity-capacity-summary__grid">
                                {containerCapacityHighlights.map((item, index) => (
                                    <div key={item.title} className="pavanity-capacity-summary__item">
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

                    <div className="space-y-8" data-aos="fade-up" data-aos-delay="300">
                        {containerCapacityTables.map((table) => (
                            <div key={table.title} className="pavanity-table-card pavanity-capacity-table">
                                <div className="pavanity-capacity-table__header">
                                    <div className="pavanity-capacity-table__heading">
                                        <span className="pavanity-capacity-table__index" aria-hidden="true">
                                            {table.index}
                                        </span>
                                        <div>
                                            <p className="pavanity-capacity-table__eyebrow">{table.eyebrow}</p>
                                            <h4 className="text-white text-xl md:text-2xl font-semibold">{table.title}</h4>
                                        </div>
                                    </div>
                                    <span className="pavanity-capacity-table__badge">{table.variantCount}</span>
                                </div>
                                <div className="pavanity-capacity-table__summary">
                                    {table.summary.map((item) => (
                                        <div key={item.label} className="pavanity-capacity-table__summary-item">
                                            <span>{item.label}</span>
                                            <strong>{item.value}</strong>
                                        </div>
                                    ))}
                                </div>
                                <div className="pavanity-capacity-table__scroll overflow-x-auto">
                                    <table className="pavanity-capacity-table__table w-full">
                                        <thead>
                                            <tr>
                                                {table.columns.map((column) => (
                                                    <th key={column} className="text-left font-semibold text-base md:text-lg">
                                                        {column}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {table.rows.map((row) => (
                                                <tr key={row.join("-")}>
                                                    {row.map((cell, index) => {
                                                        const isMetricColumn = index === row.length - 3 || index === row.length - 2;
                                                        const isPackingColumn = index === row.length - 1;

                                                        return (
                                                            <td
                                                                key={`${table.title}-${cell}`}
                                                                className={`text-base ${isPackingColumn ? "pavanity-capacity-table__packing-cell" : ""}`}
                                                            >
                                                                {isMetricColumn ? (
                                                                    <span className="pavanity-capacity-table__metric">{cell}</span>
                                                                ) : isPackingColumn ? (
                                                                    <span className="pavanity-capacity-table__packing">{cell}</span>
                                                                ) : (
                                                                    cell
                                                                )}
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* STUFFING CAPACITY - CONTAINER LOADING */}
        {/* ============================================ */}
        <div className="s-py-100 bg-[#F8F8F9] dark:bg-dark-secondary">
            <div className="container-fluid">
                <div
                    className="max-w-[1720px] mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="pavanity-stuffing-shell pavanity-logo-watermark-surface">
                        <div className="pavanity-stuffing-top grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(22rem,0.92fr)] xl:items-stretch">
                            <div className="pavanity-stuffing-intro-panel">
                                <div className="pavanity-icon-panel pavanity-stuffing-intro-panel__icon">
                                    <FaBoxOpen className="text-2xl" />
                                </div>
                                <p className="pavanity-stuffing-intro-panel__eyebrow">Stuffing Capacity</p>
                                <h3 className="font-medium leading-none text-2xl md:text-3xl">
                                    Stuffing Capacity – Container Loading
                                </h3>
                                <p className="pavanity-stuffing-intro-panel__copy">
                                    Maximum loading capacity for powder and liquid shipments, structured
                                for clear dispatch planning across palletized and non-palletized formats.
                                </p>
                            </div>

                            <div className="pavanity-stuffing-summary">
                                <div className="pavanity-stuffing-summary__header">
                                    <p className="pavanity-stuffing-summary__eyebrow">Capacity Snapshot</p>
                                    <span className="pavanity-stuffing-summary__badge">02 Container Sizes</span>
                                </div>
                                <div className="pavanity-stuffing-summary__grid">
                                    {stuffingCapacityHighlights.map((item, index) => (
                                        <div key={item.title} className="pavanity-stuffing-summary__item">
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

                        <div className="pavanity-stuffing-table" data-aos="fade-up" data-aos-delay="300">
                            <div className="pavanity-stuffing-table__header">
                                <div className="pavanity-stuffing-table__heading">
                                    <span className="pavanity-stuffing-table__index" aria-hidden="true">01</span>
                                    <div>
                                        <p className="pavanity-stuffing-table__eyebrow">Container Loading Matrix</p>
                                        <h4 className="text-white text-xl md:text-2xl font-semibold">
                                            Powder & Liquid Stuffing Schedule
                                        </h4>
                                    </div>
                                </div>
                                <span className="pavanity-stuffing-table__badge">02 Rows</span>
                            </div>
                            <div className="pavanity-stuffing-table__scroll overflow-x-auto">
                                <table className="pavanity-stuffing-table__table w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold text-base md:text-lg">Container Size</th>
                                            <th className="text-center font-semibold text-base md:text-lg">Maximum Loading Without Pallet</th>
                                            <th className="text-center font-semibold text-base md:text-lg">Maximum Loading With Pallets</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stuffingCapacityRows.map((row) => (
                                            <tr key={row.size}>
                                                <td className="text-base font-medium">{row.size}</td>
                                                <td className="text-base text-center">
                                                    <span className="pavanity-stuffing-table__metric">{row.withoutPallet}</span>
                                                </td>
                                                <td className="text-base text-center">
                                                    <span className="pavanity-stuffing-table__metric pavanity-stuffing-table__metric--secondary">
                                                        {row.withPallet}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* CONTACT CTA */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-3xl mx-auto text-center p-8 md:p-12 bg-primary rounded-[10px]" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-white text-2xl md:text-3xl font-semibold">
                        Need Quality Documentation?
                    </h3>
                    <p className="text-white text-base md:text-lg mt-4">
                        Request product specifications, certificates, or compliance documentation for your destination market.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block mt-6 bg-white text-primary px-8 py-4 text-base md:text-lg font-semibold rounded-[5px] hover:bg-opacity-90 duration-300"
                    >
                        Contact Quality Team
                    </Link>
                </div>
            </div>
        </div>

        {/* Footer */}
        <FooterPavanity/>

        {/* Scroll to Top */}
        <ScrollToTop/>
    </>
  )
}
