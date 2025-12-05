"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function ProcessingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const type = searchParams.get("type")

  useEffect(() => {
    // Simula processamento de 2 segundos
    const timer = setTimeout(() => {
      router.push("/study/flashcards")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md text-center space-y-8">
        {/* Loading Spinner */}
        <div className="flex justify-center">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Processando seu arquivo...</h2>
          <p className="text-gray-600">Aguarde enquanto preparamos seu documento. Isso pode levar alguns instantes.</p>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </main>
  )
}
