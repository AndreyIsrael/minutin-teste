"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface Resources {
  money: number
  energy: number
  freeTime: number // em minutos
}

interface ResourceContextType {
  resources: Resources
  updateResources: (resources: Partial<Resources>) => void
  simulateScenario: (scenario: string) => { money: number; energy: number; time: number }
}

const ResourceContext = createContext<ResourceContextType | undefined>(undefined)

export function ResourceProvider({ children }: { children: ReactNode }) {
  const [resources, setResources] = useState<Resources>({
    money: 500,
    energy: 80,
    freeTime: 1200, // 20 horas em minutos
  })

  const updateResources = (newResources: Partial<Resources>) => {
    setResources((prev) => ({ ...prev, ...newResources }))
  }

  // Simula cenários e calcula impacto nos recursos
  const simulateScenario = (scenario: string) => {
    // IA simulada - em produção seria uma chamada à API
    const impact = {
      money: Math.random() * 200 - 100, // -100 a +100
      energy: Math.random() * 40 - 20, // -20 a +20 (%)
      time: Math.random() * 120 - 60, // -60 a +60 minutos
    }

    updateResources({
      money: Math.max(0, resources.money + impact.money),
      energy: Math.max(0, Math.min(100, resources.energy + impact.energy)),
      freeTime: Math.max(0, resources.freeTime + impact.time),
    })

    return impact
  }

  return (
    <ResourceContext.Provider value={{ resources, updateResources, simulateScenario }}>
      {children}
    </ResourceContext.Provider>
  )
}

export function useResources() {
  const context = useContext(ResourceContext)
  if (!context) {
    throw new Error("useResources must be used within ResourceProvider")
  }
  return context
}
