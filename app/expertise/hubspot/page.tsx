import { Settings, Users, TrendingUp, Zap, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HubSpotExpertisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1e293b] to-[#0f172a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-500/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            {/* HubSpot Logo */}
            <svg className="w-16 h-16 mr-4" viewBox="0 0 512 512" fill="none">
              <path
                d="M274.7 304c0-25.5-20.5-46-46-46s-46 20.5-46 46 20.5 46 46 46 46-20.5 46-46zm-92 0c0-25.4 20.6-46 46-46s46 20.6 46 46-20.6 46-46 46-46-20.6-46-46z"
                fill="#ff7a59"
              />
              <path
                d="M228.7 258c25.5 0 46 20.5 46 46s-20.5 46-46 46-46-20.5-46-46 20.5-46 46-46m0-8c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54z"
                fill="#ff7a59"
              />
              <circle cx="228.7" cy="304" r="23" fill="#ff7a59" />
              <path
                d="M319 213.7l36.4-36.4c3.1-3.1 8.2-3.1 11.3 0l11.3 11.3c3.1 3.1 3.1 8.2 0 11.3L341.6 236c-3.1 3.1-8.2 3.1-11.3 0l-11.3-11.3c-3.1-3.1-3.1-8.2 0-11z"
                fill="#ff7a59"
              />
              <path
                d="M138.4 394.1l36.4-36.4c3.1-3.1 8.2-3.1 11.3 0l11.3 11.3c3.1 3.1 3.1 8.2 0 11.3l-36.4 36.4c-3.1 3.1-8.2 3.1-11.3 0l-11.3-11.3c-3.1-3.1-3.1-8.2 0-11.3z"
                fill="#ff7a59"
              />
              <circle cx="378" cy="134" r="46" fill="#ff7a59" />
              <circle cx="134" cy="378" r="46" fill="#ff7a59" />
            </svg>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Expertise HubSpot
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Maximisez votre croissance avec HubSpot. De l'implémentation à l'optimisation, nous vous accompagnons dans
            votre transformation CRM et marketing automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Audit HubSpot gratuit
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Voir nos certifications
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Services HubSpot</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise complète sur tous les hubs HubSpot pour accélérer votre croissance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Implémentation CRM</h3>
                <p className="text-gray-600 mb-6">
                  Configuration complète de votre CRM HubSpot pour optimiser votre gestion commerciale.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Configuration initiale</li>
                  <li>• Migration des données</li>
                  <li>• Personnalisation des propriétés</li>
                  <li>• Formation des équipes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Hub</h3>
                <p className="text-gray-600 mb-6">
                  Automatisation marketing, lead nurturing et campagnes personnalisées pour générer plus de leads.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Email marketing</li>
                  <li>• Lead scoring</li>
                  <li>• Workflows automatisés</li>
                  <li>• Landing pages</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales Hub</h3>
                <p className="text-gray-600 mb-6">
                  Optimisation du processus de vente avec les outils HubSpot pour booster vos performances commerciales.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Pipeline de vente</li>
                  <li>• Séquences automatisées</li>
                  <li>• Prévisions de vente</li>
                  <li>• Reporting avancé</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Hub</h3>
                <p className="text-gray-600 mb-6">
                  Amélioration de l'expérience client avec les outils de service et support HubSpot.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Tickets de support</li>
                  <li>• Base de connaissances</li>
                  <li>• Chat en direct</li>
                  <li>• Enquêtes de satisfaction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimisation & Growth</h3>
                <p className="text-gray-600 mb-6">
                  Analyse des performances et optimisation continue pour maximiser votre ROI HubSpot.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Audit de performance</li>
                  <li>• Optimisation des workflows</li>
                  <li>• A/B testing</li>
                  <li>• Stratégie de croissance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-pink-50 to-rose-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intégrations</h3>
                <p className="text-gray-600 mb-6">
                  Connexion de HubSpot avec vos outils existants pour un écosystème digital unifié.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• API personnalisées</li>
                  <li>• Connecteurs natifs</li>
                  <li>• Synchronisation données</li>
                  <li>• Workflows cross-platform</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Méthodologie HubSpot</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour maximiser votre succès avec HubSpot
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "Analyse de vos processus actuels et besoins" },
              { step: "02", title: "Configuration", desc: "Paramétrage optimal de votre instance HubSpot" },
              { step: "03", title: "Formation", desc: "Accompagnement et formation de vos équipes" },
              { step: "04", title: "Optimisation", desc: "Amélioration continue et support" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Certifications HubSpot</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe d'experts certifiés HubSpot pour vous garantir les meilleures pratiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { cert: "HubSpot Marketing", level: "Certified Professional" },
              { cert: "HubSpot Sales", level: "Certified Professional" },
              { cert: "HubSpot Service", level: "Certified Professional" },
              { cert: "HubSpot CMS", level: "Certified Developer" },
            ].map((certification, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{certification.cert}</h3>
                  <p className="text-gray-600 text-sm">{certification.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nos Résultats HubSpot</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">Des performances qui parlent d'elles-mêmes</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "+300%", label: "Augmentation des leads qualifiés" },
              { number: "85%", label: "Amélioration du taux de conversion" },
              { number: "60%", label: "Réduction du cycle de vente" },
              { number: "100+", label: "Projets HubSpot réalisés" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                <p className="text-orange-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f1729] to-[#1e293b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Accélérer Votre Croissance avec HubSpot ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Découvrez comment optimiser votre utilisation de HubSpot avec un audit gratuit de votre instance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Audit HubSpot gratuit
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Voir nos cas clients
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
