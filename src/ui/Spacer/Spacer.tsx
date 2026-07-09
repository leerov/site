import styles from './Spacer.module.scss';

interface SpacerProps {
  size?: number;
}

export default function Spacer({ size = 1 }: SpacerProps) {
  return <div className={styles.spacer} style={{ height: `${size}em` }} />;
}