
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-pink-200 transition-colors duration-300">Sidhhivinayak Technolabs</Link>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} font-bold md:flex md:space-x-6 absolute md:relative top-full left-0 right-0 bg-indigo-600 md:bg-transparent p-4 md:p-0`}>
            <Link href="/" className="block md:inline-block text-white hover:text-pink-200 transition-colors duration-300 py-2 md:py-0">Home</Link>
            <Link href="/services" className="block md:inline-block text-white hover:text-pink-200 transition-colors duration-300 py-2 md:py-0">Services</Link>
            <Link href="/about" className="block md:inline-block text-white hover:text-pink-200 transition-colors duration-300 py-2 md:py-0">About</Link>
            <Link href="/contact" className="block md:inline-block text-white hover:text-pink-200 transition-colors duration-300 py-2 md:py-0">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

