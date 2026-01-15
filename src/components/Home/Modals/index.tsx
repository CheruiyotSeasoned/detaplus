'use client'

import { useState } from 'react'// your Modal component
import { FaLock } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  message: string
}

interface AdviceModalProps {
  open: boolean
  onClose: () => void
}

const AdviceModal: React.FC<AdviceModalProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [focusedField, setFocusedField] = useState<string>('')

  if (!open) return null

  return (
    <Modal onClose={onClose}>
      <div className="relative max-w-md mx-auto bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-t-2xl" />

        <div className="relative p-6">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-[#814AC8] to-[#9D6EDB] rounded-2xl flex items-center justify-center mb-4 shadow-lg mx-auto">
            <FaLock className="w-8 h-8 text-white" />
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-2">
            Free Legal Consultation
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-6">
            Connect with our expert legal team. We'll analyze your project and provide tailored guidance within 24 hours.
          </p>

          {/* Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField('')}
              className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 rounded-xl outline-none transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-400 ${
                focusedField === 'name'
                  ? 'border-[#814AC8] shadow-lg shadow-purple-500/20'
                  : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            />

            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 rounded-xl outline-none transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-400 ${
                focusedField === 'email'
                  ? 'border-[#814AC8] shadow-lg shadow-purple-500/20'
                  : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            />

            <textarea
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField('')}
              rows={4}
              className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 rounded-xl outline-none transition-all duration-300 text-slate-900 dark:text-white placeholder-slate-400 resize-none ${
                focusedField === 'message'
                  ? 'border-[#814AC8] shadow-lg shadow-purple-500/20'
                  : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            />

            {/* Submit Button */}
            <button
              onClick={() => {
                /* handle submission here */
                console.log(formData)
                onClose()
              }}
              className="w-full bg-gradient-to-r from-[#814AC8] to-[#9D6EDB] text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              Request Free Consultation
            </button>

            {/* Disclaimer */}
            <p className="text-xs text-center text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
              <FaLock /> Your information is confidential and protected
            </p>
          </div>
        </div>
      </div>
    </Modal>
  )
}
function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fadeIn"
            onClick={onClose}
        >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            
            {/* Modal */}
            <div 
                className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl animate-slideUp overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:rotate-90"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {children}
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </div>
    )
}

export default AdviceModal
