'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  background?: 'white' | 'gray' | 'blue' | 'gradient';
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  title,
  subtitle,
  background = 'white',
  children,
  className = '',
  id,
}: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-primary-blue text-white',
    gradient: 'bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white',
  };

  return (
    <section id={id} className={`py-20 px-4 md:px-8 lg:px-16 ${bgStyles[background]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-lg opacity-90">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
