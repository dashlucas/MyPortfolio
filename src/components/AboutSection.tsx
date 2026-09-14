import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  const bioText =
    "Technical Artist and UE Engineer with 4+ years of experience bridging the gap between art pipelines and engine performance. Specialist in Unreal Engine (C++ / Blueprints), shader authoring, GPU profiling with RenderDoc, and cross-platform optimization for Meta Quest and VR. Delivering high-performance interactive experiences by solving complex rendering bottlenecks and automating art workflows.";

  const badges = [
    'Aeon VR | Tech Artist',
    '4+ Years Experience',
    'Meta Quest & VR Optimization',
    'UFPR Graphic Expression',
    'Curitiba (Open to Remote)',
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-10 py-16 sm:py-20 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* Corner Decorative 3D Images (Scaled and hidden on narrow screens to prevent text overlap) */}

      {/* Top-left: Moon icon */}
      <div className="absolute top-[3%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10 hidden sm:block opacity-40 md:opacity-100">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative 3D Moon"
            className="w-[90px] sm:w-[140px] md:w-[190px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(11,25,44,0.35)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[6%] left-[2%] sm:left-[5%] md:left-[8%] pointer-events-none z-10 hidden sm:block opacity-40 md:opacity-100">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D Shape"
            className="w-[80px] sm:w-[120px] md:w-[160px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(11,25,44,0.35)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[3%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10 hidden sm:block opacity-40 md:opacity-100">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative 3D Lego"
            className="w-[90px] sm:w-[140px] md:w-[190px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(11,25,44,0.35)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[6%] right-[2%] sm:right-[5%] md:right-[8%] pointer-events-none z-10 hidden sm:block opacity-40 md:opacity-100">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D Group"
            className="w-[100px] sm:w-[150px] md:w-[200px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(11,25,44,0.35)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Central Content */}
      <div className="relative z-20 flex flex-col items-center max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="text-center">
          <h2
            style={{ fontSize: 'clamp(2.5rem, 11vw, 150px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing between Heading and Content */}
        <div className="h-6 sm:h-10 md:h-12" />

        {/* Responsive 2-Column Showcase: Framed Photo + Technical Bio */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full px-2 sm:px-4">
          {/* Framed Portrait */}
          <FadeIn delay={0.15} y={30} duration={0.8} className="flex-shrink-0">
            <div className="relative group w-[220px] xs:w-[250px] sm:w-[280px] md:w-[300px] aspect-[3/4] rounded-[24px] sm:rounded-[30px] p-2 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
              {/* Top Specular Edge Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none" />

              <div className="relative w-full h-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#161616]">
                <img
                  src="./lucas_profile.jpg"
                  alt="Lucas de Oliveira Martins"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center gap-2 text-[10px] sm:text-xs text-[#D7E2EA] font-medium uppercase tracking-wider select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Lucas O. Martins</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Text Column: Badges + Animated Text + Button */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 max-w-xl">
            {/* Badges / Highlights */}
            <FadeIn delay={0.2} y={20} duration={0.8} className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-2.5 mb-5 sm:mb-6">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-[11px] xs:text-xs sm:text-sm font-medium uppercase tracking-wider bg-[#151515] border border-[#D7E2EA]/20 text-[#D7E2EA]"
                >
                  {badge}
                </span>
              ))}
            </FadeIn>

            {/* Animated Paragraph */}
            <AnimatedText
              text={bioText}
              className="text-[#D7E2EA] font-medium leading-relaxed"
              style={{ fontSize: 'clamp(0.92rem, 1.4vw, 1.18rem)' } as React.CSSProperties}
            />

            {/* Spacing & Contact Button */}
            <FadeIn delay={0.3} y={20} duration={0.8} className="mt-6 sm:mt-8">
              <ContactButton href="#contact" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
