"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface QuoteFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteFormModal({ isOpen, onClose }: QuoteFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://formspree.io/f/mandrryl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          onClose()
        }, 3000)
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-2xl font-bold text-gray-900">Demander un devis personnalisé</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent>
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Demande envoyée avec succès !</h3>
              <p className="text-gray-600">
                Nous vous contacterons dans les plus brefs délais pour discuter de votre projet.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="Nouvelle demande de devis - NOLIA" />
              <input type="hidden" name="source" value="Formulaire de devis - Page d'accueil" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                  <Input name="prenom" placeholder="Votre prénom" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <Input name="nom" placeholder="Votre nom" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email professionnel *</label>
                <Input type="email" name="email" placeholder="votre.email@entreprise.com" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise *</label>
                <Input name="entreprise" placeholder="Nom de votre entreprise" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <Input name="telephone" placeholder="Votre numéro de téléphone" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Services qui vous intéressent</label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    "SEO & SEA",
                    "Analytics & Data",
                    "Email Marketing",
                    "Social Media",
                    "Web Development",
                    "CRM & Automation",
                    "Formations",
                    "Paid Advertising",
                  ].map((service) => (
                    <label key={service} className="flex items-center space-x-2">
                      <input type="checkbox" name="services" value={service} className="rounded border-gray-300" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget approximatif</label>
                <select name="budget" className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">Sélectionnez votre budget</option>
                  <option value="< 1 000€">Moins de 1 000€</option>
                  <option value="1 000€ - 5 000€">1 000€ - 5 000€</option>
                  <option value="5 000€ - 10 000€">5 000€ - 10 000€</option>
                  <option value="10 000€ - 25 000€">10 000€ - 25 000€</option>
                  <option value="> 25 000€">Plus de 25 000€</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Décrivez votre projet *</label>
                <Textarea
                  name="description_projet"
                  placeholder="Parlez-nous de vos objectifs, de vos défis actuels et de ce que vous souhaitez accomplir..."
                  rows={4}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Délai souhaité</label>
                <select name="delai" className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">Sélectionnez un délai</option>
                  <option value="Urgent (< 1 mois)">Urgent (moins d'1 mois)</option>
                  <option value="Court terme (1-3 mois)">Court terme (1-3 mois)</option>
                  <option value="Moyen terme (3-6 mois)">Moyen terme (3-6 mois)</option>
                  <option value="Long terme (> 6 mois)">Long terme (plus de 6 mois)</option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-medium"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de devis"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe concernant votre projet.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
