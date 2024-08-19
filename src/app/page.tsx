import Head from 'next/head';
import YouTubeCard from '../components/YouTubeCard';
import { About, Contact, Header, Services, Skills, Testimonials, Work } from '../sections';
import Layout from '../sections/Layout/Layout';

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

export default async function Home() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLIWGHKiGCTxSEXgpAfdBXXJWC0YGA4R0v&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();

  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="shortcut-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Abid Al Wassie | Portfolio Website" />
        <title>Abid Al Wassie | Portfolio</title>
      </Head>
      <Header />
      <About />
      <Skills />
      <YouTubeCard data={data} />
      <Services />
      <Work />
      <Contact />
      <Testimonials />
    </Layout>
  );
}
