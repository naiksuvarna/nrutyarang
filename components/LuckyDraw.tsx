'use client';

import { motion } from 'motion/react';
import { Gift, Trophy } from 'lucide-react';

export default function LuckyDraw() {
  const prizes = [
    {
      amount: "₹11,000",
      title: "1st Prize",
      delay: 0.1,
      color: "from-yellow-400 to-yellow-600",
      glow: "rgba(250, 204, 21, 0.4)",
      scale: 1.05
    },
    {
      amount: "₹7,000",
      title: "2nd Prize",
      delay: 0.2,
      color: "from-gray-300 to-gray-500",
      glow: "rgba(209, 213, 219, 0.4)",
      scale: 1
    },
    {
      amount: "₹5,000",
      title: "3rd Prize",
      delay: 0.3,
      color: "from-orange-400 to-orange-600",
      glow: "rgba(249, 115, 22, 0.4)",
      scale: 1
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#1a0b2e]">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?blur=10')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-3 mb-4 px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20"
          >
            <Gift className="w-5 h-5 text-yellow-400" />
            <h2 className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Prize Distribution</h2>
            <Gift className="w-5 h-5 text-yellow-400" />
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white mb-6"
          >
            Exciting <span className="text-gradient-gold italic">Cash Prizes</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Every group stands a chance to win big in our dance competition.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {/* Reorder for visual hierarchy: 2nd, 1st, 3rd on desktop */}
          <div className="order-2 md:order-1 w-full md:w-1/3">
            <PrizeCard {...prizes[1]} />
          </div>
          <div className="order-1 md:order-2 w-full md:w-1/3 z-10">
            <PrizeCard {...prizes[0]} />
          </div>
          <div className="order-3 md:order-3 w-full md:w-1/3">
            <PrizeCard {...prizes[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PrizeCard({ amount, title, delay, color, glow, scale }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: scale }}
      className={`relative bg-[#2a1148] border border-white/10 rounded-3xl p-8 text-center group cursor-pointer`}
      style={{
        boxShadow: `0 10px 30px -10px ${glow}`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}>
        <Trophy className="w-10 h-10 text-white" />
      </div>
      
      <h4 className="text-gray-300 font-medium uppercase tracking-wider text-sm mb-2">{title}</h4>
      <div className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${color} drop-shadow-md`}>
        {amount}
      </div>
    </motion.div>
  );
}
