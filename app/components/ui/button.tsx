import React from "react"

// 1. CORREÇÃO DE TIPAGEM: Adicionando "icon"
export type ButtonSize = "sm" | "md" | "lg" | "icon"
export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize
    variant?: ButtonVariant
    className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ size = "md", variant = "primary", className = "", children, ...props }, ref) => {
        
        // 2. CORREÇÃO DE CLASSE: Adicionando a lógica para "icon"
        const sizeClasses =
            size === "lg" 
                ? "px-8 py-6 text-base" 
                : size === "sm" 
                    ? "px-3 py-1 text-sm" 
                    : size === "icon" 
                        ? "h-10 w-10 p-0" // Estilo para botão de ícone (quadrado)
                        : "px-4 py-2" // Default (md)

        // 3. CORREÇÃO VISUAL: Mudando a cor do texto/borda do "outline" de branco para cinza
        const variantClasses =
            variant === "secondary"
                ? "bg-gray-700 hover:bg-gray-600"
                : variant === "ghost"
                ? "bg-transparent"
                : variant === "outline"
                ? "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50" // Corrigido para visibilidade
                : "bg-blue-600 hover:bg-blue-700"

        const base = "inline-flex items-center justify-center rounded-md font-medium"

        return (
            <button ref={ref} className={`${base} ${sizeClasses} ${variantClasses} ${className}`} {...props}>
                {children}
            </button>
        )
    }
)

Button.displayName = "Button"

export default Button