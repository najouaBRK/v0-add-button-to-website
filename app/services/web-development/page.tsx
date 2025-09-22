"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import QuoteFormModal from "@/components/quote-form-modal"

export default function WebDevelopmentPage() {
  const [activeButton, setActiveButton] = useState(0)
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovered === null) {
        setActiveButton((prev) => (prev + 1) % 4)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered])

  const serviceButtons = [
    {
      id: 0,
      title: "Site vitrine",
      icon: "🌐",
      description:
        "Idéal pour assurer sa présence sur internet et présenter son entreprise. Conçu avec les outils et techniques les plus performants du marché.",
      link: "/services/site-vitrine",
    },
    {
      id: 1,
      title: "Site e-commerce",
      icon: "🛒",
      description:
        "Le site e-commerce vous permet d'exploiter vos nouveaux canaux de vente en ligne. Conçu avec les outils et techniques les plus performants.",
      link: "/services/e-commerce",
    },
    {
      id: 2,
      title: "Blog",
      icon: "📝",
      description:
        "Décuplez l'actualité de votre société et proposez du contenu à forte valeur ajoutée pour vos prospects et clients.",
      link: "/services/blog",
    },
    {
      id: 3,
      title: "Landing Page",
      icon: "🚀",
      description:
        "En créant des landing page, boostez votre visibilité et générez plus de leads. Nous vous accompagnons pour améliorer vos objectifs.",
      link: "/services/landing-page",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-4 md:mb-6">
            <span className="inline-block bg-orange-500 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8">
              AGENCE WEB
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight px-4 sm:px-0">
            Votre <span className="text-orange-400">agence web</span> pour faire décoller votre croissance
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Confiez la création de votre site internet à une agence web proche de ses clients qui s'engage à vos côtés
            et qui vous aidera à viser la lune.
          </p>
        </div>
      </section>

      {/* New Section about web creation services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-orange-500 font-semibold text-xs md:text-sm uppercase tracking-wide">AGENCE WEB</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 mt-2 px-4 sm:px-0">
              Création de site vitrine, blog, e-commerce ou marketplace
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-0">
              Notre équipe d'experts en conception, en développement et en marketing digital travaille main dans la main
              avec vous pour transformer vos idées en réalité. Chacun de nos services est conçu pour vous permettre
              d'atteindre vos objectifs, que ce soit en captivant votre public grâce à un site vitrine, en partageant
              votre contenu d'une à travers un blog ou en maximisant vos ventes grâce à une plateforme e-commerce
              performante.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-orange-500 font-semibold text-xs md:text-sm uppercase tracking-wide">AGENCE WEB</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 mt-2 px-4 sm:px-0">
              Découvrez nos planètes autour de l'univers web
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {serviceButtons.map((service, index) => (
              <Card
                key={service.id}
                className={`bg-blue-800 border-blue-700 text-white p-4 md:p-6 transition-all duration-500 transform ${
                  activeButton === index ? "scale-105 bg-blue-700 shadow-2xl" : "hover:scale-102"
                } ${isHovered === index ? "scale-105 bg-blue-700" : ""}`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <CardContent className="pt-0">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 md:mb-6 transition-all duration-300 ${
                      activeButton === index || isHovered === index ? "bg-orange-500 rotate-12" : ""
                    }`}
                  >
                    <span className="text-white text-lg md:text-xl">{service.icon}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-blue-100 mb-3 md:mb-4 text-xs md:text-sm">{service.description}</p>
                  <Button
                    className={`w-full transition-all duration-300 text-xs md:text-sm relative overflow-hidden touch-manipulation ${
                      activeButton === index || isHovered === index
                        ? "bg-orange-600 hover:bg-orange-700 shadow-lg transform translate-y-0"
                        : "bg-orange-500 hover:bg-orange-600"
                    }`}
                    onClick={() => {
                      setActiveButton(index)
                      // Automatically redirect to the detailed service page
                      window.location.href = service.link
                    }}
                  >
                    <span
                      className={`transition-transform duration-300 ${
                        activeButton === index || isHovered === index ? "translate-x-1" : ""
                      }`}
                    >
                      En savoir plus
                    </span>
                    <span
                      className={`absolute right-2 transition-all duration-300 ${
                        activeButton === index || isHovered === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-2"
                      }`}
                    >
                      →
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {serviceButtons.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                  activeButton === index ? "bg-orange-500 scale-125" : "bg-blue-600 hover:bg-blue-500"
                }`}
                onClick={() => setActiveButton(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4 sm:px-0">
              Nos tarifs Web Development
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-0">
              Des solutions web sur mesure adaptées à votre budget et à vos objectifs business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="p-6 md:p-8 border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Site Vitrine</h3>
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">2,490€</div>
                  <p className="text-gray-600">projet</p>
                </div>
                <ul className="space-y-3 mb-6 md:mb-8 text-sm md:text-base">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Site responsive jusqu'à 5 pages
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Design personnalisé
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Optimisation SEO de base
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Formulaire de contact
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>3 mois de maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 border-2 border-green-500 bg-green-50 relative">
              <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Populaire
                </span>
              </div>
              <CardContent className="pt-0">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Site Business</h3>
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">4,990€</div>
                  <p className="text-gray-600">projet</p>
                </div>
                <ul className="space-y-3 mb-6 md:mb-8 text-sm md:text-base">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Site responsive jusqu'à 15 pages
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    CMS personnalisé
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Optimisation SEO avancée
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Intégrations tierces
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>6 mois de maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">E-commerce</h3>
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">8,990€</div>
                  <p className="text-gray-600">projet</p>
                </div>
                <ul className="space-y-3 mb-6 md:mb-8 text-sm md:text-base">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Boutique en ligne complète
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Gestion des stocks
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Paiements sécurisés
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Tableau de bord admin
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    12 mois de maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <p className="text-gray-600 mb-4 md:mb-6 px-4 sm:px-0">
              Si vous avez besoin d'un devis personnalisé, n'hésitez pas à nous contacter.
            </p>
            <Button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-medium touch-manipulation"
            >
              Demander mon devis
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4 sm:px-0">
              Technologies que nous maîtrisons
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-0">
              Nous utilisons les dernières technologies pour créer des solutions web modernes, performantes et
              évolutives.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-green-600 text-xl md:text-2xl">⚛️</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Frontend</h3>
              <p className="text-gray-600 text-xs md:text-sm">React, Vue.js, Angular, Next.js</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-green-600 text-xl md:text-2xl">🔧</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Backend</h3>
              <p className="text-gray-600 text-xs md:text-sm">Node.js, PHP, Python, Laravel</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-green-600 text-xl md:text-2xl">🗄️</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Bases de données</h3>
              <p className="text-gray-600 text-xs md:text-sm">MySQL, PostgreSQL, MongoDB</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-green-600 text-xl md:text-2xl">☁️</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Cloud</h3>
              <p className="text-gray-600 text-xs md:text-sm">AWS, Google Cloud, Vercel</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4 sm:px-0">
            Prêt à faire décoller votre croissance ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-0">
            Embarquez dans la galaxie de la transformation digitale et boostez votre croissance sur l'ensemble de votre
            parcours de vente.
          </p>
        </div>
      </section>

      <QuoteFormModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceName="Développement Web"
      />
    </div>
  )
}
