import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sudha Nunna | Full-Stack Developer",
  description:
    "Portfolio of Sudha Nunna — Full-Stack Developer proficient in Python, HTML, CSS, JavaScript, React, and SQL. Explore projects, experience, skills, and contact details.",
  generator: "v0.app",
  keywords: [
    "Sudha Nunna",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Portfolio",
  ],
  openGraph: {
    title: "Sudha Nunna | Full-Stack Developer",
    description: "Explore projects, experience, and skills in full-stack development by Sudha Nunna.",
    url: "https://v0.app",
    siteName: "Sudha Nunna Portfolio",
    type: "website",
  },
  metadataBase: new URL("https://v0.app"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
