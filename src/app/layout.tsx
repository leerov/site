import './globals.scss';
import { ReactNode } from 'react';
import Ribbon from '@/ui/Ribbon/Ribbon';
import { Yanone_Kaffeesatz, Hack } from 'next/font/google';

const yanone = Yanone_Kaffeesatz({ subsets: ['latin'], weight: '400' });
const hack = Hack({ subsets: ['latin'] });

export const metadata = {
  title: 'Leerov',
  description: 'Personal site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={hack.className} style={{ '--font-yanone': yanone.style.fontFamily } as React.CSSProperties}>
      <body>
        {children}
        <Ribbon />
      </body>
    </html>
  );
}