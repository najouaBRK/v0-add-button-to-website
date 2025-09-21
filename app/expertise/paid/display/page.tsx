import Link from "next/link"
import { ArrowRight, Eye, Image, Target, TrendingUp, Smartphone, BarChart3 } from "lucide-react"

export default function DisplayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Eye className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Expertise Display</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Publicité
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              {" "}
              Display{" "}
            </span>
            Impactante
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Développez votre notoriété et touchez une large audience avec des campagnes display créatives et ciblées sur
            le web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Créer mes bannières
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
            <h2 className="text-4xl font-bold text-white mb-6">Services Publicité Display</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Campagnes visuelles créatives pour maximiser votre visibilité et notoriété
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Image className="w-8 h-8" />,
                title: "Créations Visuelles",
                description: "Bannières, vidéos et formats rich media adaptés à tous les supports",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Ciblage Contextuel",
                description: "Diffusion sur des sites pertinents selon votre secteur et audience",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Multi-Device",
                description: "Campagnes optimisées pour desktop, mobile et tablette",
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Brand Awareness",
                description: "Campagnes de notoriété pour développer la reconnaissance de votre marque",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Programmatique",
                description: "Achat automatisé d'espaces publicitaires pour optimiser les performances",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Mesure d'Impact",
                description: "Suivi des impressions, clics et impact sur la notoriété de votre marque",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus Display</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche créative pour des campagnes display qui marquent les esprits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Stratégie Créative",
                description: "Définition des objectifs, messages clés et stratégie de diffusion",
              },
              {
                step: "02",
                title: "Production",
                description: "Création des visuels, bannières et formats adaptés aux différents supports",
              },
              {
                step: "03",
                title: "Ciblage & Diffusion",
                description: "Configuration du ciblage et lancement sur les réseaux publicitaires",
              },
              {
                step: "04",
                title: "Optimisation",
                description: "Analyse des performances et optimisation des créations et ciblages",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
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
              { number: "200+", label: "Campagnes display" },
              { number: "50M+", label: "Impressions générées" },
              { number: "2.8%", label: "CTR moyen" },
              { number: "+65%", label: "Notoriété assistée" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à développer votre notoriété ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Créons ensemble des campagnes display qui captivent votre audience sur le web
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Lancer ma campagne display
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
