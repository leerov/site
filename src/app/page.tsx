import type { Metadata } from "next";
import Header from "@/ui/Header/header";
import Card from "@/ui/Card/card";
import ContentOnPage from "@/ui/PageContent/ContentOnPage";

export const metadata: Metadata = {
  title: {
    default: "Home - Leerov",
    template: "%s - Leerov"
  },
  description: "Personal site",
};

export default function Home() {
  return (
    <main>
      <Header title='Home' />
      <ContentOnPage>
        <Card>
          <h2>Welcome to Leerov</h2>
          <p>
            This is a personal website built with modern technologies. 
            Explore the sections using the navigation menu above.
          </p>
          <p>
            Features include articles, calendar, photos, games, and more. 
            The design supports both light and dark modes automatically 
            based on your system preferences.
          </p>
        </Card>
      </ContentOnPage>
    </main>
  );
}
