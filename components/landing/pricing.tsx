"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    price: "$9",
    period: "/month",
    description: "Perfect for students who need basic math support",
    features: [
      "50 AI math solutions per month",
      "Basic equation editor",
      "SEA curriculum support",
      "Limited past papers access",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$19",
    period: "/month",
    description: "Ideal for students preparing for exams and needing higher support",
    features: [
      "Unlimited AI math solutions",
      "Advanced equation editor",
      "CSEC & CAPE curriculum support",
      "Image upload for handwritten problems",
      "Interactive graphing tools",
      "Full past papers archive",
      "Priority email support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Complete solution for advanced students and programs",
    features: [
      "Everything in Premium",
      "CAPE advanced mathematics",
      "University-level support",
      "Step-by-step solution generation",
      "Custom problem sets creation",
      "Advanced analytics",
      "1-hour response time",
      "24/7 priority support",
    ],
    cta: "Get Started",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-950">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Choose the Perfect Plan for You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Affordable options for students at every stage of their mathematical journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl border ${
                plan.popular ? "border-blue-500 dark:border-blue-400" : "border-gray-200 dark:border-gray-800"
              } bg-white dark:bg-gray-900 shadow-lg overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                <Link href="/register" className="w-full">
                  <Button variant={plan.popular ? "default" : "outline"} className="w-full">
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All plans include a 7-day free trial. No credit card required.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">Secure payments</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">Unlimited device access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

