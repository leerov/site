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
        <Verticalbar> <Card> 123</Card> </Verticalbar>
        <Verticalbar>
          <Card>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla consequuntur illum quibusdam quis corporis doloribus sapiente ipsum! Repudiandae praesentium ad quis. Eaque non hic incidunt voluptatum quasi porro minima ipsam.</Card>
        </Verticalbar>
        <Verticalbar> <Card> 123</Card> </Verticalbar>
      </ContentOnPage>
    </Page>
  );
}