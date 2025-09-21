import Link from "next/link"
import { ArrowRight, Search, Target, TrendingUp, BarChart3, Zap, DollarSign } from "lucide-react"

export default function GoogleAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Search className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Expertise Google Ads</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Google Ads{" "}
            </span>
            Performant
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Générez des leads qualifiés et boostez vos ventes avec des campagnes Google Ads optimisées pour un ROI
            maximal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Lancer mes campagnes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos résultats
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services Google Ads</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Campagnes publicitaires optimisées pour maximiser votre retour sur investissement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "Campagnes Search",
                description: "Annonces textuelles ciblées sur les mots-clés de vos prospects qualifiés",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Display & Shopping",
                description: "Campagnes visuelles et fiches produits pour maximiser votre visibilité",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performance Max",
                description: "Campagnes automatisées sur tous les réseaux Google pour une performance optimale",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Optimisation Continue",
                description: "Tests A/B, ajustements d'enchères et optimisations pour améliorer les performances",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Tracking & Analytics",
                description: "Suivi des conversions et analyse ROI pour mesurer l'efficacité de vos campagnes",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Gestion Budget",
                description: "Optimisation des budgets et enchères pour maximiser votre retour sur investissement",
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus Google Ads</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche structurée pour des campagnes publicitaires rentables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Stratégie",
                description: "Analyse de vos objectifs, concurrence et définition de la stratégie publicitaire",
              },
              {
                step: "02",
                title: "Configuration",
                description: "Création des campagnes, groupes d'annonces et paramétrage du tracking",
              },
              {
                step: "03",
                title: "Lancement & Tests",
                description: "Mise en ligne des campagnes avec tests A/B sur les annonces et landing pages",
              },
              {
                step: "04",
                title: "Optimisation",
                description: "Analyse des performances et optimisations continues pour améliorer le ROI",
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
              { number: "300+", label: "Campagnes gérées" },
              { number: "450%", label: "ROI moyen" },
              { number: "€2.8M", label: "Budget publicitaire géré" },
              { number: "12%", label: "Taux de conversion moyen" },
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à générer plus de leads ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Lancez des campagnes Google Ads rentables qui transforment vos clics en clients
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Démarrer mes campagnes
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
