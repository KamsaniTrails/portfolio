import React from 'react';
import { Heart, FileText, ArrowUp } from 'lucide-react';

export const Footer = ({ personal, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-border/60 py-10 text-xs text-muted-foreground bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
            MS
          </div>
          <div>
            <p className="font-semibold text-foreground">
              {personal.name}
            </p>
            <p className="text-[11px] text-muted-foreground">
              Full Stack AI Engineer • RGUKT Srikakulam
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenResume}
            className="hover:text-foreground transition-colors flex items-center gap-1 cursor-pointer font-medium"
          >
            <FileText className="size-3.5" />
            <span>Resume</span>
          </button>
          <a
            href={personal.resumePdf}
            download="K_MohanaSree_Resume.pdf"
            className="hover:text-foreground transition-colors font-medium"
          >
            Download PDF
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-1.5 rounded-lg border border-border/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
