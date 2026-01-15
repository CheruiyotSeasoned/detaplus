'use client';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  title: string;
  content: string[];
  listItems?: string[];
}

const faqData: FAQItem[] = [
  {
    question: "Working with Detaplus",
    title: "Your Digital Transformation Partner",
    content: [
      "When you connect with Detaplus, we assign a dedicated expert to understand your unique digital needs.",
      "Our specialists work closely with you to explore the technical requirements and business objectives of your project. We ask the right questions to uncover opportunities you might not have considered.",
      "We craft a customized digital solution that aligns with your goals, timeline, and budget. From initial consultation to final deployment, our team guides you through every phase of development.",
      "As your digital products go live, we remain your trusted partner. We provide ongoing support, maintenance, and optimization to ensure your solutions continue to deliver value as your business grows."
    ]
  },
  {
    question: "Our Approach",
    title: "Tailored Solutions for Unique Challenges",
    content: [
      "No two businesses are alike, and neither are their digital needs. While template solutions might work for simple projects, we believe every client deserves a thoughtful, customized approach.",
      "We take the time to understand your business model, target audience, and competitive landscape. This deep understanding allows us to create solutions that truly fit your requirements.",
      "Our team is recognized for professionalism, innovation, responsiveness, and honest communication. If your project needs a different approach than initially planned, we'll tell you upfront."
    ]
  },
  {
    question: "Transparency & Communication",
    title: "Clear Process, No Hidden Surprises",
    content: [
      "We know how frustrating it can be to work with agencies that overpromise and underdeliver. That's why transparency is at the core of everything we do.",
      "You'll work directly with our team members. You'll know who's handling each aspect of your project and can reach out anytime with questions or concerns.",
      "Our pricing is straightforward, our timelines are realistic, and our process is clearly explained. We keep you updated at every milestone with no hidden costs or false expectations."
    ]
  },
  {
    question: "Our Expertise",
    title: "Comprehensive Digital Services",
    content: [
      "Detaplus brings together specialists in web development, mobile applications, cloud architecture, and digital strategy. Our team has successfully delivered projects across various industries and technologies.",
      "We stay current with the latest technological advancements and best practices to ensure your solutions are built with modern, scalable approaches."
    ],
    listItems: [
      "Custom web application development with modern frameworks",
      "Mobile app development for iOS and Android platforms",
      "Cloud infrastructure setup and migration services",
      "API development and third-party integrations",
      "E-commerce platforms and payment system integration",
      "UI/UX design and user experience optimization",
      "DevOps and continuous deployment pipelines",
      "Technical consulting and digital strategy planning"
    ]
  },
  {
    question: "Getting Started",
    title: "Ready to Begin Your Digital Journey?",
    content: [
      "Have a clear project in mind? Schedule a free consultation call with our team to discuss your requirements and explore possible solutions.",
      "Still exploring your options? Browse our service pages to learn about our capabilities in web development, mobile apps, cloud solutions, and digital transformation.",
      "Not sure what you need? That's okay! Contact us anyway. We'll help you clarify your goals and recommend the best path forward for your business."
    ]
  }
];

const DetaplusFAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-dark" id="detaplus-faq-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold text-[#814AC8] dark:text-[#9D6EDB] uppercase tracking-wide mb-3">
            A dedicated team with multidisciplinary expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What can Detaplus do for you?
          </h2>
        </div>

        <div className="prose max-w-none mb-12 text-white leading-relaxed">
          <h3 className="text-2xl font-semibold text-white/80 mb-4">
            Digital Solutions, Development & Consulting
          </h3>
          <p>
            Navigating the digital landscape can be overwhelming. With countless technologies, frameworks, and approaches available, 
            its challenging to know which solution is right for your business. We use our expertise to identify your unique needs 
            and provide viable, scalable digital solutions.
          </p>
          <p>
            We always offer a free initial consultation to understand your vision and explore how we can help bring it to life.
          </p>
          <p>
            Our team stays at the forefront of technological innovation, keeping up with emerging trends, best practices, and 
            industry standards. Our goal is to deliver digital solutions that work seamlessly, helping you enter the market 
            quickly while benefiting from our extensive experience in software development and project management.
          </p>
          <p className="font-semibold text-[#814AC8] dark:text-[#9D6EDB]">
            In short: Detaplus saves you time and resources while delivering reliable, scalable digital solutions.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-semibold text-gray-900">
                  {item.question}
                </span>
                <svg 
                  className={`w-6 h-6 flex-shrink-0 text-blue-600 transition-transform duration-300 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    {item.content.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                    {item.listItems && (
                      <ul className="space-y-2 mt-4">
                        {item.listItems.map((listItem, lIndex) => (
                          <li key={lIndex} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetaplusFAQSection;