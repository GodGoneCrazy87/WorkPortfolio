'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

import { notFound, useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { caseStudies } from '@/lib/caseStudies'
import { X } from 'lucide-react'

export const dynamic = 'force-static'

const PROJECT_THEMES = {
  web3onwards: {
    glow: 'from-orange-500/20 via-gray-500/10 to-transparent',
    border: 'border-orange-400/30',
    arrow: 'text-orange-400',
  },
  'solo-leveling-journal': {
    glow: 'from-purple-500/25 via-purple-500/10 to-transparent',
    border: 'border-purple-400/30',
    arrow: 'text-purple-400',
  },
  'mudra-analytics': {
    glow: 'from-yellow-400/25 via-yellow-300/10 to-transparent',
    border: 'border-yellow-400/30',
    arrow: 'text-yellow-400',
  },
}

const PAGE_THEMES = {
  web3onwards: {
    bg: 'from-orange-500/20 via-zinc-900/40 to-black',
    glow: 'bg-orange-400/20',
  },

  'solo-leveling-journal': {
    bg: 'from-purple-900/50 via-zinc-900/40 to-black',
    glow: 'bg-purple-500/25',
  },

  'mudra-analytics': {
    bg: 'from-amber-400/20 via-zinc-900/40 to-black',
    glow: 'bg-amber-300/20',
  },
}


export default function CaseStudyPage({ params }) {
  const router = useRouter()

  const TRANSITION = {
  in: 0.28,
  out: 0.22,
  ease: 'easeOut',
}

useEffect(() => {
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  })
}, [params.slug])

  const index = caseStudies.findIndex(
    c => c.slug === params.slug
  )

  const study = caseStudies[index]

if (!study) {
  router.replace('/404')
  return null
}


/* Prev / Next */
const prev =
  caseStudies[(index - 1 + caseStudies.length) % caseStudies.length]

const next =
  caseStudies[(index + 1) % caseStudies.length]
  
const [hero, overviewImg, scopeImg, goalsImg] = study.images

const prevImg = prev?.images?.[0] ?? hero
const nextImg = next?.images?.[0] ?? hero
const prevTheme = PROJECT_THEMES[prev.slug] ?? PROJECT_THEMES.web3onwards
const nextTheme = PROJECT_THEMES[next.slug] ?? PROJECT_THEMES.web3onwards

const pageTheme =
  PAGE_THEMES[study.slug] ?? PAGE_THEMES.web3onwards

const themeGlow = pageTheme.glow
const { scrollY } = useScroll()

const heroY = useTransform(scrollY, [0, 600], [0, -120])
const heroScale = useTransform(scrollY, [0, 600], [1, 1.05])

const bgY = useTransform(scrollY, [0, 1000], [0, 150])
const prefersReduced = useReducedMotion()

useEffect(() => {
  router.prefetch(`/case-studies/${prev.slug}`)
  router.prefetch(`/case-studies/${next.slug}`)
}, [prev.slug, next.slug, router])

const handleClose = () => {
  router.push('/#work')
}


const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
}
const reveal = prefersReduced
  ? {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }
  : {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
        },
      },
    }

  return (
<section
  className="relative bg-[#0b0f13] text-gray-200 overflow-x-hidden"
>


{/* Background Theme */}
<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
{/* Cinematic ambient glow */}
<div className="pointer-events-none fixed inset-0 -z-10">
  <motion.div
  style={{ y: bgY }}
  className={`
    absolute top-[-25%] right-[-15%]
      w-[700px] h-[700px]
      rounded-full
      blur-[180px]
      opacity-70
      ${themeGlow}
    `}
  />
</div>

  {/* Base gradient */}
<motion.div
  className={`
    absolute inset-0
    bg-gradient-to-br ${pageTheme.bg}
  `}
  animate={{
    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
  }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: 'linear',
  }}
  style={{
    backgroundSize: '200% 200%',
  }}
/>


  {/* Floating glow */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="
      absolute top-[-20%] left-1/2 -translate-x-1/2
      w-[900px] h-[900px]
      rounded-full
      blur-[180px]
      bg-white/5
    "
  />
</div>



      {/* Close */}
<button
  onClick={handleClose}
  className="
    fixed bottom-10 left-1/2 -translate-x-1/2 z-40
    w-14 h-14 rounded-full
    bg-black/80 backdrop-blur
    border border-gray-700
    flex items-center justify-center
    text-white

    transition-all duration-300

    hover:border-purple-400/70
    hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]
    hover:scale-110
  "
>
  <X size={22} />
</button>


{/* MAIN */}
<motion.div
 style={{ willChange: 'transform, opacity' }}
  initial={{ opacity: 0, scale: 0.96, y: 12 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.98, y: -12 }}
  transition={{
    duration: TRANSITION.in,
    ease: TRANSITION.ease,
  }}

  className="relative z-10 w-full overflow-x-hidden"
>

<div
  className="
    max-w-[1300px] mx-auto px-6 pt-28 pb-40
    space-y-36
    snap-y  snap-mandatory
    scroll-smooth
  "
>

        {/* HEADER */}
<motion.header
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
  className="space-y-14 snap-start"
>

          <motion.h1 variants={reveal} className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#e6d3a3]">
            {study.title}
          </motion.h1>

<motion.div variants={reveal} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            <MetaBig label="Project Niche" value={study.niche} />
            <MetaBig label="Client" value={study.client} />
            <MetaBig label="Date" value={study.date} />
            <MetaBig label="Project Type" value={study.type} />

          </motion.div>

        </motion.header>

        {/* HERO */}
<HeroImage
  src={hero}
  alt={study.title}
  reveal={reveal}
  y={heroY}
  scale={heroScale}
/>


        {/* OVERVIEW */}
        <EditorialSection reveal={reveal}
          label="Project Overview"
          title={`${study.title.toUpperCase()} IS LEADING IN ITS DOMAIN.`}
image={study.slug === 'web3onwards' ? null : overviewImg}
        >
          {study.overview}
        </EditorialSection>

        {/* FEATURES */}
        <motion.div
  variants={reveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 snap-start">

          <Feature
            title="Effortless Integration"
            text="Designed for seamless deployment across platforms."
          />

          <Feature
            title="Cost Effective"
            text="Optimized architecture with low operational overhead."
          />

          <Feature
            title="Scalable Systems"
            text="Built for growth and high-volume workloads."
          />

        </motion.div>

        {/* DEFLIX CUSTOM LAYOUT */}
{study.slug === 'web3onwards' && (
  <div className="space-y-24">

    {/* After Overview */}
    <DeflixPairWide
      left="/deflix1.png"
      right="/deflix2.png"
    />

  </div>
)}


        {/* SCOPE */}
        <EditorialSection
          label="Project Scope"
          title="FROM CONCEPT TO LAUNCH, WE BUILT A COMPLETE SYSTEM."
          image={study.slug === 'web3onwards' ? null : scopeImg}

        >
          {study.scope}
        </EditorialSection>
        {/* DEFLIX SECOND PAIR */}
{study.slug === 'web3onwards' && (
  <DeflixPairCapped
    left="/deflix3.png"
    right="/deflix4.png"
  />
)}

        {/* GOALS */}
        <EditorialSection
          label="Project Goals"
          title="POSITIONING THE PRODUCT AS A LONG-TERM PLATFORM."
          image={study.slug === 'web3onwards' ? null : goalsImg}

        >
          {study.goals}
        </EditorialSection>

        {/* MARKET */}
        {study.market && (
          <MarketFocus market={study.market} />
        )}

  {/* NAVIGATION */}
<div className="relative snap-start pt-32 border-t border-gray-800">

  {/* Vertical Rail */}
  <span
    className="
      absolute left-0 top-24
      h-[65%] w-[2px]
      bg-gradient-to-b
      from-purple-500/70
      via-purple-500/30
      to-transparent
      rounded-full
    "
  />

  <div className="grid md:grid-cols-2 gap-10 pl-10">

{/* PREVIOUS */}
<motion.div
  initial={{ x: 0 }}
  whileHover={{ x: -12 }}
  transition={{ type: 'spring', stiffness: 220 }}
>
  <Link
    href={`/case-studies/${prev.slug}`}
    onClick={(e) => {
      e.preventDefault()
      document.body.classList.add('page-exit')
      setTimeout(() => {
        router.push(`/case-studies/${prev.slug}`)
      }, 220)
    }}
    className={`
      group relative block
      rounded-2xl
      ${prevTheme.border}
      bg-gradient-to-br ${prevTheme.glow}
      p-8
      overflow-hidden
      transition-all
    `}
  >
    {/* Arrow */}
    <motion.span
      className={`absolute left-5 top-1/2 -translate-y-1/2 text-2xl ${prevTheme.arrow}`}
      initial={{ x: 0, opacity: 0.6 }}
      whileHover={{ x: -6, opacity: 1 }}
    >
      ←
    </motion.span>

    <div className="flex items-center gap-5 pl-6">

      {/* Thumbnail */}
      <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0">
        <Image
          src={prevImg}
          alt={prev.title}
          width={160}
          height={120}
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
          Previous Project
        </p>

        <p className="text-lg text-white font-medium">
          {prev.title}
        </p>
      </div>

    </div>
  </Link>
</motion.div>


{/* NEXT */}
{/* NEXT */}
<motion.div
  initial={{ x: 0 }}
  whileHover={{ x: 12 }}
  transition={{ type: 'spring', stiffness: 220 }}
>
  <Link
    href={`/case-studies/${next.slug}`}
    onClick={(e) => {
  e.preventDefault()
  router.push(`/case-studies/${next.slug}`)
}}

    className={`
      group relative block
      rounded-2xl
      ${nextTheme.border}
      bg-gradient-to-br ${nextTheme.glow}
      p-8
      overflow-hidden
      transition-all
    `}
  >
    {/* Arrow */}
    <motion.span
      className={`absolute right-5 top-1/2 -translate-y-1/2 text-2xl ${nextTheme.arrow}`}
      initial={{ x: 0, opacity: 0.6 }}
      whileHover={{ x: 6, opacity: 1 }}
    >
      →
    </motion.span>

    <div className="flex items-center justify-between gap-5 pr-6">

      {/* Text */}
      <div className="text-right">
        <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
          Next Project
        </p>

        <p className="text-lg text-white font-medium">
          {next.title}
        </p>
      </div>

      {/* Thumbnail */}
      <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0">
        <Image
          src={nextImg}
          alt={next.title}
          width={160}
          height={120}
          className="object-cover"
        />
      </div>

    </div>
  </Link>
</motion.div>

  </div>
</div>


      </div>
      </motion.div>
    </section>
  )
}

/* ───────────────── COMPONENTS ───────────────── */

function HeroImage({ src, alt, reveal, y, scale }) {
  return (
    <motion.div
     style={{ y, scale }}
  variants={reveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
 className="max-w-[1100px] mx-auto rounded-3xl overflow-hidden border border-gray-800 bg-black snap-start will-change-transform"
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        priority
        className="w-full h-auto object-contain"
      />
    </motion.div>
  )
}

function MetaBig({ label, value }) {
  return (
    <div className="max-w-[260px]">

      <p className="text-lg font-serif uppercase text-[#e6d3a3] mb-1">
        {label}
      </p>

      <p className="text-sm text-gray-300 leading-snug">
        {value}
      </p>

    </div>
  )
}

function EditorialSection({ label, title, image, children, reveal }) {
  return (
<motion.section
  variants={reveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
  className="space-y-20 snap-start"
>

      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-20">

        <h3 className="text-3xl md:text-4xl font-serif text-[#e6d3a3]">
          {label}
        </h3>

        <div className="space-y-6">

          <h2 className="text-2xl md:text-3xl text-white font-semibold">
            {title}
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            {children}
          </p>

        </div>

      </div>

      {image && (
        <div className="rounded-3xl border border-gray-800 bg-black overflow-hidden">

          <Image
            src={image}
            alt={label}
            width={1400}
            height={900}
            className="w-full h-auto object-contain"
          />

        </div>
      )}

    </motion.section>
  )
}

function Feature({ title, text }) {
  return (
    <div className="rounded-2xl bg-[#0f141a] border border-gray-800 p-8 ">

      <h3 className="text-lg text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm">
        {text}
      </p>

    </div>
  )
}

/* Deflix Pair - Normal Height */
function DeflixPairWide({ left, right }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-full overflow-hidden gap-4">


      {[left, right].map((src, i) => (
        <div
          key={i}
          className="
            h-[720px]
            flex items-center justify-center
            
            rounded-2xl
            bg-black
            overflow-hidden
          "
        >
          <Image
            src={src}
            alt=""
            width={1000}
            height={700}
            className="h-full w-auto object-contain"
          />
        </div>
      ))}

    </div>
  )
}



/* Deflix Pair - Tall Images (Capped) */
function DeflixPairCapped({ left, right }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  max-w-full gap-0 border border-gray-800 rounded-2xl overflow-hidden bg-black">

      {[left, right].map((src, i) => (
        <div
          key={i}
          className="
            h-[720px]
            flex items-center justify-center
            bg-black
          "
        >
          <Image
            src={src}
            alt=""
            width={700}
            height={1200}
            className="max-h-full w-auto object-contain"
          />
        </div>
      ))}

    </div>
  )
}

function CaseStudySkeleton() {
  return (
    <div className="max-w-[1300px] mx-auto px-6 pt-28 space-y-16 animate-pulse">

      <div className="h-14 w-2/3 bg-gray-800 rounded" />

      <div className="grid grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-800 rounded" />
        ))}
      </div>

      <div className="h-[400px] bg-gray-800 rounded-3xl" />

      <div className="space-y-4">
        <div className="h-6 bg-gray-800 w-1/3 rounded" />
        <div className="h-4 bg-gray-800 w-full rounded" />
        <div className="h-4 bg-gray-800 w-5/6 rounded" />
      </div>

    </div>
  )
}

function MarketFocus({ market }) {
  return (
    <section className=" snap-start rounded-3xl border border-gray-800 bg-gradient-to-br from-[#0b1320] to-black p-16 space-y-10">

      <h3 className="text-3xl font-serif text-[#e6d3a3]">
        Market Focus
      </h3>

      <div className="grid md:grid-cols-2 gap-16 text-gray-300">

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Phase 1 · Early Adoption
          </h4>

          <ul className="space-y-2 text-sm">
            {market.phase1.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Phase 2 · Expansion
          </h4>

          <ul className="space-y-2 text-sm">
            {market.phase2.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
