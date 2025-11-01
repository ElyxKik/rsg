'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">À propos</h3>
            <p className="text-sm text-gray-200">
              La Réserve Stratégique Générale est un outil stratégique de la souveraineté alimentaire nationale.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/public/presentation" className="text-white underline hover:text-primary-yellow transition-colors">Présentation</Link></li>
              <li><Link href="/public/gouvernance" className="text-white underline hover:text-primary-yellow transition-colors">Gouvernance</Link></li>
              <li><Link href="/public/programmes" className="text-white underline hover:text-primary-yellow transition-colors">Programmes</Link></li>
              <li><Link href="/public/contact" className="text-white underline hover:text-primary-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Email: info@rsg.gov.cd</li>
              <li>Téléphone: +243 1 234 5678</li>
              <li>Adresse: Av. Roi Beaudouin, Gombe/Kinshasa</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white underline hover:text-primary-yellow transition-colors">Facebook</a></li>
              <li><a href="#" className="text-white underline hover:text-primary-yellow transition-colors">Twitter</a></li>
              <li><a href="#" className="text-white underline hover:text-primary-yellow transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-400 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          <p>&copy; 2025 Réserve Stratégique Générale. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-white underline hover:text-primary-yellow transition-colors">Politique de confidentialité</Link>
            <Link href="#" className="text-white underline hover:text-primary-yellow transition-colors">Conditions d'utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
