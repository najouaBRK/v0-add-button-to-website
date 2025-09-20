"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FormspreeButtonProps {
  packageName: string
  packagePrice: string
  packageDescription: string
  serviceName: string
  className?: string
  children: React.ReactNode
}

export default function FormspreeButton({
  packageName,
  packagePrice,
  packageDescription,
  serviceName,
  className,
  children,
}: FormspreeButtonProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)

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
          message: `Nouvelle demande de package: ${packageName} (${packagePrice}) pour le service ${serviceName}. Description: ${packageDescription}`,
          _subject: `Nouvelle demande de package: ${packageName} - ${serviceName}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Button className={`${className} bg-green-500 hover:bg-green-600`} disabled>
        ✓ Demande envoyée !
      </Button>
    )
  }

  return (
    <Button className={className} onClick={handleSubmit} disabled={isSubmitting}>
      {isSubmitting ? "Envoi en cours..." : children}
    </Button>
  )
}
