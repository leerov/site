import styles from './Center.module.scss';

interface CenterProps {
  children: React.ReactNode;
  className?: string;
}

export default function Center({ children, className = '' }: CenterProps) {
  return (
    <div className={`${styles.center} ${className}`}>
      {children}
    </div>
  );
}