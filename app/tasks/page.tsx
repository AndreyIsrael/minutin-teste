"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

const STATS_DATA = [
  { name: "Estudos", value: 40, fill: "#3B82F6" },
  { name: "Trabalho", value: 30, fill: "#10B981" },
  { name: "Exercícios", value: 20, fill: "#F59E0B" },
  { name: "Outros", value: 10, fill: "#EF4444" },
]

const WEEK_SUMMARY = [
  { label: "Total de Tarefas", value: "5" },
  { label: "Horas Ocupadas", value: "12h 30min" },
  { label: "Dias com Atividades", value: "5 dias" },
]

const UPCOMING_TASKS = [
  { title: "Ler Capítulo 3", time: "Hoje - 14:00" },
  { title: "Fazer exercícios", time: "Amanhã - 10:00" },
  { title: "Revisar notas", time: "Quinta - 16:00" },
]

export default function TasksPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <div className="border-b border-blue-100 bg-white sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Minhas Tarefas</h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Weekly Calendar Section */}
        <Card className="border-gray-200">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold text-gray-900">Calendário Semanal</h3>
            <p className="text-sm text-gray-600">Organize suas tarefas e compromissos da semana</p>

            <div className="bg-gray-50 rounded-lg p-4 min-h-32 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <p className="text-sm">Visualização de calendário</p>
                <p className="text-xs text-gray-400 mt-2">Espaço reservado para calendário interativo</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Week Summary */}
        <Card className="border-gray-200">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold text-gray-900">Resumo da Semana</h3>
            <div className="space-y-3">
              {WEEK_SUMMARY.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-semibold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="border-gray-200">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold text-gray-900">Próximas Tarefas</h3>
            <div className="space-y-3">
              {UPCOMING_TASKS.map((task, idx) => (
                <div key={idx} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{task.title}</p>
                    <p className="text-xs text-gray-500">{task.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card className="border-gray-200">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold text-gray-900">Estatísticas</h3>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={STATS_DATA} layout="vertical" margin={{ top: 0, right: 30, left: 100, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={90} />
                <Tooltip />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  {STATS_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Back Button */}
        <Button
          onClick={() => router.push("/dashboard")}
          variant="outline"
          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 h-12"
        >
          Voltar ao Dashboard
        </Button>
      </div>
    </main>
  )
}
