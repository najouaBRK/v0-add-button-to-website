import { Globe, Smartphone, ShoppingCart, FileText, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WebExpertisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1e293b] to-[#0f172a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-500/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-16 h-16 text-orange-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Expertise Web
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Créez des expériences web exceptionnelles qui convertissent vos visiteurs en clients. De la conception à la
            mise en ligne, nous développons des solutions web sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Découvrir nos réalisations
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Demander un devis
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Services Web</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins digitaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Site Vitrine</h3>
                <p className="text-gray-600 mb-6">
                  Présentez votre entreprise avec élégance et professionnalisme. Design responsive et optimisé SEO.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Design sur mesure</li>
                  <li>• Responsive mobile</li>
                  <li>• Optimisation SEO</li>
                  <li>• Hébergement inclus</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce</h3>
                <p className="text-gray-600 mb-6">
                  Vendez en ligne avec une boutique performante. Gestion des stocks, paiements sécurisés.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Catalogue produits</li>
                  <li>• Paiement sécurisé</li>
                  <li>• Gestion des commandes</li>
                  <li>• Analytics avancées</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Blog</h3>
                <p className="text-gray-600 mb-6">
                  Partagez votre expertise et améliorez votre référencement avec un blog professionnel.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• CMS intuitif</li>
                  <li>• Optimisation SEO</li>
                  <li>• Partage social</li>
                  <li>• Newsletter intégrée</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-violet-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Landing Page</h3>
                <p className="text-gray-600 mb-6">
                  Maximisez vos conversions avec des pages d'atterrissage optimisées pour la performance.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Conversion optimisée</li>
                  <li>• A/B Testing</li>
                  <li>• Formulaires avancés</li>
                  <li>• Analytics détaillées</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-cyan-50 to-blue-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Web</h3>
                <p className="text-gray-600 mb-6">
                  Développez des applications web sur mesure pour automatiser vos processus métier.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Interface intuitive</li>
                  <li>• Base de données</li>
                  <li>• API intégrées</li>
                  <li>• Sécurité renforcée</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Maintenance</h3>
                <p className="text-gray-600 mb-6">
                  Gardez votre site performant avec notre service de maintenance et support technique.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Mises à jour régulières</li>
                  <li>• Sauvegardes automatiques</li>
                  <li>• Support technique</li>
                  <li>• Monitoring 24/7</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Processus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre projet web
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analyse", desc: "Étude de vos besoins et de votre marché" },
              { step: "02", title: "Conception", desc: "Design et architecture de votre solution" },
              { step: "03", title: "Développement", desc: "Création de votre site avec les dernières technologies" },
              { step: "04", title: "Lancement", desc: "Mise en ligne et accompagnement" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f1729] to-[#1e293b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Transformer Votre Présence Web ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez nos experts pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Demander un devis gratuit
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
