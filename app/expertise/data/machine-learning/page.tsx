import Link from "next/link"
import { ArrowRight, Brain, Cpu, Target, TrendingUp, Zap, Bot } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function MachineLearningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-violet-500/20 rounded-full text-violet-300 text-sm font-medium mb-6">
              <Brain size={16} className="mr-2" />
              Machine Learning & IA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Donnez de l'intelligence à vos données avec le
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                {" "}
                Machine Learning
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Exploitez la puissance de l'intelligence artificielle pour automatiser vos décisions, prédire les
              tendances et créer de la valeur à partir de vos données.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                serviceName="Machine Learning"
                packageName="Consultation IA"
                packageDescription="Demande de consultation IA depuis la page Machine Learning"
                className="bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
              >
                Consultation IA
              </QuoteButton>
              <Link
                href="/expertise/data"
                className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
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
              Nos solutions <span className="text-violet-400">Machine Learning</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des algorithmes intelligents pour résoudre vos défis business les plus complexes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="text-violet-400" size={32} />,
                title: "Analyse prédictive",
                description: "Prédisez les comportements clients, les ventes et les tendances du marché",
              },
              {
                icon: <Target className="text-fuchsia-400" size={32} />,
                title: "Recommandation",
                description: "Systèmes de recommandation personnalisés pour améliorer l'expérience client",
              },
              {
                icon: <Bot className="text-violet-400" size={32} />,
                title: "Classification automatique",
                description: "Automatisation de la catégorisation de contenus, emails, documents",
              },
              {
                icon: <Cpu className="text-fuchsia-400" size={32} />,
                title: "Détection d'anomalies",
                description: "Identification automatique de fraudes, pannes ou comportements suspects",
              },
              {
                icon: <Brain className="text-violet-400" size={32} />,
                title: "NLP & Text Mining",
                description: "Analyse de sentiments, extraction d'entités et traitement du langage naturel",
              },
              {
                icon: <Zap className="text-fuchsia-400" size={32} />,
                title: "Optimisation",
                description: "Algorithmes d'optimisation pour la logistique, pricing et allocation de ressources",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-violet-400/50 transition-all duration-300 hover:scale-105"
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cas d'usage <span className="text-violet-400">Machine Learning</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des applications concrètes pour transformer votre business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce",
                description:
                  "Recommandations produits, prédiction de churn, optimisation des prix, détection de fraude",
                color: "from-violet-500 to-purple-600",
              },
              {
                title: "Finance",
                description: "Scoring crédit, détection de fraude, trading algorithmique, gestion des risques",
                color: "from-fuchsia-500 to-pink-600",
              },
              {
                title: "Marketing",
                description: "Segmentation client, prédiction LTV, optimisation campagnes, analyse de sentiment",
                color: "from-violet-500 to-fuchsia-600",
              },
              {
                title: "Industrie",
                description: "Maintenance prédictive, contrôle qualité, optimisation production, IoT analytics",
                color: "from-purple-500 to-violet-600",
              },
              {
                title: "Santé",
                description: "Diagnostic assisté, analyse d'images médicales, prédiction d'épidémies, drug discovery",
                color: "from-fuchsia-500 to-violet-600",
              },
              {
                title: "RH",
                description:
                  "Recrutement intelligent, prédiction de turnover, analyse de performance, matching compétences",
                color: "from-violet-500 to-purple-600",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-violet-400/50 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Brain className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
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
              Notre approche <span className="text-violet-400">ML</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une méthodologie éprouvée pour développer des solutions IA performantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Définition du problème",
                description: "Identification du cas d'usage et des objectifs métier",
              },
              {
                step: "02",
                title: "Exploration des données",
                description: "Analyse et préparation des données pour l'entraînement",
              },
              {
                step: "03",
                title: "Modélisation",
                description: "Développement et entraînement des algorithmes ML",
              },
              {
                step: "04",
                title: "Validation",
                description: "Tests et validation des performances du modèle",
              },
              {
                step: "05",
                title: "Déploiement",
                description: "Mise en production et monitoring continu",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies <span className="text-violet-400">& Frameworks</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Python",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "Keras",
              "XGBoost",
              "Apache Spark",
              "MLflow",
              "Jupyter",
              "Docker",
              "Kubernetes",
              "AWS SageMaker",
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-violet-400/50 transition-all duration-300 text-center"
              >
                <div className="text-white font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à intégrer l'IA dans votre business ?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Découvrez comment le Machine Learning peut transformer vos processus et créer de nouveaux avantages
            concurrentiels.
          </p>
          <QuoteButton
            serviceName="Machine Learning"
            packageName="Consultation ML"
            packageDescription="Demande de consultation ML depuis la page Machine Learning"
            className="bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
          >
            Planifier une consultation IA
            <ArrowRight className="ml-2" size={20} />
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
