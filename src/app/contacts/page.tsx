import styles from "./page.module.scss";
import type { Metadata } from "next";
import Header from "@/ui/Header/header";
import Card from "@/ui/Card/card";
import Verticalbar from "@/ui/Verticalbar/verticalbar";
import ContentOnPage from "@/ui/PageContent/ContentOnPage";
import IconLink from "@/ui/IconLink/iconlink";

export const metadata: Metadata = {
    title: "Contacts - Leerov",
    description: "Контактная информация Жмулева Владимира Владимировича",
};

export default function Contacts() {

    return (
        <main className={styles.main}>
            <Header title='Contacts' />
            <ContentOnPage>
                <Verticalbar>
                    <Card>
                        <h2>Жмулев Владимир Владимирович</h2>
                        <p><strong>Никнейм:</strong> leerov</p>
                        <p><strong>Локация:</strong> Новосибирск, Россия</p>
                    </Card>
                </Verticalbar>
                <Verticalbar>
                    <Card>
                        <h3>Связь в интернете</h3>
                        <ul>
                            <li>
                                <IconLink href="https://github.com/leerov" icon="github">
                                    GitHub: @leerov
                                </IconLink>
                            </li>
                            <li>
                                <IconLink href="https://t.me/leerovrubot" icon="telegram">
                                    Telegram Bot: @leerovrubot
                                </IconLink>
                            </li>
                        </ul>
                    </Card>
                </Verticalbar>
                <Verticalbar>
                    <Card>
                        <h3>Проекты и ресурсы</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/leerov/leerov" target="_blank" rel="noopener noreferrer">
                                    leerov.ru — персональный сайт
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/leerov/PPhone" target="_blank" rel="noopener noreferrer">
                                    PPhone — проект на TypeScript
                                </a>
                            </li>
                            <li>
                                <a href="https://gist.github.com/leerov" target="_blank" rel="noopener noreferrer">
                                    Gists — скрипты и заметки
                                </a>
                            </li>
                        </ul>
                    </Card>
                </Verticalbar>
            </ContentOnPage>
        </main>
    );
}
