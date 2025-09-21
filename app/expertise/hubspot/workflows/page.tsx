import Link from "next/link"
import { ArrowRight, Workflow, Zap, Clock, Target, Settings, CheckCircle } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium mb-6">
              <Workflow size={16} className="mr-2" />
              Workflows HubSpot
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Automatisez vos processus avec des
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {" "}
                workflows intelligents
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Créez des workflows HubSpot sophistiqués qui automatisent vos tâches répétitives, nurturent vos leads et
              optimisent vos processus marketing, vente et service client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                serviceName="Workflows HubSpot"
                packageName="Audit Workflows"
                packageDescription="Demande d'audit workflows depuis la page Workflows HubSpot"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Audit workflows gratuit
              </QuoteButton>
              <Link
                href="/expertise/hubspot"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Voir toutes nos expertises HubSpot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Types Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Types de <span className="text-cyan-400">workflows</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Des automatisations pour tous vos besoins métier</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-cyan-400" size={32} />,
                title: "Lead Nurturing",
                description: "Séquences automatisées pour accompagner vos prospects vers la conversion",
                examples: ["Email de bienvenue", "Séquence éducative", "Relance prospects froids"],
              },
              {
                icon: <Zap className="text-blue-400" size={32} />,
                title: "Lead Scoring",
                description: "Attribution automatique de scores basés sur les comportements et interactions",
                examples: ["Score comportemental", "Score démographique", "Score d'engagement"],
              },
              {
                icon: <Settings className="text-cyan-400" size={32} />,
                title: "Gestion des données",
                description: "Nettoyage et enrichissement automatique de votre base de données",
                examples: ["Normalisation données", "Enrichissement contacts", "Déduplication"],
              },
              {
                icon: <Clock className="text-blue-400" size={32} />,
                title: "Suivi commercial",
                description: "Automatisation des tâches et rappels pour vos équipes commerciales",
                examples: ["Assignation leads", "Rappels de suivi", "Mise à jour pipeline"],
              },
              {
                icon: <CheckCircle className="text-cyan-400" size={32} />,
                title: "Service client",
                description: "Workflows pour améliorer l'expérience et la satisfaction client",
                examples: ["Tickets automatiques", "Enquêtes satisfaction", "Escalade support"],
              },
              {
                icon: <Workflow className="text-blue-400" size={32} />,
                title: "Intégrations",
                description: "Synchronisation automatique avec vos outils externes",
                examples: ["Sync CRM", "Mise à jour ERP", "Notifications Slack"],
              },
            ].map((type, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="space-y-1">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-cyan-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {example}
                    </div>
                  ))}
                </div>
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
              Notre approche de création de <span className="text-cyan-400">workflows</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une méthodologie structurée pour des automatisations efficaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Analyse",
                description: "Audit de vos processus actuels et identification des opportunités",
              },
              {
                step: "02",
                title: "Conception",
                description: "Design des workflows et définition des déclencheurs",
              },
              {
                step: "03",
                title: "Développement",
                description: "Création et configuration des workflows dans HubSpot",
              },
              {
                step: "04",
                title: "Tests",
                description: "Validation du bon fonctionnement et des performances",
              },
              {
                step: "05",
                title: "Optimisation",
                description: "Suivi des performances et amélioration continue",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cas d'usage <span className="text-cyan-400">concrets</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des exemples de workflows qui transforment votre business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Onboarding client automatisé",
                description:
                  "Workflow qui guide automatiquement les nouveaux clients à travers le processus d'onboarding",
                steps: [
                  "Email de bienvenue immédiat",
                  "Envoi des documents d'accueil",
                  "Planification d'un appel de kick-off",
                  "Création des tâches pour l'équipe",
                  "Suivi de progression automatique",
                ],
                impact: "Réduction de 70% du temps d'onboarding",
              },
              {
                title: "Qualification de leads avancée",
                description: "Système de scoring et de qualification automatique basé sur les comportements et données",
                steps: [
                  "Attribution de points selon les actions",
                  "Segmentation automatique par score",
                  "Assignation au bon commercial",
                  "Déclenchement d'alertes prioritaires",
                  "Personnalisation du suivi",
                ],
                impact: "Amélioration de 45% du taux de conversion",
              },
              {
                title: "Réactivation clients inactifs",
                description: "Campagne automatisée pour réengager les clients qui n'ont pas interagi récemment",
                steps: [
                  "Détection automatique d'inactivité",
                  "Séquence d'emails personnalisés",
                  "Offres spéciales ciblées",
                  "Appels commerciaux programmés",
                  "Mesure du taux de réactivation",
                ],
                impact: "Récupération de 30% des clients inactifs",
              },
              {
                title: "Support client proactif",
                description: "Anticipation des besoins de support basée sur les comportements clients",
                steps: [
                  "Monitoring des signaux d'alerte",
                  "Création automatique de tickets",
                  "Assignation au bon agent",
                  "Envoi de ressources d'aide",
                  "Suivi de satisfaction automatique",
                ],
                impact: "Réduction de 50% des tickets de support",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2 mb-4">
                  {useCase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="text-cyan-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {step}
                    </div>
                  ))}
                </div>
                <div className="px-3 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-medium">
                  {useCase.impact}
                </div>
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
              Bénéfices des <span className="text-cyan-400">workflows</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Gain de temps",
                description: "Automatisation de 80% des tâches répétitives",
                metric: "80%",
              },
              {
                title: "Conversion",
                description: "Amélioration moyenne du taux de conversion",
                metric: "+35%",
              },
              {
                title: "Personnalisation",
                description: "Messages adaptés selon le profil et comportement",
                metric: "1:1",
              },
              {
                title: "Réactivité",
                description: "Réponse instantanée aux actions des prospects",
                metric: "0s",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à automatiser vos processus avec HubSpot ?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Découvrez comment nos workflows peuvent transformer votre efficacité et améliorer vos résultats business.
          </p>
          <QuoteButton
            serviceName="Workflows HubSpot"
            packageName="Consultation Workflows"
            packageDescription="Demande de consultation workflows depuis la page Workflows HubSpot"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Planifier un audit workflows gratuit
            <ArrowRight className="ml-2" size={20} />
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
