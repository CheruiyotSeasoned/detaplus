import { HeaderItem } from '../../../../types/menu'


export const headerData: HeaderItem[] = [
  {
    label: 'Crypto Licenses',
    href: '/crypto-licenses',
    submenu: [
      { label: 'EU Licenses', href: '/crypto-licenses/eu' },
      { label: 'US Licenses', href: '/crypto-licenses/us' },
      { label: 'Other Jurisdictions', href: '/crypto-licenses/other' },
    ],
  },
  {
    label: 'Company Formation',
    href: '/company-formation',
    submenu: [
      { label: 'Start a Company', href: '/company-formation/start' },
      { label: 'Legal Structure', href: '/company-formation/structure' },
    ],
  },
  {
    label: 'FinTech Licenses',
    href: '/fintech-licenses',
    submenu: [
      { label: 'Payment Institutions', href: '/fintech-licenses/payment' },
      { label: 'E-Money Licenses', href: '/fintech-licenses/emoney' },
    ],
  },
  {
    label: 'Legal Services',
    href: '/legal-services',
    submenu: [
      { label: 'Contracts', href: '/legal-services/contracts' },
      { label: 'Compliance', href: '/legal-services/compliance' },
    ],
  },
  {
    label: 'Testimonials',
    href: '/testimonials',
    submenu: [],
  }
]
