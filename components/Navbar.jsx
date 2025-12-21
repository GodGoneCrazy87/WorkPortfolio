'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
} from 'framer-motion'

const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'Approach', href: '#approach' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

/* ---------------- SMOOTH SCROLL (CONTROLLED) ---------------- */

const smoothScrollToTop = (reduced) => {
  if (reduced) {
    window.scrollTo(0, 0)
    return
  }

  const start = window.scrollY
  const duration = 700
  const startTime = performance.now()

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

  const tick = (now) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutCubic(progress)

    window.scrollTo(0, start * (1 - eased))

    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

export default function Navbar() {
  const [active, setActive] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const lastActive = useRef('')

  /* ---------------- EXPAND NAME ---------------- */
  useEffect(() => {
    return scrollY.on('change', (y) => {
      setExpanded(y > 420)
    })
  }, [scrollY])

  /* ---------------- SCROLL SPY + HASH SYNC ---------------- */
  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    return scrollY.on('change', () => {
      const midpoint = window.innerHeight * 0.45

      if (window.scrollY < 120) {
        if (lastActive.current !== '') {
          lastActive.current = ''
          setActive('')
          history.replaceState(null, '', '/')
        }
        return
      }

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= midpoint && rect.bottom >= midpoint) {
          const hash = `#${section.id}`
          if (lastActive.current !== hash) {
            lastActive.current = hash
            setActive(hash)
            history.replaceState(null, '', hash)
          }
          break
        }
      }
    })
  }, [scrollY])

  /* ---------------- NAV SCROLL ---------------- */
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
    const topEl = document.getElementById('top')
    if (!topEl) return
  
    topEl.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  
    history.replaceState(null, '', '/')
    setActive('')
    setMobileOpen(false)
  }
  
  /* ================= RENDER ================= */

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <header className="fixed top-5 left-0 right-0 z-50 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center h-14 px-6 rounded-full border border-gray-700 bg-[#0F1115]/90 backdrop-blur-sm">

            {/* NAME */}
            <button
              onClick={scrollHome}
              className="
                w-[260px] text-sm font-semibold text-white text-left
                hover:text-purple-400 transition-colors
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-purple-500/60
                rounded-md
              "
            >
              {expanded ? 'Vishnurat Kadagadakai' : 'VK'}
            </button>

            {/* CENTER NAV */}
            <nav className="absolute left-1/2 -translate-x-1/2 flex gap-8">
              {navItems.map((item) => {
                const isActive = active === item.href

                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`
                      group relative text-sm font-medium
                      transition-colors duration-200 ease-out
                      focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-purple-500/60
                      rounded-md px-1
                      ${isActive
                        ? 'text-[#4F7DFF]'
                        : 'text-gray-400 hover:text-white'}
                    `}
                  >
                    {item.name}

                    {/* UNDERLINE */}
                    <span
                      className={`
                        absolute left-1/2 -bottom-1
                        h-[2px] w-10
                        -translate-x-1/2
                        bg-purple-500 rounded-full
                        origin-center
                        transition-all duration-300 ease-out
                        ${isActive
                          ? 'scale-x-100 opacity-100'
                          : 'scale-x-0 opacity-0'}
                        group-hover:scale-x-100
                        group-hover:opacity-100
                      `}
                    />
                  </button>
                )
              })}
            </nav>

            {/* RESUME */}
            <motion.a
              href="/Resume-Vishnurat-Kadagadakai.pdf"
              target="_blank"
              initial={prefersReducedMotion ? false : 'rest'}
              whileHover={prefersReducedMotion ? false : 'hover'}
              animate="rest"
              className="
                ml-auto flex items-center gap-2 h-10 px-7
                text-sm font-semibold text-white rounded-full
                bg-gradient-to-r from-[#4F7DFF] to-[#7C5CFF]
                shadow-md shadow-[#4F7DFF]/30
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-purple-500/60
              "
            >
              Resume
              {!prefersReducedMotion && (
                <motion.span
                  variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                  transition={{ duration: 0.25 }}
                >
                  →
                </motion.span>
              )}
            </motion.a>
          </div>
        </div>
      </header>

      {/* ================= MOBILE ================= */}
      <header className="fixed top-5 left-0 right-0 z-50 md:hidden">
        <div className="px-5">
          <div className="flex justify-between items-center h-12 px-4 rounded-full border border-gray-700 bg-[#0F1115]/90 backdrop-blur-sm">
            <button
              onClick={scrollHome}
              className="text-sm font-semibold text-white hover:text-purple-400"
            >
              {expanded ? 'Vishnurat Kadagadakai' : 'VK'}
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex flex-col gap-[3px]"
            >
              <span className="w-5 h-[2px] bg-white rounded" />
              <span className="w-5 h-[2px] bg-white rounded" />
              <span className="w-5 h-[2px] bg-white rounded" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={prefersReducedMotion ? false : { x: '100%' }}
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
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="text-4xl font-semibold text-gray-300 hover:text-[#4F7DFF]"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              <a
                href="/Resume-Vishnurat-Kadagadakai.pdf"
                target="_blank"
                className="
                  mt-16 self-center px-10 py-4 text-xl font-semibold text-white
                  rounded-full bg-gradient-to-r from-[#4F7DFF] to-[#7C5CFF]
                "
              >
                Resume →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
