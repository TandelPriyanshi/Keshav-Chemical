import { useEffect, useState } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type HeroSlide = {
    id: string;
    image: string;
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
};

const HERO_SLIDES: HeroSlide[] = [
    {
        id: "trade",
        image: "/images/home-background.jpeg",
        eyebrow: "Export-ready supply partner",
        titlePrefix: "International Food",
        titleHighlight: "&",
        titleSuffix: "Ingredient Supplier",
    },
    {
        id: "export",
        image: "/images/v1-home-background.jpeg",
        eyebrow: "Global food sourcing",
        titlePrefix: "Export Supply",
        titleHighlight: "for",
        titleSuffix: "Global Food Businesses",
    },
    {
        id: "horeca",
        image: "/images/black-sesame-sack-dark-background (1).jpg",
        eyebrow: "B2B and HoReCa focus",
        titlePrefix: "Structured",
        titleHighlight: "B2B",
        titleSuffix: "& HoReCa Supply",
    },
];

const AUTO_ADVANCE_MS = 3600;

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoAdvancePaused, setIsAutoAdvancePaused] = useState(false);
    const activeSlide = HERO_SLIDES[activeIndex] ?? HERO_SLIDES[0];

    useEffect(() => {
        if (isAutoAdvancePaused) {
            return undefined;
        }

        const timer = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % HERO_SLIDES.length);
        }, AUTO_ADVANCE_MS);

        return () => {
            window.clearInterval(timer);
        };
    }, [isAutoAdvancePaused]);

    function goToSlide(index: number) {
        setActiveIndex(index);
    }

    function goToPreviousSlide() {
        setActiveIndex((current) =>
            current === 0 ? HERO_SLIDES.length - 1 : current - 1,
        );
    }

    function goToNextSlide() {
        setActiveIndex((current) => (current + 1) % HERO_SLIDES.length);
    }

    function pauseAutoAdvance() {
        setIsAutoAdvancePaused(true);
    }

    function resumeAutoAdvance() {
        setIsAutoAdvancePaused(false);
    }

    if (!activeSlide) {
        return <section className="pavanity-home-hero" />;
    }

    return (
        <section
            className="pavanity-home-hero"
            aria-label="Featured home banners"
            aria-roledescription="carousel"
            onMouseEnter={pauseAutoAdvance}
            onMouseLeave={resumeAutoAdvance}
            onFocusCapture={pauseAutoAdvance}
            onBlurCapture={(event) => {
                if (
                    !(event.relatedTarget instanceof Node) ||
                    !event.currentTarget.contains(event.relatedTarget)
                ) {
                    resumeAutoAdvance();
                }
            }}
        >
            <div className="absolute inset-0">
                {HERO_SLIDES.map((slide, index) => (
                    <div
                        key={slide.id}
                        aria-hidden={activeIndex !== index}
                        className={[
                            "pavanity-home-hero__slide",
                            activeIndex === index
                                ? "pavanity-home-hero__slide--active"
                                : "",
                        ].join(" ")}
                    >
                        <img
                            src={slide.image}
                            alt=""
                            className={[
                                "pavanity-home-hero__media",
                                index === 0 ? "object-center" : "",
                                activeIndex === index
                                    ? "scale-100"
                                    : "scale-[1.04]",
                            ].join(" ")}
                        />
                    </div>
                ))}
            </div>

            <div className="pavanity-home-hero__overlay-left" />
            <div className="pavanity-home-hero__overlay-bottom" />

            <div className="container-fluid pavanity-home-hero__content">
                <div className="pavanity-home-hero__copy" key={activeSlide.id}>
                    <p className="pavanity-home-hero__eyebrow">
                        {activeSlide.eyebrow}
                    </p>

                    <p className="pavanity-home-hero__title">
                        {activeSlide.titlePrefix}
                    </p>
                    <h1 className="pavanity-home-hero__title">
                        <span className="pavanity-home-hero__highlight">
                            {activeSlide.titleHighlight}
                        </span>
                        <span className="text-white">
                            {" "}
                            {activeSlide.titleSuffix}
                        </span>
                    </h1>
                </div>

                <div className="pavanity-home-hero__controls">
                    <div
                        className="pavanity-home-hero__indicators"
                        role="group"
                        aria-label="Select hero slide"
                    >
                        {HERO_SLIDES.map((slide, index) => (
                            <button
                                key={slide.id}
                                type="button"
                                aria-label={`Go to hero slide ${index + 1}`}
                                aria-pressed={activeIndex === index}
                                onClick={() => goToSlide(index)}
                                className={[
                                    "pavanity-home-hero__indicator",
                                    activeIndex === index
                                        ? "pavanity-home-hero__indicator--active"
                                        : "",
                                ].join(" ")}
                            />
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            aria-label="Previous hero slide"
                            onClick={goToPreviousSlide}
                            className="pavanity-home-hero__nav-button"
                        >
                            <FiChevronLeft />
                        </button>
                        <button
                            type="button"
                            aria-label="Next hero slide"
                            onClick={goToNextSlide}
                            className="pavanity-home-hero__nav-button"
                        >
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
