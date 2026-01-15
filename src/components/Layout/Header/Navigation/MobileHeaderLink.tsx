'use client'

import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  return (
    <Link
      href={item.href}
      className="block w-full py-2 text-white text-base font-medium hover:text-primary transition"
    >
      {item.label}
    </Link>
  )
}

export default MobileHeaderLink
