import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Download,
  FileText,
  Send,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const BentoContact = ({ personal, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
          <Mail className="size-3.5" />
          <span>Connect &amp; Collaborate</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Let's Build Intelligent Systems Together
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Whether you're hiring for Full Stack AI Engineering, developing enterprise RAG pipelines, or want to discuss agent architectures — my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {/* Email Bento */}
        <div className="bento-card p-6 flex flex-col justify-between group shadow-xs">
          <div>
            <div className="size-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
              <Mail className="size-5" />
            </div>
            <h3 className="font-bold text-base text-foreground mb-1">
              Email Directly
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              Best for project inquiries, job offers, or technical discussions.
            </p>
            <div className="p-2.5 rounded-xl border border-border bg-background flex items-center justify-between text-xs font-mono text-foreground font-medium mb-3">
              <span className="truncate">{personal.email}</span>
              <button
                type="button"
                onClick={copyEmail}
                className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground cursor-pointer shrink-0 ml-1.5"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
              </button>
            </div>
          </div>

          <a
            href={`mailto:${personal.email}?subject=Full%20Stack%20AI%20Engineering%20Opportunity`}
            className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <Send className="size-3.5" />
            <span>Send Email</span>
          </a>
        </div>

        {/* Phone / WhatsApp Bento */}
        <div className="bento-card p-6 flex flex-col justify-between group shadow-xs">
          <div>
            <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
              <Phone className="size-5" />
            </div>
            <h3 className="font-bold text-base text-foreground mb-1">
              Direct Phone &amp; WhatsApp
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              Direct line for quick coordination or interview scheduling.
            </p>
            <div className="p-2.5 rounded-xl border border-border bg-background flex items-center justify-between text-xs font-mono text-foreground font-medium mb-3">
              <span>{personal.phone}</span>
              <button
                type="button"
                onClick={copyPhone}
                className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground cursor-pointer shrink-0 ml-1.5"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
              </button>
            </div>
          </div>

          <a
            href={`tel:${personal.phone}`}
            className="w-full py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer active:scale-95"
          >
            <Phone className="size-3.5" />
            <span>Call Directly</span>
          </a>
        </div>

        {/* Resume & Location Bento */}
        <div className="bento-card p-6 flex flex-col justify-between group shadow-xs">
          <div>
            <div className="size-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4">
              <FileText className="size-5" />
            </div>
            <h3 className="font-bold text-base text-foreground mb-1">
              Official Resume (PDF)
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              Verified computer science &amp; AI engineering credentials.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
              <MapPin className="size-3.5 text-rose-500 shrink-0" />
              <span>{personal.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenResume}
              className="flex-1 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs flex items-center justify-center gap-1.5 hover:opacity-90 transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <FileText className="size-3.5" />
              <span>View</span>
            </button>
            <a
              href={personal.resumePdf}
              download="K_MohanaSree_Resume.pdf"
              className="flex-1 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer active:scale-95"
            >
              <Download className="size-3.5" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoContact;
