import React from 'react';
import Image from 'next/image';

interface Service {
    title: string;
    description: string;
    href: string;
    imgSrc: string;
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
}

const services: Service[] = [
    {
        title: 'Crypto Licenses',
        description: 'Find the best crypto license and legal set-up for your use case.',
        href: '/crypto-license/',
        imgSrc: '/wp-content/uploads/2023/11/Frame-30.png',
        imgAlt: 'Crypto Licenses image',
        imgWidth: 142,
        imgHeight: 327,
    },
    {
        title: 'Investment Licenses',
        description: 'Increase your market share & license your investment services.',
        href: '/investment-license/',
        imgSrc: '/wp-content/uploads/2023/11/new-icons.png',
        imgAlt: 'Investment Licenses image',
        imgWidth: 120,
        imgHeight: 120,
    },
    {
        title: 'Bank License, Payment Institution, EMI',
        description: 'Become a licensed Payment Institution (PI) or Electronic Money Institution (EMI) globally.',
        href: '/banking-license/',
        imgSrc: '/wp-content/uploads/2024/01/purse.svg',
        imgAlt: 'Bank License, Payment Institution, EMI image',
        imgWidth: 120,
        imgHeight: 121,
    },
    {
        title: 'Gambling & Gaming License',
        description: 'License your business: online casino, betting, lottery, mobile gambling, and much more.',
        href: '/gambling-license/',
        imgSrc: '/wp-content/uploads/2023/11/elevator.png',
        imgAlt: 'Gambling & Gaming License image',
        imgWidth: 120,
        imgHeight: 120,
    },
    {
        title: 'Bank Account Opening',
        description: 'Get assistance in opening a bank account for your existing company.',
        href: '/business-bank-account/',
        imgSrc: '/wp-content/uploads/2023/11/bag.png',
        imgAlt: 'Bank Account Opening image',
        imgWidth: 120,
        imgHeight: 121,
    },
    {
        title: 'Company Registration',
        description: 'Compare the best jurisdictions for doing business and register your company.',
        href: '/company-registration/',
        imgSrc: '/wp-content/uploads/2023/11/doc.png',
        imgAlt: 'Company Registration image',
        imgWidth: 152,
        imgHeight: 89,
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore what services our legal team may assist you with.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <a
                            key={index}
                            href={service.href}
                            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-blue-500"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-center mb-6 h-24">
                                    {/* <img
                                        src={service.imgSrc}
                                        alt={service.imgAlt}
                                        className="max-w-full max-h-full object-contain"
                                    /> */}
                                    <Image
                                        src={service.imgSrc}
                                        alt={service.imgAlt}
                                        className="object-contain"
                                        loading="lazy"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                                <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                                    <span>Learn more</span>
                                    <svg
                                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;