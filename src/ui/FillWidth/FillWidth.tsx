import styles from './FillWidth.module.scss';

export default function FillWidth({ children }: { children: React.ReactNode }) {
  return <div className={styles.fillWidth}>{children}</div>;
}