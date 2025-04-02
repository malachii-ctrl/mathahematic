"use client"

import { motion } from "framer-motion"
import { BookOpen, Calculator } from "lucide-react"

export function CurriculumSupport() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Curriculum-Specific Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Tailored assistance for Caribbean examination mathematics
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <div className="bg-blue-600 p-4 flex items-center">
              <BookOpen className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-bold text-white">CSEC</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Secondary School Mathematics</p>
              <ul className="space-y-3">
                {[
                  "Algebra & Functions",
                  "Geometry & Trigonometry",
                  "Statistics & Probability",
                  "Vectors & Matrices",
                ].map((topic, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <div className="bg-blue-700 p-4 flex items-center">
              <Calculator className="w-8 h-8 text-white mr-3" />
              <h3 className="text-xl font-bold text-white">CAPE</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Advanced Mathematics</p>
              <ul className="space-y-3">
                {["Calculus", "Complex Numbers", "Differential Equations", "Numerical Methods"].map((topic, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 dark:text-gray-400"
          >
            We also support SEA Mathematics and University-level courses
          </motion.p>
        </div>
      </div>
    </section>
  )
}

