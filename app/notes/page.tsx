import { NoteEditor } from "@/components/notes/note-editor"
import { NotesSidebar } from "@/components/notes/notes-sidebar"

export default function NotesPage() {
  // Use a consistent ID instead of creating a new one
  const id = "default-note"

  return (
    <div className="flex h-screen bg-white">
      <NotesSidebar activeId={id} />
      <NoteEditor id={id} initialContent="" title="Untitled Document" />
    </div>
  )
}

