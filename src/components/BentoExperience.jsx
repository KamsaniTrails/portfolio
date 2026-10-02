import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  Award
} from 'lucide-react';

export const BentoExperience = ({ work, education }) => {
  return (
    <section id="experience" className="scroll-mt-24 space-y-6">
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-2">
          <Briefcase className="size-3.5" />
          <span>Career &amp; Academics</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Industry Experience &amp; Education
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
          Practical product engineering experience backed by top-tier academic performance at RGUKT Srikakulam.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Work Experience Bento (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <span className="size-2 rounded-full bg-blue-500" />
            <span>Professional Internship</span>
          </h3>

          {work.map((item) => (
            <div
              key={item.id}
              className="bento-card p-6 flex flex-col justify-between flex-1 group shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="size-12 p-1.5 rounded-xl border border-border bg-background object-contain shadow-2xs"
                    />
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-foreground leading-tight">
                        {item.company}
                      </h4>
                      <div className="text-xs font-semibold text-blue-500 mt-0.5">
                        {item.role}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-muted/60 border border-border/60 text-muted-foreground">
                      <Calendar className="size-3" />
                      {item.period}
                    </span>
                    {item.location && (
                      <div className="text-[11px] text-muted-foreground mt-1 flex items-center justify-end gap-1">
                        <MapPin className="size-3" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {item.highlights && (
                  <div className="space-y-2 pt-2 border-t border-border/50">
                    <span className="text-[11px] font-semibold text-foreground uppercase tracking-wider block">
                      Key Technical Deliverables:
                    </span>
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education Bento (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span>Academic Background</span>
          </h3>

          <div className="space-y-4 flex-1 flex flex-col">
            {education.map((edu, eIdx) => (
              <a
                key={eIdx}
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card p-5 flex flex-col justify-between flex-1 group shadow-xs cursor-pointer block hover:border-foreground/30 transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="size-10 p-1 rounded-xl border border-border bg-background object-contain shadow-2xs"
                      />
                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-foreground group-hover:text-blue-500 transition-colors flex items-center gap-1">
                          <span>{edu.institution}</span>
                          <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <span className="text-xs text-muted-foreground font-mono">
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                      {edu.score}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-medium text-foreground/90 mt-2">
                    {edu.degree}
                  </div>

                  {edu.details && (
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2 pt-2 border-t border-border/50">
                      {edu.details}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoExperience;
