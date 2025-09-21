import Link from "next/link"
import { ArrowRight, Shield, RefreshCw, AlertTriangle, Clock, CheckCircle, Headphones } from "lucide-react"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">Expertise Maintenance</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
              Maintenance{" "}
            </span>
            & Support
            <br />
            de votre Site Web
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Gardez votre site web sécurisé, performant et à jour avec notre service de maintenance professionnel
            disponible 24h/24.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Sécuriser mon site
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Audit gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services de Maintenance Complets</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tout ce dont votre site a besoin pour rester performant et sécurisé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Sécurité & Sauvegardes",
                description: "Monitoring sécuritaire 24/7, sauvegardes automatiques et protection contre les menaces",
              },
              {
                icon: <RefreshCw className="w-8 h-8" />,
                title: "Mises à Jour",
                description: "Mise à jour régulière du CMS, plugins et thèmes pour maintenir la sécurité",
              },
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: "Monitoring & Alertes",
                description: "Surveillance continue de la disponibilité et des performances avec alertes instantanées",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Optimisation Performance",
                description: "Amélioration continue des temps de chargement et de l'expérience utilisateur",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Corrections & Bugs",
                description: "Résolution rapide des problèmes techniques et corrections de bugs",
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: "Support Prioritaire",
                description: "Support technique dédié avec temps de réponse garanti sous 2h",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Plans de Maintenance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choisissez le niveau de support adapté à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Essentiel",
                price: "49€",
                period: "/mois",
                features: [
                  "Sauvegardes hebdomadaires",
                  "Mises à jour sécuritaires",
                  "Monitoring de base",
                  "Support par email",
                  "Rapport mensuel",
                ],
              },
              {
                name: "Professionnel",
                price: "99€",
                period: "/mois",
                popular: true,
                features: [
                  "Sauvegardes quotidiennes",
                  "Mises à jour complètes",
                  "Monitoring avancé 24/7",
                  "Support prioritaire 2h",
                  "Optimisations performance",
                  "Rapport détaillé",
                ],
              },
              {
                name: "Premium",
                price: "199€",
                period: "/mois",
                features: [
                  "Sauvegardes en temps réel",
                  "Mises à jour immédiates",
                  "Monitoring complet",
                  "Support dédié 1h",
                  "Optimisations avancées",
                  "Développements mineurs",
                  "Rapport en temps réel",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${plan.popular ? "border-teal-500 scale-105" : "border-white/10"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Plus populaire
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-teal-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  Choisir ce plan
                </Link>
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
              { number: "99.9%", label: "Uptime garanti" },
              { number: "2h", label: "Temps de réponse max" },
              { number: "300+", label: "Sites maintenus" },
              { number: "0", label: "Incident de sécurité" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Protégez votre site dès aujourd'hui</h2>
          <p className="text-xl text-gray-300 mb-8">Ne laissez pas les problèmes techniques affecter votre business</p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Commencer la maintenance
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
