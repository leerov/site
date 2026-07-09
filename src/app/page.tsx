import Page from '../ui/Page/Page';
import Center from '@/ui/Center/Center';
import Verticalbar from '../ui/Verticalbar/verticalbar';
import Card from '../ui/Card/card';
import Horizontalbar from '../ui/Horizontalbar/horizontalbar';
import Title from '../ui/Title/Title';
import Avatar from '@/ui/Avatar/Avatar';
import ButtonLink from '@/ui/ButtonLink/ButtonLink';
import ContentOnPage from '@/ui/PageContent/ContentOnPage';

export const metadata = {
  title: {
    default: "Home - Leerov",
    template: "%s - Leerov"
  },
  description: "Personal site",
};

export default function Home() {
  return (
    <Page title="Home" variant="home">
      <ContentOnPage>
        <Card>
          <Horizontalbar>
            <Avatar src="https://gravatar.com/userimage/268007450/e407f21c2b0cd306e1f0959df9fdef97.jpeg?size=524" alt="me" size={64} />
            <Title>Hi! I am Vladimir and I can do something sometimes :)</Title>
          </Horizontalbar>
          <Horizontalbar>
            <p>📍 From Novosibirsk, Russia</p>
          </Horizontalbar>
          <Horizontalbar>
            <ButtonLink href="https://github.com/leerov" external>GitHub</ButtonLink>
            <ButtonLink href="https://t.me/leerov" external>Telegram</ButtonLink>
            <ButtonLink href="https://lichess.org/@/Leerov" external>Lichess</ButtonLink>
          </Horizontalbar>
          <br />
        </Card>
      </ContentOnPage>
    </Page>
  );
}