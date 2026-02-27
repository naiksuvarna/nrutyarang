'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Sponsors() {
  // Replace these names with the exact file names you saved in your public folder
  const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: '/sponsor-1.png' },
    { id: 2, name: 'Sponsor 2', logo: '/sponsor-2.png' },
    { id: 3, name: 'Sponsor 3', logo: '/sponsor-3.png' },
    { id: 4, name: 'Sponsor 4', logo: '/sponsor-4.png' },
    { id: 5, name: 'Sponsor 5', logo: '/sponsor-5.png' },
    { id: 6, name: 'Sponsor 6', logo: '/sponsor-6.png' },
    { id: 7, name: 'Sponsor 7', logo: '/sponsor-7.png' },
    { id: 8, name: 'Sponsor 8', logo: '/sponsor-8.png' },
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

      {/* Infinite Marquee Slider */}
      <div className="flex overflow-hidden group">
        {/* Increased duration to 100s for a very smooth, slow crawl */}
        <div className="flex flex-shrink-0 animate-marquee whitespace-nowrap items-center gap-12 py-4 pr-12 group-hover:[animation-play-state:paused] [animation-duration:150s]">
          {[...sponsors, ...sponsors].map((sponsor, idx) => (
            <div
              key={`${sponsor.id}-${idx}`}
              className="relative w-48 h-24 flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless loop (Duration MUST match the first div) */}
        <div className="flex flex-shrink-0 animate-marquee whitespace-nowrap items-center gap-12 py-4 pr-12 group-hover:[animation-play-state:paused] [animation-duration:150s]">
          {[...sponsors, ...sponsors].map((sponsor, idx) => (
            <div
              key={`dup-${sponsor.id}-${idx}`}
              className="relative w-48 h-24 flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}