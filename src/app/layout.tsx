import './globals.scss';
import { ReactNode } from 'react';
import Ribbon from '@/ui/Ribbon/Ribbon';
import { Yanone_Kaffeesatz, JetBrains_Mono } from 'next/font/google';

const yanone = Yanone_Kaffeesatz({ subsets: ['latin'], weight: '400' });
const mono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata = {
  title: 'Leerov',
  description: 'Personal site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={mono.className} style={{ '--font-yanone': yanone.style.fontFamily } as React.CSSProperties}>
      <body>
        {children}
        <Ribbon />
      </body>
    </html>
  );
}