"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Search, Filter, ChevronDown, ChevronUp } from "lucide-react"

// Mock data for past papers
const pastPapers = [
  { id: "1", title: "CSEC Mathematics Paper 1", year: "2023", type: "CSEC", subject: "Mathematics" },
  { id: "2", title: "CSEC Mathematics Paper 2", year: "2023", type: "CSEC", subject: "Mathematics" },
  { id: "3", title: "CAPE Pure Mathematics Unit 1", year: "2023", type: "CAPE", subject: "Pure Mathematics" },
  { id: "4", title: "CAPE Pure Mathematics Unit 2", year: "2023", type: "CAPE", subject: "Pure Mathematics" },
  { id: "5", title: "CSEC Mathematics Paper 1", year: "2022", type: "CSEC", subject: "Mathematics" },
  { id: "6", title: "CSEC Mathematics Paper 2", year: "2022", type: "CSEC", subject: "Mathematics" },
  { id: "7", title: "CAPE Pure Mathematics Unit 1", year: "2022", type: "CAPE", subject: "Pure Mathematics" },
  { id: "8", title: "CAPE Pure Mathematics Unit 2", year: "2022", type: "CAPE", subject: "Pure Mathematics" },
]

export function PastPaperViewer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredPapers = pastPapers.filter((paper) => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "all" || paper.type === selectedType
    const matchesYear = selectedYear === "all" || paper.year === selectedYear
    const matchesSubject = selectedSubject === "all" || paper.subject === selectedSubject

    return matchesSearch && matchesType && matchesYear && matchesSubject
  })

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search past papers..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filters</span>
            {isFilterOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>

        {isFilterOpen && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Exam Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="CSEC">CSEC</SelectItem>
                <SelectItem value="CAPE">CAPE</SelectItem>
                <SelectItem value="SEA">SEA</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Pure Mathematics">Pure Mathematics</SelectItem>
                <SelectItem value="Applied Mathematics">Applied Mathematics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {filteredPapers.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">No past papers found</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{paper.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded">
                        {paper.type}
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded">
                        {paper.year}
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded">
                        {paper.subject}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <Button variant="link" className="p-0 h-auto text-blue-600 dark:text-blue-400">
                    View Solutions
                  </Button>
                  <Button variant="link" className="p-0 h-auto text-blue-600 dark:text-blue-400">
                    Practice Questions
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

