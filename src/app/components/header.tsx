'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Terminal, BookOpen, Cog, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-accent p-4 relative z-10 bg-black">
      <nav className="container mx-auto flex justify-between items-center ">
        <Link href="/" className="text-3xl flex items-center hover-accent transition-all duration-300 ease-in-out transform hover:scale-110">
          <Terminal className="mr-2 text-accent" />
          <span className="font-vt323">n0ct3m</span>
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-accent">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-black md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-4`}>
          <li>
            <Link href="/blog" className="flex items-center hover-accent transition-all duration-300 ease-in-out transform hover:scale-105">
              <BookOpen className="mr-1 w-5 h-5 text-accent" />
              <span className="font-vt323 text-2xl">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/projects" className="flex items-center hover-accent transition-all duration-300 ease-in-out transform hover:scale-105">
              <Cog className="mr-1 w-5 h-5 text-accent" />
              <span className="font-vt323 text-2xl">Projects</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

