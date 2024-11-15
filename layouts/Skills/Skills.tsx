"use client";

import Image from 'next/image';
import useScrollEffects from '../../hooks/useScrollEffects';
import { images } from '../../refs';

const skillsData = [
  { name: 'JavaScript', proficiency: 90, image: images.javascript, circleClass: 'p-circle3' },
  { name: 'TypeScript', proficiency: 75, image: images.ts, circleClass: 'p-circle16 icon-sm' },
  { name: 'React', proficiency: 75, image: images.react, circleClass: 'p-circle4' },
  { name: 'Next.js', proficiency: 70, image: images.nextjs, circleClass: 'p-circle6' },
  { name: 'Auth.js', proficiency: 55, image: images.authjs, circleClass: 'p-circle18 icon-sm' },
  { name: 'Prisma', proficiency: 70, image: images.prisma, circleClass: 'p-circle14' },
  { name: 'Drizzle', proficiency: 65, image: images.drizzle, circleClass: 'p-circle17 icon-sm' },
  { name: 'Firebase', proficiency: 55, image: images.firebase, circleClass: 'p-circle11' },
  { name: 'MongoDB', proficiency: 58, image: images.mongodb, circleClass: 'p-circle13 icon-sm' },
  { name: 'Figma', proficiency: 90, image: images.figma, circleClass: 'p-circle9' },
  { name: 'Git', proficiency: 100, image: images.git, circleClass: 'p-circle10' },
  { name: 'Tailwind', proficiency: 90, image: images.tailwind, circleClass: 'p-circle7' },
  { name: 'CSS3', proficiency: 95, image: images.css, circleClass: 'p-circle2' },
  { name: 'HTML5', proficiency: 98, image: images.html, circleClass: 'p-circle1' },
  { name: 'Python', proficiency: 75, image: images.python, circleClass: 'p-circle8' },
];

const Skills = () => {

  useScrollEffects();
  
  return (
    <div className="skills section" id="skills">
      <div className="container flex justify-between items-center mx-auto">
        <div className="skills-box">
          <div className="box-heading">
            <h3 className="sub-heading">My Skills</h3>
            <h1 className="heading">Looking forward to work with you!</h1>
            <div className="box-desc">
              <div className="text">
              I am a full stack developer specializing in TypeScript and React. I use Next.js for SSR, SSG and CSG sites optimized for performance. I use Auth.js for secure authentication. I tend to focus on creating interactive and responsive user interfaces for all devices. I am committed to delivering high-quality code and staying updated on industry trends.
              </div>
            </div>
          </div>

          <div className="skills-wrap">
              {skillsData.map((skill, index) => (
                <div key={index} className="skill">
                  <div className="sk-progress">
                    <svg className={skill.circleClass}>
                      <circle className={skill.circleClass} cx={75} cy={75} r={68} />
                    </svg>
                    <div className="techLogo">
                      <Image loading="eager" src={skill.image} alt={`${skill.name} logo`} width={150} height={150} />
                    </div>
                    <h2 className="counter">
                      <span data-target={skill.proficiency}>0</span>%
                    </h2>
                    <h1 className="sk-title">{skill.name}</h1>
                  </div>
                </div>
              ))}
            </div>

            </div>
        </div>
      </div>
  )
}

export default Skills