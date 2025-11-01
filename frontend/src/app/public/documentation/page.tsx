'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BookOpen, FileText, Download, Search, ChevronRight, Code, Database, Shield, Zap, Users, ArrowRight } from 'lucide-react';

export default function DocumentationPage() {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedDoc, setExpandedDoc] = useState<number | null>(null);

  const categories = [
    { id: 'general', label: 'Général', icon: BookOpen },
    { id: 'technique', label: 'Technique', icon: Code },
    { id: 'api', label: 'API', icon: Database },
    { id: 'securite', label: 'Sécurité', icon: Shield },
    { id: 'guides', label: 'Guides', icon: Zap },
  ];

  const documents = [
    {
      id: 1,
      title: 'Guide de démarrage',
      category: 'general',
      description: 'Commencez avec la RSG en quelques étapes simples',
      content: `
        <h3>Étape 1: Installation</h3>
        <p>Téléchargez et installez l'application depuis le site officiel.</p>
        
        <h3>Étape 2: Configuration initiale</h3>
        <p>Configurez vos paramètres de base et connectez-vous à votre compte.</p>
        
        <h3>Étape 3: Premiers pas</h3>
        <p>Explorez les fonctionnalités principales et familiarisez-vous avec l'interface.</p>
      `,
      icon: '📖',
      readTime: '5 min',
      downloads: 1250,
    },
    {
      id: 2,
      title: 'Architecture système',
      category: 'technique',
      description: 'Vue d\'ensemble de l\'architecture technique de la RSG',
      content: `
        <h3>Composants principaux</h3>
        <p>L'architecture est composée de plusieurs modules interconnectés.</p>
        
        <h3>Infrastructure</h3>
        <p>Utilisation de technologies cloud modernes pour la scalabilité.</p>
        
        <h3>Intégrations</h3>
        <p>Connexion avec les systèmes externes via APIs RESTful.</p>
      `,
      icon: '🏗️',
      readTime: '12 min',
      downloads: 890,
    },
    {
      id: 3,
      title: 'Référence API',
      category: 'api',
      description: 'Documentation complète des endpoints API disponibles',
      content: `
        <h3>Authentification</h3>
        <p>Tous les appels API nécessitent une authentification OAuth 2.0.</p>
        
        <h3>Endpoints principaux</h3>
        <p>GET /api/v1/partners - Récupère la liste des partenaires</p>
        <p>POST /api/v1/articles - Crée un nouvel article</p>
        
        <h3>Codes d'erreur</h3>
        <p>200: Succès, 400: Erreur client, 500: Erreur serveur</p>
      `,
      icon: '🔌',
      readTime: '15 min',
      downloads: 2340,
    },
    {
      id: 4,
      title: 'Politique de sécurité',
      category: 'securite',
      description: 'Normes et bonnes pratiques de sécurité',
      content: `
        <h3>Chiffrement des données</h3>
        <p>Tous les données sont chiffrées en transit et au repos.</p>
        
        <h3>Authentification multi-facteurs</h3>
        <p>Activation recommandée pour tous les comptes administrateur.</p>
        
        <h3>Audit et conformité</h3>
        <p>Conformité RGPD et normes internationales de sécurité.</p>
      `,
      icon: '🔐',
      readTime: '8 min',
      downloads: 1560,
    },
    {
      id: 5,
      title: 'Gestion des utilisateurs',
      category: 'guides',
      description: 'Comment gérer les utilisateurs et les permissions',
      content: `
        <h3>Création d'utilisateurs</h3>
        <p>Accédez à l'administration et créez de nouveaux comptes utilisateur.</p>
        
        <h3>Rôles et permissions</h3>
        <p>Attribuez des rôles spécifiques pour contrôler l'accès aux fonctionnalités.</p>
        
        <h3>Gestion des groupes</h3>
        <p>Organisez les utilisateurs en groupes pour une gestion simplifiée.</p>
      `,
      icon: '👥',
      readTime: '7 min',
      downloads: 945,
    },
    {
      id: 6,
      title: 'Intégration de données',
      category: 'technique',
      description: 'Guide pour intégrer des données externes',
      content: `
        <h3>Formats supportés</h3>
        <p>CSV, JSON, XML, et formats propriétaires.</p>
        
        <h3>Processus d'import</h3>
        <p>Étapes pour importer des données en masse dans le système.</p>
        
        <h3>Validation des données</h3>
        <p>Vérifications automatiques et rapports d'erreur détaillés.</p>
      `,
      icon: '📊',
      readTime: '10 min',
      downloads: 1120,
    },
    {
      id: 7,
      title: 'Dépannage courant',
      category: 'guides',
      description: 'Solutions aux problèmes les plus fréquents',
      content: `
        <h3>Problème: Impossible de se connecter</h3>
        <p>Vérifiez vos identifiants et réinitialisez votre mot de passe si nécessaire.</p>
        
        <h3>Problème: Erreur de synchronisation</h3>
        <p>Vérifiez votre connexion internet et les paramètres de proxy.</p>
        
        <h3>Problème: Performance lente</h3>
        <p>Vérifiez les ressources système et optimisez votre configuration.</p>
      `,
      icon: '🔧',
      readTime: '6 min',
      downloads: 2100,
    },
    {
      id: 8,
      title: 'Configuration avancée',
      category: 'technique',
      description: 'Options de configuration pour utilisateurs avancés',
      content: `
        <h3>Variables d'environnement</h3>
        <p>Configurez les paramètres système via variables d'environnement.</p>
        
        <h3>Optimisation des performances</h3>
        <p>Tuning des paramètres pour améliorer la performance.</p>
        
        <h3>Clustering et haute disponibilité</h3>
        <p>Configuration pour déploiements multi-serveurs.</p>
      `,
      icon: '⚙️',
      readTime: '14 min',
      downloads: 756,
    },
  ];

  const filteredDocs = documents.filter((doc) => {
    const matchCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const stats = [
    { label: 'Documents', value: '45+', icon: FileText },
    { label: 'Tutoriels vidéo', value: '12', icon: Zap },
    { label: 'Exemples de code', value: '89', icon: Code },
    { label: 'Communauté active', value: '2.5K', icon: Users },
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
              <BookOpen size={20} />
              <span className="font-semibold text-sm">Centre de Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Documentation Complète
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Guides, tutoriels et références techniques pour maîtriser la RSG
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
                <stat.icon className="text-primary-blue mb-4" size={32} />
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
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
                placeholder="Rechercher dans la documentation..."
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
            {filteredDocs.length} document{filteredDocs.length !== 1 ? 's' : ''} trouvé{filteredDocs.length !== 1 ? 's' : ''}
          </motion.p>
        </div>
      </section>

      {/* Documents List */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {filteredDocs.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <motion.button
                  onClick={() => setExpandedDoc(expandedDoc === doc.id ? null : doc.id)}
                  whileHover={{ x: 4 }}
                  className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-left"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl">{doc.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>⏱️ {doc.readTime}</span>
                          <span>📥 {doc.downloads.toLocaleString()} téléchargements</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedDoc === doc.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronRight className="text-primary-blue" size={24} />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Expanded Content */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedDoc === doc.id ? 1 : 0,
                    height: expandedDoc === doc.id ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gray-50 rounded-b-2xl p-6 border border-t-0 border-gray-100">
                    <div
                      className="prose prose-sm max-w-none text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: doc.content
                          .replace(/<h3>/g, '<h3 class="text-lg font-bold text-gray-900 mt-4 mb-2">')
                          .replace(/<p>/g, '<p class="mb-2 text-gray-700 leading-relaxed">')
                          .replace(/<strong>/g, '<strong class="font-bold text-gray-900">')
                          .replace(/<em>/g, '<em class="italic text-gray-800">'),
                      }}
                    />
                    <motion.button
                      whileHover={{ gap: '12px' }}
                      className="flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-blue/80 transition-all mt-4"
                    >
                      <Download size={16} />
                      <span>Télécharger le PDF</span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredDocs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun document trouvé</h3>
              <p className="text-gray-600">Essayez une autre recherche ou catégorie</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Ressources Rapides</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Accédez rapidement aux ressources les plus populaires
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'FAQ', icon: '❓', desc: 'Questions fréquemment posées' },
              { title: 'Tutoriels vidéo', icon: '🎥', desc: 'Apprentissage par la vidéo' },
              { title: 'Exemples de code', icon: '💻', desc: 'Code prêt à utiliser' },
              { title: 'Support communauté', icon: '💬', desc: 'Aide de la communauté' },
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{resource.desc}</p>
                <motion.div
                  whileHover={{ gap: '8px' }}
                  className="flex items-center gap-2 text-primary-blue font-semibold"
                >
                  <span>Accéder</span>
                  <ArrowRight size={16} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Besoin d'aide supplémentaire?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Contactez notre équipe de support ou rejoignez notre communauté
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary-blue font-bold rounded-xl hover:bg-gray-100 transition-all"
              >
                Contacter le support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                Rejoindre la communauté
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
