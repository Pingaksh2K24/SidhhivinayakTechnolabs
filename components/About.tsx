'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Sidhhivinayak Technolabs 
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <img src="/placeholder.svg?height=400&width=600" alt="Sidhhivinayak Technolabs Team" className="rounded-lg shadow-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-6">
              At Sidhhivinayak Technolabs, our mission is to empower businesses through innovative software solutions. We strive to deliver cutting-edge technology that drives growth, efficiency, and success for our clients.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Expertise</h3>
            <p className="mb-6">
              With years of experience in the software industry, our team of skilled professionals excels in custom software development, data analytics, web and mobile app development, cloud solutions, and cybersecurity.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
            <p>
              We are committed to delivering high-quality, scalable, and user-friendly solutions that meet the unique needs of each client. Our focus on innovation and customer satisfaction sets us apart in the competitive world of software services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

