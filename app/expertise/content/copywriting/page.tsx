import Link from "next/link"
import { ArrowRight, Zap, Target, TrendingUp, MessageCircle, DollarSign, Users } from "lucide-react"

export default function CopywritingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 text-sm font-medium">Expertise Copywriting</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Copywriting{" "}
            </span>
            Persuasif
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformez vos mots en ventes avec du copywriting qui persuade, engage et convertit votre audience en
            clients fidèles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Booster mes ventes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos copies
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services Copywriting</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des mots qui vendent et des messages qui convertissent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Pages de Vente",
                description: "Landing pages et pages produits optimisées pour maximiser les conversions",
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Emails Marketing",
                description: "Séquences d'emails persuasives qui nurturent et convertissent vos prospects",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Publicités",
                description: "Copies publicitaires percutantes pour Facebook, Google Ads et LinkedIn",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Tunnels de Vente",
                description: "Séquences complètes de conversion du prospect au client fidèle",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Scripts Vidéo",
                description: "Scripts engageants pour vos vidéos marketing et présentations produits",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Optimisation CRO",
                description: "Tests et optimisations pour améliorer continuellement vos taux de conversion",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus Copywriting</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche psychologique pour créer des messages qui vendent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Recherche & Analyse",
                description: "Étude approfondie de votre audience, concurrence et psychologie d'achat",
              },
              {
                step: "02",
                title: "Stratégie Persuasion",
                description: "Définition des leviers psychologiques et arguments de vente clés",
              },
              {
                step: "03",
                title: "Rédaction & Tests",
                description: "Création de copies persuasives et tests A/B pour optimiser les performances",
              },
              {
                step: "04",
                title: "Optimisation Continue",
                description: "Analyse des résultats et amélioration continue des taux de conversion",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
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
              { number: "300+", label: "Copies créées" },
              { number: "+450%", label: "Amélioration conversions" },
              { number: "12.8%", label: "Taux de conversion moyen" },
              { number: "€2.5M", label: "CA généré clients" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à transformer vos mots en ventes ?</h2>
          <p className="text-xl text-gray-300 mb-8">Créons ensemble du copywriting qui fait exploser vos conversions</p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Multiplier mes ventes
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
