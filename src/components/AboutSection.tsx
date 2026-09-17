import React from 'react';
import {
  Code2,
  Gauge,
  Boxes,
  Palette,
  GitBranch,
  Workflow,
  CheckCircle2,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';

interface ProductionPillar {
  number: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
}

const PRODUCTION_PILLARS: ProductionPillar[] = [
  {
    number: '01',
    title: 'Unreal Engine & Systems Architecture',
    desc: 'Advanced gameplay programming in UE4 & UE5 using C++ and modular Blueprints. Multiplayer replication logic, interactive state machines, and Sequencer cinematics built for rock-solid stability.',
    icon: Code2,
    tags: ['UE5 / UE4', 'C++', 'Blueprints', 'Multiplayer & Replication', 'State Machines'],
  },
  {
    number: '02',
    title: 'GPU/CPU Profiling & VR Optimization',
    desc: 'Rigorous real-time profiling to eliminate render thread and GPU bottlenecks. Overdraw elimination, material complexity reduction, and strict 90+ FPS delivery on standalone Meta Quest headsets.',
    icon: Gauge,
    tags: ['RenderDoc', 'Unreal Insights', 'GPU Visualizer', 'Meta Quest', 'Draw Calls'],
  },
  {
    number: '03',
    title: 'Art-to-Engine & Technical 3D Pipeline',
    desc: 'Seamless bridge connecting 3D DCC tools (Blender, Substance, 3ds Max) to engine. Modular architectural kits, automated collision, Instanced Static Meshes (ISM/HISM), and asset budgets.',
    icon: Boxes,
    tags: ['Modular Kits', 'Substance 3D', 'Blender / 3ds Max', 'ISM / HISM', 'LOD Pipelines'],
  },
  {
    number: '04',
    title: 'Shader Authoring & Technical Materials',
    desc: 'High-performance real-time shaders and PBR materials. Channel packing (ORM masks), vertex deformation, dynamic weather/translucency tricks, and custom HLSL nodes for optimal pixel shader efficiency.',
    icon: Palette,
    tags: ['Custom HLSL', 'PBR Materials', 'Channel Packing (ORM)', 'Vertex Animation', 'Post-Process'],
  },
  {
    number: '05',
    title: 'Version Control & Production Discipline',
    desc: 'Strict engineering discipline for large game repositories and binary assets. Professional workflows with Perforce (Helix Core), Git/GitHub, Azure DevOps, Conventional Commits, and QA review processes.',
    icon: GitBranch,
    tags: ['Perforce (Helix Core)', 'Git & GitHub', 'Azure DevOps', 'Conventional Commits', 'PR Reviews'],
  },
  {
    number: '06',
    title: 'Agile Management & Agentic AI Workflows',
    desc: 'High-velocity project execution in distributed teams using ClickUp, Jira, and Azure Boards with Kanban and rapid sprint cadences. Leveraging Agentic AI tools and MCP integrations to accelerate pipelines.',
    icon: Workflow,
    tags: ['ClickUp', 'Jira / Azure Boards', 'Kanban & Sprints', 'Agentic AI Workflows', 'Pipeline Automation'],
  },
];

const TOOLKIT_CATEGORIES = [
  {
    label: 'Languages & Logic',
    items: ['C++', 'Blueprints', 'HLSL', 'Python', 'GLSL'],
  },
  {
    label: 'Engines & Spatial',
    items: ['Unreal Engine 5', 'Unreal Engine 4', 'Meta Quest OS', 'PC / Windows'],
  },
  {
    label: 'DCC & Profiling',
    items: ['RenderDoc', 'Substance 3D', 'Blender', '3ds Max', 'Unreal Insights'],
  },
  {
    label: 'DevOps & Agile',
    items: ['Perforce (Helix Core)', 'Git / GitHub', 'Azure DevOps', 'ClickUp / Jira'],
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 pt-4 sm:pt-8 md:pt-10 pb-16 sm:pb-24 bg-[#0C0C0C] z-20 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center gap-8 sm:gap-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={25} className="text-center">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-semibold mb-1 block">
            Profile & Technical Expertise
          </span>
          <h2
            style={{ fontSize: 'clamp(2.2rem, 6.5vw, 85px)' }}
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
          >
            About Me
          </h2>
        </FadeIn>

        {/* 2-Column Layout: Left (Photo + Bio) / Right (Production Specialization & Skills as Primary) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ================= LEFT COLUMN: PHOTO & FULL BIO DETAILS ================= */}
          <FadeIn delay={0.1} y={30} className="lg:col-span-5 flex flex-col gap-5">
            {/* Framed Portrait Photo */}
            <div className="relative group w-[210px] xs:w-[230px] sm:w-[260px] aspect-[3/4] rounded-[24px] p-2 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden mx-auto lg:mx-0">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none" />
              <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-[#161616]">
                <img
                  src="./lucas_profile.jpg"
                  alt="Lucas de Oliveira Martins"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 py-1.5 px-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-[#D7E2EA] font-medium uppercase tracking-wider select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Lucas O. Martins</span>
                </div>
              </div>
            </div>

            {/* Profile Bio Details */}
            <div className="flex flex-col gap-3 text-left">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wide text-white leading-tight">
                  Lucas de Oliveira Martins
                </h3>
                <p className="text-xs sm:text-sm text-emerald-400 uppercase tracking-widest font-bold mt-1">
                  Technical Artist & Unreal Engine Engineer
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#161616] border border-white/15 text-[#D7E2EA]">
                  B.S. Graphic Expression | UFPR
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#161616] border border-white/15 text-[#D7E2EA]">
                  4+ Years Production Exp.
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#161616] border border-white/15 text-[#D7E2EA]">
                  Meta Quest Standalone VR
                </span>
              </div>

              {/* Bio Paragraph */}
              <p className="text-xs sm:text-sm text-[#D7E2EA]/85 font-light leading-relaxed">
                Specialist in bridging artistic DCC pipelines and high-performance engine architecture. Proven track record building responsive gameplay systems in Unreal Engine (C++ & Blueprints), authoring custom HLSL shaders, profiling real-time GPU/render threads with RenderDoc, and optimizing standalone VR experiences for Meta Quest in lean, high-velocity teams.
              </p>

              {/* Location & Status Info */}
              <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
                <div className="inline-flex items-center gap-2 text-xs text-[#D7E2EA]/75">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Curitiba, PR, Brazil • Open to Remote & Relocation</span>
                </div>
                <div className="inline-flex items-center gap-2 text-xs text-emerald-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Available for New Projects</span>
                </div>
              </div>

              {/* Contact Button */}
              <div className="pt-2">
                <ContactButton href="#contact" label="Get In Touch" className="text-xs px-6 py-2.5" />
              </div>
            </div>
          </FadeIn>

          {/* ================= RIGHT COLUMN: PRODUCTION SPECIALIZATION & SKILLS (PRINCIPAL) ================= */}
          <FadeIn delay={0.15} y={30} className="lg:col-span-7 flex flex-col gap-5">
            {/* Header of Principal Area */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-white">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider">
                  Production Specialization & Technical Skills
                </h3>
              </div>
              <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest font-mono hidden sm:inline-block">
                Core Competencies
              </span>
            </div>

            {/* 6 Production Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {PRODUCTION_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.number}
                    className="p-3.5 sm:p-4 rounded-xl bg-[#131313] border border-white/10 hover:border-emerald-500/40 hover:bg-[#161616] transition-all flex flex-col justify-between gap-2.5 group"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-white group-hover:text-emerald-300 transition-colors leading-tight">
                            {pillar.title}
                          </h4>
                        </div>
                        <span className="text-xs font-mono font-black text-white/25 group-hover:text-emerald-400 transition-colors">
                          {pillar.number}
                        </span>
                      </div>

                      <p className="text-[11px] sm:text-xs text-[#D7E2EA]/75 leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                      {pillar.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-black/40 border border-white/10 text-[#D7E2EA]/85"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Categorized Technical Toolkit Matrix */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#121212] border border-white/10 flex flex-col gap-3 mt-1">
              <div className="flex items-center gap-2 text-white pb-2 border-b border-white/10">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#D7E2EA]">
                  Technical Toolkit & Frameworks Matrix
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TOOLKIT_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-white/45">
                      {cat.label}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item, iIdx) => (
                        <span
                          key={iIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-white/[0.04] border border-white/10 text-[#D7E2EA]/85 hover:border-emerald-400/50 hover:text-white transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
