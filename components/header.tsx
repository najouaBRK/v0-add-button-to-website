"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import QuoteButton from "@/components/QuoteButton"

export function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // If not on homepage, navigate to homepage first then scroll
      router.push("/#services-section")
    }
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f1729] border-b border-gray-700/30">
      <div className="container mx-auto px-4 flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="text-white font-bold text-xl md:text-2xl">
              <span className="text-orange-400">DIGITALISIM</span>
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
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
            Expertise
          </Link>
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
            <Link
              href="/"
              className="block text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Expertise
            </Link>
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
