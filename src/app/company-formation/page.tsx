'use client';

import React, { JSX, useState } from 'react';
import Image from 'next/image';
import { FaBitcoin, FaCreditCard, FaGavel, FaBuilding, FaUniversity, FaClipboardList, FaLock } from 'react-icons/fa';

interface Service {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const services: Service[] = [
  { icon: <FaBitcoin className="text-purple-500 w-6 h-6" />, title: 'Crypto & Web3 Licensing', desc: 'VASP, MiCA, and blockchain compliance' },
  { icon: <FaCreditCard className="text-blue-500 w-6 h-6" />, title: 'FinTech / EMI / PSP Licensing', desc: 'Payment institution and e-money licenses' },
  { icon: <FaGavel className="text-red-500 w-6 h-6" />, title: 'Gambling Licenses', desc: 'Gaming authorities and regulatory compliance' },
  { icon: <FaBuilding className="text-green-500 w-6 h-6" />, title: 'Company Formation', desc: 'Worldwide entity setup and structuring' },
  { icon: <FaUniversity className="text-yellow-500 w-6 h-6" />, title: 'Banking Solutions', desc: 'Account opening and payment infrastructure' },
  { icon: <FaClipboardList className="text-indigo-500 w-6 h-6" />, title: 'Ongoing Compliance', desc: 'Continuous legal and regulatory support' },
];

export default function CompanyFormationPage() {
  const [adviceOpen, setAdviceOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="bg-[#1A2A3A] dark:bg-[#0B1220] text-slate-900 dark:text-white">

      {/* ---------- HERO ---------- */}
      <section className="container mx-auto px-4 py-24 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
          Company Formation Services
        </h1>
        <p className="text-lg text-white/80 dark:text-slate-300 mb-10">
          Register your company worldwide with full legal compliance, banking support, and ongoing corporate services.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setAdviceOpen(true)}
            className="bg-[#814AC8] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#9D6EDB] transition"
          >
            Get Professional Advice
          </button>
          <button
            onClick={() => setServicesOpen(true)}
            className="border-2 border-[#814AC8] text-[#814AC8] dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-[#814AC8] hover:text-white transition"
          >
            Explore Our Services
          </button>
        </div>
      </section>

      {/* ---------- STEPS ---------- */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-10 text-center">
        {[
          { title: 'Concept to Guidance', desc: 'We analyze your idea and define the best legal & licensing strategy.', image: '/images/steps/1-Concept-to-Guidance_illustration.png' },
          { title: 'Legal Project Management', desc: 'Our legal team handles filings, compliance, and authorities end-to-end.', image: '/images/steps/2-Legal-Project-Management_illustration.png' },
          { title: 'On-going Business Support', desc: 'Continuous legal, compliance, and operational support as you grow.', image: '/images/steps/3-On-going-Business-Support_illustration.png' },
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <Image src={step.image} alt={step.title} width={220} height={220} />
            <h3 className="mt-4 font-semibold text-lg">{step.title}</h3>
            <p className="mt-2 text-sm text-white/80 dark:text-slate-400">{step.desc}</p>
          </div>
        ))}
      </section>

      {/* ---------- SERVICES GRID ---------- */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Legal & Company Formation Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#814AC8] transition cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">{service.icon}<h3 className="font-semibold text-[#814AC8] text-lg">{service.title}</h3></div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-[#814AC8] dark:bg-[#814AC8] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Start Your Company Today</h2>
        <p className="mb-6 opacity-90">
          Speak with our legal experts and receive a tailored solution.
        </p>
        <button
          onClick={() => setAdviceOpen(true)}
          className="bg-white text-[#814AC8] font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
        >
          Get Free Consultation
        </button>
      </section>

      {/* ---------- MODALS ---------- */}

      {/* Advice Modal */}
      {adviceOpen && (
        <Modal onClose={() => setAdviceOpen(false)}>
          <div className="relative p-6 max-w-md mx-auto bg-slate-50 dark:bg-slate-900 rounded-2xl">
            <div className="flex justify-center mb-4">
              <FaLock className="w-8 h-8 text-white bg-gradient-to-br from-[#814AC8] to-[#9D6EDB] p-2 rounded-xl" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Free Legal Consultation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-6">
              Connect with our expert legal team. We'll analyze your project and provide tailored guidance within 24 hours.
            </p>

            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none" />
              <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none resize-none" />
              <button type="submit" className="w-full bg-gradient-to-r from-[#814AC8] to-[#9D6EDB] text-white font-semibold py-3 rounded-xl">
                Request Consultation
              </button>
            </form>
          </div>
        </Modal>
      )}

      {/* Services Modal */}
      {servicesOpen && (
        <Modal onClose={() => setServicesOpen(false)}>
          <div className="relative p-6 max-w-md mx-auto bg-slate-50 dark:bg-slate-900 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-center">Our Legal Services</h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {services.map((service, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-[#814AC8] cursor-pointer">
                  <div>{service.icon}</div>
                  <div>
                    <h4 className="font-semibold">{service.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}
function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div onClick={e => e.stopPropagation()} className="bg-white dark:bg-slate-900 rounded-xl w-full max-w-lg relative p-4">
        <button onClick={onClose} className="absolute top-3 right-3">✕</button>
        {children}
      </div>
    </div>
  )
}
