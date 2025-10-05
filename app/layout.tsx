import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ChatbotWidget from '@/components/ChatbotWidget'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Marianna Ouzdanova | Luxury Tile Design',
  description: 'Your Tile Vision, Expertly Guided. Sophisticated tile design consultation for discerning homeowners.',
  keywords: ['tile designer', 'luxury tile', 'interior design', 'Architessa', 'custom tile design'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-alabaster text-raisin-black">
        <Header />
        {children}
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  )
}
