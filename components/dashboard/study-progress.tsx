"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function StudyProgress() {
  const topics = [
    { name: "Algebra", progress: 85, color: "bg-blue-600 dark:bg-blue-500" },
    { name: "Calculus", progress: 62, color: "bg-green-600 dark:bg-green-500" },
    { name: "Geometry", progress: 78, color: "bg-purple-600 dark:bg-purple-500" },
    { name: "Trigonometry", progress: 45, color: "bg-orange-600 dark:bg-orange-500" },
    { name: "Statistics", progress: 30, color: "bg-red-600 dark:bg-red-500" },
  ]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Study Progress</CardTitle>
        <CardDescription>Track your mastery across mathematics topics</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="topics">
          <TabsList className="mb-4">
            <TabsTrigger value="topics">By Topic</TabsTrigger>
            <TabsTrigger value="exams">Exam Readiness</TabsTrigger>
          </TabsList>

          <TabsContent value="topics" className="space-y-4">
            {topics.map((topic) => (
              <div key={topic.name} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{topic.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{topic.progress}%</div>
                </div>
                <Progress value={topic.progress} className="h-2" indicatorClassName={topic.color} />
              </div>
            ))}
          </TabsContent>

          <TabsContent value="exams">
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">CSEC Mathematics</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">72%</div>
                </div>
                <Progress value={72} className="h-2" indicatorClassName="bg-blue-600 dark:bg-blue-500" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">CAPE Pure Mathematics</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">58%</div>
                </div>
                <Progress value={58} className="h-2" indicatorClassName="bg-green-600 dark:bg-green-500" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">CAPE Applied Mathematics</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">45%</div>
                </div>
                <Progress value={45} className="h-2" indicatorClassName="bg-purple-600 dark:bg-purple-500" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

