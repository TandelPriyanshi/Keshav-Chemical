import { useEffect, useState } from "react";

import logo from "../../assets/img/svg/logo.png";
import logoLight from "../../assets/img/svg/logo-light.png";

import { Link, NavLink, useLocation } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import ThemeSwitcher from "../theme-switcher";

import { productsData } from "../../data/products-data";

type NavItem = {
    label: string;
    href: string;
};

const NAV_ITEMS: NavItem[] = [
    { label: "Products", href: "/products" },
    { label: "Quality & Compliance", href: "/quality-compliance" },
    {
        label: "Private Label & Custom Sourcing",
        href: "/private-label-custom-sourcing",
    },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
];

function isActiveRoute(pathname: string, href: string): boolean {
    if (href === "/") {
        return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavbarPavanity() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const isHomePage = location.pathname === "/";
    const useLightBrand = isHomePage && !isScrolled;

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 40);
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav
            aria-label="Main navigation"
            className={[
                "pavanity-site-header",
                isScrolled ? "is-sticky" : "",
            ].join(" ")}
        >
            <div className="pavanity-site-header__shell">
                <div
                    className={[
                        "pavanity-site-header__panel",
                        isHomePage && !isScrolled
                            ? "pavanity-site-header__panel--home"
                            : "pavanity-site-header__panel--inner",
                    ].join(" ")}
                >
                    <Link to="/" className="pavanity-site-brand" aria-label="Pavanity Global">
                        <img
                            src={useLightBrand ? logoLight : logo}
                            alt="Pavanity Global"
                            className="pavanity-site-brand__logo"
                        />
                    </Link>

                    <div className="pavanity-site-header__menu">
                        {NAV_ITEMS.map((item) => {
                            if (item.href === "/products") {
                                const isActive = isActiveRoute(
                                    location.pathname,
                                    item.href,
                                );

                                return (
                                    <div
                                        key={item.href}
                                        className="group relative"
                                    >
                                        <NavLink
                                            to={item.href}
                                            className={[
                                                "pavanity-nav-link inline-flex items-center gap-2",
                                                isActive ? "active" : "",
                                            ].join(" ")}
                                            title={item.label}
                                            aria-label={item.label}
                                        >
                                            <span>{item.label}</span>
                                            <span className="text-[10px]">+</span>
                                        </NavLink>

                                        <div className="pavanity-nav-dropdown invisible absolute left-1/2 top-full z-50 mt-4 w-[20rem] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                            <div className="pavanity-nav-dropdown__list grid gap-1">
                                                {productsData.map((category) => (
                                                    <NavLink
                                                        key={category.id}
                                                        to={`/products/${category.slug}`}
                                                        className={({ isActive }) =>
                                                            [
                                                                "pavanity-nav-dropdown__item",
                                                                isActive
                                                                    ? "active"
                                                                    : "",
                                                            ].join(" ")
                                                        }
                                                    >
                                                        <span className="block">
                                                            {category.name}
                                                        </span>
                                                        <span className="pavanity-nav-dropdown__tagline mt-1 block text-xs">
                                                            {category.tagline}
                                                        </span>
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <NavLink
                                    key={item.href}
                                    to={item.href}
                                    className={({ isActive }) =>
                                        [
                                            "pavanity-nav-link",
                                            isActive ? "active" : "",
                                        ].join(" ")
                                    }
                                    title={item.label}
                                    aria-label={item.label}
                                >
                                    {item.label}
                                </NavLink>
                            );
                        })}
                    </div>

                    <div className="pavanity-site-header__actions">
                        <ThemeSwitcher />

                        <Link to="/contact" className="pavanity-header-rfq rfq-button">
                            <span className="pavanity-header-rfq__label">
                                <span className="pavanity-rfq-label pavanity-rfq-label--full">Request RFQ</span>
                                <span className="pavanity-rfq-label pavanity-rfq-label--short">RFQ</span>
                            </span>
                            <span className="pavanity-header-rfq__icon" aria-hidden="true">
                                <FiArrowUpRight />
                            </span>
                        </Link>

                        <button
                            type="button"
                            className="pavanity-nav-toggle lg:hidden"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="pavanity-mobile-nav"
                            onClick={() =>
                                setIsMobileMenuOpen((open) => !open)
                            }
                        >
                            <span className="pavanity-nav-toggle__bars">
                                <span />
                                <span />
                                <span />
                            </span>
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen ? (
                    <div
                        id="pavanity-mobile-nav"
                        className={[
                            "pavanity-site-header__mobile",
                            isHomePage && !isScrolled
                                ? "pavanity-site-header__mobile--home"
                                : "pavanity-site-header__mobile--inner",
                        ].join(" ")}
                    >
                        {NAV_ITEMS.map((item) => {
                            const isActive = isActiveRoute(
                                location.pathname,
                                item.href,
                            );

                            return (
                                <div key={item.href}>
                                    <NavLink
                                        to={item.href}
                                        className={[
                                            "pavanity-mobile-link",
                                            isActive ? "active" : "",
                                        ].join(" ")}
                                    >
                                        <span>{item.label}</span>
                                        <span>{isActive ? "01" : "->"}</span>
                                    </NavLink>

                                    {item.href === "/products" ? (
                                        <div className="pavanity-mobile-submenu mt-2 grid gap-2 pl-3">
                                            {productsData.map((category) => (
                                                <NavLink
                                                    key={category.id}
                                                    to={`/products/${category.slug}`}
                                                    className={[
                                                        "rounded-[0.9rem] px-3 py-2 text-sm",
                                                        isHomePage && !isScrolled
                                                            ? "text-white/75 hover:bg-white/8 hover:text-white"
                                                            : "text-[var(--pavanity-text)] hover:bg-[var(--pavanity-surface-soft)] hover:text-[var(--pavanity-accent)] dark:text-white/75 dark:hover:bg-white/8 dark:hover:text-white",
                                                    ].join(" ")}
                                                >
                                                    {category.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })}

                        <Link to="/contact" className="pavanity-header-rfq pavanity-header-rfq--mobile rfq-button">
                            <span className="pavanity-header-rfq__label">
                                <span className="pavanity-rfq-label pavanity-rfq-label--full">Request RFQ</span>
                                <span className="pavanity-rfq-label pavanity-rfq-label--short">RFQ</span>
                            </span>
                            <span className="pavanity-header-rfq__icon" aria-hidden="true">
                                <FiArrowUpRight />
                            </span>
                        </Link>
                    </div>
                ) : null}
            </div>
        </nav>
    );
}
