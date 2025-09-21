import Link from "next/link"
import { ArrowRight, Target, Zap, TrendingUp, Users, MousePointer, BarChart3 } from "lucide-react"

export default function LandingPagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">Expertise Landing Page</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Créez des
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              {" "}
              Landing Pages{" "}
            </span>
            qui Convertissent
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Maximisez vos conversions avec des landing pages optimisées pour transformer vos visiteurs en clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Créer ma landing page
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Landing Pages Haute Conversion</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Chaque élément est optimisé pour maximiser vos taux de conversion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Ciblage Précis",
                description: "Message et design adaptés à votre audience cible pour maximiser l'impact",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Chargement Ultra-Rapide",
                description: "Optimisation poussée pour des temps de chargement inférieurs à 2 secondes",
              },
              {
                icon: <MousePointer className="w-8 h-8" />,
                title: "CTA Optimisés",
                description: "Boutons d'action stratégiquement placés et testés pour maximiser les clics",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "UX Conversion",
                description: "Parcours utilisateur fluide et intuitif pour guider vers l'action souhaitée",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "A/B Testing",
                description: "Tests comparatifs pour identifier les versions les plus performantes",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Analytics Avancés",
                description: "Suivi détaillé des conversions et comportements pour optimiser en continu",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus de Création Landing Page</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche data-driven pour créer des pages qui convertissent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse & Objectifs",
                description: "Définition des objectifs de conversion et analyse de votre audience cible",
              },
              {
                step: "02",
                title: "Copywriting & Design",
                description: "Rédaction persuasive et design optimisé pour la conversion",
              },
              {
                step: "03",
                title: "Développement & Tests",
                description: "Intégration responsive et tests de performance sur tous les devices",
              },
              {
                step: "04",
                title: "Optimisation Continue",
                description: "A/B testing et optimisations basées sur les données de performance",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-red-500/50 to-transparent"></div>
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
              { number: "200+", label: "Landing pages créées" },
              { number: "8.5%", label: "Taux de conversion moyen" },
              { number: "+320%", label: "Amélioration conversions" },
              { number: "1.8s", label: "Temps de chargement" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à booster vos conversions ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Créons ensemble une landing page qui transforme vos visiteurs en clients
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Booster mes conversions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
