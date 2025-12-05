"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Cloud } from "lucide-react"
import { useState, useRef } from "react"

export default function StudyPage() {
  const router = useRouter()
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const handleGenerateFlashcards = () => {
    if (uploadedFile) {
      router.push("/study/processing?type=flashcards")
    }
  }

  const handleGenerateQuestions = () => {
    if (uploadedFile) {
      router.push("/study/processing?type=questions")
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
          <h1 className="text-2xl font-bold text-gray-900 flex-1 text-center">Upload de Arquivos</h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Upload de Arquivos</h2>
          <p className="text-gray-600">Envie seus documentos PDF ou capture fotos</p>
        </div>

        {/* Upload Area */}
        <Card
          className="border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <CardContent className="flex flex-col items-center justify-center p-12">
            <Cloud className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="font-semibold text-gray-900 text-center mb-1">Inserir arquivos ou fotos</h3>
            <p className="text-sm text-gray-600 text-center">e clique em uma das opções abaixo</p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={handleFileUpload}
              className="hidden"
            />
          </CardContent>
        </Card>

        {uploadedFile && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-gray-600">
              Arquivo selecionado: <span className="font-semibold">{uploadedFile.name}</span>
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleGenerateFlashcards}
            disabled={!uploadedFile}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Gerar flashcards
          </Button>
          <Button
            onClick={handleGenerateQuestions}
            disabled={!uploadedFile}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Questões simuladas
          </Button>
        </div>

        {/* Info */}
        <Card className="border-gray-200 bg-gray-50">
          <CardContent className="p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Formatos aceitos:</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• PDF: Documentos, relatórios, contratos</li>
              <li>• Fotos: JPG, PNG (máx. 10MB)</li>
              <li>• Arraste e solte ou use os botões</li>
            </ul>
          </CardContent>
        </Card>

        <div className="border-t border-gray-200 pt-4">
          <Button
            onClick={() => router.push("/study/chat")}
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 h-12 text-base"
          >
            Estude com o chat
          </Button>
        </div>

        {/* Back Button */}
        <Button
          onClick={() => router.push("/dashboard")}
          variant="outline"
          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 h-12 text-base"
        >
          Voltar ao início
        </Button>
      </div>
    </main>
  )
}
