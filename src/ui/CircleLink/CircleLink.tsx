// src/ui/CircleLink/CircleLink.tsx
"use client";

import Link from "next/link";
import styles from "./CircleLink.module.scss";

export default function CircleLink() {
  return (
    <Link href="/circle" className={styles.circle}>
      <div className={styles.circle_border_wrap}></div>
    </Link>
  );
}