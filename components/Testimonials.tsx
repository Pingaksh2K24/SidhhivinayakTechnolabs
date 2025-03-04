'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Tech Innovators',
    content: 'Sidhhivinayak Technolabs has transformed our business with their innovative software solutions.',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, Data Dynamics',
    content: 'The data analytics solution provided by Sidhhivinayak Technolabs has given us invaluable insights.',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Mike Johnson',
    role: 'Founder, WebWizards',
    content: 'Working with Sidhhivinayak Technolabs on our web development project was a game-changer.',
    avatar: '/placeholder.svg?height=100&width=100',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-indigo-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-indigo-800"
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4"
              />
              <p className="text-sm md:text-base text-gray-600 mb-4">{testimonials[currentIndex].content}</p>
              <h3 className="font-semibold text-indigo-700">{testimonials[currentIndex].name}</h3>
              <p className="text-xs md:text-sm text-pink-500">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:left-4 transform -translate-y-1/2 bg-indigo-100 p-2 rounded-full shadow-md text-indigo-600 hover:bg-indigo-200 transition duration-300"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:right-4 transform -translate-y-1/2 bg-indigo-100 p-2 rounded-full shadow-md text-indigo-600 hover:bg-indigo-200 transition duration-300"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

