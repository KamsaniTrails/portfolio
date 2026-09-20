import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import BlurFade from './BlurFade';

export const Blog = ({ posts }) => {
  return (
    <section id="blog" className="min-h-[70vh] flex flex-col pt-4">
      <BlurFade delay={0.05}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2 flex items-center gap-2 text-foreground">
          <span>Writings</span>
          <span className="bg-card border border-border rounded-md px-2 py-0.5 text-muted-foreground text-xs font-normal">
            {posts.length} posts
          </span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          My articles and deep dives published on Medium.
        </p>
      </BlurFade>

      <div className="flex flex-col gap-6">
        {posts.map((post, index) => (
          <BlurFade key={index} delay={0.1 + index * 0.05}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-x-3 group cursor-pointer transition-colors"
            >
              <span className="text-xs font-mono tabular-nums font-medium text-muted-foreground mt-1">
                {post.num}.
              </span>
              <div className="flex flex-col gap-y-1 flex-1">
                <p className="tracking-tight text-base md:text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors flex items-center">
                  <span>{post.title}</span>
                  <ArrowUpRight className="ml-1 inline-block size-4 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                </p>
              </div>
            </a>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Blog;
