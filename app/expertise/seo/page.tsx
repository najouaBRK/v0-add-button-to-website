import { Search, TrendingUp, Target, BarChart3, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SEOExpertisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1e293b] to-[#0f172a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-orange-500/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Search className="w-16 h-16 text-orange-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Expertise SEO
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dominez les résultats de recherche et attirez plus de clients qualifiés. Notre expertise SEO vous positionne
            en première page de Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Audit SEO gratuit
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Voir nos résultats
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Services SEO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche complète pour améliorer votre visibilité sur les moteurs de recherche
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Audit SEO</h3>
                <p className="text-gray-600 mb-6">
                  Analyse complète de votre site pour identifier les opportunités d'amélioration SEO.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Analyse technique</li>
                  <li>• Audit de contenu</li>
                  <li>• Analyse concurrentielle</li>
                  <li>• Plan d'action détaillé</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recherche de Mots-Clés</h3>
                <p className="text-gray-600 mb-6">
                  Identification des mots-clés stratégiques pour votre secteur et votre audience.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Analyse des volumes</li>
                  <li>• Étude de concurrence</li>
                  <li>• Mots-clés longue traîne</li>
                  <li>• Intention de recherche</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Technique</h3>
                <p className="text-gray-600 mb-6">
                  Optimisation technique de votre site pour les moteurs de recherche et les utilisateurs.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Vitesse de chargement</li>
                  <li>• Structure des URLs</li>
                  <li>• Balisage sémantique</li>
                  <li>• Mobile-first</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Local</h3>
                <p className="text-gray-600 mb-6">
                  Optimisation pour les recherches locales et géolocalisées de votre zone de chalandise.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Google My Business</li>
                  <li>• Citations locales</li>
                  <li>• Avis clients</li>
                  <li>• Géolocalisation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Netlinking</h3>
                <p className="text-gray-600 mb-6">
                  Stratégie de liens entrants pour renforcer l'autorité et la crédibilité de votre site.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Audit des backlinks</li>
                  <li>• Stratégie de liens</li>
                  <li>• Partenariats qualifiés</li>
                  <li>• Désaveu de liens toxiques</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-pink-50 to-rose-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Suivi & Reporting</h3>
                <p className="text-gray-600 mb-6">
                  Mesure et analyse des performances SEO avec des rapports détaillés et actionables.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Suivi des positions</li>
                  <li>• Analyse du trafic</li>
                  <li>• Rapports mensuels</li>
                  <li>• Recommandations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Méthodologie SEO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour des résultats durables et mesurables
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "Analyse complète de votre écosystème SEO" },
              { step: "02", title: "Stratégie", desc: "Définition des objectifs et plan d'action" },
              { step: "03", title: "Optimisation", desc: "Mise en œuvre des améliorations techniques et éditoriales" },
              { step: "04", title: "Suivi", desc: "Monitoring des performances et ajustements" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nos Résultats SEO</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">Des chiffres qui parlent d'eux-mêmes</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "+250%", label: "Augmentation du trafic organique moyen" },
              { number: "Top 3", label: "Positionnement moyen sur les mots-clés cibles" },
              { number: "+180%", label: "Amélioration du taux de conversion" },
              { number: "98%", label: "Clients satisfaits de nos services SEO" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">{stat.number}</div>
                <p className="text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f1729] to-[#1e293b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Dominer Google ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Obtenez un audit SEO gratuit et découvrez comment améliorer votre visibilité en ligne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Audit SEO gratuit
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Voir nos cas clients
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
