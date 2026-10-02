import React, { useState } from 'react';
import { ChevronRight, ChevronDown, CheckCircle2, MapPin, Briefcase } from 'lucide-react';

export const WorkExperience = ({ work }) => {
  const [openId, setOpenId] = useState(work[0]?.id || null);
  const [failedLogos, setFailedLogos] = useState({});

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleImageError = (id) => {
    setFailedLogos((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="w-full grid gap-4">
      {work.map((item) => {
        const isOpen = openId === item.id;
        const hasFailedLogo = failedLogos[item.id] || !item.logo;

        return (
          <div
            key={item.id}
            className="w-full border border-border/70 rounded-xl p-4 bg-card/40 hover:bg-card/70 transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left p-0 cursor-pointer group transition-colors select-none"
            >
              <div className="flex items-center gap-x-3.5 flex-1 min-w-0">
                {!hasFailedLogo ? (
                  <img
                    src={item.logo}
                    alt={item.company}
                    onError={() => handleImageError(item.id)}
                    className="size-10 md:size-12 p-1 border border-border rounded-xl shadow-xs ring-1 ring-border/50 bg-background object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 md:size-12 rounded-xl bg-blue-500/10 text-blue-500 border border-border flex items-center justify-center font-bold text-sm flex-none shadow-xs">
                    {item.company.charAt(0)}
                  </div>
                )}
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-1.5 text-foreground text-sm md:text-base">
                    <span>{item.company}</span>
                    <span className="relative inline-flex items-center w-3.5 h-3.5 text-muted-foreground transition-transform duration-200">
                      {isOpen ? (
                        <ChevronDown className="h-3.5 w-3.5 stroke-[2.5]" />
                      ) : (
                        <ChevronRight className="h-3.5 w-3.5 stroke-[2.5] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                      )}
                    </span>
                  </div>
                  <div className="text-xs md:text-sm text-primary font-medium mt-1">
                    {item.role}
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-0.5">
                      <MapPin className="size-3" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none pl-2 font-mono">
                <span>{item.period}</span>
              </div>
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 mt-3 pt-3 border-t border-border/50' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-xs md:text-sm leading-relaxed text-muted-foreground text-pretty mb-3">
                {item.description}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <div className="space-y-1.5 mt-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-foreground/80">
                      <CheckCircle2 className="size-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
