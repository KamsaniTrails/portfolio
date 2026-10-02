import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import BentoHero from './components/BentoHero';
import BentoMetrics from './components/BentoMetrics';
import BentoProjects from './components/BentoProjects';
import InteractiveAgentPlayground from './components/InteractiveAgentPlayground';
import BentoSkills from './components/BentoSkills';
import BentoExperience from './components/BentoExperience';
import BentoContact from './components/BentoContact';
import Footer from './components/Footer';
import Dock from './components/Dock';
import ResumeModal from './components/ResumeModal';
import Blog from './components/Blog';

export function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased relative selection:bg-blue-600 selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-3xl" />
        <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-violet-600/5 blur-3xl" />
      </div>

      {/* Top Glassmorphic Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        socials={portfolioData.socials}
      />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-28 px-4 sm:px-6 space-y-16 sm:space-y-24">
        {currentTab === 'home' ? (
          <>
            {/* Bento Hero Section */}
            <BentoHero
              personal={portfolioData.personal}
              onOpenResume={() => setIsResumeModalOpen(true)}
            />

            {/* Glowing Metrics Bento */}
            <BentoMetrics achievements={portfolioData.achievements} />

            {/* Featured Projects Bento Grid */}
            <BentoProjects projects={portfolioData.projects} />

            {/* Interactive LangGraph & RAG Live Simulator */}
            <InteractiveAgentPlayground />

            {/* Technical Skills Domain Bento Grid */}
            <BentoSkills skillsCategories={portfolioData.skillsCategories} />

            {/* Experience & Education Bento */}
            <BentoExperience
              work={portfolioData.work}
              education={portfolioData.education}
            />

            {/* Contact Bento */}
            <BentoContact
              personal={portfolioData.personal}
              onOpenResume={() => setIsResumeModalOpen(true)}
            />
          </>
        ) : (
          <div className="max-w-3xl mx-auto pt-4">
            <Blog posts={portfolioData.blogPosts} />
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer
        personal={portfolioData.personal}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Floating macOS Dock at bottom */}
      <Dock
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        socials={portfolioData.socials}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Interactive Resume Modal with PDF embed */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        resumeUrl={portfolioData.personal.resumePdf}
      />
    </div>
  );
}

export default App;
