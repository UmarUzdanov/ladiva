'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Sparkles, CheckCircle2, Share2, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { quizQuestions, projects } from '@/lib/data'

type StyleCount = {
  [key: string]: number
}

// Image mapping for quiz questions
const quizImages: Record<number, Record<string, string>> = {
  0: { // Question 1 - Color palettes
    'Farmhouse': '/architessa_images_downloaded/farmhouse-farmhouse-architessa.jpg',
    'Coastal': '/architessa_images_downloaded/coastal-coastal-architessa.jpg',
    'Minimalist & Modern': '/architessa_images_downloaded/minimalist-minimalist-architessa.webp',
    'Mid-Century Modern': '/architessa_images_downloaded/mid-century-modern-mid-century-modern-architessa.png',
    'Bohemian': '/architessa_images_downloaded/bohemian-bohemian-architessa.jpg'
  },
  1: { // Question 2 - Patterns
    'Farmhouse': '/architessa_images_downloaded/subway-tile-subway-tile-architessa.jpg',
    'Coastal': '/architessa_images_downloaded/pebble-tile-pebble-tile-architessa.webp',
    'Minimalist & Modern': '/architessa_images_downloaded/porcelain-slabs-panels-porcelain-slabs-panels-architessa.jpg',
    'Mid-Century Modern': '/architessa_images_downloaded/hexagon-hexagon.png',
    'Bohemian': '/architessa_images_downloaded/zellige-look-zellige-look-architessa.jpg'
  },
  2: { // Question 3 - Textures
    'Farmhouse': '/architessa_images_downloaded/ceramic-ceramic-architessa.webp',
    'Coastal': '/architessa_images_downloaded/natural-stone-natural-stone-architessa.webp',
    'Minimalist & Modern': '/architessa_images_downloaded/marble-look-marble-look-architessa.jpg',
    'Mid-Century Modern': '/architessa_images_downloaded/wood-look-wood-look-architessa.jpg',
    'Bohemian': '/architessa_images_downloaded/dimensional-3d-dimensional-3d-architessa.jpg'
  },
  3: { // Question 4 - Space descriptions
    'Farmhouse': '/architessa_images_downloaded/farmhouse-farmhouse-architessa.jpg',
    'Coastal': '/architessa_images_downloaded/coastal-coastal-architessa.jpg',
    'Minimalist & Modern': '/architessa_images_downloaded/modern-modern-architessa.jpg',
    'Mid-Century Modern': '/architessa_images_downloaded/contemporary-contemporary-architessa.jpg',
    'Bohemian': '/architessa_images_downloaded/bohemian-bohemian-architessa.jpg'
  },
  4: { // Question 5 - Material combinations
    'Farmhouse': '/architessa_images_downloaded/subway-tile-subway-tile-architessa.jpg',
    'Coastal': '/architessa_images_downloaded/glass-tile-glass-tile-architessa.webp',
    'Minimalist & Modern': '/architessa_images_downloaded/porcelain-slabs-panels-porcelain-slabs-panels-architessa.jpg',
    'Mid-Century Modern': '/architessa_images_downloaded/wood-look-wood-look-architessa.jpg',
    'Bohemian': '/architessa_images_downloaded/terracotta-cotto-look-terracotta-cotto-look-architessa.jpg'
  }
}

export default function QuizPage() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<StyleCount>({})
  const [showResults, setShowResults] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('quizProgress')
    if (saved) {
      try {
        const { answers: savedAnswers, currentQuestion: savedQuestion, showResults: savedShowResults } = JSON.parse(saved)
        if (savedAnswers && Object.keys(savedAnswers).length > 0) {
          setAnswers(savedAnswers)
          setCurrentQuestion(savedQuestion || 0)
          setShowResults(savedShowResults || false)
          setShowWelcome(false)
        }
      } catch (e) {
        console.error('Failed to load quiz progress')
      }
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    if (!showWelcome && Object.keys(answers).length > 0) {
      localStorage.setItem('quizProgress', JSON.stringify({ answers, currentQuestion, showResults }))
    }
  }, [answers, currentQuestion, showResults, showWelcome])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showWelcome || showResults) return

      if (e.key === 'ArrowLeft' && currentQuestion > 0) {
        setCurrentQuestion(prev => prev - 1)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentQuestion, showWelcome, showResults])

  const handleAnswer = (style: string, index: number) => {
    setSelectedOption(index)

    setTimeout(() => {
      setAnswers((prev) => ({
        ...prev,
        [style]: (prev[style] || 0) + 1,
      }))

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        setShowResults(true)
        setSelectedOption(null)
      }
    }, 600)
  }

  const getDominantStyle = () => {
    const entries = Object.entries(answers)
    if (entries.length === 0) return 'Minimalist & Modern'
    return entries.reduce((a, b) => (b[1] > a[1] ? b : a))[0]
  }

  const getStyleBreakdown = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0)
    return Object.entries(answers)
      .map(([style, count]) => ({
        style,
        count,
        percentage: Math.round((count / total) * 100)
      }))
      .sort((a, b) => b.count - a.count)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setShowWelcome(true)
    setSelectedOption(null)
    localStorage.removeItem('quizProgress')
  }

  const getMatchingProjects = (style: string) => {
    return projects.filter(p => p.style === style).slice(0, 3)
  }

  // Welcome Screen
  if (showWelcome) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-philippine-gold/10 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-philippine-gold" />
              <span className="text-sm font-medium text-philippine-gold">Style Discovery Quiz</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-raisin-black mb-6">
              Discover Your
              <br />
              <span className="text-philippine-gold">Perfect Tile Style</span>
            </h1>

            <p className="text-xl md:text-2xl text-raisin-black/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Answer 5 curated questions to reveal your design aesthetic and get personalized tile recommendations from our expert collection.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-serif text-philippine-gold mb-2">5</div>
                <div className="text-sm text-raisin-black/60">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif text-philippine-gold mb-2">2</div>
                <div className="text-sm text-raisin-black/60">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif text-philippine-gold mb-2">1</div>
                <div className="text-sm text-raisin-black/60">Perfect Style</div>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-4 mb-16 max-w-4xl mx-auto">
              {[
                { name: 'Farmhouse', image: '/architessa_images_downloaded/farmhouse-farmhouse-architessa.jpg' },
                { name: 'Coastal', image: '/architessa_images_downloaded/coastal-coastal-architessa.jpg' },
                { name: 'Minimalist', image: '/architessa_images_downloaded/minimalist-minimalist-architessa.webp' },
                { name: 'Mid-Century', image: '/architessa_images_downloaded/mid-century-modern-mid-century-modern-architessa.png' },
                { name: 'Bohemian', image: '/architessa_images_downloaded/bohemian-bohemian-architessa.jpg' }
              ].map((style) => (
                <div key={style.name} className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-raisin-black/70 to-transparent flex items-end justify-center p-3">
                    <span className="text-alabaster text-sm font-medium">{style.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowWelcome(false)}
              className="inline-flex items-center gap-2 px-12 py-5 bg-philippine-gold text-alabaster font-medium text-lg rounded-sm hover:bg-dark-bronze transition-all duration-300 hover:shadow-lg"
            >
              Start Your Journey
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </main>
    )
  }

  // Results Screen
  if (showResults) {
    const dominantStyle = getDominantStyle()
    const breakdown = getStyleBreakdown()
    const matchingProjects = getMatchingProjects(dominantStyle)

    const styleDescriptions: Record<string, string> = {
      'Farmhouse': 'warm, rustic charm with handcrafted materials and timeless appeal',
      'Coastal': 'light, airy spaces with natural textures and serene ocean-inspired palettes',
      'Minimalist & Modern': 'clean lines, sophisticated simplicity, and refined elegance',
      'Mid-Century Modern': 'retro geometry, organic forms, and timeless mid-century aesthetics',
      'Bohemian': 'eclectic patterns, global influences, and layered artisan textures'
    }

    return (
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Confetti Effect */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-philippine-gold/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-philippine-gold" />
                <span className="text-sm font-medium text-philippine-gold">Your Results Are Ready</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-serif text-raisin-black mb-4">
                Your Style Is
              </h1>
              <h2 className="text-5xl md:text-7xl font-serif text-philippine-gold mb-8">
                {dominantStyle}
              </h2>
            </motion.div>


            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <h3 className="text-2xl font-serif text-raisin-black mb-4">About Your Style</h3>
                <p className="text-lg text-raisin-black/70 leading-relaxed mb-6">
                  Based on your preferences, you have a strong affinity for <strong>{dominantStyle.toLowerCase()}</strong> aesthetics.
                  This style emphasizes {styleDescriptions[dominantStyle]}.
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-serif text-raisin-black">Perfect For:</h4>
                  <ul className="space-y-2 text-raisin-black/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-philippine-gold flex-shrink-0 mt-0.5" />
                      <span>Homeowners seeking {dominantStyle.toLowerCase()} design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-philippine-gold flex-shrink-0 mt-0.5" />
                      <span>Spaces that value authenticity and character</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-philippine-gold flex-shrink-0 mt-0.5" />
                      <span>Projects prioritizing timeless appeal</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Style Breakdown */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-6">
                  <BarChart3 className="w-5 h-5 text-philippine-gold" />
                  <h3 className="text-2xl font-serif text-raisin-black">Your Style Mix</h3>
                </div>

                <div className="space-y-4">
                  {breakdown.map((item, index) => (
                    <div key={item.style}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-raisin-black">{item.style}</span>
                        <span className="text-sm text-philippine-gold font-medium">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-alabaster rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className={`h-full ${index === 0 ? 'bg-philippine-gold' : 'bg-urobilin'}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/portfolio"
                className="px-10 py-5 bg-philippine-gold text-alabaster font-medium text-lg rounded-sm hover:bg-dark-bronze transition-all duration-300 hover:shadow-lg"
              >
                Explore {dominantStyle} Portfolio
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 border-2 border-raisin-black text-raisin-black font-medium text-lg rounded-sm hover:bg-raisin-black hover:text-alabaster transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <button
                onClick={resetQuiz}
                className="px-8 py-4 text-raisin-black/60 font-medium hover:text-raisin-black transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    )
  }

  // Quiz Questions
  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-raisin-black/60">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-philippine-gold">{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-2 bg-white rounded-full overflow-hidden shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-philippine-gold to-urobilin"
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-raisin-black mb-16 text-center max-w-3xl mx-auto">
              {question.question}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {question.options.map((option, index) => {
                const imageUrl = quizImages[currentQuestion]?.[option.style]
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => handleAnswer(option.style, index)}
                    disabled={selectedOption !== null}
                    className={`group relative w-full bg-white rounded-lg overflow-hidden border-2 transition-all duration-300
                      ${selectedOption === index
                        ? 'border-philippine-gold shadow-lg scale-[1.02]'
                        : 'border-transparent hover:border-philippine-gold/50 hover:shadow-md'
                      }
                      ${selectedOption !== null && selectedOption !== index ? 'opacity-50' : ''}
                    `}
                  >
                    {imageUrl && (
                      <div className="relative w-full aspect-[4/3]">
                        <Image
                          src={imageUrl}
                          alt={option.style}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between gap-4 p-6">
                      <span className="text-lg md:text-xl text-raisin-black group-hover:text-philippine-gold transition-colors text-left">
                        {option.label}
                      </span>

                      {selectedOption === index ? (
                        <CheckCircle2 className="w-6 h-6 text-philippine-gold flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-raisin-black/30 group-hover:text-philippine-gold group-hover:translate-x-1 transition-all flex-shrink-0" />
                      )}
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {currentQuestion > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => {
              setCurrentQuestion(currentQuestion - 1)
              setSelectedOption(null)
            }}
            disabled={selectedOption !== null}
            className="mt-16 flex items-center gap-2 text-raisin-black/60 hover:text-raisin-black transition-colors disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Previous Question</span>
          </motion.button>
        )}
      </div>
    </main>
  )
}