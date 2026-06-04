import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import bg from '../../assets/img/main_product_bc1.png' 

// Data
import { productsData } from "../../data/products-data";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

export default function ProductsMain() {

    useEffect(()=>{
        Aos.init()
        window.scrollTo(0,0)
    },[])

  return (
    <>
        {/* Navbar */}
        <NavbarPavanity/>

        <main className="pavanity-products-page">

        {/* ============================================ */}
        {/* BREADCRUMB SECTION */}
        {/* ============================================ */}
        <div className="pavanity-page-hero pavanity-products-hero bg-overlay" style={{backgroundImage:`url(${bg})`}}>
            <div className="pavanity-page-hero__content pavanity-products-hero__content">
                <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Products</h1>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Products</li>
                </ul>
            </div>
        </div>

        {/* ============================================ */}
        {/* PRODUCT CATEGORIES GRID */}
        {/* ============================================ */}
        <div className="pavanity-products-section s-py-100">
            <div className="container-fluid">
                {/* Section Header */}
                <div className="pavanity-section-intro pavanity-products-section-intro mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="font-medium leading-none text-2xl md:text-3xl lg:text-4xl">
                        Export-Grade Food & Agricultural Ingredients for Global B2B Buyers
                    </h2>
                    <p className="mt-4 text-base md:text-lg">
                        Export-focused sourcing partner supplying food and agricultural ingredients to international B2B and HoReCa buyers, with compliance-ready documentation and shipment support.
                    </p>
                </div>

                {/* Product Categories Grid */}
                <div className="max-w-[1720px] mx-auto pavanity-products-grid-shell" data-aos="fade-up" data-aos-delay="300">
                    <div className="pavanity-card-grid pavanity-products-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {productsData.map((category) => {
                            return(
                                <Link
                                    to={`/products/${category.slug}`}
                                    className="pavanity-product-card pavanity-products-card pavanity-products-card--catalog group relative overflow-hidden duration-300"
                                    key={category.id}
                                >
                                    {/* Image Container */}
                                    <div className="pavanity-products-card__media relative overflow-hidden h-64 sm:h-72 lg:h-80">
                                        <img
                                            className="w-full h-full object-cover transform duration-500 group-hover:scale-110 block"
                                            src={category.image}
                                            alt={category.name}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="pavanity-products-card__content p-6 sm:p-8">
                                        <h3 className="pavanity-products-card__title text-xl md:text-2xl font-semibold leading-tight group-hover:text-primary duration-300">
                                            {category.name}
                                        </h3>
                                        <p className="pavanity-products-card__tagline text-sm md:text-base text-title/70 dark:text-white/70 mt-2">
                                            {category.tagline}
                                        </p>
                                        <p className="pavanity-products-card__copy text-sm md:text-base mt-3 line-clamp-3">
                                            {category.description}
                                        </p>

                                        {/* View Details Link */}
                                        <div className="pavanity-products-card__link mt-5 flex items-center gap-2 text-primary font-medium">
                                            <span className="text-underline-primary">Explore Export Range →</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="max-w-3xl mx-auto mt-12 md:mt-16 text-center" data-aos="fade-up" data-aos-delay="500">
                    <div className="pavanity-cta-panel pavanity-products-cta-panel">
                        <h4 className="text-xl md:text-2xl font-semibold">
                            Need Custom Product Specifications?
                        </h4>
                        <p className="mt-3 text-base md:text-lg">
                            We support custom product development and bulk supply for international buyers. Contact our export team to discuss your requirements.
                        </p>
                        <Link
                            to="/contact"
                            className="pavanity-products-cta-panel__button inline-block mt-6 bg-primary text-white px-8 py-4 text-base md:text-lg font-medium rounded-[5px] hover:bg-opacity-90 duration-300"
                        >
                            Request Business Enquiry
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        </main>

        {/* Footer */}
        <FooterPavanity/>

        {/* Scroll to Top */}
        <ScrollToTop/>
    </>
  )
}
