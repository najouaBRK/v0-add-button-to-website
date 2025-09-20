"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function LandingPageService() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              LANDING PAGE
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-blue-400">Landing Pages</span> Haute Conversion
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            En créant des landing pages, boostez votre visibilité et générez plus de leads. Nous vous accompagnons pour
            améliorer vos objectifs de conversion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium">
              Demander un devis
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 text-lg font-medium bg-transparent"
            >
              Voir nos landing pages
            </Button>
          </div>
        </div>
      </section>

      {/* Méthodologie Conversion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre méthodologie de conversion</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche scientifique pour maximiser vos taux de conversion et générer plus de leads
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Analyse des objectifs</h3>
                <p className="text-gray-600">
                  Définition précise de vos objectifs de conversion et identification de votre audience cible.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Psychologie utilisateur</h3>
                <p className="text-gray-600">
                  Application des principes de psychologie cognitive pour optimiser le parcours de conversion.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Design persuasif</h3>
                <p className="text-gray-600">
                  Création d'un design qui guide naturellement l'utilisateur vers l'action souhaitée.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl">📝</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Copywriting optimisé</h3>
                <p className="text-gray-600">
                  Rédaction de contenus persuasifs basés sur les techniques de copywriting éprouvées.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl">🧪</span>
                </div>
                <h3 className="text-xl font-bold mb-4">A/B Testing</h3>
                <p className="text-gray-600">
                  Tests comparatifs pour identifier les éléments les plus performants et optimiser continuellement.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Analytics & Optimisation</h3>
                <p className="text-gray-600">
                  Suivi détaillé des performances et optimisation continue basée sur les données réelles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Éléments de conversion */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Éléments de conversion inclus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tous les éléments essentiels pour une landing page qui convertit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">🚀 Hero section impactante</h3>
              <p className="text-gray-600 text-sm">
                Titre accrocheur, sous-titre explicatif et call-to-action principal visible
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">✨ Proposition de valeur</h3>
              <p className="text-gray-600 text-sm">Mise en avant claire des bénéfices et avantages concurrentiels</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">🛡️ Preuves sociales</h3>
              <p className="text-gray-600 text-sm">Témoignages clients, logos partenaires et éléments de réassurance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">📋 Formulaires optimisés</h3>
              <p className="text-gray-600 text-sm">Formulaires de contact simplifiés avec validation en temps réel</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">⚡ Chargement rapide</h3>
              <p className="text-gray-600 text-sm">Optimisation des performances pour un chargement ultra-rapide</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">📱 Mobile-first</h3>
              <p className="text-gray-600 text-sm">Design parfaitement adapté aux appareils mobiles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de landing pages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types de landing pages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à chaque objectif marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">📧</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Lead Generation</h3>
                <p className="text-gray-600 text-sm">Capture d'emails et génération de prospects qualifiés</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Vente directe</h3>
                <p className="text-gray-600 text-sm">Pages de vente optimisées pour la conversion immédiate</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Campagnes publicitaires</h3>
                <p className="text-gray-600 text-sm">Landing pages dédiées aux campagnes Google Ads et Facebook</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">📅</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Événements</h3>
                <p className="text-gray-600 text-sm">Pages d'inscription pour webinaires, formations et événements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tarifs Landing Pages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des formules adaptées à vos objectifs de conversion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Landing Simple</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">990€</div>
                  <p className="text-gray-600">1 landing page</p>
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
                    Optimisation de base
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Analytics intégrés
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Choisir cette formule</Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-orange-500 bg-orange-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">Populaire</span>
              </div>
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Landing Pro</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">1,990€</div>
                  <p className="text-gray-600">3 landing pages</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Tout de la formule Simple
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    A/B Testing inclus
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Copywriting optimisé
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Intégrations marketing
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Choisir cette formule</Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Landing Premium</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">3,990€</div>
                  <p className="text-gray-600">5 landing pages</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Tout de la formule Pro
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Stratégie de conversion
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Optimisation continue
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Support prioritaire
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Choisir cette formule</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à booster vos conversions ?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour créer des landing pages qui transforment vos visiteurs en clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 text-lg font-medium bg-transparent"
              >
                Voir nos landing pages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
