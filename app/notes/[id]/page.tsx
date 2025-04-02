import { loadNote } from "@/lib/notes-store"
import { NoteEditor } from "@/components/notes/note-editor"
import { NotesSidebar } from "@/components/notes/notes-sidebar"

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const note = await loadNote(id)

  return (
    <div className="flex h-screen bg-white dark:bg-gray-950">
      <NotesSidebar activeId={id} />
      <NoteEditor id={id} initialContent={note.content} title={note.title} />
    </div>
  )
}

