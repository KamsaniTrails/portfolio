import React from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Layers,
  Network,
  Radio,
  Server,
  Sparkles,
  GitBranch,
  Bot
} from 'lucide-react';

// Specific icon mapping for skills
const getSkillIcon = (skill) => {
  const s = skill.toLowerCase();
  if (s.includes('react') || s.includes('next')) return <Layers className="size-4 text-cyan-500" />;
  if (s.includes('script')) return <Code2 className="size-4 text-amber-500" />;
  if (s.includes('python')) return <Terminal className="size-4 text-blue-500" />;
  if (s.includes('c++')) return <Cpu className="size-4 text-indigo-500" />;
  if (s.includes('aws') || s.includes('cloud')) return <Cloud className="size-4 text-orange-500" />;
  if (s.includes('postgres') || s.includes('sql') || s.includes('mongo') || s.includes('redis') || s.includes('qdrant') || s.includes('prisma') || s.includes('supabase') || s.includes('vectordb')) {
    return <Database className="size-4 text-emerald-500" />;
  }
  if (s.includes('docker')) return <Server className="size-4 text-sky-500" />;
  if (s.includes('git')) return <GitBranch className="size-4 text-red-500" />;
  if (s.includes('socket') || s.includes('webrtc')) return <Radio className="size-4 text-purple-500" />;
  if (s.includes('rag') || s.includes('prompt') || s.includes('ai')) return <Sparkles className="size-4 text-rose-500" />;
  return <Code2 className="size-4 text-neutral-400" />;
};

export const Skills = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="border bg-background border-border ring-2 ring-border/20 hover:ring-border/60 rounded-xl h-8 w-fit px-3.5 flex items-center gap-2 transition-all duration-200 cursor-default hover:scale-[1.03]"
        >
          {getSkillIcon(skill)}
          <span className="text-foreground text-sm font-medium">
            {skill}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
