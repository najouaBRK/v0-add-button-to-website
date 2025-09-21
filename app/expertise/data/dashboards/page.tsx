import Link from "next/link"
import { ArrowRight, Monitor, PieChart, Activity, Layers, Eye, Settings } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function DashboardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-6">
              <Monitor size={16} className="mr-2" />
              Dashboards Personnalisés
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Visualisez vos données avec des
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {" "}
                dashboards sur-mesure
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Créez des tableaux de bord interactifs et intuitifs qui transforment vos données complexes en insights
              visuels clairs pour une prise de décision rapide et éclairée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                serviceName="Dashboards"
                packageName="Démo Dashboard"
                packageDescription="Demande de démonstration dashboard depuis la page Dashboards"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Voir une démo
              </QuoteButton>
              <Link
                href="/expertise/data"
                className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
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
              Nos solutions <span className="text-indigo-400">Dashboard</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des tableaux de bord adaptés à vos besoins métier et à vos objectifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <PieChart className="text-indigo-400" size={32} />,
                title: "Dashboard Exécutif",
                description: "Vue d'ensemble stratégique avec les KPIs essentiels pour la direction",
              },
              {
                icon: <Activity className="text-purple-400" size={32} />,
                title: "Dashboard Opérationnel",
                description: "Suivi en temps réel des performances et des métriques opérationnelles",
              },
              {
                icon: <Layers className="text-indigo-400" size={32} />,
                title: "Dashboard Marketing",
                description: "Analyse complète de vos campagnes et de votre ROI marketing",
              },
              {
                icon: <Eye className="text-purple-400" size={32} />,
                title: "Dashboard Commercial",
                description: "Pilotage de votre pipeline commercial et de vos performances de vente",
              },
              {
                icon: <Settings className="text-indigo-400" size={32} />,
                title: "Dashboard Personnalisé",
                description: "Création sur-mesure selon vos besoins spécifiques et votre secteur",
              },
              {
                icon: <Monitor className="text-purple-400" size={32} />,
                title: "Dashboard Mobile",
                description: "Accès à vos données essentielles depuis n'importe quel appareil",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105"
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
              Notre processus de création de <span className="text-indigo-400">Dashboard</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une méthodologie éprouvée pour créer des dashboards qui répondent parfaitement à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse des besoins",
                description: "Identification de vos KPIs critiques et de vos objectifs métier",
              },
              {
                step: "02",
                title: "Design UX/UI",
                description: "Conception d'interfaces intuitives et ergonomiques pour vos utilisateurs",
              },
              {
                step: "03",
                title: "Développement",
                description: "Création technique du dashboard avec intégration de vos sources de données",
              },
              {
                step: "04",
                title: "Formation & Support",
                description: "Formation de vos équipes et accompagnement pour une adoption réussie",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies <span className="text-indigo-400">utilisées</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Nous utilisons les meilleures technologies pour créer des dashboards performants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Power BI",
              "Tableau",
              "Google Data Studio",
              "Grafana",
              "Metabase",
              "Superset",
              "D3.js",
              "React Dashboard",
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-indigo-400/50 transition-all duration-300 text-center"
              >
                <div className="text-white font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Créons ensemble votre dashboard idéal</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et créons un tableau de bord qui transformera votre façon de prendre des décisions.
          </p>
          <QuoteButton
            serviceName="Dashboards"
            packageName="Consultation Dashboard"
            packageDescription="Demande de consultation dashboard depuis la page Dashboards"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Discuter de mon projet
            <ArrowRight className="ml-2" size={20} />
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
