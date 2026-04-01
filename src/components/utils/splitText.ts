import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 🔥 helper function (replacement for SplitText)
function splitTextToSpans(element: HTMLElement) {
  const nodes = Array.from(element.childNodes);

  element.innerHTML = "";

  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || "";

      text.split(" ").forEach((word, i) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "word";

        word.split("").forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.className = "char";
          charSpan.textContent = char;
          wordSpan.appendChild(charSpan);
        });

        element.appendChild(wordSpan);

        if (i !== text.split(" ").length - 1) {
          element.appendChild(document.createTextNode(" "));
        }
      });
    } else {
      // 🔥 KEEP existing elements like <span class="accent">
      element.appendChild(node);
    }
  });
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) return;

  const paras = document.querySelectorAll<HTMLElement>(".para");
  const titles = document.querySelectorAll<HTMLElement>(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  // 🔥 PARA animation (word-like effect)
  paras.forEach((para) => {
    para.classList.add("visible");

    splitTextToSpans(para);

    gsap.fromTo(
      para.querySelectorAll(".char"),
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // 🔥 TITLE animation
  titles.forEach((title) => {
    splitTextToSpans(title);

    gsap.fromTo(
      title.querySelectorAll(".char"),
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.03,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });
}