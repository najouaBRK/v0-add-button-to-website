"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Bot, TrendingUp, Zap, Target } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Bot size={120} className="text-blue-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Boostez votre croissance avec l'IA
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-orange-400 font-semibold">
            Des agents intelligents sur mesure pour votre entreprise
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
            Grâce aux dernières technologies d'intelligence artificielle sur mesure - agents IA, automatisations
            intelligentes, intégrations CRM - nous aidons les entreprises à transformer leurs processus, réduire leurs
            coûts et accélérer leur croissance.
          </p>

          <QuoteButton
            serviceName="Intelligence Artificielle"
            packageName="Audit IA gratuit"
            packageDescription="Demande d'audit IA gratuit pour découvrir les opportunités d'automatisation"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-lg font-semibold transform hover:scale-105 transition-all duration-200"
          >
            Obtenir mon audit IA gratuit
          </QuoteButton>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi l'IA est un levier de ROI immédiat
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Aujourd'hui, 90 % des entreprises considèrent encore trop de temps et de ressources à des tâches
              répétitives et manuelles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 text-center p-6 hover:bg-slate-700/50 transition-colors">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-red-400 mb-2">-30%</div>
                <div className="text-white font-semibold mb-2">de temps</div>
                <div className="text-gray-400 text-sm">gagné sur les tâches répétitives</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center p-6 hover:bg-slate-700/50 transition-colors">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-green-400 mb-2">+40%</div>
                <div className="text-white font-semibold mb-2">de productivité</div>
                <div className="text-gray-400 text-sm">augmentation des performances</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center p-6 hover:bg-slate-700/50 transition-colors">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-blue-400 mb-2">+100%</div>
                <div className="text-white font-semibold mb-2">de croissance</div>
                <div className="text-gray-400 text-sm">Doubler la croissance de votre chiffre d'affaires</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center p-6 hover:bg-slate-700/50 transition-colors">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-purple-400 mb-2">6</div>
                <div className="text-white font-semibold mb-2">mois</div>
                <div className="text-gray-400 text-sm">d'avance sur la concurrence</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos Solutions IA</h2>
            <p className="text-gray-300 text-lg">Des solutions sur mesure adaptées à vos besoins spécifiques</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-colors">
              <CardContent className="p-0">
                <Bot className="text-blue-400 mb-4" size={48} />
                <h3 className="text-xl font-bold text-white mb-3">Agents IA Conversationnels</h3>
                <p className="text-gray-300 mb-4">
                  Chatbots intelligents pour automatiser le service client et améliorer l'expérience utilisateur.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Support client 24/7</li>
                  <li>• Qualification automatique des leads</li>
                  <li>• Intégration CRM native</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-colors">
              <CardContent className="p-0">
                <TrendingUp className="text-green-400 mb-4" size={48} />
                <h3 className="text-xl font-bold text-white mb-3">Automatisation Intelligente</h3>
                <p className="text-gray-300 mb-4">
                  Automatisation des processus métier avec intelligence artificielle pour optimiser vos workflows.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Traitement automatique des documents</li>
                  <li>• Workflows intelligents</li>
                  <li>• Analyse prédictive</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-colors">
              <CardContent className="p-0">
                <Target className="text-purple-400 mb-4" size={48} />
                <h3 className="text-xl font-bold text-white mb-3">IA Marketing & Ventes</h3>
                <p className="text-gray-300 mb-4">
                  Solutions IA pour optimiser vos campagnes marketing et booster vos ventes.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Personnalisation en temps réel</li>
                  <li>• Scoring automatique des prospects</li>
                  <li>• Recommandations intelligentes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre entreprise avec l'IA ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un audit gratuit et découvrez comment l'IA peut révolutionner votre activité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteButton
              serviceName="Intelligence Artificielle"
              packageName="Audit IA gratuit CTA"
              packageDescription="Demande d'audit IA gratuit depuis la section CTA"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-lg font-semibold"
            >
              Demander un audit IA gratuit
            </QuoteButton>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg rounded-lg font-semibold bg-transparent"
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
