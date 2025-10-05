'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { showrooms } from '@/lib/data'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: '',
    timeline: '',
    budget: '',
    location: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            Begin Your
            <br />
            <span className="text-philippine-gold">Transformation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-raisin-black/70 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Share your vision and I&apos;ll guide you through creating a beautiful, functional tile design.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-4 mb-40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-raisin-black mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-raisin-black/20 rounded-sm focus:outline-none focus:border-philippine-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-raisin-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-raisin-black/20 rounded-sm focus:outline-none focus:border-philippine-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-raisin-black mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-raisin-black/20 rounded-sm focus:outline-none focus:border-philippine-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="roomType" className="block text-sm font-medium text-raisin-black mb-2">
                    Room Type *
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    required
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-raisin-black/20 rounded-sm focus:outline-none focus:border-philippine-gold transition-colors"
                  >
                    <option value="">Select room type</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Bathroom">Bathroom</option>
                    <option value="Backsplash">Backsplash</option>
                    <option value="Fireplace">Fireplace</option>
                    <option value="Laundry Room">Laundry Room</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-raisin-black mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-raisin-black/20 rounded-sm focus:outline-none focus:border-philippine-gold transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="Immediate">Immediate (1-2 months)</option>
                    <option value="Near-term">Near-term (3-6 months)</option>
                    <option value="Planning">Planning (6+ months)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-raisin-black mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-raisin-black/20 rounded-sm focus:outline-none focus:border-philippine-gold transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under $5k">Under $5,000</option>
                    <option value="$5k-$15k">$5,000 - $15,000</option>
                    <option value="$15k-$30k">$15,000 - $30,000</option>
                    <option value="$30k+">$30,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-raisin-black mb-2">
                  Location (City, State)
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-raisin-black/20 rounded-sm focus:outline-none focus:border-philippine-gold transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-raisin-black mb-2">
                  Tell me about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-raisin-black/20 rounded-sm focus:outline-none focus:border-philippine-gold transition-colors resize-none"
                  placeholder="Share your vision, challenges, and what you hope to achieve..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-philippine-gold text-alabaster font-medium text-lg rounded-sm hover:bg-dark-bronze transition-all duration-300 hover:shadow-lg"
              >
                Submit Inquiry
              </button>

              <p className="text-sm text-raisin-black/60 text-center font-light">
                Typical response time: 24-48 hours
              </p>
            </form>
          </motion.div>

          {/* Contact Info & Showrooms */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Direct Contact */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-raisin-black mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wider text-philippine-gold font-medium mb-2">Email</p>
                  <a href="mailto:marianna@ladiva-tiles.com" className="text-lg text-raisin-black hover:text-philippine-gold transition-colors">
                    marianna@ladiva-tiles.com
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-philippine-gold font-medium mb-2">Phone</p>
                  <a href="tel:+18663231322" className="text-lg text-raisin-black hover:text-philippine-gold transition-colors">
                    (866) 323-1322
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-philippine-gold font-medium mb-2">Availability</p>
                  <p className="text-lg text-raisin-black/70 font-light">Monday - Friday, 8am - 5pm EST</p>
                </div>
              </div>
            </div>

            {/* Showroom Locations */}
            <div className="pt-10 border-t border-raisin-black/10">
              <h2 className="text-3xl md:text-4xl font-serif text-raisin-black mb-8">Architessa Showrooms</h2>
              <div className="space-y-6 max-h-96 overflow-y-auto">
                {showrooms.map((showroom) => (
                  <div key={showroom.city} className="pb-6 border-b border-raisin-black/10 last:border-0">
                    <p className="font-medium text-raisin-black mb-2">
                      {showroom.city}, {showroom.state}
                    </p>
                    <p className="text-sm text-raisin-black/60 font-light mb-1">{showroom.address}</p>
                    <p className="text-sm text-philippine-gold">{showroom.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
