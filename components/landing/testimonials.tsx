"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "EquaSolv helped me improve my CSEC math grade from a D to a B in just three months. The step-by-step explanations made complex problems so much easier to understand.",
    name: "Aisha Johnson",
    role: "CSEC Student, Trinidad",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "As a teacher, I recommend EquaSolv to all my students. The curriculum-specific content aligns perfectly with what they need to know for their exams.",
    name: "Michael Thompson",
    role: "Mathematics Teacher, Jamaica",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "The interactive graphing tools and past paper solutions were game-changers for my CAPE studies. I finally understood calculus concepts that had confused me for years.",
    name: "David Rodriguez",
    role: "CAPE Student, Barbados",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function Testimonials() {
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
            What Our Students Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Join thousands of Caribbean students improving their mathematics skills with EquaSolv
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-md"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 inline-block text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

