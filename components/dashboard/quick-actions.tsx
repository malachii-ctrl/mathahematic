"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, FileText, Calculator, BookOpen } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      icon: MessageSquare,
      label: "New Chat",
      description: "Ask a math question",
      href: "/chat",
      color: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: FileText,
      label: "New Note",
      description: "Create study notes",
      href: "/notes",
      color: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: Calculator,
      label: "Calculator",
      description: "Solve equations",
      href: "/calculator",
      color: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: BookOpen,
      label: "Past Papers",
      description: "Practice with exams",
      href: "/resources",
      color: "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Start a new activity or continue your work</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action) => (
            <Link key={action.label} href={action.href}>
              <Button
                variant="outline"
                className="w-full h-auto py-4 flex flex-col items-center justify-center gap-2 text-left"
              >
                <div className={`w-10 h-10 rounded-full ${action.color} flex items-center justify-center`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">{action.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{action.description}</div>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

