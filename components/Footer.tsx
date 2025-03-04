'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-0 text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold">Sidhhivinayak Technolabs</h3>
            <p className="mt-2 text-sm md:text-base text-indigo-200">Innovative Software Solutions</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center md:justify-end space-x-4 mb-6 md:mb-0"
          >
            <a href="#" className="hover:text-pink-300 transition duration-300 text-sm md:text-base">Privacy Policy</a>
            <a href="#" className="hover:text-pink-300 transition duration-300 text-sm md:text-base">Terms of Service</a>
            <a href="/contact" className="hover:text-pink-300 transition duration-300 text-sm md:text-base">Contact Us</a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 md:mt-8 flex justify-center space-x-6"
        >
          <a href="#" className="text-indigo-300 hover:text-pink-300 transition duration-300 transform hover:scale-110">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-indigo-300 hover:text-pink-300 transition duration-300 transform hover:scale-110">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-indigo-300 hover:text-pink-300 transition duration-300 transform hover:scale-110">
            <LinkedIn size={20} />
          </a>
          <a href="#" className="text-indigo-300 hover:text-pink-300 transition duration-300 transform hover:scale-110">
            <Instagram size={20} />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-8 text-center text-xs md:text-sm text-indigo-200"
        >
          © {new Date().getFullYear()} Sidhhivinayak Technolabs Private Limited. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

