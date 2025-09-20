"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface QuoteButtonProps {
  serviceName?: string
  packageName?: string
  packagePrice?: string
  packageDescription?: string
  className?: string
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link"
}

export default function QuoteButton({
  serviceName = "Service général",
  packageName = "Demande de devis",
  packagePrice = "Sur devis",
  packageDescription = "Demande de devis personnalisé",
  className = "",
  children,
  variant = "default",
}: QuoteButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)

    try {
      const response = await fetch("https://formspree.io/f/mandrryl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service: serviceName,
          package: packageName,
          price: packagePrice,
          description: packageDescription,
          message: `Nouvelle demande de devis pour ${serviceName} - ${packageName} (${packagePrice}): ${packageDescription}`,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <Button className={`${className} bg-green-500 hover:bg-green-600`} disabled>
        ✓ Demande envoyée !
      </Button>
    )
  }

  return (
    <Button variant={variant} className={className} onClick={handleSubmit} disabled={isLoading}>
      {isLoading ? "Envoi en cours..." : children}
    </Button>
  )
}
