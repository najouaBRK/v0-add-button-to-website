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

      <section id="services-section" className="py-20 md:py-32 bg-background particles-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="scroll-reveal text-3xl md:text-5xl font-bold text-foreground mb-6">
              Nos <span className="text-gradient-primary">Services</span>
            </h2>
            <p className="scroll-reveal text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services d'acquisition digitale conçus pour booster votre croissance et
              transformer votre présence en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Services cards with enhanced animations */}
            {[
              {
                icon: "🔍",
                title: "SEO & SEA",
                desc: "Optimisez pour les moteurs de recherche et campagnes publicitaires pour maximiser votre visibilité.",
                price: "1 500€/mois",
                gradient: "from-primary to-cyan-600",
                link: "/services/seo-sea",
                color: "primary",
              },
              {
                icon: "📊",
                title: "Analytics & Data",
                desc: "Analysez approfondie de vos données pour optimiser vos performances et prendre les bonnes décisions.",
                price: "800€/mois",
                gradient: "from-violet-500 to-purple-600",
                link: "/services/analytics-data",
                color: "violet-600",
              },
              {
                icon: "📧",
                title: "Email Marketing",
                desc: "Stratégies d'email marketing personnalisées pour nourrir vos prospects et fidéliser vos clients.",
                price: "600€/mois",
                gradient: "from-purple-500 to-violet-600",
                link: "/services/email-marketing",
                color: "purple-600",
              },
              {
                icon: "📱",
                title: "Social Media",
                desc: "Gestion et optimisation de votre présence sur les réseaux sociaux pour engager votre audience.",
                price: "900€/mois",
                gradient: "from-pink-500 to-red-600",
                link: "/services/social-media",
                color: "pink-600",
              },
              {
                icon: "💻",
                title: "Web Development",
                desc: "Création et optimisation de sites web performants pour convertir vos visiteurs en clients.",
                price: "2 500€",
                gradient: "from-green-500 to-emerald-600",
                link: "/services/web-development",
                color: "green-600",
              },
              {
                icon: "⚙️",
                title: "CRM & Automation",
                desc: "Mise en place et optimisation de vos CRM pour automatiser vos processus de vente.",
                price: "1 200€/mois",
                gradient: "from-orange-500 to-red-500",
                link: "/services/crm-automation",
                color: "orange-600",
              },
              {
                icon: "🎓",
                title: "Nos Formations",
                desc: "Formations spécialisées en marketing digital pour développer vos compétences et celles de vos équipes.",
                price: "Découvrez nos programmes",
                gradient: "from-teal-500 to-cyan-600",
                link: "https://noliaformation.com/",
                color: "teal-600",
                external: true,
              },
              {
                icon: "🎯",
                title: "Paid",
                desc: "Stratégies publicitaires cross-canal pour maximiser votre ROI sur tous les canaux payants.",
                price: "1 800€/mois",
                gradient: "from-red-500 to-pink-600",
                link: "/services/paid",
                color: "red-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`scroll-reveal glass-card border-0 shadow-xl hover-lift hover-glow transition-all duration-500 group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}
                  >
                    <span className="text-white text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <div className="mb-6">
                    <div className={`text-2xl font-bold text-${service.color} mb-2`}>À partir de {service.price}</div>
                  </div>
                  {service.external ? (
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className={`w-full border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white transition-all duration-300 bg-transparent hover-lift`}
                      >
                        En savoir plus
                      </Button>
                    </a>
                  ) : (
                    <Link href={service.link}>
                      <Button
                        variant="outline"
                        className={`w-full border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white transition-all duration-300 bg-transparent hover-lift`}
                      >
                        En savoir plus
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
