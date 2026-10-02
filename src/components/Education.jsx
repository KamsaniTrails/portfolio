import React, { useState } from 'react';
import { ArrowUpRight, GraduationCap } from 'lucide-react';

export const Education = ({ education }) => {
  const [failedLogos, setFailedLogos] = useState({});

  const handleImageError = (index) => {
    setFailedLogos((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="flex flex-col gap-4">
      {education.map((item, index) => {
        const hasFailedLogo = failedLogos[index] || !item.logo;

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-border/70 bg-card/40 hover:bg-card/70 transition-all duration-200 group cursor-pointer block"
          >
            <div className="flex items-start gap-x-3.5 justify-between">
              <div className="flex items-center gap-x-3.5 flex-1 min-w-0">
                {!hasFailedLogo ? (
                  <img
                    src={item.logo}
                    alt={item.institution}
                    onError={() => handleImageError(index)}
                    className="size-10 md:size-12 p-1 border border-border rounded-xl shadow-xs ring-1 ring-border/50 bg-background object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 md:size-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-border flex items-center justify-center font-bold text-sm flex-none shadow-xs">
                    <GraduationCap className="size-5" />
                  </div>
                )}
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <div className="font-semibold text-sm md:text-base leading-snug flex items-center gap-1.5 text-foreground">
                    <span>{item.institution}</span>
                    <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </div>
                  <div className="text-xs md:text-sm text-foreground/80 font-medium">
                    {item.degree}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1 flex-none pl-2">
                <span className="text-xs font-mono tabular-nums text-muted-foreground">
                  {item.period}
                </span>
                {item.score && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {item.score}
                  </span>
                )}
              </div>
            </div>

            {item.details && (
              <p className="mt-2.5 pt-2.5 border-t border-border/40 text-xs text-muted-foreground leading-relaxed pl-13 md:pl-15">
                {item.details}
              </p>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default Education;
