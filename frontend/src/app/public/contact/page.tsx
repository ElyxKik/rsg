'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: [
        'Av. Roi Beaudouin, Gombe/Kinshasa',
        'République Démocratique du Congo'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: [
        '+243 (0) 81 234 56 78',
        '+243 (0) 82 345 67 89'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'contact@rsg.gov.cd',
        'dev@rsg.gov.cd'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: [
        'Lundi - Vendredi: 08:00 - 17:00',
        'Samedi - Dimanche: Fermé'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const departments = [
    {
      name: 'Direction Générale',
      email: 'direction@rsg.gov.cd',
      phone: '+243 (0) 81 234 56 78',
      role: 'Coordination générale et stratégie'
    },
    {
      name: 'Opérations',
      email: 'operations@rsg.gov.cd',
      phone: '+243 (0) 82 345 67 89',
      role: 'Gestion des stocks et distribution'
    },
    {
      name: 'Finances',
      email: 'finances@rsg.gov.cd',
      phone: '+243 (0) 83 456 78 90',
      role: 'Gestion budgétaire et comptabilité'
    },
    {
      name: 'Conformité',
      email: 'conformite@rsg.gov.cd',
      phone: '+243 (0) 84 567 89 01',
      role: 'Gouvernance et conformité légale'
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
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Nous Contacter</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Vous avez des questions ? Contactez-nous et notre équipe vous répondra dans les meilleurs délais
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Envoyez-nous un message</h2>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-green-600" size={24} />
                    <div>
                      <p className="font-semibold text-green-900">Message envoyé avec succès !</p>
                      <p className="text-sm text-green-700">Nous vous répondrons dans les meilleurs délais.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Nom complet *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors"
                        placeholder="+243 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Sujet *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="general">Demande générale</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="gouvernance">Gouvernance</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Départements</h2>
              <div className="space-y-4">
                {departments.map((dept, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-primary-blue"
                  >
                    <h3 className="font-bold text-gray-900 mb-1">{dept.name}</h3>
                    <p className="text-xs text-gray-600 mb-3">{dept.role}</p>
                    <div className="space-y-2 text-sm">
                      <a href={`mailto:${dept.email}`} className="flex items-center gap-2 text-primary-blue hover:text-primary-blue/80 transition-colors">
                        <Mail size={16} />
                        {dept.email}
                      </a>
                      <a href={`tel:${dept.phone}`} className="flex items-center gap-2 text-primary-blue hover:text-primary-blue/80 transition-colors">
                        <Phone size={16} />
                        {dept.phone}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Questions Fréquentes</h2>
            <p className="text-lg text-gray-600">Réponses aux questions les plus posées</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Quel est le délai de réponse moyen ?',
                a: 'Nous répondons généralement dans les 24 à 48 heures ouvrables. Les demandes urgentes sont traitées en priorité.'
              },
              {
                q: 'Comment puis-je devenir partenaire ?',
                a: 'Contactez notre département Opérations avec vos propositions. Nous évaluerons les opportunités de partenariat.'
              },
              {
                q: 'Quels sont les horaires de bureau ?',
                a: 'Nous sommes ouverts du lundi au vendredi, de 08:00 à 17:00. Les appels d\'urgence peuvent être traités en dehors de ces heures.'
              },
              {
                q: 'Comment accéder aux rapports de gouvernance ?',
                a: 'Tous nos rapports sont disponibles sur la page Transparence. Vous pouvez les télécharger gratuitement.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-primary-blue">Q:</span> {faq.q}
                </h3>
                <p className="text-gray-600 ml-6">
                  <span className="text-primary-blue font-bold">R:</span> {faq.a}
                </p>
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
            <h2 className="text-4xl font-bold mb-6">Besoin d'assistance immédiate ?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Appelez-nous ou envoyez un email à notre équipe de support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+243812345678"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-blue font-bold rounded-lg hover:bg-gray-100 transition-all"
              >
                <Phone size={20} />
                Appeler maintenant
              </a>
              <a
                href="mailto:contact@rsg.gov.cd"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
              >
                <Mail size={20} />
                Envoyer un email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
