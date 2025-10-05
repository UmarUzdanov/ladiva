'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/data'

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>('All')

  const categories = ['All', 'Kitchen', 'Bathroom', 'Fireplace', 'Backsplash', 'Laundry Room']
  const styles = ['All', 'Farmhouse', 'Coastal', 'Minimalist & Modern', 'Mid-Century Modern', 'Bohemian']

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true
    return project.category === filter || project.style === filter
  })

  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 mb-40">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-serif text-raisin-black mb-8"
          >
            Curated
            <br />
            <span className="text-philippine-gold">Transformations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-raisin-black/70 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Discover how expert tile selection transforms spaces from ordinary to extraordinary.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {[...categories, ...styles.filter((s) => s !== 'All')].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-sm text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-philippine-gold text-alabaster shadow-lg'
                    : 'bg-alabaster text-raisin-black hover:bg-philippine-gold/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={`/portfolio/${project.slug}`} className="group block">
                  <div className="aspect-[4/5] mb-6 rounded-sm overflow-hidden relative">
                    <Image
                      src={project.images.after}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-wider text-philippine-gold font-medium">
                      {project.category} · {project.style}
                    </p>
                    <h3 className="text-2xl font-serif text-raisin-black group-hover:text-philippine-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-raisin-black/60 line-clamp-2 font-light">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
