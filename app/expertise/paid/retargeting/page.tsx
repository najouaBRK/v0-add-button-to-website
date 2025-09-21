import Link from "next/link"
import { ArrowRight, RotateCcw, Target, Users, TrendingUp, ShoppingCart, BarChart3 } from "lucide-react"

export default function RetargetingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <RotateCcw className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">Expertise Retargeting</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Retargeting{" "}
            </span>
            Intelligent
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Reconquérez vos visiteurs et transformez l'intérêt en ventes avec des campagnes de retargeting
            personnalisées et performantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Reconquérir mes visiteurs
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
            <h2 className="text-4xl font-bold text-white mb-6">Services Retargeting</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stratégies de reconquête pour transformer l'intérêt en conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Audiences Personnalisées",
                description: "Segmentation fine des visiteurs selon leur comportement sur votre site",
              },
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: "Abandon de Panier",
                description: "Campagnes spécifiques pour récupérer les paniers abandonnés",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Parcours Dynamique",
                description: "Messages adaptés selon la page visitée et l'étape du parcours client",
              },
              {
                icon: <RotateCcw className="w-8 h-8" />,
                title: "Cross-Platform",
                description: "Retargeting sur Google, Facebook, Instagram et réseaux display",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Optimisation Fréquence",
                description: "Gestion intelligente de la fréquence pour éviter la lassitude publicitaire",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Attribution Avancée",
                description: "Suivi précis de l'impact du retargeting sur vos conversions",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus Retargeting</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche stratégique pour maximiser la reconquête de vos prospects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse Comportementale",
                description: "Étude des parcours utilisateurs et identification des points de sortie",
              },
              {
                step: "02",
                title: "Segmentation",
                description: "Création d'audiences personnalisées selon les actions et intérêts",
              },
              {
                step: "03",
                title: "Campagnes Ciblées",
                description: "Lancement de campagnes adaptées à chaque segment d'audience",
              },
              {
                step: "04",
                title: "Optimisation Continue",
                description: "Ajustement des messages et fréquences pour maximiser les conversions",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
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
              { number: "180+", label: "Campagnes retargeting" },
              { number: "15%", label: "Taux de conversion moyen" },
              { number: "+280%", label: "ROI vs acquisition" },
              { number: "25%", label: "Récupération paniers" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à récupérer vos prospects perdus ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transformez l'intérêt en ventes avec des campagnes de retargeting intelligentes
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Récupérer mes prospects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
