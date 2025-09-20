"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

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
      <section className="gradient-hero particles-bg text-white py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-purple-400/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-pink-400/30 rounded-lg rotate-45 animate-float-reverse"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 border-2 border-cyan-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-purple-400/30 rounded-lg rotate-45 animate-float-reverse"></div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container mx-auto text-center relative z-10">
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}>
            <span className="inline-block glass-card text-white px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse-glow">
              ⭐ Agence d'acquisition digitale #1
            </span>
          </div>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <span className="text-gradient-secondary">+</span> de visiteurs,
            <br />
            <span className="text-gradient-secondary">+</span> de prospects,
            <br />
            <span className="text-gradient-secondary">+</span> de clients
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            Percez à la rencontre de vos prospects et embarquez dans la galaxie de l'agence digitale capable de booster
            votre croissance sur l'ensemble de votre parcours de vente.
          </p>

          <div
            className={`flex justify-center transition-all duration-1000 delay-700 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          >
            <Link href="/devis">
              <Button className="gradient-secondary hover:scale-105 text-white px-8 py-4 text-lg font-medium animate-pulse-glow transition-all duration-300 hover-lift">
                Demander mon devis
              </Button>
            </Link>
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
                  <img src="/hubspot-logo-orange.png" alt="HubSpot" className="w-12 h-12 object-contain" />
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
                  <img src="/odoo-logo-purple.jpg" alt="Odoo" className="w-12 h-12 object-contain" />
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
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-xl font-bold">NOLIA</span>
              </div>
              <p className="text-gray-400 mb-4">
                Votre partenaire de confiance pour l'acquisition digitale. Nous transformons vos visiteurs en clients
                fidèles.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services/seo-sea" className="hover:text-white transition-colors">
                    SEO & SEA
                  </Link>
                </li>
                <li>
                  <Link href="/services/analytics-data" className="hover:text-white transition-colors">
                    Analytics & Data
                  </Link>
                </li>
                <li>
                  <Link href="/services/email-marketing" className="hover:text-white transition-colors">
                    Email Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services/social-media" className="hover:text-white transition-colors">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="/services/web-development" className="hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/crm-automation" className="hover:text-white transition-colors">
                    CRM & Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services/formations" className="hover:text-white transition-colors">
                    Nos Formations
                  </Link>
                </li>
                <li>
                  <Link href="/services/paid" className="hover:text-white transition-colors">
                    Paid
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Notre équipe
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Ressources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Partenaires
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@nolia.fr</li>
                <li>+33 1 23 45 67 89</li>
                <li>123 Avenue de l'Innovation</li>
                <li>75000 Paris, France</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">© 2024 NOLIA. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Mentions légales
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Politique de confidentialité
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
