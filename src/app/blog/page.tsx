'use client'

import { BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const blogPosts = [
  { id: 1, title: "The Art of Ethical Hacking", date: "2023-06-01" },
  { id: 2, title: "Retro Computing: Why It Still Matters", date: "2023-05-15" },
  { id: 3, title: "Securing Your Digital Fortress", date: "2023-04-30" },
]

export default function Blog() {
  return (
    <div className="px-4">
      <motion.h1
        className="text-2xl md:text-3xl font-bold mb-6 font-vt323"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog Posts
      </motion.h1>
      <div className="space-y-4">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="border border-accent p-4 rounded-lg hover:bg-[rgba(0,255,0,0.1)] transition-all duration-300 ease-in-out transform hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h2 className="text-lg md:text-xl font-bold mb-2 flex items-center font-vt323">
              <BookOpen className="mr-2 w-5 h-5 text-accent" />
              {post.title}
            </h2>
            <p className="text-accent">{post.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

