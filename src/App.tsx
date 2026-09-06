import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FooterSection } from './components/FooterSection';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <main
      id="garv-shaw-portfolio"
      className="relative w-full bg-[#05070A] text-[#D7E2EA] overflow-x-clip min-h-screen"
    >
      {/* Immersive UI Ambient Glow Backdrops */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-900/20 rounded-full blur-[140px]" />
        <div className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] bg-indigo-900/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-950/25 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection onContactClick={handleScrollToContact} />

        {/* 2. Marquee Section - Project Gallery */}
        <MarqueeSection />

        {/* 3. About Section - Professional Background */}
        <AboutSection onContactClick={handleScrollToContact} />

        {/* 4. Skills Section - Core Competencies */}
        <ServicesSection id="skills" />

        {/* 5. Projects Section - Featured Work with Sticky Cards */}
        <ProjectsSection onSelectProject={handleSelectProject} />

        {/* Footer & Contact Section with Social Links */}
        <FooterSection id="contact" />
      </div>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseProject} />
    </main>
  );
}
