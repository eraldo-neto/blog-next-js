import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import RecentsPosts from '../components/RecentsPosts';
import SeeToo from '../components/SeeToo/SeeToo';

export default function Home() {
  return (
    <Layout>
        <main>
          <Hero></Hero>
          <RecentsPosts cards={[
            { link: "#", text: 'Menu item 1' },
            { link: "#", text: 'Menu item 2' },
            { link: "#", text: 'Menu item 3' },
            { link: "#", text: 'Menu item 4' }]} />
          <SeeToo cards={[
            { link: "#", text: 'Menu item 1' },
            { link: "#", text: 'Menu item 2' },
            { link: "#", text: 'Menu item 3' }]}/>
        </main>
    </Layout>
  )
}