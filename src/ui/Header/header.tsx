import styles from "./header.module.scss";
import Link from "next/link";
import { Yanone_Kaffeesatz } from "next/font/google";

const yanone_Kaffeesatz = Yanone_Kaffeesatz({ subsets: ["latin"], weight: "400" });

export default function Header(props: { title: string }) {
    return (
        <div className={styles.bar}>
            <Link href="/circle" className={styles.circle}>
                <div className={styles.circle_border_wrap}>
                    <div className={styles.circle_center}></div>
                </div>
            </Link>

            <div className={`${styles.title} ${yanone_Kaffeesatz.className}`}>
                {props.title}
            </div>

            <div style={{ width: '3rem' }} />
        </div>
    );
};
