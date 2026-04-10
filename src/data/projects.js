/**
 * @typedef {Object} Project
 * @property {string}      id
 * @property {string}      title
 * @property {string}      description
 * @property {string[]}    tags
 * @property {string}      category
 * @property {string|null} liveUrl
 * @property {string|null} repoUrl
 * @property {string|null} imageUrl
 * @property {boolean}     featured
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio',
    description:
      'This site! A single-page portfolio built with Vite, React 19, and Tailwind CSS v4. Deployed automatically to GitHub Pages via GitHub Actions.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'GitHub Actions'],
    category: 'Web',
    liveUrl: 'https://derekwangsz.github.io',
    repoUrl: 'https://github.com/derekwangsz/derekwangsz.github.io',
    imageUrl: null,
    featured: true,
  },
  {
    id: 'placeholder-project-1',
    title: 'Project Two',
    description:
      'Replace this with a real project description. Explain what problem it solves, the tech stack you used, and any interesting engineering decisions.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    category: 'Web',
    liveUrl: null,
    repoUrl: null,
    imageUrl: null,
    featured: false,
  },
  {
    id: 'placeholder-project-2',
    title: 'Project Three',
    description:
      'Replace this with a real project description. A great project card answers: what does it do, how did you build it, and why does it matter.',
    tags: ['TypeScript', 'Node.js', 'Docker'],
    category: 'Tools',
    liveUrl: null,
    repoUrl: null,
    imageUrl: null,
    featured: false,
  },
]
