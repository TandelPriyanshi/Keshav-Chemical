import { businessContinuity } from '../../data/pavanity-data'
import { FiTruck, FiFileText, FiCheckCircle } from 'react-icons/fi'
import type { ReactElement } from 'react'

// Icon mapping
const iconMap: { [key: string]: ReactElement } = {
  supply: <FiTruck className="w-full h-full" />,
  commercial: <FiFileText className="w-full h-full" />,
  trade: <FiCheckCircle className="w-full h-full" />
}

export default function BusinessContinuitySection() {
  return (
    <div className="s-py-100 bg-white dark:bg-title">
      <div className="container-fluid">
        <div className="max-w-[1720px] mx-auto">

          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
            <h3 className="leading-none text-2xl md:text-3xl text-title dark:text-white font-semibold">
              Why Clients Choose Us
            </h3>
            <p className="mt-3 text-title dark:text-white-light max-w-2xl mx-auto">
              Product supply structured for reliability, technical clarity, and performance
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12" data-aos="fade-up" data-aos-delay="100">
            {businessContinuity.map((item) => (
              <div key={item.id} className="text-center bg-amber-50">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-[10px] border border-primary text-primary">
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
