import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
  tools: string[];
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Unreal Engine & Systems Architecture',
    description:
      'Advanced gameplay programming in UE4 & UE5 using C++ and modular Blueprints. Architecture of responsive interactive mechanics, multiplayer replication logic, state machines, and Sequencer cinematics built for rock-solid stability.',
    tools: ['Unreal Engine 5', 'C++', 'Blueprints', 'Multiplayer & Replication', 'Sequencer'],
  },
  {
    number: '02',
    name: 'Art-to-Engine & Technical 3D Pipeline',
    description:
      'Seamless bridge connecting 3D DCC tools (Blender, Substance, 3ds Max) to engine. Construction of modular architectural kits, automated collision, Instanced Static Meshes (ISM/HISM), and asset budgets that guarantee 90+ FPS.',
    tools: ['Modular Kits', 'Substance 3D', 'Blender / 3ds Max', 'ISM / HISM', 'LOD Pipelines'],
  },
  {
    number: '03',
    name: 'GPU/CPU Profiling & VR Optimization',
    description:
      'Rigorous real-time profiling to conquer render thread and GPU bottlenecks. Elimination of overdraw hotspots, material complexity spikes, and draw calls on standalone headsets like Meta Quest 2/3/Pro.',
    tools: ['RenderDoc', 'Unreal Insights', 'GPU Visualizer', 'Meta Quest Optimization', 'Draw Call Batching'],
  },
  {
    number: '04',
    name: 'Shader Authoring & Technical Materials',
    description:
      'Crafting high-performance real-time shaders and PBR materials. Deep knowledge of channel packing (ORM masks), vertex deformation, dynamic weather/translucency tricks, and custom HLSL nodes for optimal pixel shader efficiency.',
    tools: ['HLSL', 'PBR Shaders', 'Channel Packing (ORM)', 'Vertex Animation', 'Post-Process Materials'],
  },
  {
    number: '05',
    name: 'Version Control & Production Engineering',
    description:
      'Strict engineering discipline for large game repositories and binary assets. Professional workflows with Perforce (Helix Core), Git/GitHub, Azure DevOps, Diversion, and Fork, utilizing Conventional Commits, PR reviews, and QA verification.',
    tools: ['Perforce (Helix Core)', 'Git & GitHub', 'Azure DevOps', 'Conventional Commits', 'PR Reviews & QA'],
  },
  {
    number: '06',
    name: 'Agile Management & Agentic AI Workflows',
    description:
      'High-velocity project execution in distributed teams using ClickUp, Jira, and Azure Boards with Kanban and rapid sprint cadences. Leveraging modern Agentic AI tools and MCP integrations to accelerate prototyping, code review, and asset pipelines.',
    tools: ['ClickUp', 'Jira / Azure Boards', 'Kanban & Sprints', 'Agentic AI Workflows', 'Pipeline Automation'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-white text-[#0C0C0C] rounded-t-[32px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 z-10 select-none shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(2.5rem, 11vw, 150px)' }}
            className="hero-heading font-black uppercase tracking-tight leading-none text-center mb-12 sm:mb-18 md:mb-24 text-[#0C0C0C]"
          >
            Services
          </h2>
        </FadeIn>

        {/* Vertical List of 5 Service Items */}
        <div className="flex flex-col divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className="group py-6 sm:py-8 md:py-10 transition-colors duration-300 hover:bg-black/[0.02]"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-start md:items-center justify-between gap-3 sm:gap-6 md:gap-12">
                {/* Huge Number */}
                <div className="flex-shrink-0">
                  <span
                    style={{ fontSize: 'clamp(2.4rem, 8vw, 130px)' }}
                    className="font-black text-[#0C0C0C] leading-none tracking-tighter select-none opacity-90 group-hover:opacity-100 transition-opacity"
                  >
                    {service.number}
                  </span>
                </div>

                {/* Name, Description & Tools */}
                <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 flex-grow">
                  <h3
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 1.85rem)' }}
                    className="font-bold uppercase text-[#0C0C0C] tracking-wide"
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{ fontSize: 'clamp(0.82rem, 1.4vw, 1.05rem)' }}
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/80"
                  >
                    {service.description}
                  </p>
                  {/* Tooling Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                    {service.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-black/5 text-[#0C0C0C]/75 border border-black/10 group-hover:border-black/25 group-hover:bg-black/10 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
