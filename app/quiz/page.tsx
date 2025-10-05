'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { quizQuestions } from '@/lib/data'

type StyleCount = {
  [key: string]: number
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<StyleCount>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (style: string) => {
    setAnswers((prev) => ({
      ...prev,
      [style]: (prev[style] || 0) + 1,
    }))

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const getDominantStyle = () => {
    const entries = Object.entries(answers)
    if (entries.length === 0) return 'Minimalist & Modern'
    return entries.reduce((a, b) => (b[1] > a[1] ? b : a))[0]
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const dominantStyle = getDominantStyle()

    return (
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-raisin-black mb-6">
              Your Style Is
            </h1>
            <h2 className="text-4xl md:text-5xl font-serif text-philippine-gold mb-8">
              {dominantStyle}
            </h2>

            <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
              <p className="text-lg text-raisin-black/70 leading-relaxed mb-6">
                Based on your preferences, you have a strong affinity for {dominantStyle.toLowerCase()} aesthetics.
                This style emphasizes {dominantStyle === 'Farmhouse' && 'warm, rustic charm with handcrafted materials'}
                {dominantStyle === 'Coastal' && 'light, airy spaces with natural textures'}
                {dominantStyle === 'Minimalist & Modern' && 'clean lines and sophisticated simplicity'}
                {dominantStyle === 'Mid-Century Modern' && 'retro geometry and organic forms'}
                {dominantStyle === 'Bohemian' && 'eclectic patterns and global influences'}.
              </p>

              <div className="space-y-4 text-left">
                <h3 className="text-xl font-serif text-raisin-black">Recommended for You:</h3>
                <ul className="space-y-2 text-raisin-black/70">
                  <li>• Explore our {dominantStyle} portfolio projects</li>
                  <li>• Visit Architessa showrooms to see curated collections</li>
                  <li>• Schedule a consultation to discuss your vision</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-philippine-gold text-alabaster font-medium rounded-sm hover:bg-dark-bronze transition-colors duration-300"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-raisin-black text-raisin-black font-medium rounded-sm hover:bg-raisin-black hover:text-alabaster transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
              <button
                onClick={resetQuiz}
                className="px-8 py-4 text-raisin-black/70 font-medium hover:text-raisin-black transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-raisin-black/60">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm text-raisin-black/60">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-philippine-gold"
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
            <h2 className="text-3xl md:text-4xl font-serif text-raisin-black mb-12 text-center">
              {question.question}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => handleAnswer(option.style)}
                  className="w-full p-6 bg-white rounded-lg text-left hover:bg-urobilin/5 hover:border-philippine-gold border-2 border-transparent transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-raisin-black group-hover:text-philippine-gold transition-colors">
                      {option.label}
                    </span>
                    <ChevronRight className="w-5 h-5 text-raisin-black/30 group-hover:text-philippine-gold group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {currentQuestion > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="mt-12 flex items-center gap-2 text-raisin-black/60 hover:text-raisin-black transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous Question
          </motion.button>
        )}
      </div>
    </main>
  )
}
