"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useResources } from "@/contexts/resource-context"
import { ChevronLeft } from "lucide-react"

const PRESET_SCENARIOS = [
  { icon: "🎒", title: "Pegar Turno Extra", description: "Trabalhar 4 horas extras hoje" },
  { icon: "🏫", title: "Pular Academia", description: "Não ir à academia hoje" },
  { icon: "📚", title: "Estudar por 2h", description: "Sessão de estudo focado" },
]

const RECENT_SCENARIOS = [
  { icon: "📚", title: "Estudar por 2h", status: "Simulado há 1 hora • Aplicado" },
  { icon: "🏫", title: "Pular Academia", status: "Simulado há 3 horas" },
  { icon: "🎒", title: "Pegar Turno Extra", status: "Simulado ontem" },
]

export default function SimulatorPage() {
  const router = useRouter()
  const { simulateScenario } = useResources()
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null)
  const [showCustom, setShowCustom] = useState(false)
  const [customScenario, setCustomScenario] = useState("")

  const handleSimulate = (scenario: string) => {
    simulateScenario(scenario)
    router.push("/dashboard")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <div className="border-b border-blue-100 bg-white sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 flex-1 text-center">E Se...?</h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg text-gray-600">Simule diferentes cenários e veja</h2>
          <p className="text-gray-600">o impacto nas suas metas</p>
        </div>

        {!showCustom ? (
          <>
            {/* Preset Scenarios */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 mb-4">Escolha um Cenário</h3>
              {PRESET_SCENARIOS.map((scenario, idx) => (
                <Card
                  key={idx}
                  className="border-gray-200 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all"
                  onClick={() => {
                    setSelectedScenario(scenario.title)
                    handleSimulate(scenario.title)
                  }}
                >
                  <CardContent className="flex items-start gap-4 p-4">
                    <input
                      type="radio"
                      name="scenario"
                      className="mt-1"
                      onChange={() => {}}
                      checked={selectedScenario === scenario.title}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{scenario.icon}</span>
                        <p className="font-semibold text-gray-900">{scenario.title}</p>
                      </div>
                      <p className="text-sm text-gray-500">{scenario.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Simulations */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Simulações Recentes</h3>
                <button className="text-blue-600 text-sm hover:text-blue-700">Ver todas</button>
              </div>
              {RECENT_SCENARIOS.map((scenario, idx) => (
                <Card key={idx} className="border-gray-200">
                  <CardContent className="flex items-start gap-4 p-4">
                    <input type="radio" name="recent" className="mt-1" onChange={() => {}} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{scenario.icon}</span>
                        <p className="font-semibold text-gray-900">{scenario.title}</p>
                      </div>
                      <p className="text-xs text-gray-500">{scenario.status}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Custom Scenario Button */}
            <Button
              onClick={() => setShowCustom(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base mt-6"
            >
              Digite seu cenário
            </Button>
          </>
        ) : (
          <>
            {/* Custom Scenario Form */}
            <div className="space-y-6">
              <h3 className="text-center text-xl font-semibold text-gray-900">E Se...?</h3>
              <div>
                <label className="text-sm font-medium text-gray-900 mb-2 block">Cenário para simular:</label>
                <textarea
                  value={customScenario}
                  onChange={(e) => setCustomScenario(e.target.value)}
                  placeholder="Estudar 20 minutos no ônibus"
                  className="w-full border-2 border-blue-300 rounded-lg p-4 min-h-24 focus:outline-none focus:border-blue-600"
                />
              </div>

              <Button
                onClick={() => handleSimulate(customScenario)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base"
              >
                Simular Cenário
              </Button>

              <p className="text-center text-xs text-gray-500">
                Explore diferentes possibilidades
                <br />e tome decisões mais conscientes
              </p>
            </div>
          </>
        )}

        {/* Back to Dashboard */}
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
