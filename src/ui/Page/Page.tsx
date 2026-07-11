import React from 'react';
import Header from '@/ui/Header/header';
import styles from './Page.module.scss';

interface PageProps {
  title: string;
  children?: React.ReactNode;
  variant?: 'default' | 'home';
  className?: string;
}

export default function Page({ title, children, variant = 'default', className = '' }: PageProps) {
  return (
    <main
      className={`${styles.main} ${styles.home} ${className}`}
    >
      <Header title={title} />
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </main>
  );
}