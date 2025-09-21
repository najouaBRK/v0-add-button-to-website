import Link from "next/link"
import { ArrowRight, Briefcase, Users, Target, TrendingUp, Building, BarChart3 } from "lucide-react"

export default function LinkedInAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Expertise LinkedIn Ads</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              LinkedIn Ads{" "}
            </span>
            B2B
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Générez des leads qualifiés B2B et développez votre réseau professionnel avec des campagnes LinkedIn Ads
            ciblées et performantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Générer des leads B2B
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos campagnes B2B
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services LinkedIn Ads</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Campagnes B2B professionnelles pour atteindre les décideurs de votre secteur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Ciblage Professionnel",
                description: "Ciblage par poste, secteur, entreprise et compétences pour toucher les bons décideurs",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Lead Generation",
                description: "Formulaires natifs LinkedIn pour capturer des leads B2B qualifiés facilement",
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Account-Based Marketing",
                description: "Campagnes ciblées sur des entreprises spécifiques pour l'ABM",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Contenu Professionnel",
                description: "Création de contenus adaptés au contexte professionnel LinkedIn",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Notoriété B2B",
                description: "Campagnes de brand awareness pour développer votre réputation secteur",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "ROI B2B",
                description: "Suivi des conversions et calcul du ROI sur vos campagnes professionnelles",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus LinkedIn Ads</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche B2B structurée pour des campagnes professionnelles efficaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Stratégie B2B",
                description: "Analyse de vos cibles B2B, personas décideurs et objectifs commerciaux",
              },
              {
                step: "02",
                title: "Ciblage & Contenu",
                description: "Configuration du ciblage professionnel et création de contenus adaptés",
              },
              {
                step: "03",
                title: "Campagnes & Tests",
                description: "Lancement des campagnes avec tests sur les audiences et messages",
              },
              {
                step: "04",
                title: "Optimisation ROI",
                description: "Analyse des performances B2B et optimisation du coût par lead qualifié",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
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
              { number: "150+", label: "Campagnes B2B" },
              { number: "€45", label: "Coût par lead moyen" },
              { number: "25%", label: "Taux de conversion" },
              { number: "380%", label: "ROI moyen" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à développer votre business B2B ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Atteignez les décideurs de votre secteur avec des campagnes LinkedIn Ads performantes
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Développer mon réseau B2B
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
