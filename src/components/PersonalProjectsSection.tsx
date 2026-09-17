import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, ExternalLink, Box } from 'lucide-react';
import { FadeIn } from './FadeIn';

export interface StudyProject {
  id: string;
  tag: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  artstationUrl: string;
  images: string[];
}

const STUDY_PROJECTS: StudyProject[] = [
  {
    id: 'mario-snes',
    tag: 'HARD SURFACE & SHADING',
    title: 'Mario SNES Cartridge',
    category: 'Topology, Bevels & PBR Material Study',
    description:
      'High-poly hard surface modeling of the classic Super Nintendo cartridge. Focus on clean sub-d topology, micro-bevels, plastic injection mold roughness variations, screw threads, and real-time PBR shading.',
    tools: ['Blender', 'Substance 3D Painter', 'PBR Shading', 'Marmoset Toolbag'],
    artstationUrl: 'https://lucasdeoliveiramartins.artstation.com',
    images: [
      './artstation/art_01.jpg',
      './artstation/art_02.jpg',
      './artstation/art_03.jpg',
      './artstation/art_04.jpg',
      './artstation/art_05.jpg',
      './artstation/art_06.jpg',
      './artstation/art_07.jpg',
      './artstation/art_08.jpg',
    ],
  },
  {
    id: 'stopwatch-lol',
    tag: 'PROP DESIGN & LIGHTING',
    title: 'Stopwatch (League of Legends)',
    category: 'Mechanical Gearing & Glass Refraction',
    description:
      'Faithful 3D reproduction of the Stopwatch in-game item. Complex internal mechanical gear assembly, metallic gold and brass anodization, glass refraction, and subtle surface micro-scratches.',
    tools: ['3ds Max', 'Blender', 'Substance 3D', 'PBR Metallic', 'Photoshop'],
    artstationUrl: 'https://lucasdeoliveiramartins.artstation.com',
    images: [
      './artstation/art_15.jpg',
      './artstation/art_16.jpg',
      './artstation/art_17.jpg',
      './artstation/art_18.jpg',
      './artstation/art_19.jpg',
      './artstation/art_20.jpg',
    ],
  },
  {
    id: 'jinx-zap',
    tag: 'WEAPON DESIGN & WEATHERING',
    title: "Jinx's Zap Gun (League of Legends)",
    category: 'Stylized Hard Surface & Material Wear',
    description:
      "Hard surface modeling and texturing study of Jinx's iconic Zap pistol from LoL / Arcane. Features weathered turquoise enamel paint, copper conduits, heat staining, and detailed assembly mechanics.",
    tools: ['Hard Surface Modeling', 'Substance 3D', 'PBR Shaders', 'Photoshop'],
    artstationUrl: 'https://lucasdeoliveiramartins.artstation.com',
    images: [
      './artstation/art_21.jpg',
      './artstation/art_22.jpg',
      './artstation/art_23.jpg',
      './artstation/art_24.jpg',
      './artstation/art_25.jpg',
    ],
  },
  {
    id: 'athenes-grail',
    tag: 'FANTASY PROP & EMISSIVE',
    title: "Athene's Unholy Grail (League of Legends)",
    category: 'Stylized Filigree & Crystal Shaders',
    description:
      'Stylized fantasy prop study of the mythical chalice item. Ornate golden metal filigree, embedded blood gemstones, and custom emissive energy glow effects.',
    tools: ['Stylized 3D', 'Substance 3D', 'Emissive Shaders', 'Blender'],
    artstationUrl: 'https://lucasdeoliveiramartins.artstation.com',
    images: [
      './artstation/art_12.jpg',
      './artstation/art_13.jpg',
      './artstation/art_14.jpg',
    ],
  },
  {
    id: 'goddess-crest',
    tag: 'ORNAMENTAL & PBR STUDY',
    title: 'The Goddess Crest (Zelda)',
    category: 'Ornamental Relief & Gold Texturing',
    description:
      'SNES tribute 3D emblem study inspired by the Triforce and Goddess Crest. Elaborate ornamental relief, micro-surface gold variations, and dramatic studio lighting setup.',
    tools: ['Hard Surface', 'Ornamental Modeling', 'Gold PBR', 'Marmoset'],
    artstationUrl: 'https://lucasdeoliveiramartins.artstation.com',
    images: [
      './artstation/art_26.jpg',
      './artstation/art_27.jpg',
    ],
  },
];

export const PersonalProjectsSection: React.FC = () => {
  // Map of project index to currently active image URL
  const [selectedImageMap, setSelectedImageMap] = useState<Record<number, string>>({});

  // Lightbox Modal State
  const [lightboxState, setLightboxState] = useState<{
    projectIndex: number;
    imageIndex: number;
  } | null>(null);

  // Keyboard navigation for enlarged image lightbox
  useEffect(() => {
    if (!lightboxState) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxState(null);
      } else if (e.key === 'ArrowLeft') {
        const project = STUDY_PROJECTS[lightboxState.projectIndex];
        const prevIdx = (lightboxState.imageIndex - 1 + project.images.length) % project.images.length;
        setLightboxState((prev) => prev && { ...prev, imageIndex: prevIdx });
      } else if (e.key === 'ArrowRight') {
        const project = STUDY_PROJECTS[lightboxState.projectIndex];
        const nextIdx = (lightboxState.imageIndex + 1) % project.images.length;
        setLightboxState((prev) => prev && { ...prev, imageIndex: nextIdx });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState]);

  return (
    <section
      id="artstation"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-28 select-none overflow-hidden border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 sm:gap-14">
        {/* Section Header */}
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 border-b border-white/10 pb-6 text-center sm:text-left">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-semibold mb-1 block">
              3D Modeling, Hard Surface & Shading
            </span>
            <h2
              style={{ fontSize: 'clamp(2rem, 6vw, 70px)' }}
              className="hero-heading font-black uppercase tracking-tight leading-none"
            >
              Estudos & Projetos Pessoais
            </h2>
          </div>

          <a
            href="https://lucasdeoliveiramartins.artstation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-[#161616] text-[#D7E2EA] hover:text-white hover:border-white hover:bg-white/10 transition-all text-xs font-semibold uppercase tracking-wider flex-shrink-0"
          >
            <span>Ver no ArtStation</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Compact Projects List using same layout style */}
        <div className="w-full flex flex-col gap-6 sm:gap-8">
          {STUDY_PROJECTS.map((project, index) => {
            const currentImg = selectedImageMap[index] || project.images[0];
            const currentImgIdx = project.images.indexOf(currentImg);

            return (
              <FadeIn
                key={project.id}
                delay={index * 0.08}
                y={30}
                className="w-full rounded-2xl bg-[#141414] border border-white/10 hover:border-white/20 transition-all p-4 sm:p-6 shadow-xl"
              >
                <div className="flex flex-col md:flex-row gap-5 sm:gap-6 items-stretch">
                  {/* Left Column: Interactive Media Showcase with thumbnails */}
                  <div className="w-full md:w-[50%] lg:w-[48%] flex flex-col gap-2.5 flex-shrink-0">
                    {/* Main Active Render Box */}
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/60 border border-white/10 group shadow-md">
                      <img
                        src={currentImg}
                        alt={`${project.title} render`}
                        loading="lazy"
                        onClick={() => {
                          setLightboxState({
                            projectIndex: index,
                            imageIndex: currentImgIdx >= 0 ? currentImgIdx : 0,
                          });
                        }}
                        className="w-full h-full object-cover object-center cursor-zoom-in transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />

                      {/* Top Controls: Enlarge Button */}
                      <div className="absolute top-2.5 right-2.5 z-20">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxState({
                              projectIndex: index,
                              imageIndex: currentImgIdx >= 0 ? currentImgIdx : 0,
                            });
                          }}
                          className="px-2.5 py-1 rounded-full bg-black/80 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/25 text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                          title="Ver ampliado"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>Ampliar</span>
                        </button>
                      </div>

                      {/* Bottom image counter badge */}
                      <div className="absolute bottom-2 left-2 z-20 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-[9px] font-mono text-white/80">
                        {currentImgIdx + 1} / {project.images.length}
                      </div>
                    </div>

                    {/* Thumbnails Row: Click to switch active image */}
                    {project.images.length > 1 && (
                      <div
                        className="grid gap-1.5 h-[50px] sm:h-[60px] flex-shrink-0"
                        style={{ gridTemplateColumns: `repeat(${project.images.length}, minmax(0, 1fr))` }}
                      >
                        {project.images.map((imgUrl, imgIdx) => {
                          const isSelected = currentImg === imgUrl;
                          return (
                            <div
                              key={imgIdx}
                              onClick={() => {
                                setSelectedImageMap((prev) => ({
                                  ...prev,
                                  [index]: imgUrl,
                                }));
                              }}
                              className={`relative rounded-lg overflow-hidden bg-black/40 border cursor-pointer h-full transition-all ${
                                isSelected
                                  ? 'border-emerald-400 ring-2 ring-emerald-400/50 scale-[1.02]'
                                  : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
                              }`}
                            >
                              <img
                                src={imgUrl}
                                alt={`${project.title} thumb ${imgIdx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Project Info & Deliverables */}
                  <div className="w-full md:w-[50%] lg:w-[52%] flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2.5">
                      {/* Tag & Icon */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          {project.tag}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-white/30">
                          <Box className="w-3.5 h-3.5" />
                          <span>3D Study</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wide text-white">
                        {project.title}
                      </h3>

                      {/* Category */}
                      <p className="text-xs text-[#D7E2EA]/70 font-semibold uppercase tracking-wider">
                        {project.category}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tools and External Link */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/10">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/[0.04] border border-white/10 text-[#D7E2EA]/80"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.artstationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold uppercase tracking-wider flex-shrink-0 transition-colors"
                      >
                        <span>ArtStation</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
      {lightboxState && (() => {
        const project = STUDY_PROJECTS[lightboxState.projectIndex];
        if (!project) return null;
        const currentImg = project.images[lightboxState.imageIndex];

        return (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 select-none animate-in fade-in duration-200"
            onClick={() => setLightboxState(null)}
          >
            {/* Top Bar */}
            <div
              className="w-full max-w-7xl flex items-center justify-between text-white z-20 py-2 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {project.tag}
                </span>
                <span className="font-bold text-sm sm:text-base uppercase tracking-wider text-white">
                  {project.title}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-white/50">
                  {lightboxState.imageIndex + 1} / {project.images.length}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxState(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black text-white transition-all cursor-pointer"
                  title="Fechar (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Central Stage: High-Resolution Render */}
            <div
              className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-4 min-h-0"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImg}
                alt={`${project.title} full view`}
                className="max-h-full max-w-full object-contain rounded-xl shadow-2xl border border-white/15"
              />

              {/* Prev Button */}
              {project.images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const prevIdx =
                      (lightboxState.imageIndex - 1 + project.images.length) % project.images.length;
                    setLightboxState((prev) => prev && { ...prev, imageIndex: prevIdx });
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/75 hover:bg-emerald-500 hover:text-black text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-xl"
                  title="Anterior (Seta Esquerda)"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Next Button */}
              {project.images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const nextIdx = (lightboxState.imageIndex + 1) % project.images.length;
                    setLightboxState((prev) => prev && { ...prev, imageIndex: nextIdx });
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/75 hover:bg-emerald-500 hover:text-black text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-xl"
                  title="Próxima (Seta Direita)"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}
            </div>

            {/* Bottom Thumbnails Strip in Lightbox */}
            {project.images.length > 1 && (
              <div
                className="w-full max-w-2xl flex items-center justify-center gap-2 overflow-x-auto py-2"
                onClick={(e) => e.stopPropagation()}
              >
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setLightboxState((prev) => prev && { ...prev, imageIndex: i })}
                    className={`w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden border transition-all flex-shrink-0 cursor-pointer ${
                      lightboxState.imageIndex === i
                        ? 'border-emerald-400 ring-2 ring-emerald-400/50 scale-105'
                        : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })()}
    </section>
  );
};

export default PersonalProjectsSection;
