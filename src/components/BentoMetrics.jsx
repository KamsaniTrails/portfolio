import React from 'react';
import { Code, Cpu, Award, GraduationCap } from 'lucide-react';

export const BentoMetrics = ({ achievements }) => {
  const iconList = [
    <Code key="dsa" className="size-5 text-amber-500" />,
    <Cpu key="ai" className="size-5 text-cyan-500" />,
    <Award key="apis" className="size-5 text-emerald-500" />,
    <GraduationCap key="gpa" className="size-5 text-indigo-500" />
  ];

  return (
    <section id="metrics" className="scroll-mt-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="bento-card p-4 sm:p-5 flex flex-col justify-between group shadow-xs hover:border-foreground/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-xl bg-background border border-border/80 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                {iconList[idx % iconList.length]}
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-mono">
                {item.metric}
              </span>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold text-foreground tracking-tight">
                {item.label}
              </h4>
              <p className="text-[11px] text-muted-foreground leading-tight mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoMetrics;
