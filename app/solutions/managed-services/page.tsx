import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Zap, Users, BarChart3 } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function ManagedServicesPage() {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "Support 24/7",
      description: "Assistance technique disponible en permanence pour garantir la continuité de vos services",
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-500" />,
      title: "Sécurité Renforcée",
      description: "Monitoring de sécurité, mises à jour automatiques et protection contre les menaces",
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      title: "Performance Optimisée",
      description: "Surveillance continue des performances et optimisation proactive de vos systèmes",
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Équipe Dédiée",
      description: "Une équipe d'experts dédiée à la gestion et maintenance de votre infrastructure",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-500" />,
      title: "Reporting Détaillé",
      description: "Rapports réguliers sur les performances, incidents et améliorations apportées",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
      title: "SLA Garantis",
      description: "Engagements de niveau de service avec garanties de disponibilité et temps de réponse",
    },
  ]

  const packages = [
    {
      name: "Essentiel",
      price: "299€",
      period: "/mois",
      description: "Pour les petites entreprises",
      features: [
        "Support 8h-18h",
        "Monitoring de base",
        "Sauvegardes quotidiennes",
        "Mises à jour de sécurité",
        "Rapport mensuel",
      ],
    },
    {
      name: "Professionnel",
      price: "599€",
      period: "/mois",
      description: "Pour les entreprises en croissance",
      features: [
        "Support 24/7",
        "Monitoring avancé",
        "Sauvegardes en temps réel",
        "Optimisation performance",
        "Rapport hebdomadaire",
        "Équipe dédiée",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "1299€",
      period: "/mois",
      description: "Pour les grandes entreprises",
      features: [
        "Support prioritaire 24/7",
        "Monitoring personnalisé",
        "Disaster recovery",
        "Consultant dédié",
        "Rapport en temps réel",
        "SLA personnalisé",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2b4a] via-slate-800 to-[#1a2b4a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <Badge variant="secondary" className="bg-orange-500 text-white">
              MANAGED SERVICES
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Services Gérés & <span className="text-orange-400">Maintenance</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Confiez-nous la gestion technique de votre infrastructure pour vous concentrer sur votre cœur de métier.
            Notre équipe d'experts assure la maintenance, la sécurité et l'optimisation de vos systèmes 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <QuoteButton
              serviceName="Managed Services"
              packageName="Consultation Managed Services"
              packageDescription="Demande de consultation pour nos services gérés"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Demander un devis
            </QuoteButton>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full bg-transparent"
            >
              Voir nos forfaits
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir nos <span className="text-orange-500">Services Gérés</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche complète pour maintenir vos systèmes en parfait état de fonctionnement
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

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-orange-500">Forfaits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le forfait qui correspond le mieux à vos besoins et à votre budget
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
                    <span className="text-gray-600">{pkg.period}</span>
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
                      serviceName="Managed Services"
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
            Prêt à confier vos systèmes à nos experts ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nos services gérés
            peuvent transformer votre infrastructure IT.
          </p>
          <QuoteButton
            serviceName="Managed Services"
            packageName="Consultation gratuite"
            packageDescription="Demande de consultation gratuite pour les services gérés"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Consultation gratuite
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
