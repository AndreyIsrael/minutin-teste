import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="20" cy="20" r="18" stroke="#1E40AF" strokeWidth="2.5" />
                <path
                  d="M14 20L18 24L27 15"
                  stroke="#1E40AF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-blue-900">Minutin</span>
          </div>

          {/* Action Button */}
          <Link href="/auth/login">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
              Teste o Minutin
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            ✨ SEU TEMPO VALE OURO
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Estude na <span className="text-blue-600">Correria:</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Desenvolva seu conhecimento em um <span className="text-yellow-500">Minutin</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cansado de ter que escolher entre trabalhar e estudar? O Minutin transforma seus intervalos e deslocamentos
            em poderosas sessões de aprendizado.
          </p>

          {/* Primary CTA */}
          <Link href="/auth/login">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2 text-base h-12 mx-auto">
              Teste o Minutin Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Por que o Minutin é perfeito para quem trabalha?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "●",
              title: "Conteúdo Planejado",
              description: "Conteúdo formatado, sequenciado e planejado para respeitar a sua rotina.",
            },
            {
              icon: "👥",
              title: "Fixação Garantida",
              description: "Fixação garantida de forma intuitiva com apoio de nosso Chatbot exclusivo.",
            },
            {
              icon: "📊",
              title: "Seu Sucesso Mapeado",
              description: "Sua jornada mapeada com histórico completo e progressão clara.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center gap-2">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2.5" />
                <path
                  d="M14 20L18 24L27 15"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-lg font-bold">Minutin</span>
          </div>
          <p className="text-center text-gray-400 mt-8">© 2025 Minutin. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
