import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import FlickeringGrid from './components/FlickeringGrid';
import BlurFade from './components/BlurFade';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Dock from './components/Dock';

export function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased relative selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-black">
      {/* Top Ambient Flickering Grid with Fade Mask */}
      <div className="absolute inset-0 top-0 left-0 right-0 h-[120px] overflow-hidden z-0 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        >
          <FlickeringGrid
            squareSize={3}
            gridGap={3}
            color="#e60b0b"
            maxOpacity={0.4}
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-2xl mx-auto py-12 pb-28 sm:py-20 px-6">
        {currentTab === 'home' ? (
          <main className="min-h-dvh flex flex-col gap-12 sm:gap-14 relative">
            {/* Hero Section */}
            <section id="hero">
              <div className="mx-auto w-full max-w-2xl space-y-8">
                <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="gap-2 flex flex-col order-2 md:order-1">
                    <BlurFade delay={0.04}>
                      <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl text-foreground">
                        {portfolioData.personal.name}
                      </h1>
                    </BlurFade>
                    <BlurFade delay={0.08}>
                      <p className="text-muted-foreground max-w-[600px] text-base md:text-lg lg:text-xl font-normal leading-relaxed mt-1">
                        {portfolioData.personal.tagline}
                      </p>
                    </BlurFade>
                  </div>

                  {/* Avatar Profile */}
                  <BlurFade delay={0.04} className="order-1 md:order-2">
                    <div className="relative flex shrink-0 overflow-hidden size-24 md:size-32 border border-border rounded-full shadow-lg ring-4 ring-muted bg-muted">
                      {imageLoaded ? (
                        <img
                          src={portfolioData.personal.avatar}
                          alt={portfolioData.personal.name}
                          onError={() => setImageLoaded(false)}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-xl font-bold text-muted-foreground">
                          {portfolioData.personal.initials}
                        </span>
                      )}
                    </div>
                  </BlurFade>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about">
              <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={0.12}>
                  <h2 className="text-xl font-bold tracking-tight text-foreground">
                    About
                  </h2>
                </BlurFade>
                <BlurFade delay={0.16}>
                  <p className="text-justify max-w-full text-pretty font-sans leading-relaxed text-muted-foreground text-sm md:text-base">
                    {portfolioData.personal.about}
                  </p>
                </BlurFade>
              </div>
            </section>

            {/* Work Experience Section */}
            <section id="work">
              <div className="flex min-h-0 flex-col gap-y-5">
                <BlurFade delay={0.2}>
                  <h2 className="text-xl font-bold tracking-tight text-foreground">
                    Work Experience
                  </h2>
                </BlurFade>
                <BlurFade delay={0.24}>
                  <WorkExperience work={portfolioData.work} />
                </BlurFade>
              </div>
            </section>

            {/* Education Section */}
            <section id="education">
              <div className="flex min-h-0 flex-col gap-y-5">
                <BlurFade delay={0.28}>
                  <h2 className="text-xl font-bold tracking-tight text-foreground">
                    Education
                  </h2>
                </BlurFade>
                <BlurFade delay={0.32}>
                  <Education education={portfolioData.education} />
                </BlurFade>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills">
              <div className="flex min-h-0 flex-col gap-y-4">
                <BlurFade delay={0.36}>
                  <h2 className="text-xl font-bold tracking-tight text-foreground">
                    Skills
                  </h2>
                </BlurFade>
                <BlurFade delay={0.4}>
                  <Skills skills={portfolioData.skills} />
                </BlurFade>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
              <BlurFade delay={0.44}>
                <Projects projects={portfolioData.projects} />
              </BlurFade>
            </section>

            {/* Contact Section */}
            <section id="contact">
              <BlurFade delay={0.5}>
                <Contact
                  email={portfolioData.personal.email}
                  calLink={portfolioData.personal.calLink}
                />
              </BlurFade>
            </section>
          </main>
        ) : (
          <Blog posts={portfolioData.blogPosts} />
        )}
      </div>

      {/* Fixed Bottom Gradient Fade Blur */}
      <div
        className="fixed bottom-0 inset-x-0 h-16 w-full bg-background/80 to-transparent backdrop-blur-lg pointer-events-none z-20"
        style={{
          maskImage: 'linear-gradient(to top, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
        }}
      />

      {/* Signature Floating macOS Dock */}
      <Dock
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        socials={portfolioData.socials}
      />
    </div>
  );


}

export default App;
