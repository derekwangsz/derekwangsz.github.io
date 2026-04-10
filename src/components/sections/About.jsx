import { m } from 'motion/react'
import SectionWrapper from '../ui/SectionWrapper.jsx'

export default function About() {
  return (
    <SectionWrapper id="about">
      <m.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row gap-12 items-center"
      >
        {/* Avatar placeholder */}
        <div className="shrink-0 w-40 h-40 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-6xl select-none shadow-inner">
          👤
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="flex flex-col gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
            {/* TODO: Replace with your real bio */}
            <p>
              Hi! I&apos;m Derek, a software engineer based in [Your City]. I&apos;m passionate about
              building clean, performant web applications and solving real-world problems with code.
            </p>
            <p>
              I&apos;m currently studying [Your Major] at [Your University / Company]. When I&apos;m not
              coding, you can find me [hobby 1], [hobby 2], or [hobby 3].
            </p>
            <p>
              I&apos;m actively looking for [internship / full-time] opportunities. Feel free to reach out!
            </p>
          </div>
        </div>
      </m.div>
    </SectionWrapper>
  )
}
