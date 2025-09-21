import { BarChart3, Database, TrendingUp, Zap, Brain, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function DataExpertisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1e293b] to-[#0f172a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-orange-500/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <BarChart3 className="w-16 h-16 text-orange-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Expertise Data
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformez vos données en avantage concurrentiel. Analytics, BI, IA : nous donnons du sens à vos données
            pour optimiser vos performances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Audit data gratuit
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Voir nos dashboards
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Services Data</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la collecte à l'analyse, nous vous accompagnons dans votre transformation data-driven
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-cyan-50 to-blue-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics Avancées</h3>
                <p className="text-gray-600 mb-6">
                  Configuration et optimisation de Google Analytics, Adobe Analytics et outils de mesure.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Google Analytics 4</li>
                  <li>• Tag Management</li>
                  <li>• Conversion tracking</li>
                  <li>• Attribution modeling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Warehouse</h3>
                <p className="text-gray-600 mb-6">
                  Centralisation et structuration de vos données pour une vision 360° de votre activité.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Architecture data</li>
                  <li>• ETL/ELT pipelines</li>
                  <li>• Data modeling</li>
                  <li>• Data governance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Intelligence</h3>
                <p className="text-gray-600 mb-6">
                  Dashboards interactifs et rapports automatisés pour piloter votre performance en temps réel.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Dashboards Tableau/Power BI</li>
                  <li>• Rapports automatisés</li>
                  <li>• KPIs personnalisés</li>
                  <li>• Alertes intelligentes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligence Artificielle</h3>
                <p className="text-gray-600 mb-6">
                  Modèles prédictifs et algorithmes d'IA pour anticiper les tendances et optimiser vos décisions.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Machine Learning</li>
                  <li>• Analyse prédictive</li>
                  <li>• Recommandations IA</li>
                  <li>• Automatisation intelligente</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Strategy</h3>
                <p className="text-gray-600 mb-6">
                  Définition de votre stratégie data et accompagnement dans votre transformation digitale.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Audit data existant</li>
                  <li>• Roadmap data</li>
                  <li>• Formation équipes</li>
                  <li>• Change management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-pink-50 to-rose-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Automation</h3>
                <p className="text-gray-600 mb-6">
                  Automatisation des processus data pour gagner en efficacité et réduire les erreurs.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Workflows automatisés</li>
                  <li>• API integrations</li>
                  <li>• Data quality monitoring</li>
                  <li>• Alertes proactives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Méthodologie Data</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour transformer vos données en insights actionnables
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "Évaluation de votre écosystème data actuel" },
              { step: "02", title: "Architecture", desc: "Conception de votre infrastructure data" },
              { step: "03", title: "Implémentation", desc: "Mise en place des outils et processus" },
              { step: "04", title: "Optimisation", desc: "Amélioration continue et formation" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies Data</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous maîtrisons les outils les plus performants du marché
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: "Analytics", tools: "Google Analytics 4, Adobe Analytics, Mixpanel" },
              { category: "Visualisation", tools: "Tableau, Power BI, Looker, Data Studio" },
              { category: "Cloud", tools: "AWS, Google Cloud, Azure, Snowflake" },
              { category: "IA/ML", tools: "Python, R, TensorFlow, Scikit-learn" },
            ].map((tech, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.category}</h3>
                  <p className="text-gray-600 text-sm">{tech.tools}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Impact de Nos Solutions Data</h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">Des résultats mesurables pour nos clients</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "+150%", label: "Amélioration de la prise de décision" },
              { number: "70%", label: "Réduction du temps d'analyse" },
              { number: "+200%", label: "Augmentation du ROI marketing" },
              { number: "24/7", label: "Monitoring en temps réel" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">{stat.number}</div>
                <p className="text-cyan-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f1729] to-[#1e293b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Exploiter le Pouvoir de Vos Données ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Découvrez comment transformer vos données en avantage concurrentiel avec un audit gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Audit data gratuit
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Voir nos projets data
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
