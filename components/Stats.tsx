'use client'

import { motion } from 'framer-motion'
import { Users, Code, Award } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Code, value: '1000+', label: 'Projects Completed' },
  { icon: Award, value: '50+', label: 'Awards Won' },
]

export function Stats() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <stat.icon className="h-12 w-12 mb-4" />
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-xl">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

