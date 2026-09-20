import React from 'react';
import FlickeringGrid from './FlickeringGrid';

export const Contact = ({ email, calLink }) => {
  return (
    <div className="border border-border rounded-xl p-10 relative bg-background">
      {/* Top Overlapping Contact Badge */}
      <div className="absolute -top-4 border border-border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2 shadow-sm">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>

      {/* Red Flickering Grid Background in Top Half with Mask */}
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden pointer-events-none z-0">
        <div
          className="h-full w-full"
          style={{
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        >
          <FlickeringGrid
            squareSize={2}
            gridGap={2}
            color="#e60b0b"
            maxOpacity={0.5}
            flickerChance={0.3}
          />
        </div>
      </div>

      {/* Contact Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance leading-relaxed text-sm sm:text-base">
          Whether you have an exciting project in mind, want to collaborate on AI &amp; software engineering, or just want to connect — feel free to drop me an{' '}
          <a
            className="text-primary hover:underline underline-offset-4 font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href={`mailto:${email}`}
          >
            email
          </a>{' '}
          or schedule a quick{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-4 font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href={calLink}
          >
            1-on-1 call
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
