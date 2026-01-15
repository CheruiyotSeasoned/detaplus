'use client';

import { JSX, useState } from 'react';
import { FaGavel, FaBuilding, FaUniversity, FaClipboardList, FaBitcoin, FaLock, FaHandHoldingUsd } from 'react-icons/fa';

interface Service {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const services: Service[] = [
  { icon: <FaGavel className="text-red-500 w-6 h-6" />, title: 'Regulatory Compliance', desc: 'Ensure your business meets global legal standards and regulatory requirements.' },
  { icon: <FaBuilding className="text-green-500 w-6 h-6" />, title: 'Company Formation', desc: 'Worldwide entity setup and corporate structuring for startups and businesses.' },
  { icon: <FaBitcoin className="text-purple-500 w-6 h-6" />, title: 'Crypto & Web3 Licensing', desc: 'Licensing and compliance for VASP, MiCA, and blockchain-based businesses.' },
  { icon: <FaClipboardList className="text-indigo-500 w-6 h-6" />, title: 'Ongoing Compliance', desc: 'Continuous legal, tax, and regulatory support for your operations.' },
  { icon: <FaUniversity className="text-yellow-500 w-6 h-6" />, title: 'Banking & Payment Solutions', desc: 'Support with accounts, PSP/EMI licenses, and banking infrastructure.' },
  { icon: <FaHandHoldingUsd className="text-blue-500 w-6 h-6" />, title: 'Investment & Trading Licensing', desc: 'Forex, brokerage, and investment fund licensing services.' },
];

export default function LegalServicesPage() {
  const [adviceOpen, setAdviceOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="bg-dark dark:bg-[#0B1220] text-slate-900 dark:text-white">

      {/* ---------- HERO ---------- */}
      <section className="container mx-auto px-4 py-24 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Legal Services</h1>
        <p className="text-lg text-white/80 dark:text-slate-300 mb-10">
          We provide expert legal guidance for startups, FinTech, crypto, and global businesses.
          Ensure your company is compliant, licensed, and ready to scale worldwide.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setAdviceOpen(true)}
            className="bg-[#814AC8] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#9D6EDB] transition"
          >
            Get Legal Advice
          </button>
          <button
            onClick={() => setServicesOpen(true)}
            className="border-2 border-[#814AC8] text-[#814AC8] dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-[#814AC8] hover:text-white transition"
          >
            View Our Services
          </button>
        </div>
      </section>

      {/* ---------- ABOUT / EXPLANATION ---------- */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Legal Services?</h2>
        <p className="text-lg text-white/80 dark:text-slate-300 mb-6 text-center">
          We combine global legal expertise with local knowledge. Our dedicated team guides you through corporate formation, FinTech licenses, crypto compliance, banking solutions, and regulatory obligations, ensuring your business is secure and scalable.
        </p>
        <p className="text-lg text-white/80 dark:text-slate-300 text-center">
          Every project receives personalized attention, from initial consultation to ongoing compliance monitoring, enabling smooth operations and investor confidence.
        </p>
      </section>

      {/* ---------- SERVICES GRID ---------- */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Legal Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#814AC8] transition cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                {service.icon}
                <h3 className="font-semibold text-[#814AC8] text-lg">{service.title}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PROCESS STEPS ---------- */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-10 text-center">
        {[
          { title: 'Analysis & Consultation', desc: 'We understand your business and regulatory needs.' },
          { title: 'Regulatory Filings', desc: 'Complete licensing applications managed end-to-end.' },
          { title: 'Ongoing Compliance', desc: 'Continuous monitoring and reporting to stay compliant.' },
        ].map((step, i) => (
          <div key={i}>
            <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#814AC8] to-[#9D6EDB] rounded-full flex items-center justify-center text-white text-2xl font-bold">{i + 1}</div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-white/80 dark:text-slate-400">{step.desc}</p>
          </div>
        ))}
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-[#814AC8] dark:bg-[#814AC8] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Secure Your Legal Support Today</h2>
        <p className="mb-6 opacity-90">Schedule a consultation with our expert legal team for personalized guidance.</p>
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
              Connect with our expert legal team for tailored guidance within 24 hours.
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