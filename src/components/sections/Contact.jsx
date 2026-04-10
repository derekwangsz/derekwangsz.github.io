import { useState } from 'react'
import { m } from 'motion/react'
import SectionWrapper from '../ui/SectionWrapper.jsx'

// TODO: Sign up at https://web3forms.com, verify your email,
// and paste your access key below (or add it as VITE_WEB3FORMS_KEY in .env.local).
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? 'YOUR_WEB3FORMS_KEY_HERE'

export default function Contact() {
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)
    formData.set('access_key', WEB3FORMS_KEY)
    formData.set('subject', 'Portfolio Contact Form')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper id="contact" className="border-t border-slate-200 dark:border-slate-800">
      <m.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Have a project in mind or just want to chat? Send me a message and I&apos;ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700
                bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100
                placeholder:text-slate-400 dark:placeholder:text-slate-500
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700
                bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100
                placeholder:text-slate-400 dark:placeholder:text-slate-500
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="What's on your mind?"
              className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700
                bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100
                placeholder:text-slate-400 dark:placeholder:text-slate-500
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending' || status === 'success'}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed
              text-white font-medium rounded-lg transition-colors self-start"
          >
            {status === 'sending' ? 'Sending…' : status === 'success' ? 'Message sent!' : 'Send Message'}
          </button>

          {status === 'error' && (
            <p className="text-sm text-red-600 dark:text-red-400">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </m.div>
    </SectionWrapper>
  )
}
