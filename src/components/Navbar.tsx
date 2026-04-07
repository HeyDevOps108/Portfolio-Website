import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// ✅ keep smoother as dummy (so other files don’t break)
export let smoother: any = null;

const Navbar = () => {
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // navbar links
  const links = document.querySelectorAll(".header ul a");

  links.forEach((elem) => {
    const element = elem as HTMLAnchorElement;

    element.addEventListener("click", (e) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();

        const targetId = element.getAttribute("data-href");
        const target = document.querySelector(targetId || "") as HTMLElement;
        if (target) {
          lenis.scrollTo(target);
        }
      }
    });
  });

  // cleanup (important 🔥)
  return () => {
    lenis.destroy();
  };
}, []);

  return (
    <>
      <div className="header">
<a href="/#" className="navbar-title logo-wrapper" data-cursor="disable">
<svg
  className="logo-svg"
  viewBox="0 0 100 100"
  width="36"
  height="36"
>
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#c481ff" />
      <stop offset="100%" stopColor="#7c3aed" />
    </linearGradient>

    <filter id="glow">
      <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  {/* 🔥 V SHAPE (clean + centered) */}
  <line x1="25" y1="25" x2="50" y2="75" className="logo-line line-left" />
  <line x1="75" y1="25" x2="50" y2="75" className="logo-line line-right" />

  {/* 🔥 nodes */}
  <circle cx="25" cy="25" r="3" className="logo-node node-1" />
  <circle cx="75" cy="25" r="3" className="logo-node node-2" />
  <circle cx="50" cy="75" r="4" className="logo-node main-node" filter="url(#glow)" />

  {/* 🔥 subtle ring (optional but classy) */}
  <circle
    cx="50"
    cy="50"
    r="34"
    stroke="url(#logoGradient)"
    strokeWidth="1.2"
    fill="none"
    strokeDasharray="5 6"
    className="logo-ring"
    opacity="0.5"
  />
</svg>
</a>

        <a
          href="mailto:example@mail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          example@mail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};


export default Navbar;