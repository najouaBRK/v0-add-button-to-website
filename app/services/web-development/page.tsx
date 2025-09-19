"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              💻 Web Development Expert
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Créons votre <span className="text-green-400">présence</span> digitale
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Développement de sites web performants et optimisés pour la conversion. De la conception à la mise en ligne,
            nous créons des expériences digitales qui transforment vos visiteurs en clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-medium">
              Audit technique gratuit
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 text-lg font-medium bg-transparent"
            >
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos services Web Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la conception à la maintenance, nous développons des solutions web sur mesure qui répondent à vos
              besoins business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sites web sur mesure</h3>
                <p className="text-gray-600 mb-4">
                  Création de sites web entièrement personnalisés selon vos besoins, votre identité et vos objectifs
                  business.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Design personnalisé</li>
                  <li>• Développement sur mesure</li>
                  <li>• CMS adapté</li>
                  <li>• Responsive design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimisation UX/UI</h3>
                <p className="text-gray-600 mb-4">
                  Amélioration de l'expérience utilisateur et de l'interface pour maximiser les conversions et
                  l'engagement.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Audit UX complet</li>
                  <li>• Wireframes et prototypes</li>
                  <li>• Tests utilisateurs</li>
                  <li>• Optimisation conversion</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance web</h3>
                <p className="text-gray-600 mb-4">
                  Optimisation des performances pour des temps de chargement rapides et une meilleure expérience
                  utilisateur.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Optimisation vitesse</li>
                  <li>• Compression d'images</li>
                  <li>• Cache et CDN</li>
                  <li>• Core Web Vitals</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">🔗</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intégrations avancées</h3>
                <p className="text-gray-600 mb-4">
                  Connexion avec vos outils existants : CRM, outils marketing, systèmes de paiement et APIs tierces.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Intégrations CRM</li>
                  <li>• APIs personnalisées</li>
                  <li>• Systèmes de paiement</li>
                  <li>• Outils marketing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">🛒</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce</h3>
                <p className="text-gray-600 mb-4">
                  Développement de boutiques en ligne performantes avec gestion des stocks, paiements et livraisons.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Boutiques sur mesure</li>
                  <li>• Gestion des stocks</li>
                  <li>• Paiements sécurisés</li>
                  <li>• Suivi des commandes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-green-600 text-xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Maintenance et support</h3>
                <p className="text-gray-600 mb-4">
                  Maintenance continue, mises à jour de sécurité et support technique pour assurer la pérennité de votre
                  site.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Mises à jour régulières</li>
                  <li>• Sauvegardes automatiques</li>
                  <li>• Monitoring 24/7</li>
                  <li>• Support technique</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies que nous maîtrisons</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous utilisons les dernières technologies pour créer des solutions web modernes, performantes et
              évolutives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">⚛️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Frontend</h3>
              <p className="text-gray-600 text-sm">React, Vue.js, Angular, Next.js</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Backend</h3>
              <p className="text-gray-600 text-sm">Node.js, PHP, Python, Laravel</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🗄️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bases de données</h3>
              <p className="text-gray-600 text-sm">MySQL, PostgreSQL, MongoDB</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">☁️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud</h3>
              <p className="text-gray-600 text-sm">AWS, Google Cloud, Vercel</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à créer votre site web ?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Transformez votre vision en réalité digitale. Nos développeurs experts créent des sites web qui
            convertissent et performent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-medium">
                Demander mon devis Web
              </Button>
            </Link>
            <Link href="/#contact-section">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 text-lg font-medium bg-transparent"
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
