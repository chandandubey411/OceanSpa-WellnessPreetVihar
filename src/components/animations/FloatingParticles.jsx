import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { generateParticles } from '../../utils/helpers';

export default function FloatingParticles({ count = 18, color = 'gold' }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(generateParticles(count));
  }, [count]);

  const colorMap = {
    gold: 'rgba(201, 162, 39',
    white: 'rgba(245, 240, 232',
    navy: 'rgba(30, 77, 128',
  };

  const baseColor = colorMap[color] || colorMap.gold;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `${baseColor}, ${p.opacity})`,
            boxShadow: `0 0 ${p.size * 3}px ${baseColor}, ${p.opacity * 1.5})`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
