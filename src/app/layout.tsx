import './globals.scss';
import { ReactNode } from 'react';
import Ribbon from '@/ui/Ribbon/Ribbon';

export const metadata = {
  title: 'Leerov',
  description: 'Personal site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Ribbon />
      </body>
    </html>
  );
}