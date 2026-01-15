import React from 'react'
import Hero from '@/components/Home/Hero'
import People from '@/components/Home/People'
import { Metadata } from 'next'
import Testimonials from '@/components/Home/Testimonials'
import ServicesSection from '@/components/Home/services'
import DetaplusFAQSection from '@/components/Home/Dedication/indes'
import ServicesSections from '@/components/Home/Juridiction'
import PaymentMethodsSection from '@/components/Home/PaymentMethods'
import ContactSection from '@/components/Home/Team'
import PartnersSection from '@/components/Home/Partners'
export const metadata: Metadata = {
  title: 'DetaPlus - Licence and compliance management',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <People />
      <Testimonials />
      <ServicesSection />
      <DetaplusFAQSection />
      <ServicesSections />
      <PaymentMethodsSection />
      <PartnersSection />
      <ContactSection />
    </main>
  )
}
