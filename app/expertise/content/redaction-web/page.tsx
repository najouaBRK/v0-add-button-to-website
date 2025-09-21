import Link from "next/link"
import { ArrowRight, PenTool, Search, Users, TrendingUp, FileText, CheckCircle } from "lucide-react"

export default function RedactionWebPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <PenTool className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Expertise Rédaction Web</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Rédaction Web{" "}
            </span>
            Professionnelle
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Créez du contenu web de qualité qui engage votre audience, améliore votre SEO et convertit vos visiteurs en
            clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Créer mon contenu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos contenus
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services de Rédaction Web</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Du contenu optimisé qui parle à votre audience et aux moteurs de recherche
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Pages Web",
                description: "Rédaction de pages d'accueil, à propos, services optimisées pour la conversion",
              },
              {
                icon: <PenTool className="w-8 h-8" />,
                title: "Articles de Blog",
                description: "Contenu éditorial engageant et informatif pour développer votre expertise",
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "SEO Copywriting",
                description: "Textes optimisés pour les moteurs de recherche sans sacrifier la qualité",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Fiches Produits",
                description: "Descriptions produits persuasives qui incitent à l'achat",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Landing Pages",
                description: "Textes de conversion optimisés pour maximiser vos taux de transformation",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Révision & Correction",
                description: "Relecture professionnelle et optimisation de vos contenus existants",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Notre Processus de Rédaction</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche méthodique pour créer du contenu qui performe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Briefing & Recherche",
                description: "Analyse de vos objectifs, audience cible et recherche de mots-clés stratégiques",
              },
              {
                step: "02",
                title: "Stratégie Éditoriale",
                description: "Définition du ton, style et structure optimale pour votre contenu",
              },
              {
                step: "03",
                title: "Rédaction & SEO",
                description: "Création du contenu optimisé pour l'engagement et le référencement",
              },
              {
                step: "04",
                title: "Révision & Livraison",
                description: "Relecture, corrections et optimisations finales avant publication",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
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
              { number: "500+", label: "Contenus rédigés" },
              { number: "+180%", label: "Amélioration trafic moyen" },
              { number: "4.2min", label: "Temps de lecture moyen" },
              { number: "95%", label: "Clients satisfaits" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à créer du contenu qui convertit ?</h2>
          <p className="text-xl text-gray-300 mb-8">Obtenez un devis personnalisé pour vos besoins en rédaction web</p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Demander un devis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
