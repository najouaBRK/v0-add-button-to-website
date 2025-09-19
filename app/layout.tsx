import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nolia Website",
  description: "Site web Nolia créé avec v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children}</main>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
