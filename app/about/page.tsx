import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            À propos de <span className="text-orange-400">NOLIA</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            NOLIA est une agence digitale innovante spécialisée dans l'acquisition et la transformation numérique. Nous
            accompagnons les entreprises dans leur croissance digitale grâce à des solutions technologiques de pointe et
            une expertise reconnue dans les domaines du marketing digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#services-section">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
                Découvrir nos services
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-medium bg-transparent"
              >
                Contactez-nous
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre histoire</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Fondée avec la vision de démocratiser l'accès aux technologies digitales avancées, NOLIA s'est
                  rapidement imposée comme un acteur incontournable de la transformation numérique. Depuis nos débuts,
                  nous avons accompagné plus de 500 entreprises dans leur évolution digitale.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Notre approche unique combine expertise technique, créativité et compréhension approfondie des enjeux
                  business pour créer des solutions qui génèrent un impact réel et mesurable sur la croissance de nos
                  clients.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Projets réalisés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                    <div className="text-gray-600">Clients satisfaits</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi choisir NOLIA ?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Expertise reconnue dans tous les domaines du digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Approche personnalisée pour chaque projet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Technologies de pointe et innovation constante</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Accompagnement complet de A à Z</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Résultats mesurables et ROI optimisé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NOLIA maîtrise l'ensemble de l'écosystème digital pour vous offrir des solutions complètes et
              performantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Développement Web</h3>
                <p className="text-gray-600">
                  Sites vitrines, e-commerce, applications web sur mesure avec les dernières technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Digital</h3>
                <p className="text-gray-600">
                  SEO, SEA, social media, email marketing pour maximiser votre visibilité en ligne.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Data</h3>
                <p className="text-gray-600">
                  Analyse de données, tableaux de bord personnalisés et insights pour optimiser vos performances.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligence Artificielle</h3>
                <p className="text-gray-600">
                  Solutions IA personnalisées, chatbots intelligents et automatisation des processus.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-red-600 text-xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">CRM & Automation</h3>
                <p className="text-gray-600">
                  Systèmes CRM sur mesure et automatisation des processus métier pour optimiser votre productivité.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-teal-600 text-xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Formation</h3>
                <p className="text-gray-600">
                  Formations personnalisées pour maîtriser les outils digitaux et développer vos compétences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos valeurs fondamentales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chez NOLIA, nous croyons en l'innovation, l'excellence et la collaboration pour créer des solutions
              digitales exceptionnelles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Nous utilisons les dernières technologies pour créer des solutions avant-gardistes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Nous visons l'excellence dans chaque projet et dépassons les attentes de nos clients.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  Nous travaillons en étroite collaboration avec nos clients pour atteindre leurs objectifs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-orange-600 text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Résultats</h3>
                <p className="text-gray-600">
                  Nous nous concentrons sur des résultats mesurables et un retour sur investissement optimal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre équipe</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  L'équipe NOLIA réunit des experts passionnés par le digital : développeurs full-stack, spécialistes
                  marketing, designers UX/UI, consultants en transformation digitale et experts en intelligence
                  artificielle.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Chaque membre de notre équipe apporte son expertise unique pour créer des solutions innovantes et
                  performantes, adaptées aux besoins spécifiques de chaque client.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">Développeurs experts en technologies modernes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">Spécialistes marketing digital certifiés</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">Designers UX/UI créatifs et expérimentés</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">Consultants en transformation digitale</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre méthodologie</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Analyse & Stratégie</h4>
                      <p className="text-gray-600 text-sm">
                        Audit complet de votre situation actuelle et définition d'une stratégie sur mesure.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Conception & Design</h4>
                      <p className="text-gray-600 text-sm">
                        Création de maquettes et prototypes pour valider l'expérience utilisateur.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-purple-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Développement</h4>
                      <p className="text-gray-600 text-sm">
                        Développement agile avec tests réguliers et validation continue.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-orange-600 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Lancement & Suivi</h4>
                      <p className="text-gray-600 text-sm">
                        Mise en ligne, formation et accompagnement pour optimiser les performances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Notre mission</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transformer la présence digitale de nos clients en moteur de croissance durable. Nous combinons
              créativité, technologie et stratégie pour créer des expériences digitales exceptionnelles qui génèrent des
              résultats concrets et durables.
            </p>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <p className="text-lg text-gray-700 italic">
                "Chez NOLIA, chaque projet est une opportunité de repousser les limites du possible et de créer des
                solutions qui marquent la différence dans l'univers digital."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
