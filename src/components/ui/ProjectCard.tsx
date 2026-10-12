import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import {  type Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg transition-all duration-300">
      {/* Gambar Proyek */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {project.metrics && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-400 text-xs font-medium border border-slate-700">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{project.metrics}</span>
          </div>
        )}
      </div>

      {/* Konten Kartu */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-6">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};