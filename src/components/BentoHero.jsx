import React, { useState } from 'react';
import {
  FileText,
  Download,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Copy,
  Check,
  Award
} from 'lucide-react';

export const BentoHero = ({ personal, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="hero" className="pt-2 sm:pt-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
        {/* Main Hero Card (8 cols) */}
        <div className="lg:col-span-8 bento-card p-6 sm:p-10 flex flex-col justify-between relative group">
          {/* Subtle ambient light */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mt-20" />

          <div className="relative z-10 space-y-5">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold">Open for AI Engineering &amp; Full Stack Roles</span>
            </div>

            {/* Name & Titles */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                {personal.name}
              </h1>
              <p className="text-base sm:text-xl font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {personal.role}
              </p>
            </div>

            {/* Tagline / Overview */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl font-normal">
              {personal.tagline}
            </p>

            {/* Core credentials badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/80 border border-border/80 text-foreground font-medium shadow-2xs">
                <GraduationCap className="size-3.5 text-indigo-500" />
                <span>RGUKT Srikakulam (2023–2027)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/80 border border-border/80 text-foreground font-medium shadow-2xs">
                <Award className="size-3.5 text-amber-500" />
                <span>B.Tech CGPA: {personal.cgpa}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/80 border border-border/80 text-foreground font-medium shadow-2xs">
                <MapPin className="size-3.5 text-rose-500" />
                <span>{personal.location}</span>
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 pt-8">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <FileText className="size-4" />
              <span>View Resume PDF</span>
            </button>

            <a
              href={personal.resumePdf}
              download="K_MohanaSree_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-border bg-card hover:bg-muted text-foreground transition-all active:scale-95 shadow-2xs cursor-pointer"
            >
              <Download className="size-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Profile Avatar & Contact Bento (4 cols) */}
        <div className="lg:col-span-4 bento-card p-6 flex flex-col justify-between gap-5 relative group">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Real Photo Avatar */}
            <div className="relative mb-4">
              <div className="size-36 sm:size-44 rounded-2xl overflow-hidden border-2 border-border/80 shadow-xl ring-4 ring-primary/5 bg-muted">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-card border border-border shadow-md flex items-center gap-1 text-[11px] font-semibold text-emerald-500 whitespace-nowrap">
                <CheckCircle2 className="size-3.5" />
                <span>Verified AI Engineer</span>
              </div>
            </div>

            <h3 className="font-bold text-foreground text-lg mt-2">
              K Mohana Sree
            </h3>
            <p className="text-xs text-muted-foreground font-mono">
              RGUKT CSE • Srikakulam
            </p>
          </div>

          {/* Quick Contact Buttons */}
          <div className="relative z-10 space-y-2 pt-2 border-t border-border/50">
            {/* Email quick copy */}
            <div className="flex items-center justify-between p-2.5 rounded-xl border border-border/70 bg-background/60 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="size-4 text-blue-500 shrink-0" />
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs text-foreground font-medium truncate hover:underline"
                >
                  {personal.email}
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer shrink-0 ml-2"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
              </button>
            </div>

            {/* Phone quick copy */}
            <div className="flex items-center justify-between p-2.5 rounded-xl border border-border/70 bg-background/60 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                <Phone className="size-4 text-emerald-500 shrink-0" />
                <a
                  href={`tel:${personal.phone}`}
                  className="text-xs text-foreground font-medium truncate hover:underline"
                >
                  {personal.phone}
                </a>
              </div>
              <button
                type="button"
                onClick={copyPhone}
                className="p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer shrink-0 ml-2"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoHero;
