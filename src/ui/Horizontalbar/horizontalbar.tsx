import styles from "./horizontalbar.module.scss";
import { Yanone_Kaffeesatz } from "next/font/google"

const yanone_Kaffeesatz = Yanone_Kaffeesatz({ subsets: ["latin"], weight: "400" });

export default function horizontalbar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return <>

        <div className={styles.horizontalbar} >
            {children}
        </div >

    </>
};
