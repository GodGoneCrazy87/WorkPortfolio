'use client'

import { motion } from 'framer-motion'

/* ----------------------------- VARIANTS ----------------------------- */

const cardVariants = {
  rest: {
    y: 0,
    boxShadow: '0 0 0 rgba(168,85,247,0)',
  },
  hover: {
    y: -6,
    boxShadow: '0 0 26px rgba(168,85,247,0.16)',
  },
}

/* ----------------------------- COMPONENT ----------------------------- */

export default function Skills() {
  return (
    <section
      id="think"
      className="relative bg-[#0F1115] border-b border-gray-800 overflow-hidden"
    >
      {/* Ambient glow — same system language */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/6 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-10 pt-24 pb-20">
        {/* HEADER */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-purple-400 mb-3">
            How I Work
          </p>

          <h2 className="text-4xl font-semibold text-white mb-4">
            Built for team momentum
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            I work in ways that reduce friction for teams — clear intent,
            predictable execution, and decisions that scale beyond individuals.
          </p>
        </div>

        {/* TEAM FIT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 01 */}
          <motion.article
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
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Communication
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">
              I make intent visible
            </h3>

            <p className="text-sm text-purple-400 mb-3">
              Fewer assumptions, clearer decisions
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              I communicate rationale, trade-offs, and constraints early
              <span className="text-gray-500"> (handoffs, reviews, async work)</span>.
              This prevents rework and keeps designers, engineers, and
              stakeholders aligned.
            </p>
          </motion.article>

          {/* CARD 02 */}
          <motion.article
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
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Execution
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">
              I ship in stable increments
            </h3>

            <p className="text-sm text-purple-400 mb-3">
              Predictable delivery
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              I prefer small, complete units of work over large risky pushes
              <span className="text-gray-500"> (internship + production shipping)</span>.
              This keeps velocity steady and reduces stress during reviews,
              QA, and releases.
            </p>
          </motion.article>

          {/* CARD 03 */}
          <motion.article
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
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Ownership
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">
              I take responsibility beyond my code
            </h3>

            <p className="text-sm text-purple-400 mb-3">
              Product-aware engineering
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              I consider UX, performance, edge cases, and future maintenance
              <span className="text-gray-500"> (post-launch fixes, UX debt)</span>.
              My goal is to leave systems better than I found them — not just
              “working.”
            </p>
          </motion.article>
        </div>

        {/* OPERATING MODE */}
        <div className="mt-14 max-w-3xl">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
            Team Operating Mode
          </p>

          <div className="relative pl-6 py-4 rounded-lg bg-white/[0.025]">
            <span className="absolute left-0 top-4 h-[70%] w-[2px] bg-purple-500/40 rounded-full" />

            <p className="text-gray-300 leading-relaxed">
              I adapt to team norms, respect existing systems, and contribute
              without ego. Strong teams are built on trust, predictability,
              and shared context — not individual brilliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
