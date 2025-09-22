"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown, Globe, FileText, Search, DollarSign, BarChart3 } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isExpertisesOpen, setIsExpertisesOpen] = useState(false)
  const [isPartnersOpen, setIsPartnersOpen] = useState(false)
  const [isMobileExpertisesOpen, setIsMobileExpertisesOpen] = useState(false)
  const [isMobilePartnersOpen, setIsMobilePartnersOpen] = useState(false)

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push("/#services-section")
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      setIsMobileExpertisesOpen(false)
      setIsMobilePartnersOpen(false)
    }
  }

  const expertisesData = {
    web: {
      title: "Web",
      icon: <Globe size={20} className="text-orange-400" />,
      categories: ["Site vitrine", "E-commerce", "Blog", "Landing page", "Application web", "Maintenance"],
    },
    content: {
      title: "Content",
      icon: <FileText size={20} className="text-orange-400" />,
      categories: [
        "Rédaction web",
        "Stratégie éditoriale",
        "Copywriting",
        "Newsletter",
        "Réseaux sociaux",
        "Brand content",
      ],
    },
    seo: {
      title: "SEO",
      icon: <Search size={20} className="text-orange-400" />,
      categories: ["Audit SEO", "Mots-clés", "SEO technique", "SEO local", "Netlinking", "Suivi"],
    },
    paid: {
      title: "Paid",
      icon: <DollarSign size={20} className="text-orange-400" />,
      categories: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Display", "Retargeting", "Analytics"],
    },
    data: {
      title: "Data",
      icon: <BarChart3 size={20} className="text-orange-400" />,
      categories: ["Analytics", "Dashboards", "Automation", "BI", "Machine Learning", "Consulting"],
    },
    hubspot: {
      title: "HubSpot",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-orange-400">
          <path
            fill="currentColor"
            d="M18.164 7.931V5.61c0-1.378-1.119-2.497-2.497-2.497s-2.497 1.119-2.497 2.497v2.321c-1.133.434-2.097 1.145-2.815 2.071l-3.738-2.158c.171-.427.264-.895.264-1.386 0-1.933-1.567-3.5 3.5-3.5S0 4.526 0 6.459s1.567 3.5 3.5 3.5c.605 0 1.174-.154 1.671-.425l3.738 2.158c-.171.427-.264.895-.264 1.386 0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5z"
          />
        </svg>
      ),
      categories: ["Implémentation CRM", "Migration", "Formation", "Intégrations", "Workflows", "Support"],
    },
  }

  const partnersData = [
    {
      name: "AIRCALL",
      logo: "/aircall-logo-new.png",
      description: "Solution de téléphonie cloud pour centres d'appels",
      slug: "aircall",
    },
    {
      name: "HUBSPOT",
      logo: "/hubspot-logo-new.png",
      description: "Plateforme CRM et marketing automation",
      slug: "hubspot",
    },
    {
      name: "ODOO",
      logo: "/odoo-logo-purple.jpg",
      description: "Suite d'applications de gestion d'entreprise",
      slug: "odoo",
    },
    {
      name: "GOOGLE PARTNER",
      logo: "/google-partner-logo-new.png",
      description: "Partenaire certifié Google Ads et Analytics",
      slug: "google-partner",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f1729] border-b border-gray-700/30">
      <div className="container mx-auto px-4 flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="text-white font-bold text-xl md:text-2xl">
              <span className="text-orange-400">NOLIA</span>
            </div>
            <div className="ml-2 text-xs text-gray-400 hidden lg:block">EXPERTS EN DIGITALE</div>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-3 text-gray-300 hover:text-orange-400 transition-colors touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
            Accueil
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsExpertisesOpen(true)}
            onMouseLeave={() => setIsExpertisesOpen(false)}
          >
            <button className="flex items-center text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors group">
              Expertises
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-300 ${isExpertisesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`fixed top-20 left-1/2 transform -translate-x-1/2 bg-blue-50/95 backdrop-blur-sm border border-blue-200 rounded-lg shadow-2xl p-6 lg:p-8 transition-all duration-300 z-[9999] ${
                isExpertisesOpen
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-[-10px] scale-95 pointer-events-none"
              }`}
              style={{
                width: "min(1200px, 90vw)",
                maxWidth: "90vw",
                maxHeight: "80vh",
                overflowY: "auto",
              }}
            >
              {isExpertisesOpen && (
                <div
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1]"
                  onClick={() => setIsExpertisesOpen(false)}
                />
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6 w-full">
                {Object.entries(expertisesData).map(([key, expertise], index) => (
                  <div
                    key={key}
                    className={`space-y-3 lg:space-y-4 transform transition-all duration-500 ${
                      isExpertisesOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isExpertisesOpen ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <div className="flex items-center space-x-2 pb-2 border-b border-blue-200">
                      {expertise.icon}
                      <h3 className="text-gray-900 font-semibold text-sm lg:text-base">{expertise.title}</h3>
                    </div>

                    <div className="space-y-1 lg:space-y-2">
                      {expertise.categories.map((category, catIndex) => (
                        <Link
                          key={catIndex}
                          href={`/expertise/${key}/${category.toLowerCase().replace(/\s+/g, "-").replace(/é/g, "e").replace(/è/g, "e").replace(/ê/g, "e").replace(/à/g, "a").replace(/ç/g, "c")}`}
                          className="block text-gray-700 hover:text-orange-500 transition-all duration-300 text-xs lg:text-sm py-1 px-2 rounded hover:bg-blue-100/50 group"
                        >
                          <span className="flex items-center">
                            <span className="w-1 h-1 bg-orange-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            {category}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={`mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-blue-200 text-center transform transition-all duration-700 ${
                  isExpertisesOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isExpertisesOpen ? "600ms" : "0ms" }}
              >
                <QuoteButton
                  serviceName="Expertises"
                  packageName="Consultation expertises"
                  packageDescription="Demande de consultation pour nos expertises"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 text-sm lg:text-base"
                >
                  Discuter avec un spécialiste
                </QuoteButton>
              </div>
            </div>
          </div>

          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
            Solutions
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsPartnersOpen(true)}
            onMouseLeave={() => setIsPartnersOpen(false)}
          >
            <button className="flex items-center text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors group">
              Partenaires
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-300 ${isPartnersOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[min(600px,90vw)] bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-2xl p-4 lg:p-6 transition-all duration-300 ${
                isPartnersOpen
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-[-10px] scale-95 pointer-events-none"
              }`}
            >
              <div className="text-center mb-4 lg:mb-6">
                <h3 className="text-gray-900 font-semibold text-base lg:text-lg mb-2">Nos Partenaires</h3>
                <p className="text-gray-600 text-xs lg:text-sm">Découvrez nos partenaires technologiques</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                {partnersData.map((partner, index) => (
                  <Link
                    key={partner.slug}
                    href={`/partenaires/${partner.slug}`}
                    className={`group p-3 lg:p-4 bg-gray-50/50 rounded-lg border border-gray-300 hover:border-orange-400 transition-all duration-300 hover:bg-gray-50/80 transform ${
                      isPartnersOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isPartnersOpen ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <div className="flex flex-col items-center text-center space-y-2 lg:space-y-3">
                      <div className="w-full h-8 lg:h-10 flex items-center justify-center bg-white rounded p-2">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={`${partner.name} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-medium text-xs lg:text-sm group-hover:text-orange-500 transition-colors">
                          {partner.name}
                        </h4>
                        <p className="text-gray-600 text-xs mt-1 hidden sm:block">{partner.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
            Secteurs
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
            À propos
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
            Blog
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
            STUDIO
          </Link>
        </nav>

        <div className="hidden md:flex items-center">
          <QuoteButton
            serviceName="Général"
            packageName="Demande de devis général"
            packageDescription="Demande de devis depuis le header du site"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-4 lg:px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm lg:text-base"
          >
            Nous contacter
          </QuoteButton>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700 shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-3 touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>

            <div className="space-y-2">
              <button
                onClick={() => setIsMobileExpertisesOpen(!isMobileExpertisesOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-orange-400 py-2 touch-manipulation"
              >
                <span>Expertises</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isMobileExpertisesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobileExpertisesOpen && (
                <div className="grid grid-cols-2 gap-2 pl-4 animate-slideUp">
                  {Object.entries(expertisesData).map(([key, expertise]) => (
                    <Link
                      key={key}
                      href={`/expertise/${key}`}
                      className="text-xs text-gray-300 hover:text-orange-400 transition-colors py-2 flex items-center touch-manipulation"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="mr-2 scale-75">{expertise.icon}</span>
                      <span className="truncate">{expertise.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setIsMobilePartnersOpen(!isMobilePartnersOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-orange-400 py-2 touch-manipulation"
              >
                <span>Partenaires</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isMobilePartnersOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobilePartnersOpen && (
                <div className="grid grid-cols-1 gap-2 pl-4 animate-slideUp">
                  {partnersData.map((partner) => (
                    <Link
                      key={partner.slug}
                      href={`/partenaires/${partner.slug}`}
                      className="flex items-center space-x-3 text-xs text-gray-300 hover:text-orange-400 transition-colors py-2 touch-manipulation"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-6 h-4 flex items-center justify-center bg-white rounded">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={`${partner.name} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <span className="truncate">{partner.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-3 touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-3 touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Secteurs
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-3 touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-3 touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-3 touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              STUDIO
            </Link>

            <div className="pt-4 border-t border-slate-600">
              <QuoteButton
                serviceName="Général"
                packageName="Demande de devis mobile"
                packageDescription="Demande de devis depuis le menu mobile"
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 touch-manipulation"
              >
                Nous contacter
              </QuoteButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
