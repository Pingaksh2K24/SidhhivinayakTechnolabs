'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Contact Us
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <Input type="text" placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input type="text" placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={4} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                <p>123 Tech Street, Silicon Valley, CA 94000</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-4" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <p>info@sidhivinay.com</p>
              </div>
            </div>
            <div className="mt-8">
              <img src="/placeholder.svg?height=300&width=500" alt="Map" className="rounded-lg shadow-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

