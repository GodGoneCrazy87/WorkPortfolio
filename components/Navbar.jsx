'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'Approach', href: '#approach' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const prefersReducedMotion = useReducedMotion()

  const observerRef = useRef(null)

  /* ---------- EXPAND NAME (cheap passive scroll) ---------- */

  useEffect(() => {
    const handleScroll = () => {
      setExpanded(window.scrollY > 420)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ---------- INTERSECTION OBSERVER SCROLL SPY ---------- */

  useEffect(() => {
    const sections = navItems
      .map(i => document.querySelector(i.href))
      .filter(Boolean)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`
            setActive(id)
            history.replaceState(null, '', id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    )

    sections.forEach(section => observerRef.current.observe(section))

    return () => observerRef.current?.disconnect()
  }, [])

  /* ---------- NAV SCROLL ---------- */

  const scrollTo = (hash) => {
    const el = document.querySelector(hash)
    if (!el) return

    el.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })

    history.pushState(null, '', hash)
    setMobileOpen(false)
  }

  const scrollHome = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })

    history.replaceState(null, '', '/')
    setActive('')
  }

  const resumeVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03 },
  }

  const arrowVariants = {
    rest: { x: 0 },
    hover: { x: 8 },
  }

  return (
    <>
      {/* DESKTOP NAVBAR */}

      <header className="fixed top-5 left-0 right-0 z-50 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6">

          <div className="flex items-center h-14 px-6 rounded-full border border-gray-700 bg-[#0F1115]/90 backdrop-blur-sm">

            {/* NAME */}

            <button
              onClick={scrollHome}
              className="w-[260px] text-sm font-semibold text-white text-left hover:text-purple-400 transition-colors"
            >
              {expanded ? 'Vishnurat Kadagadakai' : 'VK'}
            </button>

            {/* NAV ITEMS */}

            <nav className="absolute left-1/2 -translate-x-1/2 flex gap-8">

              {navItems.map(item => {

                const isActive = active === item.href

                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className={`group relative text-sm font-medium transition-colors
                      ${isActive
                        ? 'text-[#4F7DFF]'
                        : 'text-gray-400 hover:text-white'}
                    `}
                  >

                    {item.name}

                    <span
                      className={`absolute left-1/2 -bottom-1 h-[2px] w-10
                      -translate-x-1/2 bg-purple-500 rounded-full
                      transition-all duration-300
                      ${isActive
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0'}
                      group-hover:scale-x-100 group-hover:opacity-100
                      `}
                    />

                  </button>
                )

              })}

            </nav>

            {/* RESUME BUTTON */}

            <motion.a
              href="/Resume_Vishnurat-Kadagadakai.pdf"
              target="_blank"
              variants={resumeVariants}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="ml-auto flex items-center gap-2 h-10 px-7 text-sm font-semibold text-white rounded-full
              bg-gradient-to-r from-[#4F7DFF] to-[#7C5CFF] shadow-md shadow-[#4F7DFF]/30"
            >

              Resume

              <motion.span
                variants={arrowVariants}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                →
              </motion.span>

            </motion.a>

          </div>
        </div>
      </header>

      {/* MOBILE NAV */}

      <header className="fixed top-5 left-0 right-0 z-50 md:hidden">

        <div className="px-5">

          <div className="flex justify-between items-center h-12 px-4 rounded-full border border-gray-700 bg-[#0F1115]/90 backdrop-blur-sm">

            <button
              onClick={scrollHome}
              className="text-sm font-semibold text-white hover:text-purple-400"
            >
              {expanded ? 'Vishnurat Kadagadakai' : 'VK'}
            </button>

            <button onClick={() => setMobileOpen(true)}>

              <div className="flex flex-col gap-[3px]">

                <span className="w-5 h-[2px] bg-white rounded" />
                <span className="w-5 h-[2px] bg-white rounded" />
                <span className="w-5 h-[2px] bg-white rounded" />

              </div>

            </button>

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur"
          >

            <div className="relative h-full bg-[#0F1115] border-l border-gray-800 px-8 pt-8 pb-10 flex flex-col">

              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 left-6 text-3xl text-white"
              >
                ✕
              </button>

              <nav className="mt-24 flex flex-col gap-14 items-center">

                {navItems.map(item => (

                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="text-4xl font-semibold text-gray-300 hover:text-[#4F7DFF]"
                  >
                    {item.name}
                  </button>

                ))}

              </nav>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  )
}