import Link from "next/link"
import { ArrowRight, GraduationCap, Users, BookOpen, Award, Target, Zap } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export default function FormationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full text-green-300 text-sm font-medium mb-6">
              <GraduationCap size={16} className="mr-2" />
              Formation HubSpot
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Maîtrisez HubSpot avec nos
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                {" "}
                formations expertes
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Développez l'expertise HubSpot de vos équipes avec nos formations personnalisées. De l'initiation à
              l'expertise avancée, nous vous accompagnons vers l'autonomie complète.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                serviceName="Formation HubSpot"
                packageName="Programme Formation"
                packageDescription="Demande de programme formation depuis la page Formation HubSpot"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                Programme sur-mesure
              </QuoteButton>
              <Link
                href="/expertise/hubspot"
                className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Voir toutes nos expertises HubSpot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nos programmes de <span className="text-green-400">formation</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des formations adaptées à tous les niveaux et tous les rôles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="text-green-400" size={32} />,
                title: "HubSpot Fondamentaux",
                description: "Initiation complète aux bases de HubSpot pour les nouveaux utilisateurs",
                duration: "2 jours",
                level: "Débutant",
              },
              {
                icon: <Target className="text-emerald-400" size={32} />,
                title: "Marketing Hub",
                description: "Maîtrise complète des outils marketing automation et lead nurturing",
                duration: "3 jours",
                level: "Intermédiaire",
              },
              {
                icon: <Users className="text-green-400" size={32} />,
                title: "Sales Hub",
                description: "Optimisation des processus de vente et gestion du pipeline commercial",
                duration: "2 jours",
                level: "Intermédiaire",
              },
              {
                icon: <Zap className="text-emerald-400" size={32} />,
                title: "Service Hub",
                description: "Excellence du service client et gestion des tickets de support",
                duration: "2 jours",
                level: "Intermédiaire",
              },
              {
                icon: <Award className="text-green-400" size={32} />,
                title: "HubSpot Avancé",
                description: "Techniques avancées, workflows complexes et intégrations personnalisées",
                duration: "3 jours",
                level: "Avancé",
              },
              {
                icon: <GraduationCap className="text-emerald-400" size={32} />,
                title: "Certification Admin",
                description: "Formation complète pour devenir administrateur HubSpot certifié",
                duration: "5 jours",
                level: "Expert",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{program.title}</h3>
                <p className="text-gray-300 mb-4">{program.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-medium">{program.duration}</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">{program.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methods Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Modalités de <span className="text-green-400">formation</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choisissez le format qui convient le mieux à vos équipes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Présentiel",
                description: "Formation dans vos locaux ou dans nos centres de formation",
                features: ["Interaction directe", "Exercices pratiques", "Personnalisation maximale"],
              },
              {
                title: "Distanciel",
                description: "Formation en ligne avec formateur en direct",
                features: ["Flexibilité géographique", "Outils collaboratifs", "Enregistrement des sessions"],
              },
              {
                title: "Hybride",
                description: "Combinaison présentiel et distanciel selon vos besoins",
                features: ["Flexibilité maximale", "Optimisation des coûts", "Suivi personnalisé"],
              },
              {
                title: "E-learning",
                description: "Modules d'apprentissage autonome à votre rythme",
                features: ["Disponibilité 24/7", "Progression individuelle", "Certification incluse"],
              },
            ].map((method, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-green-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pourquoi choisir nos <span className="text-green-400">formations</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Formateurs certifiés",
                description: "Tous nos formateurs sont certifiés HubSpot et experts métier",
                icon: <Award className="text-green-400" size={24} />,
              },
              {
                title: "Contenu actualisé",
                description: "Formations mises à jour en permanence avec les dernières fonctionnalités",
                icon: <BookOpen className="text-emerald-400" size={24} />,
              },
              {
                title: "Approche pratique",
                description: "80% de pratique sur votre propre environnement HubSpot",
                icon: <Target className="text-green-400" size={24} />,
              },
              {
                title: "Support post-formation",
                description: "Accompagnement de 3 mois inclus après chaque formation",
                icon: <Users className="text-emerald-400" size={24} />,
              },
              {
                title: "Certification officielle",
                description: "Préparation aux certifications HubSpot officielles",
                icon: <GraduationCap className="text-green-400" size={24} />,
              },
              {
                title: "ROI mesurable",
                description: "Amélioration moyenne de 40% de l'efficacité des équipes formées",
                icon: <Zap className="text-emerald-400" size={24} />,
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2000+", label: "Professionnels formés" },
              { number: "98%", label: "Taux de satisfaction" },
              { number: "85%", label: "Taux de certification" },
              { number: "40%", label: "Amélioration de productivité" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à former vos équipes sur HubSpot ?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Découvrez notre catalogue de formations et créons ensemble le programme parfait pour vos équipes.
          </p>
          <QuoteButton
            serviceName="Formation HubSpot"
            packageName="Consultation Formation"
            packageDescription="Demande de consultation formation depuis la page Formation HubSpot"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
          >
            Créer mon programme de formation
            <ArrowRight className="ml-2" size={20} />
          </QuoteButton>
        </div>
      </section>
    </div>
  )
}
