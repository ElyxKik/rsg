'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Shield, Leaf, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/1..png', '/2.png', '/3.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-auto overflow-hidden py-[10px]">
      {/* Background Images with Blue Filter */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImageIndex === idx ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Blue Filter Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/85 via-primary-blue/80 to-primary-blue/85 mix-blend-multiply" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-primary-yellow rounded-full blur-3xl opacity-15"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary-red rounded-full blur-3xl opacity-15"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-blue rounded-full blur-3xl opacity-10"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        <motion.div
          className="max-w-5xl mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium">
              <Shield size={16} />
              <span>Souveraineté Alimentaire Nationale</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
              <span className="bg-gradient-to-r from-white via-primary-yellow to-white bg-clip-text text-transparent">
                Réserve Stratégique
              </span>
              <br />
              <span className="text-white">Générale</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-center text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Service Spécialisé de la Présidence de la République
          </motion.p>

          {/* Key Points */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: Shield, label: 'Sécurité', value: '100K+ tonnes' },
              { icon: Leaf, label: 'Durabilité', value: '10+ régions' },
              { icon: Zap, label: 'Efficacité', value: '24/7 disponible' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <item.icon className="text-primary-yellow mb-3" size={32} />
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <p className="text-gray-200 text-xs mt-1">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row gap-2 md:gap-4 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/public/presentation"
                className="px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-primary-yellow to-primary-yellow/90 text-primary-blue font-bold rounded-lg md:rounded-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-1 md:gap-2 group text-sm md:text-base"
              >
                En savoir plus
                <ChevronDown size={16} className="md:size-5 group-hover:translate-y-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/public/contact"
                className="px-4 py-2 md:px-8 md:py-4 border-2 border-white text-white font-bold rounded-lg md:rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-1 md:gap-2 text-sm md:text-base"
              >
                Nous contacter
                <ChevronDown size={16} className="md:size-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
