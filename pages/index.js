import { getHome, getRecentsPosts } from '../lib/api';

import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import RecentsPosts from '../components/RecentsPosts';
import SeeToo from '../components/SeeToo/SeeToo';

export default function Home({homeData: { pages }, recentsPosts}) {
  return (
    <Layout>
        <main>
          <Hero cards={pages.nodes[0].settingsHome.homeHeroRepeater}></Hero>
          <RecentsPosts title={pages.nodes[0].settingsHome.homeRecentTitle} cards={recentsPosts.edges} />
          <SeeToo cards={[
            { link: "#", text: 'Menu item 1' },
            { link: "#", text: 'Menu item 2' },
            { link: "#", text: 'Menu item 3' }]}/>
        </main>
    </Layout>
  )
}


export async function getStaticProps() {
  const homeData = await getHome();
  const recentsPosts = await getRecentsPosts();
  return {
    props: {
      homeData,
      recentsPosts
    }
  };
}