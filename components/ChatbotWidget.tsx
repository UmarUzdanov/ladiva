'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Button - Only visible when closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-philippine-gold hover:bg-dark-bronze text-alabaster rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[680px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
          >
            {/* iPhone-like frame */}
            <div className="w-full h-full relative">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-raisin-black/80 hover:bg-raisin-black text-alabaster transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Iframe */}
              <iframe
                src="https://marianna.aiproassistant.ai/"
                className="w-full h-full rounded-[2.5rem]"
                title="Marianna AI Assistant"
                allow="microphone; camera"
                style={{
                  border: 'none',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
