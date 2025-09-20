"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              AGENCE WEB
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Votre <span className="text-orange-400">agence web</span> pour faire décoller votre croissance
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Confiez la création de votre site internet à une agence web proche de ses clients qui s'engage à vos côtés
            et qui vous aidera à viser la lune.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
              Recevoir un devis gratuit dans l'heure
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-medium bg-transparent"
            >
              En savoir plus sur DIGITALISIM
            </Button>
          </div>
        </div>
      </section>

      {/* New Section about web creation services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">AGENCE WEB</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-2">
              Création de site vitrine, blog, e-commerce ou marketplace
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Notre équipe d'experts en conception, en développement et en marketing digital travaille main dans la main
              avec vous pour transformer vos idées en réalité. Chacun de nos services est conçu pour vous permettre
              d'atteindre vos objectifs, que ce soit en captivant votre public grâce à un site vitrine, en partageant
              votre contenu d'une à travers un blog ou en maximisant vos ventes grâce à une plateforme e-commerce
              performante.
            </p>
            <div className="mt-8">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
                Voir notre méthodologie
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">▶</span>
                  </div>
                  <p className="text-sm">Témoignage client</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <span className="text-blue-500 mr-3">✓</span>
                <span className="text-gray-700">Vous avez déjà un site internet</span>
              </div>
              <div className="flex items-center mb-8">
                <span className="text-blue-500 mr-3">✓</span>
                <span className="text-gray-700">Vous n'avez pas de site internet</span>
              </div>
              <blockquote className="text-2xl font-medium text-gray-900 mb-4">
                "Le site internet d'une entreprise est devenu aujourd'hui le commercial 3.0 de votre entreprise. Il
                porte l'image de votre entreprise et vous permet de vendre mieux et plus vite."
              </blockquote>
              <cite className="text-orange-500 font-medium">NOLIA FORMATION TEAM</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">AGENCE WEB</span>
            <h2 className="text-4xl font-bold mb-4 mt-2">Découvrez nos planètes autour de l'univers web</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-blue-800 border-blue-700 text-white p-6">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Site vitrine</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Idéal pour assurer sa présence sur internet et présenter son entreprise. Conçu avec les outils et
                  techniques les plus performants du marché.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm">En savoir plus</Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-800 border-blue-700 text-white p-6">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-xl">🛒</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Site e-commerce</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Le site e-commerce vous permet d'exploiter vos nouveaux canaux de vente en ligne. Conçu avec les
                  outils et techniques les plus performants.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm">En savoir plus</Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-800 border-blue-700 text-white p-6">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-xl">📝</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Blog</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Décuplez l'actualité de votre société et proposez du contenu à forte valeur ajoutée pour vos prospects
                  et clients.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm">En savoir plus</Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-800 border-blue-700 text-white p-6">
              <CardContent className="pt-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Landing Page</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  En créant des landing page, boostez votre visibilité et générez plus de leads. Nous vous accompagnons
                  pour améliorer vos objectifs.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm">En savoir plus</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">ROADMAP</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-2">Notre méthodologie d'accompagnement</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Fort de notre expérience dans la création et la refonte de site internet, nos spécialistes ont développé
              une méthodologie précise et innovante qui s'appuie sur les outils les plus performants du marché. Notre
              approche est axée sur la performance et centrée sur le ROI, vous n'en ressortirez pas les mains vides !
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200"></div>

              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8 relative z-10">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">UX/UI</h3>
                    <p className="text-gray-600">
                      Nous étudions les directions artistiques qui accompagne dans la conception et définition de votre
                      nouveau site internet. Nous analysons vos besoins et créons des wireframes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8 relative z-10">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Développement</h3>
                    <p className="text-gray-600">
                      Notre équipe de développeurs experts transforme les maquettes en site web fonctionnel, optimisé
                      pour les performances et le référencement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8 relative z-10">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Tests & Mise en ligne</h3>
                    <p className="text-gray-600">
                      Tests complets de fonctionnalité, optimisation des performances et mise en ligne sécurisée de
                      votre nouveau site internet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos tarifs Web Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions web sur mesure adaptées à votre budget et à vos objectifs business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Site Vitrine</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">2,490€</div>
                  <p className="text-gray-600">projet</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Site responsive jusqu'à 5 pages
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Design personnalisé
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Optimisation SEO de base
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Formulaire de contact
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>3 mois de maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-green-500 bg-green-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">Populaire</span>
              </div>
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Site Business</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">4,990€</div>
                  <p className="text-gray-600">projet</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Site responsive jusqu'à 15 pages
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    CMS personnalisé
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Optimisation SEO avancée
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Intégrations tierces
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>6 mois de maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardContent className="pt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">E-commerce</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">8,990€</div>
                  <p className="text-gray-600">projet</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Boutique en ligne complète
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Gestion des stocks
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Paiements sécurisés
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Tableau de bord admin
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    12 mois de maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Si vous avez besoin d'un devis personnalisé, n'hésitez pas à nous contacter.
            </p>
            <Link href="/devis">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium">
                Demander mon devis
              </Button>
            </Link>
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
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à faire décoller votre croissance ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Embarquez dans la galaxie de la transformation digitale et boostez votre croissance sur l'ensemble de votre
            parcours de vente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
                Recevoir un devis gratuit dans l'heure
              </Button>
            </Link>
            <Link href="/#contact-section">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-medium bg-transparent"
              >
                En savoir plus sur DIGITALISIM
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
