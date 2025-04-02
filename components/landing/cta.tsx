"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 shadow-xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Start Solving Math Problems Today</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join students across the Caribbean who are improving their mathematics skills with EquaSolv.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Get Started Free
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

