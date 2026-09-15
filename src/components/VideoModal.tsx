import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Film, Youtube } from 'lucide-react';

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    number: string;
    name: string;
    category: string;
    description?: string;
    teamSize?: string;
    role?: string;
    contributions?: string[];
    differentials?: string[];
    videoId?: string;
    videoUrl: string;
    localVideo?: string;
    startTime?: number;
  } | null;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, project }) => {
  const [sourceType, setSourceType] = useState<'local' | 'youtube'>('local');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset to local video and beginning whenever project changes
  useEffect(() => {
    if (project?.localVideo) {
      setSourceType('local');
    } else {
      setSourceType('youtube');
    }
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [project]);

  // Close on Escape key and lock body scroll (with Lenis pause)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if ((window as any).lenis) {
      (window as any).lenis.stop();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, [isOpen, onClose]);

  const ytVideoUrl = project?.videoUrl || '';

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 xs:p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-5xl max-h-[92dvh] overflow-y-auto rounded-[20px] xs:rounded-[26px] sm:rounded-[36px] md:rounded-[44px] border border-white/10 bg-[#151515] p-3.5 xs:p-4 sm:p-6 md:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
          >
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pb-3.5 sm:pb-6 mb-3.5 sm:mb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5 xs:gap-3 sm:gap-5">
                <span className="font-black text-xl xs:text-2xl sm:text-4xl text-white/40 leading-none select-none tracking-tight">
                  {project.number}
                </span>
                <div className="flex flex-col">
                  <span className="text-[#D7E2EA]/60 uppercase text-[9px] xs:text-[10px] sm:text-xs tracking-widest font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-sm xs:text-base sm:text-2xl font-semibold uppercase tracking-wide text-white leading-tight">
                    {project.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {/* Switch between Local HD & YouTube if both available */}
                {project.localVideo && project.videoId && (
                  <div className="flex items-center rounded-full bg-black/40 p-1 border border-white/10 text-xs">
                    <button
                      type="button"
                      onClick={() => setSourceType('local')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                        sourceType === 'local'
                          ? 'bg-white text-black font-semibold shadow-sm'
                          : 'text-[#D7E2EA]/70 hover:text-white'
                      }`}
                    >
                      <Film className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">1080p HD</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSourceType('youtube')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                        sourceType === 'youtube'
                          ? 'bg-white text-black font-semibold shadow-sm'
                          : 'text-[#D7E2EA]/70 hover:text-white'
                      }`}
                    >
                      <Youtube className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">YouTube</span>
                    </button>
                  </div>
                )}

                {/* External YouTube Link */}
                <a
                  href={ytVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 text-[#D7E2EA]/80 hover:text-white hover:border-white hover:bg-white/10 transition-all text-xs sm:text-sm uppercase tracking-wider font-medium"
                  title="Open on YouTube"
                >
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">YouTube</span>
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 sm:p-2.5 rounded-full border border-white/10 text-[#D7E2EA]/80 hover:text-white hover:border-white hover:bg-white/10 transition-all cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Video Player Box */}
            <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/10 shadow-inner">
              {sourceType === 'local' && project.localVideo ? (
                <video
                  ref={videoRef}
                  src={project.localVideo}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={`${project.name} Video Player`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )}
            </div>

            {/* Technical Project Scope & Description */}
            <div className="mt-3.5 sm:mt-5 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/50 border border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white/50 uppercase text-[9px] sm:text-[11px] tracking-[0.2em] font-semibold">
                    Project Scope & Overview
                  </span>
                  {project.teamSize && (
                    <span className="text-emerald-400 text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      {project.teamSize}
                    </span>
                  )}
                </div>
                <span className="text-[#D7E2EA]/70 text-[10px] sm:text-xs uppercase tracking-wider font-mono">
                  {project.category}
                </span>
              </div>

              {project.role && (
                <div className="text-xs sm:text-sm text-white/90 font-medium">
                  <span className="text-white/40 uppercase text-[10px] tracking-wider mr-2 font-semibold">Role:</span>
                  <span>{project.role}</span>
                </div>
              )}

              {project.contributions && project.contributions.length > 0 && (
                <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                  <span className="text-white/50 uppercase text-[10px] sm:text-[11px] tracking-wider font-semibold">
                    Key Deliverables & What I Built:
                  </span>
                  <ul className="flex flex-col gap-2">
                    {project.contributions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#D7E2EA]/90 leading-relaxed font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5 shadow-[0_0_6px_#34d399]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.description && (
                <p className="text-[#D7E2EA]/85 font-light text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              )}

              {project.differentials && project.differentials.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/10">
                  {project.differentials.map((diff, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-white/5 text-[#D7E2EA]/80 border border-white/10"
                    >
                      {diff}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
