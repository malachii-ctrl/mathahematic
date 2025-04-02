import { loadChat } from "@/lib/chat-store"
import { ChatInterface } from "@/components/chat/chat-interface"
import { ChatSidebar } from "@/components/chat/chat-sidebar"

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const messages = await loadChat(id)

  return (
    <div className="flex h-screen bg-white">
      <ChatSidebar activeId={id} />
      <ChatInterface id={id} initialMessages={messages} />
    </div>
  )
}

