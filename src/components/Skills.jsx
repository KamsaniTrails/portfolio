import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Layers,
  Radio,
  Server,
  Sparkles,
  GitBranch,
  Bot,
  Brain,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const getSkillIcon = (skill) => {
  const s = skill.toLowerCase();
  if (s.includes('rag') || s.includes('langgraph') || s.includes('agent') || s.includes('llm') || s.includes('openai') || s.includes('gpt') || s.includes('prompt')) {
    return <Sparkles className="size-3.5 text-cyan-500" />;
  }
  if (s.includes('pinecone') || s.includes('faiss') || s.includes('chromadb') || s.includes('vector') || s.includes('semantic')) {
    return <Brain className="size-3.5 text-violet-500" />;
  }
  if (s.includes('react') || s.includes('html') || s.includes('css') || s.includes('tailwind') || s.includes('ui/ux') || s.includes('responsive')) {
    return <Layers className="size-3.5 text-sky-500" />;
  }
  if (s.includes('python') || s.includes('java') || s.includes('script') || s.includes('c ') || s.includes('sql')) {
    return <Code2 className="size-3.5 text-amber-500" />;
  }
  if (s.includes('mongo') || s.includes('postgres') || s.includes('mysql') || s.includes('database') || s.includes('schema') || s.includes('dbms')) {
    return <Database className="size-3.5 text-emerald-500" />;
  }
  if (s.includes('node') || s.includes('express') || s.includes('api') || s.includes('jwt') || s.includes('middleware')) {
    return <Server className="size-3.5 text-indigo-500" />;
  }
  if (s.includes('webrtc') || s.includes('socket') || s.includes('stun')) {
    return <Radio className="size-3.5 text-pink-500" />;
  }
  if (s.includes('copilot') || s.includes('cursor') || s.includes('claude')) {
    return <Bot className="size-3.5 text-purple-500" />;
  }
  if (s.includes('git') || s.includes('postman') || s.includes('agile') || s.includes('sdlc') || s.includes('vs code')) {
    return <GitBranch className="size-3.5 text-rose-500" />;
  }
  if (s.includes('dsa') || s.includes('algorithms') || s.includes('oop') || s.includes('system design') || s.includes('operating systems')) {
    return <Cpu className="size-3.5 text-blue-500" />;
  }
  return <Terminal className="size-3.5 text-neutral-400" />;
};

export const Skills = ({ skills, skillsCategories }) => {
  const [viewMode, setViewMode] = useState('categories'); // 'categories' | 'all'

  return (
    <div className="flex flex-col gap-4">
      {/* View Switcher Header */}
      <div className="flex items-center justify-between pb-1 border-b border-border/40">
        <span className="text-xs text-muted-foreground">
          {viewMode === 'categories' ? 'Categorized Technical Domains' : 'Core Technologies & Tools'}
        </span>
        <div className="inline-flex p-0.5 rounded-lg border border-border bg-card text-xs">
          <button
            type="button"
            onClick={() => setViewMode('categories')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              viewMode === 'categories'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            By Domain
          </button>
          <button
            type="button"
            onClick={() => setViewMode('all')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              viewMode === 'all'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            All Skills
          </button>
        </div>
      </div>

      {viewMode === 'categories' && skillsCategories ? (
        <div className="flex flex-col gap-4">
          {skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-border/70 bg-card/40 hover:bg-card/70 transition-colors"
            >
              <h3 className="text-xs font-semibold text-foreground tracking-tight uppercase flex items-center gap-1.5 mb-2.5 text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="border bg-background border-border/80 hover:border-foreground/30 rounded-lg h-7 px-2.5 flex items-center gap-1.5 transition-all duration-150 cursor-default hover:scale-[1.02] shadow-2xs"
                  >
                    {getSkillIcon(skill)}
                    <span className="text-foreground text-xs font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border bg-background border-border ring-1 ring-border/20 hover:ring-border/60 rounded-xl h-8 w-fit px-3 flex items-center gap-2 transition-all duration-200 cursor-default hover:scale-[1.03]"
            >
              {getSkillIcon(skill)}
              <span className="text-foreground text-xs sm:text-sm font-medium">
                {skill}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
