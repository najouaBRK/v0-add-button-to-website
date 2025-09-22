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
    <div className="min-h-screen bg-[#1a2b4a]">
      <section className="bg-[#1a2b4a] text-white py-16 md:py-20 lg:py-32 px-4 relative overflow-hidden">
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
          {/* Badge similar to NOLIA */}
          <div className={`mb-6 md:mb-8 transition-all duration-1000 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}>
            <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-300 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium">
              ⭐ Experts en Transformation Digitale
            </span>
          </div>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <span className="block sm:inline">Experts en Transformation Digitale,</span>
            <br className="hidden sm:block" />
            <span className="block mt-2 sm:mt-0">
              <span className="text-orange-400">Intégration CRM HubSpot, Data et</span>
            </span>
            <br className="hidden sm:block" />
            <span className="block mt-2 sm:mt-0 text-orange-400">Agents IA</span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 transition-all duration-1000 delay-500 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            Embarquez dans la galaxie de la transformation digitale capable de booster votre croissance sur l'ensemble
            de votre parcours de vente.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 transition-all duration-1000 delay-700 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          >
            <Button
              onClick={() => setIsQuoteModalOpen(true)}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 touch-manipulation"
            >
              Découvrir nos NOLIA 🚀
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-full transition-all duration-300 bg-transparent touch-manipulation"
            >
              En savoir plus sur NOLIA
            </Button>
          </div>

          <div className="mt-12 md:mt-16 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full flex items-center justify-center animate-float">
                <div className="text-6xl sm:text-7xl md:text-8xl">🚀</div>
              </div>
              {/* Floating elements around the rocket */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-orange-400 rounded-full animate-float-reverse"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a2b4a] py-12 border-t border-gray-700/30">
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

      <section className="py-16 md:py-20 lg:py-32 bg-[#1a2b4a] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-orange-400 font-semibold mb-3 md:mb-4 uppercase tracking-wide text-sm md:text-base">
              NOTRE MODE D'ACCOMPAGNEMENT
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-4 sm:px-0">
              Des Experts en CRM HubSpot, Web, IA et Intégration Data
            </h2>
            <p className="text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed text-sm md:text-base px-4 sm:px-0">
              Comme nous, de la conquête de nouveaux clients, nous vous accompagnons notre accompagnement en fonction de
              vos enjeux et objectifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 animate-float group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl">🤝</div>
              </div>
              <h3 className="text-xl font-bold mb-3 md:mb-4">Gagnant - Gagnant</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Notre approche collaborative garantit le succès mutuel de nos projets avec des objectifs alignés.
              </p>
            </div>

            {/* Votre commercial 3.0 */}
            <div className="text-center group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 animate-float-reverse group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl">🚀</div>
              </div>
              <h3 className="text-xl font-bold mb-3 md:mb-4">Votre commercial 3.0</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Transformation digitale de vos processus commerciaux avec les dernières technologies et l'IA.
              </p>
            </div>

            {/* Réactivité et expérience */}
            <div className="text-center group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 animate-float group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl">⚡</div>
              </div>
              <h3 className="text-xl font-bold mb-3 md:mb-4">Réactivité et expérience</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Réponse rapide et expertise approfondie pour des solutions adaptées à vos besoins spécifiques.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full">
              Découvrir plus →
            </Button>
          </div>
        </div>
      </section>

      <section id="services-section" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4 sm:px-0">
              Nos <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Découvrez notre gamme complète de services d'acquisition digitale conçus pour booster votre croissance et
              transformer votre présence en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
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
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-md">
                    <span className="text-2xl md:text-3xl">{service.icon}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>

                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">{service.desc}</p>

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
                    <div className="text-xl md:text-2xl font-bold text-blue-600">{service.price}</div>
                  </div>

                  {service.external ? (
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 touch-manipulation">
                        En savoir plus →
                      </Button>
                    </a>
                  ) : (
                    <Link href={service.link}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 touch-manipulation">
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

      <section className="py-12 md:py-20 bg-[#1a2b4a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="scroll-reveal text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-4 px-4 sm:px-0">
            Prêt à décoller ?
          </h2>
          <p className="scroll-reveal text-base md:text-xl text-gray-200 mb-6 md:mb-8 max-w-xs sm:max-w-2xl md:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Contactez nos experts dès aujourd'hui pour découvrir de votre projet et découvrez comment nous pouvons
            booster votre croissance digitale.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="scroll-reveal text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-4 px-4 sm:px-0">
              Nos <span className="text-gradient-primary">Partenaires</span>
            </h2>
            <p className="scroll-reveal text-lg text-gray-600 max-w-xs sm:max-w-3xl md:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                    <Input name="prenom" placeholder="Votre prénom" required className="touch-manipulation" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <Input name="nom" placeholder="Votre nom" required className="touch-manipulation" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="votre.email@exemple.com"
                    required
                    className="touch-manipulation"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                  <Input name="entreprise" placeholder="Nom de votre entreprise" className="touch-manipulation" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Parlez-nous de votre projet..."
                    rows={5}
                    required
                    className="touch-manipulation"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 md:py-3 text-base md:text-lg font-medium touch-manipulation"
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

      <footer className="bg-[#0f1729] text-white py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4 md:mb-6">
                <div className="text-orange-400 font-bold text-xl md:text-2xl">NOLIA</div>
              </div>
              <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
                Experts en Transformation Digitale, Intégration CRM HubSpot, Data et Agents IA. Nous transformons vos
                visiteurs en clients fidèles.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-orange-400">Expertise</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors touch-manipulation">
                    CRM HubSpot
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors touch-manipulation">
                    Transformation Digitale
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors touch-manipulation">
                    Data & IA
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors touch-manipulation">
                    Développement Web
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors touch-manipulation">
                    Marketing Digital
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-orange-400">Solutions</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors touch-manipulation">
                    Univers CRM
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors touch-manipulation">
                    Univers Web
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors touch-manipulation">
                    Univers Data & IA
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors touch-manipulation">
                    Univers Studio
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors touch-manipulation">
                    Service Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-orange-400">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>contact@nolia.fr</li>
                <li>+33 1 23 45 67 89</li>
                <li>123 Avenue de l'Innovation</li>
                <li>75000 Paris, France</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700/30 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">© 2025 NOLIA. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors text-sm touch-manipulation"
              >
                Mentions légales
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors text-sm touch-manipulation"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors text-sm touch-manipulation"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <QuoteFormModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  )
}
