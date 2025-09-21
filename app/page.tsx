"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useEffect, useState } from "react"
import QuoteFormModal from "@/components/QuoteFormModal"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <section className="bg-[#0f1729] text-white py-20 md:py-32 px-4 relative overflow-hidden">
        {/* Animated background elements inspired by digitalisim space theme */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-32 left-20 w-3 h-3 bg-orange-300 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/3 w-2 h-2 bg-orange-200 rounded-full animate-pulse"
            style={{ animationDelay: "2.5s" }}
          ></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          {/* Badge similar to digitalisim */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}>
            <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-300 px-6 py-3 rounded-full text-sm font-medium mb-8">
              ⭐ Experts en Transformation Digitale
            </span>
          </div>

          {/* Main heading matching digitalisim structure */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            Experts en Transformation Digitale,
            <br />
            <span className="text-orange-400">Intégration CRM HubSpot, Data et</span>
            <br />
            <span className="text-orange-400">Agents IA</span>
          </h1>

          {/* Subtitle matching digitalisim */}
          <p
            className={`text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            Embarquez dans la galaxie de la transformation digitale capable de booster votre croissance sur l'ensemble
            de votre parcours de vente.
          </p>

          {/* CTA buttons matching digitalisim layout */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          >
            <Button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              Découvrir nos digitalisim 🚀
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 bg-transparent"
            >
              En savoir plus sur DIGITALISIM
            </Button>
          </div>

          {/* Astronaut illustration placeholder */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full flex items-center justify-center animate-float">
                <div className="text-8xl">🚀</div>
              </div>
              {/* Floating elements around the rocket */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full animate-float-reverse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f1729] py-12 border-t border-gray-700/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm font-medium mb-6">Ils nous font confiance</p>
          </div>

          {/* Scrolling logos container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center justify-center">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-[120px] h-16 bg-white/10 rounded-lg px-4 backdrop-blur-sm">
                <img
                  src="/hubspot-logo.png"
                  alt="HubSpot"
                  className="max-w-full max-h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center min-w-[120px] h-16 bg-white/10 rounded-lg px-4 backdrop-blur-sm">
                <img
                  src="/odoo-logo.png"
                  alt="Odoo"
                  className="max-w-full max-h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center min-w-[120px] h-16 bg-white/10 rounded-lg px-4 backdrop-blur-sm">
                <span className="text-white font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity">
                  Google
                </span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] h-16 bg-white/10 rounded-lg px-4 backdrop-blur-sm">
                <span className="text-white font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity">
                  Meta
                </span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] h-16 bg-white/10 rounded-lg px-4 backdrop-blur-sm">
                <span className="text-white font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] h-16 bg-white/10 rounded-lg px-4 backdrop-blur-sm">
                <span className="text-white font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity">
                  Zapier
                </span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] h-16 bg-white/10 rounded-lg px-4 backdrop-blur-sm">
                <span className="text-white font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity">
                  Mailchimp
                </span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] h-16 bg-white/10 rounded-lg px-4 backdrop-blur-sm">
                <span className="text-white font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity">
                  Salesforce
                </span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] h-16 bg-white/10 rounded-lg px-4 backdrop-blur-sm">
                <span className="text-white font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity">
                  Shopify
                </span>
              </div>
              <div className="flex items-center justify-center min-w-[120px] h-16 bg-white/10 rounded-lg px-4 backdrop-blur-sm">
                <span className="text-white font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity">
                  WordPress
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0f1729] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-32 left-20 w-3 h-3 bg-orange-300 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-orange-400 font-semibold">+ DE VISITEURS</span>
              <span className="text-orange-400 font-semibold">+ DE PROSPECTS</span>
              <span className="text-orange-400 font-semibold">+ DE CLIENTS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Partez à la découverte de nos univers CRM, Web, Vidéo, Data & IA
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left side - Astronaut illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full flex items-center justify-center animate-float">
                  <div className="text-9xl">🚀</div>
                </div>
                {/* Floating UI elements around astronaut */}
                <div className="absolute -top-8 -right-8 w-16 h-12 bg-orange-500 rounded-lg flex items-center justify-center animate-float-reverse">
                  <span className="text-white text-xs font-bold">CRM</span>
                </div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center animate-float">
                  <span className="text-white text-xs font-bold">DATA</span>
                </div>
                <div className="absolute top-1/2 -left-12 w-16 h-12 bg-green-500 rounded-lg flex items-center justify-center animate-float-reverse">
                  <span className="text-white text-xs font-bold">WEB</span>
                </div>
                <div className="absolute top-1/4 -right-12 w-14 h-14 bg-purple-500 rounded-lg flex items-center justify-center animate-float">
                  <span className="text-white text-xs font-bold">IA</span>
                </div>
              </div>
            </div>

            {/* Right side - Universe cards */}
            <div className="space-y-6">
              {/* Univers CRM */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">CRM</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Univers CRM</h3>
                    <p className="text-gray-300 text-sm">
                      DIGITALISIM est une Agence Partenaire HubSpot Elite. Vous serez donc accompagné sur des experts
                      certifiés qui ont déjà déployé plusieurs centaines de projets.
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>

              {/* Univers Web */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">WEB</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Univers Web</h3>
                    <p className="text-gray-300 text-sm">
                      Création de sites web performants et optimisés pour la conversion. Design moderne, développement
                      technique et intégration CRM.
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>

              {/* Univers Service Marketing Externalisé */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">MKT</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Univers Service Marketing Externalisé</h3>
                    <p className="text-gray-300 text-sm">
                      Service marketing complet externalisé pour développer votre présence digitale et générer des leads
                      qualifiés.
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>

              {/* Univers Data et IA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">IA</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Univers Data et IA</h3>
                    <p className="text-gray-300 text-sm">
                      Exploitation de vos données et intégration d'agents IA pour automatiser et optimiser vos processus
                      business.
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>

              {/* Univers Studio */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">STU</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Univers Studio</h3>
                    <p className="text-gray-300 text-sm">
                      Studio créatif pour la production de contenus visuels, vidéos et supports marketing de haute
                      qualité.
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105">
              Découvrir plus →
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0f1729] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-orange-400 font-semibold mb-4 uppercase tracking-wide">
              NOTRE MODE D'ACCOMPAGNEMENT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Des Experts en CRM HubSpot, Web, IA et Intégration Data
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comme nous, de la conquête de nouveaux clients, nous vous accompagnons notre accompagnement en fonction de
              vos enjeux et objectifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gagnant - Gagnant */}
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float group-hover:scale-110 transition-transform duration-300">
                <div className="text-5xl">🤝</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Gagnant - Gagnant</h3>
              <p className="text-gray-300 leading-relaxed">
                Notre approche collaborative garantit le succès mutuel de nos projets avec des objectifs alignés.
              </p>
            </div>

            {/* Votre commercial 3.0 */}
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float-reverse group-hover:scale-110 transition-transform duration-300">
                <div className="text-5xl">🚀</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Votre commercial 3.0</h3>
              <p className="text-gray-300 leading-relaxed">
                Transformation digitale de vos processus commerciaux avec les dernières technologies et l'IA.
              </p>
            </div>

            {/* Réactivité et expérience */}
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float group-hover:scale-110 transition-transform duration-300">
                <div className="text-5xl">⚡</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Réactivité et expérience</h3>
              <p className="text-gray-300 leading-relaxed">
                Réponse rapide et expertise approfondie pour des solutions adaptées à vos besoins spécifiques.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
              Découvrir plus →
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Apprenez à Exploiter la Puissance de Votre Data avec Digitalisim et nos agents IA
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nos experts vous accompagnent dans l'exploitation de vos données et l'intégration d'agents IA pour
              automatiser et optimiser vos processus business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">INTELLIGENCE BUSINESS</h3>
                    <p className="text-gray-600">
                      Nos experts vous accompagnent dans l'exploitation de vos données et l'intégration d'agents IA pour
                      automatiser et optimiser vos processus business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AGENTS IA PERSONNALISÉS</h3>
                    <p className="text-gray-600">
                      Développement d'agents IA sur mesure pour automatiser vos tâches répétitives et améliorer votre
                      productivité.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AUTOMATISATION AVANCÉE</h3>
                    <p className="text-gray-600">
                      Mise en place de workflows intelligents qui s'adaptent à votre activité et évoluent avec vos
                      besoins.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                  Découvrir nos solutions IA
                </Button>
              </div>
            </div>

            {/* Right side - Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl">🤖</div>
                </div>
                {/* Floating data elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center animate-float">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center animate-float-reverse">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div className="absolute top-1/4 -left-8 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center animate-float">
                  <span className="text-white text-lg">🎯</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-orange-500 font-semibold mb-4 uppercase tracking-wide">NOLIA</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Agence spécialiste de la Transformation Digitale, du CRM HubSpot, de la Data et de l'Intelligence
                Artificielle
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nos experts vous accompagnent au quotidien afin de développer pour votre entreprise une stratégie
                d'acquisition digitale qui transforme vos visiteurs en prospects et vos prospects en clients.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nos ingénieurs sont spécialisés passionnés par le Web, la gestion de la relation client (CRM), la Data
                et l'IA. Ils exploitent les dernières innovations pour créer des solutions sur mesure et vous aident à
                optimiser les performances de votre activité et à vous démarquer de votre concurrence.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                En savoir plus
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-orange-200">
                  <img
                    src="/modern-office-team-working-on-digital-transformati.jpg"
                    alt="Équipe NOLIA"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements around the image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center animate-float">
                  <span className="text-white text-2xl">⚙️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center animate-float-reverse">
                  <span className="text-white text-xl">📊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted particles-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="scroll-reveal text-3xl md:text-5xl font-bold text-foreground mb-6">
            Embarquez dans notre <span className="text-gradient-primary">galaxie digitale</span> !
          </h2>
          <p className="scroll-reveal text-lg md:text-xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
            Nos experts vous accompagnent au quotidien afin de développer pour votre entreprise une stratégie
            d'acquisition digitale qui transforme vos visiteurs en prospects et vos prospects en clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🚀",
                title: "Innovation",
                desc: "Nous utilisons les dernières technologies et stratégies pour créer des solutions innovantes.",
                gradient: "from-primary to-cyan-600",
                delay: "delay-100",
              },
              {
                icon: "🎯",
                title: "Précision",
                desc: "Nos stratégies sont adaptées et focalisées sur votre audience et vos objectifs de croissance.",
                gradient: "from-secondary to-pink-600",
                delay: "delay-200",
              },
              {
                icon: "⚡",
                title: "Expertise",
                desc: "Notre équipe d'experts maîtrise tous les aspects du marketing digital moderne.",
                gradient: "from-orange-500 to-red-500",
                delay: "delay-300",
              },
              {
                icon: "📈",
                title: "Résultats",
                desc: "Nous mesurons les performances de nos actions grâce à un suivi de données avancé.",
                gradient: "from-green-500 to-emerald-600",
                delay: "delay-400",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`scroll-reveal ${item.delay} glass-card border-0 shadow-xl hover-lift hover-glow transition-all duration-500`}
              >
                <CardContent className="pt-8 pb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services-section" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Nos <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services d'acquisition digitale conçus pour booster votre croissance et
              transformer votre présence en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "SEO & SEA",
                desc: "Optimisation pour les moteurs de recherche et campagnes publicitaires Google Ads pour maximiser votre visibilité en ligne. Audit SEO complet, recherche de mots-clés, optimisation technique et création de campagnes publicitaires performantes.",
                features: [
                  "Audit SEO technique",
                  "Recherche de mots-clés",
                  "Optimisation on-page",
                  "Campagnes Google Ads",
                  "Reporting mensuel",
                ],
                price: "1 500€/mois",
                link: "/services/seo-sea",
              },
              {
                icon: "📊",
                title: "Analytics & Data",
                desc: "Analyse approfondie de vos données pour optimiser vos performances et prendre les bonnes décisions stratégiques. Configuration Google Analytics, tableaux de bord personnalisés et recommandations d'optimisation.",
                features: [
                  "Configuration GA4",
                  "Tableaux de bord",
                  "Analyse comportementale",
                  "Rapports personnalisés",
                  "Recommandations",
                ],
                price: "800€/mois",
                link: "/services/analytics-data",
              },
              {
                icon: "📧",
                title: "Email Marketing",
                desc: "Stratégies d'email marketing personnalisées pour nourrir vos prospects et fidéliser vos clients. Création de campagnes automatisées, segmentation avancée et optimisation des taux d'ouverture.",
                features: [
                  "Campagnes automatisées",
                  "Segmentation avancée",
                  "Templates personnalisés",
                  "A/B testing",
                  "Analyse des performances",
                ],
                price: "600€/mois",
                link: "/services/email-marketing",
              },
              {
                icon: "📱",
                title: "Social Media",
                desc: "Gestion et optimisation de votre présence sur les réseaux sociaux pour engager votre audience. Création de contenu, planification des publications et community management professionnel.",
                features: [
                  "Stratégie de contenu",
                  "Création graphique",
                  "Planification",
                  "Community management",
                  "Reporting social",
                ],
                price: "900€/mois",
                link: "/services/social-media",
              },
              {
                icon: "💻",
                title: "Web Development",
                desc: "Création et optimisation de sites web performants pour convertir vos visiteurs en clients. Développement sur mesure, optimisation mobile et intégration CRM pour maximiser vos conversions.",
                features: [
                  "Site responsive",
                  "Optimisation SEO",
                  "Intégration CRM",
                  "Maintenance",
                  "Support technique",
                ],
                price: "2 500€",
                link: "/services/web-development",
              },
              {
                icon: "⚙️",
                title: "CRM & Automation",
                desc: "Mise en place et optimisation de vos CRM pour automatiser vos processus de vente. Configuration HubSpot, workflows automatisés et formation de vos équipes commerciales.",
                features: [
                  "Configuration CRM",
                  "Workflows automatisés",
                  "Formation équipes",
                  "Intégrations",
                  "Support continu",
                ],
                price: "1 200€/mois",
                link: "/services/crm-automation",
              },
              {
                icon: "🎓",
                title: "Nos Formations",
                desc: "Formations spécialisées en marketing digital pour développer vos compétences et celles de vos équipes. Programmes certifiants, ateliers pratiques et accompagnement personnalisé.",
                features: [
                  "Programmes certifiants",
                  "Ateliers pratiques",
                  "Support pédagogique",
                  "Suivi personnalisé",
                  "Ressources exclusives",
                ],
                price: "Découvrez nos programmes",
                link: "https://noliaformation.com/",
                external: true,
              },
              {
                icon: "🎯",
                title: "Paid",
                desc: "Stratégies publicitaires cross-canal pour maximiser votre ROI sur tous les canaux payants. Gestion Facebook Ads, LinkedIn Ads, Google Ads et optimisation continue des performances.",
                features: [
                  "Multi-plateformes",
                  "Ciblage avancé",
                  "Optimisation ROI",
                  "Créations publicitaires",
                  "Reporting détaillé",
                ],
                price: "1 800€/mois",
                link: "/services/paid",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-200"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <span className="text-3xl">{service.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">Inclus dans ce service :</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                    <div className="text-sm text-gray-600 mb-1">À partir de</div>
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                  </div>

                  {service.external ? (
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200">
                        En savoir plus →
                      </Button>
                    </a>
                  ) : (
                    <Link href={service.link}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200">
                        En savoir plus →
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 gradient-animated animate-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="scroll-reveal text-2xl md:text-4xl font-bold mb-4">Prêt à décoller ?</h2>
          <p className="scroll-reveal text-base md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto">
            Contactez nos experts dès aujourd'hui pour découvrir de votre projet et découvrez comment nous pouvons
            booster votre croissance digitale.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-gradient-primary">Partenaires</span>
            </h2>
            <p className="scroll-reveal text-lg text-gray-600 max-w-3xl mx-auto">
              Nous travaillons avec les meilleures plateformes du marché pour vous offrir des solutions performantes et
              innovantes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="scroll-reveal glass-card p-6 rounded-xl hover-lift transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                  <img src="/hubspot-logo.png" alt="HubSpot" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">HubSpot</h3>
                  <p className="text-sm text-gray-600">Partenaire CRM & Marketing</p>
                </div>
              </div>
            </div>

            <div className="scroll-reveal glass-card p-6 rounded-xl hover-lift transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                  <img src="/odoo-logo.png" alt="Odoo" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Odoo</h3>
                  <p className="text-sm text-gray-600">Partenaire ERP & CRM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Discutons de votre projet</h2>
              <form action="https://formspree.io/f/xkgvdzkd" method="POST" className="space-y-4 md:space-y-6">
                <input type="hidden" name="_replyto" value="najwaborak2@gmail.com" />
                <input type="hidden" name="_next" value="https://nolia.fr/?success=true" />
                <input type="hidden" name="_subject" value="Nouveau message depuis la page d'accueil - NOLIA" />
                <input type="hidden" name="_cc" value="najwaborak2@gmail.com" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                    <Input name="prenom" placeholder="Votre prénom" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <Input name="nom" placeholder="Votre nom" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" name="email" placeholder="votre.email@exemple.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                  <Input name="entreprise" placeholder="Nom de votre entreprise" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea name="message" placeholder="Parlez-nous de votre projet..." rows={5} required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 md:py-3 text-base md:text-lg font-medium"
                >
                  Envoyer le message
                </Button>
              </form>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
                <p className="text-gray-600">contact@nolia.fr</p>
                <p className="text-gray-600">hello@nolia.fr</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Téléphone</h3>
                <p className="text-gray-600">+33 1 23 45 67 89</p>
                <p className="text-gray-600">Lun - Ven : 9h - 18h</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Adresse</h3>
                <p className="text-gray-600">123 Avenue de l'Innovation</p>
                <p className="text-gray-600">75000 Paris, France</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1729] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-orange-400 font-bold text-xl">DIGITALISIM</div>
              </div>
              <p className="text-gray-400 mb-4">
                Experts en Transformation Digitale, Intégration CRM HubSpot, Data et Agents IA. Nous transformons vos
                visiteurs en clients fidèles.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Expertise</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors">
                    CRM HubSpot
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors">
                    Transformation Digitale
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors">
                    Data & IA
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors">
                    Développement Web
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors">
                    Marketing Digital
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors">
                    Univers CRM
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors">
                    Univers Web
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors">
                    Univers Data & IA
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors">
                    Univers Studio
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors">
                    Service Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@digitalisim.fr</li>
                <li>+33 1 23 45 67 89</li>
                <li>123 Avenue de l'Innovation</li>
                <li>75000 Paris, France</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700/30 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">© 2025 DIGITALISIM. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Mentions légales
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Politique de confidentialité
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Quote Form Modal */}
      <QuoteFormModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  )
}
