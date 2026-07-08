import styles from "./header.module.scss";
import KeyBinds from "@/service/keybinds";
import CircleLink from "@/ui/CircleLink/CircleLink";
import Title from "@/ui/Title/Title"; // новый импорт

export default function Header(props: { title: string }) {
  return (
    <div className={styles.bar}>
      <CircleLink />
      <Title>{props.title}</Title>
      <KeyBinds />
    </div>
  );
}