'use client'

import { motion } from 'framer-motion'

/* ----------------------------- VARIANTS ----------------------------- */

const cardVariants = {
  rest: {
    y: 0,
    borderColor: 'rgba(31,41,55,1)',
  },
  hover: {
    y: -6,
    borderColor: 'rgba(168,85,247,0.6)',
  },
}

const railVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: '100%',
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

/* ----------------------------- COMPONENT ----------------------------- */

export default function About() {
  return (
    <section
      id="approach"
      className="relative bg-[#0F1115] border-b border-gray-800 overflow-hidden"
    >
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-10 pt-24 pb-28">
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-purple-400 mb-3">
            How I Think
          </p>

          <h2 className="text-4xl font-semibold text-white mb-5">
            Intelligence before execution
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            My approach focuses on structured reasoning, deliberate trade-offs,
            and systems that remain stable under change.
          </p>
        </div>

        {/* INTELLIGENCE RAIL */}
        <div className="relative">
          <motion.div
            variants={railVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              absolute left-0 top-0
              w-[2px] h-full
              bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent
              rounded-full
            "
          />

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-8">
            {/* CARD 01 */}
            <motion.article
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="
                relative rounded-xl
                border bg-[#121018]
                p-6
                overflow-hidden
              "
            >
              <span className="absolute top-5 right-5 text-xs text-purple-400/60">
                01
              </span>

              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                Problem Framing
              </p>

              <h3 className="text-lg font-semibold text-white mb-2">
                I define the problem before touching the code
              </h3>

              <p className="text-sm text-purple-400 mb-3">
                Clarity over velocity
              </p>

              <p className="text-sm text-gray-400 leading-relaxed">
                I begin by isolating user pain, business constraints, and system
                boundaries (especially before committing to architecture).
                Precision in framing prevents wasted execution.
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
                border bg-[#121018]
                p-6
                overflow-hidden
              "
            >
              <span className="absolute top-5 right-5 text-xs text-purple-400/60">
                02
              </span>

              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                Decision Making
              </p>

              <h3 className="text-lg font-semibold text-white mb-2">
                Every choice is a trade-off
              </h3>

              <p className="text-sm text-purple-400 mb-3">
                Intentional compromises
              </p>

              <p className="text-sm text-gray-400 leading-relaxed">
                Performance, readability, scalability, and speed rarely improve
                together (especially in production contexts). I make trade-offs
                explicit and bias toward maintainability unless complexity is
                justified.
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
                border bg-[#121018]
                p-6
                overflow-hidden
              "
            >
              <span className="absolute top-5 right-5 text-xs text-purple-400/60">
                03
              </span>

              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                System Thinking
              </p>

              <h3 className="text-lg font-semibold text-white mb-2">
                I think in systems, not screens
              </h3>

              <p className="text-sm text-purple-400 mb-3">
                UI is behavior
              </p>

              <p className="text-sm text-gray-400 leading-relaxed">
                Interfaces are part of a larger system — state, data flow,
                performance, and UX form a single unit (learned through
                dashboard-heavy and data-driven interfaces). I design components
                to evolve, not just render.
              </p>
            </motion.article>
          </div>
        </div>

        {/* SYSTEM OUTPUT — SIGNATURE MOMENT */}
        <div className="mt-20 max-w-3xl">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
            System Output
          </p>

          <div className="
            relative pl-6 py-5
            rounded-lg
            bg-white/[0.03]
          ">
            <span className="absolute left-0 top-4 h-[70%] w-[2px] bg-purple-500/50 rounded-full" />

            <p className="text-gray-200 leading-relaxed">
              I optimize for long-term clarity — systems that teams can
              understand, extend, and trust months after they ship.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
