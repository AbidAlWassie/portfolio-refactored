import YouTubeCard from '../components/YouTubeCard';
import { About, Contact, Header, Services, Skills, Techstack, Testimonials, Work } from '../layouts';
import Layout from '../layouts/Layout/Layout';

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

export default async function Home() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLIWGHKiGCTxSEXgpAfdBXXJWC0YGA4R0v&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();

  return (
    <Layout>
      <Header />
      <About />
      <Skills />
      <Techstack />
      <YouTubeCard data={data} />
      <Services />
      <Work />
      <Contact />
      <Testimonials />
    </Layout>
  );
}
