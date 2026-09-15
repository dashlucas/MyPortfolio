import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Users, Wrench } from 'lucide-react';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';
import { VideoModal } from './VideoModal';

export interface ProjectData {
  number: string;
  tag: string;
  name: string;
  category: string;
  description?: string;
  teamSize: string;
  role: string;
  contributions: string[];
  differentials?: string[];
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
    teamSize: 'Core Team: 4 devs',
    role: 'Technical Artist & Unreal Engine 4 Developer',
    contributions: [
      '3D asset modeling and modular architectural kit creation for real-time environments.',
      'Advanced object interaction and spatial navigation systems.',
      'Interactive widget programming and custom UI/UX state architecture.',
      'Pipeline optimization: introduced Substance 3D and channel-packed materials to dramatically reduce draw calls, demonstrating measurable performance impact to the team.',
      'Real-time multiplayer interaction systems and network replication.',
    ],
    differentials: ['Unreal Engine 4', 'Substance 3D Pipeline', 'Draw Calls Optimization', 'Multiplayer Interactions', 'VR Walkthrough'],
    description:
      'High-end architectural visualization and real estate VR walkthrough in Unreal Engine 4 with real-time multiplayer and standalone VR support.',
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
    teamSize: 'Core Team: 6 devs',
    role: 'Lead Systems Engineer & Technical Artist',
    contributions: [
      'Multiplayer interaction systems with network replication and pawn state synchronization.',
      'Comprehensive scene object interaction and prop manipulation mechanics.',
      'Fluid tablet navigation, camera control, and touch movement system.',
      'Dedicated tablet spectator camera system to observe, follow, and switch client perspectives in real time.',
    ],
    differentials: ['Unreal Engine 5', 'Multiplayer Replication', 'Tablet Movement System', 'Client Spectator Cameras', 'Multiplatform (PC/Tablet)'],
    description:
      'High-performance multiplatform real-time experience built in Unreal Engine 5 with network synchronization between PC and tablets for interactive sales presentations.',
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
    teamSize: 'Core Team: 4 devs',
    role: 'VR Technical Developer & Level Designer',
    contributions: [
      'Virtual Reality object interaction and spatial manipulation systems with responsive feedback.',
      'Level design and 3D spatial environment composition tailored for biometric body evaluation and scanning.',
    ],
    differentials: ['Unreal Engine 5', 'Meta Quest Standalone', 'Level Design', 'Object Interaction System', 'Biometric Simulation'],
    description:
      'Virtual and Augmented Reality biometric body evaluation system built in Unreal Engine 5 with real-time 3D avatar visualization.',
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
    teamSize: 'Core Team: 6 devs',
    role: 'Lead Interactive Developer & Level Architect',
    contributions: [
      'Level design and spatial layout for full-scale simulated factory environments.',
      'Technical level architecture and industrial machinery/assembly line composition.',
      'Physical interaction programming and strict operational procedure validation.',
      'Level mechanics, operational task checklists, and guided training workflow logic.',
      'Multiplayer system for collaborative training across multiple simultaneous operators.',
    ],
    differentials: ['Unreal Engine 5', 'Industrial VR Training', 'Level Architecture', 'Physical Interaction Systems', 'Multiplayer System'],
    description:
      'Interactive VR factory training and industrial simulation for Fibracem in Unreal Engine 5, validating operator procedures in a safe virtual environment.',
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
    teamSize: 'Core Team: 5 creators',
    role: 'Technical Director & XR Engineer',
    contributions: [
      'Immersive spatial interaction systems for Mixed Reality (MR) on standalone headsets.',
      'Real-time level mechanics and show flow logic synchronized with venue environmental lighting.',
      'Spatial multiplayer system enabling shared presence for multiple simultaneous exhibition visitors.',
    ],
    differentials: ['Unreal Engine 5', 'Mixed Reality (MR)', 'Spatial Interactions', 'Multiplayer Sync', 'Level Programming'],
    description:
      'Immersive spatial installation in Mixed Reality developed for CASACOR Santa Catarina in Unreal Engine 5, merging physical architecture and virtual zen environments.',
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
  isLandscape: boolean;
  baseW: number;
  baseH: number;
  scale: number;
  renderedW: number;
  renderedH: number;
}

const getScaleConfig = (): ScaleConfig => {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isLandscape: true,
      baseW: 1080,
      baseH: 510,
      scale: 1,
      renderedW: 1080,
      renderedH: 510,
    };
  }

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  // Landscape is active on screens with adequate width or when horizontal width dominates
  const isLandscape = vw >= 768 || (vw > vh && vw >= 560);
  const isMobile = !isLandscape;

  if (isMobile) {
    // Mobile / Portrait view: vertical stack (Media top, Contributions bottom)
    const paddingX = 20;
    const baseW = Math.min(Math.max(290, vw - paddingX), 440);
    const baseH = Math.min(Math.max(500, vh - 120), 620);
    return {
      isMobile: true,
      isLandscape: false,
      baseW,
      baseH,
      scale: 1,
      renderedW: baseW,
      renderedH: baseH,
    };
  }

  // Desktop / Landscape view: side-by-side (Media left, Contributions right)
  const baseW = 1080;
  const baseH = 510;
  const paddingX = vw < 1140 ? 32 : 48;
  const paddingY = vh < 660 ? 20 : 36;
  const availW = Math.max(680, vw - paddingX);
  const availH = Math.max(400, vh - paddingY);
  const scale = Math.min(availW / baseW, availH / baseH, 1.0);

  return {
    isMobile: false,
    isLandscape: true,
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
      // Calculate topOffset to center the card vertically in the user's viewport
      const getTopOffset = () => {
        const vh = window.innerHeight;
        const currentRenderedH = scaleConfigRef.current.renderedH;
        return Math.max(16, Math.round((vh - currentRenderedH) / 2));
      };

      const endTriggerEl = endSpacerRef.current;

      PROJECTS.forEach((_, i) => {
        const wrapper = cardWrappersRef.current[i];
        const card = cardsRef.current[i];
        const cardInner = cardInnersRef.current[i];
        const cardOverlay = cardOverlaysRef.current[i];

        if (!wrapper || !card || !cardInner) return;

        // 1. PINNING: ALL cards rise and pin at topOffset
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

        // 2. SCALE DOWN & DEPTH OVERLAY when next card covers this card
        const nextWrapper = cardWrappersRef.current[i + 1];
        if (nextWrapper) {
          gsap.to(cardInner, {
            scale: 0.95,
            ease: 'none',
            scrollTrigger: {
              trigger: nextWrapper,
              start: 'top bottom',
              end: () => `top ${getTopOffset()}px`,
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
  }, [scaleConfig.isMobile, scaleConfig.isLandscape]);

  // Dedicated wheel listener that stops event propagation and scrolls internal container effortlessly
  const handleInnerWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const container = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = container;
    const isScrollingDown = e.deltaY > 0;
    const isScrollingUp = e.deltaY < 0;
    const canScrollDown = scrollTop + clientHeight < scrollHeight - 1;
    const canScrollUp = scrollTop > 1;

    if ((isScrollingDown && canScrollDown) || (isScrollingUp && canScrollUp)) {
      container.scrollTop += e.deltaY;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-[#0C0C0C] z-10 px-3 xs:px-4 sm:px-6 md:px-10 pt-16 sm:pt-24 md:pt-28 pb-16 sm:pb-28 select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Section Heading: Centered "PROJECTS" */}
        <FadeIn delay={0} y={40} className="mb-8 sm:mb-14 md:mb-16 text-center">
          <h2
            style={{ fontSize: 'clamp(2.4rem, 11vw, 150px)' }}
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
          >
            PROJECTS
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
              {/* Pinned Card Box: Exactly renderedW by renderedH, pinned by ScrollTrigger */}
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
                    className="project-card-inner relative w-full h-full flex flex-col justify-between rounded-[20px] sm:rounded-[28px] border border-white/15 bg-[#161616] p-3 sm:p-5 shadow-[0_30px_90px_rgba(0,0,0,0.95)] hover:border-white/25 transition-colors duration-300 will-change-transform overflow-hidden"
                  >
                    {/* Top Specular Edge Highlight */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-30" />

                    {/* Pseudo-3D Depth Dimming Overlay */}
                    <div
                      ref={(el) => (cardOverlaysRef.current[index] = el)}
                      className="absolute inset-0 bg-black/60 pointer-events-none rounded-[20px] sm:rounded-[28px] z-30 opacity-0 will-change-[opacity]"
                    />

                    {/* Header: Solid white number, tag + category + title, team badge, and LIVE PROJECT ghost pill */}
                    <div className="relative z-20 flex items-center justify-between gap-2 sm:gap-4 pb-2 sm:pb-3 border-b border-white/10 flex-shrink-0 min-w-0">
                      <div className="flex items-center gap-2.5 sm:gap-4 min-w-0 flex-1">
                        <span className="font-black text-2xl sm:text-3xl text-white select-none tracking-tight leading-none flex-shrink-0">
                          {project.number}
                        </span>
                        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-wrap">
                            <span className="text-white/50 uppercase text-[9px] sm:text-[11px] tracking-[0.2em] font-semibold flex-shrink-0">
                              {project.tag}
                            </span>
                            <span className="text-white/20 text-[10px] flex-shrink-0">•</span>
                            <span className="text-[#D7E2EA]/70 text-[9px] sm:text-[11px] font-medium tracking-wide uppercase truncate">
                              {project.category}
                            </span>
                            <span className="text-white/20 text-[10px] flex-shrink-0 hidden xs:inline">•</span>
                            <span className="inline-flex items-center gap-1 text-emerald-400 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex-shrink-0">
                              <Users className="w-3 h-3" />
                              <span>{project.teamSize}</span>
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

                    {/* Card Body: Responsive Layout (Side-by-side in Landscape, Stacked in Portrait) */}
                    <div className="relative z-20 w-full flex-1 flex flex-col min-h-0 pt-2 sm:pt-3">
                      {scaleConfig.isLandscape ? (
                        /* LANDSCAPE VIEW: Side-by-side (Left Media, Right Contributions Text) */
                        <div className="flex flex-row gap-4 sm:gap-5 h-full min-h-0 items-stretch">
                          {/* Left Column: Media Showcase (Featured 16:9 render + detail thumbnails) */}
                          <div className="w-[52%] flex flex-col gap-2.5 h-full min-h-0 flex-shrink-0">
                            {/* Main Featured 16:9 Image with Play Trigger */}
                            <div
                              onClick={() => setSelectedVideo(project)}
                              className="flex-1 relative rounded-xl sm:rounded-2xl overflow-hidden bg-black/40 border border-white/10 group cursor-pointer min-h-0"
                            >
                              <img
                                src={project.images?.col2Tall || project.singleImage}
                                alt={`${project.name} preview`}
                                loading="lazy"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                              />
                              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-13 h-13 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                  <Play className="w-5 h-5 fill-white ml-0.5" />
                                </div>
                              </div>
                            </div>

                            {/* Secondary Detail Thumbnails */}
                            {project.images && (
                              <div className="grid grid-cols-2 gap-2.5 h-[84px] sm:h-[96px] flex-shrink-0">
                                <div
                                  onClick={() => setSelectedVideo(project)}
                                  className="relative rounded-lg sm:rounded-xl overflow-hidden bg-black/40 border border-white/10 group cursor-pointer h-full"
                                >
                                  <img
                                    src={project.images.col1Top}
                                    alt={`${project.name} detail 1`}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                                  />
                                </div>
                                <div
                                  onClick={() => setSelectedVideo(project)}
                                  className="relative rounded-lg sm:rounded-xl overflow-hidden bg-black/40 border border-white/10 group cursor-pointer h-full"
                                >
                                  <img
                                    src={project.images.col1Bottom}
                                    alt={`${project.name} detail 2`}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                                  />
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Right Column: "What I Developed" / Contributions & Tech Scope Panel */}
                          <div className="w-[48%] flex flex-col h-full min-h-0 bg-black/35 rounded-xl sm:rounded-2xl border border-white/10 p-3 sm:p-4">
                            {/* Panel Header */}
                            <div className="flex items-center justify-between gap-2 pb-2.5 mb-2 border-b border-white/10 flex-shrink-0">
                              <div className="flex items-center gap-1.5 text-emerald-400">
                                <Wrench className="w-3.5 h-3.5" />
                                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                                  What I Developed & Built
                                </span>
                              </div>
                              <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                                Scope & Deliverables
                              </span>
                            </div>

                            {/* Scrollable Container with data-lenis-prevent and Dedicated Wheel Handler */}
                            <div
                              data-lenis-prevent="true"
                              onWheel={handleInnerWheel}
                              className="custom-card-scrollbar overflow-y-auto pr-2 flex-1 min-h-0 flex flex-col gap-3 overscroll-contain select-text"
                            >
                              {/* Role */}
                              <div className="text-xs text-white/90 font-medium">
                                <span className="text-white/40 uppercase text-[10px] tracking-wider mr-1.5 font-semibold">
                                  Role:
                                </span>
                                <span>{project.role}</span>
                              </div>

                              {/* Contributions Bullet List */}
                              <ul className="flex flex-col gap-2.5">
                                {project.contributions.map((item, cIdx) => (
                                  <li
                                    key={cIdx}
                                    className="flex items-start gap-2 text-xs sm:text-[13px] text-[#D7E2EA]/90 leading-relaxed font-light"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5 shadow-[0_0_6px_#34d399]" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>

                              {/* Differentials / Tech Tags */}
                              {project.differentials && project.differentials.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 pt-2 mt-1 border-t border-white/10">
                                  {project.differentials.map((diff, dIdx) => (
                                    <span
                                      key={dIdx}
                                      className="px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/5 text-[#D7E2EA]/85 border border-white/10"
                                    >
                                      {diff}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Project Overview Paragraph */}
                              {project.description && (
                                <p className="text-[11px] text-[#D7E2EA]/60 font-light leading-relaxed pt-1">
                                  {project.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* PORTRAIT VIEW: Stacked (Media on Top, Contributions Text on Bottom) */
                        <div className="flex flex-col gap-2.5 h-full min-h-0">
                          {/* Top Media Box (16:9 Preview) */}
                          <div
                            onClick={() => setSelectedVideo(project)}
                            className="w-full h-[140px] xs:h-[160px] relative rounded-xl overflow-hidden bg-black/40 border border-white/10 group cursor-pointer flex-shrink-0"
                          >
                            <img
                              src={project.images?.col2Tall || project.singleImage}
                              alt={`${project.name} preview`}
                              loading="lazy"
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl">
                                <Play className="w-4 h-4 fill-white ml-0.5" />
                              </div>
                            </div>
                          </div>

                          {/* Bottom Scrollable Panel: Contributions & Info */}
                          <div className="flex-1 min-h-0 bg-black/40 rounded-xl border border-white/10 p-3 flex flex-col">
                            <div className="flex items-center justify-between gap-1 pb-1.5 mb-1.5 border-b border-white/10 flex-shrink-0">
                              <div className="flex items-center gap-1.5 text-emerald-400">
                                <Wrench className="w-3 h-3" />
                                <span className="text-[11px] font-bold uppercase tracking-wider">
                                  What I Developed
                                </span>
                              </div>
                              <span className="text-[9px] text-white/40 uppercase tracking-widest font-mono">
                                Deliverables
                              </span>
                            </div>

                            {/* Scrollable Container with data-lenis-prevent and Dedicated Wheel Handler */}
                            <div
                              data-lenis-prevent="true"
                              onWheel={handleInnerWheel}
                              className="custom-card-scrollbar overflow-y-auto pr-1.5 flex-1 min-h-0 flex flex-col gap-2 overscroll-contain select-text"
                            >
                              <div className="text-[11px] text-white/90 font-medium">
                                <span className="text-white/40 uppercase text-[9px] tracking-wider mr-1 font-semibold">
                                  Role:
                                </span>
                                <span>{project.role}</span>
                              </div>

                              <ul className="flex flex-col gap-2">
                                {project.contributions.map((item, cIdx) => (
                                  <li
                                    key={cIdx}
                                    className="flex items-start gap-1.5 text-[11px] text-[#D7E2EA]/90 leading-relaxed font-light"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1 shadow-[0_0_6px_#34d399]" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>

                              {project.differentials && project.differentials.length > 0 && (
                                <div className="flex flex-wrap gap-1 pt-1.5 border-t border-white/10">
                                  {project.differentials.map((diff, dIdx) => (
                                    <span
                                      key={dIdx}
                                      className="px-2 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider bg-white/5 text-[#D7E2EA]/85 border border-white/10"
                                    >
                                      {diff}
                                    </span>
                                  ))}
                                </div>
                              )}
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

          {/* End Spacer: Provides scroll distance for the last card (05) to remain pinned before unpinning */}
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
