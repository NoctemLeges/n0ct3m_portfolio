import './globals.css'
import { Inter, VT323 } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import MatrixBackground from './components/matrix-background'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const vt323 = VT323({ weight: '400', subsets: ['latin'], variable: '--font-vt323' })

export const metadata = {
  title: 'n0ct3m\'s Retro Portfolio',
  description: 'Security enthusiast, retro lover, code crafter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${vt323.variable}`}>
      <body className="bg-black text-[#EEEEEE] min-h-screen flex flex-col font-mono">
        <MatrixBackground />
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

