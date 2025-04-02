"use client"

import { useState, useEffect } from "react"
import { RichTextEditor } from "@/components/tiptap/rich-text-editor"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowLeft, Save, Share } from "lucide-react"
import { content } from "@/lib/content"

interface NoteEditorProps {
  id: string
  initialContent: string
  title: string
}

export function NoteEditor({ id, initialContent, title: initialTitle }: NoteEditorProps) {
  const [editorContent, setEditorContent] = useState(content || initialContent)
  const [title, setTitle] = useState(initialTitle || "Mathematics Notes")
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  // Auto-save effect
  useEffect(() => {
    const saveTimer = setTimeout(() => {
      handleSave()
    }, 2000)

    return () => clearTimeout(saveTimer)
  }, [editorContent, title])

  const handleSave = () => {
    // In a real app, this would save to a database
    // For now, we just update the last saved timestamp
    setLastSaved(new Date())
  }

  return (
    <div className="flex flex-col w-full h-screen bg-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Link href="/" className="p-2 rounded-md hover:bg-gray-100">
            <ArrowLeft className="w-5 h-5 text-gray-500" />
          </Link>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-none text-lg font-medium focus-visible:ring-0 focus-visible:ring-offset-0 w-[300px]"
          />
        </div>
        <div className="flex items-center gap-2">
          {lastSaved && <span className="text-sm text-gray-500">Last saved {lastSaved.toLocaleTimeString()}</span>}
          <Button variant="outline" size="sm" onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </header>
      <div className="flex-1 overflow-auto">
        <RichTextEditor
          content={editorContent}
          onChange={setEditorContent}
          className="min-h-[calc(100vh-200px)] border-none focus-visible:ring-0"
        />
      </div>
    </div>
  )
}

