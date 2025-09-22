"use client"
import { useState } from "react"
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

const blogPosts = [
  {
    id: 1,
    title: "L'Intelligence Artificielle au service de votre entreprise",
    excerpt:
      "Découvrez comment l'IA peut transformer vos processus métier et améliorer votre productivité avec des solutions concrètes et adaptées.",
    image: "/modern-ai-technology-dashboard-with-neural-network.jpg",
    category: "IA",
    author: "Sarah Martin",
    date: "15 Mars 2024",
    featured: true,
    tags: ["Intelligence Artificielle", "Automatisation", "Productivité"],
  },
  {
    id: 2,
    title: "HubSpot CRM : Guide complet pour optimiser vos ventes",
    excerpt:
      "Maîtrisez tous les aspects de HubSpot CRM pour booster vos performances commerciales et améliorer votre relation client.",
    image: "/hubspot-crm-interface-with-sales-pipeline-and-cust.jpg",
    category: "CRM",
    author: "Thomas Dubois",
    date: "12 Mars 2024",
    featured: true,
    tags: ["HubSpot", "CRM", "Ventes"],
  },
  {
    id: 3,
    title: "Transformation digitale : Les étapes clés pour réussir",
    excerpt:
      "Un guide pratique pour accompagner votre entreprise dans sa transformation digitale avec une approche méthodique et éprouvée.",
    image: "/digital-transformation-concept-with-business-growt.jpg",
    category: "Digital",
    author: "Marie Leroy",
    date: "10 Mars 2024",
    featured: true,
    tags: ["Transformation", "Digital", "Stratégie"],
  },
  {
    id: 4,
    title: "Data Analytics : Exploitez vos données pour prendre de meilleures décisions",
    excerpt:
      "Apprenez à transformer vos données en insights actionnables pour optimiser vos performances et anticiper les tendances.",
    image: "/data-analytics-dashboard-with-colorful-charts-grap.jpg",
    category: "Data",
    author: "Pierre Moreau",
    date: "8 Mars 2024",
    featured: false,
    tags: ["Data", "Analytics", "Business Intelligence"],
  },
  {
    id: 5,
    title: "Automatisation des workflows : Gagnez en efficacité",
    excerpt:
      "Découvrez comment automatiser vos processus répétitifs pour libérer du temps et réduire les erreurs humaines.",
    image: "/workflow-automation-with-connected-process-nodes-a.jpg",
    category: "Automatisation",
    author: "Julie Bernard",
    date: "5 Mars 2024",
    featured: false,
    tags: ["Automatisation", "Workflows", "Efficacité"],
  },
  {
    id: 6,
    title: "SEO et Content Marketing : La stratégie gagnante",
    excerpt:
      "Optimisez votre visibilité en ligne avec une stratégie SEO et content marketing adaptée à votre secteur d'activité.",
    image: "/seo-content-marketing-strategy-with-search-ranking.jpg",
    category: "Marketing",
    author: "Antoine Rousseau",
    date: "3 Mars 2024",
    featured: false,
    tags: ["SEO", "Content Marketing", "Visibilité"],
  },
]

const categories = ["Tous", "IA", "CRM", "Digital", "Data", "Automatisation", "Marketing"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [currentSlide, setCurrentSlide] = useState(0)

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const filteredPosts =
    selectedCategory === "Tous"
      ? blogPosts.filter((post) => !post.featured)
      : blogPosts.filter((post) => post.category === selectedCategory && !post.featured)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2b4a] to-[#0f1729]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6 animate-pulse">
              <span className="text-orange-400 text-sm font-medium">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slideInFromLeft">
              Blog et <span className="text-orange-400 animate-glow">actualités</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slideInFromRight animation-delay-200">
              Nos spécialistes partagent le temps de parler de mission pour vous accompagner dans vos projets et vous
              permettre de rester informé des dernières tendances et innovations du digital. Vous trouverez aussi des
              tips et astuces à consommer sans modération.
            </p>
            <div className="flex justify-center animate-bounceIn animation-delay-400">
              <div className="w-32 h-32 relative">
                <img
                  src="/futuristic-digital-blog-icon-with-glowing-effects-.jpg"
                  alt="Blog illustration"
                  className="w-full h-full object-contain animate-float hover:animate-wiggle"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 animate-slideInFromLeft">Articles à la une</h2>
            <div className="flex space-x-2 animate-slideInFromRight">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Article précédent"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Article suivant"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredPosts.map((post) => (
                <div key={post.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User size={16} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs hover:bg-blue-200 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium transition-all duration-300 group-hover:translate-x-2">
                        Lire la suite
                        <ArrowRight
                          size={16}
                          className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 animate-fadeInUp hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg animate-pulse"
                    : "bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600 hover:shadow-md"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 animate-slideInFromBottom group`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs hover:bg-blue-200 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium transition-all duration-300 group-hover:translate-x-2">
                    Lire la suite
                    <ArrowRight
                      size={16}
                      className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a2b4a] to-[#0f1729] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-bounceIn">
              <img
                src="/modern-business-consultation-with-digital-elements.jpg"
                alt="Consultation illustration"
                className="w-24 h-24 mx-auto animate-float hover:animate-heartbeat"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slideInFromLeft">
              Parlons de votre projet !
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slideInFromRight animation-delay-200">
              Vous avez un projet de transformation digitale ? Nos experts sont là pour vous accompagner et vous
              proposer des solutions sur mesure adaptées à vos besoins.
            </p>
            <div className="animate-bounceIn animation-delay-400">
              <QuoteButton
                serviceName="Blog"
                packageName="Consultation projet"
                packageDescription="Demande de consultation depuis la page blog"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 text-lg animate-glow"
              >
                Obtenir un devis
              </QuoteButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
