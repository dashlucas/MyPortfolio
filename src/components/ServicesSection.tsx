import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Unreal Engine Mastery',
    description:
      'UE4 and UE5 development with advanced Blueprints, C++, Sequencer cinematics, and interactive logic engineered for scalable, responsive gameplay.',
  },
  {
    number: '02',
    name: 'Art-to-Engine Pipeline',
    description:
      'Seamless integration workflow for 3D environments, modular kits, and asset libraries ensuring visual fidelity while meeting strict frame rate budgets.',
  },
  {
    number: '03',
    name: 'GPU & CPU Profiling',
    description:
      'Deep performance profiling using Unreal Insights and RenderDoc to eradicate draw call spikes, overdraw hotspots, and rendering bottlenecks on VR and mobile.',
  },
  {
    number: '04',
    name: 'Shader Authoring & HLSL',
    description:
      'Creation of custom PBR materials, channel-packed texture masks, optimized alpha handling, and HLSL expressions tailored for real-time graphics.',
  },
  {
    number: '05',
    name: 'Technical 3D Art & DCC',
    description:
      'Hard-surface modeling, Substance/Photoshop texturing, Instanced Static Meshes (ISM), UV discipline, and internal tool development to accelerate art teams.',
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

                {/* Name & Description */}
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 flex-grow">
                  <h3
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{ fontSize: 'clamp(0.82rem, 1.5vw, 1.18rem)' }}
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-65"
                  >
                    {service.description}
                  </p>
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
