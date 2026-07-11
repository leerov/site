import Page from '@/ui/Page/Page';
import ContentOnPage from '@/ui/PageContent/ContentOnPage';
import Card from '@/ui/Card/card';
import FillWidth from '@/ui/FillWidth/FillWidth';
import Verticalbar from '@/ui/Verticalbar/verticalbar';
import Title from '@/ui/Title/Title';
import SocialIcons from '@/ui/SocialIcons/SocialIcons';
import Spacer from '@/ui/Spacer/Spacer';
import Divider from '@/ui/Divider/Divider';

export const metadata = {
  title: 'Contacts',
  description: 'Personal site',
};

export default function Contacts() {
  return (
    <Page title="Contacts">
      <ContentOnPage>
        <Card>
          <FillWidth>
            <Verticalbar>
              <Title>My Contacts</Title>
              <Spacer />
              <Divider />
              <Spacer />
              <p><strong>Phone:</strong> <a href="tel:+79831261885">+7 (983) 126-18-85</a></p>
              <p><strong>Email:</strong> <a href="mailto:ZhmulevVV@gmail.com">ZhmulevVV@gmail.com</a></p>
              <p><strong>Telegram:</strong> <a href="https://t.me/harveyfa">@harveyfa</a></p>
              <Spacer />
              <Divider />
              <Spacer />
              <p><em>The contacts on this page are intended for business communication.</em></p>
              <Spacer />
            </Verticalbar>
          </FillWidth>
        </Card>
      </ContentOnPage>
    </Page>
  );
}
