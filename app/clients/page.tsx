"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Nos Clients & Partenaires</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Découvrez les entreprises qui nous font confiance et les partenaires technologiques qui nous permettent de
            vous offrir les meilleures solutions.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Partenaires Technologiques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous collaborons avec les leaders du marché pour vous offrir des solutions performantes et innovantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-0 text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <img src="/hubspot-logo-orange.png" alt="HubSpot" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">HubSpot</h3>
                <p className="text-gray-600 mb-4">
                  Partenaire certifié HubSpot pour les solutions CRM, marketing automation et sales enablement.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">CRM</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Marketing</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Sales</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-0 text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <img src="/odoo-logo-purple.jpg" alt="Odoo" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Odoo</h3>
                <p className="text-gray-600 mb-4">
                  Partenaire officiel Odoo pour les solutions ERP complètes et l'intégration de processus métier.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">ERP</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">CRM</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">E-commerce</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-0 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies Web</h3>
                <p className="text-gray-600 mb-4">
                  Expertise dans les dernières technologies web pour créer des solutions modernes et performantes.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits et les résultats que nous avons obtenus ensemble.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Antoine Dubois</h4>
                    <p className="text-gray-600 text-sm">CEO, TechStart</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "NOLIA a transformé notre approche marketing. Nos conversions ont augmenté de 150% en 6 mois grâce à
                  leur expertise en automation."
                </p>
                <div className="flex text-yellow-400 mt-4">⭐⭐⭐⭐⭐</div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Marie Laurent</h4>
                    <p className="text-gray-600 text-sm">Directrice Marketing, InnovateCorp</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "L'équipe NOLIA a su comprendre nos enjeux et nous proposer des solutions sur mesure. Leur
                  accompagnement est exceptionnel."
                </p>
                <div className="flex text-yellow-400 mt-4">⭐⭐⭐⭐⭐</div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Pierre Martin</h4>
                    <p className="text-gray-600 text-sm">Fondateur, E-commerce Plus</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Grâce à NOLIA, notre site e-commerce génère maintenant 3x plus de revenus. Leur expertise technique
                  est remarquable."
                </p>
                <div className="flex text-yellow-400 mt-4">⭐⭐⭐⭐⭐</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Rejoignez nos clients satisfaits</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Découvrez comment nous pouvons transformer votre présence digitale et booster votre croissance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis">
              <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
                Demander un devis
              </Button>
            </Link>
            <Link href="/#contact-section">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-medium bg-transparent"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
