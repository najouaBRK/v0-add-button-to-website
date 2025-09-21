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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Retour à l'accueil
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="w-48 h-16 mx-auto mb-8 bg-white rounded-lg flex items-center justify-center">
            <img src="/aircall-logo-blue-modern.jpg" alt="Aircall logo" className="max-w-full max-h-full object-contain" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Partenariat <span className="text-orange-400">Aircall</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solution de téléphonie cloud nouvelle génération pour optimiser vos communications d'entreprise
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Téléphonie Cloud</h3>
            <p className="text-gray-300">
              Solution complète de téléphonie basée sur le cloud, accessible partout dans le monde
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Centre d'appels</h3>
            <p className="text-gray-300">Outils avancés pour la gestion des centres d'appels et équipes commerciales</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Analytics</h3>
            <p className="text-gray-300">Tableaux de bord et analyses détaillées pour optimiser vos performances</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">À propos d'Aircall</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                Aircall est une solution de téléphonie cloud qui révolutionne la façon dont les entreprises gèrent leurs
                communications. Fondée en 2014, l'entreprise propose une plateforme intuitive qui s'intègre parfaitement
                aux outils CRM et de productivité existants.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Avec plus de 18 000 clients dans le monde, Aircall permet aux équipes commerciales et support client
                d'améliorer leur productivité grâce à des fonctionnalités avancées comme l'enregistrement d'appels, la
                distribution automatique et les analyses en temps réel.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Globe className="w-8 h-8 text-orange-400" />
                <div>
                  <h4 className="text-white font-semibold">Présence mondiale</h4>
                  <p className="text-gray-400">Plus de 100 pays couverts</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-orange-400" />
                <div>
                  <h4 className="text-white font-semibold">Sécurité</h4>
                  <p className="text-gray-400">Conformité RGPD et SOC 2</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Zap className="w-8 h-8 text-orange-400" />
                <div>
                  <h4 className="text-white font-semibold">Performance</h4>
                  <p className="text-gray-400">99.99% de disponibilité</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Notre Partenariat</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            En tant que partenaire certifié Aircall, NOLIA vous accompagne dans l'implémentation, la configuration et
            l'optimisation de votre solution de téléphonie cloud. Nous vous aidons à tirer le meilleur parti des
            fonctionnalités avancées d'Aircall pour transformer vos communications d'entreprise.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Prêt à moderniser vos communications ?</h3>
            <p className="text-blue-100 mb-6">
              Contactez nos experts pour découvrir comment Aircall peut transformer votre entreprise
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Demander une démonstration
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
