import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Users, BarChart3, Mail, Zap, Target, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "HubSpot - Partenaire NOLIA | Plateforme CRM et Marketing",
  description: "Découvrez notre partenariat avec HubSpot, la plateforme CRM et marketing automation leader du marché.",
}

export default function HubSpotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors mb-8 animate-fadeIn"
        >
          <ArrowLeft size={20} className="mr-2" />
          Retour à l'accueil
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="w-48 h-16 mx-auto mb-8 bg-white rounded-lg flex items-center justify-center shadow-lg animate-scaleUp">
            <img src="/hubspot-logo-new.png" alt="HubSpot logo" className="max-w-full max-h-full object-contain" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-6 animate-slideUp">
            Partenariat <span className="text-orange-600">HubSpot</span>
          </h1>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto animate-slideUp-delay-1">
            Plateforme CRM et marketing automation tout-en-un pour accélérer la croissance de votre entreprise
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-8 text-center shadow-lg animate-slideUp-delay-2 hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-orange-900 mb-4">CRM Complet</h3>
            <p className="text-orange-700">Gestion complète des contacts, deals et pipeline commercial</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-8 text-center shadow-lg animate-slideUp-delay-3 hover:shadow-xl transition-shadow">
            <Mail className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-orange-900 mb-4">Marketing Automation</h3>
            <p className="text-orange-700">Campagnes email automatisées et nurturing de leads avancé</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-8 text-center shadow-lg animate-slideUp-delay-4 hover:shadow-xl transition-shadow">
            <BarChart3 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-orange-900 mb-4">Analytics</h3>
            <p className="text-orange-700">Rapports détaillés et ROI tracking pour optimiser vos performances</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white/60 backdrop-blur-sm border border-orange-200 rounded-2xl p-12 mb-16 shadow-lg animate-fadeIn-delay-2">
          <h2 className="text-3xl font-bold text-orange-900 mb-8 text-center">À propos de HubSpot</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-800 text-lg mb-6">
                HubSpot est la plateforme de croissance leader qui aide les entreprises à attirer, engager et fidéliser
                leurs clients. Fondée en 2006, HubSpot a révolutionné l'approche du marketing et des ventes avec sa
                philosophie d'inbound marketing.
              </p>
              <p className="text-orange-800 text-lg mb-6">
                Avec plus de 135 000 clients dans plus de 120 pays, HubSpot propose une suite complète d'outils pour le
                marketing, les ventes, le service client et la gestion de contenu, le tout dans une plateforme unifiée
                et facile à utiliser.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 animate-slideRight-delay-1">
                <Target className="w-8 h-8 text-orange-500" />
                <div>
                  <h4 className="text-orange-900 font-semibold">Inbound Marketing</h4>
                  <p className="text-orange-700">Pionnier de la méthodologie inbound</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 animate-slideRight-delay-2">
                <Award className="w-8 h-8 text-orange-500" />
                <div>
                  <h4 className="text-orange-900 font-semibold">Certifications</h4>
                  <p className="text-orange-700">Programmes de formation reconnus</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 animate-slideRight-delay-3">
                <Zap className="w-8 h-8 text-orange-500" />
                <div>
                  <h4 className="text-orange-900 font-semibold">Innovation</h4>
                  <p className="text-orange-700">IA intégrée et automatisation avancée</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="text-center animate-fadeIn-delay-3">
          <h2 className="text-3xl font-bold text-orange-900 mb-8">Notre Expertise HubSpot</h2>
          <p className="text-xl text-orange-800 max-w-4xl mx-auto mb-12">
            NOLIA est partenaire certifié HubSpot Solutions Partner. Notre équipe d'experts certifiés vous accompagne
            dans l'implémentation, la migration, la formation et l'optimisation de votre écosystème HubSpot pour
            maximiser votre retour sur investissement.
          </p>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center shadow-xl animate-scaleUp-delay-1 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-bold text-white mb-4">Prêt à accélérer votre croissance ?</h3>
            <p className="text-orange-100 mb-6">
              Contactez nos experts certifiés HubSpot pour transformer votre stratégie commerciale
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform">
              Demander un audit HubSpot
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
