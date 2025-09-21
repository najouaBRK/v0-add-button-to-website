import Link from "next/link"
import { ArrowRight, TrendingUp, PieChart, BarChart3, Target, Brain, Layers } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function BIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Brain size={16} className="mr-2" />
              Business Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Transformez vos données en
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}
                intelligence business
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Exploitez la puissance de la Business Intelligence pour prendre des décisions stratégiques éclairées.
              Transformez vos données brutes en insights actionnables et en avantage concurrentiel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                serviceName="Business Intelligence"
                packageName="Audit BI"
                packageDescription="Demande d'audit BI depuis la page Business Intelligence"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Audit BI gratuit
              </QuoteButton>
              <Link
                href="/expertise/data"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Voir toutes nos expertises Data
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nos solutions <span className="text-purple-400">Business Intelligence</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des solutions BI complètes pour transformer vos données en avantage stratégique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="text-purple-400" size={32} />,
                title: "Data Warehouse",
                description: "Centralisation et structuration de toutes vos données pour une vue unifiée",
              },
              {
                icon: <PieChart className="text-pink-400" size={32} />,
                title: "Reporting avancé",
                description: "Création de rapports dynamiques et interactifs pour tous vos besoins métier",
              },
              {
                icon: <TrendingUp className="text-purple-400" size={32} />,
                title: "Analyse prédictive",
                description: "Modèles prédictifs pour anticiper les tendances et optimiser vos stratégies",
              },
              {
                icon: <Target className="text-pink-400" size={32} />,
                title: "KPI Management",
                description: "Définition et suivi de vos indicateurs clés de performance en temps réel",
              },
              {
                icon: <Layers className="text-purple-400" size={32} />,
                title: "Data Mining",
                description: "Extraction de patterns et insights cachés dans vos volumes de données",
              },
              {
                icon: <Brain className="text-pink-400" size={32} />,
                title: "Self-Service BI",
                description: "Outils intuitifs permettant à vos équipes d'analyser les données en autonomie",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Les bénéfices de la <span className="text-purple-400">Business Intelligence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Décisions éclairées",
                description: "Prenez des décisions basées sur des données fiables et des analyses approfondies",
                icon: <Brain className="text-purple-400" size={24} />,
              },
              {
                title: "Efficacité opérationnelle",
                description: "Optimisez vos processus grâce à une meilleure compréhension de vos performances",
                icon: <Target className="text-pink-400" size={24} />,
              },
              {
                title: "Avantage concurrentiel",
                description: "Identifiez les opportunités et anticipez les tendances du marché",
                icon: <TrendingUp className="text-purple-400" size={24} />,
              },
              {
                title: "ROI mesurable",
                description: "Mesurez précisément l'impact de vos investissements et stratégies",
                icon: <BarChart3 className="text-pink-400" size={24} />,
              },
              {
                title: "Vision 360°",
                description: "Obtenez une vue complète de votre activité grâce à la consolidation des données",
                icon: <PieChart className="text-purple-400" size={24} />,
              },
              {
                title: "Agilité business",
                description: "Réagissez rapidement aux changements grâce à des insights en temps réel",
                icon: <Layers className="text-pink-400" size={24} />,
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Notre méthodologie <span className="text-purple-400">BI</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une approche structurée pour implémenter une solution BI performante
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Stratégie",
                description: "Analyse de vos besoins métier et définition de la stratégie BI",
              },
              {
                step: "02",
                title: "Architecture Data",
                description: "Conception de l'architecture technique et du modèle de données",
              },
              {
                step: "03",
                title: "Implémentation",
                description: "Développement et déploiement de la solution BI complète",
              },
              {
                step: "04",
                title: "Adoption & Support",
                description: "Formation des utilisateurs et accompagnement à l'adoption",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "200+", label: "Projets BI réalisés" },
              { number: "60%", label: "Amélioration moyenne de la prise de décision" },
              { number: "3x", label: "Accélération des analyses métier" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer vos données en intelligence business ?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Découvrez comment la Business Intelligence peut révolutionner votre prise de décision et votre performance.
          </p>
          <QuoteButton
            serviceName="Business Intelligence"
            packageName="Consultation BI"
            packageDescription="Demande de consultation BI depuis la page Business Intelligence"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Demander un audit BI gratuit
            <ArrowRight className="ml-2" size={20} />
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
