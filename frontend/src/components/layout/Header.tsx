'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Mail, Globe, Dot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'sw', label: 'Kiswahili', flag: '🇹🇿' },
  ];

  const mainNavItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Présentation', href: '/public/presentation' },
    { label: 'Gouvernance', href: '/public/gouvernance' },
    { label: 'Programmes', href: '/public/programmes' },
    { label: 'Actualités', href: '/public/actualites' },
  ];

  const secondaryNavItems = [
    { label: 'Zones de couverture', href: '/public/zones' },
    { label: 'Transparence', href: '/public/transparence' },
    { label: 'Partenaires', href: '/public/partenaires' },
    { label: 'Média', href: '/public/media' },
  ];

  const mobileNavItems = [...mainNavItems, ...secondaryNavItems];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top bar - Government branding */}
      <div className="bg-gradient-to-r from-primary-blue to-primary-blue/95 text-white py-2 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm">
          <span className="font-semibold">🇨🇩 République Démocratique du Congo</span>
          <Dot size={20} className="text-white" />
          <span>Cabinet du Chef de l'État</span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center py-2">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <img
                src="/logo-rsg.jpg"
                alt="RSG - Réserve Stratégique Générale"
                className="h-[80px] md:h-[132px] w-auto object-contain transition-all duration-200 group-hover:brightness-110"
                onError={(e) => {
                  // Fallback si l'image ne se charge pas
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback logo */}
              <div className="hidden h-[80px] w-[80px] md:h-[132px] md:w-[132px] bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-xl items-center justify-center shadow-md">
                <span className="text-white font-bold text-3xl">RSG</span>
              </div>
            </motion.div>
      
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-700 font-medium text-sm hover:text-primary-blue hover:bg-primary-blue/5 rounded-lg transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </Link>
            ))}

            {/* Secondary Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('secondary')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-gray-700 font-medium text-sm hover:text-primary-blue hover:bg-primary-blue/5 rounded-lg transition-all duration-200 flex items-center gap-1 group">
                Plus
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'secondary' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {secondaryNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-primary-blue/5 hover:text-primary-blue transition-colors text-sm font-medium border-b border-gray-100 last:border-b-0"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Section - Language, Admin & Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setActiveDropdown('language')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-primary-blue bg-gray-50 hover:bg-primary-blue/10 rounded-xl transition-all duration-200 group border border-gray-200 hover:border-primary-blue/30"
              >
                <Globe
                  size={18}
                  className="text-primary-blue group-hover:rotate-12 transition-transform duration-300"
                />
                <span className="text-sm font-semibold hidden sm:inline">
                  {languages.find((l) => l.code === currentLanguage)?.label}
                </span>
                <motion.div
                  animate={{ rotate: activeDropdown === 'language' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    size={16}
                    className="text-gray-600 group-hover:text-primary-blue transition-colors"
                  />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeDropdown === 'language' && (
                  <motion.div
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-sm"
                  >
                    <div className="p-2">
                      {languages.map((lang, idx) => (
                        <motion.button
                          key={lang.code}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          onClick={() => {
                            setCurrentLanguage(lang.code);
                            setActiveDropdown(null);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                            currentLanguage === lang.code
                              ? 'bg-gradient-to-r from-primary-blue/20 to-primary-blue/10 text-primary-blue font-semibold border border-primary-blue/30'
                              : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                          }`}
                        >
                          <span className="text-2xl">{lang.flag}</span>
                          <div className="flex-1 text-left">
                            <p className="font-semibold text-sm">{lang.label}</p>
                            <p className="text-xs text-gray-500">
                              {lang.code.toUpperCase()}
                            </p>
                          </div>
                          {currentLanguage === lang.code && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: 'spring', stiffness: 200 }}
                              className="w-5 h-5 bg-gradient-to-r from-primary-blue to-primary-blue/80 rounded-full flex items-center justify-center"
                            >
                              <span className="text-white text-xs font-bold">✓</span>
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/public/contact"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-200"
              >
                <Mail size={16} />
                <span>Contact</span>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className="text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} className="text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-1">
                {mobileNavItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block w-full px-4 py-3 text-gray-700 hover:bg-primary-blue/5 hover:text-primary-blue rounded-lg transition-colors font-medium text-sm border-l-2 border-transparent hover:border-primary-blue"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Language Selector */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: mobileNavItems.length * 0.05 }}
                  className="pt-3 border-t border-gray-100"
                >
                  <div className="flex items-center gap-2 px-4 py-2 mb-2">
                    <Globe size={16} className="text-primary-blue" />
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Langue
                    </p>
                  </div>
                  <div className="space-y-2 px-2">
                    {languages.map((lang, idx) => (
                      <motion.button
                        key={lang.code}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (mobileNavItems.length + idx) * 0.05 }}
                        onClick={() => {
                          setCurrentLanguage(lang.code);
                          setIsOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium border ${
                          currentLanguage === lang.code
                            ? 'bg-gradient-to-r from-primary-blue/20 to-primary-blue/10 text-primary-blue border-primary-blue/30'
                            : 'text-gray-700 hover:bg-gray-50 border-transparent'
                        }`}
                      >
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="flex-1 text-left">{lang.label}</span>
                        {currentLanguage === lang.code && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="w-5 h-5 bg-gradient-to-r from-primary-blue to-primary-blue/80 rounded-full flex items-center justify-center"
                          >
                            <span className="text-white text-xs font-bold">✓</span>
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Mobile Contact Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (mobileNavItems.length + languages.length) * 0.05 }}
                  className="pt-2 border-t border-gray-100"
                >
                  <Link
                    href="/public/contact"
                    className="flex w-full items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-200 mt-2"
                  >
                    <Mail size={16} />
                    <span>Contact</span>
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
