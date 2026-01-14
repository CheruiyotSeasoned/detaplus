'use client';
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
interface Service {
  country: string;
  flag: string;
  title: string;
  price: string;
  features: string[];
  tax: string;
  timeline: string;
  url: string;
}

const ServicesSections = () => {
  const [activeMainTab, setActiveMainTab] = useState('company');
  const [activeSubTab, setActiveSubTab] = useState<{
    company: 'europe' | 'offshore' | 'asia';
    licenses: 'crypto' | 'forex' | 'gambling';
  }>({
    company: 'europe',
    licenses: 'crypto'
  });

  const services = {
    company: {
      europe: [
        {
          country: 'Estonia',
          flag: '🇪🇪',
          title: 'Company Formation in Estonia',
          price: 'from 450 €',
          features: [
            'Fast incorporation',
            '0% tax on undistributed income',
            'Entirely remote'
          ],
          tax: '0% tax',
          timeline: '5-10 days',
          url: '#'
        },
        {
          country: 'Poland',
          flag: '🇵🇱',
          title: 'Company Formation in Poland',
          price: 'from 1,500 €',
          features: [
            '0% Tax if undistributed',
            'A fast growing EU state',
            'Tech savvy workforce'
          ],
          tax: '19% tax',
          timeline: '20-30 days',
          url: '#'
        },
        {
          country: 'Cyprus',
          flag: '🇨🇾',
          title: 'Company Formation in Cyprus',
          price: 'from 1,950 €',
          features: [
            '0% taxation of dividends',
            'Top jurisdiction',
            'Not considered offshore'
          ],
          tax: '12.5% tax',
          timeline: '5-10 days',
          url: '#'
        },
        {
          country: 'Bulgaria',
          flag: '🇧🇬',
          title: 'Company Formation in Bulgaria',
          price: 'from 1,850 €',
          features: [
            'Ideal EU jurisdiction',
            '5-10% tax',
            'Fast and cheap process'
          ],
          tax: '5-10% tax',
          timeline: '1-2 weeks',
          url: '#'
        },
        {
          country: 'Malta',
          flag: '🇲🇹',
          title: 'Company Formation in Malta',
          price: 'from 2,870 €',
          features: [
            'Advantageous tax system',
            'Member of the EU',
            'Cheap and easy'
          ],
          tax: 'from 0% tax',
          timeline: '1-2 weeks',
          url: '#'
        }
      ],
      offshore: [
        {
          country: 'Costa Rica',
          flag: '🇨🇷',
          title: 'Company Formation in Costa Rica',
          price: 'from 2,350 €',
          features: [
            'Tax-free',
            'Discretion of board members',
            'Not listed as a tax haven!'
          ],
          tax: '0% tax',
          timeline: '1 week',
          url: '#'
        },
        {
          country: 'Seychelles',
          flag: '🇸🇨',
          title: 'Company Formation in Seychelles',
          price: 'from 790 €',
          features: [
            '0% Tax',
            'No reporting',
            'Cheap and easy'
          ],
          tax: '0% tax',
          timeline: '2-3 working days',
          url: '#'
        },
        {
          country: 'BVI',
          flag: '🇻🇬',
          title: 'Company Formation in British Virgin Islands',
          price: 'from 1,320 €',
          features: [
            'Top offshore jurisdiction',
            'Tax-free, no reporting',
            'High secrecy'
          ],
          tax: '0% tax',
          timeline: '2-5 working days',
          url: '#'
        },
        {
          country: 'Panama',
          flag: '🇵🇦',
          title: 'Company Formation in Panama',
          price: 'from 890 €',
          features: [
            '0% Tax',
            '100% Remote',
            'No filing'
          ],
          tax: '0% tax',
          timeline: '2-5 working days',
          url: '#'
        }
      ],
      asia: [
        {
          country: 'Hong Kong',
          flag: '🇭🇰',
          title: 'Company Formation in Hong Kong',
          price: 'from 750 €',
          features: [
            'Ideal offshore jurisdiction',
            'Advantageous taxation',
            'Fast and cheap process'
          ],
          tax: '16.5% tax',
          timeline: 'From 1 week',
          url: '#'
        },
        {
          country: 'UAE',
          flag: '🇦🇪',
          title: 'Company Formation and Business Setup in UAE',
          price: 'from 3,000 €',
          features: [
            'Competitive taxation',
            'Trusted and growing',
            'Easy to incorporate'
          ],
          tax: 'Emirat-dependant',
          timeline: '1-3 weeks',
          url: '#'
        },
        {
          country: 'Singapore',
          flag: '🇸🇬',
          title: 'Company Formation in Singapore',
          price: 'from 750 €',
          features: [
            'Top economy',
            'Low taxes',
            'Business friendly'
          ],
          tax: '17% tax',
          timeline: 'From 1 week',
          url: '#'
        }
      ]
    },
    licenses: {
      crypto: [
        {
          country: 'Costa Rica',
          flag: '🇨🇷',
          title: 'Crypto License in Costa Rica',
          price: 'from 2,350 USD',
          features: [
            'Cheapest crypto license',
            'Fast and easy incorporation',
            'Perfect for crypto gaming'
          ],
          tax: '0% tax',
          timeline: 'from 1 week',
          url: '#'
        },
        {
          country: 'Estonia',
          flag: '🇪🇪',
          title: 'MiCA CASP License in Estonia',
          price: 'from 1,420 €',
          features: [
            '0% Corporate Income Tax',
            'Cheap and fast process',
            'No travel needed'
          ],
          tax: '0% tax',
          timeline: 'from 4 months',
          url: '#'
        },
        {
          country: 'Georgia',
          flag: '🇬🇪',
          title: 'Crypto License in Georgia',
          price: 'on request',
          features: [
            'Fast crypto licensing',
            'Simple framework',
            'Free Zone advantages'
          ],
          tax: '0% tax',
          timeline: 'from 3 months',
          url: '#'
        }
      ],
      forex: [
        {
          country: 'Anjouan',
          flag: '🇰🇲',
          title: 'Forex License in Anjouan',
          price: 'on request',
          features: [
            'Forex and other financial services',
            'Cheapest & fastest FX license',
            'Simple requirements'
          ],
          tax: '0% tax',
          timeline: 'from 1 month',
          url: '#'
        },
        {
          country: 'Seychelles',
          flag: '🇸🇨',
          title: 'Forex License in Seychelles',
          price: 'on request',
          features: [
            'Operate a Forex platform',
            'Securities dealer and exchange',
            'Investment funds'
          ],
          tax: '1.5% tax',
          timeline: 'from 2 months',
          url: '#'
        }
      ],
      gambling: [
        {
          country: 'Curaçao',
          flag: '🇨🇼',
          title: 'Gambling License Curaçao',
          price: 'on request',
          features: [
            '2% tax',
            'Fast Execution',
            'Simple Process'
          ],
          tax: '2% tax',
          timeline: 'from 5 months',
          url: '#'
        },
        {
          country: 'Malta',
          flag: '🇲🇹',
          title: 'Gaming License in Malta',
          price: 'on request',
          features: [
            '5% tax',
            'Prestigious license',
            'For all type of games'
          ],
          tax: '5% tax',
          timeline: 'from 9 months',
          url: '#'
        }
      ]
    }
  };

  const ServiceCard = ({ service }: { service: Service }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 flex gap-4 h-full transition-all hover:bg-blue-600 hover:text-white group">
      <div className="flex flex-col items-center gap-2.5 w-8">
        <div className="w-8 h-6 rounded border border-gray-300 overflow-hidden flex items-center justify-center text-2xl group-hover:bg-white">
          {service.flag}
        </div>
        <div className="w-px bg-gray-300 flex-1"></div>
      </div>
      <div className="flex flex-col items-start gap-4 flex-1">
        <div className="flex flex-col gap-2">
          <a href={service.url} className="block">
            <h4 className="text-xl font-semibold">{service.title}</h4>
          </a>
          <span className="block text-lg text-blue-600 font-semibold group-hover:text-white">
            {service.price}
          </span>
        </div>
        <ul className="flex flex-col gap-2 flex-1">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex gap-2">
              <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 flex-wrap">
          <span className="text-sm px-4 py-1 rounded bg-white border text-black border-gray-300 group-hover:bg-white group-hover:text-black">
            {service.tax}
          </span>
          <span className="text-sm text-blue-600 bg-gray-100 px-4 py-1 rounded group-hover:bg-blue-500 group-hover:text-white">
            {service.timeline}
          </span>
        </div>
      </div>
    </div>
  );

  const currentServices = activeMainTab === 'company' 
    ? services.company[activeSubTab.company]
    : services.licenses[activeSubTab.licenses];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end gap-6 mb-8">
          <div className="flex flex-col gap-4">
            <span className="uppercase text-blue-600 font-semibold">
              Which jurisdiction and license to choose for your project
            </span>
            <h2 className="text-4xl font-bold">
              Top Company Formations and FinTech Licenses
            </h2>
          </div>
        </div>

        {/* Main Tabs */}
        <div className="mb-6">
          <div className="flex gap-6 border-b">
            <button
              onClick={() => setActiveMainTab('company')}
              className={`pb-4 px-2 font-semibold transition-colors ${
                activeMainTab === 'company'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Company formation
            </button>
            <button
              onClick={() => setActiveMainTab('licenses')}
              className={`pb-4 px-2 font-semibold transition-colors ${
                activeMainTab === 'licenses'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              FinTech Licenses
            </button>
          </div>
        </div>

        {/* Sub Tabs */}
        <div className="mb-8">
          <div className="flex gap-4 flex-wrap">
            {activeMainTab === 'company' ? (
              <>
                {(['europe', 'offshore', 'asia'] as const).map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveSubTab({ ...activeSubTab, company: region })}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      activeSubTab.company === region
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {region.charAt(0).toUpperCase() + region.slice(1)}
                  </button>
                ))}
              </>
            ) : (
              <>
                {(['crypto', 'forex', 'gambling'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveSubTab({ ...activeSubTab, licenses: type })}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      activeSubTab.licenses === type
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)} Licenses
                  </button>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentServices.map((service: Service, idx: React.Key | null | undefined) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSections;