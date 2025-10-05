'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Learn', href: '/learn' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-alabaster'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-raisin-black">
              Marianna Ouzdanova
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-raisin-black hover:text-philippine-gold transition-colors uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/quiz"
              className="px-6 py-2 bg-philippine-gold text-alabaster text-sm font-medium rounded-sm hover:bg-dark-bronze transition-colors"
            >
              Style Quiz
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-raisin-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-raisin-black/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-raisin-black hover:text-philippine-gold transition-colors uppercase tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/quiz"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-philippine-gold text-alabaster text-sm font-medium rounded-sm hover:bg-dark-bronze transition-colors"
              >
                Style Quiz
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
