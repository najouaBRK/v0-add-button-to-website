"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import QuoteFormModal from "./quote-form-modal"

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
  serviceName = "Général",
  packageName = "Demande de devis",
  packagePrice = "Sur devis",
  packageDescription = "Demande de devis personnalisé",
  className = "",
  children,
  variant = "default",
}: QuoteButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <Button variant={variant} className={className} onClick={handleClick}>
        {children}
      </Button>
      <QuoteFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName={serviceName} />
    </>
  )
}
