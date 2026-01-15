'use client'

import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'
import { usePathname } from 'next/navigation'

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const path = usePathname()

  return (
    <Link
      href={item.href}
      className={`text-base font-medium hover:text-primary transition ${
        path === item.href ? 'text-primary' : 'text-white'
      }`}
    >
      {item.label}
    </Link>
  )
}

export default HeaderLink
