"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fuchsia-900 via-pink-800 to-rose-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-fuchsia-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              📱 Social Media Expert
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Engagez votre <span className="text-rose-300">communauté</span>
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Développez votre présence sur les réseaux sociaux avec des stratégies créatives et engageantes. De la
            création de contenu à la gestion de communauté, nous boostons votre visibilité sociale.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos services Social Media</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la stratégie à l'exécution, nous créons une présence sociale forte qui engage votre audience et
              développe votre communauté.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-fuchsia-600 text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Stratégie social media</h3>
                <p className="text-gray-600 mb-4">
                  Développement d'une stratégie social media complète adaptée à vos objectifs et à votre audience cible.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Audit des réseaux sociaux</li>
                  <li>• Définition des objectifs</li>
                  <li>• Choix des plateformes</li>
                  <li>• Planning éditorial</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-pink-600 text-xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Création de contenu</h3>
                <p className="text-gray-600 mb-4">
                  Production de contenus visuels et textuels engageants adaptés à chaque plateforme sociale.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Visuels et graphiques</li>
                  <li>• Vidéos et animations</li>
                  <li>• Rédaction de posts</li>
                  <li>• Stories et reels</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-rose-600 text-xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community management</h3>
                <p className="text-gray-600 mb-4">
                  Gestion quotidienne de vos communautés avec modération, réponses aux commentaires et engagement.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Modération des commentaires</li>
                  <li>• Réponses aux messages</li>
                  <li>• Animation de communauté</li>
                  <li>• Gestion de crise</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-fuchsia-200 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-fuchsia-700 text-xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Publicités sociales</h3>
                <p className="text-gray-600 mb-4">
                  Création et gestion de campagnes publicitaires sur Facebook, Instagram, LinkedIn et autres
                  plateformes.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Campagnes Facebook Ads</li>
                  <li>• Instagram Ads</li>
                  <li>• LinkedIn Ads</li>
                  <li>• Optimisation ROI</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-pink-200 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-pink-700 text-xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics et reporting</h3>
                <p className="text-gray-600 mb-4">
                  Suivi des performances avec des rapports détaillés sur l'engagement, la portée et les conversions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Métriques d'engagement</li>
                  <li>• Analyse de la portée</li>
                  <li>• ROI des campagnes</li>
                  <li>• Rapports mensuels</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-rose-200 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-rose-700 text-xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Partenariats influenceurs</h3>
                <p className="text-gray-600 mb-4">
                  Identification et gestion de partenariats avec des influenceurs pertinents pour votre secteur.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Recherche d'influenceurs</li>
                  <li>• Négociation de partenariats</li>
                  <li>• Suivi des campagnes</li>
                  <li>• Mesure de l'impact</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos tarifs Social Media</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez la formule qui correspond à vos besoins et à votre budget pour développer votre présence
              sociale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-gray-200 hover:border-fuchsia-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-fuchsia-600 mb-2">890€</div>
                  <p className="text-gray-600">par mois</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Gestion de 2 réseaux sociaux
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    15 publications par mois
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Community management basique
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Rapport mensuel
                  </li>
                </ul>
                <div className="text-center">
                  <a
                    href="mailto:contact@nolia.fr?subject=Commande Pack Social Media Starter&body=Bonjour,%0D%0A%0D%0AJe souhaite commander le Pack Social Media Starter à 890€/mois.%0D%0A%0D%0AInclus :%0D%0A- Gestion de 2 réseaux sociaux%0D%0A- 15 publications par mois%0D%0A- Community management basique%0D%0A- Rapport mensuel%0D%0A%0D%0AMerci de me recontacter pour finaliser la commande.%0D%0A%0D%0ACordialement"
                    className="inline-block w-full"
                  >
                    <Button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white">Choisir Starter</Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-fuchsia-500 bg-fuchsia-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-fuchsia-500 text-white px-4 py-2 rounded-full text-sm font-medium">Populaire</span>
              </div>
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professionnel</h3>
                  <div className="text-4xl font-bold text-fuchsia-600 mb-2">1,590€</div>
                  <p className="text-gray-600">par mois</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Gestion de 4 réseaux sociaux
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    30 publications par mois
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Community management avancé
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Campagnes publicitaires
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Analytics détaillés
                  </li>
                </ul>
                <div className="text-center">
                  <a
                    href="mailto:contact@nolia.fr?subject=Commande Pack Social Media Professionnel&body=Bonjour,%0D%0A%0D%0AJe souhaite commander le Pack Social Media Professionnel à 1,590€/mois.%0D%0A%0D%0AInclus :%0D%0A- Gestion de 4 réseaux sociaux%0D%0A- 30 publications par mois%0D%0A- Community management avancé%0D%0A- Campagnes publicitaires%0D%0A- Analytics détaillés%0D%0A%0D%0AMerci de me recontacter pour finaliser la commande.%0D%0A%0D%0ACordialement"
                    className="inline-block w-full"
                  >
                    <Button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                      Choisir Professionnel
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-fuchsia-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert</h3>
                  <div className="text-4xl font-bold text-fuchsia-600 mb-2">2,890€</div>
                  <p className="text-gray-600">par mois</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Gestion illimitée des réseaux
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    60 publications par mois
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Community management premium
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Partenariats influenceurs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Stratégie personnalisée
                  </li>
                </ul>
                <div className="text-center">
                  <a
                    href="mailto:contact@nolia.fr?subject=Commande Pack Social Media Expert&body=Bonjour,%0D%0A%0D%0AJe souhaite commander le Pack Social Media Expert à 2,890€/mois.%0D%0A%0D%0AInclus :%0D%0A- Gestion illimitée des réseaux%0D%0A- 60 publications par mois%0D%0A- Community management premium%0D%0A- Partenariats influenceurs%0D%0A- Stratégie personnalisée%0D%0A%0D%0AMerci de me recontacter pour finaliser la commande.%0D%0A%0D%0ACordialement"
                    className="inline-block w-full"
                  >
                    <Button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white">Choisir Expert</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Si vous avez besoin d'un devis personnalisé, n'hésitez pas à nous contacter.
            </p>
            <Link href="/devis">
              <Button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-3 text-lg font-medium">
                Demander mon devis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-fuchsia-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à briller sur les réseaux ?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Développez une présence sociale forte qui engage votre audience et génère des résultats. Nos experts vous
            accompagnent dans votre stratégie social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact-section">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-fuchsia-900 px-8 py-3 text-lg font-medium bg-transparent"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
