
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-white hover:text-pink-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-200"
            aria-label="Sidhhivinayak Technolabs Home"
          >
            <Image src="/logo.png" alt="Sidhhivinayak Technolabs Logo" width={40} height={40} className="w-10 h-10 object-contain" priority />
            <span>Sidhhivinayak Technolabs</span>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-pink-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="main-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div
            id="main-menu"
            className={`${isMenuOpen ? 'block' : 'hidden'} font-bold md:flex md:space-x-6 absolute md:relative top-full left-0 right-0 bg-indigo-600 md:bg-transparent p-4 md:p-0`}
            role="menu"
          >
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`block md:inline-block text-white hover:text-pink-200 transition-colors duration-300 py-2 md:py-0 rounded focus:outline-none focus:ring-2 focus:ring-pink-200 ${pathname === link.href ? 'underline decoration-4 decoration-pink-200 underline-offset-4' : ''}`}
                aria-current={pathname === link.href ? 'page' : undefined}
                tabIndex={0}
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

