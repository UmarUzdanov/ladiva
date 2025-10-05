'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function LearnPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-serif text-raisin-black mb-8"
          >
            The Art of
            <br />
            <span className="text-philippine-gold">Tile Selection</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-raisin-black/70 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Years of expertise distilled into a simple framework that transforms tile selection from overwhelming to inspired.
          </motion.p>
        </div>
      </section>

      {/* Framework Section */}
      <section className="px-4 mb-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-serif text-raisin-black mb-6">
              The Framework
            </h2>
            <p className="text-2xl text-philippine-gold font-light">
              Function → Style → Look
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[16/9] rounded-sm overflow-hidden relative mb-16"
          >
            <Image
              src="/images/Gemini_Generated_Image_21dlum21dlum21dl.png"
              alt="Function Style Look Framework"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-6xl font-serif text-philippine-gold mb-6">01</div>
              <h3 className="text-2xl font-serif text-raisin-black mb-4">Function</h3>
              <p className="text-raisin-black/70 leading-relaxed">
                Water resistance, heat tolerance, slip safety. Define your technical requirements first.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-6xl font-serif text-philippine-gold mb-6">02</div>
              <h3 className="text-2xl font-serif text-raisin-black mb-4">Style</h3>
              <p className="text-raisin-black/70 leading-relaxed">
                Your aesthetic vision. From farmhouse charm to minimalist sophistication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="text-6xl font-serif text-philippine-gold mb-6">03</div>
              <h3 className="text-2xl font-serif text-raisin-black mb-4">Look</h3>
              <p className="text-raisin-black/70 leading-relaxed">
                The perfect tiles that marry function and beauty for your unique space.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tile Gallery */}
      <section className="px-4 mb-40 py-32 bg-alabaster">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-serif text-raisin-black mb-6">
              Explore Possibilities
            </h2>
            <p className="text-xl text-raisin-black/60 max-w-2xl mx-auto font-light">
              A curated collection of patterns, textures, and materials to inspire your vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { image: '/images/Gemini_Generated_Image_6qhcx26qhcx26qhc.png', title: 'Pattern & Layout' },
              { image: '/images/Gemini_Generated_Image_i35ry9i35ry9i35r.png', title: 'Style Inspiration' },
              { image: '/images/Gemini_Generated_Image_b9tmxpb9tmxpb9tm.png', title: 'Texture & Finish' },
              { image: '/images/Gemini_Generated_Image_j1jakvj1jakvj1ja.png', title: 'Color Harmony' },
              { image: '/images/Gemini_Generated_Image_cruteocruteocrut.png', title: 'Material Selection' },
              { image: '/images/Gemini_Generated_Image_uz0zlbuz0zlbuz0z.png', title: 'Installation Artistry' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-sm overflow-hidden relative mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-serif text-raisin-black group-hover:text-philippine-gold transition-colors duration-300">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
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
              Let&apos;s Create Something Beautiful
            </h2>
            <p className="text-xl text-raisin-black/60 mb-12 max-w-2xl mx-auto font-light">
              Expert guidance from vision to installation
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/services"
                className="inline-block px-10 py-5 bg-philippine-gold text-alabaster font-medium text-lg rounded-sm hover:bg-dark-bronze transition-all duration-300 hover:shadow-lg"
              >
                Work With Me
              </Link>
              <Link
                href="/quiz"
                className="inline-block px-10 py-5 border-2 border-raisin-black text-raisin-black font-medium text-lg rounded-sm hover:bg-raisin-black hover:text-alabaster transition-all duration-300"
              >
                Discover Your Style
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
