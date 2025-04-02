"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Save, Share } from "lucide-react"
import Link from "next/link"

export function SimpleNoteEditor() {
  const [title, setTitle] = useState("Mathematics Notes")
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  const handleSave = () => {
    setLastSaved(new Date())
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Link href="/" className="p-2 rounded-md hover:bg-gray-100">
            <ArrowLeft className="w-5 h-5 text-gray-500" />
          </Link>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-none text-lg font-medium focus-visible:ring-0 focus-visible:ring-offset-0 w-[300px]"
          />
        </div>
        <div className="flex items-center gap-2">
          {lastSaved && <span className="text-sm text-gray-500">Last saved {lastSaved.toLocaleTimeString()}</span>}
          <Button variant="outline" size="sm" onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Mathematics Notes</h1>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Quadratic Equations</h2>
            <p className="mb-4">The standard form of a quadratic equation is:</p>
            <div className="bg-blue-50 p-4 rounded-md mb-4 text-center">
              <p className="text-lg">ax² + bx + c = 0</p>
            </div>
            <p className="mb-4">The solutions can be found using the quadratic formula:</p>
            <div className="bg-blue-50 p-4 rounded-md mb-4 text-center">
              <p className="text-lg">x = (-b ± √(b² - 4ac)) / 2a</p>
            </div>

            <h3 className="text-xl font-medium mt-6 mb-3">Example Problem</h3>
            <p className="mb-2">Solve the equation: x² + 5x + 6 = 0</p>

            <div className="border-l-4 border-blue-500 pl-4 py-2 mb-4">
              <p className="mb-2">
                <strong>Step 1:</strong> Identify the values of a, b, and c.
              </p>
              <p>a = 1, b = 5, c = 6</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2 mb-4">
              <p className="mb-2">
                <strong>Step 2:</strong> Substitute these values into the quadratic formula.
              </p>
              <p>x = (-5 ± √(5² - 4×1×6)) / 2×1</p>
              <p>x = (-5 ± √(25 - 24)) / 2</p>
              <p>x = (-5 ± √1) / 2</p>
              <p>x = (-5 ± 1) / 2</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2 mb-4">
              <p className="mb-2">
                <strong>Step 3:</strong> Calculate the two solutions.
              </p>
              <p>x = (-5 + 1) / 2 = -4/2 = -2</p>
              <p>x = (-5 - 1) / 2 = -6/2 = -3</p>
            </div>

            <div className="bg-green-50 p-4 rounded-md border border-green-200">
              <p className="font-medium text-green-800">The solutions are x = -2 and x = -3</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Trigonometric Identities</h2>
            <p className="mb-4">Key trigonometric identities to remember:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium mb-2">Pythagorean Identities</p>
                <p>sin²θ + cos²θ = 1</p>
                <p>tan²θ + 1 = sec²θ</p>
                <p>1 + cot²θ = csc²θ</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium mb-2">Sum and Difference Formulas</p>
                <p>sin(α ± β) = sinα cosβ ± cosα sinβ</p>
                <p>cos(α ± β) = cosα cosβ ∓ sinα sinβ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

