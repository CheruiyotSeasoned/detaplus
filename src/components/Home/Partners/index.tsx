import React from 'react'
import Image from 'next/image'

const PartnersSection = () => {
  const partners = [
    { name: 'Partner 1', image: '/images/testimonials/spribe.png', alt: 'Partner 1' },
    { name: 'Partner 2', image: '/images/testimonials/integrator.png', alt: 'Partner 2' },
    { name: 'Partner 3', image: '/images/testimonials/tiny.svg', alt: 'Partner 3' },
    { name: 'Partner 4', image: '/images/testimonials/binance.png', alt: 'Partner 4' },
    { name: 'Partner 5', image: '/images/testimonials/softswiss.png', alt: 'Partner 5' },
    { name: 'Partner 7', image: '/images/testimonials/payfuture.svg', alt: 'Partner 7' },
    { name: 'Partner 8', image: '/images/testimonials/coinspaid.png', alt: 'Partner 8' },
    { name: 'Partner 9', image: '/images/testimonials/dabocrash.png', alt: 'Partner 9' },
    { name: 'Partner 10', image: '/images/testimonials/upwork.png', alt: 'Partner 10' },
  ]

  return (
    <section className="bg-dark py-8 lg:py-12 dark:bg-[#0B1020]">
      <div className="container mx-auto px-4 relative">

        {/* Decorative line */}
        <div className="w-full h-0.5 bg-gray-300 dark:bg-white/20"></div>

        {/* Center label */}
        <div className="flex justify-center relative -top-3">
          <span className="px-3 block bg-gray-50 dark:bg-[#0B1020] text-sm text-[#814AC8] font-semibold">
            Our partners
          </span>
        </div>

        {/* Logos grid */}
        <div className="flex justify-center lg:justify-between items-center flex-wrap gap-x-8 gap-y-4 lg:gap-10 mt-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="max-w-[80px] max-h-[80px] md:max-w-[200px] md:max-h-[200px]
                         flex items-center justify-center  hover:grayscale-0
                         transition-all duration-300 cursor-pointer"
            >
              <Image
                src={partner.image}
                alt={partner.alt}
                width={120}
                height={60}
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PartnersSection
