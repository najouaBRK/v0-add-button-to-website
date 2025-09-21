import Link from "next/link"
import { ArrowRight, Zap, RefreshCw, Clock, Workflow, Bot, Database } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium mb-6">
              <Zap size={16} className="mr-2" />
              Automation Data
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Automatisez vos processus data pour
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                {" "}
                gagner en efficacité
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Libérez le potentiel de vos équipes en automatisant la collecte, le traitement et l'analyse de vos
              données. Concentrez-vous sur la stratégie pendant que nous gérons l'opérationnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                serviceName="Automation"
                packageName="Audit Automation"
                packageDescription="Demande d'audit automation depuis la page Automation"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Audit gratuit
              </QuoteButton>
              <Link
                href="/expertise/data"
                className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
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
              Nos solutions d'<span className="text-emerald-400">Automation</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Automatisez chaque étape de votre chaîne de valeur data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="text-emerald-400" size={32} />,
                title: "ETL Automatisé",
                description:
                  "Extraction, transformation et chargement automatique de vos données depuis multiple sources",
              },
              {
                icon: <RefreshCw className="text-teal-400" size={32} />,
                title: "Pipelines de données",
                description: "Création de flux de données automatisés et fiables pour vos processus métier",
              },
              {
                icon: <Clock className="text-emerald-400" size={32} />,
                title: "Reporting automatique",
                description: "Génération et envoi automatique de rapports personnalisés selon vos plannings",
              },
              {
                icon: <Workflow className="text-teal-400" size={32} />,
                title: "Workflows intelligents",
                description: "Orchestration de processus complexes avec des déclencheurs conditionnels",
              },
              {
                icon: <Bot className="text-emerald-400" size={32} />,
                title: "Alertes intelligentes",
                description: "Système d'alertes automatiques basé sur vos seuils et anomalies détectées",
              },
              {
                icon: <Zap className="text-teal-400" size={32} />,
                title: "API Integration",
                description: "Connexion automatisée entre vos outils et plateformes via APIs",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
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
              Pourquoi automatiser vos <span className="text-emerald-400">processus data</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Gain de temps",
                description: "Jusqu'à 80% de temps économisé sur les tâches répétitives",
                metric: "80%",
              },
              {
                title: "Réduction d'erreurs",
                description: "Élimination des erreurs humaines dans le traitement des données",
                metric: "95%",
              },
              {
                title: "Disponibilité",
                description: "Traitement 24/7 sans interruption ni intervention manuelle",
                metric: "24/7",
              },
              {
                title: "Scalabilité",
                description: "Capacité à traiter des volumes croissants sans effort supplémentaire",
                metric: "∞",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.metric}
                </div>
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
              Notre approche <span className="text-emerald-400">d'automatisation</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une méthodologie structurée pour automatiser efficacement vos processus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit des processus",
                description: "Analyse de vos workflows actuels et identification des opportunités d'automatisation",
              },
              {
                step: "02",
                title: "Conception solution",
                description: "Design de l'architecture d'automatisation adaptée à vos besoins",
              },
              {
                step: "03",
                title: "Implémentation",
                description: "Développement et déploiement des solutions d'automatisation",
              },
              {
                step: "04",
                title: "Monitoring & Optimisation",
                description: "Surveillance continue et amélioration des performances",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à automatiser vos processus data ?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Découvrez comment l'automation peut transformer votre efficacité opérationnelle et libérer le potentiel de
            vos équipes.
          </p>
          <QuoteButton
            serviceName="Automation"
            packageName="Consultation Automation"
            packageDescription="Demande de consultation automation depuis la page Automation"
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            Planifier un audit gratuit
            <ArrowRight className="ml-2" size={20} />
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
