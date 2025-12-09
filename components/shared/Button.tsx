'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'expr';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg smooth-transition inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-clay-600 text-white hover:bg-clay-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-leaf-600 text-white hover:bg-leaf-700 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-clay-600 text-white hover:bg-clay-600 hover:text-white',
    expr: 'border-2 border-clay-600 text-clay-600 hover:bg-clay-600 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </Component>
  );
}