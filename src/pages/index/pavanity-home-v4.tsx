import { useEffect } from "react";

import { Link } from "react-router-dom";

import {
    FaBox,
    FaCheckCircle,
    FaFileAlt,
    FaGlobeAmericas,
    FaShieldAlt,
    FaTruck,
} from "react-icons/fa";

import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";
import HeroSection from "../../components/sections/HeroSection";

import {
    businessContinuity,
    businessEnquiries,
    commercialScope,
    globalMarkets,
} from "../../data/pavanity-data";
import { productsData } from "../../data/products-data";
import worldMapSvg from "../../assets/img/svg/world-map-compact.svg";

import Aos from "aos";

type BusinessContinuityItem = {
    id: number;
    title: string;
    description: string;
    icon: string;
};

type CommercialScopeItem = {
    id: number;
    title: string;
    description: string;
    icon: string;
};

type GlobalMarket = {
    id: number;
    region: string;
};

const globalMarketStats = [
    {
        id: 1,
        title: "05 Active Regions",
        description: "Priority international trade coverage",
        icon: <FaGlobeAmericas className="text-xl" />,
    },
    {
        id: 2,
        title: "Buyer-Ready Documentation",
        description: "Aligned for recurring commercial discussions",
        icon: <FaCheckCircle className="text-xl" />,
    },
    {
        id: 3,
        title: "Structured Dispatch Planning",
        description: "Designed for continuity, clarity, and scale",
        icon: <FaFileAlt className="text-xl" />,
    },
] as const;

export default function PavanityHomeV4() {
    useEffect(() => {
        Aos.init();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavbarPavanity />
            <HeroSection />

            <section className="pavanity-home-trust-strip">
                <div className="pavanity-home-trust-strip__shell">
                    <div className="pavanity-home-hero__metrics" data-aos="fade-up" data-aos-delay="100">
                    <div className="pavanity-home-hero__metric">
                        <div className="pavanity-home-hero__metric-icon">
                            <FaShieldAlt className="text-2xl" />
                        </div>
                        <div className="pavanity-home-hero__metric-body">
                            <h5>Export-Ready</h5>
                            <p>International trade standards and shipment readiness</p>
                        </div>
                    </div>

                    <div className="pavanity-home-hero__metric">
                        <div className="pavanity-home-hero__metric-icon">
                            <FaCheckCircle className="text-2xl" />
                        </div>
                        <div className="pavanity-home-hero__metric-body">
                            <h5>Quality & Compliance</h5>
                            <p>Buyer-aligned quality controls and documentation support</p>
                        </div>
                    </div>

                    <div className="pavanity-home-hero__metric">
                        <div className="pavanity-home-hero__metric-icon">
                            <FaGlobeAmericas className="text-2xl" />
                        </div>
                        <div className="pavanity-home-hero__metric-body">
                            <h5>International Trade</h5>
                            <p>Structured sourcing for long-term B2B relationships</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="pavanity-home-section pavanity-home-section--continuity s-py-100 bg-[#f6f5f2] dark:bg-dark-secondary">
                <div className="container-fluid">
                    <div className="max-w-[1720px] mx-auto pavanity-home-section-shell">
                        <div
                            className="pavanity-section-intro pavanity-home-section-intro mb-10 md:mb-14"
                            data-aos="fade-up"
                            data-aos-offset="40"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl">Business Continuity</h2>
                            <p>
                                Structured export supply for long-term B2B partnerships,
                                with predictable schedules, compliance support, and clear
                                commercial alignment.
                            </p>
                        </div>

                        <div
                            className="pavanity-card-grid pavanity-home-feature-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            {businessContinuity.map((item: BusinessContinuityItem, index) => (
                                <div
                                    key={item.id}
                                    className="pavanity-feature-card pavanity-home-feature-card pavanity-home-feature-card--continuity"
                                >
                                    <div className="pavanity-home-feature-card__header">
                                        <div className="pavanity-icon-panel pavanity-home-feature-card__icon">
                                            {index === 0 ? <FaTruck className="text-2xl" /> : null}
                                            {index === 1 ? <FaFileAlt className="text-2xl" /> : null}
                                            {index === 2 ? <FaShieldAlt className="text-2xl" /> : null}
                                        </div>
                                        <span className="pavanity-home-feature-card__index" aria-hidden="true">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div className="pavanity-home-feature-card__body">
                                        <h3 className="pavanity-card-title text-xl md:text-2xl">
                                            {item.title}
                                        </h3>
                                        <p className="pavanity-card-copy mt-4 text-base">
                                            {item.description}
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
            </section>

            <section className="pavanity-home-section pavanity-home-section--products s-py-100">
                <div className="container-fluid">
                    <div className="max-w-[1720px] mx-auto pavanity-home-section-shell">
                        <div
                            className="pavanity-home-heading-row mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-[var(--pavanity-border)] pb-6"
                            data-aos="fade-up"
                        >
                            <div className="max-w-2xl">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--pavanity-ink)] tracking-[-0.03em]">
                                    Our Product Divisions
                                </h2>
                                <p className="mt-4 text-base md:text-lg text-[var(--pavanity-text)] leading-8">
                                    Export supply across core food and ingredient categories,
                                    tailored to global buyers, distributors, and HoReCa partners.
                                </p>
                            </div>
                            <Link to="/products" className="pavanity-card-link inline-flex items-center gap-3">
                                <span className="text-underline-primary">View All Products</span>
                                <span aria-hidden="true">-&gt;</span>
                            </Link>
                        </div>

                        <div
                            className="pavanity-card-grid pavanity-home-product-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                            data-aos="fade-up"
                            data-aos-delay="120"
                        >
                            {productsData.map((category) => (
                                <Link
                                    to={`/products/${category.slug}`}
                                    className="pavanity-product-card pavanity-home-product-card group overflow-hidden"
                                    key={category.id}
                                >
                                    <div className="pavanity-home-product-card__media overflow-hidden rounded-[1.3rem]">
                                        <img
                                            className="h-[18rem] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            src={category.image}
                                            alt={category.name}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="pavanity-home-product-card__content mt-6 flex flex-1 flex-col">
                                        <h3 className="text-xl md:text-2xl">{category.name}</h3>
                                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--pavanity-accent)]">
                                            {category.tagline}
                                        </p>
                                        <p className="mt-4 flex-1 text-base leading-7 text-[var(--pavanity-text)] line-clamp-3">
                                            {category.description}
                                        </p>
                                        <div className="mt-5 inline-flex items-center gap-3 pavanity-card-link">
                                            <span className="text-underline-primary">Explore Products</span>
                                            <span aria-hidden="true">-&gt;</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="pavanity-home-section pavanity-home-section--scope s-py-100 bg-[#f6f5f2] dark:bg-dark-secondary">
                <div className="container-fluid">
                    <div className="max-w-[1720px] mx-auto pavanity-home-section-shell">
                        <div className="pavanity-home-scope-shell pavanity-logo-watermark-surface">
                            <div
                                className="pavanity-home-scope-top grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] xl:items-stretch"
                                data-aos="fade-up"
                                data-aos-offset="40"
                                data-aos-anchor-placement="top-bottom"
                            >
                                <div className="pavanity-home-scope-intro-panel">
                                    <div className="pavanity-icon-panel pavanity-home-scope-intro-panel__icon">
                                        <FaBox className="text-2xl" />
                                    </div>
                                    <p className="pavanity-home-scope-intro-panel__eyebrow">Commercial Scope</p>
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl">Commercial Scope</h2>
                                    <p className="pavanity-home-scope-intro-panel__copy">
                                        Comprehensive export solutions for international food trade,
                                        from sourcing and custom development to shipment readiness and
                                        documentation.
                                    </p>
                                </div>

                                <div className="pavanity-home-scope-summary">
                                    <div className="pavanity-home-scope-summary__header">
                                        <p className="pavanity-home-scope-summary__eyebrow">Scope Matrix</p>
                                        <span className="pavanity-home-scope-summary__badge">04 Pillars</span>
                                    </div>
                                    <div className="pavanity-home-scope-summary__list">
                                        {commercialScope.map((item: CommercialScopeItem, index) => (
                                            <div key={item.id} className="pavanity-home-scope-summary__item">
                                                <span className="pavanity-step-index">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <h3>{item.title}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div
                                className="pavanity-card-grid pavanity-home-feature-grid grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
                                data-aos="fade-up"
                                data-aos-offset="40"
                                data-aos-anchor-placement="top-bottom"
                            >
                                {commercialScope.map((item: CommercialScopeItem, index) => (
                                    <div key={item.id} className="pavanity-feature-card pavanity-home-feature-card pavanity-home-feature-card--scope">
                                        <div className="pavanity-home-feature-card__header">
                                            <div className="pavanity-icon-panel pavanity-home-feature-card__icon">
                                                {index === 0 ? <FaBox className="text-2xl" /> : null}
                                                {index === 1 ? <FaCheckCircle className="text-2xl" /> : null}
                                                {index === 2 ? <FaGlobeAmericas className="text-2xl" /> : null}
                                                {index === 3 ? <FaShieldAlt className="text-2xl" /> : null}
                                            </div>
                                            <span className="pavanity-home-feature-card__index" aria-hidden="true">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <div className="pavanity-home-feature-card__body">
                                            <h3 className="pavanity-card-title text-xl md:text-2xl">
                                                {item.title}
                                            </h3>
                                            <p className="pavanity-card-copy mt-4 text-base">
                                                {item.description}
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
                </div>
            </section>

            <section
                id="global-markets"
                className="pavanity-home-section pavanity-home-section--markets s-py-100 bg-[#fbfaf6] dark:bg-dark-secondary"
            >
                <div className="container-fluid">
                    <div className="max-w-[1720px] mx-auto pavanity-home-section-shell">
                        <div className="pavanity-section-intro pavanity-home-section-intro mb-10 md:mb-14" data-aos="fade-up">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl">Global Markets</h2>
                            <p>
                                Serving food businesses across key global regions with a clear
                                export structure and long-term supply continuity.
                            </p>
                        </div>

                        <div
                            className="pavanity-home-market-shell"
                            data-aos="fade-up"
                            data-aos-offset="40"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <div className="pavanity-home-market-top">
                                <div className="pavanity-home-market-board__header">
                                    <span className="pavanity-home-market-board__eyebrow">Export Network</span>
                                    <h3 className="pavanity-home-market-board__title">
                                        Structured reach across key international trade regions
                                    </h3>
                                    <p className="pavanity-home-market-board__copy">
                                        Buyer-focused supply planning, documentation coordination,
                                        and recurring shipment support designed for long-term
                                        international business.
                                    </p>
                                </div>

                                <div className="pavanity-home-market-board__stats">
                                    {globalMarketStats.map((item) => (
                                        <div
                                            key={item.id}
                                            className="pavanity-home-market-board__stat"
                                        >
                                            <div className="pavanity-home-market-board__stat-icon">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pavanity-home-market-layout">
                                <div className="pavanity-home-market-board">
                                    <div className="pavanity-home-market-board__mapstage">
                                        <div className="pavanity-home-market-board__map-shell">
                                            <div className="pavanity-home-market-board__map-copy">
                                                <span className="pavanity-home-market-board__map-copy-eyebrow">
                                                    Coverage Map
                                                </span>
                                                <h4>Active export regions</h4>
                                                <p>
                                                    Simple visual coverage for the key markets we
                                                    serve through structured B2B supply planning.
                                                </p>
                                            </div>

                                            <img
                                                src={worldMapSvg}
                                                alt="World map showing Pavanity Global export coverage"
                                                className="pavanity-home-market-board__map-image"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pavanity-home-market-panel">
                                    <div className="pavanity-home-market-panel__header">
                                        <p className="pavanity-home-market-panel__eyebrow">Active Regions</p>
                                        <h4>Countries and regions in our current export network</h4>
                                        <span className="pavanity-home-market-panel__badge">
                                            {String(globalMarkets.length).padStart(2, "0")} Regions
                                        </span>
                                    </div>

                                    <div className="pavanity-home-market-panel__list">
                                        {globalMarkets.map((market: GlobalMarket, index) => (
                                            <div
                                                key={market.id}
                                                className="pavanity-home-market-panel__item"
                                            >
                                                <span className="pavanity-step-index">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <div className="pavanity-home-market-panel__copy">
                                                    <span className="pavanity-home-market-panel__item-eyebrow">
                                                        Export Region
                                                    </span>
                                                    <h5>{market.region}</h5>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pavanity-home-section pavanity-home-section--cta s-py-100">
                <div className="container-fluid">
                    <div className="max-w-[1720px] mx-auto pavanity-home-section-shell">
                        <div className="pavanity-cta-panel pavanity-home-cta-panel text-center" data-aos="fade-up">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
                                {businessEnquiries.heading}
                            </h2>

                            <div className="mt-8 md:mt-10">
                                <a
                                    href={`mailto:${businessEnquiries.email}`}
                                    className="text-2xl font-semibold text-white md:text-4xl"
                                >
                                    {businessEnquiries.email}
                                </a>
                            </div>

                            <p className="mt-5 text-lg md:text-xl">{businessEnquiries.response}</p>

                            <div className="mt-8 flex justify-center">
                                <Link
                                    to="/contact"
                                    className="pavanity-products-cta-panel__button inline-flex bg-primary text-white px-8 py-4 text-base md:text-lg font-medium"
                                >
                                    {businessEnquiries.ctaText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterPavanity />
            <ScrollToTop />
        </>
    );
}
