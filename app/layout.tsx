import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/global/navbar';
import TopNav from '@/components/global/top-nav';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Drasoft - Innovative Software Solutions',
  description:
    "Drasoft: Delivering SaaS applications, mobile apps, and cloud-based solutions for businesses worldwide. Let's achieve together.",
  keywords: [
    'Drasoft',
    'web development Bangladesh',
    'software development Bangladesh',
    'SaaS application development',
    'mobile app development',
    'enterprise software solutions',
    'cloud-based application development',
    'e-commerce platform development',
    'responsive websites',
    'global software development',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Drasoft - Innovative Software Solutions',
    description:
      'Drasoft: Delivering SaaS applications, mobile apps, and cloud-based solutions for businesses worldwide.',
    images: ['/drasoft.png'],
  },
  openGraph: {
    title: 'Drasoft - Innovative Software Solutions',
    description:
      'Delivering SaaS applications, mobile apps, and cloud-based solutions for businesses worldwide.',
    url: 'https://drasoft.com',
    images: [
      {
        url: '/drasoft.png',
        width: 1200,
        height: 630,
        alt: 'Drasoft Logo',
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Geo-Location Metadata */}
        <meta name='geo.region' content='BD' />
        <meta name='geo.placename' content='Bangladesh' />
        <meta name='geo.position' content='23.6850;90.3563' />
        <meta name='ICBM' content='23.6850, 90.3563' />

        {/* JSON-LD Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              url: 'https://drasoft.com',
              name: 'Drasoft - Innovative Software Solutions',
              description:
                'Delivering SaaS applications, mobile apps, and cloud-based solutions for businesses worldwide.',
              publisher: {
                '@type': 'Organization',
                name: 'Drasoft',
                logo: 'https://drasoft.com/logo.png',
              },
            }),
          }}
        />
      </head>
      <body className={`${outfit.className}`}>
        <div>
          <TopNav />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
