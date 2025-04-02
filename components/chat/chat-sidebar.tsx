"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Search, MessageSquare, Settings, LogOut } from "lucide-react"

interface ChatSidebarProps {
  activeId: string
}

export function ChatSidebar({ activeId }: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock chat history
  const chats = [
    { id: "default-chat", preview: "Welcome to EquaSolv Math Chat" },
    { id: "chat-1", preview: "How do I solve quadratic equations?" },
    { id: "chat-2", preview: "Explain the Pythagorean theorem" },
    { id: "chat-3", preview: "What is the derivative of sin(x)?" },
  ]

  const filteredChats = chats.filter((chat) => chat.preview.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="w-64 h-screen border-r border-gray-200 bg-white flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <Link href="/chat">
          <Button className="w-full justify-start" variant="default">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </Link>
      </div>

      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search conversations..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-2">
          <h3 className="px-2 py-1.5 text-sm font-medium text-gray-500">Recent Conversations</h3>
          <div className="space-y-1">
            {filteredChats.length > 0 ? (
              filteredChats.map((chat) => (
                <Link
                  key={chat.id}
                  href={`/chat`}
                  className={`block px-2 py-1.5 text-sm rounded-md ${
                    chat.id === activeId ? "bg-blue-100 text-blue-900" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-start">
                    <MessageSquare className="mr-2 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="truncate">{chat.preview}</span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="px-2 py-1.5 text-sm text-gray-500">No conversations found</div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
              J
            </div>
            <div>
              <div className="font-medium text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">Premium Plan</div>
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
  )
}

