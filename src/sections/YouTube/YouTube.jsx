// "use server";

import 'tippy.js/dist/tippy.css';
import { AiFillCopy } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import Tippy from '@tippyjs/react';

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

export const getStaticProps = async () => {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLIWGHKiGCTxSEXgpAfdBXXJWC0YGA4R0v&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60
  };
};

export default async function YouTube({ data }) {
  // if (!data || !data.items) {
  //   return <div>Loading...</div>;
  // }

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
            console.log(item.snippet.playlistId);
            const { id, snippet = {} } = item;
            const { title, thumbnails = {}, resourceId, playlistId } = snippet;
            const { high = {} } = thumbnails;
            return (
              <div key={id}>
                <div className={`yt-card mix ${playlistId}`}>
                  <div className="yt-image">
                    <Image src={high.url} width={480} height={360} alt={title} />
                    <div className="yt-overlay">
                      <Tippy content={<div className="special"><span>Watch it on </span> <span className="tooltip">YouTube</span></div>} theme='default' placement='bottom' duration={0} arrow={true} animation="shift-toward-subtle" allowHTML={true}>
                        <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noreferrer" className="yt-icon yt">
                          <FaPlay />
                        </a>
                      </Tippy>
                      
                      <Tippy content={<div className="special"><span>Copy link to </span> <span className="tooltip">Share</span></div>} theme='default' placement='bottom' duration={0} arrow={true} animation="shift-toward-subtle" allowHTML={true}>
                        <a href="#!" className="yt-icon copy">
                          <AiFillCopy />
                        </a>
                      </Tippy>
                    </div>
                  </div>
                  <Tippy content={<div className="special"><span>Watch it on </span> <span className="tooltip">YouTube</span></div>} theme='default' placement='bottom' duration={0} arrow={true} animation="shift-toward-subtle" allowHTML={true}>
                    <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noreferrer" className='font-semibold text-center link'>
                      {title}
                    </a>
                  </Tippy>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
