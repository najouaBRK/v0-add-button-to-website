import Link from "next/link"
import { ArrowRight, Plug, Zap, Settings, CheckCircle, Globe, Database } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Plug size={16} className="mr-2" />
              Intégrations HubSpot
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Connectez HubSpot à votre
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}
                écosystème digital
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Maximisez la valeur de HubSpot en l'intégrant parfaitement avec vos outils existants. Créez un écosystème
              digital unifié et automatisé pour une efficacité maximale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                serviceName="Intégrations HubSpot"
                packageName="Audit Intégrations"
                packageDescription="Demande d'audit intégrations depuis la page Intégrations HubSpot"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Audit intégrations gratuit
              </QuoteButton>
              <Link
                href="/expertise/hubspot"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Voir toutes nos expertises HubSpot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Integrations Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intégrations <span className="text-purple-400">populaires</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Connectez HubSpot avec vos outils préférés</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Salesforce", category: "CRM" },
              { name: "Zapier", category: "Automation" },
              { name: "Slack", category: "Communication" },
              { name: "Zoom", category: "Visioconférence" },
              { name: "Mailchimp", category: "Email Marketing" },
              { name: "WordPress", category: "CMS" },
              { name: "Shopify", category: "E-commerce" },
              { name: "Google Analytics", category: "Analytics" },
              { name: "Facebook Ads", category: "Publicité" },
              { name: "LinkedIn", category: "Social Media" },
              { name: "Stripe", category: "Paiement" },
              { name: "QuickBooks", category: "Comptabilité" },
              { name: "Calendly", category: "Planification" },
              { name: "Twilio", category: "Communication" },
              { name: "Eventbrite", category: "Événements" },
              { name: "SurveyMonkey", category: "Enquêtes" },
            ].map((integration, index) => (
              <div
                key={index}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="text-white font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                  {integration.name}
                </div>
                <div className="text-gray-400 text-sm">{integration.category}</div>
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
              Nos services d'<span className="text-purple-400">intégration</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Un accompagnement complet pour connecter vos outils
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Settings className="text-purple-400" size={32} />,
                title: "Intégrations natives",
                description: "Configuration des intégrations disponibles dans l'App Marketplace HubSpot",
              },
              {
                icon: <Zap className="text-pink-400" size={32} />,
                title: "Intégrations API",
                description: "Développement d'intégrations personnalisées via les APIs HubSpot",
              },
              {
                icon: <Database className="text-purple-400" size={32} />,
                title: "Synchronisation données",
                description: "Mise en place de flux de données bidirectionnels entre vos outils",
              },
              {
                icon: <Globe className="text-pink-400" size={32} />,
                title: "Webhooks",
                description: "Configuration de webhooks pour des actions en temps réel",
              },
              {
                icon: <CheckCircle className="text-purple-400" size={32} />,
                title: "Tests & validation",
                description: "Validation complète du bon fonctionnement des intégrations",
              },
              {
                icon: <Plug className="text-pink-400" size={32} />,
                title: "Maintenance",
                description: "Suivi et maintenance continue de vos intégrations",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
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

      {/* Integration Categories Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Catégories d'<span className="text-purple-400">intégrations</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Nous intégrons HubSpot avec tous types d'outils</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "CRM & Sales",
                description: "Salesforce, Pipedrive, Microsoft Dynamics",
                tools: ["Salesforce", "Pipedrive", "Dynamics", "Zoho"],
              },
              {
                title: "Marketing",
                description: "Mailchimp, Facebook Ads, Google Ads",
                tools: ["Mailchimp", "Facebook Ads", "Google Ads", "LinkedIn"],
              },
              {
                title: "E-commerce",
                description: "Shopify, WooCommerce, Magento",
                tools: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
              },
              {
                title: "Communication",
                description: "Slack, Microsoft Teams, Zoom",
                tools: ["Slack", "Teams", "Zoom", "Discord"],
              },
              {
                title: "Analytics",
                description: "Google Analytics, Mixpanel, Hotjar",
                tools: ["Google Analytics", "Mixpanel", "Hotjar", "Amplitude"],
              },
              {
                title: "Productivité",
                description: "Calendly, Asana, Trello, Notion",
                tools: ["Calendly", "Asana", "Trello", "Notion"],
              },
              {
                title: "Finance",
                description: "Stripe, PayPal, QuickBooks",
                tools: ["Stripe", "PayPal", "QuickBooks", "Xero"],
              },
              {
                title: "Support",
                description: "Zendesk, Intercom, Freshdesk",
                tools: ["Zendesk", "Intercom", "Freshdesk", "Help Scout"],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                      {tool}
                    </span>
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
              Processus d'<span className="text-purple-400">intégration</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une approche méthodique pour des intégrations réussies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Audit",
                description: "Analyse de votre écosystème d'outils existant",
              },
              {
                step: "02",
                title: "Mapping",
                description: "Cartographie des flux de données nécessaires",
              },
              {
                step: "03",
                title: "Configuration",
                description: "Mise en place des intégrations et connexions",
              },
              {
                step: "04",
                title: "Tests",
                description: "Validation du bon fonctionnement des flux",
              },
              {
                step: "05",
                title: "Formation",
                description: "Formation de vos équipes aux nouveaux processus",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
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
              Bénéfices des <span className="text-purple-400">intégrations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Productivité",
                description: "Gain de 50% de temps sur les tâches répétitives",
                metric: "+50%",
              },
              {
                title: "Données unifiées",
                description: "Vue 360° de vos clients et prospects",
                metric: "360°",
              },
              {
                title: "Automatisation",
                description: "Workflows automatisés entre tous vos outils",
                metric: "Auto",
              },
              {
                title: "ROI",
                description: "Retour sur investissement mesurable dès 3 mois",
                metric: "3 mois",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à connecter HubSpot à vos outils ?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Découvrez comment nos intégrations peuvent transformer votre efficacité opérationnelle et unifier votre
            écosystème digital.
          </p>
          <QuoteButton
            serviceName="Intégrations HubSpot"
            packageName="Consultation Intégrations"
            packageDescription="Demande de consultation intégrations depuis la page Intégrations HubSpot"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Planifier un audit intégrations gratuit
            <ArrowRight className="ml-2" size={20} />
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
