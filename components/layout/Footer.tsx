import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-raisin-black text-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif font-bold mb-4">Marianna Ouzdanova</h2>
            <p className="text-alabaster/70 mb-6 leading-relaxed">
              Expert tile design consultation for discerning homeowners.
              Architessa partnership providing exclusive access to premium tile collections.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-alabaster/10 flex items-center justify-center hover:bg-philippine-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-alabaster/10 flex items-center justify-center hover:bg-philippine-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-alabaster/10 flex items-center justify-center hover:bg-philippine-gold transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:marianna@ladiva-tiles.com"
                className="w-10 h-10 rounded-full bg-alabaster/10 flex items-center justify-center hover:bg-philippine-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-alabaster/70 hover:text-philippine-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-alabaster/70 hover:text-philippine-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-alabaster/70 hover:text-philippine-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-alabaster/70 hover:text-philippine-gold transition-colors">
                  Learning Center
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-alabaster/70 hover:text-philippine-gold transition-colors">
                  Style Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-alabaster/70">
              <li>
                <a href="mailto:marianna@ladiva-tiles.com" className="hover:text-philippine-gold transition-colors">
                  marianna@ladiva-tiles.com
                </a>
              </li>
              <li>
                <a href="tel:+18663231322" className="hover:text-philippine-gold transition-colors">
                  (866) 323-1322
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="text-philippine-gold hover:text-urobilin transition-colors font-medium">
                  Schedule Consultation →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-alabaster/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-alabaster/60 text-sm">
              © {currentYear} Marianna Ouzdanova. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-alabaster/60">
              <Link href="/privacy" className="hover:text-alabaster transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-alabaster transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
