import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Search, BarChart3, Target, Award, Globe, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Google Partner - Partenaire NOLIA | Certification Google Ads",
  description:
    "Découvrez notre certification Google Partner pour Google Ads, Analytics et les solutions publicitaires Google.",
}

export default function GooglePartnerPage() {
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
            <img
              src="/google-partner-logo-multicolor.jpg"
              alt="Google Partner logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Certification <span className="text-orange-400">Google Partner</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Agence certifiée Google Partner pour Google Ads, Analytics et toutes les solutions publicitaires Google
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <Search className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Google Ads</h3>
            <p className="text-gray-300">Campagnes Search, Display, Shopping et YouTube optimisées</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Google Analytics</h3>
            <p className="text-gray-300">Analyse avancée et tracking de performance avec GA4</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Optimisation</h3>
            <p className="text-gray-300">Stratégies d'enchères automatisées et ciblage précis</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Notre Certification Google Partner</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                Le programme Google Partner reconnaît les agences qui démontrent leur expertise dans les produits
                publicitaires Google. Cette certification garantit que notre équipe maîtrise les meilleures pratiques et
                les dernières innovations de Google Ads.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                En tant qu'agence certifiée, nous avons accès aux dernières fonctionnalités en avant-première, au
                support technique prioritaire et aux formations exclusives Google, nous permettant d'offrir à nos
                clients les stratégies publicitaires les plus performantes.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-orange-400" />
                <div>
                  <h4 className="text-white font-semibold">Certifications</h4>
                  <p className="text-gray-400">Google Ads, Analytics, Shopping</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="w-8 h-8 text-orange-400" />
                <div>
                  <h4 className="text-white font-semibold">Accès privilégié</h4>
                  <p className="text-gray-400">Nouvelles fonctionnalités en avant-première</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Zap className="w-8 h-8 text-orange-400" />
                <div>
                  <h4 className="text-white font-semibold">Support prioritaire</h4>
                  <p className="text-gray-400">Assistance technique dédiée Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Nos Services Google</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Google Ads Management</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Audit et stratégie de campagnes</li>
                <li>• Recherche de mots-clés avancée</li>
                <li>• Création et optimisation d'annonces</li>
                <li>• Gestion des enchères automatisées</li>
                <li>• Reporting et analyse de performance</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Google Analytics & Tracking</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Configuration GA4 avancée</li>
                <li>• Événements et conversions personnalisés</li>
                <li>• Tableaux de bord sur mesure</li>
                <li>• Attribution multi-canal</li>
                <li>• Formation et accompagnement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Maximisez votre ROI avec Google</h3>
            <p className="text-blue-100 mb-6">
              Profitez de notre expertise certifiée Google Partner pour optimiser vos campagnes publicitaires
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Audit Google Ads gratuit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
