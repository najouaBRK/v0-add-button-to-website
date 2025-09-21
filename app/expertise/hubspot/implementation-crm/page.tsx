import Link from "next/link"
import { ArrowRight, Settings, Users, Target, CheckCircle, Zap, Award } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function ImplementationCRMPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" className="mr-2">
                <path
                  fill="currentColor"
                  d="M18.164 7.931V5.61c0-1.378-1.119-2.497-2.497-2.497s-2.497 1.119-2.497 2.497v2.321c-1.133.434-2.097 1.145-2.815 2.071l-3.738-2.158c.171-.427.264-.895.264-1.386 0-1.933-1.567-3.5 3.5-3.5S0 4.526 0 6.459s1.567 3.5 3.5 3.5c.605 0 1.174-.154 1.671-.425l3.738 2.158c-.171.427-.264.895-.264 1.386 0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5c0-.491-.093-.959-.264-1.386l-2.158-3.738c.497.271 1.066.425 1.671.425 1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5z"
                />
              </svg>
              Implémentation CRM HubSpot
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Implémentez HubSpot CRM pour
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                {" "}
                transformer votre business
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Déployez HubSpot CRM avec une configuration sur-mesure qui s'adapte parfaitement à vos processus métier et
              maximise votre ROI dès le premier jour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                serviceName="HubSpot Implementation"
                packageName="Audit CRM"
                packageDescription="Demande d'audit CRM depuis la page Implémentation HubSpot"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Audit CRM gratuit
              </QuoteButton>
              <Link
                href="/expertise/hubspot"
                className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Voir toutes nos expertises HubSpot
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
              Notre approche d'<span className="text-orange-400">implémentation</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une méthodologie éprouvée pour un déploiement HubSpot réussi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-orange-400" size={32} />,
                title: "Analyse des besoins",
                description: "Audit complet de vos processus actuels et définition des objectifs CRM",
              },
              {
                icon: <Settings className="text-red-400" size={32} />,
                title: "Configuration sur-mesure",
                description: "Paramétrage personnalisé des hubs Sales, Marketing et Service",
              },
              {
                icon: <Users className="text-orange-400" size={32} />,
                title: "Gestion des contacts",
                description: "Structuration de votre base de données et segmentation intelligente",
              },
              {
                icon: <Zap className="text-red-400" size={32} />,
                title: "Automatisation",
                description: "Mise en place de workflows automatisés pour optimiser vos processus",
              },
              {
                icon: <CheckCircle className="text-orange-400" size={32} />,
                title: "Tests & validation",
                description: "Validation complète du paramétrage avant la mise en production",
              },
              {
                icon: <Award className="text-red-400" size={32} />,
                title: "Formation équipes",
                description: "Formation complète de vos équipes pour une adoption réussie",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-400/50 transition-all duration-300 hover:scale-105"
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Processus d'<span className="text-orange-400">implémentation</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Un déploiement structuré en 6 étapes pour garantir votre succès
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Découverte",
                description: "Analyse de vos besoins, processus actuels et objectifs business",
                duration: "1-2 semaines",
              },
              {
                step: "02",
                title: "Planification",
                description: "Définition de l'architecture CRM et du plan de déploiement",
                duration: "1 semaine",
              },
              {
                step: "03",
                title: "Configuration",
                description: "Paramétrage des hubs, propriétés, pipelines et automatisations",
                duration: "2-4 semaines",
              },
              {
                step: "04",
                title: "Migration",
                description: "Import et nettoyage de vos données existantes",
                duration: "1-2 semaines",
              },
              {
                step: "05",
                title: "Formation",
                description: "Formation complète de vos équipes sur HubSpot",
                duration: "1 semaine",
              },
              {
                step: "06",
                title: "Go-Live",
                description: "Mise en production et accompagnement post-lancement",
                duration: "Ongoing",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 mb-2">{step.description}</p>
                <p className="text-orange-400 text-sm font-medium">{step.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bénéfices d'une implémentation <span className="text-orange-400">professionnelle</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Gain de temps",
                description: "Réduction de 60% du temps de déploiement vs implémentation interne",
                metric: "60%",
              },
              {
                title: "Adoption utilisateur",
                description: "Taux d'adoption de 95% grâce à notre formation personnalisée",
                metric: "95%",
              },
              {
                title: "ROI accéléré",
                description: "Retour sur investissement visible dès les 3 premiers mois",
                metric: "3 mois",
              },
              {
                title: "Support continu",
                description: "Accompagnement post-lancement pour optimiser vos performances",
                metric: "24/7",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à déployer HubSpot dans votre entreprise ?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Bénéficiez d'un audit CRM gratuit et découvrez comment HubSpot peut transformer votre business.
          </p>
          <QuoteButton
            serviceName="HubSpot Implementation"
            packageName="Consultation Implémentation"
            packageDescription="Demande de consultation implémentation depuis la page Implémentation HubSpot"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Planifier un audit CRM gratuit
            <ArrowRight className="ml-2" size={20} />
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
