'use client'

import { Terminal } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Terminal className="w-16 h-16 mb-4 text-accent" />
      </motion.div>
      <motion.h1
        className="text-3xl md:text-8xl mb-4 font-vt323 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Welcome to n0ct3m's Lair
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mb-8 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Security enthusiast, retro lover, and code crafter. 
        Explore my digital playground of cybersecurity insights and retro-inspired projects.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <motion.a
          href="/blog"
          className="block p-6 border border-accent rounded-lg hover:bg-[rgba(0,255,0,0.1)] transition-all duration-500 ease-in-out transform hover:scale-110 bg-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-white text-accent">Blog</h2>
          <p>Dive into my thoughts on security, retro tech, and more.</p>
        </motion.a>
        <motion.a
          href="/projects"
          className="block p-6 border border-accent rounded-lg hover:bg-[rgba(0,255,0,0.1)] transition-all duration-500 ease-in-out transform hover:scale-110 bg-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-white text-accent">Projects</h2>
          <p>Check out my latest hacks, tools, and experiments.</p>
        </motion.a>
      </div>
    </div>
  )
}

