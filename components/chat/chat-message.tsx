import { Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"

interface ChatMessageProps {
  message: {
    role: "user" | "assistant"
    content: string
    id: string
  }
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={cn("flex items-start gap-4 py-4", message.role === "user" ? "justify-end" : "justify-start")}>
      {message.role === "assistant" && (
        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
          <Bot className="h-5 w-5 text-blue-600" />
        </div>
      )}

      <div
        className={cn(
          "rounded-lg px-4 py-3 max-w-[85%] sm:max-w-[75%]",
          message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900",
        )}
      >
        {message.role === "assistant" ? (
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "")
                return !inline && match ? (
                  <pre className="bg-gray-800 text-gray-100 rounded p-2 overflow-x-auto">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                ) : (
                  <code className={cn("bg-gray-200 px-1 py-0.5 rounded", className)} {...props}>
                    {children}
                  </code>
                )
              },
              table({ children }) {
                return (
                  <div className="overflow-x-auto my-4">
                    <table className="border-collapse border border-gray-300 w-full">{children}</table>
                  </div>
                )
              },
              th({ children }) {
                return <th className="border border-gray-300 bg-gray-200 px-4 py-2 text-left">{children}</th>
              },
              td({ children }) {
                return <td className="border border-gray-300 px-4 py-2">{children}</td>
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        ) : (
          <p className="whitespace-pre-wrap">{message.content}</p>
        )}
      </div>

      {message.role === "user" && (
        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <User className="h-5 w-5 text-white" />
        </div>
      )}
    </div>
  )
}

