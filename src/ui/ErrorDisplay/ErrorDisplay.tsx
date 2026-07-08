'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ErrorDisplay.module.scss';
import { Yanone_Kaffeesatz } from 'next/font/google';

const yanone = Yanone_Kaffeesatz({ subsets: ['latin'], weight: '400' });

interface ErrorDisplayProps {
  code: number; // например, 404 или 500
  message?: string; // опциональное пояснение
}

export default function ErrorDisplay({ code, message }: ErrorDisplayProps) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className={styles.container}>
      <div className={`${yanone.className} ${styles.content}`}>
        <h1 className={styles.code}>{code}</h1>
        {message && <p className={styles.message}>{message}</p>}
        <p className={styles.redirect}>Перенаправление на главную через 5 секунд...</p>
      </div>
    </main>
  );
}