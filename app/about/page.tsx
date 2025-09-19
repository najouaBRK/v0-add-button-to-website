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

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
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
