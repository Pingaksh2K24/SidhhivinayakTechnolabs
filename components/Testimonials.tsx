'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Avatar from 'react-avatar'

const testimonials = [
  {
    name: 'Aditya Sapkal',
    role: 'Academic Director, Bright Path Academy',
    content: '"Sidhhivinayak Technolabs built a smart and efficient platform for our coaching institute. Tasks like class scheduling, student records, and fee tracking have become seamless. Their team is highly professional, responsive, and truly understands the needs of educational institutions. I highly recommend them!"',
  },
  {
    name: 'Ajay Wankhade',
    role: 'Founder & Owner, Sidhivinayak Coaching Classes',
    content: '"Before working with Sidhhivinayak Technolabs, our admin work used to take up a lot of time. But their software has streamlined everything from online admissions to result generation. The user interface is clean and modern, and our staff quickly adapted to it. Great work by the team!"',
  },
  {
    name: 'Mangesh Umarkar',
    role: 'Founder & Owner, Umarkar Science classes',
    content: '"We needed a customized student management system, and Sidhhivinayak Technolabs delivered exactly what we were looking for. Their team listens carefully, responds quickly, and delivers solutions that actually work. We can now send real-time updates to parents, which has increased trust in our institute."',
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
        <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <Avatar name={testimonials[currentIndex].name} size="80" round className="mb-4" />
              <p className="text-sm md:text-base text-gray-600 mb-4">{testimonials[currentIndex].content}</p>
              <h3 className="font-semibold text-indigo-700">{testimonials[currentIndex].name}</h3>
              <p className="text-xs md:text-sm text-pink-500">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={prevTestimonial}
            className="bg-indigo-100 p-2 rounded-full shadow-md text-indigo-600 hover:bg-indigo-200 transition duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-indigo-100 p-2 rounded-full shadow-md text-indigo-600 hover:bg-indigo-200 transition duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

