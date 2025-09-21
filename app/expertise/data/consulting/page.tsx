import Link from "next/link"
import { ArrowRight, Users, Lightbulb, Target, TrendingUp, CheckCircle, Award } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 rounded-full text-amber-300 text-sm font-medium mb-6">
              <Users size={16} className="mr-2" />
              Consulting Data
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Accélérez votre transformation data avec nos
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                {" "}
                experts consultants
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Bénéficiez de l'expertise de nos consultants data pour définir votre stratégie, optimiser vos processus et
              maximiser la valeur de vos données.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                serviceName="Consulting Data"
                packageName="Consultation Stratégique"
                packageDescription="Demande de consultation stratégique depuis la page Consulting"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
              >
                Consultation gratuite
              </QuoteButton>
              <Link
                href="/expertise/data"
                className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
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
              Nos services de <span className="text-amber-400">Consulting</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Un accompagnement sur-mesure pour réussir votre transformation data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="text-amber-400" size={32} />,
                title: "Stratégie Data",
                description: "Définition de votre roadmap data et alignement avec vos objectifs business",
              },
              {
                icon: <Target className="text-orange-400" size={32} />,
                title: "Audit & Diagnostic",
                description: "Évaluation de votre maturité data et identification des axes d'amélioration",
              },
              {
                icon: <TrendingUp className="text-amber-400" size={32} />,
                title: "Optimisation ROI",
                description: "Maximisation de la valeur de vos investissements data et analytics",
              },
              {
                icon: <Users className="text-orange-400" size={32} />,
                title: "Change Management",
                description: "Accompagnement des équipes dans l'adoption des nouvelles pratiques data",
              },
              {
                icon: <CheckCircle className="text-amber-400" size={32} />,
                title: "Gouvernance Data",
                description: "Mise en place de processus et politiques pour une gestion optimale des données",
              },
              {
                icon: <Award className="text-orange-400" size={32} />,
                title: "Formation & Coaching",
                description: "Montée en compétences de vos équipes sur les outils et méthodologies data",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 hover:scale-105"
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

      {/* Expertise Areas Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Domaines d'<span className="text-amber-400">expertise</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Une expertise transverse pour tous vos défis data</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Data Architecture",
                description: "Conception d'architectures data scalables et performantes",
              },
              {
                title: "Data Quality",
                description: "Amélioration de la qualité et de la fiabilité de vos données",
              },
              {
                title: "Data Science",
                description: "Développement de modèles prédictifs et d'algorithmes ML",
              },
              {
                title: "Data Visualization",
                description: "Création de dashboards et visualisations impactantes",
              },
              {
                title: "Cloud Migration",
                description: "Migration et optimisation de vos infrastructures data cloud",
              },
              {
                title: "RGPD & Compliance",
                description: "Mise en conformité et respect des réglementations data",
              },
              {
                title: "Real-time Analytics",
                description: "Implémentation de solutions d'analyse en temps réel",
              },
              {
                title: "Data Monetization",
                description: "Stratégies de monétisation et création de valeur avec vos données",
              },
            ].map((area, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 text-sm">{area.description}</p>
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
              Notre approche <span className="text-amber-400">consulting</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une méthodologie éprouvée pour maximiser l'impact de nos interventions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Diagnostic",
                description: "Analyse approfondie de votre contexte et de vos enjeux data",
              },
              {
                step: "02",
                title: "Stratégie",
                description: "Co-construction de votre feuille de route data personnalisée",
              },
              {
                step: "03",
                title: "Accompagnement",
                description: "Support dans la mise en œuvre et le pilotage des initiatives",
              },
              {
                step: "04",
                title: "Optimisation",
                description: "Amélioration continue et mesure de la performance",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
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
              Pourquoi choisir notre <span className="text-amber-400">consulting</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise reconnue",
                description: "Plus de 10 ans d'expérience dans la transformation data des entreprises",
                metric: "10+",
              },
              {
                title: "Approche pragmatique",
                description: "Solutions concrètes et réalisables adaptées à votre contexte",
                metric: "100%",
              },
              {
                title: "ROI mesurable",
                description: "Amélioration moyenne de 40% des performances data de nos clients",
                metric: "40%",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center group p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à accélérer votre transformation data ?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Échangeons sur vos défis data et découvrez comment notre expertise peut vous aider à atteindre vos
            objectifs.
          </p>
          <QuoteButton
            serviceName="Consulting Data"
            packageName="Consultation Stratégique Data"
            packageDescription="Demande de consultation stratégique data depuis la page Consulting"
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
          >
            Planifier une consultation gratuite
            <ArrowRight className="ml-2" size={20} />
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
