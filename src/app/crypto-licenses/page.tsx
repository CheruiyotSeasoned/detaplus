"use client";

import React, { useState } from "react";
import { FaBitcoin, FaBalanceScale, FaGlobeEurope, FaFileAlt, FaClock, FaCheckCircle } from "react-icons/fa";

export default function CryptoLicensesPage() {
  const [open, setOpen] = useState(false);

  const licenses = [
    {
      title: "EU MiCA / CASP License",
      desc: "Operate legally across all EU countries under the MiCA regulation.",
      icon: <FaGlobeEurope className="w-6 h-6" />,
    },
    {
      title: "VASP License",
      desc: "Virtual Asset Service Provider licensing for exchanges and custodians.",
      icon: <FaBitcoin className="w-6 h-6" />,
    },
    {
      title: "Offshore Crypto License",
      desc: "Fast-track solutions in friendly jurisdictions.",
      icon: <FaBalanceScale className="w-6 h-6" />,
    },
  ];

  const steps = [
    { title: "Consultation", icon: <FaFileAlt /> },
    { title: "Jurisdiction Selection", icon: <FaGlobeEurope /> },
    { title: "Documentation", icon: <FaFileAlt /> },
    { title: "Submission", icon: <FaClock /> },
    { title: "Approval", icon: <FaCheckCircle /> },
  ];

  return (
    <main className="min-h-screen bg-[#1A2A3A] dark:bg-[#0B1220] text-slate-900 dark:text-white">
      {/* Hero */}
      <section className="py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Crypto Licensing Services
        </h1>
        <p className="max-w-2xl mx-auto text-white dark:text-slate-300 mb-8">
          We help crypto startups and exchanges obtain legal authorization worldwide including MiCA and VASP licenses.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="bg-[#814AC8] hover:bg-[#6B3DAD] text-white px-8 py-4 rounded-full font-semibold transition"
        >
          Get Free Consultation
        </button>
      </section>

      {/* Licenses */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        {licenses.map((item, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="text-[#814AC8] mb-4">{item.icon}</div>
            <h3 className="font-semibold text-[#814AC8] text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#814AC8] text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#814AC8] text-white flex items-center justify-center mb-3">
                  {s.icon}
                </div>
                <p className="text-sm font-medium">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Start Your Crypto Business Legally</h2>
        <p className="text-white dark:text-slate-300 mb-8">
          Avoid regulatory risks and launch with confidence.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="border-2 border-[#814AC8] text-[#814AC8] hover:bg-[#814AC8] hover:text-white px-8 py-4 rounded-full font-semibold transition"
        >
          Speak to an Expert
        </button>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-4">Free Consultation</h3>
            <input
              placeholder="Full name"
              className="w-full mb-3 px-4 py-3 rounded-lg border dark:bg-slate-800"
            />
            <input
              placeholder="Email"
              className="w-full mb-3 px-4 py-3 rounded-lg border dark:bg-slate-800"
            />
            <textarea
              placeholder="Tell us about your project"
              className="w-full mb-4 px-4 py-3 rounded-lg border dark:bg-slate-800"
              rows={4}
            />
            <button className="w-full bg-[#814AC8] hover:bg-[#6B3DAD] text-white py-3 rounded-lg font-semibold">
              Submit
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
