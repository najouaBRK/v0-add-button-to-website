"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function FormationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              🎓 Formations Expertes
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-8 leading-tight">
            Nos <span className="text-teal-300">Formations</span>
            <br />
            Marketing Digital
          </h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Développez vos compétences et celles de vos équipes avec nos formations spécialisées en marketing digital.
            Animées par nos experts, certifiées et adaptées à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-lg font-medium">
                Demander un devis formation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Tarifs Formations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des formations sur mesure avec des tarifs transparents et adaptés à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-gray-200 hover:border-teal-500 transition-all">
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Formation Individuelle</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-2">500€</div>
                  <div className="text-gray-500">par jour / par personne</div>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Formation personnalisée</li>
                  <li>• Support pédagogique inclus</li>
                  <li>• Certificat de formation</li>
                  <li>• Suivi post-formation 30 jours</li>
                </ul>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Choisir cette formule</Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-teal-500 hover:border-teal-600 transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">Populaire</span>
              </div>
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Formation Équipe</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-2">1 200€</div>
                  <div className="text-gray-500">par jour / jusqu'à 8 personnes</div>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Formation en groupe</li>
                  <li>• Ateliers pratiques</li>
                  <li>• Support pédagogique pour tous</li>
                  <li>• Certificats individuels</li>
                  <li>• Suivi post-formation 60 jours</li>
                </ul>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Choisir cette formule</Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-teal-500 transition-all">
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Formation Entreprise</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-2">2 500€</div>
                  <div className="text-gray-500">par jour / groupe illimité</div>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Formation sur mesure</li>
                  <li>• Contenu adapté à votre secteur</li>
                  <li>• Ateliers pratiques avancés</li>
                  <li>• Support pédagogique complet</li>
                  <li>• Suivi post-formation 90 jours</li>
                  <li>• Accompagnement personnalisé</li>
                </ul>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Choisir cette formule</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Modules de Formation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez parmi nos modules spécialisés ou créons ensemble un programme sur mesure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SEO & SEA</h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez le référencement naturel et payant pour booster votre visibilité.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Audit SEO technique</li>
                  <li>• Stratégie de mots-clés</li>
                  <li>• Google Ads avancé</li>
                  <li>• Mesure de performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-pink-600 text-xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media</h3>
                <p className="text-gray-600 mb-4">
                  Développez votre présence sur les réseaux sociaux et engagez votre communauté.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Stratégie social media</li>
                  <li>• Création de contenu</li>
                  <li>• Community management</li>
                  <li>• Publicités sociales</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-violet-600 text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Data</h3>
                <p className="text-gray-600 mb-4">
                  Analysez vos données pour optimiser vos performances et prendre les bonnes décisions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Google Analytics 4</li>
                  <li>• Tableaux de bord</li>
                  <li>• Analyse comportementale</li>
                  <li>• ROI et KPIs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Stratégie Digitale</h3>
                <p className="text-gray-600 mb-4">
                  Élaborez une stratégie digitale cohérente et efficace pour votre entreprise.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Audit digital complet</li>
                  <li>• Persona et parcours client</li>
                  <li>• Plan d'action digital</li>
                  <li>• Mesure de performance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à développer vos compétences ?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour créer un programme de formation sur mesure adapté à vos besoins et objectifs.
          </p>
          <Link href="/devis">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-lg font-medium">
              Demander un devis formation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
