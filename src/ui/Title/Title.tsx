import styles from "./Title.module.scss";
import { Yanone_Kaffeesatz } from "next/font/google";

const yanone_Kaffeesatz = Yanone_Kaffeesatz({ subsets: ["latin"], weight: "400" });

interface TitleProps {
  children: React.ReactNode;
  // можно добавить другие пропсы, например, className для дополнительных стилей
}

export default function Title({ children }: TitleProps) {
  return (
    <div className={styles.title}>
      <div className={yanone_Kaffeesatz.className}>
        {children}
      </div>
    </div>
  );
}