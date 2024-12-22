import { Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-accent p-4 text-center">
      <div className="container mx-auto flex justify-center space-x-4">
        <a href="https://github.com/n0ct3m" target="_blank" rel="noopener noreferrer" className="hover-accent transition-colors">
          <Github className="text-accent" />
        </a>
        <a href="https://twitter.com/n0ct3m" target="_blank" rel="noopener noreferrer" className="hover-accent transition-colors">
          <Twitter className="text-accent" />
        </a>
      </div>
      <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} n0ct3m. All rights reserved.</p>
    </footer>
  )
}

