import { globalMarkets } from '../../data/pavanity-data'

export default function GlobalMarketsSection() {
  return (
    <div className="s-py-100 bg-[#f5f5f5] dark:bg-dark-secondary">
      <div className="container-fluid">
        <div className="max-w-[1720px] mx-auto">

          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
            <h3 className="leading-none text-2xl md:text-3xl text-title dark:text-white font-semibold">
              Regional Presence & Network
            </h3>
            <p className="mt-3 text-title dark:text-white-light">
              Serving dealers, contractors, and project networks across key regions.
            </p>
          </div>

          {/* Region Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6" data-aos="fade-up" data-aos-delay="100">
            {globalMarkets.map((market) => (
              <div key={market.id} className="inline-flex items-center px-6 py-3 bg-white dark:bg-title border border-primary text-primary rounded font-medium hover:bg-primary hover:text-white transition-all duration-300">
                {market.region}
              </div>
            ))}
          </div>

          {/* Optional: World Map Placeholder */}
          <div className="mt-12 md:mt-16 flex items-center justify-center" data-aos="fade-up" data-aos-delay="200">
            <div className="w-full max-w-4xl aspect-video bg-white dark:bg-title rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
              <p className="text-title dark:text-white-light text-center px-4">
                [World Map Placeholder - Insert SVG or Image]
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
