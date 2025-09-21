import { FileText, PenTool, Video, Camera, Megaphone, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContentExpertisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1e293b] to-[#0f172a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-orange-500/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <FileText className="w-16 h-16 text-orange-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Expertise Content
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Créez du contenu qui engage, convertit et fidélise votre audience. De la stratégie éditoriale à la
            production, nous donnons vie à votre message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Découvrir nos contenus
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Stratégie éditoriale
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Services Content</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche complète pour créer du contenu qui résonne avec votre audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Rédaction Web</h3>
                <p className="text-gray-600 mb-6">
                  Articles de blog, pages web, fiches produits optimisés pour le SEO et l'engagement utilisateur.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Articles de blog SEO</li>
                  <li>• Pages de vente</li>
                  <li>• Fiches produits</li>
                  <li>• Newsletters</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contenu Vidéo</h3>
                <p className="text-gray-600 mb-6">
                  Vidéos promotionnelles, tutoriels, témoignages clients pour dynamiser votre communication.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Vidéos promotionnelles</li>
                  <li>• Tutoriels produits</li>
                  <li>• Témoignages clients</li>
                  <li>• Motion design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contenu Visuel</h3>
                <p className="text-gray-600 mb-6">
                  Infographies, visuels pour réseaux sociaux, bannières publicitaires qui marquent les esprits.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Infographies</li>
                  <li>• Visuels réseaux sociaux</li>
                  <li>• Bannières publicitaires</li>
                  <li>• Illustrations sur mesure</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Stratégie Éditoriale</h3>
                <p className="text-gray-600 mb-6">
                  Définition de votre ligne éditoriale, calendrier de publication et stratégie de contenu.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Audit éditorial</li>
                  <li>• Calendrier éditorial</li>
                  <li>• Ligne éditoriale</li>
                  <li>• Personas content</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Copywriting</h3>
                <p className="text-gray-600 mb-6">
                  Textes persuasifs pour vos campagnes marketing, emails et pages de conversion.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Pages de vente</li>
                  <li>• Emails marketing</li>
                  <li>• Publicités</li>
                  <li>• Call-to-actions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-pink-50 to-rose-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Stratégies de diffusion et promotion de vos contenus pour maximiser leur impact.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Distribution multi-canal</li>
                  <li>• Amplification sociale</li>
                  <li>• Mesure de performance</li>
                  <li>• Optimisation continue</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Processus Créatif</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie structurée pour créer du contenu qui performe
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "Analyse de votre écosystème de contenu existant" },
              { step: "02", title: "Stratégie", desc: "Définition de votre ligne éditoriale et planning" },
              { step: "03", title: "Création", desc: "Production de contenus engageants et optimisés" },
              { step: "04", title: "Diffusion", desc: "Distribution et promotion sur tous vos canaux" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold mb-6">Prêt à Créer du Contenu qui Convertit ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discutons de votre stratégie de contenu et créons ensemble des messages qui résonnent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Audit contenu gratuit
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Voir nos créations
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
