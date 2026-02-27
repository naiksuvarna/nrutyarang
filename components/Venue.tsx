'use client';

import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function Venue() {
  return (
    <section id="venue" className="py-24 bg-[#1a0b2e] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-3 mb-4 px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20"
          >
            <MapPin className="w-5 h-5 text-yellow-400" />
            <h2 className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Event Venue</h2>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white mb-6"
          >
            Mahakavi Kalidas <span className="text-gradient-gold italic">Kalamandir</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Located in the heart of Nashik city near Shalimar. A premium auditorium offering the perfect acoustic and visual experience for a grand cultural celebration.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-purple-900/40 to-black/40">
              <h4 className="text-2xl font-semibold text-white mb-4">How to reach?</h4>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Easily accessible from all parts of Nashik. Ample parking space available for attendees.
              </p>
              
              <a
                href="https://maps.google.com/?q=Mahakavi+Kalidas+Kalamandir+Nashik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-medium transition-colors w-fit"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
            
            <div className="md:col-span-2 h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.191560305822!2d73.78453481491564!3d20.00048868656463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdebba09d17d69b%3A0x8f3c713b1b6e4b9a!2sMahakavi%20Kalidas%20Kalamandir!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
