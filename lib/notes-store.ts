import { generateId } from "ai"

interface Note {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

// In a real app, this would be a database
const notes = new Map<string, Note>()

export async function createNote(id?: string): Promise<string> {
  const noteId = id || generateId()
  const now = new Date()

  if (!notes.has(noteId)) {
    notes.set(noteId, {
      id: noteId,
      title: "Untitled Document",
      content: "",
      createdAt: now,
      updatedAt: now,
    })
  }

  return noteId
}

export async function loadNote(id: string): Promise<Note> {
  const note = notes.get(id)

  if (!note) {
    // Return a default note if not found
    const now = new Date()
    return {
      id,
      title: "Untitled Document",
      content: "",
      createdAt: now,
      updatedAt: now,
    }
  }

  return note
}

export async function saveNote(note: Note): Promise<void> {
  note.updatedAt = new Date()
  notes.set(note.id, note)
}

export async function deleteNote(id: string): Promise<void> {
  notes.delete(id)
}

export async function listNotes(): Promise<Note[]> {
  return Array.from(notes.values()).sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
}

