import Link from "next/link"
import { ArrowRight, Globe, Smartphone, Search, Zap, Users, TrendingUp } from "lucide-react"

export default function SiteVitrinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Expertise Site Vitrine</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Créez votre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              {" "}
              Site Vitrine{" "}
            </span>
            Professionnel
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Développez votre présence en ligne avec un site vitrine sur mesure qui reflète votre identité et convertit
            vos visiteurs en clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Demander un devis
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
            <h2 className="text-4xl font-bold text-white mb-6">Nos Services Site Vitrine</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche complète pour créer un site vitrine qui vous démarque de la concurrence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Design Responsive",
                description:
                  "Site adapté à tous les écrans (mobile, tablette, desktop) pour une expérience utilisateur optimale",
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "SEO Optimisé",
                description: "Structure et contenu optimisés pour les moteurs de recherche dès la conception",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performance",
                description: "Temps de chargement ultra-rapide pour réduire le taux de rebond",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "UX/UI Design",
                description: "Interface intuitive et parcours utilisateur optimisé pour maximiser les conversions",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile First",
                description: "Conception prioritaire mobile pour s'adapter aux habitudes de navigation actuelles",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Analytics",
                description: "Suivi des performances et analyse du comportement des visiteurs",
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
            <h2 className="text-4xl font-bold text-white mb-6">Notre Processus de Création</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour créer votre site vitrine en 4 étapes clés
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse & Stratégie",
                description: "Audit de vos besoins, analyse concurrentielle et définition de la stratégie digitale",
              },
              {
                step: "02",
                title: "Design & Maquettage",
                description: "Création des maquettes et validation du design en accord avec votre identité",
              },
              {
                step: "03",
                title: "Développement",
                description: "Intégration responsive, optimisation SEO et tests de performance",
              },
              {
                step: "04",
                title: "Mise en ligne & Suivi",
                description: "Déploiement, formation et accompagnement pour la maintenance",
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
              { number: "150+", label: "Sites vitrines créés" },
              { number: "98%", label: "Clients satisfaits" },
              { number: "2.5s", label: "Temps de chargement moyen" },
              { number: "24h", label: "Support réactif" },
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à créer votre site vitrine ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Obtenez un devis personnalisé et gratuit pour votre projet de site vitrine
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Demander un devis gratuit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
