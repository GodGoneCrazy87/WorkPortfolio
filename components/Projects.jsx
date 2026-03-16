'use client'

import { motion } from 'framer-motion'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import { Github, Figma, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

/* ----------------------------- DATA ----------------------------- */

const projects = [
  {
    slug: 'vayu',
    title: 'VAYU',
    impact: "Habit identity system",
    subtitle: 'Gamified Identity & Productivity Platform',
    description:
      'Gamified identity and productivity platform combining habit tracking, progression systems, and behavioral analytics dashboards.',
    bullets: [
'Architected full-stack system with Next.js APIs and MongoDB',
'Built habit tracking, XP progression, and identity systems',
'Designed scalable dashboard UI and analytics modules',
],
    stack: [
      'Next.js',
      'React',
      'Tailwind',
      'Framer Motion',
      'MongoDB',
      'Figma',
    ],
    image: '/solo0.png',
    github: 'https://github.com/GodGoneCrazy87/vayu',
    figma: 'https://www.figma.com/design/J6gz8Y8xIaYhdusjDG03qS',
    live: 'https://vayu-system.vercel.app/',
  },
  
  {
    slug: 'web3onwards',
    title: 'Web3Onwards',
    impact: "5000+ users",
    subtitle: 'Production Web3 Platform',
    description:
      'Production Web3 review platform where user credibility is minted as NFTs, used by 5000+ active users.',
    bullets: [
'Built contributor dashboard and profile systems',
'Optimized API fetching reducing render time by 40%',
'Shipped production Web3 features for real users',
],
    stack: ['Node.js', 'React', 'Tailwind', 'Web3', 'Figma'],
    image: '/deflix0.png',
    github: null,
    figma: 'https://www.figma.com/design/J6gz8Y8xIaYhdusjDG03qS',
    live: 'https://nfthing.com/',
  },
  {
    slug: 'mudra-analytics',
    title: 'Mudra Analytics',
    impact: "Best Project of the Year 2025",
    subtitle: 'Wellness & Stress Analytics Platform',
    description:
      'Biomedical analytics platform visualizing stress signals and wellness metrics through interactive dashboards.',
    bullets: [
'Built full-stack analytics dashboards with Next.js',
'Integrated Python ML pipelines for stress prediction',
'Designed data visualization systems for biomedical signals',
],
    stack: [
      'Next.js',
      'React',
      'Tailwind',
      'Framer Motion',
      'MongoDB',
      'Python',
      'Figma',
    ],
    image: '/mudra0.png',
    github: 'https://github.com/GodGoneCrazy87/Mudra_analytics',
    figma: 'https://www.figma.com/design/J6gz8Y8xIaYhdusjDG03qS',
    live: 'https://mudra-analytics.vercel.app/',
  },
]

/* ----------------------------- TAG COLORS ----------------------------- */

const tagColors = {
  'Next.js': 'bg-white/10 text-white',
React: 'bg-cyan-500/10 text-cyan-400',
'Node.js': 'bg-green-500/10 text-green-400',
Tailwind: 'bg-sky-500/10 text-sky-400',
  'Framer Motion': 'bg-purple-500/10 text-purple-400',
  MongoDB: 'bg-emerald-500/10 text-emerald-400',
  Python: 'bg-yellow-500/10 text-yellow-400',
  Web3: 'bg-indigo-500/10 text-indigo-400',
  Figma: 'bg-pink-500/10 text-pink-400',
}
const TRANSITION = {
  in: 0.28,
  out: 0.22,
  ease: 'easeOut',
}
/* ----------------------------- COMPONENT ----------------------------- */

export default function Projects() {
  const router = useRouter()
  const [activeSlug, setActiveSlug] = useState(null)
  useEffect(() => {
  projects.forEach((p) => {
    router.prefetch(`/case-studies/${p.slug}`)
  })
}, [router])

useEffect(() => {
  if (typeof window === 'undefined') return

  projects.forEach((p) => {
    const img = new window.Image()
    img.loading = 'eager'
img.src = p.image
  })
}, [])



  return (
    <section id="work" className="relative bg-[#0F1115] border-b border-gray-800">

      {/* Overlay (outside map) */}
      {activeSlug && (
        <motion.div
          className="fixed inset-0 bg-black/40 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18 }}
        />
      )}

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-28">

        {/* HEADER */}
        <div className="max-w-4xl mb-6">
  <p className="text-sm font-medium text-purple-400 mb-1">
    Selected Work
  </p>

  <h2 className="text-3xl sm:text-4xl font-semibold text-white whitespace-nowrap">
    Projects built for real users and production systems
  </h2>
</div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-20">

          {projects.map((project) => {
            const isActive = activeSlug === project.slug
            const isHidden = activeSlug && !isActive

            return (
              <motion.article
  key={project.slug}
  onClick={() => {
    if (activeSlug) return

    setActiveSlug(project.slug)

    setTimeout(() => {
      router.push(`/case-studies/${project.slug}`)
    }, 380)
  }}

  animate={{
  opacity: isHidden ? 0 : 1,
  scale: isActive ? 1.12 : 1,
  y: isActive ? -8 : 0,
}}
whileHover={{
  y: -6,
  scale: 1.03
}}

  transition={{
    duration: TRANSITION.in,
    ease: TRANSITION.ease,
  }}

                className={`
group cursor-pointer hover:-translate-y-[3px] select-none
relative
rounded-2xl
border border-gray-800
bg-[#121018]
overflow-hidden
hover:border-purple-500/40
hover:shadow-lg hover:shadow-purple-500/10
transition-all
${project.slug === "vayu" ? "ring-1 ring-purple-500/30" : ""}
`}
>

              {/* IMAGE */}
              <div className="relative h-[260px] w-full overflow-hidden">
                <motion.div
                  whileHover={{  y: -8, scale: 1.08 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="h-full w-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#121018] via-transparent to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col h-full">
                {/* TITLE + ICONS */}
                <div className="flex items-start justify-between gap-4">

  <div className="min-w-0">
    <h3 className="text-lg font-semibold text-white">
      {project.title}
    </h3>

    <p className="text-sm text-purple-400 whitespace-nowrap">
      {project.subtitle}
    </p>
  </div>

  <div className="flex items-center gap-3 pt-1 shrink-0">
    {project.github && (
      <Icon href={project.github} type="github">
        <Github size={18} />
      </Icon>
    )}

    <Icon href={project.figma} type="figma">
      <Figma size={18} />
    </Icon>

    {project.live && (
      <Icon href={project.live} type="live">
        <ExternalLink size={18} />
      </Icon>
    )}
  </div>

</div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <ul className="text-sm text-gray-300 space-y-[2px]">
                  {project.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>

                {/* STACK */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`
                        px-3 py-1 text-xs rounded-full transition-transform hover:scale-105
                        border border-white/10 backdrop-blur
                        ${tagColors[tech] || 'text-gray-300'}
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* VIEW PROJECT */}
<div className="mt-auto pt-4">
  <span className="relative inline-block text-sm font-semibold text-purple-400">

    {project.slug === "vayu"
      ? "View Product →"
      : "Read Case Study →"}

    <span
      className="
      absolute left-0 -bottom-1 h-[2px] w-full
      bg-purple-500 scale-x-0
      group-hover:scale-x-100
      origin-left transition-transform duration-300
    "
    />
  </span>
</div>
              </div>
            </motion.article>
            )
})}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- ICON ----------------------------- */

function Icon({ href, children, type }) {
  const colorMap = {
    github:
      'text-neutral-300 hover:text-white hover:shadow-neutral-400/40',
    figma:
      'text-pink-400 hover:text-pink-300 hover:shadow-pink-500/40',
    live:
      'text-blue-400 hover:text-blue-300 hover:shadow-blue-500/40',
  }

  return (
    <a
      href={href}
      target="_blank"
      onClick={(e) => e.stopPropagation()}
      className={`
        ${colorMap[type]}
        p-1 rounded-full
        transition-all
        hover:shadow-lg
      `}
    >
      {children}
    </a>
  )
}
