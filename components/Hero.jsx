'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

/* ----------------------------- VARIANTS ----------------------------- */

const glowVariants = {
  rest: {
    boxShadow: '0 0 0px rgba(47,107,255,0)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  hover: {
    boxShadow: '0 0 36px rgba(47,107,255,0.25)',
    transition: { duration: 0.25, ease: 'easeOut' },
  },
}

const rowVariants = {
  rest: {
    backgroundColor: 'rgba(255,255,255,0)',
    boxShadow: '0 0 0 rgba(168,85,247,0)',
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  hover: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    boxShadow: '0 0 24px rgba(168,85,247,0.25)',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

const slideVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

/* -------------------------------- HERO -------------------------------- */

export default function Hero() {
const taglines = [
'Built production systems used by 5000+ users at NFThing (DW3LL)',
'Improved API efficiency and rendering performance by up to 40%',
'Designed scalable UI systems and dashboards used in production',
]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative border-b border-gray-800 bg-[#0F1115] overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-transparent pointer-events-none" />
      
      <div
        className="
          relative max-w-[1400px] mx-auto
          px-6 sm:px-8 lg:px-10
          pt-24 sm:pt-32 lg:pt-36
          pb-20 sm:pb-24 lg:pb-28
          grid grid-cols-1 lg:grid-cols-2
          gap-16 lg:gap-20
          items-center
        "
      >
        {/* ---------------- LEFT ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col max-w-[600px]"
        >
          {/* ROLE */}
          <p className="text-base sm:text-lg font-medium text-purple-400 mb-4">
            Full-Stack Product Engineer • React / Next.js
          </p>

          {/* NAME */}
          <h1 className="text-3xl sm:text-5xl font-semibold text-white leading-tight mb-5">
            Vishnurat Kadagadakai
          </h1>
          <p className="text-sm text-purple-300 mb-4 font-medium">
  Currently building <span className="text-purple-400 font-semibold">VAYU</span> — a gamified identity system
</p>
          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6 max-w-[520px] ">
I build product systems end-to-end — from backend APIs and data models
to scalable frontend architecture using React and Next.js. My focus is
shipping maintainable systems that perform reliably under real product usage.
          </p>

          {/* SLIDING PROOF */}
          <div className="h-[52px] mb-8 overflow-hidden flex items-start gap-3">
            <span className="mt-1 h-4 w-[2px]  bg-gradient-to-b from-purple-500/70 via-purple-500/30 to-transparent rounded-full shrink-0" />

            <AnimatePresence mode="wait" initial={false}>
                <motion.p
                key={index}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-sm sm:text-base font-medium text-gray-400 leading-snug max-w-[520px]"
              >
                {taglines[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 mt-2">

<motion.a
  href="#work"
  whileHover="hover"
  whileTap={{ scale: 0.97 }}
  initial="rest"
  animate="rest"
  className="
    relative inline-flex items-center gap-2
    px-6 py-2.5
    text-sm font-semibold text-white
    rounded-full
    bg-gradient-to-r from-[#4F7DFF] to-[#7C5CFF]
    hover:from-[#5A86FF] hover:to-[#8A6BFF]
    shadow-md shadow-[#4F7DFF]/30
  "
>
  Explore My Work
  <motion.span variants={{ rest:{x:0}, hover:{x:8} }}>
    →
  </motion.span>
</motion.a>

<motion.a
  href="https://github.com/Godgonecrazy87"
  target="_blank"
  rel="noopener noreferrer"
  whileHover="hover"
  whileTap={{ scale: 0.97 }}
  initial="rest"
  animate="rest"
  className="
    relative inline-flex items-center gap-2
    px-6 py-2.5
    text-sm font-semibold text-gray-200
    rounded-full
    border border-gray-700
    hover:text-white
    hover:border-purple-500/50
    transition-colors
  "
>
  View GitHub

  <motion.span
    variants={{
      rest: { x: 0 },
      hover: { x: 8 },
    }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
  >
    →
  </motion.span>
</motion.a>

</div>
        </motion.div>

        {/* ---------------- RIGHT ---------------- */}
        <motion.div
          initial={{ opacity: 0,  y: 14}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="w-full flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-full">
            <ProductPreview />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ----------------------------- PRODUCT PREVIEW ----------------------------- */

function ProductPreview() {
  return (
    <motion.div
      variants={glowVariants}
      initial="rest"
      whileHover={{ scale: 1.01 }}
      animate="rest"
      className="
        relative rounded-xl
        border border-gray-800
        bg-[#121018]
        p-5 sm:p-6
        shadow-2xl shadow-black/50
        overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-transparent to-transparent pointer-events-none" />

      {/* HEADER */}
      <div className="pb-5 border-b border-gray-800">
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
           VAYU Product Preview
        </p>
        <h3 className="text-lg font-semibold text-white mt-1">
          Gamified identity & productivity system
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          System concept • Based on real-world usage patterns
        </p>
        <p className="text-sm text-gray-400 mt-2 max-w-md">
          Habit tracking, identity progression, and analytics dashboards built
for long-term behavioral systems.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">
        <Kpi label="Player Level" value="15" meta="User progression" />
        <Kpi label="Consistency Streak" value="100 days" meta="Consistency metric" />
        <Kpi label="XP Balance" value="320" meta="Earned rewards" />
      </div>

      {/* XP */}
      <div className="mt-8">
        <p className="text-xs text-gray-400 mb-2">
          XP Progress to next level
        </p>
        <div className="h-2 w-full rounded-full bg-gray-800 overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '50%' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          1450 XP • 50% complete
        </p>
      </div>

      {/* ACTIVITY */}
      <div className="mt-8 space-y-3">
        <ActivityRow label="Daily habits completed" value="1 / 3" status="In progress" />
        <ActivityRow label="Skill points available" value="0" status="Level based" />
      </div>

      {/* FOOTER */}
      <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-800">
        <Meta label="Core System" value="Habit-driven identity progression" />
        <Meta label="Behavior Loop" value="Daily user actions" />
      </div>
    </motion.div>
  )
}

/* ----------------------------- SUB COMPONENTS ----------------------------- */

function Kpi({ label, value, meta }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="rounded-lg border border-gray-800 bg-[#0F0D14] p-4 hover:border-purple-500/40"
    >
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-2xl font-semibold text-white mt-1">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{meta}</p>
    </motion.div>
  )
}

function ActivityRow({ label, value, status }) {
  return (
    <motion.div
      variants={rowVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex items-center justify-between rounded-lg border border-gray-800 px-4 py-3 bg-[#0F0D14]"
    >
      <div>
        <p className="text-sm font-medium text-white">{label}</p>
        <p className="text-xs text-gray-500">{status}</p>
      </div>
      <p className="text-sm font-semibold text-purple-300">{value}</p>
    </motion.div>
  )
}

function Meta({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-white">{value}</p>
    </div>
  )
}
