import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '이명필_포트폴리오',
  description: '이명필_포트폴리오'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: 'rgba(36,36,36,1)' }}>
        {children}
      </body>
    </html>
  );
}
