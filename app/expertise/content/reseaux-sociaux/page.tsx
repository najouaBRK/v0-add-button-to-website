import Link from "next/link"
import { ArrowRight, Share2, Users, TrendingUp, Camera, MessageCircle, Heart } from "lucide-react"

export default function ReseauxSociauxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Share2 className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Expertise Réseaux Sociaux</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Réseaux Sociaux{" "}
            </span>
            Performants
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Développez votre présence sur les réseaux sociaux avec du contenu qui engage, fidélise et convertit votre
            communauté.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Booster ma présence
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services Réseaux Sociaux</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une présence sociale qui marque les esprits et génère des résultats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Share2 className="w-8 h-8" />,
                title: "Stratégie Social Media",
                description: "Définition de votre positionnement et stratégie de contenu multi-plateformes",
              },
              {
                icon: <Camera className="w-8 h-8" />,
                title: "Création de Contenu",
                description: "Posts visuels, vidéos, stories et contenus adaptés à chaque réseau social",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Management",
                description: "Animation de communauté, modération et gestion des interactions",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Croissance Organique",
                description: "Stratégies pour augmenter naturellement votre audience et engagement",
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Engagement & Interaction",
                description: "Techniques pour maximiser l'engagement et créer une communauté active",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Influence & Partenariats",
                description: "Collaborations avec influenceurs et stratégies de partenariats",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Plateformes Maîtrisées</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Expertise sur tous les réseaux sociaux majeurs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Instagram",
                description: "Posts, Stories, Reels et IGTV pour maximiser votre visibilité",
                color: "from-pink-500 to-purple-600",
              },
              {
                name: "LinkedIn",
                description: "Contenu professionnel et stratégies B2B pour développer votre réseau",
                color: "from-blue-500 to-blue-600",
              },
              {
                name: "Facebook",
                description: "Pages entreprise, groupes et publicités pour toucher votre audience",
                color: "from-blue-600 to-indigo-600",
              },
              {
                name: "TikTok",
                description: "Vidéos virales et tendances pour toucher la génération Z",
                color: "from-purple-500 to-pink-500",
              },
            ].map((platform, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl font-bold text-white">{platform.name[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{platform.name}</h3>
                <p className="text-gray-300 leading-relaxed">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Comptes gérés" },
              { number: "+350%", label: "Croissance followers" },
              { number: "12%", label: "Taux d'engagement moyen" },
              { number: "50M+", label: "Impressions générées" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à dominer les réseaux sociaux ?</h2>
          <p className="text-xl text-gray-300 mb-8">Créons ensemble une présence sociale qui fait la différence</p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Développer ma présence
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
