'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Users, Package, TrendingUp, Info, ChevronRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import InteractiveMap from '@/components/maps/InteractiveMap';

export default function ZonesPage() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState(2025);

  const zones = [
    {
      id: 'kinshasa',
      name: 'Kinshasa',
      region: 'Ouest',
      population: '15M+',
      stockage: '25K tonnes',
      status: 'Opérationnel',
      color: '#003DA5',
      coordinates: { x: 35, y: 65 },
      description: 'Centre principal de distribution et de stockage stratégique',
      facilities: 3,
      coverage: '95%',
    },
    {
      id: 'lubumbashi',
      name: 'Lubumbashi',
      region: 'Sud-Est',
      population: '2.5M+',
      stockage: '15K tonnes',
      status: 'Opérationnel',
      color: '#FFD700',
      coordinates: { x: 70, y: 85 },
      description: 'Hub régional pour le Katanga et provinces limitrophes',
      facilities: 2,
      coverage: '88%',
    },
    {
      id: 'goma',
      name: 'Goma',
      region: 'Est',
      population: '1.5M+',
      stockage: '10K tonnes',
      status: 'Opérationnel',
      color: '#CE1126',
      coordinates: { x: 75, y: 45 },
      description: 'Point stratégique pour les provinces de l\'Est',
      facilities: 2,
      coverage: '82%',
    },
    {
      id: 'kisangani',
      name: 'Kisangani',
      region: 'Nord-Est',
      population: '1.3M+',
      stockage: '12K tonnes',
      status: 'Opérationnel',
      color: '#003DA5',
      coordinates: { x: 65, y: 35 },
      description: 'Centre de distribution pour la Tshopo et régions voisines',
      facilities: 2,
      coverage: '85%',
    },
    {
      id: 'mbujimayi',
      name: 'Mbuji-Mayi',
      region: 'Centre',
      population: '2M+',
      stockage: '13K tonnes',
      status: 'Opérationnel',
      color: '#FFD700',
      coordinates: { x: 60, y: 60 },
      description: 'Hub central pour le Kasaï',
      facilities: 1,
      coverage: '80%',
    },
    {
      id: 'kananga',
      name: 'Kananga',
      region: 'Centre-Ouest',
      population: '1.2M+',
      stockage: '8K tonnes',
      status: 'En développement',
      color: '#CE1126',
      coordinates: { x: 50, y: 62 },
      description: 'Extension du réseau vers le Kasaï-Central',
      facilities: 1,
      coverage: '75%',
    },
    {
      id: 'matadi',
      name: 'Matadi',
      region: 'Ouest',
      population: '500K+',
      stockage: '10K tonnes',
      status: 'Opérationnel',
      color: '#003DA5',
      coordinates: { x: 25, y: 70 },
      description: 'Port stratégique et centre logistique',
      facilities: 2,
      coverage: '90%',
    },
    {
      id: 'bukavu',
      name: 'Bukavu',
      region: 'Est',
      population: '900K+',
      stockage: '9K tonnes',
      status: 'Opérationnel',
      color: '#FFD700',
      coordinates: { x: 75, y: 55 },
      description: 'Centre régional pour le Sud-Kivu',
      facilities: 1,
      coverage: '83%',
    },
  ];

  const stats = [
    { label: 'Zones couvertes', value: '10+', icon: MapPin, color: 'text-primary-blue' },
    { label: 'Population desservie', value: '25M+', icon: Users, color: 'text-primary-yellow' },
    { label: 'Capacité totale', value: '100K+ tonnes', icon: Package, color: 'text-primary-red' },
    { label: 'Taux de couverture', value: '85%', icon: TrendingUp, color: 'text-green-600' },
  ];

  const selectedZoneData = zones.find((z) => z.id === selectedZone);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <MapPin size={20} />
              <span className="font-semibold text-sm">Couverture Nationale</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Zones de Couverture RSG
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Découvrez notre réseau de distribution et de stockage stratégique à travers la République Démocratique du Congo
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

      {/* Interactive Map Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">
              Carte Choroplèthe Interactive
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Visualisation des données par province avec zoom, pan et filtrage temporel
            </p>
            
            {/* Year Selector */}
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-xl shadow-lg">
              <Calendar size={20} className="text-primary-blue" />
              <span className="text-sm font-semibold text-gray-700">Année:</span>
              <div className="flex gap-2">
                {[2023, 2024, 2025].map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      selectedYear === year
                        ? 'bg-primary-blue text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <InteractiveMap
                onProvinceSelect={setSelectedZone}
                selectedProvince={selectedZone}
                year={selectedYear}
              />
            </motion.div>

            {/* Zone Details Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              {selectedZoneData ? (
                <motion.div
                  key={selectedZoneData.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-6 sticky top-24"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {selectedZoneData.name}
                      </h3>
                      <p className="text-sm text-gray-500">{selectedZoneData.region}</p>
                    </div>
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: selectedZoneData.color }}
                    />
                  </div>

                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedZoneData.status === 'Opérationnel' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {selectedZoneData.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedZoneData.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Population</span>
                      <span className="font-semibold text-gray-900">{selectedZoneData.population}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Capacité stockage</span>
                      <span className="font-semibold text-gray-900">{selectedZoneData.stockage}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Installations</span>
                      <span className="font-semibold text-gray-900">{selectedZoneData.facilities}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Taux de couverture</span>
                      <span className="font-semibold text-primary-blue">{selectedZoneData.coverage}</span>
                    </div>
                  </div>

                  <Link
                    href="/public/contact"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <span>Contacter cette zone</span>
                    <ChevronRight size={18} />
                  </Link>
                </motion.div>
              ) : (
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center sticky top-24">
                  <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Info className="text-primary-blue" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Sélectionnez une zone
                  </h3>
                  <p className="text-gray-600">
                    Cliquez sur un point de la carte pour voir les détails de la zone
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Zones List */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">
              Toutes les Zones
            </h2>
            <p className="text-gray-600 text-lg">
              Vue d'ensemble de notre réseau national
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone, index) => (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => {
                  setSelectedZone(zone.id);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-blue transition-colors">
                      {zone.name}
                    </h3>
                    <p className="text-sm text-gray-500">{zone.region}</p>
                  </div>
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: zone.color }}
                  />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Population</span>
                    <span className="font-semibold text-gray-900">{zone.population}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Stockage</span>
                    <span className="font-semibold text-gray-900">{zone.stockage}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Couverture</span>
                    <span className="font-semibold text-primary-blue">{zone.coverage}</span>
                  </div>
                </div>

                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  zone.status === 'Opérationnel' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {zone.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
