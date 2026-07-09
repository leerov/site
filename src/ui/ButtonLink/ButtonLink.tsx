import Link from 'next/link';
import styles from './ButtonLink.module.scss';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function ButtonLink({ href, children, external = false }: ButtonLinkProps) {
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Link href={href} className={styles.button} {...props}>
      {children}
    </Link>
  );
}