import React from 'react';

interface ArtArtwork {
  title: string;
  category: string;
  src: string;
}

const ARTWORKS_ROW_1: ArtArtwork[] = [
  {
    title: 'Mario SNES Cartridge',
    category: 'Hard Surface & Edge Flow',
    src: './artstation/art_01.jpg',
  },
  {
    title: "Athene's Unholy Grail",
    category: 'Stylized 3D Fanart',
    src: './artstation/art_12.jpg',
  },
  {
    title: 'Stopwatch (LoL)',
    category: 'Hard Surface Modeling',
    src: './artstation/art_15.jpg',
  },
  {
    title: "Jinx's Zap (LoL)",
    category: 'Weapon & Prop Design',
    src: './artstation/art_21.jpg',
  },
  {
    title: 'The Goddess Crest',
    category: 'Zelda SNES Hard Surface',
    src: './artstation/art_26.jpg',
  },
  {
    title: 'Mario SNES Cartridge',
    category: 'PBR Shading & Lighting',
    src: './artstation/art_03.jpg',
  },
  {
    title: "Athene's Unholy Grail",
    category: 'Fantasy Prop & Gems',
    src: './artstation/art_13.jpg',
  },
  {
    title: 'Stopwatch (LoL)',
    category: 'Gears & Mechanical Polish',
    src: './artstation/art_16.jpg',
  },
  {
    title: "Jinx's Zap (LoL)",
    category: 'Sci-Fi Hard Surface',
    src: './artstation/art_22.jpg',
  },
  {
    title: 'Mario SNES Cartridge',
    category: 'Close-up Detail',
    src: './artstation/art_05.jpg',
  },
  {
    title: 'Stopwatch (LoL)',
    category: 'Render & Material Study',
    src: './artstation/art_18.jpg',
  },
  {
    title: 'The Goddess Crest',
    category: 'Gold Texturing & PBR',
    src: './artstation/art_27.jpg',
  },
];

const ARTWORKS_ROW_2: ArtArtwork[] = [
  {
    title: "Athene's Unholy Grail",
    category: 'Chalice & Emissive Shaders',
    src: './artstation/art_14.jpg',
  },
  {
    title: 'Mario SNES Cartridge',
    category: 'Perspective View',
    src: './artstation/art_02.jpg',
  },
  {
    title: 'Stopwatch (LoL)',
    category: 'Mechanical Details',
    src: './artstation/art_17.jpg',
  },
  {
    title: "Jinx's Zap (LoL)",
    category: 'Assembly & Barrel',
    src: './artstation/art_23.jpg',
  },
  {
    title: 'Mario SNES Cartridge',
    category: 'Rear Housing & Screws',
    src: './artstation/art_06.jpg',
  },
  {
    title: 'Stopwatch (LoL)',
    category: 'Material Polish & Glass',
    src: './artstation/art_19.jpg',
  },
  {
    title: "Jinx's Zap (LoL)",
    category: 'Grip & Trigger Mechanism',
    src: './artstation/art_24.jpg',
  },
  {
    title: 'Mario SNES Cartridge',
    category: 'Top Profile & Bevels',
    src: './artstation/art_04.jpg',
  },
  {
    title: 'Stopwatch (LoL)',
    category: 'Macro Shot & Topology',
    src: './artstation/art_20.jpg',
  },
  {
    title: "Jinx's Zap (LoL)",
    category: 'Weathering & Surface Detail',
    src: './artstation/art_25.jpg',
  },
  {
    title: 'Mario SNES Cartridge',
    category: 'Plastic Texture & Roughness',
    src: './artstation/art_07.jpg',
  },
  {
    title: 'Mario SNES Cartridge',
    category: 'Wireframe & Topology',
    src: './artstation/art_08.jpg',
  },
];

const ROW_1 = [...ARTWORKS_ROW_1, ...ARTWORKS_ROW_1];
const ROW_2 = [...ARTWORKS_ROW_2, ...ARTWORKS_ROW_2];

export const MarqueeSection: React.FC = () => {
  return (
    <section
      className="relative bg-[#0C0C0C] pt-16 sm:pt-24 md:pt-36 pb-10 sm:pb-14 overflow-hidden select-none"
    >
      {/* Top Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-6 sm:mb-8 md:mb-10 flex items-center justify-between gap-3">
        <span className="text-[#D7E2EA] uppercase text-[11px] xs:text-xs sm:text-sm tracking-widest font-semibold truncate">
          3D Modeling & Hard Surface Studies
        </span>
        <a
          href="https://lucasdeoliveiramartins.artstation.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/70 hover:text-white font-medium transition-colors flex items-center gap-1.5 flex-shrink-0"
        >
          <span>ArtStation</span>
          <span>→</span>
        </a>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 overflow-hidden">
        {/* Row 1: Continuously rotates LEFT */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-left flex gap-3 sm:gap-4 md:gap-5">
            {ROW_1.map((art, index) => (
              <div
                key={`row1-${index}`}
                className="group relative w-[240px] xs:w-[280px] sm:w-[350px] md:w-[420px] min-w-[240px] xs:min-w-[280px] sm:min-w-[350px] md:min-w-[420px] h-[160px] xs:h-[185px] sm:h-[230px] md:h-[270px] flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-[#151515] border border-white/10"
              >
                <img
                  src={art.src}
                  alt={art.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl pointer-events-none group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 sm:p-5 pointer-events-none">
                  <span className="text-[#D7E2EA]/80 uppercase text-[9px] sm:text-xs tracking-widest font-semibold">
                    {art.category}
                  </span>
                  <p className="text-white text-xs sm:text-base font-semibold uppercase tracking-wide leading-tight">
                    {art.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Continuously rotates RIGHT */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-right flex gap-3 sm:gap-4 md:gap-5">
            {ROW_2.map((art, index) => (
              <div
                key={`row2-${index}`}
                className="group relative w-[240px] xs:w-[280px] sm:w-[350px] md:w-[420px] min-w-[240px] xs:min-w-[280px] sm:min-w-[350px] md:min-w-[420px] h-[160px] xs:h-[185px] sm:h-[230px] md:h-[270px] flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-[#151515] border border-white/10"
              >
                <img
                  src={art.src}
                  alt={art.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl pointer-events-none group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 sm:p-5 pointer-events-none">
                  <span className="text-[#D7E2EA]/80 uppercase text-[9px] sm:text-xs tracking-widest font-semibold">
                    {art.category}
                  </span>
                  <p className="text-white text-xs sm:text-base font-semibold uppercase tracking-wide leading-tight">
                    {art.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
