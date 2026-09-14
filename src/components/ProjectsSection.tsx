import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';
import { VideoModal } from './VideoModal';

export interface ProjectData {
  number: string;
  tag: string;
  name: string;
  category: string;
  description?: string;
  videoId: string;
  videoUrl: string;
  localVideo?: string;
  startTime?: number;
  singleImage?: string;
  images?: {
    col1Top: string;
    col1Bottom: string;
    col2Tall: string;
  };
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    tag: 'CLIENT',
    name: 'OÁS GT Building',
    category: 'Real Estate VR Arch Viz',
    description:
      'High-end architectural visualization and real estate VR walkthrough in Unreal Engine, featuring custom lighting, PBR materials, and interactive spatial navigation.',
    videoId: 'YHwtTnkM8hM',
    videoUrl: 'https://www.youtube.com/watch?v=YHwtTnkM8hM',
    localVideo: './videos/OAS_GTBuilding.mp4',
    images: {
      col1Top: './projects/oas_bedroom.jpg',
      col1Bottom: './projects/oas_office.jpg',
      col2Tall: './projects/oas_suite.jpg',
    },
  },
  {
    number: '02',
    tag: 'COMMERCIAL',
    name: 'Projeto BRX',
    category: 'High-Performance Multiplatform Experience',
    description:
      'Interactive multiplatform real-time experience developed for Aeon VR, featuring responsive mechanics, optimized 3D pipelines, and high-fidelity rendering across devices.',
    videoId: 'ZCTbNF5RaJw',
    videoUrl: 'https://www.youtube.com/watch?v=ZCTbNF5RaJw',
    localVideo: './videos/BRX.mp4',
    images: {
      col1Top: './projects/brx_interior.jpg',
      col1Bottom: './projects/brx_tablet.jpg',
      col2Tall: './projects/brx_view.jpg',
    },
  },
  {
    number: '03',
    tag: 'SIMULATION',
    name: 'Projeto Fitmass',
    category: 'VR & Augmented Reality Simulation',
    description:
      'Virtual and Augmented Reality biometric body evaluation system built in Unreal Engine, delivering real-time interactive avatar visualization and tracking.',
    videoId: 'P5yV7_p0bDU',
    videoUrl: 'https://www.youtube.com/watch?v=P5yV7_p0bDU',
    localVideo: './videos/Fitmass.mp4',
    images: {
      col1Top: './projects/fitmass_gym.jpg',
      col1Bottom: './projects/fitmass_vr.jpg',
      col2Tall: './projects/fitmass_totem.jpg',
    },
  },
  {
    number: '04',
    tag: 'INDUSTRIAL',
    name: 'Fibracem Fábrica',
    category: 'Industrial VR Training & Simulation',
    description:
      'Interactive VR factory training and 3D industrial simulation for Fibracem, recreating assembly lines, machinery operations, and quality inspection workflows.',
    videoId: 'JgvCpCAwXH4',
    videoUrl: 'https://www.youtube.com/watch?v=JgvCpCAwXH4',
    localVideo: './videos/Fibracem.mp4',
    images: {
      col1Top: './projects/fibracem_inspection.jpg',
      col1Bottom: './projects/fibracem_interaction.jpg',
      col2Tall: './projects/fibracem_machine.jpg',
    },
  },
  {
    number: '05',
    tag: 'EXHIBITION',
    name: 'Casacor 2024',
    category: 'Mixed Reality & Spatial Installation',
    description:
      'Mixed reality and immersive spatial installation developed for CASACOR Santa Catarina, merging physical architecture and zen environments with interactive virtual elements.',
    videoId: 'X16uHRK7ew0',
    videoUrl: 'https://www.youtube.com/watch?v=X16uHRK7ew0',
    localVideo: './videos/Casacor2024.mp4',
    images: {
      col1Top: './projects/casacor_headset.jpg',
      col1Bottom: './projects/casacor_installation.jpg',
      col2Tall: './projects/casacor_experience.jpg',
    },
  },
];

interface ScaleConfig {
  isMobile: boolean;
  baseW: number;
  baseH: number;
  scale: number;
  renderedW: number;
  renderedH: number;
}

const getScaleConfig = (): ScaleConfig => {
  if (typeof window === 'undefined') {
    return { isMobile: false, baseW: 1060, baseH: 490, scale: 1, renderedW: 1060, renderedH: 490 };
  }

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isMobile = vw < 680;

  if (isMobile) {
    // Fluid responsive width that cleanly fits within mobile viewport with 12px margin on each side
    const paddingX = 24;
    const baseW = Math.min(Math.max(280, vw - paddingX), 400);
    // Dynamic height adapting comfortably to phone vertical height
    const baseH = Math.min(Math.max(420, vh - 160), 475);
    return {
      isMobile: true,
      baseW,
      baseH,
      scale: 1,
      renderedW: baseW,
      renderedH: baseH,
    };
  }

  const baseW = 1060;
  const baseH = 490;
  const paddingX = vw < 1024 ? 32 : 48;
  const paddingY = vh < 640 ? 20 : 36;
  const availW = Math.max(640, vw - paddingX);
  const availH = Math.max(380, vh - paddingY);
  const scale = Math.min(availW / baseW, availH / baseH, 1.0);

  return {
    isMobile: false,
    baseW,
    baseH,
    scale,
    renderedW: Math.round(baseW * scale),
    renderedH: Math.round(baseH * scale),
  };
};

export const ProjectsSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<ProjectData | null>(null);
  const [scaleConfig, setScaleConfig] = useState<ScaleConfig>(getScaleConfig);
  const scaleConfigRef = useRef(scaleConfig);
  scaleConfigRef.current = scaleConfig;

  const sectionRef = useRef<HTMLElement>(null);
  const cardWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardInnersRef = useRef<(HTMLElement | null)[]>([]);
  const cardOverlaysRef = useRef<(HTMLDivElement | null)[]>([]);
  const endSpacerRef = useRef<HTMLDivElement>(null);

  // Dynamically update scale based on window width & height
  useEffect(() => {
    let rafId: number;
    const handleResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const nextConfig = getScaleConfig();
        setScaleConfig(nextConfig);
        ScrollTrigger.refresh();
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Calculate topOffset to precisely center the card vertically in the user's viewport
      const getTopOffset = () => {
        const vh = window.innerHeight;
        const currentRenderedH = scaleConfigRef.current.renderedH;
        return Math.max(12, Math.round((vh - currentRenderedH) / 2));
      };

      const endTriggerEl = endSpacerRef.current;

      PROJECTS.forEach((_, i) => {
        const wrapper = cardWrappersRef.current[i];
        const card = cardsRef.current[i];
        const cardInner = cardInnersRef.current[i];
        const cardOverlay = cardOverlaysRef.current[i];

        if (!wrapper || !card || !cardInner) return;

        // 1. PINNING: ALL cards (0 to totalCards - 1) rise and lock in place at topOffset.
        // They stay pinned until endSpacer reaches topOffset, allowing the final card
        // (05 - Casacor) its full showcase time before all cards unpin smoothly into the footer.
        ScrollTrigger.create({
          trigger: wrapper,
          start: () => `top ${getTopOffset()}px`,
          endTrigger: endTriggerEl || undefined,
          end: () => `top ${getTopOffset()}px`,
          pin: card,
          pinSpacing: false,
          id: `pin-card-${i}`,
          invalidateOnRefresh: true,
        });

        // 2. SCALE DOWN (1 -> 0.95) & DEPTH OVERLAY (0 -> 0.55):
        // Exactly as the next card enters the viewport and begins to cover this card,
        // this card smoothly scales down to ~0.95 and darkens, producing the pseudo-3D recess.
        const nextWrapper = cardWrappersRef.current[i + 1];
        if (nextWrapper) {
          gsap.to(cardInner, {
            scale: 0.95,
            ease: 'none',
            scrollTrigger: {
              trigger: nextWrapper,
              start: 'top bottom', // as next card enters from the bottom of viewport
              end: () => `top ${getTopOffset()}px`, // when next card reaches pinned position, fully covering this card
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

          if (cardOverlay) {
            gsap.to(cardOverlay, {
              opacity: 0.55,
              ease: 'none',
              scrollTrigger: {
                trigger: nextWrapper,
                start: 'top bottom',
                end: () => `top ${getTopOffset()}px`,
                scrub: true,
                invalidateOnRefresh: true,
              },
            });
          }
        }
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [scaleConfig.isMobile]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[32px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-8 sm:-mt-12 md:-mt-14 z-20 px-3 xs:px-4 sm:px-6 md:px-10 pt-14 sm:pt-20 md:pt-24 pb-20 sm:pb-32 select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Section Heading: Centered "PROJECT" using .hero-heading */}
        <FadeIn delay={0} y={40} className="mb-8 sm:mb-14 md:mb-16 text-center">
          <h2
            style={{ fontSize: 'clamp(2.4rem, 11vw, 150px)' }}
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
          >
            PROJECT
          </h2>
        </FadeIn>

        {/* ScrollTrigger Pinned & Stacked Cards Sequence */}
        <div className="relative flex flex-col w-full items-center">
          {PROJECTS.map((project, index) => (
            <div
              key={project.number}
              ref={(el) => (cardWrappersRef.current[index] = el)}
              className="project-card-wrapper min-h-[100vh] w-full flex items-start justify-center relative"
              style={{ zIndex: (index + 1) * 10 }}
            >
              {/* Pinned Card Box: Exactly renderedW by renderedH, pinned by ScrollTrigger with 0 transform interference */}
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="project-card-pin will-change-transform relative"
                style={{
                  zIndex: (index + 1) * 10,
                  width: `${scaleConfig.renderedW}px`,
                  height: `${scaleConfig.renderedH}px`,
                }}
              >
                {/* Proportional Scaling Canvas: Maintains internal geometry and scales cleanly */}
                <div
                  style={{
                    width: `${scaleConfig.baseW}px`,
                    height: `${scaleConfig.baseH}px`,
                    transform: scaleConfig.scale !== 1 ? `scale(${scaleConfig.scale})` : undefined,
                    transformOrigin: 'top left',
                  }}
                  className="w-full h-full"
                >
                  <article
                    ref={(el) => (cardInnersRef.current[index] = el)}
                    style={{ transformOrigin: 'center center' }}
                    className="project-card-inner relative w-full h-full flex flex-col justify-between rounded-[20px] sm:rounded-[28px] border border-white/15 bg-[#161616] p-3.5 sm:p-5 shadow-[0_30px_90px_rgba(0,0,0,0.95)] hover:border-white/25 transition-colors duration-300 will-change-transform overflow-hidden"
                  >
                    {/* Top Specular Edge Highlight */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-30" />

                    {/* Pseudo-3D Depth Dimming Overlay */}
                    <div
                      ref={(el) => (cardOverlaysRef.current[index] = el)}
                      className="absolute inset-0 bg-black/60 pointer-events-none rounded-[20px] sm:rounded-[28px] z-30 opacity-0 will-change-[opacity]"
                    />

                    {/* Header: Solid white number, tag + category + title, and LIVE PROJECT ghost pill */}
                    <div className="relative z-20 flex items-center justify-between gap-2 sm:gap-4 pb-2 sm:pb-3 border-b border-white/10 flex-shrink-0 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                        <span className="font-black text-2xl sm:text-3xl text-white select-none tracking-tight leading-none flex-shrink-0">
                          {project.number}
                        </span>
                        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                            <span className="text-white/50 uppercase text-[9px] sm:text-[11px] tracking-[0.2em] font-semibold flex-shrink-0">
                              {project.tag}
                            </span>
                            <span className="text-white/20 text-[10px] flex-shrink-0">•</span>
                            <span className="text-[#D7E2EA]/70 text-[9px] sm:text-[11px] font-medium tracking-wide uppercase truncate">
                              {project.category}
                            </span>
                          </div>
                          <h3 className="text-sm sm:text-lg font-semibold uppercase tracking-wide text-white leading-tight truncate">
                            {project.name}
                          </h3>
                        </div>
                      </div>

                      <LiveProjectButton
                        label="LIVE PROJECT"
                        icon={<Play className="w-3.5 h-3.5 fill-current" />}
                        onClick={() => setSelectedVideo(project)}
                      />
                    </div>

                    {/* Media Area: Designed to present 16:9 images with 0% cropping */}
                    <div className="relative z-20 w-full flex-1 flex flex-col justify-center min-h-0 pt-2 sm:pt-2.5">
                      {project.singleImage ? (
                        /* Single 16:9 Image with ambient glow backdrop (No cropping!) */
                        <div
                          onClick={() => setSelectedVideo(project)}
                          className="w-full h-full relative rounded-xl sm:rounded-2xl overflow-hidden bg-black/50 border border-white/10 group cursor-pointer flex items-center justify-center"
                        >
                          {/* Ambient Glow */}
                          <img
                            src={project.singleImage}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110 pointer-events-none"
                          />
                          {/* Crisp 16:9 Uncropped Foreground Image */}
                          <img
                            src={project.singleImage}
                            alt={`${project.name} preview`}
                            loading="lazy"
                            className="relative z-10 max-w-full max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                          />
                          {/* Play Button Hover Overlay */}
                          <div className="absolute inset-0 z-20 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
                            </div>
                          </div>
                        </div>
                      ) : scaleConfig.isMobile ? (
                        /* Mobile 3-Image Layout: 1 Featured Top (16:9) + 2 Bottom Side-by-Side (16:9) */
                        <div className="flex flex-col gap-2 flex-1 min-h-0 justify-between">
                          <div
                            onClick={() => setSelectedVideo(project)}
                            className="w-full flex-1 min-h-[140px] relative rounded-xl overflow-hidden bg-black/40 border border-white/10 group cursor-pointer"
                          >
                            <img
                              src={project.images?.col2Tall}
                              alt={`${project.name} preview`}
                              loading="lazy"
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl">
                                <Play className="w-4 h-4 fill-white ml-0.5" />
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 h-[82px] xs:h-[90px] flex-shrink-0">
                            <div
                              onClick={() => setSelectedVideo(project)}
                              className="relative rounded-lg overflow-hidden bg-black/40 border border-white/10 group cursor-pointer h-full"
                            >
                              <img
                                src={project.images?.col1Top}
                                alt={`${project.name} detail 1`}
                                loading="lazy"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                              />
                            </div>
                            <div
                              onClick={() => setSelectedVideo(project)}
                              className="relative rounded-lg overflow-hidden bg-black/40 border border-white/10 group cursor-pointer h-full"
                            >
                              <img
                                src={project.images?.col1Bottom}
                                alt={`${project.name} detail 2`}
                                loading="lazy"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Desktop/Tablet 3-Image Layout: Left 2 Stacked 16:9 (1/3 width) + Right Featured 16:9 (2/3 width) */
                        <div className="flex gap-3 h-full items-stretch">
                          {/* Left Column: 2 stacked 16:9 images */}
                          <div className="w-[336px] flex-shrink-0 flex flex-col gap-3 h-full">
                            <div
                              onClick={() => setSelectedVideo(project)}
                              className="flex-1 relative rounded-xl overflow-hidden bg-black/40 border border-white/10 group cursor-pointer min-h-0"
                            >
                              <img
                                src={project.images?.col1Top}
                                alt={`${project.name} detail 1`}
                                loading="lazy"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                              />
                            </div>

                            <div
                              onClick={() => setSelectedVideo(project)}
                              className="flex-1 relative rounded-xl overflow-hidden bg-black/40 border border-white/10 group cursor-pointer min-h-0"
                            >
                              <img
                                src={project.images?.col1Bottom}
                                alt={`${project.name} detail 2`}
                                loading="lazy"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                              />
                            </div>
                          </div>

                          {/* Right Column: 1 featured 16:9 image spanning full height */}
                          <div
                            onClick={() => setSelectedVideo(project)}
                            className="flex-1 relative rounded-xl overflow-hidden bg-black/40 border border-white/10 group cursor-pointer min-h-0"
                          >
                            <img
                              src={project.images?.col2Tall}
                              alt={`${project.name} featured render`}
                              loading="lazy"
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                <Play className="w-6 h-6 fill-white ml-0.5" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          ))}

          {/* End Spacer: Provides scroll distance for the last card (05) to remain pinned and appreciated before unpinning */}
          <div ref={endSpacerRef} className="project-cards-end-spacer h-[70vh] sm:h-[85vh] pointer-events-none" />
        </div>
      </div>

      {/* Interactive Video Player Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        project={selectedVideo}
      />
    </section>
  );
};

export default ProjectsSection;
