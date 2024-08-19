import Image from 'next/image';
import { AiFillCopy } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';

interface YouTubeCardProps {
  data: {
    items: {
      id: string;
      snippet: {
        title: string;
        thumbnails: {
          high: {
            url: string;
          };
        };
        resourceId: {
          videoId: string;
        };
        playlistId: string;
      };
    }[];
  };
}

export default function YouTubeCard({ data }: YouTubeCardProps) {
  if (!data || !data.items || data.items.length === 0) {
    return <p>No videos available.</p>;
  }

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
          {data.items.map((item) => {
            const { id, snippet } = item;
            const { title, thumbnails, resourceId, playlistId } = snippet;
            const { high } = thumbnails;
            return (
              <div key={id} className={`yt-card mix ${playlistId}`}>
                <div className="yt-image">
                  <Image src={high.url} width={480} height={360} alt={title} priority />
                  <div className="yt-overlay">
                    <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noreferrer" className="yt-icon yt" aria-label="Watch video on YouTube">
                      <FaPlay />
                    </a>
                    <a href="#!" className="yt-icon copy" aria-label="Copy video link">
                      <AiFillCopy />
                    </a>
                  </div>
                </div>
                <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noreferrer" className='font-semibold text-center link' aria-label={`Watch ${title} on YouTube`}>
                  {title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
