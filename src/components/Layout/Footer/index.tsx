import Link from 'next/link'
import Image from 'next/image'

interface MenuItem {
  title: string
  href: string
}

interface FooterColumn {
  title: string
  items: MenuItem[]
}

interface SocialLink {
  imgSrc: string
  link: string
  alt: string
  width?: number
  height?: number
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Company Formation',
    items: [
      { title: 'Costa Rica', href: '/company-registration/costa-rica/' },
      { title: 'Estonia', href: '/company-registration/estonia/' },
      { title: 'Lithuania', href: '/company-registration/lithuania/' },
      { title: 'Poland', href: '/company-registration/poland/' },
      { title: 'SVG', href: '/company-registration/saint-vincent-and-grenadines/' },
      { title: 'Seychelles', href: '/company-registration/seychelles/' },
      { title: 'UAE', href: '/company-registration/uae/' },
    ],
  },
  {
    title: 'Crypto Licenses',
    items: [
      { title: 'Argentina', href: '/crypto-license/argentina/' },
      { title: 'Costa Rica', href: '/crypto-license/costa-rica/' },
      { title: 'El Salvador', href: '/crypto-license/el-salvador/' },
      { title: 'Europe (MiCA)', href: '/mica-regulation/' },
      { title: 'Georgia VASP', href: '/crypto-license/georgia/' },
      { title: 'Georgia FIZ', href: '/crypto-license/georgia-fiz/' },
      { title: 'Poland', href: '/crypto-license/poland/' },
    ],
  },
  {
    title: 'FinTech Licenses',
    items: [
      { title: 'Banking – Lithuania', href: '/banking-license/lithuania/' },
      { title: 'Forex – Mauritius', href: '/investment-license/mauritius/' },
      { title: 'Forex – Seychelles', href: '/investment-license/seychelles/' },
      { title: 'Forex – SVG', href: '/investment-license/svg/' },
      { title: 'Gaming – Costa Rica', href: '/gambling-license/costa-rica/' },
      { title: 'Gaming – Nevis', href: '/gambling-license/nevis/' },
      { title: 'Gaming – Malta', href: '/gambling-license/malta/' },
    ],
  },
  {
    title: 'Legal Services',
    items: [
      { title: 'ICO Legal Support', href: '/ico-legal-services/' },
      { title: 'Legal Services', href: '/legal-services/' },
      { title: 'Solution – Crypto Exchange', href: '/crypto-exchange/' },
      { title: 'Solution – Crypto Casino', href: '/crypto-casino/' },
      { title: 'Solution – DEX', href: '/dex/' },
      { title: 'Solution – GameFi', href: '/gamefi/' },
      { title: 'Solution – On/Off-Ramping', href: '/on-off-ramping/' },
    ],
  },
  {
    title: 'Solutions',
    items: [
      { title: 'Crypto Licenses', href: '/crypto-license/' },
      { title: 'Banking Licenses', href: '/banking-license/' },
      { title: 'Fintech Licenses', href: '/fintech-license/' },
      { title: 'Forex Licenses', href: '/forex-license/' },
      { title: 'Gambling Licenses', href: '/gambling-license/' },
      { title: 'Investment Licences', href: '/investment-license/' },
      { title: 'Business Bank Accounts', href: '/business-bank-account/' },
    ],
  },
  {
    title: 'DetaPlus',
    items: [
      { title: 'About DetaPlus', href: '/about-us/' },
      { title: 'Blog', href: '/blog/' },
      { title: 'Testimonials', href: '/success-stories/' },
      { title: 'Careers', href: '/careers/' },
      { title: 'Terms of Service', href: '/terms-of-service/' },
      { title: 'Privacy Policy', href: '/privacy-policy/' },
      { title: 'Sanctions Policy', href: '/sanctions-policy/' },
    ],
  },
]

const socialLinks: SocialLink[] = [
  {
    imgSrc: '/images/social/telegram.png',
    link: 'https://t.me/DetaSoft',
    alt: 'Telegram',
    width: 44,
    height: 44,
  },
  {
    imgSrc: '/images/social/whatsapp.png',
    link: 'https://wa.me/254759441907',
    alt: 'WhatsApp',
    width: 44,
    height: 44,
  },
]

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 py-5 xl:py-8 xl:border-y border-gray-200/30">
          {footerColumns.map((col, idx) => (
            <div key={idx} className="border-b border-gray-200/30 xl:border-0">
              <h4 className="flex justify-between gap-4 py-2.5 xl:py-0 text-sm uppercase font-semibold xl:mb-4">
                {col.title}
              </h4>
              <nav className="hidden xl:block">
                <ul className="space-y-2">
                  {col.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-blue-600 text-sm block"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse xl:flex-row justify-between xl:items-center gap-6 py-5 xl:py-8">
          <div className="py-6 xl:py-0">
            <div className="max-w-[220px]">
              <Image
                src="/images/logo/logo.svg"
                alt="DetaPlus Logo"
                width={219}
                height={48}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:items-center gap-6">
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <Link href={social.link} key={i} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={social.imgSrc}
                    alt={social.alt}
                    width={social.width || 40}
                    height={social.height || 40}
                    className="rounded-full hover:opacity-80 transition"
                  />
                </Link>
              ))}
            </div>
            <button className="btn btn-blue mt-4 xl:mt-0">Contact Us</button>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-6 text-gray-600 text-sm">
          <p>
            DetaPlus is a licensed registrar of companies worldwide. Support for clients looking for international company formation, licensing, consulting, business planning, auditing and trust funds. DetaPlus associates with professionalism, high-value consultations, transparent processes and trust.
          </p>
          <p>
            DetaPlus is a trading name of STANDARD CORPORATE PARTNER, with principal business at Adams Arcade Ngong Road-Nairobi, Kenya and regulated with license number: RDST-1873. Pricing info is indicative and subject to change. Material on the website is for information purposes only and is not investment or legal advice.
          </p>
          <span className="font-semibold">©2026 DetaPlus</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
