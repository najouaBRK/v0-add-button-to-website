"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function SEOSEAPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              🔍 SEO & SEA Expert
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Faites décoller votre <span className="text-cyan-200">visibilité</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Confiez la gestion de votre référencement naturel à une agence SEO proche de ses clients qui s'engage à vos
            côtés et qui vous aidera à atteindre vos objectifs de croissance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 text-lg font-medium">
              Demander un audit SEO gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">L'investissement qu'il vous manque</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Saviez-vous que 70 à 80% des utilisateurs des moteurs de recherche se concentrent uniquement sur les
              résultats naturels ? Cela signifie que les internautes ne veulent pas cliquer sur les annonces payantes en
              haut des résultats de recherche, ils veulent cliquer sur les résultats organiques qui se trouvent sous ces
              annonces. Ne pas faire de référencement naturel revient donc à vous couper d'une bonne partie des clics
              sur Google, Bing et autres...
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Découvrez nos planètes autour de l'univers SEO</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Audit SEO</h3>
                <p className="text-gray-600">
                  Boostez votre visibilité en ligne avec un audit SEO complet. Nos experts vous aideront à identifier
                  les points d'amélioration pour maximiser votre potentiel de classement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-cyan-600 text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Content Marketing</h3>
                <p className="text-gray-600">
                  Démarquez-vous de la concurrence avec une stratégie de content marketing sur mesure. Du contenu de
                  qualité qui attire, engage et convertit votre audience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-700 text-2xl">✍️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Copywriting</h3>
                <p className="text-gray-600">
                  Des mots qui vendent. Nous créons ensemble un contenu persuasif et optimisé pour les moteurs de
                  recherche pour booster votre trafic et vos conversions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-cyan-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-cyan-700 text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Google Partner</h3>
                <p className="text-gray-600">
                  En tant que partenaires Google, nous sommes qualifiés pour vous aider à créer et à gérer des campagnes
                  Google Ads efficaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre méthodologie d'accompagnement</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Nos experts ont mis en place une méthode de stratégie SEO efficace et flexible selon les besoins de chaque
              client. Notre objectif est d'améliorer votre visibilité en ligne et d'optimiser vos résultats dans les
              moteurs de recherche.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Audit</h3>
              <p className="text-gray-600">
                Dans cette première phase, nos experts SEO se plongent dans les défis auxquels vous faites face ainsi
                que ceux rencontrés par votre site, afin de vous proposer un audit SEO sur mesure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Audit sémantique et des mots-clés</h3>
              <p className="text-gray-600">
                Cette étape vise à identifier les requêtes les plus pertinentes à cibler et à concevoir une structure de
                contenu optimale pour vous positionner sur l'ensemble des mots-clés clés de votre secteur.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Audit de la concurrence & benchmark</h3>
              <p className="text-gray-600">
                Cet audit permet de faire un état des lieux de la stratégie adoptée par vos concurrents. Grâce à ce
                dernier, on peut s'inspirer de ce qui a marché chez eux pour l'implémenter sur votre site.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accompagnement et recettage</h3>
              <p className="text-gray-600">
                Une fois les audits livrés, une phase de suivi commence. Nos experts accompagnent alors vos équipes dans
                la mise en place des recommandations fournies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                5
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Définition et suivi des KPIs</h3>
              <p className="text-gray-600">
                À la suite de la mise en place des recommandations SEO, nous suivons et optimisons en continu les
                performances de votre site : trafic organique, position sur les mots clés…
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Une équipe réactive et à vos côtés</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Dialogue, coopération et entente partagée. Que ce soit pour affiner une stratégie SEO déjà en cours,
            explorer des pistes encore inexplorées ou simplement échanger sur les premières ébauches d'un projet de
            référencement naturel, notre équipe demeure à votre écoute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 text-lg font-medium">
                Demander mon devis SEO
              </Button>
            </Link>
            <Link href="/#contact-section">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-medium bg-transparent"
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
