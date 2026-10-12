import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';
import { Code2, Server, Wrench } from 'lucide-react';
import { fadeInUp, staggerContainer, hoverScale } from '../../utils/motion';

const categoryIcons: Record<string, React.ReactNode> = {
  'Frontend Development': <Code2 className="w-5 h-5 text-sky-500" />,
  'Backend & Database': <Server className="w-5 h-5 text-emerald-500" />,
  'Tools & Workflow': <Wrench className="w-5 h-5 text-amber-500" />,
};

export const TechStackSection: React.FC = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id="skills" 
      className="py-12 border-t border-slate-200 dark:border-slate-800"
    >
      <motion.div variants={fadeInUp} className="max-w-2xl mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          Tech Stack & Capabilities
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Kumpulan teknologi, framework, dan tools yang biasa saya gunakan untuk membangun produk web modern.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeInUp}
            whileHover={hoverScale}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-4 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            {/* Header Kategori */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                {categoryIcons[category.title] || <Code2 className="w-5 h-5 text-sky-500" />}
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            {/* List Chips Skill */}
            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60 hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};