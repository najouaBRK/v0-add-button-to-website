"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="digital-gradient text-white py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block bg-secondary text-white px-6 py-3 rounded-full text-sm font-medium mb-8 digital-glow">
              ⭐ Agence d'acquisition digitale #1
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-space-grotesk">
            <span className="text-cyan-300">+</span> de visiteurs,
            <br />
            <span className="text-pink-400">+</span> de prospects,
            <br />
            <span className="text-cyan-300">+</span> de clients
          </h1>
          <p className="text-lg md:text-xl text-cyan-100 mb-10 max-w-3xl mx-auto leading-relaxed font-dm-sans">
            Percez à la rencontre de vos prospects et embarquez dans la galaxie de l'agence digitale capable de booster
            votre croissance sur l'ensemble de votre parcours de vente.
          </p>
          <div className="flex justify-center">
            <Link href="/devis">
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-medium digital-glow transition-all duration-300 hover:scale-105">
                Demander mon devis
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-pink-400/30 rounded-lg rotate-45"></div>
      </section>

      <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-space-grotesk">
            Embarquez dans notre <span className="digital-text-gradient">galaxie digitale</span> !
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-4xl mx-auto font-dm-sans">
            Nos experts vous accompagnent au quotidien afin de développer pour votre entreprise une stratégie
            d'acquisition digitale qui transforme vos visiteurs en prospects et vos prospects en clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="digital-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 digital-glow">
                  <span className="text-white text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-space-grotesk">Innovation</h3>
                <p className="text-muted-foreground font-dm-sans">
                  Nous utilisons les dernières technologies et stratégies pour créer des solutions innovantes.
                </p>
              </CardContent>
            </Card>

            <Card className="digital-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 digital-glow">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-space-grotesk">Précision</h3>
                <p className="text-muted-foreground font-dm-sans">
                  Nos stratégies sont adaptées et focalisées sur votre audience et vos objectifs de croissance.
                </p>
              </CardContent>
            </Card>

            <Card className="digital-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 digital-glow">
                  <span className="text-white text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-space-grotesk">Expertise</h3>
                <p className="text-muted-foreground font-dm-sans">
                  Notre équipe d'experts maîtrise tous les aspects du marketing digital moderne.
                </p>
              </CardContent>
            </Card>

            <Card className="digital-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 digital-glow">
                  <span className="text-white text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-space-grotesk">Résultats</h3>
                <p className="text-muted-foreground font-dm-sans">
                  Nous mesurons les performances de nos actions grâce à un suivi de données avancé.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services-section" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-space-grotesk">
              Nos <span className="digital-text-gradient">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-dm-sans">
              Découvrez notre gamme complète de services d'acquisition digitale conçus pour booster votre croissance et
              transformer votre présence en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="digital-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">SEO & SEA</h3>
                <p className="text-muted-foreground mb-6 font-dm-sans">
                  Optimisez pour les moteurs de recherche et campagnes publicitaires pour maximiser votre visibilité.
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary mb-2">À partir de 1 500€/mois</div>
                  <div className="text-sm text-muted-foreground">Audit SEO offert</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6 font-dm-sans">
                  <li>• Audit SEO complet</li>
                  <li>• Campagnes Google Ads</li>
                  <li>• Optimisation technique</li>
                  <li>• Suivi des performances</li>
                </ul>
                <Link href="/services/seo-sea">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
                  >
                    En savoir plus
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="digital-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">Analytics & Data</h3>
                <p className="text-muted-foreground mb-6 font-dm-sans">
                  Analysez approfondie de vos données pour optimiser vos performances et prendre les bonnes décisions.
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-violet-600 mb-2">À partir de 800€/mois</div>
                  <div className="text-sm text-muted-foreground">Configuration incluse</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6 font-dm-sans">
                  <li>• Configuration Google Analytics</li>
                  <li>• Tableaux de bord personnalisés</li>
                  <li>• Analyse comportementale</li>
                  <li>• Rapports détaillés</li>
                </ul>
                <Link href="/services/analytics-data">
                  <Button
                    variant="outline"
                    className="w-full border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    En savoir plus
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="digital-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">📧</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">Email Marketing</h3>
                <p className="text-muted-foreground mb-6 font-dm-sans">
                  Stratégies d'email marketing personnalisées pour nourrir vos prospects et fidéliser vos clients.
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-600 mb-2">À partir de 600€/mois</div>
                  <div className="text-sm text-muted-foreground">Templates inclus</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6 font-dm-sans">
                  <li>• Campagnes automatisées</li>
                  <li>• Segmentation avancée</li>
                  <li>• Templates personnalisés</li>
                  <li>• A/B testing</li>
                </ul>
                <Link href="/services/email-marketing">
                  <Button
                    variant="outline"
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    En savoir plus
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="digital-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">Social Media</h3>
                <p className="text-muted-foreground mb-6 font-dm-sans">
                  Gestion et optimisation de votre présence sur les réseaux sociaux pour engager votre audience.
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-pink-600 mb-2">À partir de 900€/mois</div>
                  <div className="text-sm text-muted-foreground">Contenu créatif inclus</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6 font-dm-sans">
                  <li>• Stratégie social media</li>
                  <li>• Création de contenu</li>
                  <li>• Community management</li>
                  <li>• Publicités sociales</li>
                </ul>
                <Link href="/services/social-media">
                  <Button
                    variant="outline"
                    className="w-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    En savoir plus
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="digital-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">Web Development</h3>
                <p className="text-muted-foreground mb-6 font-dm-sans">
                  Création et optimisation de sites web performants pour convertir vos visiteurs en clients.
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-green-600 mb-2">À partir de 2 500€</div>
                  <div className="text-sm text-muted-foreground">Projet sur mesure</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6 font-dm-sans">
                  <li>• Sites web sur mesure</li>
                  <li>• Optimisation UX/UI</li>
                  <li>• Performance web</li>
                  <li>• Intégrations avancées</li>
                </ul>
                <Link href="/services/web-development">
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    En savoir plus
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="digital-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">CRM & Automation</h3>
                <p className="text-muted-foreground mb-6 font-dm-sans">
                  Mise en place et optimisation de vos CRM pour automatiser vos processus de vente.
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-orange-600 mb-2">À partir de 1 200€/mois</div>
                  <div className="text-sm text-muted-foreground">Setup inclus</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6 font-dm-sans">
                  <li>• Configuration CRM</li>
                  <li>• Workflows automatisés</li>
                  <li>• Lead scoring</li>
                  <li>• Intégrations</li>
                </ul>
                <Link href="/services/crm-automation">
                  <Button
                    variant="outline"
                    className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    En savoir plus
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="digital-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">Nos Formations</h3>
                <p className="text-muted-foreground mb-6 font-dm-sans">
                  Formations spécialisées en marketing digital pour développer vos compétences et celles de vos équipes.
                </p>
                <div className="mb-6">
                  <div className="text-lg text-muted-foreground mb-2">Découvrez nos programmes</div>
                  <div className="text-sm text-muted-foreground">Formations certifiantes</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6 font-dm-sans">
                  <li>• Formation SEO/SEA</li>
                  <li>• Social Media Marketing</li>
                  <li>• Analytics & Data</li>
                  <li>• Stratégie digitale</li>
                </ul>
                <a href="https://noliaformation.com/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    En savoir plus
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="digital-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">Paid</h3>
                <p className="text-muted-foreground mb-6 font-dm-sans">
                  Stratégies publicitaires cross-canal pour maximiser votre ROI sur tous les canaux payants.
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-red-600 mb-2">À partir de 1 800€/mois</div>
                  <div className="text-sm text-muted-foreground">Budget pub non inclus</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6 font-dm-sans">
                  <li>• Google Ads</li>
                  <li>• Meta Ads (Facebook/Instagram)</li>
                  <li>• LinkedIn Ads</li>
                  <li>• Stratégie cross-canal</li>
                </ul>
                <Link href="/services/paid">
                  <Button
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    En savoir plus
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Prêt à décoller ?</h2>
          <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
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
