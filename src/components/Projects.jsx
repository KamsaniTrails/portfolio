import React, { useState } from 'react';
import { Globe, ArrowUpRight, ChevronDown, ChevronUp, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

const GithubIcon = ({ className = "size-3" }) => (
  <svg
    viewBox="0 0 438.549 438.549"
    fill="currentColor"
    className={className}
  >
    <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
  </svg>
);

export const Projects = ({ projects }) => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      {/* Header with gradient lines */}
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1 shadow-sm">
            <span className="text-background text-sm font-medium">
              Featured Work
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl text-foreground">
            AI &amp; Full Stack Engineering Projects
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm max-w-lg text-balance leading-relaxed">
            Production-style systems engineered with RAG, LangGraph Agentic AI, WebRTC streaming, and MERN architectures.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-5 max-w-[800px] mx-auto w-full">
        {projects.map((project) => {
          const isExpanded = expandedProjectId === project.id;
          return (
            <div
              key={project.id}
              className="flex flex-col border border-border rounded-2xl overflow-hidden hover:border-foreground/30 transition-all duration-200 bg-card group shadow-sm"
            >
              {/* Thumbnail Banner with badges */}
              <div className="relative shrink-0 overflow-hidden bg-neutral-950 aspect-video max-h-64 sm:max-h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300 opacity-90 group-hover:opacity-100"
                />

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/70 text-white backdrop-blur-md border border-white/15 shadow-sm">
                    <Sparkles className="size-3 text-cyan-400" />
                    {project.category}
                  </span>
                </div>

                {/* Top Right: Period */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-black/70 text-neutral-300 backdrop-blur-md border border-white/15 shadow-sm">
                    {project.period}
                  </span>
                </div>

                {/* Bottom Action Buttons */}
                <div className="absolute bottom-3 right-3 flex flex-wrap gap-2 z-10">
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg px-3 py-1 flex items-center gap-1.5 text-xs font-medium bg-black/75 text-white backdrop-blur-md border border-white/20 shadow-sm transition-all duration-200 hover:bg-black/90 active:scale-95"
                    >
                      <GithubIcon className="size-3" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Content info */}
              <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-foreground text-base sm:text-lg tracking-tight">
                      {project.title}
                    </h3>
                    {project.tagline && (
                      <p className="text-xs text-primary font-medium mt-0.5">
                        {project.tagline}
                      </p>
                    )}
                  </div>
                  <a
                    href={project.source || project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-sans">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium border border-border text-foreground bg-muted/50 h-5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expandable Architecture & Highlights */}
                {project.bulletPoints && project.bulletPoints.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-border/50">
                    <button
                      type="button"
                      onClick={() => toggleDetails(project.id)}
                      className="flex items-center justify-between w-full py-1 text-xs font-semibold text-foreground hover:text-primary transition-colors cursor-pointer group"
                    >
                      <span className="flex items-center gap-1.5">
                        <Layers className="size-3.5 text-muted-foreground group-hover:text-primary" />
                        {isExpanded ? 'Hide Architecture & Contributions' : 'View Architecture & Implementation Highlights'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="size-3.5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="size-3.5 text-muted-foreground" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-2 pl-1 animate-in fade-in slide-in-from-top-1 duration-200">
                        {project.bulletPoints.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                            <CheckCircle2 className="size-3.5 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
