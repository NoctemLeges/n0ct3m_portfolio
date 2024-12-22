'use client'

import { Cog } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: "RetroSec Scanner", description: "A security scanner with a retro interface" },
  { id: 2, title: "8-bit Encryptor", description: "File encryption tool with an 8-bit aesthetic" },
  { id: 3, title: "NeonVPN", description: "A VPN client with a neon-soaked UI" },
]

export default function Projects() {
  return (
    <div className="px-4">
      <motion.h1
        className="text-2xl md:text-3xl font-bold mb-6 font-vt323"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="border border-accent p-4 rounded-lg hover:bg-[rgba(0,255,0,0.1)] transition-all duration-300 ease-in-out transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h2 className="text-lg md:text-xl font-bold mb-2 flex items-center font-vt323">
              <Cog className="mr-2 w-5 h-5 text-accent" />
              {project.title}
            </h2>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

