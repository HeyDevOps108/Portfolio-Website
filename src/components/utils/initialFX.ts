import gsap from "gsap";

// 🔥 CORRECT split (character based, preserves spaces)
function splitTextToSpans(selector: string) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    const text = el.textContent || "";

    el.innerHTML = text
      .split("")
      .map((char) =>
        char === " "
          ? `<span class="char">&nbsp;</span>`
          : `<span class="char">${char}</span>`
      )
      .join("");
  });
}

export function initialFX() {
  document.body.style.overflowY = "auto";

  document
    .getElementsByTagName("main")[0]
    .classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  /* 🔥 ONLY CURRENT ELEMENTS (CLEAN) */
  splitTextToSpans(".landing-title");
  splitTextToSpans(".landing-role");

  /* 🔥 LEFT SIDE ANIMATION */
  gsap.fromTo(
    ".landing-title .char, .landing-role .char",
    { opacity: 0, y: 60, filter: "blur(6px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.03,
      delay: 0.2,
    }
  );

  gsap.fromTo(
    [".landing-divider", ".landing-tagline"],
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.6,
    }
  );

  /* 🔥 RIGHT SIDE CLEAN ANIMATION */
  gsap.fromTo(
    [".landing-pre", ".landing-h2-1", ".landing-h2-2", ".landing-stack"],
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.8,
    }
  );

  /* 🔥 HEADER */
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: 0.2,
    }
  );

  /* 🔥 TRIGGER CSS ANIMATIONS PERFECTLY */
  gsap.delayedCall(1.0, () => {
    document.querySelector(".landing-title")?.classList.add("animate");
    document.querySelector(".landing-role")?.classList.add("animate");
  });
}