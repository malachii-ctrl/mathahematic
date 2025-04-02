"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Calculator,
  BookOpen,
  Clock,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react"

export function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/chat", icon: MessageSquare, label: "Chat" },
    { href: "/notes", icon: FileText, label: "Notes" },
    { href: "/calculator", icon: Calculator, label: "Calculator" },
    { href: "/resources", icon: BookOpen, label: "Resources" },
    { href: "/history", icon: Clock, label: "History" },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
              EquaSolv
            </span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">.ai</span>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                  <item.icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span>{item.label}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                J
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">John Doe</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Premium Plan</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}

