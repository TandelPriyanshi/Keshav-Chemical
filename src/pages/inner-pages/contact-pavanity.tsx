import { useEffect } from "react";
import { Link } from "react-router-dom";

import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";
import ContactForm from "../../components/ContactForm.tsx";

import bg from "../../assets/img/contact-us-header.jpg";
import contactImg from "../../assets/img/contact-us.jpg";

import { FaClock, FaEnvelope, FaGlobeAmericas } from "react-icons/fa";

import Aos from "aos";

export default function ContactPavanity() {
    useEffect(() => {
        Aos.init();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavbarPavanity />

            <div
                className="pavanity-page-hero bg-overlay"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="pavanity-page-hero__content">
                    <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">
                        Contact Us
                    </h1>
                    <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>/</li>
                        <li className="text-primary">Contact</li>
                    </ul>
                </div>
            </div>

            <div className="pavanity-page-section">
                <div className="container-fluid">
                    <div className="pavanity-split-panel pavanity-contact-shell max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-[1.08fr_0.92fr]">
                        <div
                            className="pavanity-split-panel__media pavanity-contact-visual hidden lg:block"
                            data-aos="zoom-in"
                        >
                            <img className="w-full" src={contactImg} alt="Contact Pavanity Global" />
                        </div>

                        <div className="pavanity-split-panel__content pavanity-contact-content pavanity-logo-watermark-surface flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[140px]">
                            <div className="pavanity-contact-intro w-full" data-aos="fade-up">
                                <div className="pavanity-icon-panel">
                                    <FaEnvelope className="size-16 text-white" />
                                </div>
                                <h2 className="leading-none font-medium mt-3 md:mt-6 text-2xl md:text-3xl">
                                    Business Enquiries
                                </h2>
                                <p className="max-w-[474px] mt-3 md:mt-4 font-medium">
                                    For export supply discussions, commercial enquiries, and bulk
                                    order requirements, submit your details and our team will
                                    respond within 24-48 working hours.
                                </p>
                                <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="s-pb-100">
                <div className="container-fluid">
                    <div className="pavanity-contact-summary-grid" data-aos="fade-up">
                        <div className="pavanity-card-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            <div className="pavanity-contact-card">
                                <div className="pavanity-contact-card__header">
                                    <div className="pavanity-icon-panel pavanity-home-feature-card__icon">
                                        <FaEnvelope className="text-2xl" />
                                    </div>
                                    <span className="pavanity-home-feature-card__index" aria-hidden="true">
                                        01
                                    </span>
                                </div>
                                <div className="pavanity-contact-card__body">
                                    <h4 className="text-xl font-semibold">Email</h4>
                                    <p className="text-base mt-3">info@pavanityglobal.com</p>
                                </div>
                                <div className="pavanity-contact-card__footer" aria-hidden="true">
                                    <span className="pavanity-contact-card__footer-line" />
                                    <span className="pavanity-contact-card__footer-dot" />
                                </div>
                            </div>

                            <div className="pavanity-contact-card">
                                <div className="pavanity-contact-card__header">
                                    <div className="pavanity-icon-panel pavanity-home-feature-card__icon">
                                        <FaClock className="text-2xl" />
                                    </div>
                                    <span className="pavanity-home-feature-card__index" aria-hidden="true">
                                        02
                                    </span>
                                </div>
                                <div className="pavanity-contact-card__body">
                                    <h4 className="text-xl font-semibold">Response Time</h4>
                                    <p className="text-base mt-3">24-48 working hours</p>
                                </div>
                                <div className="pavanity-contact-card__footer" aria-hidden="true">
                                    <span className="pavanity-contact-card__footer-line" />
                                    <span className="pavanity-contact-card__footer-dot" />
                                </div>
                            </div>

                            <div className="pavanity-contact-card">
                                <div className="pavanity-contact-card__header">
                                    <div className="pavanity-icon-panel pavanity-home-feature-card__icon">
                                        <FaGlobeAmericas className="text-2xl" />
                                    </div>
                                    <span className="pavanity-home-feature-card__index" aria-hidden="true">
                                        03
                                    </span>
                                </div>
                                <div className="pavanity-contact-card__body">
                                    <h4 className="text-xl font-semibold">
                                        Business Enquiries
                                    </h4>
                                    <p className="text-base mt-3">
                                        Open for B2B and HoReCa buyers globally
                                    </p>
                                </div>
                                <div className="pavanity-contact-card__footer" aria-hidden="true">
                                    <span className="pavanity-contact-card__footer-line" />
                                    <span className="pavanity-contact-card__footer-dot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterPavanity />
            <ScrollToTop />
        </>
    );
}
