'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, delay = 0 }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"

      /* IMPORTANT */
      viewport={{
        once: true,
        amount: 0.25,   // not full visibility
      }}

      variants={
        reduce
          ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }
          : {
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.45,
                  delay,
                  ease: 'easeOut',
                },
              },
            }
      }
    >
      {children}
    </motion.div>
  )
}
