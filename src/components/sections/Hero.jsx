import { m } from 'motion/react'
import { socialLinks } from '../../data/socialLinks.js'

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

const iconMap = { github: GitHubIcon, linkedin: LinkedInIcon, email: EmailIcon }

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-5xl mx-auto w-full pt-24 pb-16">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <m.p variants={item} className="text-indigo-600 dark:text-indigo-400 font-mono text-sm tracking-widest uppercase">
            Hello, I&apos;m
          </m.p>

          <m.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Derek Wang
          </m.h1>

          <m.p variants={item} className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl">
            {/* TODO: Replace with your real tagline */}
            Software engineer who loves building things for the web.
          </m.p>

          <m.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              View Projects
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-slate-300 dark:border-slate-600 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-lg transition-colors"
            >
              Download Resume
            </a>
          </m.div>

          {/* Social links */}
          <m.div variants={item} className="flex gap-4 pt-2">
            {socialLinks.map(({ name, url, icon }) => {
              const Icon = iconMap[icon]
              return (
                <a
                  key={name}
                  href={url}
                  target={icon !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {Icon && <Icon />}
                </a>
              )
            })}
          </m.div>
        </m.div>
      </div>
    </section>
  )
}
