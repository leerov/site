import Page from '../ui/Page/Page';
import Center from '@/ui/Center/Center';
import Verticalbar from '../ui/Verticalbar/verticalbar';
import Card from '../ui/Card/card';
import Horizontalbar from '../ui/Horizontalbar/horizontalbar';
import Title from '../ui/Title/Title';
import Avatar from '@/ui/Avatar/Avatar';
import ContentOnPage from '@/ui/PageContent/ContentOnPage';
import Spacer from '@/ui/Spacer/Spacer';
import Divider from '@/ui/Divider/Divider';
import FillWidth from '@/ui/FillWidth/FillWidth';
import SocialIcons from '@/ui/SocialIcons/SocialIcons';

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
          <FillWidth>
            <Horizontalbar>
              <Avatar src="https://gravatar.com/userimage/268007450/e407f21c2b0cd306e1f0959df9fdef97.jpeg?size=524" alt="me" size={64} />
              <Title>Hi! I am Vladimir and I can do something sometimes :)</Title>
            </Horizontalbar>
            <Spacer></Spacer>
            <Divider></Divider>
            <Spacer></Spacer>
            <SocialIcons />
            <Spacer></Spacer>
            <Divider></Divider>
          </FillWidth>
        </Card>
      </ContentOnPage>
    </Page>
  );
}