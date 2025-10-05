'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-40">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-serif text-raisin-black mb-8"
          >
            Expertise Meets
            <br />
            <span className="text-philippine-gold">Artistry</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-raisin-black/70 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Transforming complexity into clarity through sophisticated design consultation and exclusive partnerships.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden relative">
                <Image
                  src="/images/1499363561776924735.jpg"
                  alt="Luxury Tile Design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-raisin-black leading-tight">
                Transforming Vision
                <br />
                Into Reality
              </h2>
              <div className="space-y-6 text-lg text-raisin-black/70 leading-relaxed font-light">
                <p>
                  The tile selection process overwhelms most homeowners. Thousands of options, conflicting advice, and technical requirements create paralysis rather than inspiration.
                </p>
                <p>
                  Through my exclusive partnership with Architessa, I&apos;ve developed a refined framework that transforms this complexity into clarity—guiding you from uncertainty to confident, beautiful decisions.
                </p>
                <p>
                  Every space tells a story. My role is to ensure yours is both timeless and authentically yours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 mb-40 py-32 bg-alabaster">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-serif text-raisin-black mb-6">
              The Approach
            </h2>
            <p className="text-xl text-raisin-black/60 max-w-2xl mx-auto font-light">
              Sophisticated design rooted in proven principles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            {[
              {
                number: '01',
                title: 'Function',
                description: 'Technical requirements define the foundation. Water resistance, durability, heat tolerance—these aren&apos;t constraints, they&apos;re design parameters.',
              },
              {
                number: '02',
                title: 'Refinement',
                description: 'Through Architessa, access to premium materials that meet exacting standards. Quality is non-negotiable.',
              },
              {
                number: '03',
                title: 'Collaboration',
                description: 'Your vision, my expertise. Together we create spaces that are both timeless and distinctly yours.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-6xl font-serif text-philippine-gold mb-6">{item.number}</div>
                <h3 className="text-2xl font-serif text-raisin-black mb-4">{item.title}</h3>
                <p className="text-raisin-black/70 leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architessa Partnership */}
      <section className="px-4 mb-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif text-raisin-black mb-6">
              Architessa Partnership
            </h2>
            <p className="text-xl text-raisin-black/60 max-w-3xl mx-auto font-light">
              Exclusive access to premium showrooms and curated collections across the East Coast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[21/9] rounded-sm overflow-hidden relative"
          >
            <Image
              src="/images/architessa_storefront_dc.webp"
              alt="Architessa Showroom"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-24"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-raisin-black mb-8">
              Let&apos;s Begin Your Project
            </h2>
            <p className="text-xl text-raisin-black/60 mb-12 max-w-2xl mx-auto font-light">
              From consultation to completion, exceptional results
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/services"
                className="inline-block px-10 py-5 bg-philippine-gold text-alabaster font-medium text-lg rounded-sm hover:bg-dark-bronze transition-all duration-300 hover:shadow-lg"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="inline-block px-10 py-5 border-2 border-raisin-black text-raisin-black font-medium text-lg rounded-sm hover:bg-raisin-black hover:text-alabaster transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
