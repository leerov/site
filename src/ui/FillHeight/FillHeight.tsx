import styles from './FillHeight.module.scss';

export default function FillHeight({ children }: { children: React.ReactNode }) {
  return <div className={styles.fillHeight}>{children}</div>;
}