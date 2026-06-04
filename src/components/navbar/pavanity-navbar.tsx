import { useEffect, useState } from "react";
import logo from "../../assets/img/svg/logo.png"; // TODO: Replace with Pavanity logo
import logoLight from "../../assets/img/svg/logo-light.png"; // TODO: Replace with Pavanity logo
import { Link } from "react-router-dom";
import NavMenu from "./nav-menu";
import { divisions } from "../../data/pavanity-data";

export default function PavanityNavbar() {
    const [toggle, setToggle] = useState<boolean>(false);
    const [current, setCurrent] = useState<string>("");
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrent(window.location.pathname);

        const handlerScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handlerScroll);

        return () => {
            window.removeEventListener("scroll", handlerScroll);
        };
    }, []);

    return (
        <div
            className={`header-area default-header relative z-50 bg-white dark:bg-title pavanity-nav ${scroll ? "sticky-header" : ""}`}
        >
            <div className="container-fluid">
                <div className="flex items-center justify-between gap-x-6 max-w-[1720px] mx-auto relative py-[10px] sm:py-4 lg:py-0">
                    {/* Logo */}
                    <Link
                        className="cursor-pointer block"
                        to="/"
                        aria-label="Pavanity Global"
                    >
                        <div className="flex flex-col">
                            <img
                                src={logo}
                                alt="Pavanity Global"
                                className="dark:hidden w-[120px] sm:w-[180px]"
                            />
                            <img
                                src={logoLight}
                                alt="Pavanity Global"
                                className="dark:block hidden w-[120px] sm:w-[180px]"
                            />
                            <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mt-1 hidden sm:block">
                                International Food & Ingredient Supplier
                            </span>
                        </div>
                    </Link>

                    {/* Main Navigation */}
                    <div
                        className={`main-menu absolute z-50 w-full lg:w-auto top-full left-0 lg:static bg-white dark:bg-title lg:bg-transparent lg:dark:bg-transparent px-5 sm:px-[30px] py-[10px] sm:py-5 lg:px-0 lg:py-0 ${toggle ? "active" : ""}`}
                    >
                        <ul className="text-base leading-none text-title dark:text-white lg:flex lg:gap-[24px] xl:gap-[30px]">
                            {/* Product Divisions Dropdown */}
                            <li
                                className={`relative ${["/product-divisions", "/product-divisions/spiceline", "/product-divisions/naturefoods", "/product-divisions/agrofoods", "/product-divisions/nutspread", "/product-divisions/sweetcane", "/product-divisions/snackfit"].includes(current) ? "active" : ""}`}
                            >
                                <Link to="#" className="pavanity-nav-link">
                                    Product Divisions<span></span>
                                </Link>
                                <ul className="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[280px] lg:invisible lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:pr-[30px]">
                                    {divisions.map((division) => (
                                        <li
                                            key={division.id}
                                            className={`${current === `/product-divisions/${division.slug}` ? "active" : ""}`}
                                        >
                                            <Link
                                                to={`/product-divisions/${division.slug}`}
                                                className="menu-item"
                                            >
                                                <div>
                                                    <div className="font-medium">
                                                        {division.name}
                                                    </div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                        {division.tagline}
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                                        <Link
                                            to="/product-divisions"
                                            className="menu-item text-primary font-medium"
                                        >
                                            View All Products →
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Quality & Compliance */}
                            <li
                                className={`${current === "/quality-compliance" ? "active" : ""}`}
                            >
                                <Link
                                    to="/quality-compliance"
                                    className="pavanity-nav-link"
                                >
                                    Quality & Compliance
                                </Link>
                            </li>

                            {/* Private Label & OEM */}
                            <li
                                className={`${current === "/private-label" ? "active" : ""}`}
                            >
                                <Link
                                    to="/private-label"
                                    className="pavanity-nav-link"
                                >
                                    Private Label & OEM
                                </Link>
                            </li>

                            {/* Global Markets */}
                            <li
                                className={`${current === "/global-markets" ? "active" : ""}`}
                            >
                                <Link
                                    to="/global-markets"
                                    className="pavanity-nav-link"
                                >
                                    Global Markets
                                </Link>
                            </li>

                            {/* About */}
                            <li
                                className={`${current === "/about" ? "active" : ""}`}
                            >
                                <Link to="/about" className="pavanity-nav-link">
                                    About
                                </Link>
                            </li>

                            {/* Contact */}
                            <li
                                className={`${current === "/contact" ? "active" : ""}`}
                            >
                                <Link
                                    to="/contact"
                                    className="pavanity-nav-link"
                                >
                                    Contact
                                </Link>
                            </li>

                            {/* Mobile RFQ Button */}
                            <li className="lg:hidden mt-4">
                                <Link
                                    to="/contact"
                                    className="rfq-button block text-center"
                                >
                                    Request RFQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side: RFQ Button + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/contact"
                            className="hidden lg:block rfq-button"
                        >
                            Request RFQ
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <NavMenu toggle={toggle} setToggle={setToggle} />
                    </div>
                </div>
            </div>
        </div>
    );
}
