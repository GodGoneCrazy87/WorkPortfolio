'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function ClientLayout({ children }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="sync" initial={false}>
      <motion.div
        key={pathname}

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

        transition={{ duration: 0.2, ease: 'easeOut' }}

        className="min-h-screen w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
