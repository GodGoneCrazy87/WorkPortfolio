'use client'

import { notFound, useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { caseStudies } from '@/lib/caseStudies'
import { X } from 'lucide-react'

export default function CaseStudyPage({ params }) {
  const router = useRouter()

  const index = caseStudies.findIndex(
    c => c.slug === params.slug
  )

  const study = caseStudies[index]

  if (!study) notFound()

  /* Prev / Next */
  const prev =
    caseStudies[(index - 1 + caseStudies.length) % caseStudies.length]

  const next =
    caseStudies[(index + 1) % caseStudies.length]

  const [hero, overviewImg, scopeImg, goalsImg] = study.images

  return (
<section
  className="relative bg-[#0b0f13] text-gray-200 overflow-x-hidden"
>

      {/* Background Glow (Clipped) */}
<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  <div className="absolute inset-0 flex justify-center items-start">
    <div className="w-[900px] h-[900px] mt-[-15%] bg-[#e6d3a3]/10 blur-[180px] rounded-full" />
  </div>
</div>


      {/* Close */}
      <button
        onClick={() => router.push('/#work')}
        className="
          fixed bottom-10 left-1/2 -translate-x-1/2 z-40
          w-14 h-14 rounded-full
          bg-black border border-gray-700
          flex items-center justify-center
          text-white
          hover:scale-110 transition
        "
      >
        <X />
      </button>

{/* MAIN */}
<motion.div
  initial={{ opacity: 0, filter: 'blur(6px)' }}
  animate={{ opacity: 1, filter: 'blur(0px)' }}
  transition={{ duration: 0.25, ease: 'easeOut' }}
  className="relative z-10 w-full overflow-x-hidden"
>

<div
  className="
    max-w-[1300px] mx-auto px-6 pt-28 pb-40
    space-y-36
    snap-y snap-mandatory
    scroll-smooth
  "
>

        {/* HEADER */}
<header className="space-y-14 snap-start">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#e6d3a3]">
            {study.title}
          </h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            <MetaBig label="Project Niche" value={study.niche} />
            <MetaBig label="Client" value={study.client} />
            <MetaBig label="Date" value={study.date} />
            <MetaBig label="Project Type" value={study.type} />

          </div>

        </header>

        {/* HERO */}
<HeroImage
  src={hero}
  alt={study.title}
  slug={params.slug}
/>

        {/* OVERVIEW */}
        <EditorialSection
          label="Project Overview"
          title={`${study.title.toUpperCase()} IS LEADING IN ITS DOMAIN.`}
image={study.slug === 'web3onwards' ? null : overviewImg}
        >
          {study.overview}
        </EditorialSection>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 snap-start">

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

        </div>

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
    <a
      href={`/case-studies/${prev.slug}`}
      className="
        group relative
        rounded-2xl
        border border-gray-800
        bg-[#121018]
        p-8
        overflow-hidden
        transition-all duration-200
        hover:border-purple-500/50
        hover:shadow-[0_0_28px_rgba(168,85,247,0.12)]
      "
    >
      {/* Soft glow */}
      <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition" />

      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
        Previous project
      </p>

      <div className="flex items-center gap-3">
        <span className="text-purple-400 text-lg">←</span>

        <p className="text-xl text-white font-medium leading-snug">
          {prev.title}
        </p>
      </div>
    </a>

    {/* NEXT */}
    <a
      href={`/case-studies/${next.slug}`}
      className="
        group relative
        rounded-2xl
        border border-gray-800
        bg-[#121018]
        p-8
        overflow-hidden
        text-right
        transition-all duration-200
        hover:border-blue-500/50
        hover:shadow-[0_0_28px_rgba(59,130,246,0.12)]
      "
    >
      {/* Soft glow */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition" />

      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
        Next project
      </p>

      <div className="flex items-center justify-end gap-3">
        <p className="text-xl text-white font-medium leading-snug">
          {next.title}
        </p>

        <span className="text-blue-400 text-lg">→</span>
      </div>
    </a>

  </div>
</div>


      </div>
      </motion.div>
    </section>
  )
}

/* ───────────────── COMPONENTS ───────────────── */

function HeroImage({ src, alt, slug }) {
  return (
    <motion.div
      layoutId={`case-image-${slug}`}
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

function EditorialSection({ label, title, image, children }) {
  return (
    <section className="space-y-20 snap-start">

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

    </section>
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
