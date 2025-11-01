import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Réserve Stratégique Générale - RSG',
  description: 'Plateforme numérique officielle de la Réserve Stratégique Générale',
  keywords: ['RSG', 'Réserve Stratégique', 'RDC', 'Gouvernement'],
  authors: [{ name: 'RSG' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://rsg.gov.cd',
    siteName: 'RSG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
