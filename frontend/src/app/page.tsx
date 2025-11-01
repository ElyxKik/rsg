'use client';

import HeroSection from '@/components/hero/HeroSection';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, 
  Calendar,
  Tag,
  Clock,
  Eye,
  FileText,
  Award,
  Target,
  Briefcase,
  Globe,
  Shield,
  MapPin,
  Package,
  Zap
} from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Animation variants pour les sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const articles = [
    {
      id: 1,
      title: 'L\'équipe de la Coordination de la Réserve Stratégique Générale, représentée par son Coordonnateur, Mulumba Katchy Serge',
      excerpt: 'L\'équipe de la Coordination de la Réserve Stratégique Générale, représentée par son Coordonnateur, Mulumba Katchy Serge, a eu un moment d\'échange, ce vendredi 19 septembre, avec la délégation du Programme Mondial Alimentaire (PAM), conduite par sa Directrice adjointe, Evelyn Etti.',
      content: 'L\'équipe de la Coordination de la Réserve Stratégique Générale, représentée par son Coordonnateur, Mulumba Katchy Serge, a eu un moment d\'échange, ce vendredi 19 septembre, avec la délégation du Programme Mondial Alimentaire (PAM), conduite par sa Directrice adjointe, Evelyn Etti.\n\nAu cours de cet échange, la RSG et le PAM ont réaffirmé leur engagement mutuel à collaborer de manière stratégique. Ils ont discuté des différentes formes de soutien que le PAM peut offrir à la RSG, notamment en matière de planification, de logistique et de renforcement des capacités.',
      date: '19 Septembre 2025',
      category: 'Actualités',
      cover: '/article1.2.jpeg',
      image: '📰',
      readTime: '6 min',
      views: '1.5K',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 4,
      title: 'POINTS DE VENTE DISPONIBLES',
      excerpt: 'Pour vous procurer de la farine de maïs de 25 kg à seulement 35 000 FC, rendez-vous dans nos différents points de vente de la Réserve Stratégique Générale. Ne manquez pas cette offre !',
      content: 'Pour vous procurer de la farine de maïs de 25 kg à seulement 35 000 FC, rendez-vous dans nos différents points de vente de la Réserve Stratégique Générale. Ne manquez pas cette offre !',
      date: '1 Novembre 2025',
      category: 'Rapport',
      cover: '/article4.jpeg',
      image: '🛒',
      readTime: '3 min',
      views: '2.1K',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 5,
      title: 'Dans un élan de rapprochement, la Coordination de la Réserve Stratégique Générale a engagé des discussions franches',
      excerpt: 'Dans un élan de rapprochement, la Coordination de la Réserve Stratégique Générale a engagé des discussions franches et ouvertes avec tous les cadres et agents, ce mercredi 6 août 2025, dans la cour de l\'institution, en vue de motiver les équipes et les encourager à doubler d\'efforts dans leurs missions.',
      content: 'Dans un élan de rapprochement, la Coordination de la Réserve Stratégique Générale a engagé des discussions franches et ouvertes avec tous les cadres et agents, ce mercredi 6 août 2025, dans la cour de l\'institution, en vue de motiver les équipes et les encourager à doubler d\'efforts dans leurs missions.\n\nParallèlement, elle a salué, avec reconnaissance, les efforts déjà accomplis par chacun dans l\'atteinte des objectifs fixés pour le premier semestre.\n\nÀ leur tour, les cadres et agents ont exprimé toute leur profonde gratitude à la Coordination pour l\'amélioration de leurs conditions de travail.',
      date: '6 Août 2025',
      category: 'Actualités',
      cover: '/article5.jpeg',
      image: '👥',
      readTime: '5 min',
      views: '1.8K',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const stats = [
    { number: '2020', label: 'Année de création', icon: Calendar },
    { number: '10+', label: 'Régions couvertes', icon: MapPin },
    { number: '100K+', label: 'Tonnes stockées', icon: Package },
    { number: '24/7', label: 'Disponibilité', icon: Zap },
  ];

  const missions = [
    {
      title: 'Sécurité alimentaire',
      description: 'Garantir la disponibilité alimentaire en toutes circonstances pour tous les citoyens',
      icon: '🌾',
      color: 'border-primary-yellow',
    },
    {
      title: 'Stabilité des prix',
      description: 'Lutter contre la spéculation et les fluctuations de prix sur les marchés',
      icon: '📊',
      color: 'border-primary-red',
    },
    {
      title: 'Souveraineté nationale',
      description: 'Renforcer l\'indépendance alimentaire et la résilience de la RDC',
      icon: '🇨🇩',
      color: 'border-primary-blue',
    },
  ];

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue via-primary-yellow to-primary-red z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Actualités récentes */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div 
              variants={scaleIn}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full mb-4"
            >
              <FileText size={20} className="text-primary-blue" />
              <span className="text-primary-blue font-semibold text-sm">Actualités & Communiqués</span>
            </motion.div>
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-primary-blue mb-4"
            >
              Dernières Actualités
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Restez informé des dernières actualités, communiqués et rapports de la RSG
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${article.color}`} />
                
                {/* Image/Icon Section */}
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  {article.cover ? (
                    <>
                      <img 
                        src={article.cover} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent items-center justify-center" style={{ display: 'none' }}>
                        <motion.div
                          className="text-7xl"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {article.image || '📰'}
                        </motion.div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent" />
                      <motion.div
                        className="text-7xl z-10"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {article.image}
                      </motion.div>
                    </>
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-blue shadow-md">
                      <Tag size={12} />
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{article.views}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-blue transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/public/actualites/${article.id}`}
                    className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:gap-3 transition-all duration-300 group"
                  >
                    <span>Lire l'article</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-blue/20 rounded-2xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/public/actualites"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 group"
            >
              <span>Voir toutes les actualités</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Chiffres-clés */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Chiffres-clés
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="mb-3 flex justify-center">
                  <stat.icon size={48} className="text-primary-yellow" />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-lg text-gray-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/10 rounded-full mb-4">
              <Award size={20} className="text-primary-yellow" />
              <span className="text-primary-blue font-semibold text-sm">Nos Valeurs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Ce qui nous guide
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des valeurs fortes au service de la souveraineté alimentaire nationale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Intégrité', desc: 'Transparence et éthique dans toutes nos actions', color: 'from-blue-500 to-blue-600' },
              { icon: Target, title: 'Excellence', desc: 'Standards élevés de qualité et performance', color: 'from-purple-500 to-purple-600' },
              { icon: Globe, title: 'Innovation', desc: 'Solutions modernes pour les défis actuels', color: 'from-green-500 to-green-600' },
              { icon: Briefcase, title: 'Engagement', desc: 'Dévouement total à notre mission nationale', color: 'from-red-500 to-red-600' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} rounded-t-2xl`} />
                <div className={`w-14 h-14 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* À Propos de la RSG Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full mb-4">
              <Briefcase size={20} className="text-primary-blue" />
              <span className="text-primary-blue font-semibold text-sm">À Propos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              La Réserve Stratégique Générale
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Un service public spécialisé au sein du Cabinet du Président de la République, créé par Ordonnance N° 20/062 du 1er juillet 2020
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-primary-blue mb-3">Mission Générale</h3>
                <p className="text-gray-700 leading-relaxed">
                  La RSG est chargée de la promotion, du développement et de la mise en œuvre de la vision du Président de la République en matière de constitution et de gestion des réserves stratégiques pour assurer la <strong>résilience et la souveraineté nationale</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary-blue mb-3">Autonomie Administrative</h3>
                <p className="text-gray-700 leading-relaxed">
                  La RSG est dotée de l'autonomie administrative et de gestion. Elle est régie par l'Ordonnance N° 25/273 du 17 octobre 2025 et les autres textes régissant le Cabinet du Président de la République.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary-blue mb-3">Secteurs d'Intervention</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Agriculture', 'Ressources minérales', 'Hydrocarbures', 'Énergie', 'Santé', 'Industrie', 'Commerce', 'Services sociaux'].map((sector, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-primary-blue rounded-full" />
                      {sector}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Key Attributes */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  title: 'Définition Stratégique',
                  desc: 'Définir le cadre opérationnel de la vision présidentielle en matière de résilience nationale',
                  icon: '🎯'
                },
                {
                  title: 'Veille Stratégique',
                  desc: 'Étudier, analyser et évaluer les questions relatives aux secteurs stratégiques',
                  icon: '👁️'
                },
                {
                  title: 'Constitution des Stocks',
                  desc: 'Assurer la disponibilité suffisante et constante des produits essentiels',
                  icon: '📦'
                },
                {
                  title: 'Analyse des Risques',
                  desc: 'Réaliser une analyse prospective des risques géopolitiques, sanitaires et environnementaux',
                  icon: '⚠️'
                },
                {
                  title: 'Coordination',
                  desc: 'Superviser et collaborer avec les institutions pour la gestion des réserves',
                  icon: '🤝'
                },
                {
                  title: 'Conservation',
                  desc: 'Promouvoir la conservation des ressources naturelles et stratégiques',
                  icon: '🌱'
                },
              ].map((attr, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all border-l-4 border-primary-blue"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{attr.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{attr.title}</h4>
                      <p className="text-sm text-gray-600">{attr.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Ressources Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-blue/5 to-primary-blue/10 rounded-2xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-primary-blue mb-6">Sources de Financement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: '1', text: 'Dotation du budget de l\'État' },
                { num: '2', text: 'Produits d\'exploitation' },
                { num: '3', text: 'Emprunts avec garantie de l\'État' },
                { num: '4', text: 'Financements des partenaires' },
                { num: '5', text: 'Dons et libéralités' },
                { num: '6', text: 'Redevances de services' },
              ].map((resource, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white rounded-lg p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-sm">
                    {resource.num}
                  </div>
                  <p className="text-gray-700 font-medium">{resource.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/public/presentation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-blue/90 transition-all hover:gap-3"
            >
              <span>Découvrir la présentation complète</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Missions principales */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full mb-4">
              <Target size={20} className="text-primary-blue" />
              <span className="text-primary-blue font-semibold text-sm">Nos Missions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Missions Principales
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Les trois piliers stratégiques de la Réserve Stratégique Générale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-blue/5 to-transparent rounded-bl-full" />
                
                {/* Border Accent */}
                <div className={`absolute top-0 left-0 w-1 h-full ${mission.color} transition-all duration-300 group-hover:w-2`} />
                
                {/* Icon */}
                <div className="relative text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {mission.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-primary-blue mb-4 group-hover:text-primary-blue/80 transition-colors">
                  {mission.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {mission.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href="/public/programmes"
                  className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-primary-yellow/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-6">
              Découvrez nos programmes
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explorez les initiatives et programmes de la RSG pour la sécurité alimentaire
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/public/programmes"
                className="px-8 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-blue/90 transition-colors"
              >
                Nos programmes
              </Link>
              <Link
                href="/public/presentation"
                className="px-8 py-3 border-2 border-primary-blue text-primary-blue font-semibold rounded-lg hover:bg-primary-blue/10 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
