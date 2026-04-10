import { m } from 'motion/react'
import SectionWrapper from '../ui/SectionWrapper.jsx'
import SkillBadge from '../ui/SkillBadge.jsx'
import { skills } from '../../data/skills.js'

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="border-t border-slate-200 dark:border-slate-800">
      <m.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Technologies I work with.
        </p>

        <div className="flex flex-col gap-8">
          {skills.map(({ group, items }) => (
            <div key={group}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                {group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(({ name, level }) => (
                  <SkillBadge key={name} name={name} level={level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" /> Advanced
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" /> Intermediate
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" /> Beginner
          </span>
        </div>
      </m.div>
    </SectionWrapper>
  )
}
