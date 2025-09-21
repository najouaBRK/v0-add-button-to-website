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
      categories: ["Site vitrine", "E-commerce", "Blog", "Landing page", "Application web"],
    },
    content: {
      title: "Content",
      categories: ["Rédaction web", "Stratégie éditoriale", "Content marketing", "Copywriting", "Storytelling"],
    },
    seo: {
      title: "SEO",
      categories: ["Audit SEO", "Optimisation technique", "Contenu SEO", "Link building", "SEO local"],
    },
    paid: {
      title: "Paid",
      categories: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Display", "Retargeting"],
    },
    data: {
      title: "Data",
      categories: ["Analytics", "Tracking", "Reporting", "Data visualization", "Business Intelligence"],
    },
    hubspot: {
      title: "HubSpot",
      categories: ["CRM Setup", "Marketing automation", "Sales pipeline", "Reporting", "Intégrations"],
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
            <button className="flex items-center text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
              Expertises
              <ChevronDown size={16} className="ml-1" />
            </button>

            {isExpertisesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[800px] bg-[#0f1729] border border-gray-700/30 rounded-lg shadow-2xl p-6">
                <div className="grid grid-cols-3 gap-6">
                  {Object.entries(expertisesData).map(([key, expertise]) => (
                    <div key={key} className="space-y-3">
                      <h3 className="text-orange-400 font-semibold text-lg">{expertise.title}</h3>
                      <ul className="space-y-2">
                        {expertise.categories.map((category, index) => (
                          <li key={index}>
                            <Link
                              href={`/services/${key}`}
                              className="text-gray-300 hover:text-orange-400 transition-colors text-sm block py-1"
                            >
                              {category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-700/30 text-center">
                  <QuoteButton
                    serviceName="Expertises"
                    packageName="Consultation expertises"
                    packageDescription="Demande de consultation pour nos expertises"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
                  >
                    Discuter de votre projet
                  </QuoteButton>
                </div>
              </div>
            )}
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
