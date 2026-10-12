import React from 'react';
import { motion } from 'framer-motion';
import { experiencesData } from '../../data/experiences';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer, hoverScale } from '../../utils/motion';

export const ExperienceSection: React.FC = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id="experience" 
      className="py-12 border-t border-slate-200 dark:border-slate-800"
    >
      <motion.div variants={fadeInUp} className="max-w-2xl mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          Work Experience
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Riwayat pekerjaan dan magang yang menyoroti kontribusi teknis serta pencapaian terukur.
        </p>
      </motion.div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-4 space-y-10">
        {experiencesData.map((exp) => (
          <motion.div key={exp.id} variants={fadeInUp} className="relative pl-6 sm:pl-8 group">
            {/* Dot Indicator */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-sky-500 group-hover:scale-125 group-hover:bg-sky-500 transition-all duration-200" />

            <motion.div 
              whileHover={hoverScale}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400 mt-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Badge Type & Period */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-medium border border-sky-500/20">
                    {exp.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>{exp.location}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="space-y-2 mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Key Achievements
                </h4>
                <ul className="space-y-1.5">
                  {exp.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Used */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};