import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: '3D Art', href: '#artstation' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0C0C0C]/80 backdrop-blur-md border-b border-white/10 select-none">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand / Name + Status */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <a
            href="#about"
            className="flex items-center gap-2.5 text-white group"
          >
            <span className="font-black text-sm xs:text-base sm:text-lg tracking-wider uppercase group-hover:text-white transition-colors">
              Lucas Martins
            </span>
            <span className="hidden md:inline-block text-xs font-light text-[#D7E2EA]/50 uppercase tracking-widest pl-2 border-l border-white/15">
              Technical Artist & UE Engineer
            </span>
          </a>

          {/* Available for Work Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] text-emerald-300 font-medium uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>Available</span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#D7E2EA]/75 hover:text-white font-medium uppercase tracking-wider text-xs xl:text-sm transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#D7E2EA] transition-all active:scale-95 shadow-md"
          >
            Get In Touch
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#D7E2EA] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#121212]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 flex flex-col gap-4 overflow-hidden"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                Available for New Projects
              </span>
            </div>

            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-base text-[#D7E2EA] font-medium uppercase tracking-wide hover:text-white py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-2 text-center py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider"
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
