'use client'

import { motion } from 'framer-motion'
import { Layers, Palette, Eye } from 'lucide-react'

const steps = [
  {
    icon: Layers,
    title: 'Function',
    description: 'Understanding your space practical needs and requirements',
  },
  {
    icon: Palette,
    title: 'Style',
    description: 'Defining your aesthetic and design preferences',
  },
  {
    icon: Eye,
    title: 'Look',
    description: 'Selecting the perfect tiles that bring your vision to life',
  },
]

export default function ProcessSteps() {
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
            A Simple, Sophisticated Process
          </h2>
          <p className="text-lg text-raisin-black/70 max-w-2xl mx-auto">
            Three strategic steps to transform your tile selection from overwhelming to inspiring
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-urobilin/10 flex items-center justify-center">
                <step.icon className="w-10 h-10 text-philippine-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-raisin-black mb-3">
                {step.title}
              </h3>
              <p className="text-raisin-black/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
