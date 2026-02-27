'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Particles() {
  const [mounted, setMounted] = useState(false);
  const [particles] = useState(() => 
    Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 15 + 15,
      xOffset: (Math.random() - 0.5) * 20, // Random horizontal drift
    }))
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-yellow-300 opacity-30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: '0 0 10px 2px rgba(253, 224, 71, 0.5)',
          }}
          animate={{
            y: ['0%', '-100%'],
            x: ['0%', `${p.xOffset}vw`],
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
