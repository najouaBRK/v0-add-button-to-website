"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function EmailMarketingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              📧 Email Marketing Expert
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Transformez vos <span className="text-orange-400">emails</span> en revenus
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Créez des campagnes d'email marketing personnalisées qui convertissent. De la stratégie à l'automatisation,
            nous vous aidons à maximiser le ROI de vos communications email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
              Audit Email gratuit
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 text-lg font-medium bg-transparent"
            >
              Voir nos templates
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos services Email Marketing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la stratégie à l'exécution, nous créons des campagnes email qui engagent votre audience et génèrent des
              résultats mesurables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-purple-600 text-xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Campagnes automatisées</h3>
                <p className="text-gray-600 mb-4">
                  Mise en place de séquences d'emails automatisées pour nurturing, onboarding et réactivation de vos
                  prospects.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Séquences de bienvenue</li>
                  <li>• Nurturing automatisé</li>
                  <li>• Emails de réactivation</li>
                  <li>• Workflows personnalisés</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-blue-600 text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Segmentation avancée</h3>
                <p className="text-gray-600 mb-4">
                  Segmentez votre audience selon leurs comportements, préférences et données démographiques pour des
                  messages ultra-ciblés.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Segmentation comportementale</li>
                  <li>• Personas détaillés</li>
                  <li>• Ciblage géographique</li>
                  <li>• Scoring de leads</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Templates personnalisés</h3>
                <p className="text-gray-600 mb-4">
                  Création de templates email responsive et attractifs qui reflètent votre identité de marque et
                  optimisent les conversions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Design responsive</li>
                  <li>• Branding personnalisé</li>
                  <li>• Optimisation mobile</li>
                  <li>• Templates réutilisables</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl">🧪</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">A/B Testing</h3>
                <p className="text-gray-600 mb-4">
                  Optimisez continuellement vos campagnes grâce à des tests A/B sur les objets, contenus et
                  call-to-actions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Tests d'objets</li>
                  <li>• Optimisation du contenu</li>
                  <li>• Tests de CTA</li>
                  <li>• Analyse des résultats</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-indigo-600 text-xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics et reporting</h3>
                <p className="text-gray-600 mb-4">
                  Suivez les performances de vos campagnes avec des rapports détaillés et des insights actionnables.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Taux d'ouverture et clics</li>
                  <li>• ROI des campagnes</li>
                  <li>• Rapports personnalisés</li>
                  <li>• Recommandations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-pink-600 text-xl">🔗</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intégrations CRM</h3>
                <p className="text-gray-600 mb-4">
                  Connectez vos outils email à votre CRM et autres plateformes pour une stratégie marketing unifiée.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Synchronisation CRM</li>
                  <li>• Intégrations e-commerce</li>
                  <li>• APIs personnalisées</li>
                  <li>• Données unifiées</li>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Tarifs Email Marketing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions d'email marketing adaptées à votre volume et vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">600€</div>
                  <div className="text-gray-500">par mois</div>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Jusqu'à 5 000 contacts</li>
                  <li>• 3 campagnes automatisées</li>
                  <li>• Templates de base</li>
                  <li>• Rapports mensuels</li>
                  <li>• Support email</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-purple-500 bg-purple-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">Populaire</span>
              </div>
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">1 200€</div>
                  <div className="text-gray-500">par mois</div>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Jusqu'à 25 000 contacts</li>
                  <li>• Campagnes illimitées</li>
                  <li>• Templates personnalisés</li>
                  <li>• A/B testing avancé</li>
                  <li>• Support prioritaire</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">2 500€</div>
                  <div className="text-gray-500">par mois</div>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Contacts illimités</li>
                  <li>• Intégrations avancées</li>
                  <li>• Account manager dédié</li>
                  <li>• Formations équipe</li>
                  <li>• Support 24/7</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Si vous avez besoin d'un devis personnalisé, n'hésitez pas à nous contacter.
            </p>
            <Link href="/devis">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
                Demander mon devis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à booster vos emails ?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Transformez votre stratégie email en machine à convertir. Nos experts vous accompagnent pour créer des
            campagnes qui génèrent des résultats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
              Demander mon audit Email
            </Button>
            <Link href="/#contact-section">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 text-lg font-medium bg-transparent"
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
