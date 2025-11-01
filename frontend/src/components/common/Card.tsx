'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'interactive';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  variant = 'default',
  children,
  className = '',
  onClick,
}: CardProps) {
  const variantStyles = {
    default: 'bg-white shadow-sm',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border border-gray-200',
    interactive: 'bg-white shadow-md hover:shadow-lg cursor-pointer',
  };

  return (
    <motion.div
      className={`rounded-2xl p-6 transition-all duration-300 ${variantStyles[variant]} ${className}`}
      whileHover={variant === 'interactive' ? { scale: 1.02 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
