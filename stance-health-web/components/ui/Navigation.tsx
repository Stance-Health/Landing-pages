"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navigation({ type = 'top' }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Back & Spine', href: '/back-spine' },
    { name: 'Knee Pain', href: '/knee-pain' },
    { name: 'Sports Injury', href: '/sports-injury' },
    { name: 'Women\'s Health', href: '/womens-health' },
  ]

  if (type === 'sidebar') {
    return (
      <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 left-6 z-50 p-3 bg-navy text-lime border border-lime sharp-border"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed inset-y-0 left-0 w-64 bg-navy z-40 p-12 flex flex-col gap-6"
            >
              <div className="text-lime font-unbounded text-sm mb-8">STANCE HEALTH</div>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl font-unbounded ${pathname === link.href ? 'text-lime' : 'text-off-white'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  }

  return (
    <nav className="fixed top-0 inset-x-0 h-20 flex items-center justify-between px-12 z-50 mix-blend-difference">
      <div className="text-lime font-unbounded text-xl">STANCE HEALTH</div>
      <div className="flex gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs font-unbounded tracking-widest ${pathname === link.href ? 'text-lime' : 'text-off-white'}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
