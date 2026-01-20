import { gsap } from "gsap";
3;
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
3;
gsap.registerPlugin(ScrollTrigger, SplitText);
const isSmall = window.innerWidth <= 768 ? true : false;
3;
export function heroAnimation() {
  if (!document.querySelector(".hero-section")) return;
  3;
  const tl = gsap.timeline();
  const paraSplit = new SplitText(".hero-para", { type: "words" });
  3;
  tl.from(".hero-title", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  })
    .to(".reality-word", {
      fontStyle: "italic",
      duration: 0.6,
      ease: "power2.out",
    })
    .from(paraSplit.words, {
      yPercent: 100,
      opacity: 0,
      duration: 0.7,
      ease: "expo.out",
      stagger: 0.06,
    });
}
3;
export function revealTrusted() {
  const trusted = document.querySelectorAll(".trusted-by img");
  if (!trusted) return;
  gsap.from(trusted, {
    scrollTrigger: {
      trigger: [trusted[0]],
      start: isSmall ? "top 70%" : "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.15,
  });
}
export function revealProcess() {
  const processEl = document.querySelector(".process");
  if (!processEl) return;
  3;
  const tag = processEl.querySelector(".small-tag");
  const heading = processEl.querySelector("h2");
  const content = processEl.querySelector(".content");
  const processItems = document.querySelectorAll(".process .process-items li");
  if (!tag || !heading || !content || !processItems) return;
  3;
  const isSmall = window.innerWidth < 768;
  3;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: processEl,
      start: isSmall ? "top 50%" : "top 50%",
    },
  });
  tl.from(tag, {
    yPercent: 100,
    opacity: 0,
    ease: "expo.out",
    duration: 0.7,
  });
  tl.from(
    heading,
    {
      opacity: 0,
      xPercent: -100,
      ease: "expo.out",
      duration: 0.5,
    },
    "-=0.2",
  );
  tl.from(
    content,
    {
      yPercent: 100,
      opacity: 0,
      ease: "expo.in",
      duration: 0.4,
    },
    "-=0.2",
  );
  const processItemsTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: processEl.querySelector(".process-items"),
      start: isSmall ? "top 60%" : "top 50%",
    },
  });
  processItems.forEach((el) => {
    const img = el.querySelector("img");
    const title = el.querySelector("h3");
    const content = el.querySelector("p");
    const itemTl = gsap.timeline();
    if (img) {
      itemTl.from(img, {
        opacity: 0,
        xPercent: 100,
        duration: 0.4,
        ease: "expo.out",
      });
    }
    if (title) {
      itemTl.from(title, {
        yPercent: 100,
        opacity: 0,
        duration: 0.4,
        ease: "expo.out",
      });
    }
    if (content) {
      itemTl.from(content, {
        yPercent: 100,
        opacity: 0,
        duration: 0.4,
        ease: "expo.out",
      });
    }
    processItemsTimeLine.add(itemTl, "+=0.2");
  });
}
