import type { Message } from "ai"
import { generateId } from "ai"

// In a real app, this would be a database
const chats = new Map<string, Message[]>()

export async function createChat(id?: string): Promise<string> {
  const chatId = id || generateId()
  if (!chats.has(chatId)) {
    chats.set(chatId, [])
  }
  return chatId
}

export async function loadChat(id: string): Promise<Message[]> {
  return chats.get(id) || []
}

export async function saveChat({ id, messages }: { id: string; messages: Message[] }): Promise<void> {
  chats.set(id, messages)
}

export async function listChats(): Promise<{ id: string; preview: string }[]> {
  return Array.from(chats.entries()).map(([id, messages]) => ({
    id,
    preview: messages.length > 0 ? messages[messages.length - 1].content.substring(0, 50) : "New conversation",
  }))
}

