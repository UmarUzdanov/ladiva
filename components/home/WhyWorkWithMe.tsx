'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, Users, MapPin } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Professional design consultation backed by years of experience and a deep understanding of tile aesthetics.',
  },
  {
    icon: Sparkles,
    title: 'Architessa Partnership',
    description: 'Exclusive access to premium showrooms and curated tile collections from domestic and international sources.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Individual attention to your unique vision, functional needs, and aesthetic preferences.',
  },
  {
    icon: MapPin,
    title: 'East Coast Presence',
    description: 'Convenient showroom locations across Baltimore, Rockville, DC, Alexandria, Richmond, Vienna, Atlanta, and Tampa.',
  },
]

export default function WhyWorkWithMe() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-raisin-black mb-4">
            Why Work With Me
          </h2>
          <p className="text-lg text-raisin-black/70 max-w-2xl mx-auto">
            Experience the difference of expert-guided tile selection with Architessa partnership benefits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-urobilin/10 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-philippine-gold" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif text-raisin-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-raisin-black/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/quiz"
            className="inline-block px-10 py-5 bg-philippine-gold text-alabaster font-medium rounded-sm hover:bg-dark-bronze transition-colors duration-300 text-lg"
          >
            Start Your Tile Journey
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
