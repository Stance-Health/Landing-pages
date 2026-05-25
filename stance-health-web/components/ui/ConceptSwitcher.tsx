"use client"
import React, { useState } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const CONCEPTS = [
  { id: 'championship', label: 'Championship Recovery', theme: 'bg-[#cff065] text-[#293500]' },
  { id: 'blueprint', label: 'The Blueprint', theme: 'bg-[#132644] text-white' },
  { id: 'bio-scanner', label: 'The Bio-Scanner', theme: 'bg-lime text-black' },
  { id: 'kinetic-flow', label: 'Kinetic Flow', theme: 'bg-[#addcec] text-[#132644]' },
  { id: 'neo-human', label: 'Neo-Human', theme: 'bg-white text-black' },
]

export function ConceptSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const currentConcept = searchParams.get('concept') || 'neo-human'

  const switchConcept = (id: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('concept', id)
    router.push(`${pathname}?${params.toString()}`)
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 bg-near-black border border-white/10 p-2 shadow-2xl min-w-[240px]"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 p-4 border-b border-white/5 mb-2">Select Design Concept</p>
            <div className="flex flex-col gap-1">
              {CONCEPTS.map((concept) => (
                <button
                  key={concept.id}
                  onClick={() => switchConcept(concept.id)}
                  className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                    currentConcept === concept.id
                      ? `${concept.theme} scale-105 shadow-xl`
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {concept.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-lime text-black shadow-[0_0_30px_rgba(221,254,113,0.3)] flex items-center justify-center group active:scale-95 transition-all"
      >
        <div className="relative w-6 h-6">
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="absolute top-0 left-0 w-full h-1 bg-current"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="absolute top-[10px] left-0 w-full h-1 bg-current"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="absolute bottom-0 left-0 w-full h-1 bg-current"
          />
        </div>
      </button>
    </div>
  )
}
