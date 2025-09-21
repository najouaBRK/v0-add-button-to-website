import Link from "next/link"
import { ArrowRight, Search, BarChart3, AlertTriangle, CheckCircle, FileText, TrendingUp } from "lucide-react"

export default function AuditSeoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Search className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">Expertise Audit SEO</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Audit SEO{" "}
            </span>
            Complet
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Identifiez les opportunités d'amélioration de votre référencement avec un audit SEO approfondi et des
            recommandations actionnables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Auditer mon site
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos audits
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services Audit SEO</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une analyse complète pour optimiser votre visibilité sur les moteurs de recherche
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "Audit Technique",
                description: "Analyse approfondie de la structure, vitesse et indexabilité de votre site",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Audit de Contenu",
                description: "Évaluation de la qualité, pertinence et optimisation de vos contenus",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Analyse Concurrentielle",
                description: "Étude de vos concurrents et identification des opportunités de marché",
              },
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: "Détection des Problèmes",
                description: "Identification des erreurs techniques et pénalités potentielles",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Opportunités de Croissance",
                description: "Recommandations pour améliorer votre positionnement et trafic",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Plan d'Action",
                description: "Roadmap détaillée avec priorités et échéances pour optimiser votre SEO",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus d'Audit SEO</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une méthodologie rigoureuse pour un diagnostic complet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse Initiale",
                description: "Crawl complet du site et collecte des données de performance actuelles",
              },
              {
                step: "02",
                title: "Diagnostic Technique",
                description: "Évaluation de la structure, vitesse et aspects techniques du référencement",
              },
              {
                step: "03",
                title: "Analyse Contenu & Mots-clés",
                description: "Audit du contenu existant et analyse des opportunités de mots-clés",
              },
              {
                step: "04",
                title: "Rapport & Recommandations",
                description: "Livraison du rapport détaillé avec plan d'action priorisé",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent"></div>
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
              { number: "500+", label: "Audits réalisés" },
              { number: "+180%", label: "Amélioration trafic moyen" },
              { number: "150+", label: "Points analysés" },
              { number: "7j", label: "Délai de livraison" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à optimiser votre référencement ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Obtenez un audit SEO complet et des recommandations pour booster votre visibilité
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Demander un audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
