import React from 'react';
import { ArrowUpRight, BookOpen, Clock, Tag } from 'lucide-react';
import BlurFade from './BlurFade';

export const Blog = ({ posts }) => {
  return (
    <section id="blog" className="min-h-[70vh] flex flex-col pt-4">
      <BlurFade delay={0.05}>
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-2.5 text-foreground">
            <BookOpen className="size-6 text-primary" />
            <span>Technical Deep Dives</span>
          </h1>
          <span className="bg-card border border-border rounded-full px-3 py-1 text-muted-foreground text-xs font-semibold">
            {posts.length} articles
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mb-8 max-w-lg">
          Insights on Agentic AI workflows, LangGraph cyclic architectures, RAG optimization, and full-stack software engineering.
        </p>
      </BlurFade>

      <div className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <BlurFade key={index} delay={0.1 + index * 0.05}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-foreground/30 transition-all duration-200 group cursor-pointer block"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 flex-1">
                  <span className="text-xs font-mono tabular-nums font-bold text-muted-foreground px-2 py-1 rounded bg-muted/60 mt-0.5">
                    {post.num}
                  </span>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                      <span>{post.title}</span>
                      <ArrowUpRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      {post.category && (
                        <span className="inline-flex items-center gap-1 font-medium text-foreground/70">
                          <Tag className="size-3 text-cyan-500" />
                          {post.category}
                        </span>
                      )}
                      {post.readTime && (
                        <span className="inline-flex items-center gap-1">
                          <Clock className="size-3" />
                          {post.readTime}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Blog;
