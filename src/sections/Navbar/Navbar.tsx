"use client";

import ThemeController from "@/components/ThemeController";
import { useEffect, useState } from 'react';
import useScrollEffects from '../../hooks/useScrollEffects';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
    
  useScrollEffects();

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.classList.toggle("open", toggle);
    }
  }, [toggle]);

    return (
      <nav className='navbar' id='navbar'>
        <div className="container flex justify-between items-center mx-auto text-center">

          <div className='my-logo'>
            <div className='circle'>
              <span className="firstLetter">A</span>
              <div className="half-circle"></div>
            </div>
            <span className="otherLetters" draggable="false">bid</span>
          </div>
        
          <div className="nav-holder">
            <ul className='nav-list'>
              {[
                'home',
                'about',
                'skills',
                'youtube',
                'services',
                'work',
                'contact'
              ].map((item) => (
                  <li className='nav-link' key={`link-${item}`}>
                    <a href={`#${item}`} draggable="false"> {item}</a>
                  </li>
                ))}
            </ul>
          </div>

          <span className="flex flex-row">
            <ThemeController />

          <div className='menuBtn hamburger' onClick={() => setToggle(!toggle)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          
          </span>



        </div>
      </nav>
    )
}

export default Navbar
