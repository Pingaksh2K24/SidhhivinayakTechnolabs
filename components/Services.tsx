'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, Smartphone, GraduationCap , RadioTower, Server,PenTool, Lightbulb, Bot} from 'lucide-react'

const services = [
  {
    title: "School ERP",
    description: `A comprehensive ERP solution designed for educational institutions to manage admissions, 
                  attendance, fees, exams, and communication efficiently. Our system improves administration 
                  and student management.`,
    icon: GraduationCap,
  },
  {
    title: "Custom Software Development",
    description: `Tailor-made software solutions built to address specific business needs. Our robust 
                  and scalable applications enhance productivity, automation, and operational efficiency.`,
    icon: Code,
  },
  {
    title: "Web Development",
    description: `We create modern, responsive, and high-performance websites and web applications. 
                  Our UI/UX-focused solutions ensure a seamless and engaging user experience.`,
    icon: Globe,
  },
  {
    title: "Farming & Commercial Robotics Solutions",
    description: `At Sidhhivinayak Technolabs, we deliver smart, customized robotic solutions for agriculture and commercial use designed to automate manual tasks and enhance productivity, precision, and efficiency.`,
    icon: Bot,
  },
  {
    title: "RFID Solutions",
    description: `Offering advanced RFID-based tracking and security solutions for attendance, asset management, 
                  and access control. Our systems ensure accuracy, efficiency, and automation.`,
    icon: RadioTower,
  },
  {
    title: "Mobile App Development",
    description:`We design and develop innovative Android & iOS applications to enhance business operations and
                 customer engagement. Our mobile solutions are scalable, secure, and user-friendly.`,
    icon: Smartphone,
  },
  {
    title: "IT Hardware & System Sales",
    description: `Providing high-quality, custom-configured computer systems, servers, and IT infrastructure 
                  solutions tailored to business needs. Our reliable hardware ensures seamless performance 
                  and efficiency.`,
    icon: Server,
  },
  {
    title: "Digital & Content Services",
    description: `We offer professional content writing, SEO, and digital marketing services to enhance online
                  presence and brand visibility. Our solutions ensure engaging and impactful communication for 
                  businesses.`,
    icon: PenTool,
  },
  {
    title: "Consulting & Tech Support",
    description: `We provide expert IT consulting to help businesses choose the right technology solutions. 
                  Our dedicated tech support team ensures smooth operations with troubleshooting, maintenance,
                  and ongoing assistance.`,
    icon: Lightbulb,
  },
  
]

export function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-indigo-100 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-indigo-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-indigo-50 border-indigo-100 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-indigo-700">
                    {React.createElement(service.icon, { className: "h-6 w-6 text-pink-500" })}
                    <span className="text-lg md:text-xl">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

