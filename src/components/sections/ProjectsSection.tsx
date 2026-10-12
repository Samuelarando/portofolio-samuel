import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { fadeInUp, staggerContainer } from '../../utils/motion';

export const ProjectsSection: React.FC = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id="projects" 
      className="py-12 border-t border-slate-200 dark:border-slate-800"
    >
      <motion.div variants={fadeInUp} className="max-w-2xl mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Beberapa studi kasus proyek pilihan yang menampilkan arsitektur kode, keputusan desain, dan kemampuan problem-solving saya.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={fadeInUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};