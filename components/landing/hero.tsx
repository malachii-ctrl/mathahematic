"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gray-900">Master </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                Mathematics
              </span>
              <span className="text-gray-900"> with AI</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              EquaSolv.ai helps students excel in mathematics with personalized AI tutoring tailored to SEA, CSEC, and
              CAPE curricula. Get step-by-step solutions instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/chat">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Math Chat
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Pricing
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white overflow-hidden flex items-center justify-center text-blue-600 font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-600">Joined by 1,500+ Caribbean students</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="bg-white p-4 rounded-t-xl border-b border-gray-200 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-sm font-medium text-gray-500">AI Math Assistant</div>
              </div>
              <div className="bg-white p-6">
                <div className="mb-4 text-gray-700">How do I solve the quadratic equation x² + 5x + 6 = 0?</div>
                <div className="p-4 bg-gray-50 rounded-lg mb-4">
                  <p className="text-sm text-gray-900 mb-2">To solve x² + 5x + 6 = 0, I'll use factoring:</p>
                  <ol className="text-sm text-gray-700 space-y-2 ml-4">
                    <li>1. Identify factors of 6 that add up to 5: 2 and 3</li>
                    <li>2. Rewrite as (x + 2)(x + 3) = 0</li>
                    <li>
                      3. Set each factor equal to zero:
                      <ul className="ml-4 mt-1">
                        <li>x + 2 = 0, so x = -2</li>
                        <li>x + 3 = 0, so x = -3</li>
                      </ul>
                    </li>
                    <li>4. The solutions are x = -2 and x = -3</li>
                  </ol>
                </div>
                <div className="flex">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Ask another question..."
                      className="w-full p-3 pr-10 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-blue-700/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

