"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, ArrowRight } from "lucide-react"

export function PastPapers() {
  const papers = [
    {
      title: "CSEC Mathematics Paper 1 (2023)",
      type: "CSEC",
      subject: "Mathematics",
      downloads: 1245,
    },
    {
      title: "CSEC Mathematics Paper 2 (2023)",
      type: "CSEC",
      subject: "Mathematics",
      downloads: 1102,
    },
    {
      title: "CAPE Pure Mathematics Unit 1 (2023)",
      type: "CAPE",
      subject: "Pure Mathematics",
      downloads: 876,
    },
    {
      title: "CAPE Pure Mathematics Unit 2 (2023)",
      type: "CAPE",
      subject: "Pure Mathematics",
      downloads: 754,
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Past Papers</CardTitle>
          <CardDescription>Practice with previous examination papers</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          View All <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{paper.title}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-xs px-2 py-0.5 rounded">
                    {paper.type}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{paper.downloads} downloads</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

