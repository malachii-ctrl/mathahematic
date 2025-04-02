import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EquaSolv.ai | Advanced Mathematics Learning Platform",
  description: "Master mathematics with personalized AI tutoring tailored to SEA, CSEC, and CAPE curricula.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'