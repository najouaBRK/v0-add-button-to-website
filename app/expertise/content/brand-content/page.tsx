import Link from "next/link"
import { ArrowRight, Sparkles, Target, Users, Video, Camera, Megaphone } from "lucide-react"

export default function BrandContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-rose-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span className="text-rose-300 text-sm font-medium">Expertise Brand Content</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">
              Brand Content{" "}
            </span>
            Authentique
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Créez du contenu de marque qui raconte votre histoire, renforce votre identité et crée une connexion
            émotionnelle avec votre audience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Créer mon brand content
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos créations
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Services Brand Content</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Du storytelling authentique qui donne vie à votre marque
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Storytelling de Marque",
                description: "Création de narratifs authentiques qui reflètent vos valeurs et votre mission",
              },
              {
                icon: <Video className="w-8 h-8" />,
                title: "Contenu Vidéo",
                description: "Vidéos corporate, témoignages clients et contenus immersifs pour votre marque",
              },
              {
                icon: <Camera className="w-8 h-8" />,
                title: "Production Photo",
                description: "Shootings produits, portraits corporate et visuels de marque professionnels",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Campagnes Thématiques",
                description: "Campagnes de contenu cohérentes autour d'événements ou lancements produits",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Contenu Collaboratif",
                description: "Partenariats créatifs et co-création avec influenceurs et ambassadeurs",
              },
              {
                icon: <Megaphone className="w-8 h-8" />,
                title: "Activation de Marque",
                description: "Événements, expériences et activations pour créer du buzz autour de votre marque",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-rose-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Processus Brand Content</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche créative pour donner vie à votre identité de marque
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Brand Discovery",
                description: "Immersion dans votre univers de marque, valeurs et positionnement unique",
              },
              {
                step: "02",
                title: "Stratégie Créative",
                description: "Définition des axes créatifs et du storytelling adapté à votre audience",
              },
              {
                step: "03",
                title: "Production",
                description: "Création des contenus avec nos équipes créatives et partenaires experts",
              },
              {
                step: "04",
                title: "Diffusion & Amplification",
                description: "Déploiement multi-canal et optimisation pour maximiser l'impact",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-rose-500/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                <p className="text-gray-300 leading-relaxed">{process.description}</p>
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
              { number: "100+", label: "Campagnes créées" },
              { number: "+280%", label: "Engagement brand content" },
              { number: "25M+", label: "Vues générées" },
              { number: "95%", label: "Satisfaction client" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-rose-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à donner vie à votre marque ?</h2>
          <p className="text-xl text-gray-300 mb-8">Créons ensemble du brand content qui marque les esprits</p>
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Créer mon univers de marque
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
