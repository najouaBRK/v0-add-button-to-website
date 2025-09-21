import Link from "next/link"
import { ArrowRight, Users, Target, Heart, BarChart3, Smartphone, TrendingUp } from "lucide-react"

export default function FacebookAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 text-sm font-medium">Expertise Facebook Ads</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
              Facebook Ads{" "}
            </span>
            Ciblées
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Atteignez votre audience idéale sur Facebook et Instagram avec des campagnes publicitaires créatives et
            performantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Créer mes campagnes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos créations
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services Facebook Ads</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Campagnes créatives sur Facebook et Instagram pour engager votre audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Ciblage Précis",
                description: "Audiences personnalisées et lookalike pour toucher vos prospects idéaux",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Créations Visuelles",
                description: "Images, vidéos et carrousels optimisés pour capter l'attention sur mobile",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Engagement Social",
                description: "Campagnes d'interaction pour développer votre communauté et notoriété",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Lead Generation",
                description: "Formulaires intégrés pour capturer des leads qualifiés directement sur Facebook",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Conversion Tracking",
                description: "Pixel Facebook et suivi des conversions pour mesurer l'efficacité",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Optimisation IA",
                description: "Algorithmes d'apprentissage automatique pour optimiser vos performances",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus Facebook Ads</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche créative et data-driven pour des campagnes qui convertissent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Stratégie & Personas",
                description: "Définition des objectifs, audiences cibles et stratégie créative",
              },
              {
                step: "02",
                title: "Création & Setup",
                description: "Production des visuels, rédaction des copies et configuration des campagnes",
              },
              {
                step: "03",
                title: "Tests & Lancement",
                description: "Tests A/B sur les créations et audiences, puis lancement progressif",
              },
              {
                step: "04",
                title: "Optimisation",
                description: "Analyse des performances et optimisations continues des campagnes",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
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
              { number: "250+", label: "Campagnes créées" },
              { number: "8.5%", label: "Taux de conversion moyen" },
              { number: "€1.2M", label: "Budget publicitaire géré" },
              { number: "2.8x", label: "ROAS moyen" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-indigo-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à conquérir Facebook et Instagram ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Créons ensemble des campagnes qui captivent votre audience et génèrent des résultats
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Lancer mes campagnes
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
