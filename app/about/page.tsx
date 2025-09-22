import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
      <section className="relative gradient-hero text-white py-20 md:py-24 lg:py-32 px-4 overflow-hidden particles-bg">
        <div className="absolute inset-0 animate-zoom-in">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        </div>
        <div className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 opacity-20 animate-bounce">
          <img src="/digital-innovation-icon.jpg" alt="Innovation" className="w-full h-full" />
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 md:w-16 md:h-16 opacity-30 animate-pulse">
          <img src="/technology-gear-icon.jpg" alt="Technology" className="w-full h-full" />
        </div>
        <div className="absolute bottom-40 left-20 w-20 h-20 md:w-24 md:h-24 opacity-25 animate-spin-slow">
          <img src="/data-analytics-chart-icon.jpg" alt="Analytics" className="w-full h-full" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 text-white px-4 sm:px-0">
              NOLIA <span className="text-orange-400">Digital</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-xs sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Votre partenaire stratégique pour la transformation digitale. Nous créons des solutions innovantes qui
              propulsent votre entreprise vers le succès dans l'ère numérique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4 sm:px-0">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 touch-manipulation">
                  Découvrir nos services
                </Button>
              </Link>
              <Link href="#company-info">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-medium bg-transparent rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 touch-manipulation"
                >
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      <section
        id="company-info"
        className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-sky-100 relative overflow-hidden"
      >
        <div className="absolute top-10 right-10 w-24 h-24 md:w-32 md:h-32 opacity-10 animate-float">
          <img src="/digital-transformation-abstract.png" alt="Digital" className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 left-10 w-20 h-20 md:w-28 md:h-28 opacity-15 animate-float-delayed">
          <img src="/innovation-lightbulb-icon.png" alt="Innovation" className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 md:mb-6 px-4 sm:px-0">
                Qui sommes-nous ?
              </h2>
              <div className="w-16 h-1 md:w-24 md:h-1 bg-orange-500 rounded-full mx-auto mb-6 md:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xs sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                NOLIA est une agence digitale française spécialisée dans l'accompagnement des entreprises dans leur
                transformation numérique depuis 2019.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20">
              <div className="space-y-6 md:space-y-8 animate-slide-in-left">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 md:mb-6">Notre ADN</h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4 md:mb-6">
                    Fondée par une équipe d'experts passionnés par l'innovation technologique, NOLIA s'est imposée comme
                    un acteur de référence dans l'écosystème digital français. Notre approche unique combine expertise
                    technique pointue et compréhension approfondie des enjeux business.
                  </p>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    Nous accompagnons nos clients dans tous les aspects de leur présence digitale : du développement web
                    à l'intelligence artificielle, en passant par le marketing digital et l'analyse de données.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/80 to-blue-100/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg">
                  <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">NOLIA en chiffres</h4>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="text-center transform hover:scale-105 transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">350+</div>
                      <div className="text-slate-600 font-medium text-sm md:text-base">Projets réalisés</div>
                    </div>
                    <div className="text-center transform hover:scale-105 transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">95%</div>
                      <div className="text-slate-600 font-medium text-sm md:text-base">Clients satisfaits</div>
                    </div>
                    <div className="text-center transform hover:scale-105 transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-slate-700 mb-2">25+</div>
                      <div className="text-slate-600 font-medium text-sm md:text-base">Experts</div>
                    </div>
                    <div className="text-center transform hover:scale-105 transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">5</div>
                      <div className="text-slate-600 font-medium text-sm md:text-base">Années d'expérience</div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 animate-slide-in-right">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-6 md:mb-8">
                    <img
                      src="/company-building-icon.jpg"
                      alt="Company"
                      className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 opacity-80"
                    />
                    <h4 className="text-2xl md:text-3xl font-bold text-slate-800">Informations société</h4>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800 text-sm md:text-base">Raison sociale :</strong>
                        <p className="text-slate-600 text-sm md:text-base">NOLIA Digital Solutions SAS</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800 text-sm md:text-base">Siège social :</strong>
                        <p className="text-slate-600 text-sm md:text-base">15 Rue de la Paix, 75002 Paris, France</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800 text-sm md:text-base">Secteur d'activité :</strong>
                        <p className="text-slate-600 text-sm md:text-base">
                          Conseil en systèmes et logiciels informatiques
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800 text-sm md:text-base">Code NAF :</strong>
                        <p className="text-slate-600 text-sm md:text-base">6202A - Conseil en systèmes informatiques</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800 text-sm md:text-base">Effectif :</strong>
                        <p className="text-slate-600 text-sm md:text-base">25 collaborateurs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-800 text-sm md:text-base">Chiffre d'affaires :</strong>
                        <p className="text-slate-600 text-sm md:text-base">2,5M€ (2023)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-sky-100 to-blue-200 relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-20 h-20 md:w-24 md:h-24 opacity-10 animate-spin-slow">
          <img src="/web-development-code-icon.png" alt="Development" className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 right-1/4 w-16 h-16 md:w-20 md:h-20 opacity-15 animate-bounce-slow">
          <img src="/seo-search-optimization-icon.jpg" alt="SEO" className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 md:mb-6 px-4 sm:px-0">
              Nos domaines d'expertise
            </h2>
            <div className="w-16 h-1 md:w-24 md:h-1 bg-orange-500 rounded-full mx-auto mb-6 md:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xs sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              NOLIA maîtrise l'ensemble de l'écosystème digital pour offrir des solutions complètes et performantes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="group p-6 md:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm animate-fade-in-up hover:transform hover:scale-105">
              <CardContent className="pt-4 md:pt-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:animate-pulse">
                  <img src="/web-development-icon-white.jpg" alt="Web" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4">Développement Web</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Sites vitrines, e-commerce, applications web sur mesure avec React, Next.js et les dernières
                  technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-6 md:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm animate-fade-in-up hover:transform hover:scale-105">
              <CardContent className="pt-4 md:pt-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:animate-pulse">
                  <img src="/web-development-icon-white.jpg" alt="Web" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4">Content Marketing</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Stratégie de contenu, rédaction web, storytelling et création de contenus engageants.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-6 md:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm animate-fade-in-up hover:transform hover:scale-105">
              <CardContent className="pt-4 md:pt-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:animate-pulse">
                  <img src="/web-development-icon-white.jpg" alt="Web" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4">SEO & Référencement</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Optimisation pour les moteurs de recherche, audit SEO et stratégies de visibilité organique.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-6 md:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm animate-fade-in-up hover:transform hover:scale-105">
              <CardContent className="pt-4 md:pt-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:animate-pulse">
                  <img src="/web-development-icon-white.jpg" alt="Web" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4">Publicité Payante</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Google Ads, Facebook Ads, LinkedIn Ads et campagnes publicitaires multi-canaux performantes.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-6 md:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm animate-fade-in-up hover:transform hover:scale-105">
              <CardContent className="pt-4 md:pt-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:animate-pulse">
                  <img src="/web-development-icon-white.jpg" alt="Web" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4">Data & Analytics</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Analyse de données, tableaux de bord, BI et intelligence artificielle pour optimiser vos performances.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-6 md:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm animate-fade-in-up hover:transform hover:scale-105">
              <CardContent className="pt-4 md:pt-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:animate-pulse">
                  <img src="/web-development-icon-white.jpg" alt="Web" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4">HubSpot & CRM</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Implémentation, migration, formation et optimisation de votre écosystème HubSpot.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 to-sky-50 relative overflow-hidden">
        <div className="absolute top-16 right-16 w-12 h-12 md:w-16 md:h-16 opacity-20 animate-float">
          <img src="/mission-target-icon.png" alt="Mission" className="w-full h-full" />
        </div>
        <div className="absolute bottom-16 left-16 w-16 h-16 md:w-20 md:h-20 opacity-15 animate-float-delayed">
          <img src="/partnership-handshake-icon.png" alt="Partnership" className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 md:mb-6 px-4 sm:px-0">
                Notre mission
              </h2>
              <div className="w-16 h-1 md:w-24 md:h-1 bg-orange-500 rounded-full mx-auto mb-6 md:mb-8"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed px-4 sm:px-0">
                Accompagner les entreprises dans leur transformation digitale en créant des solutions innovantes qui
                génèrent une croissance durable et mesurable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
              <Card className="text-center p-8 md:p-10 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in-up hover:transform hover:scale-105">
                <CardContent className="pt-4 md:pt-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                    <span className="text-white text-2xl md:text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">Excellence</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Nous visons l'excellence dans chaque projet, en dépassant les attentes de nos clients grâce à notre
                    expertise technique et notre créativité.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 md:p-10 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 animate-fade-in-up hover:transform hover:scale-105">
                <CardContent className="pt-4 md:pt-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                    <span className="text-white text-2xl md:text-3xl">🚀</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">Innovation</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Nous restons à la pointe des technologies émergentes pour offrir des solutions avant-gardistes et
                    compétitives.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 md:p-10 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 animate-fade-in-up hover:transform hover:scale-105">
                <CardContent className="pt-4 md:pt-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                    <span className="text-white text-2xl md:text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">Partenariat</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Nous construisons des relations durables basées sur la confiance, la transparence et la
                    collaboration étroite avec nos clients.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-2xl animate-fade-in-up">
              <CardContent className="p-12 md:p-16 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 opacity-20 animate-spin-slow">
                  <img src="/rocket-launch-icon-white.jpg" alt="Launch" className="w-full h-full" />
                </div>
                <div className="absolute bottom-4 left-4 w-8 h-8 md:w-10 md:h-10 opacity-25 animate-pulse">
                  <img src="/growth-arrow-icon-white.jpg" alt="Growth" className="w-full h-full" />
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 relative z-10 px-4 sm:px-0">
                  Prêt à transformer votre présence digitale ?
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 md:mb-12 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed relative z-10 px-4 sm:px-0">
                  Découvrez comment NOLIA peut vous accompagner dans votre transformation digitale et propulser votre
                  entreprise vers de nouveaux sommets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center relative z-10 px-4 sm:px-0">
                  <Link href="/contact">
                    <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 touch-manipulation">
                      Démarrer un projet
                    </Button>
                  </Link>
                  <Link href="/#services-section">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-medium bg-transparent rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 touch-manipulation"
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
