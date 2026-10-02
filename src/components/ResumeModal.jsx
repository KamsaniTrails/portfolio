import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose, resumeUrl = "/K_MohanaSree_Resume.pdf" }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative flex flex-col w-full max-w-4xl h-[90vh] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-card/80 backdrop-blur">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
              <FileText className="size-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground leading-none">
                K Mohana Sree — Resume
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Full Stack AI Engineer • RGUKT Srikakulam
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              download="K_MohanaSree_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-sm active:scale-95"
            >
              <Download className="size-3.5" />
              <span className="hidden sm:inline">Download</span> PDF
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border hover:bg-muted text-foreground transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="size-3.5" />
              <span className="hidden sm:inline">Open Tab</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* PDF View Container */}
        <div className="relative flex-1 w-full bg-neutral-900 overflow-hidden flex flex-col">
          <object
            data={`${resumeUrl}#toolbar=1&navpanes=0`}
            type="application/pdf"
            className="w-full h-full"
          >
            {/* Fallback for browsers that don't support inline pdf embedding */}
            <div className="flex flex-col items-center justify-center h-full p-8 text-center text-neutral-300">
              <FileText className="size-16 text-neutral-500 mb-4" />
              <p className="text-lg font-medium text-white mb-2">
                Resume PDF Ready for Preview
              </p>
              <p className="text-sm text-neutral-400 max-w-md mb-6">
                Your browser may not support inline PDF preview. You can open or download the complete resume directly.
              </p>
              <div className="flex gap-3">
                <a
                  href={resumeUrl}
                  download="K_MohanaSree_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
                >
                  <Download className="size-4" />
                  Download PDF
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 text-neutral-200 border border-neutral-700 hover:bg-neutral-700 transition-colors"
                >
                  <ExternalLink className="size-4" />
                  Open in New Tab
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Modal Footer Banner */}
        <div className="flex items-center justify-between px-5 py-2.5 bg-card border-t border-border text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-emerald-500" />
            <span>Verified Computer Science &amp; AI Engineer Resume</span>
          </div>
          <span className="hidden sm:inline font-mono">RGUKT CSE (2023–2027) • CGPA 8.85</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
