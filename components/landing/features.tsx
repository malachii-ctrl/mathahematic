"use client"

import { motion } from "framer-motion"
import { MessageSquare, FileText, Image, LineChart, BookOpen, Lightbulb, Clock, Award } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "AI Math Chat",
    description: "Get step-by-step solutions and explanations for any math problem with our advanced AI assistant.",
  },
  {
    icon: FileText,
    title: "Smart Notes",
    description: "Organize your math notes with our powerful editor featuring LaTeX support and formula recognition.",
  },
  {
    icon: Image,
    title: "Image Upload",
    description: "Snap handwritten problems for instant solutions and explanations without typing equations.",
  },
  {
    icon: LineChart,
    title: "Interactive Graphing",
    description: "Visualize functions and data with our interactive graphing tools to better understand concepts.",
  },
  {
    icon: BookOpen,
    title: "Past Papers Archive",
    description: "Access a comprehensive collection of CSEC and CAPE math past papers with detailed solutions.",
  },
  {
    icon: Lightbulb,
    title: "Personalized Learning",
    description: "Receive customized study plans and practice problems based on your performance and goals.",
  },
  {
    icon: Clock,
    title: "Exam Countdown",
    description: "Stay on track with exam countdown timers and suggested study schedules tailored to your needs.",
  },
  {
    icon: Award,
    title: "Progress Tracking",
    description: "Monitor your improvement with detailed analytics and celebrate your achievements along the way.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Interactive Math Learning Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            EquaSolv provides a comprehensive suite of tools designed specifically for mathematics education.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

