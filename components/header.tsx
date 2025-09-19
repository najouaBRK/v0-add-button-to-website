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
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              NOLIA
            </span>
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
