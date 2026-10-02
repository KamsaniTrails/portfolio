import React, { useState } from 'react';
import {
  Sparkles,
  Brain,
  Code2,
  Terminal,
  Layers,
  Server,
  Radio,
  Database,
  Bot,
  GitBranch,
  Cpu
} from 'lucide-react';

const getDomainIcon = (domainName) => {
  const d = domainName.toLowerCase();
  if (d.includes('ai') || d.includes('agentic') || d.includes('rag')) {
    return <Sparkles className="size-4 text-cyan-400" />;
  }
  if (d.includes('language') || d.includes('core')) {
    return <Code2 className="size-4 text-amber-400" />;
  }
  if (d.includes('frontend')) {
    return <Layers className="size-4 text-sky-400" />;
  }
  if (d.includes('backend') || d.includes('real-time')) {
    return <Server className="size-4 text-indigo-400" />;
  }
  return <Database className="size-4 text-emerald-400" />;
};

export const BentoSkills = ({ skillsCategories }) => {
  return (
    <section id="skills" className="scroll-mt-24 space-y-6">
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-2">
          <Cpu className="size-3.5" />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Engineering Skills &amp; Domain Expertise
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
          Deep technical foundations spanning AI agents, algorithms, modern JavaScript frameworks, and cloud data stores.
        </p>
      </div>

      {/* Bento Grid for Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {skillsCategories.map((cat, idx) => {
          const isWide = idx === 0; // The AI & Agentic domain gets spotlight wide card
          return (
            <div
              key={idx}
              className={`bento-card p-5 sm:p-6 flex flex-col justify-between group ${
                isWide ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-950/20 via-card to-card border-blue-500/20' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-background border border-border/80 shadow-2xs">
                      {getDomainIcon(cat.category)}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-foreground tracking-tight">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-muted-foreground px-2 py-0.5 rounded-full bg-muted/60">
                    {cat.skills.length} Techs
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-background border border-border/70 hover:border-foreground/30 text-foreground transition-all duration-150 shadow-2xs hover:scale-[1.02] cursor-default"
                    >
                      <span className="size-1.5 rounded-full bg-blue-500/80" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {isWide && (
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    <Sparkles className="size-3" /> Core Specialization
                  </span>
                  <span>LangGraph • LangChain • Pinecone • FAISS • GPT-4</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BentoSkills;
