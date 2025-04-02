"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatMessage } from "@/components/chat/chat-message"
import { ChatHeader } from "@/components/chat/chat-header"
import { ChatTools } from "@/components/chat/chat-tools"
import { Send, Paperclip, Mic } from "lucide-react"

interface ChatInterfaceProps {
  id: string
  initialMessages: any[]
}

export function ChatInterface({ id, initialMessages }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string; id: string }[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      role: "user" as const,
      content: input,
      id: `user-${Date.now()}`,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("quadratic") || input.toLowerCase().includes("x²")) {
        response =
          "To solve a quadratic equation like x² + 5x + 6 = 0:\n\n1. Factor it: (x + 2)(x + 3) = 0\n2. Set each factor to zero: x + 2 = 0 or x + 3 = 0\n3. Solve: x = -2 or x = -3"
      } else if (input.toLowerCase().includes("derivative") || input.toLowerCase().includes("calculus")) {
        response =
          "The derivative measures the rate of change of a function. For example, the derivative of f(x) = x² is f'(x) = 2x, which tells us the slope of the tangent line at any point on the parabola."
      } else if (input.toLowerCase().includes("triangle") || input.toLowerCase().includes("pythagoras")) {
        response =
          "The Pythagorean theorem states that in a right triangle, the square of the length of the hypotenuse equals the sum of squares of the other two sides: a² + b² = c²"
      } else {
        response =
          "I'm here to help with your math questions! Could you provide more details about what you're trying to solve?"
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
          id: `assistant-${Date.now()}`,
        },
      ])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col w-full h-screen bg-white">
      <ChatHeader />

      <div id="chat-container" ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-24 h-24 mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to EquaSolv Math Chat</h2>
            <p className="text-gray-600 max-w-md mb-6">
              Ask any mathematics question and get step-by-step solutions instantly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
              <Button
                variant="outline"
                className="justify-start text-left"
                onClick={() => setInput("How do I solve the quadratic equation x² + 5x + 6 = 0?")}
              >
                Solve x² + 5x + 6 = 0
              </Button>
              <Button
                variant="outline"
                className="justify-start text-left"
                onClick={() => setInput("Explain the law of sines and cosines")}
              >
                Explain law of sines and cosines
              </Button>
              <Button
                variant="outline"
                className="justify-start text-left"
                onClick={() => setInput("How do I find the derivative of sin(x)?")}
              >
                Find derivative of sin(x)
              </Button>
              <Button
                variant="outline"
                className="justify-start text-left"
                onClick={() => setInput("What is the formula for the area of a circle?")}
              >
                Area of a circle formula
              </Button>
            </div>
          </div>
        ) : (
          messages.map((message) => <ChatMessage key={message.id} message={message} />)
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ChatTools />

      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Button type="button" variant="ghost" size="icon" className="flex-shrink-0">
            <Paperclip className="h-5 w-5 text-gray-500" />
          </Button>
          <Input
            placeholder="Type your math question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button type="button" variant="ghost" size="icon" className="flex-shrink-0">
            <Mic className="h-5 w-5 text-gray-500" />
          </Button>
          <Button type="submit" disabled={isLoading || !input.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}

