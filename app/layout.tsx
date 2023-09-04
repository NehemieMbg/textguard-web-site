import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from './components/Nav/Nav';
import Navigation from './components/Navigation/Navigation';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className}`}>
          <Nav />
          <main className="flex  bg-dark-gray w-full text-light-gray font-light overflow-y-scroll">
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
