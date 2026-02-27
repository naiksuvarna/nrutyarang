'use client';

import { motion } from 'motion/react';
import { Music, Sparkles, Star, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: "Cultural Vibe",
      desc: "Experience the rich heritage of Marathi dance forms."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
      title: "Premium Stage",
      desc: "A grand visual spectacle with state-of-the-art lighting."
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      title: "Audience Participation",
      desc: "Engage in interactive segments and celebrate together."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0f0518]">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-900/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Music className="w-5 h-5 text-yellow-500" />
            <h2 className="text-yellow-500 font-medium tracking-widest uppercase text-sm">About The Event</h2>
            <Music className="w-5 h-5 text-yellow-500" />
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8"
          >
            A Grand Celebration of <span className="text-gradient-gold italic">Marathi Culture</span>
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            <strong className="text-white">Nrutyarang</strong> is a grand Marathi cultural dance event celebrating traditional and modern dance forms. Organized by <span className="text-yellow-400">Gagan Bharari Group</span> & <span className="text-yellow-400">A-Cube Holidays and Events</span>, it promises an unforgettable evening of rhythm, grace, and energy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
