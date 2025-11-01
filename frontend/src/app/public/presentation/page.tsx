'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Users, Scale, CheckCircle2 } from 'lucide-react';

export default function PresentationPage() {
  const sections = [
    {
      title: 'Création',
      icon: '📜',
      content: 'Créée par Ordonnance N° 20/062 du 1er juillet 2020, modifiée par Ordonnance N° 25/273 du 17 octobre 2025. Service public spécialisé au sein du Cabinet du Président de la République.',
    },
    {
      title: 'Mission Générale',
      icon: '🎯',
      content: 'Promotion, développement et mise en œuvre de la vision présidentielle en matière de constitution et gestion des réserves stratégiques pour assurer la résilience et la souveraineté nationale.',
    },
    {
      title: 'Autonomie',
      icon: '⚖️',
      content: 'Dotée de l\'autonomie administrative et de gestion. Régie par l\'Ordonnance N° 25/273 du 17 octobre 2025 et les autres textes régissant le Cabinet du Président.',
    },
    {
      title: 'Objectif',
      icon: '🎯',
      content: 'Assurer la disponibilité suffisante, constante et accessible des produits essentiels en toute circonstance pour la résilience et la souveraineté nationale.',
    },
  ];

  const team = [
    { name: 'Dr. Jean Kasongo', position: 'Coordonnateur', department: 'Direction générale' },
    { name: 'Mme Fatima Diallo', position: 'Directrice Opérations', department: 'Opérations' },
    { name: 'M. Pierre Mbala', position: 'Directeur Finances', department: 'Finances' },
    { name: 'Mme Amina Sow', position: 'Directrice Programmes', department: 'Programmes' },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary-blue to-primary-blue/80">
        <div className="max-w-7xl mx-auto text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Présentation Institutionnelle</h1>
            <p className="text-xl">Découvrez l'histoire, les missions et la gouvernance de la RSG</p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-2xl font-bold text-primary-blue mb-3">{section.title}</h3>
                <p className="text-gray-600">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attributions Principales */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Attributions Principales</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les 7 domaines clés de responsabilité de la Réserve Stratégique Générale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { num: '1', title: 'Définition Stratégique', desc: 'Définir le cadre opérationnel de la vision présidentielle en matière de résilience nationale' },
              { num: '2', title: 'Veille Stratégique', desc: 'Étudier, analyser et évaluer les questions relatives aux secteurs stratégiques' },
              { num: '3', title: 'Constitution des Stocks', desc: 'Assurer la disponibilité suffisante et constante des produits essentiels' },
              { num: '4', title: 'Conservation', desc: 'Promouvoir la conservation des ressources naturelles et stratégiques' },
              { num: '5', title: 'Distribution', desc: 'Assurer la distribution et la régulation des produits stratégiques' },
              { num: '6', title: 'Analyse des Risques', desc: 'Réaliser une analyse prospective des risques géopolitiques et environnementaux' },
              { num: '7', title: 'Coordination', desc: 'Superviser et collaborer avec les institutions pour la gestion des réserves' },
            ].map((attr, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-primary-blue"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {attr.num}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">{attr.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{attr.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Secteurs d'Intervention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary-blue mb-6">Secteurs d'Intervention</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Agriculture', 'Ressources minérales', 'Hydrocarbures', 'Énergie', 'Santé', 'Industrie', 'Commerce', 'Services sociaux'].map((sector, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-primary-blue/5 to-primary-blue/10 rounded-lg"
                >
                  <CheckCircle2 className="text-primary-blue flex-shrink-0" size={20} />
                  <span className="font-medium text-gray-900">{sector}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cadre légal */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Cadre Légal et Réglementaire</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fondements juridiques et textes de référence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 rounded-xl p-8 border-l-4 border-primary-blue"
            >
              <div className="flex items-center mb-4">
                <FileText className="text-primary-blue mr-3" size={32} />
                <h3 className="text-2xl font-bold text-primary-blue">Ordonnances Principales</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue font-bold">•</span>
                  <span><strong>Ordonnance N° 20/062</strong> du 1er juillet 2020 - Création et organisation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue font-bold">•</span>
                  <span><strong>Ordonnance N° 25/173</strong> du 14 mars 2025 - Organisation du Cabinet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue font-bold">•</span>
                  <span><strong>Ordonnance N° 25/273</strong> du 17 octobre 2025 - Modification et complément</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-yellow/5 to-primary-yellow/10 rounded-xl p-8 border-l-4 border-primary-yellow"
            >
              <div className="flex items-center mb-4">
                <Scale className="text-primary-yellow mr-3" size={32} />
                <h3 className="text-2xl font-bold text-primary-blue">Références Constitutionnelles</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-yellow font-bold">•</span>
                  <span>Constitution RDC du 18 février 2006 (articles 69 et 79)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-yellow font-bold">•</span>
                  <span>Loi N° 11/002 du 20 janvier 2011 - Finances publiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-yellow font-bold">•</span>
                  <span>Conformité RGPD et normes internationales de sécurité</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organigramme */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-12">Équipe de direction</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-lg p-6 text-white text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-lg font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-gray-100">{member.department}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-primary-blue/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-6">
              En savoir plus sur nos gouvernance
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Consultez nos rapports de gouvernance et politiques internes
            </p>
            <Link
              href="/public/gouvernance"
              className="inline-block px-8 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-blue/90 transition-colors"
            >
              Voir la gouvernance
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
