'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Figma, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

/* ----------------------------- DATA ----------------------------- */

const projects = [
  {
    slug: 'solo-leveling-journal',
    title: 'Solo Leveling Journal',
    subtitle: 'Gamified Productivity System',
    description:
      'User-centric journaling system inspired by Solo Leveling, focused on habit tracking, progression, and self-improvement.',
    bullets: [
      'Designed modular dashboard architecture',
      'Implemented efficient local persistence',
      'Built gamified progression systems',
    ],
    stack: [
      'NextJS',
      'ReactJS',
      'Tailwind CSS',
      'Framer Motion',
      'MongoDB',
      'Figma',
    ],
    image: '/solo.png',
    github: 'https://github.com/GodGoneCrazy87/solo-leveling-journal',
    figma: 'https://www.figma.com/design/J6gz8Y8xIaYhdusjDG03qS',
    live: null,
  },
  {
    slug: 'mudra-analytics',
    title: 'Mudra Analytics',
    subtitle: 'Wellness & Stress Analytics Platform',
    description:
      'Analytics platform visualizing stress, wellness, and performance metrics through interactive dashboards.',
    bullets: [
      'Built responsive analytics dashboards',
      'Improved data visualization clarity',
      'Integrated Python-based ML pipelines',
    ],
    stack: [
      'NextJS',
      'ReactJS',
      'Tailwind CSS',
      'Framer Motion',
      'MongoDB',
      'Python',
      'Figma',
    ],
    image: '/mudra.png',
    github: 'https://github.com/GodGoneCrazy87/Mudra_analytics',
    figma: 'https://www.figma.com/design/J6gz8Y8xIaYhdusjDG03qS',
    live: 'https://mudra-analytics.vercel.app/',
  },
  {
    slug: 'web3onwards',
    title: 'Web3Onwards',
    subtitle: 'Production Web3 Platform',
    description:
      'Decentralized movie review platform with NFT-backed credibility, used by 5000+ real users.',
    bullets: [
      'Built contributor-focused UI systems',
      'Optimized API fetching & rendering',
      'Shipped production-grade Web3 features',
    ],
    stack: ['NodeJS', 'ReactJS', 'Tailwind CSS', 'Web3', 'Figma'],
    image: '/Deflix.png',
    github: null,
    figma: 'https://www.figma.com/design/J6gz8Y8xIaYhdusjDG03qS',
    live: 'https://nfthing.com/',
  },
]

/* ----------------------------- TAG COLORS ----------------------------- */

const tagColors = {
  NextJS: 'bg-white/10 text-white',
  ReactJS: 'bg-cyan-500/10 text-cyan-400',
  NodeJS: 'bg-green-500/10 text-green-400',
  'Tailwind CSS': 'bg-sky-500/10 text-sky-400',
  'Framer Motion': 'bg-purple-500/10 text-purple-400',
  MongoDB: 'bg-emerald-500/10 text-emerald-400',
  Python: 'bg-yellow-500/10 text-yellow-400',
  Web3: 'bg-indigo-500/10 text-indigo-400',
  Figma: 'bg-pink-500/10 text-pink-400',
}

/* ----------------------------- COMPONENT ----------------------------- */

export default function Projects() {
  const router = useRouter()

  return (
    <section 
      id='work'
        className="bg-[#0F1115] border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 sm:py-28">

        {/* HEADER */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="text-sm font-medium text-purple-400 mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
            Projects built for real users and real systems
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Production-grade interfaces, dashboards, and platforms.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
<motion.article
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={() => router.push(`/case-studies/${project.slug}`)}
              className="
                group cursor-pointer
                rounded-2xl
                border border-gray-800
                bg-[#121018]
                overflow-hidden
                hover:border-purple-500/40
                hover:shadow-lg hover:shadow-purple-500/10
                transition-all
              "
            >
              {/* IMAGE */}
              <div className="relative h-[240px] w-full overflow-hidden">
                <motion.div
                  layoutId={`case-image-${project.slug}`}
                  whileHover={{ scale: 0.9 }}
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
              <div className="p-6 space-y-4">
                {/* TITLE + ICONS */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-purple-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
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

                <ul className="text-sm text-gray-300 space-y-1">
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
                        px-3 py-1 text-xs rounded-full
                        border border-white/10 backdrop-blur
                        ${tagColors[tech] || 'text-gray-300'}
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* VIEW PROJECT */}
                <div className="pt-3">
                  <span className="
                    relative inline-block text-sm font-semibold text-purple-400
                  ">
                    View Project →
                    <span className="
                      absolute left-0 -bottom-1 h-[2px] w-full
                      bg-purple-500 scale-x-0
                      group-hover:scale-x-100
                      origin-left transition-transform duration-300
                    " />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
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
