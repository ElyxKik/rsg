'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  children,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-primary-blue text-white hover:bg-primary-blue/90 focus:ring-primary-blue disabled:bg-primary-blue/50',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-300 disabled:bg-gray-200/50',
    tertiary: 'bg-transparent text-primary-blue border-2 border-primary-blue hover:bg-primary-blue/10 focus:ring-primary-blue disabled:text-primary-blue/50 disabled:border-primary-blue/50',
    danger: 'bg-error text-white hover:bg-error/90 focus:ring-error disabled:bg-error/50',
  };

  const sizeStyles = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-6 text-base',
    lg: 'h-12 px-8 text-lg',
  };

  return (
    <motion.button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
    >
      {loading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon
      )}
      {children}
    </motion.button>
  );
}
