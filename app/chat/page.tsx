import { ChatInterface } from "@/components/chat/chat-interface"
import { ChatSidebar } from "@/components/chat/chat-sidebar"

export default function ChatPage() {
  // Use a consistent ID instead of creating a new one
  const id = "default-chat"

  return (
    <div className="flex h-screen bg-white">
      <ChatSidebar activeId={id} />
      <ChatInterface id={id} initialMessages={[]} />
    </div>
  )
}

