"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import FormspreeButton from "@/components/FormspreeButton"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              BLOG PROFESSIONNEL
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-orange-400">Blog</span> & Content Marketing
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Décuplez l'actualité de votre société et proposez du contenu à forte valeur ajoutée pour vos prospects et
            clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
              Demander un devis
            </Button>
          </div>
        </div>
      </section>

      {/* Stratégie Content Marketing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre stratégie Content Marketing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche complète pour développer votre audience et générer des leads qualifiés
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-purple-600 text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Stratégie éditoriale</h3>
                <p className="text-gray-600">
                  Définition de votre ligne éditoriale, personas cibles et calendrier de publication optimisé.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-purple-600 text-xl">✍️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Création de contenu</h3>
                <p className="text-gray-600">
                  Rédaction d'articles optimisés SEO, création de visuels et production de contenu multimédia.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-purple-600 text-xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Optimisation SEO</h3>
                <p className="text-gray-600">
                  Recherche de mots-clés, optimisation technique et amélioration du référencement naturel.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-purple-600 text-xl">📱</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Diffusion sociale</h3>
                <p className="text-gray-600">
                  Partage automatique sur les réseaux sociaux et optimisation pour l'engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-purple-600 text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Analytics & ROI</h3>
                <p className="text-gray-600">
                  Suivi des performances, analyse de l'audience et mesure du retour sur investissement.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-purple-600 text-xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Optimisation continue</h3>
                <p className="text-gray-600">
                  Amélioration constante basée sur les données et adaptation aux tendances du marché.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Blog */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fonctionnalités de votre blog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tous les outils nécessaires pour un blog professionnel et performant
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Éditeur intuitif</h3>
                <p className="text-gray-600">Interface de rédaction simple avec prévisualisation en temps réel</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Gestion des catégories</h3>
                <p className="text-gray-600">Organisation du contenu par thématiques et tags personnalisés</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Commentaires modérés</h3>
                <p className="text-gray-600">Système de commentaires avec modération et protection anti-spam</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Newsletter intégrée</h3>
                <p className="text-gray-600">Inscription automatique et envoi de newsletters personnalisées</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Partage social</h3>
                <p className="text-gray-600">Boutons de partage optimisés et intégration réseaux sociaux</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Analytics avancés</h3>
                <p className="text-gray-600">Statistiques détaillées sur les performances de vos articles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tarifs Blog & Content Marketing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Des formules adaptées à vos besoins de contenu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Blog Simple</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">1,490€</div>
                  <p className="text-gray-600">Setup + 3 mois</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Blog responsive intégré
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>4 articles par mois
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Optimisation SEO de base
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Partage réseaux sociaux
                  </li>
                </ul>
                <FormspreeButton
                  packageName="Blog Simple"
                  packagePrice="1,490€"
                  packageDescription="Blog responsive intégré avec 4 articles par mois, optimisation SEO de base et partage réseaux sociaux (Setup + 3 mois)"
                  serviceName="Blog & Content Marketing"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                >
                  Choisir cette formule
                </FormspreeButton>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-purple-500 bg-purple-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">Populaire</span>
              </div>
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Content Marketing</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">2,990€</div>
                  <p className="text-gray-600">Setup + 6 mois</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Tout de la formule Simple
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>8 articles par mois
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Newsletter intégrée
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Analytics avancés
                  </li>
                </ul>
                <FormspreeButton
                  packageName="Content Marketing"
                  packagePrice="2,990€"
                  packageDescription="Tout de la formule Simple avec 8 articles par mois, newsletter intégrée et analytics avancés (Setup + 6 mois)"
                  serviceName="Blog & Content Marketing"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                >
                  Choisir cette formule
                </FormspreeButton>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-purple-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">4,990€</div>
                  <p className="text-gray-600">Setup + 12 mois</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Tout de la formule Content
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>12 articles par mois
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Contenu multimédia
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Stratégie personnalisée
                  </li>
                </ul>
                <FormspreeButton
                  packageName="Blog Premium"
                  packagePrice="4,990€"
                  packageDescription="Tout de la formule Content avec 12 articles par mois, contenu multimédia et stratégie personnalisée (Setup + 12 mois)"
                  serviceName="Blog & Content Marketing"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                >
                  Choisir cette formule
                </FormspreeButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à développer votre content marketing ?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour créer une stratégie de contenu qui génère des leads qualifiés.
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
