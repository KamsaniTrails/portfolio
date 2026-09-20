import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export const WorkExperience = ({ work }) => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full grid gap-4">
      {work.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="w-full border-b border-border/40 pb-3 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left p-0 cursor-pointer group transition-colors select-none"
            >
              <div className="flex items-center gap-x-3.5 flex-1 min-w-0">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="size-8 md:size-10 p-1 border border-border rounded-full shadow ring-2 ring-border/50 bg-background object-contain flex-none"
                />
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-1.5 text-foreground">
                    <span>{item.company}</span>
                    <span className="relative inline-flex items-center w-3.5 h-3.5 text-muted-foreground transition-transform duration-200">
                      {isOpen ? (
                        <ChevronDown className="h-3.5 w-3.5 stroke-[2.5]" />
                      ) : (
                        <ChevronRight className="h-3.5 w-3.5 stroke-[2.5] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                      )}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {item.role}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>{item.period}</span>
              </div>
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 mt-3 pt-1' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-xs md:text-sm leading-relaxed text-muted-foreground pl-11 md:pl-13 text-pretty">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
