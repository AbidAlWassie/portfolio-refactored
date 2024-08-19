// "use client";

import { useEffect } from 'react';

export default function useScrollEffects() {
  useEffect(() => {
    function stickyNav() {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("scrolled", window.pageYOffset > 0);
    }

    function updateCount(num, maxNum) {
      let currentNum = +num.innerText;

      if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
          updateCount(num, maxNum);
        }, 12);
      }
    }

    function isInViewport(element, offset = 0) {
      const rect = element.getBoundingClientRect();
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset;
    }

    function loadSkills() {
      const skCounters = document.querySelectorAll(".counter span");
      const progressBars = document.querySelectorAll(".sk-progress svg circle");

      if (skCounters.length > 0 && isInViewport(skCounters[0], 0)) {
        skCounters.forEach((counter, i) => {
          const cvalue = Number(counter.dataset.target);
          let strokeValue = 427 - 427 * (cvalue / 100);
          progressBars[i].style.animation = "progress 2s ease-in-out forwards";
          progressBars[i].style.setProperty("--target", strokeValue);

          setTimeout(() => updateCount(counter, cvalue), 400);
        });
      }
    }

    function mlCounter() {
      const mlCounters = document.querySelectorAll(".number span");

      if (mlCounters.length > 0 && isInViewport(mlCounters[0], -250)) {
        mlCounters.forEach(counter => {
          let mvalue = Number(counter.dataset.target);
          setTimeout(() => updateCount(counter, mvalue), 1000);
        });
      }
    }

    function activeLink() {
      const navbar = document.getElementById("navbar");
      let sections = document.querySelectorAll(".section");
      let passedSections = Array.from(sections).map((sect, i) => ({
        y: sect.getBoundingClientRect().top - navbar.offsetHeight,
        id: i,
      })).filter(sect => sect.y <= 0);

      let currentSectID = passedSections.at(-1)?.id;
      let navLinks = document.querySelectorAll(".nav-link");

      navLinks.forEach(l => l.classList.remove("active"));
      if (currentSectID !== undefined) {
        navLinks[currentSectID].classList.add("active");
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        stickyNav();
        activeLink();
        loadSkills();
        mlCounter();
      });

      return () => window.removeEventListener("scroll", stickyNav);
    }
  }, []);
}
