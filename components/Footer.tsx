'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white border-t border-indigo-700">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Brand/Logo Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <Image src="/logo.png" alt="Sidhhivinayak Technolabs Logo" width={36} height={36} className="w-9 h-9 object-contain" priority />
              <span className="text-xl md:text-2xl font-bold">Sidhhivinayak Technolabs</span>
            </div>
            <p className="text-sm md:text-base text-indigo-200">Innovative Software Solutions</p>
            <div className="flex space-x-4 mt-3">
              <a
                href="https://www.linkedin.com/company/106668371/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-indigo-300 hover:text-pink-300 transition duration-300 transform hover:scale-110"
              >
                <LinkedIn size={22} />
              </a>
              <a
                href="https://www.instagram.com/sidhhivinayak_technolabs_2024"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-indigo-300 hover:text-pink-300 transition duration-300 transform hover:scale-110"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>
          {/* Quick Links Column */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-indigo-200 mb-2">Quick Links</h4>
            <nav className="flex flex-col space-y-1 text-sm md:text-base">
              <a href="/" className="hover:text-pink-300 transition duration-300">Home</a>
              <a href="/services" className="hover:text-pink-300 transition duration-300">Services</a>
              <a href="/about" className="hover:text-pink-300 transition duration-300">About</a>
              <a href="/contact" className="hover:text-pink-300 transition duration-300">Contact</a>
              <a href="/privacypolicy" className="hover:text-pink-300 transition duration-300">Privacy Policy</a>
              <a href="/termsofservice" className="hover:text-pink-300 transition duration-300">Terms of Service</a>
            </nav>
          </div>
          {/* Services Column */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-indigo-200 mb-2">Our Services</h4>
            <nav className="flex flex-col space-y-1 text-sm md:text-base">
              <a href="/services#erp" className="hover:text-pink-300 transition duration-300">Educational ERP</a>
              <a href="/services#custom" className="hover:text-pink-300 transition duration-300">Custom Software</a>
              <a href="/services#automation" className="hover:text-pink-300 transition duration-300">Business Automation</a>
              <a href="/services#web" className="hover:text-pink-300 transition duration-300">Web Development</a>
              <a href="/services#consulting" className="hover:text-pink-300 transition duration-300">IT Consulting</a>
            </nav>
          </div>
          {/* Connect with Us Column */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-indigo-200 mb-2">Connect with Us</h4>
            <div className="text-xs md:text-sm text-indigo-200 text-center md:text-right space-y-1">
              <div><span className="font-semibold">Address:</span> Near Government Polytechnic, Vithhal Nagar Khamgaon, District Buldhana, Maharashtra, 443404.</div>
              <div><span className="font-semibold">Phone:</span> <a href="tel:+917972392628" className="hover:text-pink-300 transition">+91 7972392628</a></div>
              <div><span className="font-semibold">Email:</span> <a href="mailto:info@sidhivinay.com" className="hover:text-pink-300 transition">info@sidhivinay.com</a></div>
            </div>
          </div>
        </div>
        <div className="mt-2 pt-4 text-center text-xs md:text-sm text-indigo-200">
          © {new Date().getFullYear()} Sidhhivinayak Technolabs Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

