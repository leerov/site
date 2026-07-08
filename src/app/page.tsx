import Page from '@/ui/Page/Page';
import ContentOnPage from '@/ui/PageContent/ContentOnPage';
import Verticalbar from '@/ui/Verticalbar/verticalbar';
import Card from '@/ui/Card/card';

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
        <Card></Card>
        </Verticalbar>
        <Verticalbar>  </Verticalbar>
      </ContentOnPage>
    </Page>
  );
}