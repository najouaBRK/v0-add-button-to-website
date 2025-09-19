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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-3 text-lg font-medium">
              Audit Social Media gratuit
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-fuchsia-900 px-8 py-3 text-lg font-medium bg-transparent"
            >
              Voir nos créations
            </Button>
          </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-fuchsia-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à briller sur les réseaux ?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Développez une présence sociale forte qui engage votre audience et génère des résultats. Nos experts vous
            accompagnent dans votre stratégie social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-3 text-lg font-medium">
              Demander mon audit Social Media
            </Button>
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
