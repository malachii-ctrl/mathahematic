"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, FileText, Calculator, BookOpen } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      icon: MessageSquare,
      title: "Quadratic Equations Chat",
      time: "Today, 10:30 AM",
      color: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: FileText,
      title: "Calculus Notes Updated",
      time: "Yesterday, 3:45 PM",
      color: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: Calculator,
      title: "Used Matrix Calculator",
      time: "Yesterday, 2:15 PM",
      color: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: BookOpen,
      title: "Viewed CSEC 2022 Paper",
      time: "2 days ago, 11:20 AM",
      color: "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30",
    },
    {
      icon: MessageSquare,
      title: "Trigonometry Chat",
      time: "3 days ago, 9:10 AM",
      color: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
    },
  ]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest interactions with EquaSolv</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full ${activity.color} flex items-center justify-center flex-shrink-0`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{activity.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

