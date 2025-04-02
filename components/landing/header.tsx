"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
              EquaSolv
            </span>
            <span className="text-2xl font-bold text-gray-900">.ai</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Pricing
          </Link>
          <Link href="/curriculum" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Curriculum
          </Link>
          <Link href="/resources" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Resources
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Sign Up Free</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/curriculum" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Curriculum
            </Link>
            <Link href="/resources" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Resources
            </Link>
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/register" className="w-full">
                <Button className="w-full">Sign Up Free</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

