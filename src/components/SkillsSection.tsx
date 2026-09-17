import React from 'react';
import {
  Code2,
  Cpu,
  Layers,
  Gauge,
  GitBranch,
  Boxes,
  Palette,
  Terminal,
  Sparkles,
  Workflow,
  Wrench,
  MonitorCheck,
} from 'lucide-react';
import { FadeIn } from './FadeIn';

interface ServicePillar {
  number: string;
  name: string;
  description: string;
  tools: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICE_PILLARS: ServicePillar[] = [
  {
    number: '01',
    name: 'Unreal Engine & Systems Architecture',
    description:
      'Advanced gameplay programming in UE4 & UE5 using C++ and modular Blueprints. Architecture of responsive interactive mechanics, multiplayer replication logic, state machines, and Sequencer cinematics built for rock-solid stability.',
    tools: ['Unreal Engine 5', 'C++', 'Blueprints', 'Multiplayer & Replication', 'Sequencer'],
    icon: Code2,
  },
  {
    number: '02',
    name: 'Art-to-Engine & Technical 3D Pipeline',
    description:
      'Seamless bridge connecting 3D DCC tools (Blender, Substance, 3ds Max) to engine. Construction of modular architectural kits, automated collision, Instanced Static Meshes (ISM/HISM), and asset budgets that guarantee 90+ FPS.',
    tools: ['Modular Kits', 'Substance 3D', 'Blender / 3ds Max', 'ISM / HISM', 'LOD Pipelines'],
    icon: Boxes,
  },
  {
    number: '03',
    name: 'GPU/CPU Profiling & VR Optimization',
    description:
      'Rigorous real-time profiling to conquer render thread and GPU bottlenecks. Elimination of overdraw hotspots, material complexity spikes, and draw calls on standalone headsets like Meta Quest 2/3/Pro.',
    tools: ['RenderDoc', 'Unreal Insights', 'GPU Visualizer', 'Meta Quest Optimization', 'Draw Call Batching'],
    icon: Gauge,
  },
  {
    number: '04',
    name: 'Shader Authoring & Technical Materials',
    description:
      'Crafting high-performance real-time shaders and PBR materials. Deep knowledge of channel packing (ORM masks), vertex deformation, dynamic weather/translucency tricks, and custom HLSL nodes for optimal pixel shader efficiency.',
    tools: ['HLSL', 'PBR Shaders', 'Channel Packing (ORM)', 'Vertex Animation', 'Post-Process Materials'],
    icon: Palette,
  },
  {
    number: '05',
    name: 'Version Control & Production Engineering',
    description:
      'Strict engineering discipline for large game repositories and binary assets. Professional workflows with Perforce (Helix Core), Git/GitHub, Azure DevOps, Diversion, and Fork, utilizing Conventional Commits, PR reviews, and QA verification.',
    tools: ['Perforce (Helix Core)', 'Git & GitHub', 'Azure DevOps', 'Conventional Commits', 'PR Reviews & QA'],
    icon: GitBranch,
  },
  {
    number: '06',
    name: 'Agile Management & Agentic AI Workflows',
    description:
      'High-velocity project execution in distributed teams using ClickUp, Jira, and Azure Boards with Kanban and rapid sprint cadences. Leveraging modern Agentic AI tools and MCP integrations to accelerate prototyping, code review, and asset pipelines.',
    tools: ['ClickUp', 'Jira / Azure Boards', 'Kanban & Sprints', 'Agentic AI Workflows', 'Pipeline Automation'],
    icon: Workflow,
  },
];

const DISCIPLINE_PILLS = [
  'Technical Art',
  'Unreal Engine 5 (C++ / Blueprints)',
  'Custom Shaders & HLSL',
  'GPU / CPU Profiling',
  'VR / XR Spatial Optimization',
  'Art-to-Engine Pipelines',
  'Multiplayer Replication',
  'Meta Quest Standalone',
  'Draw Calls & LODs',
  'Perforce Helix Core',
  'Conventional Commits',
  'Agentic AI Workflows',
];

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Logic',
    icon: Terminal,
    skills: ['C++', 'Blueprints', 'Python', 'HLSL', 'GLSL', 'C#', 'TypeScript', 'HTML/CSS'],
  },
  {
    title: 'Engines & Spatial Tech',
    icon: Cpu,
    skills: ['Unreal Engine 5', 'Unreal Engine 4', 'Meta Quest OS', 'PC / Windows', 'OpenXR', 'SteamVR'],
  },
  {
    title: 'Rendering & Shading',
    icon: Layers,
    skills: [
      'HLSL Custom Nodes',
      'PBR Material Graphs',
      'Channel Packing (ORM)',
      'Lumen',
      'Nanite',
      'Instanced Stereo (VR)',
      'Post-Processing',
    ],
  },
  {
    title: 'Profiling & Diagnostics',
    icon: Gauge,
    skills: ['RenderDoc', 'Unreal Insights', 'GPU Visualizer', 'Stat Engine / RHI', 'Draw Call Optimization', 'Overdraw Analysis'],
  },
  {
    title: '3D & DCC Software',
    icon: Palette,
    skills: ['Substance 3D Painter', 'Substance 3D Designer', 'Blender', '3ds Max', 'ZBrush', 'Photoshop', 'Marmoset Toolbag'],
  },
  {
    title: 'Version Control & DevOps',
    icon: GitBranch,
    skills: ['Perforce (Helix Core)', 'Git & GitHub', 'Azure DevOps', 'Diversion', 'Fork', 'Conventional Commits', 'PR Reviews & QA'],
  },
  {
    title: 'Project Management & AI',
    icon: Sparkles,
    skills: ['ClickUp', 'Jira / Azure Boards', 'Kanban & Sprints', 'Agentic AI Automation', 'MCP Protocols', 'Agile Production'],
  },
  {
    title: 'Key Deliverables',
    icon: MonitorCheck,
    skills: ['Interactive ArchViz', 'Industrial VR Training', 'Biometric Simulations', 'Mixed Reality Exhibits', 'Multiplayer Experiences'],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#0E0E0E] text-[#D7E2EA] px-4 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 border-t border-white/10 z-15 select-none overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-16 sm:gap-20 md:gap-24">
        {/* 1. Header & Technical Manifesto */}
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto">
          <FadeIn delay={0} y={30}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] sm:text-xs text-emerald-300 font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Technical Skills & Production Pillars</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} y={30}>
            <h2
              style={{ fontSize: 'clamp(2.2rem, 6.5vw, 4.8rem)' }}
              className="hero-heading font-black uppercase tracking-tight leading-none text-center"
            >
              Bridging Art, Rendering & Engine Performance
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} y={20}>
            <p className="text-[#D7E2EA]/75 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              I architect the systems behind high visual fidelity, seamless DCC-to-engine workflows, and strict framerate reliability across engines, platforms, and interactive productions.
            </p>
          </FadeIn>

          {/* Core Discipline Pills Strip (Inspired by Justice Shultz) */}
          <FadeIn delay={0.2} y={20} className="w-full mt-2">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {DISCIPLINE_PILLS.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider bg-white/[0.04] border border-white/15 text-[#D7E2EA] hover:border-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all duration-200"
                >
                  {pill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* 2. Core Capability Pillars (The 6 Services / Specializations) */}
        <div className="flex flex-col gap-6">
          <FadeIn delay={0.1} y={20} className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-white">
              <Wrench className="w-4 h-4 text-emerald-400" />
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider">
                Production Pillars & Technical Services
              </h3>
            </div>
            <span className="text-xs text-white/40 uppercase tracking-widest font-mono hidden sm:inline-block">
              Full-Stack Tech Art
            </span>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SERVICE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <FadeIn
                  key={pillar.number}
                  delay={idx * 0.08}
                  y={25}
                  className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-emerald-500/40 hover:bg-[#181818] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex flex-col gap-3.5">
                    {/* Header: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-white/25 group-hover:text-emerald-400 transition-colors">
                        {pillar.number}
                      </span>
                      <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-emerald-400/40 group-hover:bg-emerald-500/10 transition-all">
                        <Icon className="w-5 h-5 text-[#D7E2EA] group-hover:text-emerald-300 transition-colors" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide text-white leading-snug group-hover:text-emerald-300 transition-colors">
                      {pillar.name}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Tool Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/10">
                    {pillar.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-black/40 border border-white/10 text-[#D7E2EA]/80 group-hover:border-white/20 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* 3. Categorized Technical Skills Matrix (Justice Shultz Style Grid) */}
        <div className="flex flex-col gap-6">
          <FadeIn delay={0.1} y={20} className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-white">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider">
                Technical Toolkit & Competencies
              </h3>
            </div>
            <span className="text-xs text-white/40 uppercase tracking-widest font-mono hidden sm:inline-block">
              Languages, DCC, Tools & Engines
            </span>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <FadeIn
                  key={cat.title}
                  delay={idx * 0.06}
                  y={20}
                  className="p-4 sm:p-5 rounded-xl bg-[#131313] border border-white/10 hover:border-white/25 transition-all flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2.5 pb-2.5 border-b border-white/10">
                    <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                      {cat.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-white/[0.03] border border-white/10 text-[#D7E2EA]/85 hover:border-emerald-400/50 hover:text-white hover:bg-white/[0.08] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
