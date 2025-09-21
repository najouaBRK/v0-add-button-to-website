import Link from "next/link"
import { ArrowRight, PenTool, Users, Search, TrendingUp, Calendar, MessageCircle } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <PenTool className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Expertise Blog</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Créez votre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Blog </span>
            Professionnel
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Développez votre audience et votre expertise avec un blog optimisé pour le SEO et l'engagement de vos
            lecteurs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Créer mon blog
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Solutions Blog Complètes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tous les outils pour créer et gérer un blog qui engage votre audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <PenTool className="w-8 h-8" />,
                title: "Éditeur Intuitif",
                description: "Interface de rédaction simple et puissante pour créer du contenu de qualité facilement",
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "SEO Optimisé",
                description: "Structure et fonctionnalités optimisées pour améliorer votre référencement naturel",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Gestion Communauté",
                description: "Système de commentaires, newsletter et partage social pour engager vos lecteurs",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Planification",
                description: "Programmation des publications et calendrier éditorial pour une stratégie cohérente",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Analytics",
                description: "Suivi des performances, audience et engagement pour optimiser votre contenu",
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Interaction",
                description: "Commentaires, partages sociaux et newsletter pour créer une communauté active",
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus de Création Blog</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              De la stratégie éditoriale au lancement, nous vous accompagnons
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Stratégie Éditoriale",
                description: "Définition de votre ligne éditoriale, personas et calendrier de publication",
              },
              {
                step: "02",
                title: "Design & Structure",
                description: "Création d'un design engageant et d'une architecture optimisée pour la lecture",
              },
              {
                step: "03",
                title: "Développement",
                description: "Intégration CMS, optimisation SEO et fonctionnalités d'engagement",
              },
              {
                step: "04",
                title: "Lancement & Formation",
                description: "Mise en ligne, formation à la rédaction et stratégie de promotion",
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
              { number: "120+", label: "Blogs créés" },
              { number: "+400%", label: "Augmentation trafic moyen" },
              { number: "2.8min", label: "Temps de lecture moyen" },
              { number: "15%", label: "Taux d'engagement moyen" },
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à lancer votre blog ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Commencez à partager votre expertise et développer votre audience
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Créer mon blog
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
