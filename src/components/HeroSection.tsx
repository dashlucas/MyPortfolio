import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';

const EASE = [0.25, 0.1, 0.25, 1];

export const HeroSection: React.FC = () => {
  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: '3D Art', href: '#artstation' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <section className="relative min-h-screen min-h-[100dvh] flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: EASE }}
        className="w-full px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8 z-30"
      >
        <nav className="flex items-center justify-between w-full max-w-[1920px] mx-auto gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs xs:text-sm md:text-lg lg:text-[1.35rem] transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </motion.header>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden z-0 px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="text-center w-full"
        >
          <h1
            style={{ fontSize: 'clamp(2rem, 11.5vw, 17.5vw)' }}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full mt-3 xs:mt-4 sm:mt-2 md:-mt-5"
          >
            Hello, i&apos;m Lucas
          </h1>
        </motion.div>
      </div>

      {/* 3. Hero Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[200px] xs:w-[240px] sm:w-[280px] md:w-[320px] lg:w-[350px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-4 pointer-events-auto flex items-end justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          className="w-full flex justify-center"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            {/* Framed Hero Portrait Card */}
            <div className="relative group w-full aspect-[3/4] max-h-[46vh] sm:max-h-[54vh] rounded-[24px] sm:rounded-[32px] p-2 sm:p-2.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(255,255,255,0.05)] overflow-hidden">
              {/* Specular Top Edge Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none" />

              <div className="relative w-full h-full rounded-[18px] sm:rounded-[26px] overflow-hidden bg-[#161616]">
                <img
                  src="./lucas_profile.jpg"
                  alt="Lucas de Oliveira Martins - Technical Artist"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                  loading="eager"
                />

                {/* Subtle lighting vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10 pointer-events-none" />

                {/* Status Badge */}
                <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 py-1.5 px-3 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center gap-2 text-[10px] sm:text-xs text-[#D7E2EA] font-medium uppercase tracking-wider select-none">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  <span>Available for Work</span>
                </div>
              </div>
            </div>
          </Magnet>
        </motion.div>
      </div>

      {/* 4. Bottom Bar */}
      <footer className="w-full px-4 sm:px-6 md:px-10 pb-5 xs:pb-6 sm:pb-8 md:pb-10 z-20">
        <div className="flex justify-between items-end w-full max-w-[1920px] mx-auto gap-3 sm:gap-6">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            className="max-w-[170px] xs:max-w-[220px] sm:max-w-[280px] md:max-w-[340px]"
          >
            <p
              style={{ fontSize: 'clamp(0.68rem, 1.15vw, 1.15rem)' }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wide leading-snug"
            >
              technical artist & ue engineer bridging art pipelines and engine performance
            </p>
          </motion.div>

          {/* Right Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            className="flex-shrink-0"
          >
            <ContactButton href="#contact" />
          </motion.div>
        </div>
      </footer>
    </section>
  );
};

export default HeroSection;
