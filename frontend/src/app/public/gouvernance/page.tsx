'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Users, BarChart3, Shield, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function GovernancePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('pilotage');

  const policies = [
    {
      icon: Shield,
      title: 'Politique de conformité',
      description: 'Cadre de conformité légale et réglementaire de la RSG',
      date: 'Octobre 2025',
    },
    {
      icon: BarChart3,
      title: 'Rapport de gouvernance 2025',
      description: 'Rapport annuel sur la gouvernance et la transparence',
      date: 'Janvier 2025',
    },
    {
      icon: FileText,
      title: 'Code d\'éthique',
      description: 'Code d\'éthique et de conduite pour tous les collaborateurs',
      date: 'Septembre 2025',
    },
    {
      icon: Users,
      title: 'Politique RH',
      description: 'Politique de gestion des ressources humaines',
      date: 'Novembre 2025',
    },
  ];

  const orgStructure = [
    {
      id: 'pilotage',
      title: 'Comité de Pilotage',
      icon: '🎯',
      description: 'Organe d\'orientation et de surveillance de la RSG',
      roles: [
        {
          title: 'Rôle Principal',
          items: [
            'Assurer le suivi permanent de l\'exécution de la mission',
            'Respecter la vision et les objectifs fixés',
            'Valider la liste des produits stratégiques',
            'Approuver le plan de travail et le budget',
            'S\'assurer de la bonne mise en œuvre des documents approuvés'
          ]
        },
        {
          title: 'Composition',
          items: [
            '3 délégués du Cabinet du Président',
            'Membres de la Coordination de la RSG',
            '1 délégué de la Primature',
            'Délégués des 10 ministères clés'
          ]
        },
        {
          title: 'Fonctionnement',
          items: [
            'Présidé par le Président de la République ou son Délégué',
            'Réunion ordinaire une fois par semestre',
            'Peut faire appel à toute personne nécessaire',
            'Fonctionne selon le Règlement Intérieur de la RSG'
          ]
        }
      ]
    },
    {
      id: 'coordination',
      title: 'Coordination de la RSG',
      icon: '🤝',
      description: 'Organe exécutif responsable de la mise en œuvre',
      roles: [
        {
          title: 'Responsabilités',
          items: [
            'Définir et conduire la stratégie opérationnelle',
            'Mettre en œuvre les décisions du Comité de Pilotage',
            'Gérer les stocks stratégiques',
            'Assurer la veille stratégique continue',
            'Coordonner avec les partenaires publics et privés'
          ]
        },
        {
          title: 'Secteurs Couverts',
          items: [
            'Agriculture et Ressources alimentaires',
            'Ressources minérales et Hydrocarbures',
            'Énergie et Santé',
            'Industrie et Commerce',
            'Services sociaux et Environnement'
          ]
        },
        {
          title: 'Ressources',
          items: [
            'Équipe technique multidisciplinaire',
            'Infrastructure de stockage',
            'Systèmes d\'information et de suivi',
            'Partenariats stratégiques'
          ]
        }
      ]
    },
    {
      id: 'ministeres',
      title: 'Représentation Ministérielle',
      icon: '🏛️',
      description: 'Délégués des ministères clés',
      roles: [
        {
          title: 'Ministères Représentés',
          items: [
            'Économie et Budget',
            'Finances et Plan',
            'Agriculture et Développement Rural',
            'Pêches et Élevage',
            'Mines et Hydrocarbures',
            'Environnement et Développement Durable',
            'Santé',
            'Industrie et Commerce',
            'Primature'
          ]
        },
        {
          title: 'Rôle des Délégués',
          items: [
            'Représenter leur ministère au Comité',
            'Apporter expertise sectorielle',
            'Faciliter la coordination interministérielle',
            'Assurer l\'alignement avec les politiques nationales',
            'Contribuer à l\'analyse des risques stratégiques'
          ]
        }
      ]
    },
    {
      id: 'ressources',
      title: 'Gestion des Ressources',
      icon: '💰',
      description: 'Sources de financement et patrimoine',
      roles: [
        {
          title: 'Sources de Financement',
          items: [
            'Dotation émargeant au budget de l\'État',
            'Produits d\'exploitation',
            'Emprunts avec garantie de l\'État',
            'Financements des partenaires techniques et financiers',
            'Dons, legs et libéralités',
            'Redevances de services'
          ]
        },
        {
          title: 'Patrimoine',
          items: [
            'Dons et subventions',
            'Crédits et biens meubles',
            'Immeubles et biens corporels',
            'Biens incorporels',
            'Actifs transférés de l\'ancienne RSG'
          ]
        },
        {
          title: 'Gestion',
          items: [
            'Autonomie administrative et financière',
            'Rapports réguliers sur la situation des ressources',
            'Conformité avec les dispositions légales',
            'Transparence dans l\'utilisation des fonds'
          ]
        }
      ]
    }
  ];

  return (
    <div className="w-full">
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
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Gouvernance et Transparence</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Structure de gouvernance, organigramme et cadre de gestion de la RSG
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Structures', value: '4' },
              { label: 'Ministères', value: '10' },
              { label: 'Politiques', value: '8' },
              { label: 'Transparence', value: '100%' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organigramme Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Structure de Gouvernance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Organigramme et responsabilités des différentes structures
            </p>
          </motion.div>

          <div className="space-y-6">
            {orgStructure.map((structure, idx) => (
              <motion.div
                key={structure.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                {/* Header */}
                <motion.button
                  onClick={() => setExpandedSection(expandedSection === structure.id ? null : structure.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 text-left flex-1">
                    <span className="text-4xl">{structure.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{structure.title}</h3>
                      <p className="text-gray-600 text-sm">{structure.description}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSection === structure.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-primary-blue" size={24} />
                  </motion.div>
                </motion.button>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedSection === structure.id ? 1 : 0,
                    height: expandedSection === structure.id ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-gray-100"
                >
                  <div className="px-8 py-6 space-y-6 bg-gray-50">
                    {structure.roles.map((role, roleIdx) => (
                      <div key={roleIdx}>
                        <h4 className="text-lg font-bold text-primary-blue mb-3">{role.title}</h4>
                        <ul className="space-y-2">
                          {role.items.map((item, itemIdx) => (
                            <motion.li
                              key={itemIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: itemIdx * 0.05 }}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <CheckCircle2 className="text-primary-blue flex-shrink-0 mt-1" size={18} />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Politiques et Documents */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Politiques et Documents</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Accédez à tous les documents de gouvernance et de conformité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, idx) => {
              const Icon = policy.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-blue/10 rounded-lg flex-shrink-0">
                      <Icon className="text-primary-blue" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{policy.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{policy.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{policy.date}</span>
                        <Link href="#" className="text-primary-blue font-semibold text-sm hover:text-primary-blue/80 flex items-center gap-1">
                          Télécharger <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principes */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Principes de Gouvernance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les valeurs fondamentales qui guident la RSG
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🎯', title: 'Transparence', desc: 'Communication ouverte et honnête' },
              { emoji: '⚖️', title: 'Intégrité', desc: 'Respect des normes éthiques' },
              { emoji: '🚀', title: 'Efficacité', desc: 'Optimisation des ressources' },
              { emoji: '📊', title: 'Responsabilité', desc: 'Reddition de comptes' },
            ].map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="text-5xl mb-4">{principle.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Questions sur la gouvernance ?</h2>
            <p className="text-xl mb-8 text-gray-100">Contactez notre équipe de conformité pour plus d'informations</p>
            <Link
              href="/public/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-blue font-semibold rounded-lg hover:bg-gray-100 transition-all"
            >
              <span>Nous contacter</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
