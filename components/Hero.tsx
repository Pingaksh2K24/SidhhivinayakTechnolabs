'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const heroImages = [
  {
    src: '/image1.png',
    alt: 'Modern software development illustration 1',
  },
  {
    src: '/image2.png',
    alt: 'Modern software development illustration 2',
  },
  {
    src: '/image3.png',
    alt: 'Modern software development illustration 3',
  },
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % heroImages.length)
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)

  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left z-10 mb-8 md:mb-0"
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative Software Solutions
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering businesses with cutting-edge technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="secondary" size="lg" className="group bg-white text-indigo-600 hover:bg-pink-100 transition-colors duration-300">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 flex flex-col items-center relative"
        >
          <div className="relative w-full">
            <img
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              className="rounded-lg shadow-xl w-full object-cover h-[220px] md:h-[400px]"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-indigo-100/80 text-indigo-700 hover:bg-pink-200 p-2 rounded-full shadow-md z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-indigo-100/80 text-indigo-700 hover:bg-pink-200 p-2 rounded-full shadow-md z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="flex justify-center gap-2 mt-3">
              {heroImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-pink-400' : 'bg-indigo-200'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

