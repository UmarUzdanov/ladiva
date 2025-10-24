'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPage() {
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
            Exceptional Service,
            <br />
            <span className="text-philippine-gold">Remarkable Results</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-raisin-black/70 leading-relaxed max-w-3xl mx-auto font-light"
          >
            From consultation to completion, a refined process designed for discerning clients.
          </motion.p>
        </div>
      </section>

      {/* Service 1: Design Consultation */}
      <section className="px-4 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/images/design_consultation.png"
                  alt="Design Consultation"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="text-6xl font-serif text-philippine-gold">01</div>
              <h2 className="text-4xl md:text-5xl font-serif text-raisin-black">
                Design Consultation
              </h2>
              <p className="text-lg text-raisin-black/70 leading-relaxed font-light">
                In-home or virtual sessions where we explore your vision, assess functional requirements, and develop a strategic approach to tile selection. Access to exclusive Architessa collections included.
              </p>
              <p className="text-2xl font-serif text-raisin-black">Starting at $500</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 2: Showroom Experience */}
      <section className="px-4 mb-40 py-32 bg-alabaster">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="space-y-6">
                <div className="text-6xl font-serif text-philippine-gold">02</div>
                <h2 className="text-4xl md:text-5xl font-serif text-raisin-black">
                  Showroom Experience
                </h2>
                <p className="text-lg text-raisin-black/70 leading-relaxed font-light">
                  Guided tours through Architessa&apos;s premium showrooms. Touch, compare, and experience materials firsthand with expert guidance to ensure your selections exceed expectations.
                </p>
                <p className="text-2xl font-serif text-raisin-black">Complimentary with consultation</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/images/showroom_exp.png"
                  alt="Showroom Experience"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 3: Full-Service Design */}
      <section className="px-4 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/images/fullservice.png"
                  alt="Full-Service Design"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="text-6xl font-serif text-philippine-gold">03</div>
              <h2 className="text-4xl md:text-5xl font-serif text-raisin-black">
                Full-Service Design
              </h2>
              <p className="text-lg text-raisin-black/70 leading-relaxed font-light">
                Complete design service from concept through installation. Detailed layouts, custom specifications, contractor coordination, and quality assurance throughout the entire process.
              </p>
              <p className="text-2xl font-serif text-raisin-black">Custom pricing</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline with Visual */}
      <section className="px-4 mb-40 py-32 bg-alabaster">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif text-raisin-black mb-6">
              The Process
            </h2>
            <p className="text-xl text-raisin-black/60 max-w-2xl mx-auto font-light">
              A refined timeline designed for exceptional outcomes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-sm overflow-hidden"
          >
            <Image
              src="/images/tipical_project.png"
              alt="Typical Project Timeline"
              width={1400}
              height={600}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-24"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-raisin-black mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-raisin-black/60 mb-12 max-w-2xl mx-auto font-light">
              Schedule a consultation to discuss your tile design needs and explore how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-philippine-gold text-alabaster font-medium rounded-sm hover:bg-dark-bronze transition-all duration-300 hover:shadow-lg text-lg"
            >
              Schedule Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
