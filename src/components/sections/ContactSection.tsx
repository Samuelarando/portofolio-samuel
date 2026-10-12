import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, Sparkles, ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer, hoverScale, tapScale } from '../../utils/motion';

export const ContactFooter: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = 'smlarando11@gmail.com';
  const phoneNumber = '082116299611';

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <motion.footer 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id="contact" 
      className="pt-20 pb-12 relative overflow-hidden border-t border-stone-200/80 dark:border-slate-800/80 bg-stone-50/50 dark:bg-slate-950/50 backdrop-blur-md"
    >
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* BAGIAN UTAMA: CALL TO ACTION & KONTAK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <motion.div variants={fadeInUp} className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 text-white dark:bg-white dark:text-stone-950 text-xs font-mono uppercase tracking-[0.3em]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 dark:text-white tracking-tight leading-[1.1]">
              Let’s build something extraordinary together.
            </h2>
            <p className="text-stone-600 dark:text-stone-300 text-base font-light max-w-md">
              Terbuka untuk kesempatan kolaborasi, proyek web development, maupun posisi penuh waktu sebagai Frontend Engineer.
            </p>
          </motion.div>

          {/* KARTU KONTAK LANGSUNG (EMAIL & HP) */}
          <motion.div variants={fadeInUp} className="lg:col-span-6 space-y-4">
            
            {/* Email Box */}
            <motion.div 
              whileHover={hoverScale}
              whileTap={tapScale}
              className="flex items-center justify-between p-5 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-xs hover:border-sky-500/50 transition-colors"
            >
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">Direct Email</span>
                  <a href={`mailto:${emailAddress}`} className="text-sm sm:text-base font-medium text-stone-900 dark:text-white hover:text-sky-500 transition-colors truncate block">
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(emailAddress, 'email')}
                className="px-4 py-2.5 rounded-xl bg-stone-100 dark:bg-slate-800 hover:bg-stone-200 dark:hover:bg-slate-700 text-stone-700 dark:text-stone-200 text-xs font-medium transition-colors flex items-center gap-1.5 flex-shrink-0 ml-3"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Phone / WhatsApp Box */}
            <motion.div 
              whileHover={hoverScale}
              whileTap={tapScale}
              className="flex items-center justify-between p-5 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">Phone / WhatsApp</span>
                  <a href="https://wa.me/6282116299611" target="_blank" rel="noreferrer" className="text-sm sm:text-base font-medium text-stone-900 dark:text-white hover:text-emerald-500 transition-colors truncate block">
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(phoneNumber, 'phone')}
                className="px-4 py-2.5 rounded-xl bg-stone-100 dark:bg-slate-800 hover:bg-stone-200 dark:hover:bg-slate-700 text-stone-700 dark:text-stone-200 text-xs font-medium transition-colors flex items-center gap-1.5 flex-shrink-0 ml-3"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </motion.div>

          </motion.div>

        </div>


        {/* GARIS PEMBATAS & COPYRIGHT */}
        <motion.div variants={fadeInUp} className="pt-12 border-t border-stone-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-500 dark:text-stone-400 font-mono">
          
          <div>
            © {new Date().getFullYear()} Samuel Arando Purba. All rights reserved.
          </div>

          {/* Tautan Sosial Media Cepat */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Samuelarando"
              target="_blank"
              rel="noreferrer"
              className="hover:text-stone-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-arando-purba/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-stone-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="#about"
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Back to Top ↑
            </a>
          </div>

        </motion.div>

      </div>
    </motion.footer>
  );
};