import Image from 'next/image';
import { AiFillCopy } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

export const getStaticProps = async () => {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLIWGHKiGCTxSEXgpAfdBXXJWC0YGA4R0v&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60
  };
};

export default function YouTube({ data }: { data: any }) {
  return (
    <div className="youtube section" id="youtube">
      <div className="container mx-auto mb-20 w-full">
        <div className="portfolio-header">
          <div className="portfolio-title">
            <h3 className="sub-heading">YouTube</h3>
            <h1 className="heading">Latest Videos</h1>
          </div>
          
          <div className="filter-btns">
            <button className="filter-btn" data-filter="all">All</button>
            <button className="filter-btn" data-filter=".PLIWGHKiGCTxSEXgpAfdBXXJWC0YGA4R0v">Unity</button>
            <button className="filter-btn" data-filter=".backend">Godot</button>
            <button className="filter-btn" data-filter=".others">Others</button>
          </div>
        </div>

        <div className="youtube-videos">
          {data.items.map((item: { id: any; snippet?: {} | undefined; }) => {
            const { id, snippet = {} } = item;
            const { title, thumbnails = {}, resourceId, playlistId } = snippet as { title: string, thumbnails: { high: { url: string } }, resourceId: { videoId: string }, playlistId: string };
            const { high = { url: '' } } = thumbnails as { high: { url: string } };

            return (
              <div key={id} className={`yt-card mix ${playlistId}`}>
                <div className="yt-image">
                  <Image src={high.url} width={480} height={360} alt={title} />
                  <div className="yt-overlay">
                    <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noreferrer" className="yt-icon yt" aria-label="Watch video on YouTube">
                      <FaPlay />
                      <div className="tooltip">Watch it on YouTube</div>
                    </a>
                    <a href="#!" className="yt-icon copy" aria-label="Copy video link">
                      <AiFillCopy />
                      <div className="tooltip">Copy link to Share</div>
                    </a>
                  </div>
                </div>
                <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noreferrer" className='font-semibold text-center link' aria-label={`Watch ${title} on YouTube`}>
                  {title}
                  <div className="tooltip">Watch it on YouTube</div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
