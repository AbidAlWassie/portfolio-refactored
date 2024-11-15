"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { images } from '../../refs';

const Work = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Realtime Chat App',
      category: 'backend',
      image: images.realtime_chat1,
      liveDemo: 'https://realtime-chat-by-abid.vercel.app',
      code: 'https://github.com/AbidAlWassie/realtime_chat'
    },
    {
      id: 2,
      title: 'DevEleven-io',
      category: 'frontend',
      image: images.team_website1,
      liveDemo: 'https://develeven-io.vercel.app/',
      code: 'https://github.com/DEVELEVEN-io/develeven-io'
    },
    {
      id: 3,
      title: 'Weather App',
      category: 'backend',
      image: images.web_development1,
      liveDemo: 'https://weather-app-abidalwassie.vercel.app',
      code: 'https://github.com/AbidAlWassie/weather-app'
    },
    {
      id: 4,
      title: 'Forest Knight',
      category: 'others',
      image: images.topdown_game1,
      liveDemo: 'https://onemandev-io.itch.io/',
      code: 'https://github.com/AbidAlWassie/Forest-Knight'
    },
    {
      id: 5,
      title: 'Tilemap Editor',
      category: 'others',
      image: images.tilemap_editor1,
      liveDemo: 'https://onemandev-io.github.io/tilemap-editor/',
      code: 'https://github.com/oneManDev-io/tilemap-editor'
    }
  ]

  const filteredProjects = projects.filter(project => filter === 'all' || project.category === filter)

  return (
    <div className="work section" id="work">
      <div className="container mx-auto mb-20 w-full">

        <div className="portfolio-header">
          <div className="portfolio-title">
            <h3 className="sub-heading">Work</h3>
            <h1 className="heading">Latest Projects</h1>
          </div>

          <div className="filter-btns">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
              All
            </button>
            <button className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`} onClick={() => setFilter('frontend')}>
              Front end
            </button>
            <button className={`filter-btn ${filter === 'backend' ? 'active' : ''}`} onClick={() => setFilter('backend')}>
              Back end
            </button>
            <button className={`filter-btn ${filter === 'others' ? 'active' : ''}`} onClick={() => setFilter('others')}>
              Others
            </button>
          </div>
        </div>

        <div className="portfolio-items">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="prt-card mix"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="prt-image">
                  <Image src={project.image} alt={project.title} />

                  <div className="prt-overlay">
                    <a href={project.liveDemo} target="_blank" className="prt-icon view">
                      <AiFillEye />
                    </a>
                    <a href={project.code} target="_blank" className="prt-icon code">
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
                <div className="prt-desc">
                  <h3>{project.title}</h3>
                  <a href={project.liveDemo} target="_blank" className="btn secondary-btn sm">
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Work
