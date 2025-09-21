import Link from "next/link"
import { ArrowRight, Mail, Users, TrendingUp, Calendar, BarChart3, Heart } from "lucide-react"

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-6">
            <Mail className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 text-sm font-medium">Expertise Newsletter</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
              Newsletter{" "}
            </span>
            Engageante
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Créez une newsletter qui fidélise votre audience, génère du trafic et transforme vos abonnés en clients
            fidèles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Créer ma newsletter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos newsletters
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services Newsletter</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              De la stratégie à l'exécution, tout pour une newsletter qui performe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Design & Template",
                description: "Templates personnalisés et responsive design pour tous les clients email",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Stratégie Contenu",
                description: "Ligne éditoriale et planning de contenu adapté à votre audience",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Automatisation",
                description: "Séquences automatisées et workflows pour nurturing et conversion",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Segmentation",
                description: "Ciblage précis et personnalisation des messages selon les segments",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Analytics & Reporting",
                description: "Suivi des performances et optimisation continue des campagnes",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Fidélisation",
                description: "Stratégies d'engagement pour transformer les abonnés en ambassadeurs",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus Newsletter</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche structurée pour créer une newsletter qui engage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Stratégie & Objectifs",
                description: "Définition des objectifs, audience cible et positionnement de la newsletter",
              },
              {
                step: "02",
                title: "Design & Setup",
                description: "Création du template, configuration technique et intégrations",
              },
              {
                step: "03",
                title: "Contenu & Lancement",
                description: "Rédaction des premiers contenus et lancement avec stratégie d'acquisition",
              },
              {
                step: "04",
                title: "Optimisation",
                description: "Analyse des performances et optimisation continue pour maximiser l'engagement",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-pink-500/50 to-transparent"></div>
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
              { number: "80+", label: "Newsletters créées" },
              { number: "35%", label: "Taux d'ouverture moyen" },
              { number: "8.5%", label: "Taux de clic moyen" },
              { number: "+180%", label: "Croissance abonnés" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à fidéliser votre audience ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Créons ensemble une newsletter qui transforme vos lecteurs en clients
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Lancer ma newsletter
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
