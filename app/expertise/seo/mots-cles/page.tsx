import Link from "next/link"
import { ArrowRight, Target, Search, TrendingUp, BarChart3, Users, Lightbulb } from "lucide-react"

export default function MotsClesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Expertise Mots-clés</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Recherche de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              {" "}
              Mots-clés{" "}
            </span>
            Stratégique
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Identifiez les mots-clés les plus rentables pour votre business et dominez les résultats de recherche de
            votre secteur.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Trouver mes mots-clés
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos stratégies
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services Recherche Mots-clés</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une stratégie de mots-clés qui génère du trafic qualifié et des conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "Recherche Approfondie",
                description: "Identification des mots-clés pertinents avec volume et difficulté de positionnement",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Analyse d'Intention",
                description: "Classification des mots-clés selon l'intention de recherche des utilisateurs",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Analyse Concurrentielle",
                description: "Étude des mots-clés de vos concurrents et identification des opportunités",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Potentiel de Trafic",
                description: "Estimation du trafic potentiel et ROI pour chaque mot-clé ciblé",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Mots-clés Longue Traîne",
                description: "Identification des expressions spécifiques à fort potentiel de conversion",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Stratégie de Contenu",
                description: "Plan éditorial basé sur les mots-clés pour maximiser votre visibilité",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Processus de Recherche Mots-clés</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche méthodique pour identifier les mots-clés les plus rentables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse Business",
                description: "Compréhension de vos objectifs, cibles et secteur d'activité",
              },
              {
                step: "02",
                title: "Recherche & Collecte",
                description: "Identification exhaustive des mots-clés pertinents avec outils spécialisés",
              },
              {
                step: "03",
                title: "Analyse & Priorisation",
                description: "Évaluation du potentiel et classification par ordre de priorité",
              },
              {
                step: "04",
                title: "Stratégie & Roadmap",
                description: "Plan d'action détaillé pour optimiser votre contenu sur les mots-clés ciblés",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
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
              { number: "10K+", label: "Mots-clés analysés" },
              { number: "+250%", label: "Amélioration trafic" },
              { number: "85%", label: "Mots-clés en top 10" },
              { number: "300+", label: "Stratégies créées" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à dominer votre marché ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Découvrez les mots-clés qui vont transformer votre visibilité en ligne
          </p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Analyser mes opportunités
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
