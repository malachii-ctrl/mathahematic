"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, LineChart, Activity, Table2, ChevronUp, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function ChatTools() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("calculator")

  return (
    <div className={cn("border-t border-gray-200 transition-all duration-300", isOpen ? "h-64" : "h-12")}>
      <div className="flex items-center justify-between px-4 h-12">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Math Tools</span>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="hidden sm:block">
            <TabsList>
              <TabsTrigger value="calculator" className="text-xs">
                <Calculator className="h-3.5 w-3.5 mr-1" />
                Calculator
              </TabsTrigger>
              <TabsTrigger value="graphing" className="text-xs">
                <LineChart className="h-3.5 w-3.5 mr-1" />
                Graphing
              </TabsTrigger>
              <TabsTrigger value="formulas" className="text-xs">
                <Activity className="h-3.5 w-3.5 mr-1" />
                Formulas
              </TabsTrigger>
              <TabsTrigger value="tables" className="text-xs">
                <Table2 className="h-3.5 w-3.5 mr-1" />
                Tables
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="h-8 w-8 p-0">
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
        </Button>
      </div>

      {isOpen && (
        <div className="p-4 h-52 overflow-y-auto">
          {activeTab === "calculator" && (
            <div className="grid grid-cols-4 gap-2 h-full">
              <div className="col-span-4 bg-gray-100 rounded-lg p-2 mb-2 h-12 flex items-center justify-end text-lg font-medium">
                0
              </div>
              {["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "0", ".", "=", "+"].map((key) => (
                <Button key={key} variant="outline" className="h-8">
                  {key}
                </Button>
              ))}
            </div>
          )}

          {activeTab === "graphing" && (
            <div className="h-full flex items-center justify-center bg-gray-100 rounded-lg">
              <p className="text-gray-500">Graphing tool will appear here</p>
            </div>
          )}

          {activeTab === "formulas" && (
            <div className="h-full overflow-y-auto">
              <h3 className="font-medium mb-2">Common Formulas</h3>
              <div className="space-y-2">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="font-medium">Quadratic Formula</p>
                  <p className="text-sm text-gray-700">x = (-b ± √(b² - 4ac)) / 2a</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="font-medium">Pythagorean Theorem</p>
                  <p className="text-sm text-gray-700">a² + b² = c²</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="font-medium">Area of a Circle</p>
                  <p className="text-sm text-gray-700">A = πr²</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tables" && (
            <div className="h-full overflow-y-auto">
              <h3 className="font-medium mb-2">Multiplication Table</h3>
              <div className="grid grid-cols-5 gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <React.Fragment key={i}>
                    {[...Array(5)].map((_, j) => (
                      <div key={`${i}-${j}`} className="bg-gray-100 p-1 rounded text-center">
                        {(i + 1) * (j + 1)}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

