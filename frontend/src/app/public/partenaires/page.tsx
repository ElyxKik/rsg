'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Globe, Users, Award, ArrowRight, Search } from 'lucide-react';

export default function PartenairesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'Tous les partenaires', icon: Building2 },
    { id: 'gouvernement', label: 'Gouvernement', icon: Award },
    { id: 'international', label: 'International', icon: Globe },
    { id: 'prive', label: 'Secteur privé', icon: Users },
  ];

  const partners = [
    {
      id: 1,
      name: 'Ministère de la Santé',
      category: 'gouvernement',
      description: 'Partenariat stratégique pour la distribution de fournitures médicales',
      logo: '🏥',
      type: 'Gouvernemental',
      since: '2020',
      focus: ['Santé', 'Logistique', 'Distribution'],
    },
    {
      id: 2,
      name: 'Banque Mondiale',
      category: 'international',
      description: 'Soutien financier et technique pour les projets de développement',
      logo: '🌍',
      type: 'Organisation Internationale',
      since: '2018',
      focus: ['Financement', 'Développement', 'Infrastructure'],
    },
    {
      id: 3,
      name: 'Programme Alimentaire Mondial',
      category: 'international',
      description: 'Collaboration pour la sécurité alimentaire et la nutrition',
      logo: '🍎',
      type: 'Organisation Humanitaire',
      since: '2019',
      focus: ['Alimentation', 'Nutrition', 'Aide humanitaire'],
    },
    {
      id: 4,
      name: 'Société Générale Congo',
      category: 'prive',
      description: 'Services financiers et solutions bancaires',
      logo: '🏦',
      type: 'Secteur Privé',
      since: '2021',
      focus: ['Finance', 'Banque', 'Services'],
    },
    {
      id: 5,
      name: 'Union Africaine',
      category: 'international',
      description: 'Coopération régionale et harmonisation des politiques',
      logo: '🌐',
      type: 'Organisation Régionale',
      since: '2017',
      focus: ['Coopération', 'Politique', 'Régional'],
    },
    {
      id: 6,
      name: 'Ministère des Finances',
      category: 'gouvernement',
      description: 'Coordination budgétaire et planification financière',
      logo: '💰',
      type: 'Gouvernemental',
      since: '2019',
      focus: ['Finance', 'Budget', 'Planification'],
    },
    {
      id: 7,
      name: 'Transports Logistiques Congo',
      category: 'prive',
      description: 'Services de transport et logistique',
      logo: '🚚',
      type: 'Secteur Privé',
      since: '2020',
      focus: ['Transport', 'Logistique', 'Distribution'],
    },
    {
      id: 8,
      name: 'Croix-Rouge Internationale',
      category: 'international',
      description: 'Actions humanitaires et aide d\'urgence',
      logo: '🔴',
      type: 'Organisation Humanitaire',
      since: '2018',
      focus: ['Humanitaire', 'Urgence', 'Santé'],
    },
    {
      id: 9,
      name: 'Tech Solutions RDC',
      category: 'prive',
      description: 'Solutions technologiques et digitalisation',
      logo: '💻',
      type: 'Secteur Privé',
      since: '2022',
      focus: ['Technologie', 'Digital', 'Innovation'],
    },
    {
      id: 10,
      name: 'PNUD',
      category: 'international',
      description: 'Programme de développement des Nations Unies',
      logo: '🇺🇳',
      type: 'Organisation Internationale',
      since: '2016',
      focus: ['Développement', 'ODD', 'Capacités'],
    },
    {
      id: 11,
      name: 'Ministère de l\'Éducation',
      category: 'gouvernement',
      description: 'Partenariat pour la formation et le renforcement des capacités',
      logo: '📚',
      type: 'Gouvernemental',
      since: '2021',
      focus: ['Éducation', 'Formation', 'Capacités'],
    },
    {
      id: 12,
      name: 'Agence Française de Développement',
      category: 'international',
      description: 'Coopération franco-congolaise pour le développement',
      logo: '🇫🇷',
      type: 'Organisation Internationale',
      since: '2015',
      focus: ['Coopération', 'Développement', 'Infrastructure'],
    },
  ];

  const filteredPartners = partners.filter((partner) => {
    const matchCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchSearch =
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const stats = [
    { label: 'Partenaires actifs', value: '45+', icon: Building2, color: 'text-primary-blue' },
    { label: 'Pays représentés', value: '28', icon: Globe, color: 'text-primary-yellow' },
    { label: 'Années de collaboration', value: '15+', icon: Award, color: 'text-primary-red' },
    { label: 'Projets conjoints', value: '120+', icon: Users, color: 'text-green-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <Users size={20} />
              <span className="font-semibold text-sm">Réseau de Partenaires</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos Partenaires Stratégiques
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Collaborations nationales et internationales pour un impact durable
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <stat.icon className={`${stat.color} mb-4`} size={32} />
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un partenaire..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-blue text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-blue'
                  }`}
                >
                  <Icon size={18} />
                  <span>{category.label}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 mb-8 font-semibold"
          >
            {filteredPartners.length} partenaire{filteredPartners.length !== 1 ? 's' : ''} trouvé{filteredPartners.length !== 1 ? 's' : ''}
          </motion.p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Header with Logo */}
                <div className="bg-gradient-to-r from-primary-blue/5 to-primary-blue/10 p-8 flex items-center justify-center border-b border-gray-100">
                  <div className="text-6xl">{partner.logo}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors">
                    {partner.name}
                  </h3>

                  {/* Type Badge */}
                  <div className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue text-xs font-semibold rounded-full mb-4">
                    {partner.type}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{partner.description}</p>

                  {/* Focus Areas */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Domaines:</p>
                    <div className="flex flex-wrap gap-2">
                      {partner.focus.map((area, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Since */}
                  <p className="text-xs text-gray-500 mb-6">Partenaire depuis {partner.since}</p>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ gap: '12px' }}
                    className="flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-blue/80 transition-all"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-blue/20 rounded-2xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredPartners.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun partenaire trouvé</h3>
              <p className="text-gray-600">Essayez une autre recherche ou catégorie</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Devenir Partenaire</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rejoignez notre réseau de partenaires et contribuez à notre mission de développement durable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Avantages Stratégiques',
                description: 'Accès à un réseau étendu, visibilité accrue et opportunités de collaboration',
                icon: '🎯',
              },
              {
                title: 'Support Technique',
                description: 'Assistance dédiée et ressources pour optimiser votre partenariat',
                icon: '🔧',
              },
              {
                title: 'Impact Durable',
                description: 'Contribuez à des projets à fort impact social et économique',
                icon: '🌱',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300"
            >
              Nous Contacter
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
