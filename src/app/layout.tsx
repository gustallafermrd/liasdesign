import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lias Design',
  description: 'Hacemos tus sueños realidad',
  openGraph: {
    title: 'Lias Design',
    description: 'Hacemos tus sueños realidad',
    url: 'https://yourdomain.com',
    siteName: 'Lias Design',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lias Design',
    description: 'Hacemos tus sueños realidad',
    images: ['/images/big_banner.png'],
    site: '@yourtwitter',
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
