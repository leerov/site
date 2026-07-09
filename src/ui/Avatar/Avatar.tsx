import styles from './Avatar.module.scss';

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export default function Avatar({ src, alt, size = 64 }: AvatarProps) {
  return (
    <div className={styles.avatar} style={{ width: size, height: size }}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
}