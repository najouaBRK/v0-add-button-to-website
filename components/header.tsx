"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <svg viewBox="0 0 300 120" className="h-20 md:h-32 w-auto">
              <defs>
                <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#1e40af", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                </linearGradient>

                <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#0891b2", stopOpacity: 1 }} />
                </linearGradient>

                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2" />
                </filter>
              </defs>

              <g transform="translate(20, 20)">
                <circle cx="40" cy="40" r="35" fill="url(#mainGradient)" filter="url(#shadow)" />

                <path
                  d="M25 25 L35 25 L50 50 L50 25 L55 25 L55 55 L45 55 L30 30 L30 55 L25 55 Z"
                  fill="white"
                  opacity="0.95"
                />

                <circle cx="60" cy="20" r="8" fill="url(#accentGradient)" opacity="0.8" />
                <circle cx="65" cy="30" r="4" fill="url(#accentGradient)" opacity="0.6" />
              </g>

              <g transform="translate(100, 35)">
                <text
                  x="0"
                  y="35"
                  fontFamily="Arial, Helvetica, sans-serif"
                  fontSize="42"
                  fontWeight="700"
                  fill="url(#mainGradient)"
                  filter="url(#shadow)"
                >
                  NOLIA
                </text>

                <text
                  x="2"
                  y="55"
                  fontFamily="Arial, Helvetica, sans-serif"
                  fontSize="12"
                  fontWeight="400"
                  fill="#64748b"
                  opacity="0.8"
                >
                  DIGITAL SOLUTIONS
                </text>
              </g>

              <g transform="translate(270, 30)">
                <rect x="0" y="0" width="3" height="25" fill="url(#accentGradient)" rx="1.5" />
                <rect x="6" y="8" width="3" height="17" fill="url(#accentGradient)" rx="1.5" opacity="0.7" />
                <rect x="12" y="15" width="3" height="10" fill="url(#accentGradient)" rx="1.5" opacity="0.4" />
              </g>
            </svg>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Accueil
          </Link>
          <button
            onClick={scrollToServices}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Nos services
          </button>
          <Link href="/ai" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            AI
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            À propos
          </Link>
          <Link href="/clients" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Clients
          </Link>
          <a
            href="https://noliaformation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Nos Formations
          </a>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center">
          <Link href="/devis">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium">
              Demander mon devis
            </Button>
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <button
              onClick={scrollToServices}
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer py-2 text-left w-full"
            >
              Nos services
            </button>
            <Link
              href="/ai"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              AI
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/clients"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <a
              href="https://noliaformation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos Formations
            </a>
            <Link
              href="/contact"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link href="/devis" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium">
                  Demander mon devis
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
