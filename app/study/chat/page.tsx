"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Send, MoreVertical, BookOpen, FileText, HelpCircle } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  sender: "user" | "assistant"
  timestamp: string
}

export default function ChatPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Sou seu assistente de estudos. Como posso te ajudar hoje?",
      sender: "assistant",
      timestamp: "14:30",
    },
    {
      id: "2",
      text: "Preciso de ajuda com matemática",
      sender: "user",
      timestamp: "14:31",
    },
    {
      id: "3",
      text: "Perfeito! Qual tópico específico de matemática você gostaria de estudar? Posso ajudar com álgebra, geometria, cálculo e muito mais.",
      sender: "assistant",
      timestamp: "14:31",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Add user message
    const userMessage: Message = {
      id: String(messages.length + 1),
      text: newMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: String(messages.length + 2),
        text: "Estou analisando sua pergunta... Em uma aplicação real, aqui iria uma resposta da IA!",
        sender: "assistant",
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col">
      {/* Header */}
      <div className="border-b border-blue-100 bg-white sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-lg font-bold text-gray-900">Chat de Estudo</h1>
            <p className="text-xs text-teal-600">Assistente online</p>
          </div>
          <button className="text-gray-600 hover:text-gray-900">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-2xl mx-auto w-full">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-900 rounded-bl-none"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg rounded-bl-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-blue-100 bg-white sticky bottom-0 max-w-2xl mx-auto w-full">
        <div className="px-4 py-4 space-y-3">
          {/* Quick Actions */}
          <div className="flex gap-2 justify-center flex-wrap">
            <Button
              size="sm"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              <BookOpen className="w-4 h-4 mr-1" />
              Exercícios
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              <FileText className="w-4 h-4 mr-1" />
              Resumos
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              <HelpCircle className="w-4 h-4 mr-1" />
              Dúvidas
            </Button>
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              type="text"
              placeholder="Digite sua mensagem..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="border-gray-300 flex-1"
            />
            <Button
              type="submit"
              disabled={!newMessage.trim() || isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
              size="icon"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
