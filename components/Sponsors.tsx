'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

// Card component with built-in loading skeleton and larger dimensions
const SponsorCard = ({ logo, name }: { logo: string; name: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-64 h-36 flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:z-10 cursor-pointer bg-white/5 rounded-2xl border border-white/10 shadow-lg flex items-center justify-center">
      {/* Pulsing Skeleton Loader - Shows while the image is fetching */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/5 animate-pulse rounded-2xl" />
      )}
      
      <Image
        src={logo}
        alt={name}
        fill
        sizes="256px"
        // Fades in smoothly once loaded
        className={`object-contain p-6 transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default function Sponsors() {
  // Your exact file names from the public folder
  const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: '/sponsor-1.png' },
    { id: 2, name: 'Sponsor 2', logo: '/sponsor-2.png' },
    { id: 3, name: 'Sponsor 3', logo: '/sponsor-3.png' },
    { id: 4, name: 'Sponsor 4', logo: '/sponsor-4.jpeg' },
    { id: 5, name: 'Sponsor 5', logo: '/sponsor-5.jpeg' },
    { id: 6, name: 'Sponsor 6', logo: '/sponsor-6.png' },
    { id: 7, name: 'Sponsor 7', logo: '/sponsor-7.png' },
  ];

  return (
    <section className="py-20 bg-[#0f0518] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif text-white mb-4"
        >
          Our Proud <span className="text-gradient-gold italic">Sponsors</span>
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
      </div>

      {/* Infinite Marquee Slider Container */}
      {/* The 'group' class here controls the pause functionality for the whole line */}
      <div className="flex overflow-hidden group">
        
        {/* Track 1 - Forced animation speed using style tag */}
        <div 
          className="flex flex-shrink-0 animate-marquee whitespace-nowrap items-center gap-12 py-10 pr-12 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: '100s' }}
        >
          {[...sponsors, ...sponsors].map((sponsor, idx) => (
            <SponsorCard 
              key={`${sponsor.id}-${idx}`} 
              logo={sponsor.logo} 
              name={sponsor.name} 
            />
          ))}
        </div>
        
        {/* Track 2 (Duplicate for seamless loop) - MUST MATCH DURATION EXACTLY */}
        <div 
          className="flex flex-shrink-0 animate-marquee whitespace-nowrap items-center gap-12 py-10 pr-12 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: '100s' }}
        >
          {[...sponsors, ...sponsors].map((sponsor, idx) => (
            <SponsorCard 
              key={`dup-${sponsor.id}-${idx}`} 
              logo={sponsor.logo} 
              name={sponsor.name} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}