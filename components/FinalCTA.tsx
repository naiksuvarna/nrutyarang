'use client';

import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin } from 'lucide-react'; // Added MapPin

export default function FinalCTA() {
  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0f0518] to-purple-950">
      {/* Golden Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-900/40 to-purple-900/40 border border-yellow-500/30 rounded-[2.5rem] p-8 md:p-16 shadow-[0_0_50px_rgba(250,204,21,0.15)] backdrop-blur-xl">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-gold drop-shadow-md mb-6 pb-2" /* Increased margin below heading */
            >
              Seats Are Filling Fast
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Don&apos;t miss out on Nashik&apos;s grandest cultural dance event. Book your tickets today!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <a
                href="https://wa.me/918308102334?text=Hi,%20I%20want%20to%20book%20tickets%20for%20Nrutyarang%202026"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">WhatsApp</h4>
                  <p className="text-gray-400 text-sm">Click to book tickets instantly</p>
                </div>
              </a>

              <a
                href="tel:+918605834438"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Call Us</h4>
              
                </div>
              </a>

              {/* Added Location Button */}
              <button
                onClick={() => document.getElementById('venue')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 cursor-pointer transition-all duration-300 text-left"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">View Location</h4>
                  <p className="text-gray-400 text-sm">Kalidas Kalamandir, Nashik</p>
                </div>
              </button>
            </motion.div>

            {/* Ticket Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-black/40 p-10 rounded-3xl border border-yellow-500/20 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(250,204,21,0.1)] h-full"
            >
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">Entry Fee</h3>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 mb-6 py-2">
                50/- Ticket
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Experience the magic of traditional Marathi culture. Secure your passes through our contact channels before they sell out.
              </p>
              <div className="w-full py-4 bg-gradient-to-r from-yellow-500/20 via-yellow-400/20 to-yellow-600/20 border border-yellow-500/30 rounded-xl text-yellow-400 font-semibold tracking-wide backdrop-blur-sm mt-auto">
                Available Now
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}