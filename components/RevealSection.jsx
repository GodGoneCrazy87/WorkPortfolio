'use client'

import { motion } from 'framer-motion'

export default function RevealSection({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-[900px]"
    >
      <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
        {title}
      </h2>
      <div className="text-gray-300 leading-relaxed">
        {children}
      </div>
    </motion.section>
  )
}
