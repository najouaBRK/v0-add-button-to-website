import Link from "next/link"
import { ArrowRight, BarChart3, TrendingUp, Target, Eye, PieChart, Activity } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Expertise Analytics Paid</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Analytics{" "}
            </span>
            Publicitaire
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Mesurez, analysez et optimisez vos campagnes publicitaires avec des données précises et des insights
            actionnables pour maximiser votre ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Analyser mes performances
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos dashboards
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services Analytics Publicitaire</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Données et insights pour piloter vos investissements publicitaires avec précision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Tracking Avancé",
                description: "Configuration du suivi des conversions et attribution multi-canal",
              },
              {
                icon: <PieChart className="w-8 h-8" />,
                title: "Dashboards Personnalisés",
                description: "Tableaux de bord sur mesure pour visualiser vos KPIs publicitaires",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Analyse ROI",
                description: "Calcul précis du retour sur investissement par canal et campagne",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Attribution Modeling",
                description: "Modèles d'attribution pour comprendre le parcours de conversion",
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Reporting Automatisé",
                description: "Rapports automatiques avec insights et recommandations d'optimisation",
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Alertes Performance",
                description: "Notifications en temps réel sur les variations de performance",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Processus Analytics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche data-driven pour optimiser vos investissements publicitaires
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Setup",
                description: "Audit des outils existants et configuration du tracking avancé",
              },
              {
                step: "02",
                title: "Collecte de Données",
                description: "Mise en place de la collecte de données multi-plateformes",
              },
              {
                step: "03",
                title: "Analyse & Insights",
                description: "Analyse des performances et identification des opportunités",
              },
              {
                step: "04",
                title: "Optimisation Continue",
                description: "Recommandations actionnables et suivi des améliorations",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                <p className="text-gray-300 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Comptes analysés" },
              { number: "+45%", label: "Amélioration ROI moyen" },
              { number: "95%", label: "Précision tracking" },
              { number: "24h", label: "Délai de reporting" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à optimiser vos investissements publicitaires ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Obtenez une vision claire de vos performances et maximisez votre retour sur investissement
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Analyser mes campagnes
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
