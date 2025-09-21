import { DollarSign, Target, TrendingUp, Zap, BarChart3, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PaidExpertisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1e293b] to-[#0f172a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-500/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <DollarSign className="w-16 h-16 text-orange-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Expertise Paid
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Maximisez votre ROI avec des campagnes publicitaires performantes. Google Ads, Facebook Ads, LinkedIn Ads :
            nous optimisons chaque euro investi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Audit publicitaire gratuit
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Voir nos performances
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Services Paid</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des campagnes publicitaires sur mesure pour générer des leads qualifiés et booster vos ventes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads</h3>
                <p className="text-gray-600 mb-6">
                  Campagnes Search, Display et Shopping pour capturer l'intention d'achat de vos prospects.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Campagnes Search</li>
                  <li>• Google Shopping</li>
                  <li>• Display & Remarketing</li>
                  <li>• YouTube Ads</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Facebook & Instagram Ads</h3>
                <p className="text-gray-600 mb-6">
                  Publicités sociales ciblées pour développer votre notoriété et générer des conversions.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Campagnes de notoriété</li>
                  <li>• Génération de leads</li>
                  <li>• Remarketing social</li>
                  <li>• Stories & Reels</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">LinkedIn Ads</h3>
                <p className="text-gray-600 mb-6">
                  Publicités B2B ciblées pour atteindre les décideurs et développer votre réseau professionnel.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Sponsored Content</li>
                  <li>• Message Ads</li>
                  <li>• Lead Gen Forms</li>
                  <li>• Event Ads</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Stratégie Paid</h3>
                <p className="text-gray-600 mb-6">
                  Définition de votre stratégie publicitaire globale et allocation optimale des budgets.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Audit concurrentiel</li>
                  <li>• Stratégie multi-canal</li>
                  <li>• Allocation budgétaire</li>
                  <li>• Calendrier de campagnes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimisation ROI</h3>
                <p className="text-gray-600 mb-6">
                  Amélioration continue de vos campagnes pour maximiser le retour sur investissement.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• A/B Testing</li>
                  <li>• Optimisation des enchères</li>
                  <li>• Landing pages</li>
                  <li>• Conversion tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-pink-50 to-rose-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Reporting</h3>
                <p className="text-gray-600 mb-6">
                  Suivi détaillé des performances avec des rapports transparents et actionables.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Dashboards en temps réel</li>
                  <li>• Rapports mensuels</li>
                  <li>• Attribution modeling</li>
                  <li>• Recommandations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Approche Paid</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie data-driven pour des campagnes publicitaires rentables
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "Analyse de vos campagnes existantes et de la concurrence" },
              { step: "02", title: "Stratégie", desc: "Définition des objectifs et choix des canaux" },
              { step: "03", title: "Lancement", desc: "Création et mise en ligne des campagnes optimisées" },
              { step: "04", title: "Optimisation", desc: "Amélioration continue basée sur les données" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nos Performances Paid</h2>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">Des résultats concrets pour nos clients</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "4.2x", label: "ROI moyen sur nos campagnes" },
              { number: "-35%", label: "Réduction du coût par acquisition" },
              { number: "+280%", label: "Augmentation des conversions" },
              { number: "95%", label: "Clients qui renouvellent leur confiance" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-200 mb-2">{stat.number}</div>
                <p className="text-yellow-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Plateformes Publicitaires</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous maîtrisons toutes les plateformes pour maximiser votre portée
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Google Ads", desc: "Search, Display, Shopping, YouTube" },
              { name: "Facebook Ads", desc: "Facebook, Instagram, Messenger" },
              { name: "LinkedIn Ads", desc: "Sponsored Content, InMail, Lead Gen" },
              { name: "Microsoft Ads", desc: "Bing, Yahoo, AOL" },
            ].map((platform, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-gray-600 text-sm">{platform.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f1729] to-[#1e293b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Booster Vos Ventes ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Obtenez un audit gratuit de vos campagnes publicitaires et découvrez comment améliorer votre ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Audit publicitaire gratuit
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
