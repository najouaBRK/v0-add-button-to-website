import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Package, Users, Settings, Globe, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Odoo - Partenaire NOLIA | Suite ERP complète",
  description: "Découvrez notre partenariat avec Odoo, la suite d'applications de gestion d'entreprise tout-en-un.",
}

export default function OdooPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
            <img src="/odoo-logo-purple-modern.jpg" alt="Odoo logo" className="max-w-full max-h-full object-contain" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Partenariat <span className="text-orange-400">Odoo</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Suite complète d'applications de gestion d'entreprise pour optimiser tous vos processus métier
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <Package className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">ERP Complet</h3>
            <p className="text-gray-300">Gestion complète des ventes, achats, stocks et comptabilité</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">CRM Intégré</h3>
            <p className="text-gray-300">Gestion des prospects, clients et pipeline commercial intégrée</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <Settings className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Personnalisable</h3>
            <p className="text-gray-300">Plus de 40 applications modulaires adaptables à vos besoins</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">À propos d'Odoo</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                Odoo est une suite complète d'applications de gestion d'entreprise open source qui couvre tous les
                besoins d'une entreprise : CRM, e-commerce, comptabilité, inventaire, point de vente, gestion de projet,
                et bien plus encore.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Avec plus de 12 millions d'utilisateurs dans le monde, Odoo se distingue par sa facilité d'utilisation,
                sa flexibilité et son approche modulaire qui permet aux entreprises de commencer petit et d'évoluer
                selon leurs besoins.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Globe className="w-8 h-8 text-orange-400" />
                <div>
                  <h4 className="text-white font-semibold">Présence mondiale</h4>
                  <p className="text-gray-400">Plus de 120 pays</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Package className="w-8 h-8 text-orange-400" />
                <div>
                  <h4 className="text-white font-semibold">Applications</h4>
                  <p className="text-gray-400">Plus de 40 modules disponibles</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Zap className="w-8 h-8 text-orange-400" />
                <div>
                  <h4 className="text-white font-semibold">Performance</h4>
                  <p className="text-gray-400">Solution rapide et évolutive</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Notre Expertise Odoo</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            En tant que partenaire officiel Odoo, NOLIA vous accompagne dans l'implémentation, la personnalisation et la
            formation sur la suite Odoo. Notre équipe d'experts vous aide à optimiser vos processus métier et à tirer le
            meilleur parti de cette solution complète.
          </p>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Prêt à optimiser votre gestion ?</h3>
            <p className="text-purple-100 mb-6">
              Contactez nos experts Odoo pour découvrir comment transformer votre entreprise
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Demander une démonstration
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
