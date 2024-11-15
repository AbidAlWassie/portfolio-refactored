"use client";

import { useEffect } from 'react';

export default function useScrollEffects() {
  useEffect(() => {
    function handleScroll() {
      stickyNav();
      activeLink();
      loadSkills();
      mlCounter();
    }

    function stickyNav() {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.classList.toggle("scrolled", window.pageYOffset > 0);
      }
    }

    function updateCount(num: HTMLElement, maxNum: number): void {
      let currentNum = +num.innerText;

      if (currentNum < maxNum) {
        num.innerText = (currentNum + 1).toString();
        setTimeout(() => updateCount(num, maxNum), 12);
      }
    }

    function isInViewport(element: Element, offset: number = 0): boolean {
      const rect = element.getBoundingClientRect();
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset;
    }

    function loadSkills() {
      const skCounters = document.querySelectorAll(".counter span");
      const progressBars = Array.from(document.querySelectorAll<SVGCircleElement>(".sk-progress svg circle"));

      if (skCounters.length > 0 && isInViewport(skCounters[0])) {
        skCounters.forEach((counter, i) => {
          const cvalue = Number((counter as HTMLElement).dataset.target);
          const strokeValue = 427 - 427 * (cvalue / 100);
          progressBars[i].style.animation = "progress 2s ease-in-out forwards";
          progressBars[i].style.setProperty("--target", strokeValue.toString());

          setTimeout(() => updateCount(counter as HTMLElement, cvalue), 400);
        });
      }
    }

    function mlCounter() {
      const mlCounters = document.querySelectorAll(".number span");

      if (mlCounters.length > 0 && isInViewport(mlCounters[0], -250)) {
        mlCounters.forEach(counter => {
          const mvalue = Number((counter as HTMLElement).dataset.target);
          setTimeout(() => updateCount(counter as HTMLElement, mvalue), 1000);
        });
      }
    }

    function activeLink() {
      const navbar = document.getElementById("navbar");
      const sections = document.querySelectorAll(".section");
      const passedSections = Array.from(sections)
        .map((sect, i) => ({
          y: sect.getBoundingClientRect().top - (navbar?.offsetHeight ?? 0),
          id: i,
        }))
        .filter(sect => sect.y <= 0);

      const currentSectID = passedSections.at(-1)?.id;
      const navLinks = document.querySelectorAll(".nav-link");

      navLinks.forEach(link => link.classList.remove("active"));
      if (currentSectID !== undefined) {
        navLinks[currentSectID].classList.add("active");
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
}
