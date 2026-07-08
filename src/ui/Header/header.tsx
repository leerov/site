import styles from "./header.module.scss";
import { Yanone_Kaffeesatz } from "next/font/google";
import KeyBinds from "@/service/keybinds";
import CircleLink from "@/ui/CircleLink/CircleLink"; // импорт

const yanone_Kaffeesatz = Yanone_Kaffeesatz({ subsets: ["latin"], weight: "400" });

export default function Header(props: any) {
  return (
    <>
      <div className={styles.bar}>
        <CircleLink />  {/* вместо Link */}

        <div className={styles.title}>
          <div className={yanone_Kaffeesatz.className}>
            {props.title}
          </div>
        </div>

        <KeyBinds />
      </div>
    </>
  );
}