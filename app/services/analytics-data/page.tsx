"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AnalyticsDataPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-violet-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              📊 Analytics & Data Expert
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Transformez vos <span className="text-violet-300">données</span> en décisions
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Analysez, comprenez et optimisez vos performances grâce à nos solutions d'analytics avancées. Prenez des
            décisions éclairées basées sur des données fiables et exploitables.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos services Analytics & Data</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la configuration à l'analyse avancée, nous vous accompagnons dans l'exploitation de vos données pour
              optimiser vos performances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-purple-600 text-xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Configuration Google Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Mise en place et configuration complète de Google Analytics 4 avec tracking personnalisé et objectifs
                  de conversion.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Installation GA4</li>
                  <li>• Configuration des événements</li>
                  <li>• Objectifs de conversion</li>
                  <li>• Audiences personnalisées</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-violet-600 text-xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tableaux de bord personnalisés</h3>
                <p className="text-gray-600 mb-4">
                  Création de dashboards sur mesure avec Data Studio pour visualiser vos KPIs les plus importants.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Dashboards Data Studio</li>
                  <li>• KPIs personnalisés</li>
                  <li>• Visualisations avancées</li>
                  <li>• Rapports automatisés</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-purple-700 text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analyse comportementale</h3>
                <p className="text-gray-600 mb-4">
                  Comprenez le comportement de vos utilisateurs avec des analyses approfondies et des recommandations
                  d'optimisation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Parcours utilisateur</li>
                  <li>• Heatmaps et enregistrements</li>
                  <li>• Tests A/B</li>
                  <li>• Analyse de cohortes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-violet-200 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-violet-700 text-xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapports détaillés</h3>
                <p className="text-gray-600 mb-4">
                  Recevez des rapports mensuels détaillés avec analyses, insights et recommandations d'amélioration.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Rapports mensuels</li>
                  <li>• Analyses de performance</li>
                  <li>• Recommandations</li>
                  <li>• Suivi des objectifs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-300 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-purple-800 text-xl">🔗</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intégrations avancées</h3>
                <p className="text-gray-600 mb-4">
                  Connectez toutes vos sources de données pour une vision 360° de vos performances marketing.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• CRM et outils marketing</li>
                  <li>• E-commerce tracking</li>
                  <li>• APIs personnalisées</li>
                  <li>• Data warehouse</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-violet-300 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-violet-800 text-xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Formation et accompagnement</h3>
                <p className="text-gray-600 mb-4">
                  Formez vos équipes à l'utilisation des outils d'analytics pour une autonomie complète.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Formation Google Analytics</li>
                  <li>• Workshops personnalisés</li>
                  <li>• Documentation complète</li>
                  <li>• Support continu</li>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Tarifs Analytics & Data</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions d'analyse de données adaptées à tous les besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-gray-200 hover:border-violet-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Essentiel</h3>
                  <div className="text-4xl font-bold text-violet-600 mb-2">800€</div>
                  <div className="text-gray-500">par mois</div>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Configuration Google Analytics 4</li>
                  <li>• Dashboard de base</li>
                  <li>• Rapports mensuels</li>
                  <li>• Support email</li>
                  <li>• Formation initiale</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-violet-500 bg-violet-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium">Populaire</span>
              </div>
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Avancé</h3>
                  <div className="text-4xl font-bold text-violet-600 mb-2">1 500€</div>
                  <div className="text-gray-500">par mois</div>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Tout du plan Essentiel</li>
                  <li>• Dashboards personnalisés</li>
                  <li>• Analyse comportementale</li>
                  <li>• Tests A/B</li>
                  <li>• Support prioritaire</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-violet-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert</h3>
                  <div className="text-4xl font-bold text-violet-600 mb-2">2 800€</div>
                  <div className="text-gray-500">par mois</div>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Tout du plan Avancé</li>
                  <li>• Intégrations avancées</li>
                  <li>• Data warehouse</li>
                  <li>• Consultant dédié</li>
                  <li>• Formations équipe</li>
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
          <h2 className="text-4xl font-bold mb-4">Prêt à exploiter vos données ?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Transformez vos données en avantage concurrentiel. Nos experts vous accompagnent dans la mise en place d'une
            stratégie data-driven performante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium">
              Demander mon audit Analytics
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
