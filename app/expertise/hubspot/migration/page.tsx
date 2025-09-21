import Link from "next/link"
import { ArrowRight, Database, RefreshCw, Shield, CheckCircle, Clock, Users } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function MigrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <RefreshCw size={16} className="mr-2" />
              Migration vers HubSpot
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Migrez vers HubSpot en toute
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                {" "}
                sécurité et simplicité
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Transférez vos données depuis n'importe quel CRM vers HubSpot sans perte d'information ni interruption de
              service. Notre expertise garantit une migration fluide et sécurisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                serviceName="HubSpot Migration"
                packageName="Audit Migration"
                packageDescription="Demande d'audit migration depuis la page Migration HubSpot"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Audit migration gratuit
              </QuoteButton>
              <Link
                href="/expertise/hubspot"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Voir toutes nos expertises HubSpot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Sources Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nous migrons depuis <span className="text-blue-400">tous les CRM</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Expertise confirmée sur les principales plateformes CRM du marché
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Salesforce",
              "Pipedrive",
              "Zoho CRM",
              "Microsoft Dynamics",
              "SugarCRM",
              "Freshworks",
              "Monday.com",
              "Airtable",
              "Excel/CSV",
              "Base de données",
              "CRM sur-mesure",
              "Autres plateformes",
            ].map((platform, index) => (
              <div
                key={index}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-400/50 transition-all duration-300 text-center group"
              >
                <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">{platform}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Notre service de <span className="text-blue-400">migration</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Un accompagnement complet pour une transition réussie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="text-blue-400" size={32} />,
                title: "Audit des données",
                description: "Analyse complète de vos données existantes et identification des éléments à migrer",
              },
              {
                icon: <Shield className="text-indigo-400" size={32} />,
                title: "Nettoyage & préparation",
                description: "Déduplication, normalisation et enrichissement de vos données avant migration",
              },
              {
                icon: <RefreshCw className="text-blue-400" size={32} />,
                title: "Migration sécurisée",
                description: "Transfert de vos données avec sauvegarde complète et tests de validation",
              },
              {
                icon: <CheckCircle className="text-indigo-400" size={32} />,
                title: "Validation & tests",
                description: "Vérification de l'intégrité des données et tests fonctionnels complets",
              },
              {
                icon: <Clock className="text-blue-400" size={32} />,
                title: "Migration progressive",
                description: "Approche par phases pour minimiser l'impact sur votre activité",
              },
              {
                icon: <Users className="text-indigo-400" size={32} />,
                title: "Formation équipes",
                description: "Accompagnement de vos équipes dans la prise en main du nouveau système",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Processus de <span className="text-blue-400">migration</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une méthodologie éprouvée pour une migration sans risque
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Audit",
                description: "Analyse de votre CRM actuel et mapping des données",
              },
              {
                step: "02",
                title: "Planification",
                description: "Définition de la stratégie de migration et du planning",
              },
              {
                step: "03",
                title: "Préparation",
                description: "Nettoyage et structuration des données à migrer",
              },
              {
                step: "04",
                title: "Migration",
                description: "Transfert sécurisé des données vers HubSpot",
              },
              {
                step: "05",
                title: "Validation",
                description: "Tests complets et formation des utilisateurs",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nos <span className="text-blue-400">garanties</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Zéro perte de données",
                description: "Garantie de préservation de 100% de vos données critiques",
                icon: <Shield className="text-blue-400" size={24} />,
              },
              {
                title: "Migration rapide",
                description: "Délai moyen de 2-4 semaines selon la complexité",
                icon: <Clock className="text-indigo-400" size={24} />,
              },
              {
                title: "Support continu",
                description: "Accompagnement post-migration pendant 3 mois inclus",
                icon: <Users className="text-blue-400" size={24} />,
              },
              {
                title: "Rollback possible",
                description: "Possibilité de retour en arrière en cas de problème",
                icon: <RefreshCw className="text-indigo-400" size={24} />,
              },
            ].map((guarantee, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4 flex justify-center">{guarantee.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{guarantee.title}</h3>
                <p className="text-gray-300">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "500+", label: "Migrations réussies" },
              { number: "99.9%", label: "Taux de réussite" },
              { number: "0", label: "Perte de données" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à migrer vers HubSpot ?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Obtenez un audit gratuit de votre CRM actuel et découvrez comment migrer vers HubSpot en toute sécurité.
          </p>
          <QuoteButton
            serviceName="HubSpot Migration"
            packageName="Consultation Migration"
            packageDescription="Demande de consultation migration depuis la page Migration HubSpot"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Demander un audit migration gratuit
            <ArrowRight className="ml-2" size={20} />
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
