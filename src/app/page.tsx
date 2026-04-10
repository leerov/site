import styles from "./page.module.scss";
import type { Metadata } from "next";
import Header from "@/ui/Header/header";
import Card from "@/ui/Card/card";
import Verticalbar from "@/ui/Verticalbar/verticalbar";
import ContentOnPage from "@/ui/PageContent/ContentOnPage";
import IconLink from "@/ui/IconLink/iconlink";

export const metadata: Metadata = {
  title: {
    default: "Home - Leerov",
    template: "%s - Leerov"
  },
  description: "Персональный сайт Жмулева Владимира Владимировича",
};

export default function Home() {

  return (
    <main>
      <Header title='Home' />
      <ContentOnPage>
        <Verticalbar>
          <Card>
            <h2>Жмулев Владимир Владимирович</h2>
            <p><strong>Никнейм:</strong> leerov</p>
            <p><strong>Локация:</strong> Новосибирск</p>
            <p><strong>Статус:</strong> Открыт к предложениям о работе</p>
          </Card>
        </Verticalbar>
        <Verticalbar>
          <Card>
            <h3>Обо мне</h3>
            <p>
              Разработчик, увлечённый созданием современных веб-приложений и инструментов.
              Интересуюсь TypeScript, Next.js, Telegram Bot API и автоматизацией процессов.
            </p>
            <p>
              В свободное время работаю над open-source проектами и изучаю новые технологии.
            </p>
          </Card>
        </Verticalbar>
        <Verticalbar>
          <Card>
            <h3>Мои проекты</h3>
            <ul>
              <li><strong>PPhone</strong> — проект на TypeScript</li>
              <li><strong>Telegram</strong> — форк исходного кода Telegram для Android</li>
              <li><strong>leerov.ru</strong> — персональный сайт на Next.js 14 с интеграцией Telegram бота</li>
            </ul>
            <h4>Навыки и интересы</h4>
            <ul>
              <li>TypeScript / JavaScript</li>
              <li>Next.js / React</li>
              <li>Telegram Bot API</li>
              <li>Shell scripting (.zshrc, automation)</li>
              <li>Веб-скрапинг (Tampermonkey, Express.js)</li>
            </ul>
          </Card>
        </Verticalbar>
        <Verticalbar>
          <Card>
            <h3>Связь</h3>
            <p>
              <IconLink href="https://github.com/leerov" icon="github">
                GitHub: @leerov
              </IconLink>
            </p>
            <p>
              <IconLink href="/contacts" icon="email">
                Страница контактов
              </IconLink>
            </p>
          </Card>
        </Verticalbar>
      </ContentOnPage>
    </main>
  );
}
