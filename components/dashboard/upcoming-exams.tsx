"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function UpcomingExams() {
  const exams = [
    {
      title: "CSEC Mathematics Paper 1",
      date: "May 15, 2025",
      daysLeft: 45,
      readiness: 72,
    },
    {
      title: "CSEC Mathematics Paper 2",
      date: "May 18, 2025",
      daysLeft: 48,
      readiness: 65,
    },
    {
      title: "CAPE Pure Mathematics Unit 1",
      date: "June 5, 2025",
      daysLeft: 66,
      readiness: 58,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Exams</CardTitle>
        <CardDescription>Prepare for your mathematics examinations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {exams.map((exam, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <div className="font-medium mb-2">{exam.title}</div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  {exam.date}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  {exam.daysLeft} days left
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="font-medium">Readiness:</span>
                  <span
                    className={`ml-1 ${
                      exam.readiness >= 70
                        ? "text-green-600 dark:text-green-400"
                        : exam.readiness >= 50
                          ? "text-yellow-600 dark:text-yellow-400"
                          : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {exam.readiness}%
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  Study Plan <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

