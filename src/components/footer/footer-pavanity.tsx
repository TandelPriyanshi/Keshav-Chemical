import { Link } from "react-router-dom";

import logoLight from "../../assets/img/svg/logo-light.png";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhone,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";

import {
    contactInfo,
    footerContent,
    footerLegalLinks,
    footerQuickLinks,
    officeLocations,
    socialMedia,
} from "../../data/pavanity-data";

type SocialIconName = "facebook" | "instagram" | "linkedin" | "twitter" | "whatsapp";

function getSocialIcon(iconName: SocialIconName) {
    switch (iconName) {
        case "facebook":
            return <FaFacebookF />;
        case "instagram":
            return <FaInstagram />;
        case "linkedin":
            return <FaLinkedinIn />;
        case "twitter":
            return <FaTwitter />;
        case "whatsapp":
            return <FaWhatsapp />;
        default:
            return null;
    }
}

export default function FooterPavanity() {
    return (
        <footer className="pavanity-site-footer">
            <img
                src={logoLight}
                alt=""
                aria-hidden="true"
                className="pavanity-site-footer__watermark"
            />

            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto">
                    <div className="pavanity-site-footer__grid">
                        <div className="pavanity-site-footer__brand">
                            <img src={logoLight} alt="Pavanity Global" />

                            <p className="pavanity-site-footer__headline">
                                We support global food trade with
                                <span>structured sourcing and export clarity</span>
                            </p>

                            <p className="pavanity-site-footer__copy">
                                {footerContent.description}
                            </p>
                        </div>

                        <div>
                            <p className="pavanity-site-footer__eyebrow">Inquiry</p>
                            <div className="pavanity-site-footer__meta">
                                <a href={`mailto:${contactInfo.email}`}>
                                    {contactInfo.email}
                                </a>
                                <br />
                                <a href={`tel:${contactInfo.phone}`}>
                                    <span className="inline-flex items-center gap-2">
                                        <FaPhone />
                                        {contactInfo.phone}
                                    </span>
                                </a>
                            </div>

                            <div className="pavanity-site-footer__socials">
                                {socialMedia.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.name}
                                        className="pavanity-site-footer__social-link"
                                    >
                                        {getSocialIcon(social.icon as SocialIconName)}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="pavanity-site-footer__eyebrow">Quick Links</p>
                            <div className="mt-4 grid gap-3">
                                {footerQuickLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="text-white/80 hover:text-white text-sm font-medium tracking-[0.08em] uppercase"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pavanity-site-footer__presence">
                        {officeLocations.map((location) => (
                            <div
                                key={location.id}
                                className="pavanity-site-footer__presence-card"
                            >
                                <h5>{location.country}</h5>
                                <p>{location.address}</p>
                            </div>
                        ))}
                    </div>

                    <div className="pavanity-site-footer__bottom">
                        <p className="pavanity-site-footer__copyright">
                            {footerContent.copyright}
                        </p>

                        <nav aria-label="Footer navigation">
                            <ul className="pavanity-site-footer__nav">
                                {footerQuickLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {footerLegalLinks.length > 0 ? (
                            <div className="pavanity-site-footer__legal">
                                {footerLegalLinks.map((link) => (
                                    <Link key={link.path} to={link.path}>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </footer>
    );
}
