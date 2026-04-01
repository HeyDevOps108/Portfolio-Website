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
        <a href="/#" className="navbar-title" data-cursor="disable">
          Logo
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