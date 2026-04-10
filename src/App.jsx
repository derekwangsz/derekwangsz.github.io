import { useState, lazy, Suspense, useEffect } from 'react'
import { LazyMotion, domAnimation } from 'motion/react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'

const About = lazy(() => import('./components/sections/About.jsx'))
const Projects = lazy(() => import('./components/sections/Projects.jsx'))
const Skills = lazy(() => import('./components/sections/Skills.jsx'))
const Resume = lazy(() => import('./components/sections/Resume.jsx'))
const Contact = lazy(() => import('./components/sections/Contact.jsx'))

function SectionFallback() {
  return (
    <div className="py-20 flex justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
    </div>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
        <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode(d => !d)} />
        <main>
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <About />
            <Projects />
            <Skills />
            <Resume />
            <Contact />
          </Suspense>
        </main>
        <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
          <p>Built with React + Vite + Tailwind CSS &mdash; Deployed on GitHub Pages</p>
        </footer>
      </div>
    </LazyMotion>
  )
}
