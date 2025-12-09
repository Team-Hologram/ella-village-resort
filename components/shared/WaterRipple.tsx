'use client';

import { motion } from 'framer-motion';

export default function WaterRipple() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-water-300/30"
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{
            scale: 2.4,
            opacity: 0,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: 'easeOut',
          }}
          style={{
            width: '200px',
            height: '200px',
          }}
        />
      ))}
    </div>
  );
}