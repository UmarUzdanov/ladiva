'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Gemini_Generated_Image_fg8youfg8youfg8y.png"
          alt="Luxury tile design"
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
      </div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-raisin-black mb-6"
        >
          Your Tile Vision,
          <br />
          <span className="text-philippine-gold">Expertly Guided</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-raisin-black/80 max-w-3xl mx-auto mb-12 font-light"
        >
          From overwhelmed to inspired. Sophisticated tile design consultation
          <br className="hidden md:block" />
          for discerning homeowners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/quiz"
            className="px-8 py-4 bg-philippine-gold text-alabaster font-medium rounded-sm hover:bg-dark-bronze transition-colors duration-300"
          >
            Start Your Tile Journey
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 border border-raisin-black text-raisin-black font-medium rounded-sm hover:bg-raisin-black hover:text-alabaster transition-colors duration-300"
          >
            View Portfolio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-raisin-black/50 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
