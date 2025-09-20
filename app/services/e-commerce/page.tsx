"use client"
import { Card, CardContent } from "@/components/ui/card"
import FormspreeButton from "@/components/FormspreeButton"
import QuoteButton from "@/components/QuoteButton"

export default function EcommercePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              E-COMMERCE
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Boutique <span className="text-orange-400">E-commerce</span> Performante
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Le site e-commerce vous permet d'exploiter vos nouveaux canaux de vente en ligne. Conçu avec les outils et
            techniques les plus performants du marché.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteButton
              serviceName="E-commerce"
              packageName="Demande de devis E-commerce"
              packageDescription="Demande de devis pour création de boutique e-commerce performante"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium"
            >
              Demander un devis
            </QuoteButton>
          </div>
        </div>
      </section>

      {/* Méthodes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre approche E-commerce</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour créer votre boutique en ligne rentable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Étude de marché</h3>
                <p className="text-gray-600">
                  Analyse de votre secteur, étude de la concurrence et définition de votre positionnement commercial.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">🛒</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Architecture produits</h3>
                <p className="text-gray-600">
                  Structuration de votre catalogue, catégorisation et optimisation du parcours d'achat.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">💳</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Paiements sécurisés</h3>
                <p className="text-gray-600">
                  Intégration des solutions de paiement les plus sécurisées et adaptées à votre clientèle.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Gestion des stocks</h3>
                <p className="text-gray-600">
                  Système de gestion des stocks en temps réel avec alertes automatiques et synchronisation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">🚚</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Logistique</h3>
                <p className="text-gray-600">
                  Intégration des transporteurs, calcul automatique des frais de port et suivi des commandes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Analytics & CRM</h3>
                <p className="text-gray-600">
                  Tableaux de bord avancés, suivi des performances et gestion de la relation client.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fonctionnalités E-commerce</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Toutes les fonctionnalités essentielles pour une boutique en ligne performante
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">🛍️ Catalogue produits</h3>
              <p className="text-gray-600 text-sm">Gestion complète des produits, variantes, images et descriptions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">💰 Gestion des prix</h3>
              <p className="text-gray-600 text-sm">
                Prix dynamiques, promotions, codes de réduction et tarifs dégressifs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">👥 Comptes clients</h3>
              <p className="text-gray-600 text-sm">Espaces clients personnalisés avec historique et wishlist</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">📱 Mobile-first</h3>
              <p className="text-gray-600 text-sm">Interface optimisée pour les achats sur mobile et tablette</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">🔒 Sécurité</h3>
              <p className="text-gray-600 text-sm">Certificats SSL, conformité RGPD et protection des données</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">📧 Marketing</h3>
              <p className="text-gray-600 text-sm">Email marketing, newsletters et campagnes automatisées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tarifs E-commerce</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à la taille de votre catalogue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">4,990€</div>
                  <p className="text-gray-600">Jusqu'à 50 produits</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Boutique responsive
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Paiements sécurisés
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Gestion des stocks
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>6 mois de maintenance
                  </li>
                </ul>
                <FormspreeButton
                  packageName="E-commerce Starter"
                  packagePrice="4,990€"
                  packageDescription="Boutique responsive jusqu'à 50 produits avec paiements sécurisés, gestion des stocks et 6 mois de maintenance"
                  serviceName="E-commerce"
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  Choisir cette formule
                </FormspreeButton>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-green-500 bg-green-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">Populaire</span>
              </div>
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">8,990€</div>
                  <p className="text-gray-600">Jusqu'à 500 produits</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Tout de la formule Starter
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Intégrations avancées
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Marketing automation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    12 mois de maintenance
                  </li>
                </ul>
                <FormspreeButton
                  packageName="E-commerce Business"
                  packagePrice="8,990€"
                  packageDescription="Boutique jusqu'à 500 produits avec tout de la formule Starter, intégrations avancées, marketing automation et 12 mois de maintenance"
                  serviceName="E-commerce"
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  Choisir cette formule
                </FormspreeButton>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">Sur devis</div>
                  <p className="text-gray-600">Catalogue illimité</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Solution sur mesure
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Marketplace multi-vendeurs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    API personnalisées
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Support prioritaire
                  </li>
                </ul>
                <QuoteButton
                  serviceName="E-commerce"
                  packageName="E-commerce Enterprise"
                  packagePrice="Sur devis"
                  packageDescription="Solution e-commerce sur mesure avec marketplace multi-vendeurs, API personnalisées et support prioritaire"
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  Demander un devis
                </QuoteButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à lancer votre boutique en ligne ?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour discuter de votre projet e-commerce et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteButton
              serviceName="E-commerce"
              packageName="Devis E-commerce gratuit"
              packageDescription="Demande de devis gratuit pour projet e-commerce personnalisé"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium"
            >
              Demander un devis gratuit
            </QuoteButton>
          </div>
        </div>
      </section>
    </div>
  )
}
