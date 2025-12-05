"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de login - em produção seria autenticação real
    localStorage.setItem("user", JSON.stringify({ email }))
    router.push("/dashboard")
  }

  return (
    <div className="w-full max-w-md space-y-8">
      {/* Logo */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-12 h-12">
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
        <h1 className="text-3xl font-bold text-blue-900">Minutin</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Bem-vindo</h2>
          <p className="text-center text-gray-600">Entre na sua conta para continuar</p>
        </div>

        {/* Google Auth */}
        <Button type="button" variant="outline" className="w-full border-gray-300 hover:bg-gray-50 bg-transparent">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
          Entrar com Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">ou</span>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <div className="relative">
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pr-10 border-gray-300"
              required
            />
            <span className="absolute right-3 top-3 text-gray-400">@</span>
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10 border-gray-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link href="#" className="text-sm text-blue-600 hover:text-blue-700">
            Esqueceu a senha?
          </Link>
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12">
          Entrar
        </Button>
      </form>

      {/* Sign Up Link */}
      <div className="text-center">
        <span className="text-gray-600">Não tem uma conta? </span>
        <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
          Crie sua conta
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-center gap-4 text-xs text-gray-500">
        <Link href="#" className="hover:text-gray-700">
          Termos de Uso
        </Link>
        <span>•</span>
        <Link href="#" className="hover:text-gray-700">
          Política de Privacidade
        </Link>
      </div>
    </div>
  )
}
