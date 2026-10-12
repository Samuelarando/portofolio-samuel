export interface SkillCategory {
  title: string;
  skills: { name: string }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Next.js' },
      { name: 'Redux Toolkit / Zustand' },
      { name: 'HTML5 / CSS3' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'RESTful API' },
      { name: 'PostgreSQL' },
      { name: 'Supabase / Firebase' },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Vite' },
      { name: 'Webpack' },
      { name: 'Postman' },
      { name: 'Vercel / Netlify' },
      { name: 'Figma' },
    ],
  },
];