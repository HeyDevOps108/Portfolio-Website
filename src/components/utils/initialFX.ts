import gsap from "gsap";
// import { smoother } from "../Navbar";

// 🔥 custom split function (replacement of SplitText)
function splitTextToSpans(selector: string) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    const text = el.textContent || "";
    el.innerHTML = text
      .split(" ")
      .map((char) => `<span class="char">${char}</span>`)
      .join("");
  });
}

export function initialFX() {
  document.body.style.overflowY = "auto";

  // if (smoother) smoother.paused(false);

  document.getElementsByTagName("main")[0].classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // 🔥 split text (replacement)
  splitTextToSpans(".landing-info h3");
  splitTextToSpans(".landing-intro h2");
  splitTextToSpans(".landing-intro h1");
  splitTextToSpans(".landing-h2-info");
  splitTextToSpans(".landing-h2-info-1");
  splitTextToSpans(".landing-h2-1");
  splitTextToSpans(".landing-h2-2");

  // 🔥 animate characters
  gsap.fromTo(
    ".landing-info h3 .char, .landing-intro h2 .char, .landing-intro h1 .char",
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.inOut",
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-h2-info .char",
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.inOut",
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // 🔥 looping animation (replacement)
  loopText(".landing-h2-info .char", ".landing-h2-info-1 .char");
  loopText(".landing-h2-1 .char", ".landing-h2-2 .char");
}

// 🔥 loop animation without SplitText
function loopText(text1: string, text2: string) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    text2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.inOut",
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      text1,
      { y: 80 },
      {
        y: 0,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      text1,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      text2,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}