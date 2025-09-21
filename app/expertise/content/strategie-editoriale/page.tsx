import Link from "next/link"
import { ArrowRight, Target, Calendar, Users, TrendingUp, BookOpen, Lightbulb } from "lucide-react"

export default function StrategieEditorialePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Expertise Stratégie Éditoriale</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Stratégie Éditoriale{" "}
            </span>
            Sur Mesure
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Développez une stratégie de contenu cohérente qui engage votre audience et atteint vos objectifs business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Définir ma stratégie
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos stratégies
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services Stratégie Éditoriale</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche globale pour structurer et optimiser votre communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Audit Éditorial",
                description: "Analyse complète de votre contenu existant et identification des opportunités",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Personas & Audience",
                description: "Définition précise de vos cibles et adaptation du message à chaque segment",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Calendrier Éditorial",
                description: "Planification stratégique de vos publications pour maximiser l'impact",
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Ligne Éditoriale",
                description: "Définition du ton, style et valeurs pour une communication cohérente",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Idéation Contenu",
                description: "Génération d'idées créatives et pertinentes pour alimenter vos canaux",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "KPIs & Mesure",
                description: "Définition des indicateurs de performance et suivi des résultats",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus de Stratégie Éditoriale</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour construire votre stratégie de contenu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Diagnostic",
                description: "Audit de l'existant, analyse concurrentielle et identification des enjeux",
              },
              {
                step: "02",
                title: "Stratégie",
                description: "Définition des objectifs, personas et positionnement éditorial",
              },
              {
                step: "03",
                title: "Planification",
                description: "Création du calendrier éditorial et des guidelines de contenu",
              },
              {
                step: "04",
                title: "Déploiement",
                description: "Mise en œuvre, formation des équipes et suivi des performances",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
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
              { number: "150+", label: "Stratégies créées" },
              { number: "+250%", label: "Engagement moyen" },
              { number: "12", label: "Mois d'accompagnement" },
              { number: "92%", label: "Objectifs atteints" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à structurer votre communication ?</h2>
          <p className="text-xl text-gray-300 mb-8">Créons ensemble une stratégie éditoriale qui fait la différence</p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Créer ma stratégie
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
