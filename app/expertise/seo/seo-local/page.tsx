import Link from "next/link"
import { ArrowRight, MapPin, Star, Users, Smartphone, Building, TrendingUp } from "lucide-react"

export default function SeoLocalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Expertise SEO Local</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              SEO Local{" "}
            </span>
            Performant
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dominez les recherches locales et attirez plus de clients dans votre zone géographique avec une stratégie
            SEO local optimisée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Dominer localement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos succès locaux
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services SEO Local</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tout pour être visible et trouvé par vos clients locaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="w-8 h-8" />,
                title: "Google My Business",
                description: "Optimisation complète de votre fiche GMB pour maximiser votre visibilité locale",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Citations Locales",
                description: "Création et gestion des citations dans les annuaires locaux pertinents",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Gestion des Avis",
                description: "Stratégie pour obtenir plus d'avis positifs et gérer votre e-réputation",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Recherche Mobile",
                description: "Optimisation pour les recherches 'près de moi' et mobile-first",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Contenu Local",
                description: "Création de contenu géolocalisé pour attirer votre audience locale",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Suivi Local",
                description: "Monitoring des positions locales et analyse de la concurrence géographique",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus SEO Local</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une stratégie locale complète pour dominer votre marché géographique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit Local",
                description: "Analyse de votre présence locale actuelle et de la concurrence géographique",
              },
              {
                step: "02",
                title: "Optimisation GMB",
                description: "Configuration et optimisation complète de votre Google My Business",
              },
              {
                step: "03",
                title: "Citations & Contenu",
                description: "Création des citations locales et contenu géolocalisé optimisé",
              },
              {
                step: "04",
                title: "Suivi & Amélioration",
                description: "Monitoring des performances locales et optimisations continues",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-500/50 to-transparent"></div>
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
              { number: "250+", label: "Entreprises locales" },
              { number: "+320%", label: "Visibilité locale" },
              { number: "4.8/5", label: "Note moyenne avis" },
              { number: "85%", label: "Top 3 local pack" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à dominer votre marché local ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Attirez plus de clients dans votre zone avec une stratégie SEO local performante
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Conquérir mon territoire
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
