import React from 'react';
import {
  Code2,
  Gauge,
  Palette,
  GitBranch,
  CheckCircle2,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';

interface ExpertisePillar {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
}

const EXPERTISE_PILLARS: ExpertisePillar[] = [
  {
    title: 'Unreal Engine & Systems',
    desc: 'C++ & modular Blueprints, multiplayer replication, responsive mechanics & state machines.',
    icon: Code2,
    tags: ['UE5 / UE4', 'C++', 'Blueprints', 'Multiplayer'],
  },
  {
    title: 'GPU Profiling & VR Optimization',
    desc: 'RenderDoc, Unreal Insights, draw call reduction & strict 90+ FPS on Meta Quest standalone.',
    icon: Gauge,
    tags: ['RenderDoc', 'Unreal Insights', 'Meta Quest', 'Draw Calls'],
  },
  {
    title: 'Shaders & Technical 3D Pipeline',
    desc: 'Custom HLSL, PBR materials, ORM packing & seamless DCC-to-engine asset pipelines.',
    icon: Palette,
    tags: ['HLSL', 'PBR', 'Substance 3D', 'Blender'],
  },
  {
    title: 'DevOps & Agile Production',
    desc: 'Perforce (Helix Core), Git, Azure DevOps, Conventional Commits & Agentic AI workflows.',
    icon: GitBranch,
    tags: ['Perforce', 'Git / GitHub', 'Azure DevOps', 'Agentic AI'],
  },
];

const SKILL_PILLS = [
  'Unreal Engine 5',
  'C++',
  'Blueprints',
  'HLSL Shaders',
  'RenderDoc',
  'Substance 3D',
  'Blender',
  'Meta Quest VR',
  'Perforce',
  'Git',
  'Azure DevOps',
  'Multiplayer Replication',
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 pt-4 sm:pt-8 md:pt-10 pb-16 sm:pb-20 md:pb-24 bg-[#0C0C0C] z-20 select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={25} className="text-center">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-semibold mb-1 block">
            Profile & Technical Expertise
          </span>
          <h2
            style={{ fontSize: 'clamp(2.2rem, 7vw, 90px)' }}
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
          >
            About Me
          </h2>
        </FadeIn>

        {/* Unified 2-Column Responsive Card */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Framed Portrait + Quick Contact & Status (approx 4.5 cols) */}
          <FadeIn delay={0.1} y={30} className="lg:col-span-4 flex flex-col items-center lg:items-start gap-4">
            <div className="relative group w-[200px] xs:w-[220px] sm:w-[250px] aspect-[3/4] rounded-[22px] p-2 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden mx-auto lg:mx-0">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none" />
              <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-[#161616]">
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

            {/* Quick Details Below Photo */}
            <div className="flex flex-col items-center lg:items-start gap-2 w-full text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#D7E2EA]/70">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Curitiba, PR, Brazil • Open to Remote</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Available for New Projects</span>
              </div>
              <div className="mt-2">
                <ContactButton href="#contact" label="Get In Touch" className="text-xs px-6 py-2.5" />
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Bio, Academic Credentials & Compact Technical Capabilities (approx 7.5 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {/* Name, Role & Badges */}
            <FadeIn delay={0.15} y={20} className="flex flex-col gap-2.5">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide text-white">
                  Lucas de Oliveira Martins
                </h3>
                <p className="text-xs sm:text-sm text-emerald-400 uppercase tracking-widest font-semibold mt-0.5">
                  Technical Artist & Unreal Engine Engineer
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-white/[0.05] border border-white/15 text-[#D7E2EA]">
                  B.S. Graphic Expression | UFPR
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-white/[0.05] border border-white/15 text-[#D7E2EA]">
                  4+ Years Production Exp.
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-white/[0.05] border border-white/15 text-[#D7E2EA]">
                  Meta Quest Standalone VR
                </span>
              </div>

              {/* Concise Bio */}
              <p className="text-xs sm:text-sm md:text-base text-[#D7E2EA]/85 font-light leading-relaxed">
                Specialist in bridging artistic DCC pipelines and high-performance engine architecture. Proven track record building responsive gameplay systems in Unreal Engine (C++ & Blueprints), authoring custom HLSL shaders, profiling real-time GPU/render threads with RenderDoc, and optimizing standalone VR experiences for Meta Quest in lean, high-velocity teams.
              </p>
            </FadeIn>

            {/* Core Capabilities / Services Grid (Compact 2x2 cards) */}
            <FadeIn delay={0.2} y={20} className="flex flex-col gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D7E2EA]/60 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>Technical Services & Production Specializations</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {EXPERTISE_PILLARS.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 sm:p-3.5 rounded-xl bg-[#131313] border border-white/10 hover:border-emerald-500/40 hover:bg-[#161616] transition-all flex flex-col justify-between gap-2"
                    >
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-white">
                            {pillar.title}
                          </h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#D7E2EA]/70 leading-relaxed font-light">
                          {pillar.desc}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-1.5 border-t border-white/5">
                        {pillar.tags.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-black/40 border border-white/10 text-[#D7E2EA]/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            {/* Compact Skills Pills Strip */}
            <FadeIn delay={0.25} y={15} className="flex flex-col gap-2 pt-1 border-t border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D7E2EA]/50 font-mono">
                Primary Toolkit & Frameworks
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SKILL_PILLS.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-white/[0.04] border border-white/10 text-[#D7E2EA]/80 hover:border-emerald-400/50 hover:text-white transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
