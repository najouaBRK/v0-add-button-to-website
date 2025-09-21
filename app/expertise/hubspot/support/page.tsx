import Link from "next/link"
import { ArrowRight, Headphones, Clock, Users, Shield, Zap, Award } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-medium mb-6">
              <Headphones size={16} className="mr-2" />
              Support HubSpot
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Support HubSpot expert pour
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                {" "}
                maximiser vos performances
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Bénéficiez d'un support HubSpot réactif et expert pour résoudre vos problèmes, optimiser vos processus et
              tirer le maximum de votre investissement HubSpot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                serviceName="Support HubSpot"
                packageName="Support Prioritaire"
                packageDescription="Demande de support prioritaire depuis la page Support HubSpot"
                className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
              >
                Support prioritaire
              </QuoteButton>
              <Link
                href="/expertise/hubspot"
                className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Voir toutes nos expertises HubSpot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nos services de <span className="text-teal-400">support</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Un accompagnement complet pour tous vos besoins HubSpot
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Headphones className="text-teal-400" size={32} />,
                title: "Support technique",
                description: "Résolution rapide de vos problèmes techniques et bugs HubSpot",
              },
              {
                icon: <Users className="text-emerald-400" size={32} />,
                title: "Accompagnement utilisateurs",
                description: "Aide à l'utilisation quotidienne et formation ponctuelle",
              },
              {
                icon: <Zap className="text-teal-400" size={32} />,
                title: "Optimisation",
                description: "Amélioration continue de vos processus et configurations",
              },
              {
                icon: <Shield className="text-emerald-400" size={32} />,
                title: "Maintenance",
                description: "Maintenance préventive et mise à jour de vos paramètres",
              },
              {
                icon: <Award className="text-teal-400" size={32} />,
                title: "Consulting expert",
                description: "Conseils stratégiques pour maximiser votre ROI HubSpot",
              },
              {
                icon: <Clock className="text-emerald-400" size={32} />,
                title: "Support d'urgence",
                description: "Intervention rapide en cas de problème critique",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-teal-400/50 transition-all duration-300 hover:scale-105"
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

      {/* Support Plans Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Formules de <span className="text-teal-400">support</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choisissez le niveau de support adapté à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Support Standard",
                price: "À partir de 500€/mois",
                description: "Support par email et téléphone pendant les heures ouvrées",
                features: [
                  "Support email 48h",
                  "Support téléphone 8h-18h",
                  "Documentation et guides",
                  "Mises à jour incluses",
                  "Formation de base",
                ],
                color: "from-teal-500 to-teal-600",
              },
              {
                name: "Support Premium",
                price: "À partir de 1200€/mois",
                description: "Support prioritaire avec temps de réponse réduits",
                features: [
                  "Support email 24h",
                  "Support téléphone 7h-20h",
                  "Chat en direct",
                  "Optimisations mensuelles",
                  "Formation avancée",
                  "Reporting mensuel",
                ],
                color: "from-emerald-500 to-emerald-600",
                popular: true,
              },
              {
                name: "Support Enterprise",
                price: "Sur devis",
                description: "Support dédié avec consultant attitré",
                features: [
                  "Support 24/7",
                  "Consultant dédié",
                  "Intervention sur site",
                  "Développements sur-mesure",
                  "Formation illimitée",
                  "SLA garanti",
                ],
                color: "from-teal-600 to-emerald-600",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 bg-slate-800/50 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "border-emerald-400/50 ring-2 ring-emerald-400/20"
                    : "border-slate-700 hover:border-teal-400/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Populaire
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.price}
                  </div>
                  <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <QuoteButton
                  serviceName={`Support HubSpot ${plan.name}`}
                  packageName={plan.name}
                  packageDescription={`Demande de ${plan.name} depuis la page Support HubSpot`}
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300`}
                >
                  Choisir ce plan
                </QuoteButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Temps de <span className="text-teal-400">réponse</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des délais d'intervention adaptés à l'urgence de votre demande
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                priority: "Critique",
                description: "Problème bloquant l'activité",
                response: "< 2h",
                resolution: "< 8h",
                color: "text-red-400",
              },
              {
                priority: "Urgent",
                description: "Impact significatif sur l'activité",
                response: "< 4h",
                resolution: "< 24h",
                color: "text-orange-400",
              },
              {
                priority: "Normal",
                description: "Problème sans impact critique",
                response: "< 24h",
                resolution: "< 72h",
                color: "text-teal-400",
              },
              {
                priority: "Faible",
                description: "Question ou amélioration",
                response: "< 48h",
                resolution: "< 1 semaine",
                color: "text-emerald-400",
              },
            ].map((priority, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-teal-400/50 transition-all duration-300 text-center"
              >
                <h3 className={`text-xl font-semibold mb-2 ${priority.color}`}>{priority.priority}</h3>
                <p className="text-gray-300 text-sm mb-4">{priority.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-white font-medium">Réponse: </span>
                    <span className={priority.color}>{priority.response}</span>
                  </div>
                  <div>
                    <span className="text-white font-medium">Résolution: </span>
                    <span className={priority.color}>{priority.resolution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pourquoi choisir notre <span className="text-teal-400">support</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expertise certifiée",
                description: "Équipe 100% certifiée HubSpot avec 5+ ans d'expérience",
                metric: "100%",
              },
              {
                title: "Disponibilité",
                description: "Support disponible 6j/7 avec options 24/7",
                metric: "24/7",
              },
              {
                title: "Satisfaction client",
                description: "Taux de satisfaction de 98% sur nos interventions",
                metric: "98%",
              },
              {
                title: "Résolution rapide",
                description: "85% des problèmes résolus en moins de 24h",
                metric: "85%",
              },
            ].map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.metric}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-500/10 to-emerald-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Besoin d'aide avec HubSpot ?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts HubSpot est là pour vous accompagner. Contactez-nous pour un support personnalisé et
            réactif.
          </p>
          <QuoteButton
            serviceName="Support HubSpot"
            packageName="Consultation Support"
            packageDescription="Demande de consultation support depuis la page Support HubSpot"
            className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
          >
            Contacter le support
            <ArrowRight className="ml-2" size={20} />
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
