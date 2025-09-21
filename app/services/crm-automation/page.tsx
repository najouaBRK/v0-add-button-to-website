"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function CRMAutomationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              ⚙️ CRM & Automation Expert
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Automatisez votre <span className="text-blue-400">croissance</span>
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Optimisez vos processus de vente et marketing avec des solutions CRM et d'automatisation sur mesure.
            Transformez vos leads en clients fidèles grâce à des workflows intelligents.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-4">Nos services CRM & Automation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la configuration à l'optimisation, nous mettons en place des systèmes qui automatisent vos processus et
              boostent votre productivité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-600 text-xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Configuration CRM</h3>
                <p className="text-gray-600 mb-4">
                  Mise en place et personnalisation de votre CRM selon vos processus de vente et besoins spécifiques.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Installation et configuration</li>
                  <li>• Personnalisation des champs</li>
                  <li>• Pipelines de vente</li>
                  <li>• Formation des équipes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-blue-600 text-xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Workflows automatisés</h3>
                <p className="text-gray-600 mb-4">
                  Création de workflows intelligents pour automatiser vos tâches répétitives et optimiser vos processus.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Automatisation des tâches</li>
                  <li>• Séquences d'emails</li>
                  <li>• Notifications automatiques</li>
                  <li>• Workflows personnalisés</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead scoring</h3>
                <p className="text-gray-600 mb-4">
                  Mise en place de systèmes de scoring pour identifier et prioriser vos prospects les plus qualifiés.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Critères de scoring</li>
                  <li>• Qualification automatique</li>
                  <li>• Priorisation des leads</li>
                  <li>• Alertes commerciales</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-purple-600 text-xl">🔗</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intégrations</h3>
                <p className="text-gray-600 mb-4">
                  Connexion de votre CRM avec tous vos outils marketing, vente et support pour une vue unifiée.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Outils marketing</li>
                  <li>• Plateformes e-commerce</li>
                  <li>• Systèmes comptables</li>
                  <li>• APIs personnalisées</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-indigo-600 text-xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Reporting et analytics</h3>
                <p className="text-gray-600 mb-4">
                  Tableaux de bord personnalisés pour suivre vos performances commerciales et optimiser vos processus.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Dashboards personnalisés</li>
                  <li>• KPIs commerciaux</li>
                  <li>• Rapports automatisés</li>
                  <li>• Analyses prédictives</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-pink-600 text-xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Formation et support</h3>
                <p className="text-gray-600 mb-4">
                  Formation complète de vos équipes et support continu pour maximiser l'adoption et l'efficacité.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Formation utilisateurs</li>
                  <li>• Documentation complète</li>
                  <li>• Support technique</li>
                  <li>• Optimisation continue</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos tarifs CRM & Automation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions CRM et d'automatisation adaptées à la taille de votre entreprise et à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">1,290€</div>
                  <p className="text-gray-600">par mois</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Configuration CRM basique
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>5 workflows automatisés
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Formation équipe (2h)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Support email
                  </li>
                </ul>
                <div className="text-center">
                  <a
                    href="mailto:contact@nolia.fr?subject=Commande Pack CRM & Automation Starter&body=Bonjour,%0D%0A%0D%0AJe souhaite commander le Pack CRM & Automation Starter à 1,290€/mois.%0D%0A%0D%0AInclus :%0D%0A- Configuration CRM basique%0D%0A- 5 workflows automatisés%0D%0A- Formation équipe (2h)%0D%0A- Support email%0D%0A%0D%0AMerci de me recontacter pour finaliser la commande.%0D%0A%0D%0ACordialement"
                    className="inline-block w-full"
                  >
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Choisir Starter</Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-orange-500 bg-orange-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">Populaire</span>
              </div>
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professionnel</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">2,490€</div>
                  <p className="text-gray-600">par mois</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Configuration CRM avancée
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    15 workflows automatisés
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Lead scoring personnalisé
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Intégrations tierces
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Formation équipe (4h)
                  </li>
                </ul>
                <div className="text-center">
                  <a
                    href="mailto:contact@nolia.fr?subject=Commande Pack CRM & Automation Professionnel&body=Bonjour,%0D%0A%0D%0AJe souhaite commander le Pack CRM & Automation Professionnel à 2,490€/mois.%0D%0A%0D%0AInclus :%0D%0A- Configuration CRM avancée%0D%0A- 15 workflows automatisés%0D%0A- Lead scoring personnalisé%0D%0A- Intégrations tierces%0D%0A- Formation équipe (4h)%0D%0A%0D%0AMerci de me recontacter pour finaliser la commande.%0D%0A%0D%0ACordialement"
                    className="inline-block w-full"
                  >
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Choisir Professionnel
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">4,290€</div>
                  <p className="text-gray-600">par mois</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Configuration CRM sur mesure
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Workflows illimités
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Analytics prédictifs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Intégrations personnalisées
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Support dédié 24/7
                  </li>
                </ul>
                <div className="text-center">
                  <a
                    href="mailto:contact@nolia.fr?subject=Commande Pack CRM & Automation Expert&body=Bonjour,%0D%0A%0D%0AJe souhaite commander le Pack CRM & Automation Expert à 4,290€/mois.%0D%0A%0D%0AInclus :%0D%0A- Configuration CRM sur mesure%0D%0A- Workflows illimités%0D%0A- Analytics prédictifs%0D%0A- Intégrations personnalisées%0D%0A- Support dédié 24/7%0D%0A%0D%0AMerci de me recontacter pour finaliser la commande.%0D%0A%0D%0ACordialement"
                    className="inline-block w-full"
                  >
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Choisir Expert</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Si vous avez besoin d'un devis personnalisé, n'hésitez pas à nous contacter.
            </p>
            <Link href="/devis">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-medium">
                Demander mon devis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CRM Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Plateformes CRM que nous maîtrisons</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous travaillons avec les meilleures solutions CRM du marché pour répondre à tous vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src="/hubspot-logo.png" alt="HubSpot" className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">HubSpot</h3>
              <p className="text-gray-600 text-sm">CRM tout-en-un avec marketing automation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src="/odoo-logo.png" alt="Odoo" className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Odoo</h3>
              <p className="text-gray-600 text-sm">Suite ERP complète avec CRM intégré</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src="/zapier-logo-orange-automation.jpg" alt="Zapier" className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Zapier</h3>
              <p className="text-gray-600 text-sm">Automatisation et intégration entre outils</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à automatiser votre croissance ?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Optimisez vos processus de vente et marketing avec des solutions CRM sur mesure. Nos experts vous
            accompagnent dans votre transformation digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact-section">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 text-lg font-medium bg-transparent"
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
