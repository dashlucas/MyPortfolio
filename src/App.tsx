import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactButton } from './components/ContactButton';
import { FadeIn } from './components/FadeIn';

export const App: React.FC = () => {
  // Initialize Lenis Smooth Scroll and synchronize with gsap.ticker
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.08, // Fluid lerp for butter-smooth momentum
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    (window as any).lenis = lenis;

    // Sincronize Lenis scroll events directly with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Sincronize Lenis animation cycle with gsap.ticker to eliminate jitter/tearing
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Smooth navigation for in-page anchor links (#about, #services, #projects, #contact)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          lenis.scrollTo(el as HTMLElement, { offset: -20 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <main
      className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit selection:bg-white selection:text-black"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* Contact & Footer Section */}
      <footer id="contact" className="relative bg-[#0C0C0C] text-[#D7E2EA] px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 border-t border-white/10 select-none">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
          <FadeIn delay={0} y={30}>
            <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-semibold">
              Have an ambitious vision or project?
            </span>
          </FadeIn>

          <FadeIn delay={0.1} y={30}>
            <h2
              style={{ fontSize: 'clamp(2.2rem, 7.5vw, 5.5rem)' }}
              className="hero-heading font-black uppercase tracking-tight leading-none text-center"
            >
              Let&apos;s Work Together
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} y={20}>
            <p className="text-[#D7E2EA]/80 font-light max-w-xl leading-relaxed text-xs sm:text-base md:text-lg px-2">
              Specialist in Unreal Engine pipelines, technical art, shader authoring, GPU profiling, and real-time spatial experiences.
            </p>
          </FadeIn>

          {/* Location Badge */}
          <FadeIn delay={0.2} y={20}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#151515] border border-white/15 text-[11px] xs:text-xs sm:text-sm text-[#D7E2EA]">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_white] flex-shrink-0" />
              <span>Curitiba, PR, Brazil • Open to Remote & Relocation</span>
            </div>
          </FadeIn>

          {/* Primary Action Buttons */}
          <FadeIn delay={0.25} y={20} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
            <ContactButton
              href="mailto:lucas_omartins@hotmail.com"
              label="Send Email"
              className="text-xs sm:text-base px-6 py-3 sm:px-10 sm:py-4"
            />
            <a
              href="https://wa.me/5541997150331"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 xs:px-7 xs:py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 rounded-full border border-[#D7E2EA] text-[#D7E2EA] bg-[#151515] font-semibold uppercase tracking-widest text-[11px] xs:text-xs sm:text-sm transition-all duration-300 hover:bg-white hover:text-black hover:border-white active:scale-95"
            >
              <span>WhatsApp</span>
            </a>
          </FadeIn>

          {/* Social Links Bar */}
          <FadeIn delay={0.3} y={20} className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
            <a
              href="https://www.linkedin.com/in/lucas-d-986b66b6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/15 bg-[#151515] text-[#D7E2EA] hover:text-white hover:border-white hover:bg-white/10 transition-all text-xs sm:text-sm font-medium uppercase tracking-wider flex items-center gap-2"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="https://lucasdeoliveiramartins.artstation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/15 bg-[#151515] text-[#D7E2EA] hover:text-white hover:border-white hover:bg-white/10 transition-all text-xs sm:text-sm font-medium uppercase tracking-wider flex items-center gap-2"
            >
              <span>ArtStation</span>
            </a>
            <a
              href="https://www.instagram.com/o_burnverso"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/15 bg-[#151515] text-[#D7E2EA] hover:text-white hover:border-white hover:bg-white/10 transition-all text-xs sm:text-sm font-medium uppercase tracking-wider flex items-center gap-2"
            >
              <span>Instagram (@o_burnverso)</span>
            </a>
            <a
              href="mailto:lucas_omartins@hotmail.com"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/15 bg-[#151515] text-[#D7E2EA] hover:text-white hover:border-white hover:bg-white/10 transition-all text-xs sm:text-sm font-medium uppercase tracking-wider flex items-center gap-2 break-all"
            >
              <span>lucas_omartins@hotmail.com</span>
            </a>
          </FadeIn>

          {/* Copyright Sub-footer */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between pt-10 sm:pt-16 mt-4 sm:mt-6 border-t border-white/10 text-xs sm:text-sm text-[#D7E2EA]/60 uppercase tracking-wider font-light gap-2 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Lucas de Oliveira Martins. All rights reserved.</p>
            <p className="text-[#D7E2EA]/80 font-medium">Technical Artist & Unreal Engine Engineer</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
