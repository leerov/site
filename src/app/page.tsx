import Page from '../ui/Page/Page';
import ContentOnPage from '../ui/PageContent/ContentOnPage';
import Verticalbar from '../ui/Verticalbar/verticalbar';
import Card from '../ui/Card/card';
import Horizontalbar from '../ui/Horizontalbar/horizontalbar';
import Title from '../ui/Title/Title';

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
        <Verticalbar>  </Verticalbar>
        <Verticalbar>
          <Card>
            <Horizontalbar>
              <img src="https://gravatar.com/avatar/f773d0322d54ff09798def90394c4a85e55cb92718d5b7404fa48b9866f9b6eb?v=1778415179000&size=256&d=initials" alt="me" />
              <Title>Hi! I am Vladimir and I can do something sometimes :)</Title>
            </Horizontalbar>
            <br />
                      
          </Card>
        </Verticalbar>
        <Verticalbar>  </Verticalbar>
      </ContentOnPage>
    </Page>
  );
}