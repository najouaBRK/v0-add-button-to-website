import Link from "next/link"
import {
  ArrowRight,
  ShoppingCart,
  CreditCard,
  Truck,
  Shield,
  BarChart3,
  Users,
  Smartphone,
  Globe,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react"

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <ShoppingCart className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">Expertise E-commerce</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Lancez votre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              {" "}
              Boutique{" "}
            </span>
            en Ligne
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Créez une boutique e-commerce performante qui convertit vos visiteurs en clients et maximise vos ventes en
            ligne avec notre expertise technique et marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              Créer ma boutique
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Voir nos e-commerces
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose e-commerce Section */}
      <section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pourquoi créer une boutique e-commerce pour votre entreprise ?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Le commerce en ligne représente aujourd'hui plus de 15% du commerce de détail mondial. Une boutique
              e-commerce vous permet d'atteindre de nouveaux clients, d'augmenter vos ventes et de développer votre
              activité 24h/24, 7j/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Portée mondiale",
                description: "Vendez vos produits partout dans le monde sans contraintes géographiques",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Croissance du CA",
                description: "Augmentez votre chiffre d'affaires avec un canal de vente disponible 24h/24",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Ciblage précis",
                description: "Atteignez votre audience idéale grâce aux outils de marketing digital",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile-first",
                description: "Profitez de l'explosion du m-commerce avec une boutique optimisée mobile",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Analytics avancés",
                description: "Analysez le comportement de vos clients pour optimiser vos ventes",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Automatisation",
                description: "Automatisez vos processus de vente, marketing et gestion des stocks",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Solutions E-commerce Complètes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce dont vous avez besoin pour réussir dans la vente en ligne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: "Catalogue Produits",
                description: "Gestion avancée des produits, variantes, stocks et catégories avec interface intuitive",
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Paiements Sécurisés",
                description: "Intégration de multiples moyens de paiement (CB, PayPal, Stripe, etc.)",
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Gestion Livraisons",
                description: "Calcul automatique des frais de port et suivi des commandes en temps réel",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Sécurité SSL",
                description: "Certificat SSL et conformité RGPD pour protéger vos clients et leurs données",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Analytics Ventes",
                description: "Tableaux de bord détaillés pour suivre vos performances et optimiser vos ventes",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Espace Client",
                description: "Comptes clients avec historique des commandes et programme de fidélité",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4 bg-white/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Méthodologie E-commerce</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Une approche structurée en 8 étapes pour créer votre boutique e-commerce performante et rentable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse du marché",
                description:
                  "Étude de votre secteur d'activité, analyse concurrentielle et identification des opportunités",
              },
              {
                step: "02",
                title: "Choix de la plateforme",
                description: "Sélection de la solution e-commerce adaptée à vos besoins et votre budget",
              },
              {
                step: "03",
                title: "Architecture produits",
                description: "Définition de l'arborescence, catégorisation et structuration de votre catalogue",
              },
              {
                step: "04",
                title: "Design & UX/UI",
                description: "Conception des maquettes et création d'une expérience utilisateur optimisée",
              },
              {
                step: "05",
                title: "Contenu SEO",
                description: "Rédaction de contenus optimisés pour le référencement naturel et la conversion",
              },
              {
                step: "06",
                title: "Développement",
                description: "Intégration technique, paiements, livraisons et fonctionnalités avancées",
              },
              {
                step: "07",
                title: "Tests & validation",
                description: "Tests complets de fonctionnement, sécurité et performance avant mise en ligne",
              },
              {
                step: "08",
                title: "Formation & suivi",
                description: "Formation à l'administration et accompagnement post-lancement",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 7 && index % 4 !== 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Processus de Création E-commerce</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'idée au lancement, nous vous accompagnons à chaque étape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Stratégie",
                description: "Analyse de votre marché, définition de la stratégie e-commerce et choix de la plateforme",
              },
              {
                step: "02",
                title: "Design & UX",
                description: "Création d'une expérience d'achat optimisée et d'un design qui convertit",
              },
              {
                step: "03",
                title: "Développement",
                description: "Intégration des fonctionnalités, paiements, livraisons et tests complets",
              },
              {
                step: "04",
                title: "Lancement & Suivi",
                description: "Mise en ligne, formation et accompagnement pour optimiser vos ventes",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent"></div>
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
      <section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "85+", label: "E-commerces créés" },
              { number: "+250%", label: "Augmentation CA moyenne" },
              { number: "3.2%", label: "Taux de conversion moyen" },
              { number: "99.9%", label: "Uptime garanti" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à lancer votre e-commerce ?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Obtenez une consultation gratuite pour votre projet de boutique en ligne
          </p>
          <Link
            href="/contact"
            className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
          >
            Consultation gratuite
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
