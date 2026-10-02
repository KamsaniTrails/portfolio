import React from 'react';
import { Award, Code, Cpu, GraduationCap, CheckCircle } from 'lucide-react';

const icons = [
  <Code key="dsa" className="size-5 text-amber-500" />,
  <Cpu key="ai" className="size-5 text-cyan-500" />,
  <Award key="api" className="size-5 text-emerald-500" />,
  <GraduationCap key="edu" className="size-5 text-indigo-500" />,
];

export const Achievements = ({ achievements }) => {
  if (!achievements || achievements.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {achievements.map((item, index) => (
        <div
          key={index}
          className="relative group p-4 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-foreground/20 transition-all duration-300 shadow-sm flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="p-2 rounded-lg bg-background border border-border/60 group-hover:scale-105 transition-transform duration-200">
              {icons[index % icons.length]}
            </span>
            <span className="text-2xl font-bold tracking-tight text-foreground font-sans">
              {item.metric}
            </span>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground tracking-tight line-clamp-1">
              {item.label}
            </h4>
            <p className="text-[11px] text-muted-foreground leading-tight mt-1 line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
