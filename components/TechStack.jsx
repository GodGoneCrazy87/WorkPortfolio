'use client'

import { motion } from 'framer-motion'

/* ----------------------------- DATA ----------------------------- */

const capabilities = [
  {
    title: 'Interface Engineering',
    description: 'Building resilient, scalable UI systems',
    tools: [
      { name: 'React', level: 'core', hint: 'Used daily in production work' },
      { name: 'Next.js', level: 'core', hint: 'Primary application framework' },
      { name: 'Tailwind CSS', level: 'core', hint: 'Design + layout system' },
      { name: 'Component Architecture', level: 'support', hint: 'Reusable system design' },
    ],
  },
  {
    title: 'Motion & Interaction',
    description: 'Meaningful motion that communicates state',
    tools: [
      { name: 'Framer Motion', level: 'core', hint: 'State-driven motion systems' },
      { name: 'Micro-interactions', level: 'core', hint: 'Feedback & affordances' },
      { name: 'Gesture Feedback', level: 'support', hint: 'Hover, tap, transition cues' },
    ],
  },
  {
    title: 'Data & State',
    description: 'Predictable data flow and performance',
    tools: [
      { name: 'MongoDB', level: 'core', hint: 'Primary persistence layer' },
      { name: 'API Integration', level: 'core', hint: 'Client ↔ server data flow' },
      { name: 'Local-first State', level: 'support', hint: 'Fast, offline-first UX' },
    ],
  },
  {
    title: 'Design & UX',
    description: 'Designing systems, not screens',
    tools: [
      { name: 'Figma', level: 'core', hint: 'Design systems & flows' },
      { name: 'Design Systems', level: 'core', hint: 'Tokenized, reusable UI' },
      { name: 'UX Trade-offs', level: 'support', hint: 'Clarity over novelty' },
    ],
  },
]

/* ----------------------------- VARIANTS ----------------------------- */

const cardVariants = {
  rest: { y: 0, boxShadow: '0 0 0 rgba(168,85,247,0)' },
  hover: { y: -4, boxShadow: '0 0 26px rgba(168,85,247,0.14)' },
}

const tagVariants = {
  rest: { y: 0 },
  hover: { y: -2 },
}

/* ----------------------------- COMPONENT ----------------------------- */

export default function TechStack() {
  return (
    <section
      id="skills"
      className="relative bg-[#0F1115] border-b border-gray-800 overflow-hidden"
    >
      {/* Ambient system glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/8 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 pt-24 pb-24">
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-purple-400 mb-3">
            Tech Stack
          </p>

          <h2 className="text-4xl font-semibold text-white mb-4">
            Capability, not keywords
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            Tools I use daily to design, build, and scale production interfaces.
          </p>
        </div>

        {/* GRID */}
{/* GRID WITH RAIL */}
<div className="relative">

  {/* Capability Rail */}
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    whileInView={{ opacity: 1, height: '100%' }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="
      absolute left-0 top-0
      w-[2px] h-full
      bg-gradient-to-b
      from-purple-500/70
      via-purple-500/30
      to-transparent
      rounded-full
    "
  />

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pl-8">
          {capabilities.map((group) => (
            <motion.article
              key={group.title}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="
                relative rounded-xl
                border border-gray-800
                bg-[#121018]
                p-6
                overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent pointer-events-none" />

              <h3 className="text-lg font-semibold text-white mb-1">
                {group.title}
              </h3>

              <p className="text-sm text-gray-400 mb-5">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <motion.span
                    key={tool.name}
                    variants={tagVariants}
                    initial="rest"
                    whileHover="hover"
                    className={`
                      relative px-3 py-1 text-xs rounded-full
                      backdrop-blur cursor-help
                      transition-colors
                      ${
                        tool.level === 'core'
                          ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                          : 'bg-white/5 text-gray-300 border border-gray-700'
                      }
                    `}
                  >
                    {tool.name}

                    {/* TOOLTIP */}
                    <span
                      className="
                        pointer-events-none
                        absolute -top-8 left-1/2 -translate-x-1/2
                        whitespace-nowrap
                        text-[11px] text-gray-300
                        bg-[#0F1115] border border-gray-700
                        px-2 py-1 rounded-md
                        opacity-0 group-hover:opacity-100
                        transition-opacity
                      "
                    >
                      {tool.hint}
                    </span>
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
        </div>

        {/* OPERATING SIGNALS */}
        <div className="mt-20 max-w-3xl">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
            Operating signals
          </p>

          <div className="relative pl-6 space-y-3">
{/* Operating Rail */}
<span
  className="
    absolute left-0 top-1
    h-full w-[2px]
    bg-gradient-to-b
    from-purple-500/70
    via-purple-500/40
    to-transparent
    rounded-full
  "
/>

            {[
              'I build systems meant to be maintained, not demoed.',
              'I design for edge cases because users live in them.',
              'I learn continuously — tools change, principles compound.',
              'I optimize for clarity, even when no one asks for it.',
            ].map((line, i) => (
              <p
                key={i}
                className="text-gray-300 leading-relaxed"
              >
                {line}
              </p>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  )
}
