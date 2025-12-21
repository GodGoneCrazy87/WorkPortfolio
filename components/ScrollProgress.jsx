'use client'

import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="
        fixed top-0 left-0 right-0 h-[2px]
        origin-left z-50
        bg-gradient-to-r from-purple-500 to-blue-500
      "
    />
  )
}
