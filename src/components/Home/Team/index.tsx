'use client';

import React, { useState } from 'react';
import { Phone, Linkedin } from 'lucide-react';
import Image from 'next/image';

interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
    agreeData: boolean;
    agreeTerms: boolean;
    businessType?: string;
    services?: string[];
    jurisdictions?: string[];
}

const ContactSection: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        message: '',
        agreeData: false,
        agreeTerms: false,
        services: [],
        jurisdictions: [],
    });

    // Generic change handler
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const target = e.target;
        const { name, value, type } = target;

        if (type === 'checkbox') {
            const input = target as HTMLInputElement;
            setFormData(prev => ({
                ...prev,
                [name]: input.checked,
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    // Handle multi-select options for steps 1-3
    const handleOptionSelect = (step: number, value: string, multi = false) => {
        if (multi) {
            const key =
                step === 2 ? 'services' : step === 3 ? 'jurisdictions' : 'businessType';
            setFormData(prev => {
                const current = prev[key as keyof FormData] as string[] | string | undefined;
                if (Array.isArray(current)) {
                    return {
                        ...prev,
                        [key]: current.includes(value)
                            ? current.filter(v => v !== value)
                            : [...current, value],
                    };
                } else {
                    return { ...prev, [key]: value };
                }
            });
        } else {
            setFormData(prev => ({
                ...prev,
                businessType: value,
            }));
        }
    };

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Form submitted! Check console for data.');
    };

    // Helper for progress bar
    const stepPercent = () => (currentStep / 4) * 100;

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col gap-6 w-full mb-12">
                    <h2 className="text-4xl font-bold">
                        Get in touch with our expert: Brian Manono Matoke
                    </h2>
                    <p className="text-gray-700">
                        Our legal team is ready to assist you with company registration, licensing,
                        compliance, and more.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Multi-step Form */}
                    <div className="flex-1 lg:max-w-[795px]">
                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-semibold text-blue-600">
                                    STEP {currentStep}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {currentStep} of 4
                                </span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-600 transition-all duration-300"
                                    style={{ width: `${stepPercent()}%` }}
                                ></div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Step 1: Business Type */}
                            {currentStep === 1 && (
                                <div>
                                    <h3 className="text-xl font-bold mb-6">
                                        Tell us about your business
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { value: 'crypto', title: 'Crypto / Web3 Project', desc: 'Exchange, wallet, DeFi, tokenized assets' },
                                            { value: 'fintech', title: 'FinTech Company', desc: 'Payments, neobanking, EMI, or PSP projects' },
                                            { value: 'investment', title: 'Investment / Trading Platform', desc: 'Forex, brokerage, or wealth management' },
                                            { value: 'other', title: 'Other', desc: "Something else - we'll tailor your path" },
                                        ].map(option => (
                                            <div
                                                key={option.value}
                                                onClick={() => handleOptionSelect(1, option.value)}
                                                className={`cursor-pointer p-6 border-2 rounded-lg transition-all ${formData.businessType === option.value
                                                        ? 'border-blue-600 bg-blue-50'
                                                        : 'border-gray-200 hover:border-blue-600'
                                                    }`}
                                            >
                                                <h4 className="text-xl font-bold mb-2">{option.title}</h4>
                                                <p className="text-gray-600">{option.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Services */}
                            {currentStep === 2 && (
                                <div>
                                    <h3 className="text-xl font-bold mb-6">
                                        What do you need help with?
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        You can select multiple options
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { value: 'formation', title: 'Company Formation', desc: 'Incorporate and register your business' },
                                            { value: 'crypto-license', title: 'Crypto License', desc: 'Operate an exchange, wallet, or crypto platform' },
                                            { value: 'fintech-license', title: 'FinTech License', desc: 'Offer payment or financial services' },
                                            { value: 'gambling', title: 'Gambling / Gaming License', desc: 'Online casino, betting, or skill games' },
                                            { value: 'compliance', title: 'Legal Opinion or Compliance Support', desc: 'Regulatory opinion, AML, or ongoing compliance' },
                                            { value: 'not-sure', title: 'Not sure yet', desc: "I'd like expert advice" },
                                        ].map(option => (
                                            <div
                                                key={option.value}
                                                onClick={() => handleOptionSelect(2, option.value, true)}
                                                className={`cursor-pointer p-6 border-2 rounded-lg transition-all ${formData.services?.includes(option.value)
                                                        ? 'border-blue-600 bg-blue-50'
                                                        : 'border-gray-200 hover:border-blue-600'
                                                    }`}
                                            >
                                                <h4 className="text-xl font-bold mb-2">{option.title}</h4>
                                                <p className="text-gray-600">{option.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Jurisdiction */}
                            {currentStep === 3 && (
                                <div>
                                    <h3 className="text-xl font-bold mb-6">
                                        Where are you planning to operate?
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        You can select multiple options
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { value: 'europe', title: 'Europe', desc: 'Estonia, Lithuania, Poland, etc.' },
                                            { value: 'offshore', title: 'Offshore', desc: 'Cayman, Seychelles, BVI, etc.' },
                                            { value: 'asia', title: 'Asia / Middle East', desc: 'Dubai, Hong Kong, etc.' },
                                            { value: 'recommendation', title: "I'd like your recommendation", desc: 'Help me choose the best jurisdiction' },
                                        ].map(option => (
                                            <div
                                                key={option.value}
                                                onClick={() => handleOptionSelect(3, option.value, true)}
                                                className={`cursor-pointer p-6 border-2 rounded-lg transition-all ${formData.jurisdictions?.includes(option.value)
                                                        ? 'border-blue-600 bg-blue-50'
                                                        : 'border-gray-200 hover:border-blue-600'
                                                    }`}
                                            >
                                                <h4 className="text-xl font-bold mb-2">{option.title}</h4>
                                                <p className="text-gray-600">{option.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Contact Info */}
                            {currentStep === 4 && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">
                                        Great — lets prepare your tailored legal plan
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Leave your details and Brian Manono Matoke will reach out
                                        with a personalised overview.
                                    </p>

                                    {/* Name */}
                                    <div className="form-item mb-4">
                                        <label className="block mb-1">Your name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                            required
                                        />
                                    </div>

                                    {/* Phone & Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="form-item">
                                            <label>Your phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label>Your email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="form-item mb-4">
                                        <label>Your message (optional)</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Checkboxes */}
                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                name="agreeData"
                                                checked={formData.agreeData}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                required
                                            />
                                            <label>I agree to the{' '}
                                                <a href="/privacy-policy" className="underline text-blue-600">
                                                    Processing of Personal Data
                                                </a>
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                name="agreeTerms"
                                                checked={formData.agreeTerms}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                required
                                            />
                                            <label>I agree to the{' '}
                                                <a href="/terms-of-service" className="underline text-blue-600">
                                                    Terms of Service
                                                </a>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            )}

                            {/* Navigation */}
                            {currentStep < 4 && (
                                <div className="flex justify-between mt-6">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className={`px-6 py-2 rounded-lg border border-gray-300 ${currentStep === 1 ? 'invisible' : 'visible'
                                            }`}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Consultant Card */}
                    <div className="w-full lg:max-w-[427px]">
                        <div className="relative bg-white p-6 border border-gray-200 rounded-xl h-full">
                            <div className="absolute lg:static top-0 left-6 -translate-y-1/2 lg:translate-y-0 w-[100px] h-[100px] flex-none mb-4 lg:mb-0">
                                {/* <img
                                    src="/api/placeholder/150/150"
                                    alt="Brian Manono Matoke"
                                    className="w-full h-full object-cover rounded-lg"
                                /> */}
                                <Image
                                    src="/api/placeholder/150/150"
                                    alt="Brian Manono Matoke"
                                    width={64}          // set your desired width
                                    height={64}         // set your desired height
                                    className="object-contain"
                                    loading="lazy"
                                />
                            </div>
                            <div className="pt-8 lg:pt-0 flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <span className="block font-bold text-xl">
                                        Brian Manono Matoke
                                    </span>
                                    <span className="block text-sm text-blue-600">
                                        Lead Consultant - Partner
                                    </span>
                                    <p className="text-sm text-gray-700">
                                        FinTech & Legal specialist with 10+ years of experience
                                        in company formations, licensing, and regulatory compliance.
                                    </p>
                                </div>

                                {/* Contact Info */}
                                <div className="flex flex-col gap-2">
                                    <div className="hidden lg:block">
                                        <a
                                            href="https://www.linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-10 h-10 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                                        >
                                            <Linkedin className="w-5 h-5 text-gray-600" />
                                        </a>
                                    </div>

                                    <div className="absolute lg:hidden top-5 right-6">
                                        <a
                                            href="https://www.linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                                        >
                                            <Linkedin className="w-5 h-5 text-gray-600" />
                                        </a>
                                    </div>

                                    <a
                                        href="tel:+442045770974"
                                        className="flex items-center gap-2 text-sm px-3 py-2 rounded bg-gray-50 hover:bg-gray-100 transition-colors"
                                    >
                                        <Phone className="w-4 h-4 text-gray-600" />
                                        <span>
                                            <span className="text-gray-600">+44</span> 20 4577 0974
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
