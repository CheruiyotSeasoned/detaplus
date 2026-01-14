'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'
import { usePathname } from 'next/navigation'

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const path = usePathname()

  return (
    <div
      className="relative"
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      {/* Main Link */}
      <Link
        href={item.href}
        className={`text-base font-medium flex items-center gap-1 hover:text-primary ${
          path === item.href ? 'text-primary' : 'text-black'
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="ml-1"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {/* Dropdown */}
      {submenuOpen && item.submenu && (
        <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-lg z-50">
          {item.submenu.map((subItem, idx) => (
            <Link
              key={idx}
              href={subItem.href}
              className={`block px-4 py-2 text-sm ${
                path === subItem.href
                  ? 'bg-primary text-white'
                  : 'text-black hover:bg-primary hover:text-white'
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default HeaderLink
