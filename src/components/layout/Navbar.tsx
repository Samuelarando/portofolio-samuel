import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles, ExternalLink, Download } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Efek bayangan saat halaman di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-stone-200/80 dark:border-slate-800/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-lg font-bold tracking-tight text-stone-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              Samuel.dev<span className="text-sky-500">.</span>
            </a>

            {/* Recruiter-focused Status Badge */}
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-sky-600 dark:hover:text-sky-400 rounded-xl hover:bg-stone-100 dark:hover:bg-slate-800/50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            
            {/* Group Tombol Resume (Preview & Download) dengan Animasi Hover */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-all shadow-sm hover:shadow-md hover:shadow-sky-500/20 overflow-hidden"
            >
              {/* Tombol Lihat/Preview PDF di Tab Baru */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium transition-colors border-r border-sky-500/40"
                title="Preview Resume"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
              
              {/* Tombol Langsung Unduh (Download) */}
              <a
                href="/resume.pdf"
                download="Samuel_Arando_Resume.pdf"
                className="px-2.5 py-2 hover:bg-sky-700 transition-colors flex items-center justify-center"
                title="Download Resume PDF"
              >
                <Download className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu dengan AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-stone-50 dark:bg-slate-900 border-b border-stone-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-3 py-2 mb-3 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Open for new job opportunities</span>
            </div>
            
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3.5 py-2.5 text-base font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Tombol Resume Mobile */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-stone-200 dark:border-slate-800">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-stone-200/70 dark:bg-slate-800 hover:bg-stone-300 dark:hover:bg-slate-700 rounded-xl transition-colors"
              >
                <FileText className="w-4 h-4 text-sky-500" />
                <span>Preview</span>
              </a>
              
              <a
                href="/resume.pdf"
                download="Samuel_Arando_Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};