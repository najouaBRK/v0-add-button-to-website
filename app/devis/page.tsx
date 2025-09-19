"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Briefcase, Euro, FileText } from "lucide-react"

export default function DevisPage() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    servicePrincipal: "",
    servicesAdditionnels: [] as string[],
    budget: "",
    delai: "",
    description: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleAdditionalServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        servicesAdditionnels: [...prev.servicesAdditionnels, service],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        servicesAdditionnels: prev.servicesAdditionnels.filter((s) => s !== service),
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("_replyto", formData.email)
      formDataToSend.append("_cc", "najwaborak2@gmail.com")
      formDataToSend.append("_next", window.location.origin + "/devis?success=true")
      formDataToSend.append("_subject", "Nouvelle demande de devis - NOLIA")
      formDataToSend.append("prenom", formData.prenom)
      formDataToSend.append("nom", formData.nom)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("telephone", formData.telephone)
      formDataToSend.append("entreprise", formData.entreprise)
      formDataToSend.append("service_principal", formData.servicePrincipal)
      formDataToSend.append("services_additionnels", formData.servicesAdditionnels.join(", "))
      formDataToSend.append("budget", formData.budget)
      formDataToSend.append("delai", formData.delai)
      formDataToSend.append("description", formData.description)

      const response = await fetch("https://formspree.io/f/xkgvdzkd", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          prenom: "",
          nom: "",
          email: "",
          telephone: "",
          entreprise: "",
          servicePrincipal: "",
          servicesAdditionnels: [],
          budget: "",
          delai: "",
          description: "",
        })
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <CardTitle className="text-green-600">Demande envoyée !</CardTitle>
            <CardDescription>Nous vous répondrons sous 24h avec une proposition personnalisée.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            Demande de Devis
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Obtenez votre <span className="text-orange-500">devis gratuit</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Parlez-nous de votre projet et recevez une proposition personnalisée sous 24h
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Vos informations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Vos informations
              </CardTitle>
              <CardDescription>Dites-nous qui vous êtes pour que nous puissions vous recontacter</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="prenom">Prénom *</Label>
                <Input
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={(e) => setFormData((prev) => ({ ...prev, prenom: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="nom">Nom *</Label>
                <Input
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={(e) => setFormData((prev) => ({ ...prev, nom: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="telephone">Téléphone</Label>
                <Input
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, telephone: e.target.value }))}
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="entreprise">Entreprise</Label>
                <Input
                  id="entreprise"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={(e) => setFormData((prev) => ({ ...prev, entreprise: e.target.value }))}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Service principal */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Service principal *
              </CardTitle>
              <CardDescription>Quel est le service principal dont vous avez besoin ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Select
                value={formData.servicePrincipal}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, servicePrincipal: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seo-sea">SEO & SEA</SelectItem>
                  <SelectItem value="web-development">Développement Web</SelectItem>
                  <SelectItem value="social-media">Social Media</SelectItem>
                  <SelectItem value="analytics-data">Analytics & Data</SelectItem>
                  <SelectItem value="crm-automation">CRM & Automation</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Services additionnels */}
          <Card>
            <CardHeader>
              <CardTitle>Services additionnels</CardTitle>
              <CardDescription>Sélectionnez les services complémentaires qui vous intéressent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Design graphique",
                  "Création de logo",
                  "Rédaction de contenu",
                  "Photographie professionnelle",
                  "Formation à la gestion",
                  "Analytics et suivi",
                  "Intégration réseaux sociaux",
                  "Newsletter et emailing",
                ].map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={formData.servicesAdditionnels.includes(service)}
                      onCheckedChange={(checked) => handleAdditionalServiceChange(service, checked as boolean)}
                    />
                    <Label htmlFor={service} className="text-sm font-normal">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Budget et délai */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-blue-600" />
                Budget et délai
              </CardTitle>
              <CardDescription>Ces informations nous aident à vous proposer la meilleure solution</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="budget">Budget approximatif</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Sélectionnez votre budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moins-1000">Moins de 1 000€</SelectItem>
                    <SelectItem value="1000-5000">1 000€ - 5 000€</SelectItem>
                    <SelectItem value="5000-10000">5 000€ - 10 000€</SelectItem>
                    <SelectItem value="10000-25000">10 000€ - 25 000€</SelectItem>
                    <SelectItem value="plus-25000">Plus de 25 000€</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="delai">Délai souhaité</Label>
                <Select
                  value={formData.delai}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, delai: value }))}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Sélectionnez le délai" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgent (moins d'1 mois)</SelectItem>
                    <SelectItem value="1-3-mois">1 à 3 mois</SelectItem>
                    <SelectItem value="3-6-mois">3 à 6 mois</SelectItem>
                    <SelectItem value="plus-6-mois">Plus de 6 mois</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Description du projet */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Description de votre projet
              </CardTitle>
              <CardDescription>
                Décrivez-nous votre projet en détail pour que nous puissions mieux vous conseiller
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Décrivez votre projet, vos objectifs, votre cible, vos contraintes particulières..."
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                className="min-h-32"
              />
            </CardContent>
          </Card>

          {/* Submit button */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>
            <p className="text-sm text-gray-600 mt-4">Nous nous engageons à vous répondre sous 24h</p>
          </div>
        </form>
      </div>
    </div>
  )
}
