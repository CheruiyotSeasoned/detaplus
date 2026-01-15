'use client'
import React, { useState, ReactNode } from 'react'
import { withBasePath } from '@/utils/urlHelper'
import Image from 'next/image'
import {
  FaBitcoin,
  FaCreditCard,
  FaGavel,
  FaLock,
  FaBuilding,
  FaUniversity,
  FaClipboardList
} from 'react-icons/fa'

interface Service {
  icon: ReactNode
  title: string
  desc: string
}

const services: Service[] = [
  { icon: <FaBitcoin className="text-purple-500 w-6 h-6" />, title: 'Crypto & Web3 Licensing', desc: 'VASP, MiCA, and blockchain compliance' },
  { icon: <FaCreditCard className="text-blue-500 w-6 h-6" />, title: 'FinTech / EMI / PSP Licensing', desc: 'Payment institution and e-money licenses' },
  { icon: <FaGavel className="text-red-500 w-6 h-6" />, title: 'Gambling Licenses', desc: 'Gaming authorities and regulatory compliance' },
  { icon: <FaBuilding className="text-green-500 w-6 h-6" />, title: 'Company Formation', desc: 'Worldwide entity setup and structuring' },
  { icon: <FaUniversity className="text-yellow-500 w-6 h-6" />, title: 'Banking Solutions', desc: 'Account opening and payment infrastructure' },
  { icon: <FaClipboardList className="text-indigo-500 w-6 h-6" />, title: 'Ongoing Compliance', desc: 'Continuous legal and regulatory support' },
]

interface FormData {
  name: string
  email: string
  message: string
}

const WavyArrow = () => (
  <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="text-[#814AC8] dark:text-[#9D6EDB]">
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
      </marker>
    </defs>
    <path
      d="M5 30 C 25 10, 45 50, 65 30 S 95 10, 115 30"
      stroke="currentColor"
      strokeWidth="3"
      strokeDasharray="6 6"
      fill="none"
      markerEnd="url(#arrowhead)"
    />
  </svg>
)

function Banner() {
  const [adviceOpen, setAdviceOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [focusedField, setFocusedField] = useState('')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  return (
    <>
      {/* ================== HERO ================== */}
      <section className="bg-header dark:bg-[#0B1220] pt-36 pb-24 overflow-hidden">
        <div className="container px-4 mx-auto">

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h3 className="text-midnight_text dark:text-white text-2xl md:text-3xl xl:text-4xl font-bold">
              Company Formation, Crypto, Gambling & FinTech Licencing
              <span className="text-[#814AC8]"> </span>
            </h3>

            <p className="mt-4 text-sm md:text-base">
              Start and scale your business with globally experienced lawyers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={() => setAdviceOpen(true)}
                className="bg-[#814AC8] text-white py-4 px-8 rounded-full"
              >
                Get professional advice
              </button>

              <button
                onClick={() => setServicesOpen(true)}
                className="border-2 border-[#814AC8] text-[#814AC8] py-4 px-8 rounded-full"
              >
                Explore all services
              </button>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-20 max-w-6xl mx-auto">
            <Step img="/images/steps/1-Concept-to-Guidance_illustration.png" title="Concept to Guidance" />
            <WavyArrow />
            <Step img="/images/steps/2-Legal-Project-Management_illustration.png" title="Legal Project Management" />
            <WavyArrow />
            <Step img="/images/steps/3-On-going-Business-Support_illustration.png" title="On-going Business Support" />
          </div>
        </div>
      </section>

      {/* ================== ADVICE MODAL ================== */}
      {adviceOpen && (
        <Modal onClose={() => setAdviceOpen(false)}>
          <div className="max-w-md mx-auto p-6">
            <div className="flex justify-center mb-4">
              <FaLock className="w-10 h-10 text-[#814AC8]" />
            </div>

            <h3 className="text-xl font-bold text-center mb-4">Free Legal Consultation</h3>

            <div className="space-y-3">
              <input
                placeholder="Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded border"
              />
              <input
                placeholder="Email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded border"
              />
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 rounded border"
              />

              <button
                onClick={() => setAdviceOpen(false)}
                className="w-full bg-[#814AC8] text-white py-3 rounded"
              >
                Submit
              </button>

              <p className="text-xs text-center flex justify-center items-center gap-1">
                <FaLock /> Your information is confidential
              </p>
            </div>
          </div>
        </Modal>
      )}

      {/* ================== SERVICES MODAL ================== */}
      {servicesOpen && (
        <Modal onClose={() => setServicesOpen(false)}>
          <div className="p-6 space-y-3">
            {services.map((s, i) => (
              <div key={i} className="flex gap-3 items-center">
                {s.icon}
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-gray-500">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </>
  )
}

function Step({ img, title }: { img: string; title: string }) {
  return (
    <div className="text-center">
      <Image src={withBasePath(img)} alt={title} width={200} height={200} />
      <h3 className="mt-4 font-semibold">{title}</h3>
    </div>
  )
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

export default Banner
