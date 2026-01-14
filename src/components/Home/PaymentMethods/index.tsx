import React from 'react';
import Image from 'next/image';

const PaymentMethodsSection = () => {
    const paymentMethods = [
        {
            name: 'Mastercard',
            image: '/images/api/mastercard.png',
            alt: 'Mastercard'
        },
        {
            name: 'MoneyGram',
            image: '/images/api/moneygram.png',
            alt: 'MoneyGram'
        },
        {
            name: 'Cash',
            image: '/images/api/cash.png',
            alt: 'Cash Payment'
        },
        {
            name: 'Crypto',
            image: '/images/api/crypto.png',
            alt: 'Cryptocurrency'
        },
        {
            name: 'Bank Transfer',
            image: '/images/api/bank.png',
            alt: 'Bank Transfer'
        },
        {
            name: 'SEPA',
            image: '/images/api/sepa.png',
            alt: 'SEPA'
        },
        {
            name: 'Visa',
            image: '/images/api/visa.png',
            alt: 'Visa'
        }
    ];

    return (
        <section className="bg-gray-50 py-8 lg:py-12">
            <div className="container mx-auto px-4 relative">
                {/* Decorative line with centered label */}
                <div className="w-full h-0.5 bg-gray-300"></div>
                <div className="flex justify-center relative -top-3">
                    <span className="px-3 block bg-gray-50 text-sm text-blue-600 font-semibold">
                        Payment methods
                    </span>
                </div>

                {/* Payment methods grid */}
                <div className="flex justify-center lg:justify-between items-center flex-wrap gap-x-8 gap-y-4 lg:gap-10">
                    {paymentMethods.map((method, index) => (
                        <div
                            key={index}
                            className="max-w-[80px] max-h-[80px] md:max-w-[200px] md:max-h-[200px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                        >
                            <Image
                                src={method.image}
                                alt={method.alt}
                                width={64}          // set your desired width
                                height={64}         // set your desired height
                                className="object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaymentMethodsSection;