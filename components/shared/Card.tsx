'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = '', hoverable = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-white rounded-2xl shadow-md overflow-hidden paper-overlay',
        className
      )}
      whileHover={hoverable ? { y: -8, shadow: '0 20px 40px rgba(0,0,0,0.1)' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}