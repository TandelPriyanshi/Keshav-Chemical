import { Link } from 'react-router-dom'
import { footerQuickLinks, footerLegalLinks, footerContent } from '../../data/pavanity-data'

interface LinkData {
    name: string;
    path: string;
}

export default function PavanityFooter() {
  return (
    <div className="relative bg-title dark:bg-dark-secondary">
        <div className="s-pt-100">
            <div className="container-fluid">
                <div className="max-w-[1722px] mx-auto">

                    {/* Top Section - Brand & Tagline */}
                    <div className="text-center pb-12 md:pb-16 border-b border-white border-opacity-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-none">
                            {footerContent.brandName}
                        </h3>
                        <p className="text-white-light mt-2 text-base md:text-lg">
                            {footerContent.tagline}
                        </p>
                    </div>

                    {/* Middle Section - Quick Links */}
                    <div className="py-8 md:py-12">
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                            {footerQuickLinks.map((link: LinkData, index: number) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    className="text-white hover:text-primary transition-colors duration-300 text-sm md:text-base"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Motto Section */}
                    <div className="text-center py-6 border-t border-b border-white border-opacity-10">
                        <p className="text-xl md:text-2xl font-semibold text-white italic">
                            {footerContent.motto}
                        </p>
                    </div>

                    {/* Bottom Section - Copyright & Legal */}
                    <div className="py-6 md:py-7">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            {/* Copyright */}
                            <p className="text-white-light text-sm md:text-base text-center md:text-left">
                                {footerContent.copyright}
                            </p>

                            {/* Legal Links */}
                            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                                {footerLegalLinks.map((link: LinkData, index: number) => (
                                    <Link
                                        key={index}
                                        to={link.path}
                                        className="text-white-light hover:text-primary transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
