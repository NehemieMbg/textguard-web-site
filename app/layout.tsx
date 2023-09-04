import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from './components/Nav/Nav';
import Navigation from './components/Navigation/Navigation';
import Providers from './providers';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '@nehemie/textguard - Helps you validate datas',
  description: 'Data validation library',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${inter.className} min-h-screen bg-dark-gray grid grid-dispaly`}
        >
          {/* Headers */}
          <Nav />
          {/* Headers */}

          <main className="flex  w-full bg-dark-gray text-light-gray  font-light overflow-y-scroll">
            {children}
          </main>

          <footer className="">
            <Footer />
          </footer>
        </body>
      </Providers>
    </html>
  );
}
