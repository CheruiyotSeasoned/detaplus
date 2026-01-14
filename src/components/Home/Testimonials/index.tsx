'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Image from 'next/image'
import { withBasePath } from '@/utils/urlHelper'

const testimonials = [
  {
    logo: '/images/testimonials/chicksx.png',
    title: 'We felt genuinely supported',
    text: 'Detaplus helped us navigate a space that’s often uncertain and complex, which gave us the confidence to move forward with our project.',
    avatar: '/images/people/user.png',
    name: 'Al Alof',
    company: 'ChicksX',
  },
  {
    logo: '/images/testimonials/yellowcard.png',
    title: 'A fruitful cooperation',
    text: 'As a result of the fruitful cooperation with Detaplus, Yellow Card obtained a VASP registration, fast and without any legal complications.',
    avatar: '/images/people/user.png',
    name: 'Craig Stoehr',
    company: 'Yellow Card',
  },
  {
    logo: '/images/testimonials/acm.jpg',
    title: 'Excels at adapting to challenges',
    text: 'Detaplus excels at adapting to challenges and demonstrates a perfect understanding of our business needs.',
    avatar: '/images/people/user.png',
    name: 'Andreas Fleischhacker',
    company: 'ACM Finance',
  },
]

const Testimonials = () => {
  return (
    <section className="py-12 xl:pt-16 bg-white" id="slider-testimonials">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col gap-1 max-w-2xl">
          <span className="uppercase text-primary text-sm font-semibold">
            Stories of our clients and how they went beyond with our assistance
          </span>
          <h2 className="text-midnight_text text-3xl md:text-4xl font-bold">
            Learn about the success of our clients first-hand
          </h2>
        </div>

        {/* Slider */}
        <div className="mt-8 xl:mt-12">
          <Splide
            options={{
              perPage: 2,
              gap: '1.5rem',
              arrows: true,
              pagination: false,
              breakpoints: {
                1024: { perPage: 1 },
              },
            }}
          >
            {testimonials.map((item, idx) => (
              <SplideSlide key={idx}>
                <div className="bg-white p-6 xl:p-8 rounded-xl shadow-lg flex flex-col gap-6 h-full">

                  {/* Logo */}
                  <div className="h-[170px] w-full flex items-center justify-center">
                    <Image
                      src={withBasePath(item.logo)}
                      alt={item.title}
                      width={340}
                      height={170}
                      className="object-contain rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 flex-1">
                    <h3 className="text-xl xl:text-2xl font-semibold text-primary leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-black/70 flex-1">{item.text}</p>

                    {/* Author */}
                    <div className="flex gap-4 items-center pt-2">
                      <div className="w-12 h-12 relative">
                        <Image
                          src={withBasePath(item.avatar)}
                          alt={item.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">{item.name}</span>
                        <span className="text-sm text-black/60">{item.company}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
