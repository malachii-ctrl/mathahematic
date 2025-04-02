"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "43%",
    label: "CSEC Math Pass Rate",
    description: "Caribbean average in 2023",
  },
  {
    value: "85%",
    label: "EquaSolv User Pass Rate",
    description: "Students using our platform",
  },
  {
    value: "10,000+",
    label: "Active Students",
    description: "Across the Caribbean",
  },
  {
    value: "92%",
    label: "Satisfaction Rate",
    description: "From our student users",
  },
]

export function Stats() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                {stat.value}
              </div>
              <div className="text-lg font-medium mb-1 text-gray-900 dark:text-white">{stat.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

