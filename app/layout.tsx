import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import TerminalPreloader from "@/components/terminal-preloader"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Narinder Dhiman - Frontend Developer | React.js & Next.js Expert",
  description:
    "Professional Frontend Developer with 3+ years experience in React.js, Next.js, GSAP animations, and modern web technologies. Specializing in AI integrations, Supabase backends, and galaxy-themed digital experiences.",
  keywords: [
    "Frontend Developer",
    "React.js Developer",
    "Next.js Expert",
    "GSAP Animations",
    "Supabase Integration",
    "Node.js Backend",
    "WordPress Development",
    "Shopify Extensions",
    "AI Chatbot Development",
    "Portfolio Website",
    "Web Developer India",
    "Himachal Pradesh Developer",
  ],
  authors: [{ name: "Narinder Dhiman", url: "https://narinderdhiman.dev" }],
  creator: "Narinder Dhiman",
  publisher: "Narinder Dhiman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://narinderdhiman.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Narinder Dhiman - Frontend Developer | React.js & Next.js Expert",
    description:
      "Professional Frontend Developer with 3+ years experience in React.js, Next.js, GSAP animations, and modern web technologies.",
    url: "https://narinderdhiman.dev",
    siteName: "Narinder Dhiman Portfolio",
    images: [
      {
        url: "/images/profiler.jpg",
        width: 1200,
        height: 630,
        alt: "Narinder Dhiman - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narinder Dhiman - Frontend Developer",
    description: "Professional Frontend Developer specializing in React.js, Next.js, and modern web technologies.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark theme-emerald">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#059669" />
        <meta name="color-scheme" content="dark light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        style={{ fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"' }}
      >
        <TerminalPreloader />
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Narinder Dhiman",
              jobTitle: "Frontend Developer",
              description:
                "Professional Frontend Developer with 3+ years experience in React.js, Next.js, and modern web technologies",
              url: "https://narinderdhiman.dev",
              image: "https://narinderdhiman.dev/images/profile.jpg",
              sameAs: ["https://github.com/narinderdhiman", "https://linkedin.com/in/narinderdhiman"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Una",
                addressRegion: "Himachal Pradesh",
                addressCountry: "India",
              },
              email: "dhimannarinder746@gmail.com",
              telephone: "+91-8278747969",
              knowsAbout: [
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "GSAP Animations",
                "Supabase",
                "WordPress",
                "Shopify Development",
                "AI Integration",
                "Frontend Development",
                "Web Development",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "HP Board",
              },
              worksFor: {
                "@type": "Organization",
                name: "Block Coders Company",
                startDate: "2022-01-17",
                endDate: "2025-01-13",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
