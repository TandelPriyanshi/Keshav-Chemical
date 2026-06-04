import { Link } from 'react-router-dom'
import { businessEnquiries } from '../../data/pavanity-data'
import { FiMail, FiClock } from 'react-icons/fi'

export default function BusinessEnquiriesSection() {
  return (
    <div className="s-py-100 bg-white dark:bg-title">
      <div className="container-fluid">
        <div className="max-w-[1720px] mx-auto">

          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">

            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-semibold text-title dark:text-white leading-none">
              {businessEnquiries.heading}
            </h3>

            {/* Email */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <FiMail className="w-6 h-6 text-primary" />
              <a
                href={`mailto:${businessEnquiries.email}`}
                className="text-xl md:text-2xl font-medium text-primary hover:underline"
              >
                {businessEnquiries.email}
              </a>
            </div>

            {/* Response Time */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <FiClock className="w-5 h-5 text-title dark:text-white-light" />
              <p className="text-base md:text-lg text-title dark:text-white-light">
                {businessEnquiries.response}
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link to="/contact" className="btn btn-primary" data-text={businessEnquiries.ctaText}>
                <span>{businessEnquiries.ctaText}</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
