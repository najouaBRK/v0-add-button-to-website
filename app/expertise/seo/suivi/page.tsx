import Link from "next/link"
import { ArrowRight, BarChart3, TrendingUp, Eye, AlertCircle, Calendar, Target } from "lucide-react"

export default function SuiviPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6">
            <BarChart3 className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">Expertise Suivi SEO</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">Suivi SEO </span>
            Avancé
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Surveillez et optimisez en continu vos performances SEO avec des rapports détaillés et des analyses
            actionnables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Suivre mes performances
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
            <h2 className="text-4xl font-bold text-white mb-6">Services Suivi SEO</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitoring complet pour piloter et optimiser votre stratégie SEO
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Suivi des Positions",
                description: "Monitoring quotidien de vos positions sur vos mots-clés stratégiques",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Analytics SEO",
                description: "Analyse du trafic organique, conversions et ROI de vos actions SEO",
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Veille Concurrentielle",
                description: "Surveillance des performances de vos concurrents et opportunités",
              },
              {
                icon: <AlertCircle className="w-8 h-8" />,
                title: "Alertes & Notifications",
                description: "Alertes automatiques en cas de chute de positions ou problèmes techniques",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Rapports Périodiques",
                description: "Rapports détaillés mensuels avec analyses et recommandations",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Optimisations Continues",
                description: "Ajustements stratégiques basés sur les données de performance",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus de Suivi SEO</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un monitoring structuré pour des décisions SEO basées sur la data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Configuration",
                description: "Mise en place des outils de tracking et définition des KPIs à suivre",
              },
              {
                step: "02",
                title: "Collecte de Données",
                description: "Monitoring automatisé des positions, trafic et performances techniques",
              },
              {
                step: "03",
                title: "Analyse & Insights",
                description: "Analyse des données et identification des tendances et opportunités",
              },
              {
                step: "04",
                title: "Actions & Optimisations",
                description: "Recommandations actionnables et ajustements stratégiques continus",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-teal-500/50 to-transparent"></div>
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
              { number: "50K+", label: "Mots-clés suivis" },
              { number: "24/7", label: "Monitoring continu" },
              { number: "95%", label: "Précision des données" },
              { number: "200+", label: "Sites monitorés" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à piloter votre SEO avec précision ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Obtenez une visibilité complète sur vos performances SEO et optimisez en continu
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Commencer le suivi
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
