import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Bot, Zap, Brain, MessageSquare, BarChart3, Cog } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function IAAutomationPage() {
  const features = [
    {
      icon: <Bot className="h-6 w-6 text-orange-500" />,
      title: "Chatbots Intelligents",
      description: "Assistants virtuels alimentés par l'IA pour améliorer l'expérience client 24/7",
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      title: "Automatisation RPA",
      description: "Automatisation des processus répétitifs pour libérer vos équipes des tâches manuelles",
    },
    {
      icon: <Brain className="h-6 w-6 text-orange-500" />,
      title: "Machine Learning",
      description: "Algorithmes d'apprentissage automatique pour des prédictions et analyses avancées",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-orange-500" />,
      title: "Traitement du Langage",
      description: "Analyse et traitement automatique de textes, emails et documents",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-500" />,
      title: "Analytics Prédictifs",
      description: "Prévisions et analyses prédictives pour optimiser vos décisions business",
    },
    {
      icon: <Cog className="h-6 w-6 text-orange-500" />,
      title: "Workflows Intelligents",
      description: "Automatisation intelligente de vos processus métier avec prise de décision autonome",
    },
  ]

  const useCases = [
    {
      title: "Service Client",
      description: "Chatbots et assistants virtuels pour le support client",
      icon: <MessageSquare className="h-8 w-8 text-orange-500" />,
      benefits: ["Réduction des temps d'attente", "Support 24/7", "Résolution automatique", "Escalade intelligente"],
    },
    {
      title: "Ventes & Marketing",
      description: "Automatisation des processus commerciaux et marketing",
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      benefits: ["Lead scoring automatique", "Personnalisation contenu", "Prédiction churn", "Optimisation campagnes"],
    },
    {
      title: "Opérations",
      description: "Automatisation des processus opérationnels et administratifs",
      icon: <Cog className="h-8 w-8 text-orange-500" />,
      benefits: ["Traitement factures", "Gestion stocks", "Planification automatique", "Contrôle qualité"],
    },
  ]

  const packages = [
    {
      name: "Découverte",
      price: "5 000€",
      period: "projet",
      description: "Premier pas vers l'IA",
      features: [
        "Audit des processus",
        "Identification opportunités IA",
        "POC simple (chatbot ou RPA)",
        "Formation équipe",
        "Roadmap IA personnalisée",
      ],
    },
    {
      name: "Transformation",
      price: "15 000€",
      period: "projet",
      description: "Solution IA complète",
      features: [
        "Développement solution sur mesure",
        "Intégration systèmes existants",
        "Formation avancée",
        "Déploiement et tests",
        "Support 6 mois",
        "Optimisation continue",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      period: "",
      description: "IA à grande échelle",
      features: [
        "Solutions IA complexes",
        "Architecture distribuée",
        "Machine Learning avancé",
        "Équipe dédiée",
        "Support premium 12 mois",
        "R&D continue",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2b4a] via-slate-800 to-[#1a2b4a]">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <Badge variant="secondary" className="bg-orange-500 text-white">
              IA & AUTOMATISATION
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Intelligence Artificielle & <span className="text-orange-400">Automatisation</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Transformez vos processus métier avec l'intelligence artificielle et l'automatisation. De la conception à
            l'implémentation, nous vous accompagnons dans l'adoption des technologies IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <QuoteButton
              serviceName="IA & Automatisation"
              packageName="Consultation IA"
              packageDescription="Demande de consultation pour l'IA et l'automatisation"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Découvrir l'IA
            </QuoteButton>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full bg-transparent"
            >
              Voir nos cas d'usage
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-orange-500">Technologies IA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions d'intelligence artificielle adaptées à vos besoins métier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cas d'<span className="text-orange-500">Usage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment l'IA peut transformer vos différents métiers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{useCase.icon}</div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-orange-500">Forfaits IA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions IA adaptées à votre maturité technologique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${pkg.popular ? "ring-2 ring-orange-500 scale-105" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-4 py-1">Plus populaire</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-orange-500">{pkg.price}</span>
                    {pkg.period && <span className="text-gray-600">/{pkg.period}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <QuoteButton
                      serviceName="IA & Automatisation"
                      packageName={pkg.name}
                      packageDescription={`Forfait ${pkg.name} - ${pkg.description}`}
                      className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                        pkg.popular
                          ? "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                          : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                      }`}
                    >
                      Choisir ce forfait
                    </QuoteButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à intégrer l'IA dans votre entreprise ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contactez-nous pour une consultation gratuite et découvrez comment l'intelligence artificielle peut
            révolutionner vos processus métier.
          </p>
          <QuoteButton
            serviceName="IA & Automatisation"
            packageName="Consultation IA gratuite"
            packageDescription="Demande de consultation gratuite pour l'IA et l'automatisation"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Consultation gratuite
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
