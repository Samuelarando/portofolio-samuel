
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactFooter } from './components/sections/ContactSection';


export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Header / Navigasi */}
      <Navbar />

      {/* Konten Utama */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pt-20 pb-16">
        <HeroSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactFooter />
      </main>
    </div>
  );
}