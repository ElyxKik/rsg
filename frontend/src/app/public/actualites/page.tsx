'use client';

import { motion } from 'framer-motion';
import { Section, Card, Badge } from '@/components/common';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const articles = [
    {
      id: 1,
      title: 'Nouvelle stratégie de stockage alimentaire 2025',
      excerpt: 'La RSG déploie une nouvelle stratégie de stockage pour renforcer la sécurité alimentaire nationale avec des installations modernes.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '31 Octobre 2025',
      author: 'Dr. Jean Kasongo',
      category: 'Actualités',
      image: '📦',
      featured: true,
    },
    {
      id: 2,
      title: 'Partenariat avec la FAO pour la production locale',
      excerpt: 'Un accord de coopération a été signé pour soutenir la production agricole locale et renforcer les capacités des agriculteurs.',
      date: '28 Octobre 2025',
      author: 'Mme Fatima Diallo',
      category: 'Partenariats',
      image: '🤝',
    },
    {
      id: 3,
      title: 'Rapport trimestriel Q3 2025',
      excerpt: 'Découvrez les résultats et réalisations du troisième trimestre 2025 avec des chiffres clés et analyses détaillées.',
      date: '25 Octobre 2025',
      author: 'M. Pierre Mbala',
      category: 'Rapports',
      image: '📊',
    },
    {
      id: 4,
      title: 'Inauguration du centre de stockage de Kinshasa',
      excerpt: 'Le nouveau centre de stockage de Kinshasa a été inauguré en présence des autorités gouvernementales et des partenaires.',
      date: '20 Octobre 2025',
      author: 'Mme Amina Sow',
      category: 'Événements',
      image: '🏗️',
    },
    {
      id: 5,
      title: 'Formation des agents de terrain',
      excerpt: 'Plus de 500 agents ont suivi une formation intensive sur les normes de stockage et de distribution alimentaire.',
      date: '15 Octobre 2025',
      author: 'Dr. Jean Kasongo',
      category: 'Formation',
      image: '👥',
    },
    {
      id: 6,
      title: 'Appel à candidatures pour postes vacants',
      excerpt: 'La RSG recrute 50 nouveaux collaborateurs pour renforcer ses équipes opérationnelles et administratives.',
      date: '10 Octobre 2025',
      author: 'RH',
      category: 'Recrutement',
      image: '💼',
    },
  ];

  const categories = ['tous', 'Actualités', 'Partenariats', 'Rapports', 'Événements', 'Formation', 'Recrutement'];

  const filteredArticles = selectedCategory === 'tous' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  const featuredArticle = articles.find(a => a.featured);

  return (
    <div className="w-full">
      {/* Hero */}
      <Section background="gradient" title="Actualités et Communiqués" subtitle="Restez informé des dernières nouvelles de la RSG">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { label: 'Articles', value: articles.length },
            { label: 'Catégories', value: categories.length - 1 },
            { label: 'Mises à jour', value: 'Quotidiennes' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <p className="text-lg opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Article */}
      {featuredArticle && (
        <Section title="Article à la une">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-7xl flex items-center justify-center bg-primary-blue/10 rounded-2xl">
                  {featuredArticle.image}
                </div>
                <div>
                  <Badge variant="primary">{featuredArticle.category}</Badge>
                  <h2 className="text-3xl font-bold text-gray-900 my-4">{featuredArticle.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <User size={18} />
                      {featuredArticle.author}
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-blue/90 transition-colors"
                  >
                    Lire l'article complet <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </Section>
      )}

      {/* Filtres */}
      <Section background="gray">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-primary-blue text-white'
                  : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-primary-blue'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </div>
      </Section>

      {/* Articles Grid */}
      <Section title="Tous les articles" subtitle={`${filteredArticles.length} article(s) trouvé(s)`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="interactive">
                <div className="text-6xl mb-4 text-center">{article.image}</div>
                <Badge variant="info">{article.category}</Badge>
                <h3 className="text-xl font-bold text-gray-900 my-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="space-y-2 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {article.author}
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary-blue font-semibold hover:text-primary-blue/80 transition-colors"
                >
                  Lire plus <ArrowRight size={16} className="ml-2" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section background="blue">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Abonnez-vous à notre newsletter</h2>
            <p className="text-xl mb-8 opacity-90">Recevez les dernières actualités directement dans votre boîte mail</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-yellow"
              />
              <button className="px-8 py-3 bg-primary-yellow text-primary-blue font-semibold rounded-lg hover:bg-primary-yellow/90 transition-colors">
                S'abonner
              </button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
