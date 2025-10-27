'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/data'

type FilterItem = {
  name: string
  image: string
  type: 'category' | 'style'
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>('All')

  const filterOptions: FilterItem[] = [
    { name: 'All', image: '/architessa_images_downloaded/all-products.png', type: 'category' },
    { name: 'Kitchen', image: '/architessa_images_downloaded/kitchen.jpg', type: 'category' },
    { name: 'Bathroom', image: '/architessa_images_downloaded/bathroom-floor-bathroom-floor-architessa.png', type: 'category' },
    { name: 'Fireplace', image: '/architessa_images_downloaded/fireplace-surround-fireplace-surround-architessa.png', type: 'category' },
    { name: 'Backsplash', image: '/architessa_images_downloaded/backsplash-backsplash-architessa.png', type: 'category' },
    { name: 'Laundry Room', image: '/architessa_images_downloaded/all-interior-floor-all-interior-floor-architessa.png', type: 'category' },
    { name: 'Farmhouse', image: '/architessa_images_downloaded/farmhouse-farmhouse-architessa.jpg', type: 'style' },
    { name: 'Coastal', image: '/architessa_images_downloaded/coastal-coastal-architessa.jpg', type: 'style' },
    { name: 'Minimalist & Modern', image: '/architessa_images_downloaded/minimalist-minimalist-architessa.webp', type: 'style' },
    { name: 'Mid-Century Modern', image: '/architessa_images_downloaded/mid-century-modern-mid-century-modern-architessa.png', type: 'style' },
    { name: 'Bohemian', image: '/architessa_images_downloaded/bohemian-bohemian-architessa.jpg', type: 'style' },
  ]

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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filterOptions.map((option, index) => (
              <motion.button
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setFilter(option.name)}
                className={`group relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                  filter === option.name
                    ? 'ring-4 ring-philippine-gold shadow-xl scale-105'
                    : 'ring-2 ring-transparent hover:ring-philippine-gold/50 hover:shadow-lg'
                }`}
              >
                <Image
                  src={option.image}
                  alt={option.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-raisin-black/80 via-raisin-black/40 to-transparent flex items-end p-3 transition-opacity duration-300 ${
                  filter === option.name ? 'opacity-100' : 'opacity-90 group-hover:opacity-100'
                }`}>
                  <span className="text-white text-xs md:text-sm font-medium leading-tight">
                    {option.name}
                  </span>
                </div>
                {filter === option.name && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-6 h-6 bg-philippine-gold rounded-full flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                )}
              </motion.button>
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
