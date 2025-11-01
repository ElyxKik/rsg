'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Eye, Share2, Bookmark, MessageCircle, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ArticleDetailPage() {
  const params = useParams();
  const articleId = params.id as string;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(1240);
  const [isLiked, setIsLiked] = useState(false);

  // Article data - hardcoded for multiple articles
  const getArticle = () => {
    if (articleId === '1') {
      return {
        id: articleId,
        title: 'L\'équipe de la Coordination de la Réserve Stratégique Générale, représentée par son Coordonnateur, Mulumba Katchy Serge',
        subtitle: 'Échange stratégique avec la délégation du Programme Mondial Alimentaire (PAM)',
        author: 'Mulumba Katchy Serge',
        authorRole: 'Coordonnateur de la RSG',
        date: '19 Septembre 2025',
        readTime: '6 min',
        views: 1543,
        category: 'Actualités',
        image: '/article1.2.jpeg',
        content: `
          <h2>Rencontre stratégique avec le PAM</h2>
          <p>L'équipe de la Coordination de la Réserve Stratégique Générale, représentée par son Coordonnateur, Mulumba Katchy Serge, a eu un moment d'échange, ce vendredi 19 septembre, avec la délégation du Programme Mondial Alimentaire (PAM), conduite par sa Directrice adjointe, Evelyn Etti.</p>

          <h2>Engagement mutuel et collaboration stratégique</h2>
          <p>Au cours de cet échange, la RSG et le PAM ont réaffirmé leur engagement mutuel à collaborer de manière stratégique. Ils ont discuté des différentes formes de soutien que le PAM peut offrir à la RSG, notamment en matière de planification, de logistique et de renforcement des capacités.</p>

          <h2>Domaines de coopération</h2>
          <p>Les discussions ont porté sur plusieurs domaines clés de collaboration:</p>
          <ul>
            <li><strong>Planification stratégique:</strong> Développement conjoint de plans de gestion des ressources alimentaires</li>
            <li><strong>Logistique et distribution:</strong> Optimisation des chaînes d'approvisionnement et de distribution</li>
            <li><strong>Renforcement des capacités:</strong> Formation et développement des ressources humaines</li>
            <li><strong>Échange d'expertise:</strong> Partage des meilleures pratiques internationales</li>
          </ul>

          <h2>Importance du partenariat</h2>
          <p>Ce partenariat revêt une importance capitale pour la RSG, qui cherche à renforcer sa capacité opérationnelle et à améliorer son efficacité dans la gestion des ressources stratégiques. Le soutien du PAM, une organisation internationale de premier plan, contribuera significativement à l'atteinte de ces objectifs.</p>

          <h2>Perspectives d'avenir</h2>
          <p>Les deux organisations ont convenu de mettre en place un cadre de coopération formalisé, avec des mécanismes réguliers de coordination et de suivi. Cette collaboration renforcera la capacité de la RSG à répondre aux défis de sécurité alimentaire et de résilience économique en République Démocratique du Congo.</p>

          <h2>Conclusion</h2>
          <p>Cette rencontre marque un tournant important dans les relations entre la RSG et le PAM, ouvrant de nouvelles perspectives de collaboration et de partenariat stratégique pour le bénéfice mutuel des deux organisations et, plus largement, pour la population congolaise.</p>
        `,
        relatedArticles: [
          {
            id: '4',
            title: 'POINTS DE VENTE DISPONIBLES',
            date: '1 Novembre 2025',
            readTime: '3 min',
            image: '/article4.jpeg',
          },
          {
            id: '2',
            title: 'Rapport annuel 2025 de la RSG',
            date: '15 Septembre 2025',
            readTime: '12 min',
            image: '/1..png',
          },
          {
            id: '3',
            title: 'Partenariat stratégique avec l\'Union Africaine',
            date: '10 Septembre 2025',
            readTime: '6 min',
            image: '/2.png',
          },
        ],
      };
    } else if (articleId === '4') {
      return {
        id: articleId,
        title: 'POINTS DE VENTE DISPONIBLES',
        subtitle: 'Farine de maïs de qualité à prix avantageux',
        author: 'Réserve Stratégique Générale',
        authorRole: 'Service Commercial',
        date: '1 Novembre 2025',
        readTime: '3 min',
        views: 2143,
        category: 'Rapport',
        image: '/article4.jpeg',
        content: `
          <h2>Offre spéciale - Farine de maïs</h2>
          <p>Pour vous procurer de la farine de maïs de 25 kg à seulement 35 000 FC, rendez-vous dans nos différents points de vente de la Réserve Stratégique Générale. Ne manquez pas cette offre !</p>

          <h2>Qualité garantie</h2>
          <p>Tous nos produits sont soumis à des contrôles de qualité rigoureux pour assurer votre satisfaction. La farine de maïs proposée répond aux normes nationales et internationales de qualité alimentaire.</p>

          <h2>Disponibilité</h2>
          <p>Nos points de vente sont ouverts du lundi au samedi, de 8h à 18h. Nous disposons de stocks réguliers pour répondre à votre demande.</p>

          <h2>Avantages de nos produits</h2>
          <ul>
            <li><strong>Prix compétitif:</strong> 35 000 FC pour 25 kg</li>
            <li><strong>Qualité supérieure:</strong> Contrôle qualité strict</li>
            <li><strong>Disponibilité:</strong> Stock régulier</li>
            <li><strong>Accessibilité:</strong> Plusieurs points de vente</li>
          </ul>

          <h2>Comment nous rejoindre</h2>
          <p>Visitez nos différents points de vente répartis à travers la ville. Notre personnel qualifié est à votre disposition pour vous conseiller et vous servir.</p>

          <h2>Engagement envers vous</h2>
          <p>La Réserve Stratégique Générale s'engage à fournir des produits alimentaires de qualité à des prix justes et accessibles à tous les citoyens congolais.</p>
        `,
        relatedArticles: [
          {
            id: '1',
            title: 'L\'équipe de la Coordination de la RSG',
            date: '19 Septembre 2025',
            readTime: '6 min',
            image: '/article1.2.jpeg',
          },
          {
            id: '5',
            title: 'Discussions franches avec les cadres et agents',
            date: '6 Août 2025',
            readTime: '5 min',
            image: '/article5.jpeg',
          },
          {
            id: '2',
            title: 'Rapport annuel 2025 de la RSG',
            date: '15 Septembre 2025',
            readTime: '12 min',
            image: '/1..png',
          },
        ],
      };
    } else if (articleId === '5') {
      return {
        id: articleId,
        title: 'Dans un élan de rapprochement, la Coordination de la Réserve Stratégique Générale a engagé des discussions franches',
        subtitle: 'Rencontre motivationnelle avec les cadres et agents',
        author: 'Coordination de la RSG',
        authorRole: 'Direction Générale',
        date: '6 Août 2025',
        readTime: '5 min',
        views: 1843,
        category: 'Actualités',
        image: '/article5.jpeg',
        content: `
          <h2>Rencontre de rapprochement et de motivation</h2>
          <p>Dans un élan de rapprochement, la Coordination de la Réserve Stratégique Générale a engagé des discussions franches et ouvertes avec tous les cadres et agents, ce mercredi 6 août 2025, dans la cour de l'institution, en vue de motiver les équipes et les encourager à doubler d'efforts dans leurs missions.</p>

          <h2>Reconnaissance des efforts accomplis</h2>
          <p>Parallèlement, elle a salué, avec reconnaissance, les efforts déjà accomplis par chacun dans l'atteinte des objectifs fixés pour le premier semestre. Cette reconnaissance est un témoignage de l'engagement et du dévouement de chaque membre de l'équipe.</p>

          <h2>Gratitude mutuelle</h2>
          <p>À leur tour, les cadres et agents ont exprimé toute leur profonde gratitude à la Coordination pour l'amélioration de leurs conditions de travail. Cette dynamique positive crée un environnement de travail favorable et productif.</p>

          <h2>Objectifs pour le second semestre</h2>
          <p>Cette rencontre a également permis de définir les objectifs pour le second semestre et de renforcer l'engagement collectif envers la mission de la RSG. L'équipe s'engage à poursuivre ses efforts pour atteindre les cibles fixées.</p>

          <h2>Importance de la communication interne</h2>
          <p>Ces échanges directs entre la direction et les équipes renforcent la cohésion et la transparence au sein de l'institution. Ils permettent d'identifier les défis, de partager les succès et de construire une culture organisationnelle positive.</p>

          <h2>Engagement collectif</h2>
          <p>La Coordination réaffirme son engagement envers l'amélioration continue des conditions de travail et la valorisation du travail de chaque agent. Ensemble, nous construisons une RSG plus forte et plus efficace.</p>
        `,
        relatedArticles: [
          {
            id: '1',
            title: 'L\'équipe de la Coordination de la RSG',
            date: '19 Septembre 2025',
            readTime: '6 min',
            image: '/article1.2.jpeg',
          },
          {
            id: '4',
            title: 'POINTS DE VENTE DISPONIBLES',
            date: '1 Novembre 2025',
            readTime: '3 min',
            image: '/article4.jpeg',
          },
          {
            id: '2',
            title: 'Rapport annuel 2025 de la RSG',
            date: '15 Septembre 2025',
            readTime: '12 min',
            image: '/1..png',
          },
        ],
      };
    }
    // Default article
    return {
      id: articleId,
      title: 'Article non trouvé',
      subtitle: 'Cet article n\'existe pas',
      author: 'RSG',
      authorRole: 'Administrateur',
      date: '1 Novembre 2025',
      readTime: '1 min',
      views: 0,
      category: 'Erreur',
      image: '/1..png',
      content: '<h2>Article non trouvé</h2><p>Désolé, l\'article que vous recherchez n\'existe pas.</p>',
      relatedArticles: [],
    };
  };

  const article = getArticle();

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header with Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link href="/public/actualites" className="flex items-center gap-2 text-primary-blue hover:text-primary-blue/80 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-semibold">Retour</span>
          </Link>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-lg transition-all ${
                isBookmarked
                  ? 'bg-primary-blue/10 text-primary-blue'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
            >
              <Share2 size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary-blue rounded-full" />
            <span className="text-primary-blue font-semibold text-sm">{article.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8">{article.subtitle}</p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-200">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue/60 rounded-full flex items-center justify-center text-white font-bold">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{article.author}</p>
                <p className="text-sm text-gray-600">{article.authorRole}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-gray-200" />

            {/* Date */}
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} className="text-primary-blue" />
              <span>{article.date}</span>
            </div>

            {/* Read Time */}
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={18} className="text-primary-blue" />
              <span>{article.readTime}</span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-2 text-gray-600">
              <Eye size={18} className="text-primary-blue" />
              <span>{article.views.toLocaleString()} vues</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: article.content
                .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">')
                .replace(/<h3>/g, '<h3 class="text-2xl font-bold text-gray-800 mt-6 mb-3">')
                .replace(/<p>/g, '<p class="mb-4 text-gray-700 leading-relaxed">')
                .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4 space-y-2">')
                .replace(/<li>/g, '<li class="text-gray-700">')
                .replace(/<strong>/g, '<strong class="font-bold text-gray-900">')
                .replace(/<em>/g, '<em class="italic text-gray-800">'),
            }}
          />
        </motion.div>

        {/* Engagement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-4 py-8 border-t border-b border-gray-200 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              isLiked
                ? 'bg-primary-blue/10 text-primary-blue'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <ThumbsUp size={20} fill={isLiked ? 'currentColor' : 'none'} />
            <span>{likes}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
          >
            <MessageCircle size={20} />
            <span>Commenter</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all ml-auto"
          >
            <Share2 size={20} />
            <span>Partager</span>
          </motion.button>
        </motion.div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-blue/5 to-primary-blue/10 rounded-2xl p-8 mb-12 border border-primary-blue/20"
        >
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-primary-blue/60 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
              {article.author.charAt(0)}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{article.author}</h3>
              <p className="text-primary-blue font-semibold mb-3">{article.authorRole}</p>
              <p className="text-gray-700 leading-relaxed">
                Avec plus de 20 ans d'expérience dans la gestion stratégique et la gouvernance institutionnelle, 
                {article.author} dirige les initiatives majeures de la RSG pour moderniser les opérations et renforcer 
                l'impact national.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Articles Connexes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {article.relatedArticles.map((relatedArticle, index) => (
              <motion.div
                key={relatedArticle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Link href={`/public/actualites/${relatedArticle.id}`}>
                  <div className="relative h-40 overflow-hidden bg-gray-200">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-blue transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {relatedArticle.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {relatedArticle.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Restez informé</h2>
          <p className="text-lg text-blue-100 mb-8">
            Abonnez-vous à notre newsletter pour recevoir les dernières actualités et mises à jour
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="px-6 py-3 rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-primary-yellow"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-yellow text-primary-blue font-bold rounded-lg hover:bg-primary-yellow/90 transition-all"
            >
              S'abonner
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
