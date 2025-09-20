import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { DM_Sans } from "next/font/google"
import { Header } from "@/components/header"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "NOLIA - Agence Digitale Moderne",
  description: "Agence digitale spécialisée en acquisition digitale, développement web et formations",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
