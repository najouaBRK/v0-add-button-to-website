"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import FormspreeButton from "@/components/FormspreeButton"

export default function SiteVitrinePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              SITE VITRINE
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Site <span className="text-orange-400">Vitrine</span> Professionnel
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Idéal pour assurer et conforter sa présence sur internet. Il permettra d'expliquer vos services et
            d'afficher vos produits ainsi que votre expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
              Demander un devis
            </Button>
          </div>
        </div>
      </section>

      {/* Méthodes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre méthodologie</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée en 5 étapes pour créer votre site vitrine parfait
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Analyse & Stratégie</h3>
                <p className="text-gray-600">
                  Étude de votre secteur d'activité, analyse de la concurrence et définition de vos objectifs business.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Design & UX</h3>
                <p className="text-gray-600">
                  Création de maquettes personnalisées et optimisation de l'expérience utilisateur pour maximiser les
                  conversions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Développement</h3>
                <p className="text-gray-600">
                  Développement responsive avec les dernières technologies web pour une performance optimale.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Optimisation SEO</h3>
                <p className="text-gray-600">
                  Optimisation technique et sémantique pour améliorer votre visibilité sur les moteurs de recherche.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Mise en ligne</h3>
                <p className="text-gray-600">
                  Tests complets, formation à l'administration et mise en ligne avec suivi post-lancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fonctionnalités incluses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fonctionnalités incluses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce dont vous avez besoin pour un site vitrine professionnel et performant
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Design responsive</h3>
                <p className="text-gray-600">
                  Adaptation automatique sur tous les appareils (mobile, tablette, desktop)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">CMS intégré</h3>
                <p className="text-gray-600">Interface d'administration simple pour gérer vos contenus en autonomie</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Optimisation SEO</h3>
                <p className="text-gray-600">
                  Structure optimisée pour les moteurs de recherche et amélioration du référencement
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Formulaires de contact</h3>
                <p className="text-gray-600">Formulaires personnalisés avec protection anti-spam intégrée</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Hébergement sécurisé</h3>
                <p className="text-gray-600">Hébergement haute performance avec certificat SSL inclus</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Support & maintenance</h3>
                <p className="text-gray-600">Support technique et mises à jour de sécurité incluses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tarifs Site Vitrine</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des formules adaptées à vos besoins et votre budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Essentiel</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">1,990€</div>
                  <p className="text-gray-600">Site jusqu'à 3 pages</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Design responsive
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Formulaire de contact
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Optimisation SEO de base
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>3 mois de maintenance
                  </li>
                </ul>
                <FormspreeButton
                  packageName="Site Vitrine Essentiel"
                  packagePrice="1,990€"
                  packageDescription="Site jusqu'à 3 pages avec design responsive, formulaire de contact, optimisation SEO de base et 3 mois de maintenance"
                  serviceName="Site Vitrine"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Choisir cette formule
                </FormspreeButton>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-orange-500 bg-orange-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">Populaire</span>
              </div>
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professionnel</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">2,990€</div>
                  <p className="text-gray-600">Site jusqu'à 7 pages</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Tout de la formule Essentiel
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    CMS intégré
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Blog intégré
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>6 mois de maintenance
                  </li>
                </ul>
                <FormspreeButton
                  packageName="Site Vitrine Professionnel"
                  packagePrice="2,990€"
                  packageDescription="Site jusqu'à 7 pages avec tout de la formule Essentiel, CMS intégré, blog intégré et 6 mois de maintenance"
                  serviceName="Site Vitrine"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Choisir cette formule
                </FormspreeButton>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">4,990€</div>
                  <p className="text-gray-600">Site illimité</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Tout de la formule Pro
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Intégrations avancées
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Analytics avancés
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    12 mois de maintenance
                  </li>
                </ul>
                <FormspreeButton
                  packageName="Site Vitrine Premium"
                  packagePrice="4,990€"
                  packageDescription="Site illimité avec tout de la formule Pro, intégrations avancées, analytics avancés et 12 mois de maintenance"
                  serviceName="Site Vitrine"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Choisir cette formule
                </FormspreeButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à créer votre site vitrine ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
                Demander un devis gratuit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
