import type { Metadata } from 'next';
import { Manrope, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/global/navbar';
import TopNav from '@/components/global/top-nav';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Artif software',
  description: 'Artif software',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang='en'>
      <body className={`${outfit.className}`}>
        <div className=''>
          <TopNav />
          <Navbar />

          {children}
        </div>
      </body>
    </html>
  );
}
