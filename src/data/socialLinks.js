/**
 * @typedef {Object} SocialLink
 * @property {string} name
 * @property {string} url
 * @property {'github'|'linkedin'|'email'} icon
 */

/** @type {SocialLink[]} */
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/derekwangsz',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    // TODO: Replace with your real LinkedIn URL
    url: 'https://linkedin.com/in/your-profile',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    // TODO: Replace with your real email
    url: 'mailto:your@email.com',
    icon: 'email',
  },
]
