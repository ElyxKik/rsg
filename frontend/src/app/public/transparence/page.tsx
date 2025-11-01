'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Eye, TrendingUp, FileText, Download, Calendar, CheckCircle2 } from 'lucide-react';

export default function TransparencePage() {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const years = [2023, 2024, 2025];
  const categories = [
    { id: 'all', label: 'Tous les rapports' },
    { id: 'financier', label: 'Financier' },
    { id: 'operationnel', label: 'Opérationnel' },
    { id: 'audit', label: 'Audit' },
    { id: 'gouvernance', label: 'Gouvernance' },
  ];

  const reports = [
    {
      id: 1,
      title: 'Rapport Financier Annuel 2025',
      category: 'financier',
      year: 2025,
      date: '15 Janvier 2025',
      description: 'Bilan financier complet de l\'année 2025 avec détails des revenus et dépenses',
      icon: '💰',
      downloads: 3450,
      pages: 48,
    },
    {
      id: 2,
      title: 'Rapport d\'Audit Interne 2025',
      category: 'audit',
      year: 2025,
      date: '20 Janvier 2025',
      description: 'Résultats des audits internes et recommandations pour amélioration',
      icon: '🔍',
      downloads: 2100,
      pages: 32,
    },
    {
      id: 3,
      title: 'Rapport de Gouvernance 2025',
      category: 'gouvernance',
      year: 2025,
      date: '25 Janvier 2025',
      description: 'Conformité aux normes de gouvernance et structure de direction',
      icon: '🏛️',
      downloads: 1890,
      pages: 28,
    },
    {
      id: 4,
      title: 'Rapport Opérationnel 2025',
      category: 'operationnel',
      year: 2025,
      date: '10 Février 2025',
      description: 'Performance opérationnelle et indicateurs clés de gestion',
      icon: '📊',
      downloads: 2650,
      pages: 56,
    },
    {
      id: 5,
      title: 'Rapport Financier Annuel 2024',
      category: 'financier',
      year: 2024,
      date: '15 Janvier 2024',
      description: 'Bilan financier complet de l\'année 2024',
      icon: '💰',
      downloads: 4120,
      pages: 45,
    },
    {
      id: 6,
      title: 'Rapport d\'Audit Interne 2024',
      category: 'audit',
      year: 2024,
      date: '20 Janvier 2024',
      description: 'Résultats des audits internes 2024',
      icon: '🔍',
      downloads: 2890,
      pages: 35,
    },
    {
      id: 7,
      title: 'Rapport Financier Annuel 2023',
      category: 'financier',
      year: 2023,
      date: '15 Janvier 2023',
      description: 'Bilan financier complet de l\'année 2023',
      icon: '💰',
      downloads: 3780,
      pages: 42,
    },
    {
      id: 8,
      title: 'Rapport de Gouvernance 2024',
      category: 'gouvernance',
      year: 2024,
      date: '25 Janvier 2024',
      description: 'Conformité aux normes de gouvernance 2024',
      icon: '🏛️',
      downloads: 2340,
      pages: 30,
    },
  ];

  const filteredReports = reports.filter((report) => {
    const matchYear = selectedYear === null || report.year === selectedYear;
    const matchCategory = selectedCategory === 'all' || report.category === selectedCategory;
    return matchYear && matchCategory;
  });

  const stats = [
    { label: 'Rapports publiés', value: '45+', icon: FileText, color: 'text-primary-blue' },
    { label: 'Années de données', value: '10+', icon: Calendar, color: 'text-primary-yellow' },
    { label: 'Téléchargements', value: '125K+', icon: TrendingUp, color: 'text-primary-red' },
    { label: 'Conformité', value: '100%', icon: CheckCircle2, color: 'text-green-600' },
  ];

  const principles = [
    {
      title: 'Intégrité',
      description: 'Tous nos rapports sont vérifiés par des auditeurs externes indépendants',
      icon: '✓',
    },
    {
      title: 'Accessibilité',
      description: 'Tous les documents sont disponibles gratuitement en ligne',
      icon: '📖',
    },
    {
      title: 'Clarté',
      description: 'Présentation claire et compréhensible des informations',
      icon: '💡',
    },
    {
      title: 'Régularité',
      description: 'Publication régulière des rapports selon un calendrier défini',
      icon: '📅',
    },
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
              <Eye size={20} />
              <span className="font-semibold text-sm">Transparence et Gouvernance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transparence Institutionnelle
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Accédez à tous nos rapports financiers, d'audit et de gouvernance
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

      {/* Principles Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Nos Principes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fondements de notre engagement envers la transparence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Rapports et Documents</h2>

            {/* Year Filter */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">Année:</p>
              <div className="flex flex-wrap gap-3">
                {years.map((year) => (
                  <motion.button
                    key={year}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedYear(year)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      selectedYear === year
                        ? 'bg-primary-blue text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-blue'
                    }`}
                  >
                    {year}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Catégorie:</p>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-primary-blue text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-blue'
                    }`}
                  >
                    {category.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 mb-8 font-semibold"
          >
            {filteredReports.length} rapport{filteredReports.length !== 1 ? 's' : ''} trouvé{filteredReports.length !== 1 ? 's' : ''}
          </motion.p>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-blue/5 to-primary-blue/10 p-6 flex items-center justify-center border-b border-gray-100">
                  <div className="text-5xl">{report.icon}</div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue text-xs font-semibold rounded-full mb-3 w-fit">
                    {categories.find((c) => c.id === report.category)?.label}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors line-clamp-2">
                    {report.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                    {report.description}
                  </p>

                  {/* Meta */}
                  <div className="space-y-2 mb-4 text-xs text-gray-500">
                    <p>📅 {report.date}</p>
                    <p>📄 {report.pages} pages</p>
                    <p>📥 {report.downloads.toLocaleString()} téléchargements</p>
                  </div>

                  {/* Download Button */}
                  <motion.button
                    whileHover={{ gap: '12px' }}
                    className="flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-blue/80 transition-all mt-auto"
                  >
                    <Download size={16} />
                    <span>Télécharger</span>
                  </motion.button>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-blue/20 rounded-2xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredReports.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <FileText size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun rapport trouvé</h3>
              <p className="text-gray-600">Essayez une autre année ou catégorie</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Notre Engagement</h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              La RSG s'engage à maintenir les plus hauts standards de transparence et de gouvernance. 
              Nous croyons que l'accès à l'information est essentiel pour la confiance publique et la 
              responsabilité institutionnelle. Tous nos rapports sont vérifiés par des auditeurs externes 
              indépendants et publiés selon un calendrier régulier.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-blue font-bold rounded-xl hover:bg-gray-100 transition-all"
            >
              Contactez-nous pour plus d'informations
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Questions Fréquentes</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Où puis-je trouver les rapports financiers?',
                a: 'Tous les rapports financiers sont disponibles dans la section "Rapports et Documents" ci-dessus, filtrés par catégorie "Financier".',
              },
              {
                q: 'Quelle est la fréquence de publication des rapports?',
                a: 'Les rapports annuels sont publiés chaque année en janvier. Les rapports trimestriels sont disponibles sur demande.',
              },
              {
                q: 'Les rapports sont-ils vérifiés par des auditeurs externes?',
                a: 'Oui, tous nos rapports sont vérifiés par des auditeurs externes indépendants avant publication.',
              },
              {
                q: 'Comment puis-je demander des informations supplémentaires?',
                a: 'Vous pouvez nous contacter via le formulaire de contact ou envoyer un email à transparency@rsg.gov.cd',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-primary-blue">Q:</span> {faq.q}
                </h3>
                <p className="text-gray-600 ml-6">
                  <span className="text-primary-blue font-bold">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
