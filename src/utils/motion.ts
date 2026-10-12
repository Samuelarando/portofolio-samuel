// src/utils/motion.ts
import type { Variants, Transition } from 'framer-motion';

const smoothTransition: Transition = {
  duration: 0.7,
  ease: [0.25, 1, 0.5, 1]
};

// Varian khusus untuk Navbar (muncul dari atas)
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: smoothTransition
  }
};

// Efek muncul dari bawah (Fade In + Slide Up)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: smoothTransition
  }
};

// Efek muncul dari kiri
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: smoothTransition
  }
};

// Efek muncul dari kanan
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: smoothTransition
  }
};

// Container untuk stagger effect
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    }
  }
};

// Efek hover & tap
export const hoverScale = {
  scale: 1.015,
  y: -3,
  transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] as Transition["ease"] }
};

export const tapScale = {
  scale: 0.985,
  transition: { duration: 0.1 }
};