import { m } from 'motion/react'
import SectionWrapper from '../ui/SectionWrapper.jsx'

// TODO: Replace these with your real highlights
const highlights = [
  {
    type: 'Education',
    items: [
      { title: '[Your Degree]', subtitle: '[Your University] · [Start Year] – [End Year]' },
    ],
  },
  {
    type: 'Experience',
    items: [
      {
        title: '[Job Title] · [Company]',
        subtitle: '[Start Month Year] – [End Month Year / Present]',
        detail: 'Brief description of what you did and what impact it had.',
      },
    ],
  },
]

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

export default function Resume() {
  return (
    <SectionWrapper id="resume" className="border-t border-slate-200 dark:border-slate-800">
      <m.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-1">Resume</h2>
            <p className="text-slate-600 dark:text-slate-400">My experience and education at a glance.</p>
          </div>
          {/* TODO: Drop your resume.pdf into /public/ */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors self-start sm:self-auto"
          >
            <DownloadIcon />
            Download PDF
          </a>
        </div>

        <div className="flex flex-col gap-10">
          {highlights.map(({ type, items }) => (
            <div key={type}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                {type}
              </h3>
              <div className="flex flex-col gap-4">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="pl-4 border-l-2 border-indigo-200 dark:border-indigo-800"
                  >
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.subtitle}</p>
                    {item.detail && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </m.div>
    </SectionWrapper>
  )
}
