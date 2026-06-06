import { commercialScope } from '../../data/pavanity-data'
import { FiGlobe, FiTag, FiMap, FiShield } from 'react-icons/fi'
import type { ReactElement } from 'react'

// Icon mapping
const iconMap: { [key: string]: ReactElement } = {
  'export': <FiGlobe className="w-full h-full" />,
  'custom-development': <FiTag className="w-full h-full" />,
  'markets': <FiMap className="w-full h-full" />,
  'compliance': <FiShield className="w-full h-full" />
}

export default function CommercialScopeSection() {
  return (
    <div className="s-py-100 bg-white dark:bg-title">
      <div className="container-fluid">
        <div className="max-w-[1720px] mx-auto">

          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
            <h3 className="leading-none text-2xl md:text-3xl text-title dark:text-white font-semibold">
              Commercial Scope
            </h3>
            <p className="mt-3 text-title dark:text-white-light">
              Comprehensive supply solutions for construction projects and dealer networks
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="100">
            {commercialScope.map((item) => (
              <div key={item.id} className="text-center sm:text-left">
                {/* Icon */}
                <div className="w-14 h-14 mx-auto sm:mx-0 flex items-center justify-center rounded-[10px] border border-primary text-primary">
                  {iconMap[item.icon]}
                </div>

                {/* Title */}
                <h4 className="text-xl md:text-2xl font-semibold text-title dark:text-white mt-6 leading-none">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="mt-4 text-title dark:text-white-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
