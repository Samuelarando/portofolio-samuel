import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, ExternalLink, Sparkles, CheckCircle2, Code2, Clock, Camera } from 'lucide-react';
import { fadeInUp, staggerContainer, hoverScale, tapScale } from '../../utils/motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-28 relative overflow-hidden">
      
      {/* =========================================================
          HIASAN SVG DEKORATIF LATAR BELAKANG
      ========================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-500/20 via-sky-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse" />
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12"
      >
        
         {/* =========================================================
            HEADER UTAMA: WELCOME TO MY PORTFOLIO
        ========================================================= */}
        <motion.div variants={fadeInUp} className="text-center space-y-6 max-w-4xl mx-auto py-8 relative">
          
          {/* Hiasan SVG Garis Geometris */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
            <svg className="w-full h-full max-w-3xl scale-110 opacity-70 dark:opacity-50" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10 100 Q 150 10, 300 100 T 590 100" stroke="url(#paint0_linear)" strokeWidth="3" strokeDasharray="6 6" />
              <circle cx="150" cy="50" r="6" className="text-amber-500 fill-current animate-ping" />
              <circle cx="450" cy="150" r="5" className="text-sky-400 fill-current animate-pulse" />
              <defs>
                <linearGradient id="paint0_linear" x1="10" y1="100" x2="590" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F59E0B" />
                  <stop offset="0.5" stopColor="#0EA5E9" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-mono uppercase tracking-[0.4em] shadow-xl backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '3s' }} />
            <span>Welcome to My Portfolio</span>
          </div>
          
          <h2 className="text-5xl sm:text-7xl font-serif italic tracking-tight text-stone-900 dark:text-white leading-[1.1] drop-shadow-sm">
            Architecting digital experiences with precision & soul.
          </h2>

          <div className="pt-4">
            <motion.a
              whileHover={hoverScale}
              whileTap={tapScale}
              href="#about"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-xs sm:text-sm font-mono tracking-widest uppercase shadow-xl border border-stone-800 dark:border-stone-200"
            >
              <span>Explore The Grid</span>
              <Camera className="w-4 h-4 text-sky-400 group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>


        {/* --- BENTO GRID CONTAINER UTAMA --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">

          {/* 1. KOTAK UTAMA (PROFIL & INTRO) */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-8 bg-stone-50/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[3rem] p-8 sm:p-12 border border-stone-200/90 dark:border-slate-800 flex flex-col justify-between shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-amber-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-8 z-10">
              {/* Badge Status Available */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                <CheckCircle2 className="w-4 h-4" />
                <span>Available for freelance & full-time roles</span>
              </div>

              {/* Nama & Peran */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-7xl font-serif text-stone-900 dark:text-white tracking-tight leading-[1.1]">
                  Samuel Arando Purba
                </h1>
                <p className="text-xl sm:text-2xl font-serif italic text-amber-700 dark:text-amber-500 font-medium">
                  Frontend Engineer & UI Specialist
                </p>
              </div>

              {/* Deskripsi */}
              <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Crafting modern, responsive, and high-performance web applications using React, TypeScript, and Tailwind CSS with a deep passion for immaculate user experience.
              </p>
            </div>

            {/* Tombol Aksi Bawah */}
            <div className="flex flex-wrap items-center gap-4 pt-10 z-10">
              <motion.a
                whileHover={hoverScale}
                whileTap={tapScale}
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-sm font-medium shadow-md group"
              >
                <span>Explore Works</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={hoverScale}
                whileTap={tapScale}
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-white dark:bg-slate-800 text-stone-800 dark:text-stone-200 text-sm font-medium border border-stone-300 dark:border-slate-700 shadow-xs"
              >
                <Mail className="w-4 h-4 text-stone-500" />
                <span>Get In Touch</span>
              </motion.a>
            </div>
          </motion.div>


          {/* 2. KOTAK FOTO PROFIL */}
          <motion.div 
            variants={fadeInUp}
            id="about" 
            className="md:col-span-4 bg-stone-100/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[3rem] p-5 border border-stone-200/90 dark:border-slate-800 flex flex-col justify-between items-center relative overflow-hidden group shadow-md scroll-mt-28"
          >
            <div className="w-full h-full min-h-[360px] sm:min-h-[440px] rounded-[2.2rem] overflow-hidden relative shadow-inner bg-stone-200 dark:bg-slate-800">
              <img
                src="/pict1.jpeg"
                alt="Samuel Arando Purba"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                <span className="text-xs font-mono tracking-widest uppercase opacity-90 block">Based in</span>
                <span className="text-base font-semibold">Indonesia</span>
              </div>
            </div>
          </motion.div>


          {/* 3. KOTAK STATISTIK */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-7 bg-stone-50/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[3rem] p-8 sm:p-10 border border-stone-200/90 dark:border-slate-800 shadow-md flex items-center justify-around text-center"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-center gap-2 text-stone-900 dark:text-white font-serif text-4xl sm:text-5xl font-bold">
                <Clock className="w-6 h-6 text-amber-500" />
                <span>1+</span>
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-stone-500 font-medium">Year Experience</p>
            </div>
            <div className="w-px h-12 bg-stone-300 dark:bg-slate-800" />
            <div className="space-y-1.5">
              <div className="flex items-center justify-center gap-2 text-stone-900 dark:text-white font-serif text-4xl sm:text-5xl font-bold">
                <Code2 className="w-6 h-6 text-sky-500" />
                <span>2+</span>
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-stone-500 font-medium">Featured Projects</p>
            </div>
          </motion.div>


          {/* 4. KOTAK SOSIAL MEDIA & TAUTAN */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-5 bg-stone-50/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[3rem] p-8 sm:p-10 border border-stone-200/90 dark:border-slate-800 shadow-md flex flex-col justify-between"
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 font-semibold mb-4">Connect</h3>
            <div className="grid grid-cols-2 gap-3.5">
              
              {/* GitHub Link */}
              <motion.a
                whileHover={hoverScale}
                whileTap={tapScale}
                href="https://github.com/Samuelarando"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-300/80 dark:border-slate-700 text-stone-800 dark:text-stone-200 text-xs font-medium hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 transition-all shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-50 ml-auto" />
              </motion.a>

              {/* LinkedIn Link */}
              <motion.a
                whileHover={hoverScale}
                whileTap={tapScale}
                href="https://www.linkedin.com/in/samuel-arando-purba/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-300/80 dark:border-slate-700 text-stone-800 dark:text-stone-200 text-xs font-medium hover:bg-sky-600 hover:text-white transition-all shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-50 ml-auto" />
              </motion.a>

            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};