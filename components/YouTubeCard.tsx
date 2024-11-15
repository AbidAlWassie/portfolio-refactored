"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
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
  const [filter, setFilter] = useState('all');

  if (!data || !data.items || data.items.length === 0) {
    return <p>No videos available.</p>;
  }

  const filteredVideos = data.items.filter((item) => {
    return filter === 'all' || item.snippet.playlistId === filter;
  });

  const copyToClipboard = (videoUrl: string) => {
    navigator.clipboard.writeText(videoUrl).then(() => {
      console.log('Video link copied to clipboard!');
    }).catch(() => {
      console.log('Failed to copy link');
    });
  };

  return (
    <div className="youtube section" id="youtube">
      <div className="container mx-auto mb-20 w-full">
        <div className="portfolio-header">
          <div className="portfolio-title">
            <h3 className="sub-heading">YouTube</h3>
            <h1 className="heading">Latest Videos</h1>
          </div>

          {/* Filter Buttons */}
          <div className="filter-btns">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
              All
            </button>
            <button
              className={`filter-btn ${filter === 'PLIWGHKiGCTxSEXgpAfdBXXJWC0YGA4R0v' ? 'active' : ''}`}
              onClick={() => setFilter('PLIWGHKiGCTxSEXgpAfdBXXJWC0YGA4R0v')}
            >
              Unity
            </button>
            <button className={`filter-btn ${filter === 'backend' ? 'active' : ''}`} onClick={() => setFilter('backend')}>
              Godot
            </button>
            <button className={`filter-btn ${filter === 'others' ? 'active' : ''}`} onClick={() => setFilter('others')}>
              Others
            </button>
          </div>
        </div>

        {/* YouTube Video Cards */}
        <div className="youtube-videos">
          <AnimatePresence>
            {filteredVideos.map((item) => {
              const { id, snippet } = item;
              const { title, thumbnails, resourceId, playlistId } = snippet;
              const { high } = thumbnails;
              const videoUrl = `https://www.youtube.com/watch?v=${resourceId.videoId}`;

              return (
                <motion.div
                  key={id}
                  className={`yt-card mix ${playlistId}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="yt-image">
                    <Image src={high.url} width={480} height={360} alt={title} priority />

                    <div className="yt-overlay">
                      <a
                        href={videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="yt-icon yt"
                        aria-label="Watch video on YouTube"
                      >
                        <FaPlay />
                      </a>
                      <button
                        className="yt-icon copy"
                        aria-label="Copy video link"
                        onClick={() => copyToClipboard(videoUrl)}
                      >
                        <AiFillCopy />
                      </button>
                    </div>
                  </div>
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-center link"
                    aria-label={`Watch ${title} on YouTube`}
                  >
                    {title}
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
