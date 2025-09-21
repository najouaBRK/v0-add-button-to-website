import Link from "next/link"
import { ArrowRight, LinkIcon, TrendingUp, Shield, Users, Target, BarChart3 } from "lucide-react"

export default function NetlinkingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <LinkIcon className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">Expertise Netlinking</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Netlinking </span>
            de Qualité
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Renforcez l'autorité de votre site avec une stratégie de netlinking éthique et des backlinks de haute
            qualité qui boostent votre référencement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Booster mon autorité
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos campagnes
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services Netlinking</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des backlinks de qualité pour renforcer votre autorité et améliorer vos positions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Stratégie Netlinking",
                description: "Définition d'une stratégie de liens adaptée à votre secteur et objectifs SEO",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Prospection Partenaires",
                description: "Identification et approche de sites de qualité pour obtenir des backlinks naturels",
              },
              {
                icon: <LinkIcon className="w-8 h-8" />,
                title: "Création de Liens",
                description: "Acquisition de backlinks de haute qualité via différentes techniques éthiques",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Audit de Liens",
                description: "Analyse de votre profil de liens existant et nettoyage des liens toxiques",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Link Building Contenu",
                description: "Création de contenu linkable pour attirer naturellement des backlinks",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Suivi & Reporting",
                description: "Monitoring des liens acquis et impact sur vos positions et autorité",
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus Netlinking</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche méthodique pour construire un profil de liens solide et durable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Stratégie",
                description: "Analyse du profil de liens actuel et définition de la stratégie netlinking",
              },
              {
                step: "02",
                title: "Prospection",
                description: "Identification des opportunités de liens et approche des partenaires potentiels",
              },
              {
                step: "03",
                title: "Acquisition",
                description: "Négociation et obtention de backlinks de qualité via différentes techniques",
              },
              {
                step: "04",
                title: "Suivi & Optimisation",
                description: "Monitoring des liens acquis et optimisation continue de la stratégie",
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
              { number: "5K+", label: "Backlinks créés" },
              { number: "DR 65+", label: "Autorité moyenne sites" },
              { number: "+180%", label: "Amélioration autorité" },
              { number: "98%", label: "Liens toujours actifs" },
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à renforcer votre autorité ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Obtenez des backlinks de qualité qui propulsent votre site en première page
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Lancer ma campagne
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
