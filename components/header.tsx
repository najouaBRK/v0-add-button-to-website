"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // If not on homepage, navigate to homepage first then scroll
      router.push("/#services-section")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                NOLIA
              </span>
              <span className="text-xs font-medium text-gray-500 tracking-wider uppercase">Digital Solutions</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Accueil
          </Link>
          <Link href="/expertise" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Expertise
          </Link>
          <button
            onClick={scrollToServices}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Nos services
          </button>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            À propos
          </Link>
          <Link href="/clients" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Clients
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium">
            Demander mon devis
          </Button>
        </div>
      </div>
    </header>
  )
}
