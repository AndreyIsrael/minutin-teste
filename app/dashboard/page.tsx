"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useResources } from "@/contexts/resource-context"
import { ChevronLeft, Zap, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const router = useRouter()
  const { resources } = useResources()

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h${mins > 0 ? mins + "m" : ""}`
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <div className="border-b border-blue-100 bg-white sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Acompanhe sua produtividade</h2>
          <p className="text-gray-600">e gerencie suas tarefas</p>
        </div>

        {/* Resources Cards */}
        <div className="space-y-4">
          {/* Money */}
          <Card className="border-gray-200">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Dinheiro</p>
                  <p className="text-2xl font-bold text-gray-900">R$ {Math.round(resources.money)}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">Esta semana</span>
            </CardContent>
          </Card>

          {/* Energy */}
          <Card className="border-gray-200">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Energia</p>
                  <p className="text-2xl font-bold text-gray-900">{Math.round(resources.energy)} %</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">Hoje</span>
            </CardContent>
          </Card>

          {/* Free Time */}
          <Card className="border-gray-200">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tempo livre</p>
                  <p className="text-2xl font-bold text-gray-900">{formatTime(resources.freeTime)}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">Atual</span>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button
            onClick={() => router.push("/simulator")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base"
          >
            Simular cenário
          </Button>
          <Button
            onClick={() => router.push("/study")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base"
          >
            Estudar
          </Button>
        </div>

        {/* Tasks Link */}
        <div className="pt-4">
          <Link href="/tasks" className="text-blue-600 hover:text-blue-700 text-center block text-sm font-medium">
            Ver minhas tarefas
          </Link>
        </div>
      </div>
    </main>
  )
}
