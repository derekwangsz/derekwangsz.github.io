/**
 * Consistent section container. Sets id + data-section for the
 * IntersectionObserver hook, and applies standard vertical padding.
 */
export default function SectionWrapper({ id, className = '', children }) {
  return (
    <section
      id={id}
      data-section={id}
      className={`py-20 px-6 max-w-5xl mx-auto ${className}`}
    >
      {children}
    </section>
  )
}
