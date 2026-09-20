import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Education = ({ education }) => {
  return (
    <div className="flex flex-col gap-6">
      {education.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-3.5 justify-between group cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-x-3.5 flex-1 min-w-0">
            <img
              src={item.logo}
              alt={item.institution}
              className="size-8 md:size-10 p-1 border border-border rounded-full shadow ring-2 ring-border/50 bg-background object-contain flex-none"
            />
            <div className="flex-1 min-w-0 flex flex-col gap-0.5">
              <div className="font-semibold leading-none flex items-center gap-1 text-foreground">
                <span>{item.institution}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </div>
              <div className="text-sm text-muted-foreground font-sans mt-0.5">
                {item.degree}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
            <span>{item.period}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Education;
