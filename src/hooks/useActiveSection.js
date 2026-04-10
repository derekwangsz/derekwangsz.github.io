import { useState, useEffect } from 'react'

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Sections must have a `data-section` attribute set to their id.
 * @returns {string} id of the currently active section
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section)
          }
        })
      },
      { threshold: 0.4 },
    )

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return activeSection
}
