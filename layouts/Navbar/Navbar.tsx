"use client";

import ThemeController from "@/components/ThemeController";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
        
          <div className="nav-holder mr-auto">
            <ul className='nav-list'>
              {[
                'home',
                'about',
                'work',
                'skills',
                'youtube',
                'services',
                'contact'
              ].map((item) => (
                  <li className='nav-link' key={`link-${item}`}>
                    <a href={`#${item}`} draggable="false"> {item}</a>
                  </li>
                ))}
            </ul>
          </div>

          <span className="flex flex-row">

            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger><ThemeController /></TooltipTrigger>
                <TooltipContent><div className="font-medium">Toggle <span className="text-blue-400 font-semibold">Theme</span></div></TooltipContent>
              </Tooltip>
            </TooltipProvider>

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
