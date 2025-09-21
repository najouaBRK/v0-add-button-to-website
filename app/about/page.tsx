import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative gradient-hero text-white py-32 px-4 overflow-hidden particles-bg">
        <div className="absolute inset-0 animate-zoom-in">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-7xl md:text-8xl font-bold mb-8 text-white">
              NOLIA <span className="text-orange-400">Digital</span>
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Votre partenaire stratégique pour la transformation digitale. Nous créons des solutions innovantes qui
              propulsent votre entreprise vers le succès dans l'ère numérique.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Découvrir nos services
                </Button>
              </Link>
              <Link href="#company-info">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-12 py-6 text-lg font-medium bg-transparent rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="company-info" className="py-32 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-bold text-slate-800 mb-6">Qui sommes-nous ?</h2>
              <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                NOLIA est une agence digitale française spécialisée dans l'accompagnement des entreprises dans leur
                transformation numérique depuis 2019.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-slate-800 mb-6">Notre ADN</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Fondée par une équipe d'experts passionnés par l'innovation technologique, NOLIA s'est imposée comme
                    un acteur de référence dans l'écosystème digital français. Notre approche unique combine expertise
                    technique pointue et compréhension approfondie des enjeux business.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Nous accompagnons nos clients dans tous les aspects de leur présence digitale : du développement web
                    à l'intelligence artificielle, en passant par le marketing digital et l'analyse de données.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8">
                  <h4 className="text-2xl font-bold text-slate-800 mb-6">NOLIA en chiffres</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-500 mb-2">350+</div>
                      <div className="text-slate-600 font-medium">Projets réalisés</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                      <div className="text-slate-600 font-medium">Clients satisfaits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-700 mb-2">25+</div>
                      <div className="text-slate-600 font-medium">Experts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                      <div className="text-slate-600 font-medium">Années d'expérience</div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-white shadow-2xl border-0">
                <CardContent className="p-12">
                  <h4 className="text-3xl font-bold text-slate-800 mb-8 text-center">Informations société</h4>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800">Raison sociale :</strong>
                        <p className="text-slate-600">NOLIA Digital Solutions SAS</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800">Siège social :</strong>
                        <p className="text-slate-600">15 Rue de la Paix, 75002 Paris, France</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800">Secteur d'activité :</strong>
                        <p className="text-slate-600">Conseil en systèmes et logiciels informatiques</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800">Code NAF :</strong>
                        <p className="text-slate-600">6202A - Conseil en systèmes informatiques</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800">Effectif :</strong>
                        <p className="text-slate-600">25 collaborateurs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800">Chiffre d'affaires :</strong>
                        <p className="text-slate-600">2,5M€ (2023)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-slate-800 mb-6">Nos domaines d'expertise</h2>
            <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              NOLIA maîtrise l'ensemble de l'écosystème digital pour offrir des solutions complètes et performantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Développement Web</h3>
                <p className="text-slate-600 leading-relaxed">
                  Sites vitrines, e-commerce, applications web sur mesure avec React, Next.js et les dernières
                  technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Content Marketing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Stratégie de contenu, rédaction web, storytelling et création de contenus engageants.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">SEO & Référencement</h3>
                <p className="text-slate-600 leading-relaxed">
                  Optimisation pour les moteurs de recherche, audit SEO et stratégies de visibilité organique.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Publicité Payante</h3>
                <p className="text-slate-600 leading-relaxed">
                  Google Ads, Facebook Ads, LinkedIn Ads et campagnes publicitaires multi-canaux performantes.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Data & Analytics</h3>
                <p className="text-slate-600 leading-relaxed">
                  Analyse de données, tableaux de bord, BI et intelligence artificielle pour optimiser vos performances.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">HubSpot & CRM</h3>
                <p className="text-slate-600 leading-relaxed">
                  Implémentation, migration, formation et optimisation de votre écosystème HubSpot.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-bold text-slate-800 mb-6">Notre mission</h2>
              <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-8"></div>
              <p className="text-2xl text-slate-600 leading-relaxed">
                Accompagner les entreprises dans leur transformation digitale en créant des solutions innovantes qui
                génèrent une croissance durable et mesurable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <Card className="text-center p-10 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="text-white text-3xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Excellence</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous visons l'excellence dans chaque projet, en dépassant les attentes de nos clients grâce à notre
                    expertise technique et notre créativité.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-10 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="text-white text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Innovation</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous restons à la pointe des technologies émergentes pour offrir des solutions avant-gardistes et
                    compétitives.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-10 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="text-white text-3xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Partenariat</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous construisons des relations durables basées sur la confiance, la transparence et la
                    collaboration étroite avec nos clients.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
              <CardContent className="p-16 text-center">
                <h3 className="text-4xl font-bold mb-8">Prêt à transformer votre présence digitale ?</h3>
                <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Découvrez comment NOLIA peut vous accompagner dans votre transformation digitale et propulser votre
                  entreprise vers de nouveaux sommets.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                      Démarrer un projet
                    </Button>
                  </Link>
                  <Link href="/#services-section">
                    <Button
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-12 py-6 text-lg font-medium bg-transparent rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      Voir nos services
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
