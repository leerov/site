import Link from "next/link";
import styles from "./iconlink.module.scss";

interface IconLinkProps {
  href: string;
  icon?: string;
  children: React.ReactNode;
}

export default function IconLink({ href, icon, children }: IconLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </Link>
  );
}
