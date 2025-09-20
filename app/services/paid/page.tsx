"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function PaidPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              🎯 Agence Paid
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-8 leading-tight">
            Votre agence <span className="text-red-300">Paid</span> au service
            <br />
            de votre <span className="text-red-300">croissance</span>
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Confiez la gestion de vos campagnes publicitaires en ligne à une agence spécialisée en SEA et Social Ads,
            prête de ses clients, qui s'engage à vos côtés et qui adapte à vos objectifs de croissance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-medium">
                Demander un audit Paid gratuit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16">
            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              AGENCE PAID
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Misez sur une stratégie cross-canal</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              L'art de coordonner la publicité en ligne sur plusieurs canaux de façon efficace et coordonnée. Paid que
              de se contenter uniquement sur un canal particulier, comme des annonces Google Ads, notre agence saura
              intégrer d'autres canaux tels que les annonces display pour créer une approche globale.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Tarifs Paid</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des tarifs transparents adaptés à votre budget publicitaire et vos objectifs de croissance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-gray-200 hover:border-red-500 transition-all">
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">1 800€</div>
                  <div className="text-gray-500">par mois + budget pub</div>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• 1 canal publicitaire</li>
                  <li>• Google Ads ou Meta Ads</li>
                  <li>• Optimisation mensuelle</li>
                  <li>• Rapport de performance</li>
                  <li>• Support par email</li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Choisir Starter</Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-red-500 hover:border-red-600 transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">Populaire</span>
              </div>
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">2 800€</div>
                  <div className="text-gray-500">par mois + budget pub</div>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• 2-3 canaux publicitaires</li>
                  <li>• Google Ads + Meta Ads</li>
                  <li>• Stratégie cross-canal</li>
                  <li>• Optimisation bi-mensuelle</li>
                  <li>• Rapports détaillés</li>
                  <li>• Support téléphonique</li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Choisir Growth</Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-red-500 transition-all">
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">4 500€</div>
                  <div className="text-gray-500">par mois + budget pub</div>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Tous canaux publicitaires</li>
                  <li>• Google, Meta, LinkedIn Ads</li>
                  <li>• Stratégie omnicanale</li>
                  <li>• Optimisation hebdomadaire</li>
                  <li>• Rapports en temps réel</li>
                  <li>• Account manager dédié</li>
                  <li>• Formation équipe incluse</li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Choisir Enterprise</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Si vous avez besoin d'un devis personnalisé, n'hésitez pas à nous contacter.
            </p>
            <Link href="/devis">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-medium">
                Demander mon devis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              AGENCE PAID
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Découvrez nos planètes autour de l'univers du référencement payant et du Social Ads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-blue-600 text-2xl">G</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads</h3>
                <p className="text-gray-600 mb-6">
                  Que ce soit votre première campagne ou que vous souhaitiez optimiser vos annonces existantes, nous
                  aidons à diffuser vos annonces Google, afin de générer des leads qualifiés.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-blue-600 text-2xl">in</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">LinkedIn Ads</h3>
                <p className="text-gray-600 mb-6">
                  Si votre stratégie développée votre stratégie LinkedIn et vous aide à décrocher grâce à votre réseau.
                  Maximisez votre visibilité auprès de vos prospects.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-blue-600 text-2xl">f</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Meta Ads (Facebook/Instagram)</h3>
                <p className="text-gray-600 mb-6">
                  Nous vous aidons de créer, gérer et optimiser vos campagnes Facebook Ads et d'autres campagnes Social
                  Ads pour maximiser vos performances sur vos réseaux sociaux.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16">
            <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              MÉTHODE
            </span>
            <h2 className="text-4xl font-bold mb-4">Notre méthodologie d'accompagnement</h2>
            <p className="text-xl text-red-100 max-w-4xl mx-auto">
              Forts de nombreuses années d'expérience en publicité en ligne, les spécialistes vous accompagnent afin
              d'atteindre vos objectifs de croissance. Ils accompagnent des campagnes SEA et Social Ads génératrices de
              clients et de chiffre d'affaires, tout cela sur les bons leviers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Brief et objectif</h3>
              <p className="text-red-100">
                La phase de nos accompagnements : comprendre votre business et être alignés avec vos objectifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Prêt à booster vos campagnes publicitaires ?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez nos experts Paid dès aujourd'hui pour découvrir comment nous pouvons optimiser vos investissements
            publicitaires.
          </p>
          <Link href="/devis">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-medium">
              Demander un audit Paid gratuit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
