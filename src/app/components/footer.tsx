import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-accent p-4 text-center">
      <div className="container mx-auto flex justify-center space-x-4">
        <a href="https://github.com/NoctemLeges" target="_blank" rel="noopener noreferrer" className="hover-accent transition-colors">
          <Github className="text-accent" />
        </a>
        <a href="https://x.com/n0ct3m_" target="_blank" rel="noopener noreferrer" className="hover-accent transition-colors">
          <Twitter className="text-accent" />
        </a>
        <a href="https://www.linkedin.com/in/satadru-roy12" target="_blank" rel="noopener noreferrer" className="hover-accent transition-colors">
          <Linkedin className="text-accent" />
        </a>
      </div>
      <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} n0ct3m. All rights reserved.</p>
    </footer>
  )
}

