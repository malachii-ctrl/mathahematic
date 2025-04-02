"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Search, FileText, Settings, LogOut } from "lucide-react"

interface NotesSidebarProps {
  activeId: string
}

export function NotesSidebar({ activeId }: NotesSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock notes
  const notes = [
    {
      id: "default-note",
      title: "Mathematics Notes",
      updatedAt: new Date().toISOString(),
    },
    {
      id: "note-1",
      title: "Calculus Formulas",
      updatedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    },
    {
      id: "note-2",
      title: "Trigonometry Cheat Sheet",
      updatedAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    },
    {
      id: "note-3",
      title: "Algebra Practice Problems",
      updatedAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    },
  ]

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="w-64 h-screen border-r border-gray-200 bg-white flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <Link href="/notes">
          <Button className="w-full justify-start" variant="default">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Note
          </Button>
        </Link>
      </div>

      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search notes..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-2">
          <h3 className="px-2 py-1.5 text-sm font-medium text-gray-500">My Notes</h3>
          <div className="space-y-1">
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note) => (
                <Link
                  key={note.id}
                  href={`/notes`}
                  className={`block px-2 py-1.5 text-sm rounded-md ${
                    note.id === activeId ? "bg-blue-100 text-blue-900" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-start">
                    <FileText className="mr-2 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 truncate">
                      <div className="font-medium truncate">{note.title}</div>
                      <div className="text-xs text-gray-500">{new Date(note.updatedAt).toLocaleDateString()}</div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="px-2 py-1.5 text-sm text-gray-500">No notes found</div>
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

