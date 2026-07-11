import Page from '@/ui/Page/Page';
import ContentOnPage from '@/ui/PageContent/ContentOnPage';
import Card from '@/ui/Card/card';
import FillWidth from '@/ui/FillWidth/FillWidth';
import Verticalbar from '@/ui/Verticalbar/verticalbar';
import Title from '@/ui/Title/Title';
import Spacer from '@/ui/Spacer/Spacer';
import Divider from '@/ui/Divider/Divider';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

const projectData: Record<string, { title: string; description: string }> = {
  'project-alpha': {
    title: 'Project Alpha',
    description: 'This is the description for Project Alpha. It is an innovative solution for data processing.',
  },
  'project-beta': {
    title: 'Project Beta',
    description: 'Project Beta focuses on machine learning and predictive analytics.',
  },
  'project-gamma': {
    title: 'Project Gamma',
    description: 'A web application built with Next.js and TypeScript, demonstrating full-stack capabilities.',
  },
  'project-delta': {
    title: 'Project Delta',
    description: 'Project Delta is a mobile-first design system for modern applications.',
  },
};

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug,
  }));
}
export default function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;
  const project = projectData[slug];

  if (!project) {
    return (
      <Page title="Not Found">
        <ContentOnPage>
          <Card>
            <FillWidth>
              <Verticalbar>
                <Title>Article not found</Title>
                <Spacer />
                <Divider />
                <Spacer />
                <p>Sorry, the article you are looking for does not exist.</p>
              </Verticalbar>
            </FillWidth>
          </Card>
        </ContentOnPage>
      </Page>
    );
  }

  return (
    <Page title={project.title}>
      <ContentOnPage>
        <Card>
          <FillWidth>
            <Verticalbar>
              <Title>{project.title}</Title>
              <Spacer />
              <Divider />
              <Spacer />
              <p>{project.description}</p>
              <Spacer />
              <p><em>This is a placeholder article. More details will be added soon.</em></p>
            </Verticalbar>
          </FillWidth>
        </Card>
      </ContentOnPage>
    </Page>
  );
}