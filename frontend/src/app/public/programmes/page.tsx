'use client';

import { motion } from 'framer-motion';
import { Section, Card, Badge } from '@/components/common';
import Link from 'next/link';
import { Zap, TrendingUp, Users, MapPin } from 'lucide-react';

export default function ProgrammesPage() {
  const programs = [
    {
      icon: Zap,
      title: 'Sécurité alimentaire',
      description: 'Garantir la disponibilité alimentaire en toutes circonstances pour tous les citoyens',
      objectives: ['Stocks stratégiques', 'Distribution équitable', 'Prévention des crises'],
      budget: '150M USD',
    },
    {
      icon: TrendingUp,
      title: 'Stabilité des prix',
      description: 'Lutter contre la spéculation et les fluctuations de prix sur les marchés',
      objectives: ['Régulation du marché', 'Transparence des prix', 'Lutte contre la spéculation'],
      budget: '75M USD',
    },
    {
      icon: Users,
      title: 'Production locale',
      description: 'Soutenir les agriculteurs locaux et renforcer la production nationale',
      objectives: ['Formation agricole', 'Accès au crédit', 'Technologie moderne'],
      budget: '120M USD',
    },
    {
      icon: MapPin,
      title: 'Couverture régionale',
      description: 'Étendre les services de la RSG à toutes les régions du pays',
      objectives: ['10+ régions', 'Infrastructure locale', 'Emplois régionaux'],
      budget: '200M USD',
    },
  ];

  const timeline = [
    { year: '2025', milestone: 'Lancement des opérations', status: 'En cours' },
    { year: '2026', milestone: 'Expansion à 5 régions', status: 'Planifié' },
    { year: '2027', milestone: 'Couverture nationale', status: 'Planifié' },
    { year: '2028', milestone: 'Autosuffisance alimentaire', status: 'Objectif' },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <Section background="gradient" title="Nos programmes" subtitle="Initiatives pour la sécurité alimentaire nationale">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { label: 'Budget total', value: '545M USD' },
            { label: 'Régions couvertes', value: '10+' },
            { label: 'Bénéficiaires', value: '50M+' },
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

      {/* Programmes */}
      <Section title="Programmes stratégiques" subtitle="Quatre piliers de notre stratégie">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, idx) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary-blue/10 rounded-lg">
                      <Icon className="text-primary-blue" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                      <Badge variant="info">{program.budget}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2">
                    {program.objectives.map((obj, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-primary-blue rounded-full" />
                        {obj}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="gray" title="Calendrier de mise en œuvre" subtitle="Jalons clés du programme">
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-blue to-primary-yellow" />

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <Card>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{item.year}</h3>
                      <Badge variant={item.status === 'En cours' ? 'success' : item.status === 'Planifié' ? 'warning' : 'info'}>
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{item.milestone}</p>
                  </Card>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary-blue rounded-full border-4 border-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section title="Impact attendu" subtitle="Résultats mesurables">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { emoji: '📈', title: '+50%', desc: 'Production alimentaire' },
            { emoji: '💰', title: '-30%', desc: 'Variation des prix' },
            { emoji: '👥', title: '50M+', desc: 'Bénéficiaires directs' },
            { emoji: '🌾', title: '100K+', desc: 'Tonnes stockées' },
          ].map((impact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="text-5xl mb-4">{impact.emoji}</div>
                <h3 className="text-2xl font-bold text-primary-blue mb-2">{impact.title}</h3>
                <p className="text-gray-600">{impact.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Intéressé par nos programmes ?</h2>
            <p className="text-xl mb-8 opacity-90">Découvrez comment vous pouvez contribuer</p>
            <Link
              href="/public/contact"
              className="inline-block px-8 py-3 bg-white text-primary-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
