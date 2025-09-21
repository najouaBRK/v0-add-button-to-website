"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isExpertisesOpen, setIsExpertisesOpen] = useState(false)

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
  }

  const expertisesData = {
    web: {
      title: "Web",
      categories: ["Site vitrine", "E-commerce", "Blog", "Landing page", "Application web", "Refonte de site"],
    },
    content: {
      title: "Content",
      categories: [
        "Rédaction web",
        "Content marketing",
        "Stratégie éditoriale",
        "Copywriting",
        "Storytelling",
        "Optimisation contenu",
      ],
    },
    seo: {
      title: "SEO",
      categories: [
        "Audit SEO",
        "Optimisation technique",
        "Recherche de mots-clés",
        "Link building",
        "SEO local",
        "Suivi de performance",
      ],
    },
    paid: {
      title: "Paid",
      categories: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Display", "Retargeting", "Optimisation campagnes"],
    },
    data: {
      title: "Data",
      categories: [
        "Analytics",
        "Business Intelligence",
        "Data visualization",
        "Reporting",
        "Tracking",
        "KPI & métriques",
      ],
    },
    hubspot: {
      title: "HubSpot",
      categories: [
        "Implémentation CRM",
        "Marketing automation",
        "Sales automation",
        "Intégrations",
        "Formation",
        "Support technique",
      ],
    },
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f1729] border-b border-gray-700/30">
      <div className="container mx-auto px-4 flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="text-white font-bold text-xl md:text-2xl">
              <span className="text-orange-400">NOLIA</span>
            </div>
            <div className="ml-2 text-xs text-gray-400 hidden md:block">EXPERTS EN DIGITALE</div>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-300 hover:text-orange-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
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
              className={`absolute top-full left-0 mt-2 w-[800px] bg-[#0f1729] border border-gray-700/30 rounded-lg shadow-2xl p-6 transition-all duration-300 transform ${
                isExpertisesOpen
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-[-10px] scale-95 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(expertisesData).map(([key, expertise], index) => (
                  <div
                    key={key}
                    className={`space-y-3 transform transition-all duration-500 hover:scale-105 ${
                      isExpertisesOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isExpertisesOpen ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <div className="p-4 rounded-lg bg-gradient-to-br from-gray-800/20 to-gray-900/20 hover:from-orange-500/10 hover:to-yellow-500/10 transition-all duration-300 border border-transparent hover:border-orange-500/20">
                      <h3 className="text-orange-400 font-semibold text-lg mb-3 flex items-center">
                        {expertise.title}
                        <div className="ml-2 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      </h3>
                      <ul className="space-y-2">
                        {expertise.categories.map((category, catIndex) => (
                          <li key={catIndex}>
                            <Link
                              href={`/services/${key}`}
                              className="text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm block py-1 px-2 rounded hover:bg-orange-500/10 hover:translate-x-1 relative overflow-hidden group"
                            >
                              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/20 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                              <span className="relative z-10">{category}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`mt-6 pt-4 border-t border-gray-700/30 text-center transform transition-all duration-700 ${
                  isExpertisesOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isExpertisesOpen ? "600ms" : "0ms" }}
              >
                <QuoteButton
                  serviceName="Expertises"
                  packageName="Consultation expertises"
                  packageDescription="Demande de consultation pour nos expertises"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 animate-pulse"
                >
                  Discuter de votre projet
                </QuoteButton>
              </div>
            </div>
          </div>

          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
            Solutions
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
            Partenaires
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
            Secteurs
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
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
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Nous contacter
          </QuoteButton>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#0f1729] border-t border-gray-700/30 shadow-lg">
          <nav className="px-4 py-4 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-orange-400 py-2">Expertises</div>
              <div className="grid grid-cols-2 gap-2 pl-4">
                {Object.entries(expertisesData).map(([key, expertise]) => (
                  <Link
                    key={key}
                    href={`/services/${key}`}
                    className="text-xs text-gray-300 hover:text-orange-400 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {expertise.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Partenaires
            </Link>
            <Link
              href="/"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Secteurs
            </Link>
            <Link
              href="/"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              STUDIO
            </Link>
            <div className="pt-4 border-t border-gray-700/30">
              <QuoteButton
                serviceName="Général"
                packageName="Demande de devis mobile"
                packageDescription="Demande de devis depuis le menu mobile"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
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
