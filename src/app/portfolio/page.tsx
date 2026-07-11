import ContentOnPage from '@/ui/PageContent/ContentOnPage';
import Card from '@/ui/Card/card';
import FillWidth from '@/ui/FillWidth/FillWidth';
import Verticalbar from '@/ui/Verticalbar/verticalbar';
import Title from '@/ui/Title/Title';
import Spacer from '@/ui/Spacer/Spacer';
import Divider from '@/ui/Divider/Divider';
import Link from 'next/link';
import Page from '@/ui/Page/Page';
import styles from './page.module.scss';

const projects = [
  {
    title: 'Project Alpha',
    slug: 'project-alpha',
    image: 'https://picsum.photos/seed/alpha/400/300',
  },
  {
    title: 'Project Beta',
    slug: 'project-beta',
    image: 'https://picsum.photos/seed/beta/400/300',
  },
  {
    title: 'Project Gamma',
    slug: 'project-gamma',
    image: 'https://picsum.photos/seed/gamma/400/300',
  },
  {
    title: 'Project Delta',
    slug: 'project-delta',
    image: 'https://picsum.photos/seed/delta/400/300',
  },
];

export const metadata = {
  title: 'Portfolio',
  description: 'Personal site',
};

export default function Portfolio() {
  return (
    <Page title="Portfolio">
      <ContentOnPage>
        <Card>
          <FillWidth>
            <Verticalbar>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', width: '100%' }}>
                {projects.map((project) => (
                  <Link href={`/articles/${project.slug}`} key={project.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={styles.projectCard}>
                      <img
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                      <div style={{ padding: '0.75rem', textAlign: 'center', background: 'rgba(0,0,0,0.3)' }}>
                        <h3 style={{ margin: 0 }}>{project.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Verticalbar>
          </FillWidth>
        </Card>
      </ContentOnPage>
    </Page>
  );
}
