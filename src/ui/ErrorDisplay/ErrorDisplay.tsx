'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ErrorDisplay.module.scss';
import { Yanone_Kaffeesatz } from 'next/font/google';

const yanone = Yanone_Kaffeesatz({ subsets: ['latin'], weight: '400' });

interface ErrorDisplayProps {
  code: number;
  message?: string;
}

export default function ErrorDisplay({ code, message }: ErrorDisplayProps) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      router.push('/');
      return;
    }
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <main className={styles.container}>
      <div className={`${yanone.className} ${styles.content}`}>
        <h1 className={styles.code}>{code}</h1>
        {message && <p className={styles.message}>{message}</p>}
        <p className={styles.redirect}>
          Перенаправление на главную через {countdown} секунд{countdown !== 1 ? 'ы' : 'у'}...
        </p>
      </div>
    </main>
  );
}