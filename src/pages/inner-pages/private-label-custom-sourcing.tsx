import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import bg from '../../assets/img/private_label.jpg'

// Icons
import { FaTag, FaCog, FaFileContract, FaShippingFast } from 'react-icons/fa'

// Components 
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

const privateLabelCapabilities = [
    {
        title: "Private Label Supply",
        description:
            "Export supply under buyer branding and packaging specifications. Products delivered with buyer-defined labels, formulations, and compliance documentation.",
        icon: <FaTag className="text-2xl" />,
    },
    {
        title: "Custom Formulation",
        description:
            "Product development aligned with buyer specifications, ingredient preferences, and market requirements. Support for custom blends, flavors, and functional formulations.",
        icon: <FaCog className="text-2xl" />,
    },
    {
        title: "Contract Sourcing",
        description:
            "Long-term supply agreements structured for recurring volumes and predictable delivery schedules. Commercial terms defined for bulk orders and multi-year contracts.",
        icon: <FaFileContract className="text-2xl" />,
    },
    {
        title: "Bulk Export Supply",
        description:
            "Bulk food ingredients and agricultural products for international buyers. Export documentation, quality certificates, and customs clearance support included.",
        icon: <FaShippingFast className="text-2xl" />,
    },
] as const;

const privateLabelProcessSteps = [
    {
        title: "Initial Enquiry & Requirements",
        description:
            "Buyers submit product requirements, specifications, volume needs, and destination market details via business enquiry form.",
    },
    {
        title: "Quotation & Feasibility Review",
        description:
            "Commercial quotation provided with product specifications, compliance requirements, delivery timelines, and export terms.",
    },
    {
        title: "Sample Development & Approval",
        description:
            "Product samples developed and shipped for buyer evaluation. Adjustments made based on buyer feedback before commercial production.",
    },
    {
        title: "Contract & Production",
        description:
            "Supply agreement finalized with commercial terms, payment structure, and delivery schedules. Production initiated under defined quality protocols.",
    },
    {
        title: "Export & Documentation",
        description:
            "Products packaged with buyer branding, export documentation prepared, and shipment arranged with customs clearance support.",
    },
] as const;

export default function PrivateLabelCustomSourcing() {

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
                <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Private Label & Custom Sourcing</h1>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Private Label & Custom Sourcing</li>
                </ul>
            </div>
        </div>

        {/* ============================================ */}
        {/* MAIN CONTENT SECTION */}
        {/* ============================================ */}
        <div className="pavanity-page-section">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[1720px] mx-auto">

                    {/* Content Section */}
                    <div className="pavanity-private-intro-shell pavanity-logo-watermark-surface mb-12 md:mb-16">
                        <div className="pavanity-private-intro-top grid gap-6 xl:grid-cols-[minmax(0,1.12fr)_minmax(22rem,0.88fr)] xl:items-stretch">
                            <div className="pavanity-private-intro-panel">
                                <div className="pavanity-icon-panel pavanity-private-intro-panel__icon">
                                    <FaTag className="text-2xl" />
                                </div>
                                <p className="pavanity-private-intro-panel__eyebrow">Private Label Supply</p>
                                <h2 className="font-medium leading-none text-2xl md:text-3xl lg:text-4xl">
                                    Private Label Food Supply & Custom Ingredient Sourcing
                                </h2>
                                <p className="pavanity-private-intro-panel__copy mt-4 text-base md:text-lg">
                                    Pavanity Global supports private label development and custom ingredient sourcing for international B2B buyers and food businesses. Our export operations are structured to meet buyer specifications, quality standards, and destination market requirements.
                                </p>
                            </div>

                            <div className="pavanity-private-intro-summary">
                                <div className="pavanity-private-intro-summary__header">
                                    <p className="pavanity-private-intro-summary__eyebrow">Capability Matrix</p>
                                    <span className="pavanity-private-intro-summary__badge">04 Modules</span>
                                </div>
                                <div className="pavanity-private-intro-summary__list">
                                    {privateLabelCapabilities.map((capability, index) => (
                                        <div key={capability.title} className="pavanity-private-intro-summary__item">
                                            <span className="pavanity-step-index">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <div>
                                                <h3>{capability.title}</h3>
                                                <p>{capability.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* SERVICES GRID SECTION */}
        {/* ============================================ */}
        <div className="s-pb-100 bg-[#F8F8F9] dark:bg-dark-secondary">
            <div className="container-fluid">
                <div className="pavanity-private-capabilities-shell pavanity-logo-watermark-surface max-w-[1720px] mx-auto">

                    {/* Section Header */}
                    <div className="pavanity-section-intro mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="font-medium leading-none text-2xl md:text-3xl">
                            Our Private Label & Sourcing Capabilities
                        </h3>
                        <p className="mt-3 text-base md:text-lg">
                            Export-focused supply structured for buyer branding, custom formulations, and bulk requirements.
                        </p>
                    </div>

                    {/* Services Grid - 4 Cards */}
                    <div
                        className="pavanity-card-grid pavanity-home-feature-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {privateLabelCapabilities.map((capability, index) => (
                            <div
                                key={capability.title}
                                className="pavanity-feature-card pavanity-home-feature-card pavanity-home-feature-card--continuity"
                            >
                                <div className="pavanity-home-feature-card__header">
                                    <div className="pavanity-icon-panel pavanity-home-feature-card__icon">
                                        {capability.icon}
                                    </div>
                                    <span className="pavanity-home-feature-card__index" aria-hidden="true">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <div className="pavanity-home-feature-card__body">
                                    <h4 className="pavanity-card-title text-xl md:text-2xl font-semibold">
                                        {capability.title}
                                    </h4>
                                    <p className="pavanity-card-copy mt-4 text-sm md:text-base">
                                        {capability.description}
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

        {/* ============================================ */}
        {/* PROCESS SECTION */}
        {/* ============================================ */}
        <div className="s-py-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto">

                    {/* Section Header */}
                    <div className="pavanity-section-intro mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="font-medium leading-none text-2xl md:text-3xl">
                            How Private Label Sourcing Works
                        </h3>
                        <p className="mt-3 text-base md:text-lg">
                            Structured process for custom product development and export supply.
                        </p>
                    </div>

                    {/* Process Steps - 5 Steps */}
                    <div
                        className="pavanity-private-timeline max-w-[1320px] mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {privateLabelProcessSteps.map((step, index) => (
                            <div
                                key={step.title}
                                className={`pavanity-private-timeline__item ${
                                    index % 2 === 0
                                        ? "pavanity-private-timeline__item--left"
                                        : "pavanity-private-timeline__item--right"
                                }`}
                            >
                                <div className="pavanity-private-timeline__marker">
                                    <div className="pavanity-step-index">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                </div>
                                <div className="pavanity-process-card pavanity-private-process-card pavanity-private-timeline__card">
                                    <div className="pavanity-private-process-card__header">
                                        <span className="pavanity-private-process-card__eyebrow">Step</span>
                                    </div>
                                    <div className="pavanity-private-process-card__body">
                                        <h4 className="pavanity-private-process-card__title text-xl md:text-2xl font-semibold">
                                            {step.title}
                                        </h4>
                                        <p className="pavanity-private-process-card__copy text-base md:text-lg">
                                            {step.description}
                                        </p>
                                    </div>
                                    <div className="pavanity-private-process-card__footer" aria-hidden="true">
                                        <span className="pavanity-private-process-card__footer-line" />
                                        <span className="pavanity-private-process-card__footer-dot" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* ENQUIRY CTA SECTION */}
        {/* ============================================ */}
        <div className="s-py-100">
            <div className="container-fluid">
                <div className="max-w-3xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="pavanity-cta-panel">
                        <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                            Request Private Label Sourcing Enquiry
                        </h4>
                        <p className="mt-4 text-base md:text-lg">
                            For private label development, custom formulations, and bulk export supply—contact our export team to discuss your requirements.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block mt-6 bg-primary text-white px-8 py-4 text-base md:text-lg font-medium rounded-[5px] hover:bg-opacity-90 duration-300"
                        >
                            Send Enquiry
                        </Link>
                    </div>
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
