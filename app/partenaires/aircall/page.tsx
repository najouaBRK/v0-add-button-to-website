import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Phone, Users, BarChart3, Globe, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Aircall - Partenaire NOLIA | Solution de téléphonie cloud",
  description:
    "Découvrez notre partenariat avec Aircall, la solution de téléphonie cloud pour centres d'appels et équipes commerciales.",
}

export default function AircallPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8 animate-bounce-slow"
        >
          <ArrowLeft size={20} className="mr-2" />
          Retour à l'accueil
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="w-48 h-16 mx-auto mb-8 bg-white rounded-lg flex items-center justify-center shadow-lg animate-float">
            <img src="/aircall-logo-new.png" alt="Aircall logo" className="max-w-full max-h-full object-contain" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 animate-fade-in">
            Partenariat <span className="text-orange-500">Aircall</span>
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto animate-fade-in-delayed">
            Solution de téléphonie cloud nouvelle génération pour optimiser vos communications d'entreprise
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Téléphonie Cloud</h3>
            <p className="text-blue-700">
              Solution complète de téléphonie basée sur le cloud, accessible partout dans le monde
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up-delayed">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Centre d'appels</h3>
            <p className="text-blue-700">Outils avancés pour la gestion des centres d'appels et équipes commerciales</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up-more-delayed">
            <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Analytics</h3>
            <p className="text-blue-700">Tableaux de bord et analyses détaillées pour optimiser vos performances</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white/70 backdrop-blur-sm border border-blue-200 rounded-2xl p-12 mb-16 shadow-lg animate-fade-in">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">À propos d'Aircall</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-700 text-lg mb-6">
                Aircall est une solution de téléphonie cloud qui révolutionne la façon dont les entreprises gèrent leurs
                communications. Fondée en 2014, l'entreprise propose une plateforme intuitive qui s'intègre parfaitement
                aux outils CRM et de productivité existants.
              </p>
              <p className="text-blue-700 text-lg mb-6">
                Avec plus de 18 000 clients dans le monde, Aircall permet aux équipes commerciales et support client
                d'améliorer leur productivité grâce à des fonctionnalités avancées comme l'enregistrement d'appels, la
                distribution automatique et les analyses en temps réel.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 animate-slide-right">
                <Globe className="w-8 h-8 text-orange-500" />
                <div>
                  <h4 className="text-blue-900 font-semibold">Présence mondiale</h4>
                  <p className="text-blue-600">Plus de 100 pays couverts</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 animate-slide-right-delayed">
                <Shield className="w-8 h-8 text-orange-500" />
                <div>
                  <h4 className="text-blue-900 font-semibold">Sécurité</h4>
                  <p className="text-blue-600">Conformité RGPD et SOC 2</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 animate-slide-right-more-delayed">
                <Zap className="w-8 h-8 text-orange-500" />
                <div>
                  <h4 className="text-blue-900 font-semibold">Performance</h4>
                  <p className="text-blue-600">99.99% de disponibilité</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Notre Partenariat</h2>
          <p className="text-xl text-blue-700 max-w-4xl mx-auto mb-12">
            En tant que partenaire certifié Aircall, NOLIA vous accompagne dans l'implémentation, la configuration et
            l'optimisation de votre solution de téléphonie cloud. Nous vous aidons à tirer le meilleur parti des
            fonctionnalités avancées d'Aircall pour transformer vos communications d'entreprise.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-up">
            <h3 className="text-2xl font-bold text-white mb-4">Prêt à moderniser vos communications ?</h3>
            <p className="text-blue-100 mb-6">
              Contactez nos experts pour découvrir comment Aircall peut transformer votre entreprise
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform">
              Demander une démonstration
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
