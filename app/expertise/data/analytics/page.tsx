import Link from "next/link"
import { ArrowRight, BarChart3, TrendingUp, Target, Users, Zap, CheckCircle } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium mb-6">
              <BarChart3 size={16} className="mr-2" />
              Analytics Avancées
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Transformez vos données en
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {" "}
                insights stratégiques
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Exploitez la puissance de vos données avec nos solutions d'analytics avancées. Prenez des décisions
              éclairées grâce à des analyses approfondies et des visualisations percutantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                serviceName="Analytics"
                packageName="Audit Analytics"
                packageDescription="Demande d'audit analytics depuis la page Analytics"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Audit gratuit
              </QuoteButton>
              <Link
                href="/expertise/data"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Voir toutes nos expertises Data
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nos services <span className="text-cyan-400">Analytics</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des solutions complètes pour exploiter vos données et optimiser vos performances
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="text-cyan-400" size={32} />,
                title: "Google Analytics 4",
                description: "Configuration et optimisation de GA4 pour un tracking précis de vos performances web",
              },
              {
                icon: <TrendingUp className="text-blue-400" size={32} />,
                title: "Analyse comportementale",
                description: "Comprenez le parcours de vos utilisateurs et identifiez les points d'optimisation",
              },
              {
                icon: <Target className="text-cyan-400" size={32} />,
                title: "Conversion tracking",
                description: "Suivez et optimisez vos tunnels de conversion pour maximiser vos résultats",
              },
              {
                icon: <Users className="text-blue-400" size={32} />,
                title: "Segmentation avancée",
                description: "Analysez vos audiences avec des segments personnalisés et des cohortes",
              },
              {
                icon: <Zap className="text-cyan-400" size={32} />,
                title: "Reporting automatisé",
                description: "Recevez des rapports personnalisés et automatisés sur vos KPIs essentiels",
              },
              {
                icon: <CheckCircle className="text-blue-400" size={32} />,
                title: "Audit de données",
                description: "Vérification de la qualité et de la fiabilité de vos données analytics",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Notre méthodologie <span className="text-cyan-400">Analytics</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une approche structurée pour transformer vos données en avantage concurrentiel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Diagnostic",
                description: "Analyse de votre écosystème data actuel et identification des opportunités",
              },
              {
                step: "02",
                title: "Configuration",
                description: "Mise en place des outils de tracking et des tableaux de bord personnalisés",
              },
              {
                step: "03",
                title: "Analyse & Insights",
                description: "Extraction d'insights actionnables à partir de vos données",
              },
              {
                step: "04",
                title: "Optimisation",
                description: "Recommandations stratégiques et suivi des performances",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "150+", label: "Projets Analytics réalisés" },
              { number: "40%", label: "Amélioration moyenne du ROI" },
              { number: "24/7", label: "Monitoring de vos données" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à exploiter le potentiel de vos données ?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Obtenez un audit gratuit de votre configuration analytics et découvrez comment optimiser vos performances.
          </p>
          <QuoteButton
            serviceName="Analytics"
            packageName="Consultation Analytics"
            packageDescription="Demande de consultation analytics depuis la page Analytics"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Demander un audit gratuit
            <ArrowRight className="ml-2" size={20} />
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
