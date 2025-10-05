'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    title: 'Bold Black Floral Bathroom',
    category: 'Bathroom',
    style: 'Bohemian',
    image: '/images/Image.png',
  },
  {
    title: 'Modern Bathroom with Natural Stone',
    category: 'Bathroom',
    style: 'Minimalist & Modern',
    image: '/images/1499363561776924735.jpg',
  },
  {
    title: 'Bohemian Living Space with Terracotta',
    category: 'Fireplace',
    style: 'Bohemian',
    image: '/images/Gemini_Generated_Image_igjyhtigjyhtigjy.png',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-raisin-black mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-raisin-black/70 max-w-2xl mx-auto">
            Explore curated transformations that showcase the power of expert tile selection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] mb-4 rounded-sm overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-wider text-philippine-gold font-medium">
                  {project.category} · {project.style}
                </p>
                <h3 className="text-xl font-serif text-raisin-black group-hover:text-philippine-gold transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-block px-8 py-4 border border-raisin-black text-raisin-black font-medium rounded-sm hover:bg-raisin-black hover:text-alabaster transition-colors duration-300"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
