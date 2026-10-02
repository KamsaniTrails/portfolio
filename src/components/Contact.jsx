import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Download, FileText, Send } from 'lucide-react';
import FlickeringGrid from './FlickeringGrid';

export const Contact = ({ email, phone, location, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="border border-border rounded-2xl p-6 sm:p-10 relative bg-card/60 backdrop-blur-sm shadow-sm overflow-hidden">
      {/* Top Overlapping Contact Badge */}
      <div className="absolute -top-3.5 border border-border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2 shadow-sm">
        <span className="text-background text-xs sm:text-sm font-semibold tracking-wide uppercase">
          Get In Touch
        </span>
      </div>

      {/* Ambient Grid Background in Top Half with Mask */}
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-2xl overflow-hidden pointer-events-none z-0">
        <div
          className="h-full w-full"
          style={{
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        >
          <FlickeringGrid
            squareSize={2}
            gridGap={3}
            color="#3b82f6"
            maxOpacity={0.4}
            flickerChance={0.3}
          />
        </div>
      </div>

      {/* Contact Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <div className="space-y-2 mt-2">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            Let's Build Something Exceptional
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-xs sm:text-sm leading-relaxed text-pretty">
            I'm actively open to full-time roles, AI engineering opportunities, and collaborative projects. Feel free to connect directly!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
          {/* Email Card */}
          <div className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-background/80 hover:border-foreground/30 transition-all text-left">
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-9 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                <Mail className="size-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block">
                  Email
                </span>
                <a
                  href={`mailto:${email}`}
                  className="text-xs sm:text-sm font-medium text-foreground hover:underline truncate block"
                >
                  {email}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0 ml-2"
              title="Copy email"
            >
              {copiedEmail ? (
                <Check className="size-4 text-emerald-500" />
              ) : (
                <Copy className="size-4" />
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-background/80 hover:border-foreground/30 transition-all text-left">
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <Phone className="size-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block">
                  Phone
                </span>
                <a
                  href={`tel:${phone}`}
                  className="text-xs sm:text-sm font-medium text-foreground hover:underline truncate block"
                >
                  {phone}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyPhone}
              className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0 ml-2"
              title="Copy phone"
            >
              {copiedPhone ? (
                <Check className="size-4 text-emerald-500" />
              ) : (
                <Copy className="size-4" />
              )}
            </button>
          </div>
        </div>

        {/* Location & Quick Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {location && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-muted-foreground bg-muted/60 border border-border">
              <MapPin className="size-3.5 text-rose-500" />
              <span>{location}</span>
            </div>
          )}

          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-sm cursor-pointer active:scale-95"
          >
            <FileText className="size-4" />
            <span>View Full Resume PDF</span>
          </button>

          <a
            href={`mailto:${email}?subject=Full%20Stack%20AI%20Engineering%20Opportunity`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-border bg-background hover:bg-muted text-foreground transition-all cursor-pointer active:scale-95"
          >
            <Send className="size-4" />
            <span>Send Direct Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
