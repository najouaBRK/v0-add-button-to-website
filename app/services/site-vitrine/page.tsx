"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import FormspreeButton from "@/components/FormspreeButton"

export default function SiteVitrinePage() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-gray-900 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="mb-6">
                <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
                  SITE VITRINE
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Votre agence web
                <br />
                pour la création de
                <br />
                votre <span className="text-orange-500">site vitrine</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                Confiez-nous votre vision, nous la transformons en réalité !
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium animate-bounce">
                  Demander un devis gratuit
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-full max-w-md animate-float">
                <div className="bg-gray-800 rounded-t-2xl p-2">
                  <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                    <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
                        www.votre-entreprise.fr
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
                      <h3 className="text-lg font-bold mb-2">Votre Entreprise</h3>
                      <p className="text-sm opacity-90 mb-4">Solutions professionnelles</p>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/20 rounded animate-pulse"></div>
                        <div className="h-2 bg-white/20 rounded w-3/4 animate-pulse delay-100"></div>
                        <div className="h-2 bg-white/20 rounded w-1/2 animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700 h-8 rounded-b-2xl relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in">
            Pourquoi refaire ou créer un site internet vitrine
            <br />
            pour mon entreprise ?
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Idéal pour assurer et renforcer votre présence en ligne. Un site vitrine est le vecteur de communication
            parfait pour expliquer vos services, afficher vos produits ou démontrer votre savoir-faire. Associé à des
            stratégies de référencement naturel et payant, c'est la clé du succès pour vous accompagner, votre site
            internet sera un véritable outil de développement commercial.
          </p>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              Notre méthodologie d'accompagnement
              <br />
              pour les sites vitrines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée en 8 étapes pour créer votre site vitrine parfait
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex items-start mb-12 animate-slide-in-left">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-8">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Choisir le type de site qui correspond à mon besoin
                </h3>
                <p className="text-gray-600 mb-4">
                  Par quoi commencer ou à l'inverse comment passer à la vitesse supérieure ? L'efficacité de répondre à
                  cette question est sans nul doute d'un expert !
                </p>
                <Button
                  variant="outline"
                  className="text-orange-500 border-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  Parler avec un expert Digitalisim !
                </Button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start mb-12 animate-slide-in-right">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-8">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Identifier le bon hébergement</h3>
                <p className="text-gray-600">
                  Choisir un hébergement web de qualité c'est une étape à prendre à la légère. En effet, un bon
                  hébergement assure à votre site internet et la garantie d'un site rapide, sécurisé, et toujours
                  accessible. Nous vous accompagnons dans le choix de l'hébergement le plus adapté à vos besoins et
                  votre budget.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start mb-12 animate-slide-in-left">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-8">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Définir votre arborescence</h3>
                <p className="text-gray-600">
                  Lors de cette étape, nous allons sera la pour vous conseiller et vous aider à bien choisir vos
                  objectifs en créant une architecture et en analysant les parcours de votre futur site Web.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start mb-12 animate-slide-in-right">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-8">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Concevoir les maquettes</h3>
                <p className="text-gray-600">
                  Le graphisme des mises en page votre concept et section et pas l'inverse à votre goût.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start mb-12 animate-slide-in-left">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-8">
                <span className="text-white text-xl font-bold">5</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Rédiger le contenu orienté SEO</h3>
                <p className="text-gray-600">
                  Il s'agit d'un site à vocation commerciale, toutes sont primes exercices sur votre projet
                  correspondent toujours à une stratégie de référencement naturel.
                </p>
                <Button
                  variant="outline"
                  className="text-orange-500 border-orange-500 hover:bg-orange-50 mt-4 bg-transparent"
                >
                  Découvrez notre offre SEO
                </Button>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex items-start mb-12 animate-slide-in-right">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-8">
                <span className="text-white text-xl font-bold">6</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Développer et intégrer le site</h3>
                <p className="text-gray-600">
                  Nous sommes, au moment tant attendu où arrive : votre site va commencer à être développé. Cette étape
                  cruciale, bien que technique, est celle qui va donner vie à votre projet.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex items-start mb-12 animate-slide-in-left">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-8">
                <span className="text-white text-xl font-bold">7</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tester valider et recetter</h3>
                <p className="text-gray-600">
                  Après la phase de développement, votre site va commencer à prendre des tests. C'est dans les moindres
                  détails que nous testons votre site internet.
                </p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="flex items-start mb-12 animate-slide-in-right">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-8">
                <span className="text-white text-xl font-bold">8</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Former les utilisateurs</h3>
                <p className="text-gray-600">
                  Il est aussi important de réaliser le nombre d'une formation publique. Trop souvent certaines pages,
                  portent sur des sites internet, sont pas optimisées pour une expérience utilisateur.
                </p>
              </div>
            </div>
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
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-blue-50">
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
