import { useState } from 'react'
import { m } from 'motion/react'
import SectionWrapper from '../ui/SectionWrapper.jsx'
import ProjectCard from '../ui/ProjectCard.jsx'
import { projects } from '../../data/projects.js'

export default function Projects() {
  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <SectionWrapper id="projects" className="border-t border-slate-200 dark:border-slate-800">
      <m.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          A selection of things I&apos;ve built.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </m.div>
    </SectionWrapper>
  )
}
