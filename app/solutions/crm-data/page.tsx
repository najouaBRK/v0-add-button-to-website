import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Database, Users, BarChart3, Zap, Shield } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function CRMDataPage() {
  const features = [
    {
      icon: <Database className="h-6 w-6 text-orange-500" />,
      title: "Intégration CRM Complète",
      description: "Implémentation et configuration de solutions CRM adaptées à vos processus métier",
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Gestion Centralisée",
      description: "Centralisation de toutes vos données clients et prospects dans un système unifié",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-500" />,
      title: "Analytics Avancés",
      description: "Tableaux de bord personnalisés et rapports détaillés pour piloter votre activité",
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      title: "Automatisation",
      description: "Workflows automatisés pour optimiser vos processus de vente et marketing",
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-500" />,
      title: "Migration Sécurisée",
      description: "Migration de vos données existantes avec garantie d'intégrité et de sécurité",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
      title: "Formation & Support",
      description: "Formation complète de vos équipes et support technique continu",
    },
  ]

  const solutions = [
    {
      name: "HubSpot CRM",
      logo: "/hubspot-logo.png",
      description: "Plateforme CRM tout-en-un avec marketing automation",
      features: ["CRM gratuit", "Marketing Hub", "Sales Hub", "Service Hub", "Intégrations natives"],
    },
    {
      name: "Odoo ERP",
      logo: "/odoo-logo.png",
      description: "Suite complète de gestion d'entreprise modulaire",
      features: ["CRM intégré", "Comptabilité", "Inventaire", "E-commerce", "RH & Paie"],
    },
    {
      name: "Solutions Custom",
      logo: "/custom-database.jpg",
      description: "Développement de solutions sur mesure",
      features: [
        "Base de données custom",
        "API personnalisées",
        "Intégrations spécifiques",
        "Dashboards sur mesure",
        "Évolutivité garantie",
      ],
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "2 500€",
      period: "projet",
      description: "Pour débuter avec un CRM",
      features: [
        "Audit de vos besoins",
        "Configuration CRM de base",
        "Migration données (jusqu'à 1000 contacts)",
        "Formation 1 jour",
        "Support 1 mois",
      ],
    },
    {
      name: "Business",
      price: "7 500€",
      period: "projet",
      description: "Solution complète pour PME",
      features: [
        "Audit approfondi",
        "Configuration avancée",
        "Migration données complète",
        "Workflows automatisés",
        "Dashboards personnalisés",
        "Formation 3 jours",
        "Support 3 mois",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      period: "",
      description: "Solution sur mesure",
      features: [
        "Analyse complète des processus",
        "Développement sur mesure",
        "Intégrations complexes",
        "Formation équipes complète",
        "Support dédié 12 mois",
        "Maintenance évolutive",
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
              CRM & DATA
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Intégration <span className="text-orange-400">CRM & Data</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Centralisez et optimisez la gestion de vos données clients avec nos solutions CRM sur mesure. De
            l'implémentation à la formation, nous vous accompagnons dans votre transformation digitale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <QuoteButton
              serviceName="CRM & Data"
              packageName="Consultation CRM"
              packageDescription="Demande de consultation pour l'intégration CRM et Data"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Demander un audit
            </QuoteButton>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full bg-transparent"
            >
              Voir nos solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-orange-500">Expertises CRM</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche complète pour optimiser la gestion de vos données clients et prospects
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

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-orange-500">Solutions CRM</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous travaillons avec les meilleures plateformes du marché
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="w-full h-16 flex items-center justify-center mb-4">
                    <img
                      src={solution.logo || "/placeholder.svg"}
                      alt={`${solution.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{solution.name}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
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
              Nos <span className="text-orange-500">Forfaits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à chaque taille d'entreprise
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
                      serviceName="CRM & Data"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à optimiser votre gestion client ?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contactez-nous pour un audit gratuit de vos besoins CRM et découvrez comment nous pouvons transformer votre
            gestion des données clients.
          </p>
          <QuoteButton
            serviceName="CRM & Data"
            packageName="Audit gratuit"
            packageDescription="Demande d'audit gratuit pour les besoins CRM"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Audit gratuit
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
