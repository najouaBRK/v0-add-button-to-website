import Link from "next/link"
import { ArrowRight, Settings, Zap, Shield, Code, Smartphone, Globe } from "lucide-react"

export default function SeoTechniquePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
            <Settings className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 text-sm font-medium">Expertise SEO Technique</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
              SEO Technique{" "}
            </span>
            Avancé
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Optimisez les fondations techniques de votre site pour améliorer votre crawlabilité, indexation et
            performances SEO.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Optimiser mon site
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos optimisations
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services SEO Technique</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimisations techniques pour des performances SEO maximales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Optimisation Vitesse",
                description: "Amélioration des Core Web Vitals et temps de chargement pour un meilleur ranking",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Structure HTML",
                description: "Optimisation du code, balises meta et données structurées pour les moteurs",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile-First",
                description: "Optimisation mobile et responsive design pour l'indexation mobile-first",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Crawlabilité",
                description: "Optimisation du crawl budget et facilitation de l'exploration par les bots",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Sécurité & HTTPS",
                description: "Mise en place du HTTPS et optimisations de sécurité pour le SEO",
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Configuration Serveur",
                description: "Optimisation des redirections, sitemap XML et fichier robots.txt",
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus SEO Technique</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche systématique pour optimiser tous les aspects techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit Technique",
                description: "Analyse complète de la performance technique et identification des problèmes",
              },
              {
                step: "02",
                title: "Priorisation",
                description: "Classification des optimisations par impact SEO et facilité d'implémentation",
              },
              {
                step: "03",
                title: "Implémentation",
                description: "Mise en œuvre des optimisations techniques avec tests et validation",
              },
              {
                step: "04",
                title: "Monitoring",
                description: "Suivi des performances et ajustements continus pour maintenir l'optimisation",
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
              { number: "400+", label: "Sites optimisés" },
              { number: "+65%", label: "Amélioration vitesse" },
              { number: "98%", label: "Score mobile-friendly" },
              { number: "2.1s", label: "Temps de chargement moyen" },
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à optimiser votre technique SEO ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Donnez à votre site les fondations techniques pour dominer les résultats de recherche
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Optimiser maintenant
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
