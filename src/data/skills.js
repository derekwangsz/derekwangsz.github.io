/**
 * @typedef {'beginner'|'intermediate'|'advanced'} SkillLevel
 *
 * @typedef {Object} Skill
 * @property {string}     name
 * @property {SkillLevel} level
 *
 * @typedef {Object} SkillGroup
 * @property {string}  group
 * @property {Skill[]} items
 */

/** @type {SkillGroup[]} */
export const skills = [
  {
    group: 'Languages',
    items: [
      { name: 'JavaScript', level: 'advanced' },
      { name: 'Python', level: 'advanced' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'Java', level: 'intermediate' },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'React', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'Vite', level: 'intermediate' },
      { name: 'HTML / CSS', level: 'advanced' },
    ],
  },
  {
    group: 'Backend & Infra',
    items: [
      { name: 'Node.js', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'Docker', level: 'beginner' },
      { name: 'Git / GitHub', level: 'advanced' },
    ],
  },
]
