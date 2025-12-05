"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Eye } from "lucide-react"

const FLASHCARDS = [
  {
    title: "Pensamento Computacional",
    question: "O que é Pensamento Computacional?",
    answer:
      "É uma abordagem para resolução de problemas que utiliza conceitos fundamentais da ciência da computação, incluindo decomposição, reconhecimento de padrões, abstração e algoritmos.",
  },
  {
    title: "Algoritmo",
    question: "O que é um algoritmo?",
    answer:
      "Um algoritmo é uma sequência ordenada de passos que descrevem como resolver um problema ou realizar uma tarefa.",
  },
  {
    title: "Abstração",
    question: "O que é abstração em programação?",
    answer:
      "Abstração é o processo de esconder detalhes complexos e mostrar apenas as características essenciais de um objeto ou sistema.",
  },
  {
    title: "Padrões",
    question: "O que são padrões na computação?",
    answer: "Padrões são soluções reutilizáveis para problemas comuns que ocorrem no design de software.",
  },
  {
    title: "Decomposição",
    question: "O que é decomposição?",
    answer: "Decomposição é dividir um problema complexo em partes menores e mais gerenciáveis.",
  },
]

export default function FlashcardsPage() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const currentCard = FLASHCARDS[currentIndex]
  const progress = ((currentIndex + 1) / FLASHCARDS.length) * 100

  const handleNext = () => {
    if (currentIndex < FLASHCARDS.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setIsFlipped(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <div className="border-b border-blue-100 bg-white sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 text-center flex-1">Flashcards</h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">{currentCard.title}</h2>
          <p className="text-gray-600">Teste seus conhecimentos sobre os conceitos fundamentais</p>
        </div>

        {/* Flashcard */}
        <div onClick={() => setIsFlipped(!isFlipped)} className="cursor-pointer">
          <Card className="border-gray-200 hover:shadow-lg transition-shadow min-h-64">
            <CardContent className="flex flex-col items-center justify-center p-8 h-full min-h-64">
              {!isFlipped ? (
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-teal-600 font-semibold">PERGUNTA</p>
                  <p className="text-xl font-semibold text-gray-900">{currentCard.question}</p>
                  <p className="text-xs text-gray-500 pt-4">Clique para ver a resposta</p>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <p className="text-sm text-teal-600 font-semibold">RESPOSTA</p>
                  <p className="text-lg text-gray-900 leading-relaxed">{currentCard.answer}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              {currentIndex + 1} de {FLASHCARDS.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <Button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            variant="outline"
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 h-11 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
          >
            Anterior
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === FLASHCARDS.length - 1}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-11 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Próximo
          </Button>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            onClick={() => router.push("/dashboard")}
            variant="outline"
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 h-11"
          >
            Sair
          </Button>
          <Button
            onClick={() => {
              setCurrentIndex(0)
              setIsFlipped(false)
            }}
            variant="outline"
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 h-11"
          >
            <Eye className="w-4 h-4 mr-2" />
            Recomeçar
          </Button>
        </div>
      </div>
    </main>
  )
}
