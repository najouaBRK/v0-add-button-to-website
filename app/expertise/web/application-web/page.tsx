import Link from "next/link"
import { ArrowRight, Code, Smartphone, Cloud, Shield, Zap, Users } from "lucide-react"

export default function ApplicationWebPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
            <Code className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 text-sm font-medium">Expertise Application Web</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Développez votre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
              {" "}
              Application Web{" "}
            </span>
            Sur Mesure
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Créez des applications web performantes et évolutives qui répondent parfaitement aux besoins de votre
            entreprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Développer mon app
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos applications
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Applications Web Avancées</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies modernes pour des applications robustes et évolutives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Développement Full-Stack",
                description: "Applications complètes avec frontend moderne et backend robuste",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Progressive Web App",
                description: "Applications web qui fonctionnent comme des apps natives sur mobile",
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Architecture Cloud",
                description: "Déploiement scalable sur infrastructure cloud moderne",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Sécurité Avancée",
                description: "Authentification, autorisation et protection des données sensibles",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performance Optimisée",
                description: "Applications ultra-rapides avec optimisations avancées",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Multi-utilisateurs",
                description: "Gestion des rôles, permissions et collaboration en temps réel",
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus de Développement</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Méthodologie agile pour livrer des applications de qualité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse & Conception",
                description: "Étude des besoins, architecture technique et spécifications fonctionnelles",
              },
              {
                step: "02",
                title: "Prototypage & UX",
                description: "Maquettes interactives et validation de l'expérience utilisateur",
              },
              {
                step: "03",
                title: "Développement Agile",
                description: "Développement itératif avec livraisons régulières et tests continus",
              },
              {
                step: "04",
                title: "Déploiement & Maintenance",
                description: "Mise en production, monitoring et évolutions continues",
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
              { number: "75+", label: "Applications développées" },
              { number: "99.9%", label: "Uptime moyen" },
              { number: "50ms", label: "Temps de réponse API" },
              { number: "24/7", label: "Support technique" },
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à développer votre application ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discutons de votre projet et créons ensemble l'application de vos rêves
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Discuter de mon projet
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
