'use client';

import { motion } from 'motion/react';
import Particles from './Particles';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[580px] w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image - Added Cinematic Fade & Slow Zoom */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg.png" 
          alt="Classical Dancer Silhouette"
          fill
          className="object-cover opacity-10 mix-blend-screen"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0518]/80 via-[#3B0764]/40 to-[#0f0518] mix-blend-multiply" />
      </motion.div>

      <Particles />
      
      {/* Spotlight Glow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-purple-900/40 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0" 
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center justify-center w-full h-full max-h-full py-4">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mb-4 md:mb-6 shrink-0 mt-8 md:mt-0"
        >
          <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 text-[10px] sm:text-xs md:text-sm font-medium tracking-wider uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(250,204,21,0.2)]">
          मराठी बाणा | A Grand Cultural Dance Celebration
          </span>
        </motion.div>

        {/* Title Image - Enhanced with Upward Glide and Smooth Spring Easing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center w-full max-w-[1100px] h-[22vh] sm:h-[30vh] md:h-[40vh] lg:h-[45vh] mb-5 md:mb-8 shrink-0 mx-auto"
        >
          <Image 
            src="/nrutya.png" 
            alt="नृत्यरंग"
            fill
            className="object-contain drop-shadow-[0_0_40px_rgba(250,204,21,0.5)]"
            priority
          />
        </motion.div>

        {/* Info Section (Date, Time, Venue) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-8 md:mb-10 text-gray-200 w-full max-w-4xl shrink-0 mx-auto"
        >
          {/* Mobile: Date & Time share a row */}
          <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full md:w-auto">
            
            {/* Date */}
            <div className="flex items-center gap-2 md:gap-4 justify-center md:justify-start transition-colors hover:text-white">
              <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-xs sm:text-sm md:text-lg leading-tight">5 March 2026</p>
                <p className="text-[10px] md:text-xs text-gray-400">Thursday</p>
              </div>
            </div>
            
            {/* Divider between Date & Time */}
            <div className="w-px h-8 md:h-10 bg-white/10" /> 
            
            {/* Time */}
            <div className="flex items-center gap-2 md:gap-4 justify-center md:justify-start transition-colors hover:text-white">
              <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-xs sm:text-sm md:text-lg leading-tight">4 PM - 7 PM</p>
                <p className="text-[10px] md:text-xs text-gray-400">Evening Show</p>
              </div>
            </div>

          </div>

          {/* Desktop Divider between Time & Venue */}
          <div className="hidden md:block w-px h-10 bg-white/10" />

          {/* Venue (Drops to second row on mobile) */}
          <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-start transition-colors hover:text-white">
            <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-xs sm:text-sm md:text-lg leading-tight">Kalidas Kalamandir</p>
              <p className="text-[10px] md:text-xs text-gray-400">Shalimar, Nashik</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center shrink-0 w-full px-4 pt-2"
        >
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative w-full sm:w-auto px-6 sm:px-10 py-2 md:py-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 rounded-2xl cursor-pointer text-black font-bold text-sm sm:text-lg overflow-hidden transition-all  active:scale-95 shadow-[0_0_30px_rgba(250,204,21,0.2)] md:shadow-[0_0_40px_rgba(250,204,21,0.3)] hover:shadow-[0_0_60px_rgba(250,204,21,0.5)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center justify-center gap-2">
              Book Your Seat Now
              <svg className="w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-[#0f0518] to-transparent pointer-events-none" />
    </section>
  );
}