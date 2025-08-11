'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 origin-left z-[9999] shadow-lg"
      style={{ scaleX }}
    />
  )
}
