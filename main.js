import "./style.scss";
import "vanilla-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Header from "./components/header.js";
import Footer from "./components/footer.js";

gsap.registerPlugin(ScrollTrigger);

const createLoader = () => {
  const loader = document.createElement("div");
  loader.classList.add("loader");
  loader.innerHTML = `
        <div class="loader__percentage">0%</div>
    `;
  document.body.prepend(loader);
  return loader;
};

const loader = createLoader();
const percentageEl = loader.querySelector(".loader__percentage");

let progress = 0;
const loadingInterval = setInterval(() => {
  progress += Math.random() * 15;
  if (progress >= 100) {
    progress = 100;
    clearInterval(loadingInterval);
    percentageEl.textContent = "100%";

    gsap.to(percentageEl, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.to(loader, {
          yPercent: -100,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            loader.remove();
            document.body.style.overflow = "";
            initPage();
          },
        });
      },
    });
  } else {
    percentageEl.textContent = `${Math.floor(progress)}%`;
  }
}, 100);

document.body.style.overflow = "hidden";

const initPage = () => {
  document.body.prepend(Header());
  document.body.appendChild(Footer());

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const transitionBar = document.querySelector(".transition__bar");

  const evenBar = document.createElement("div");
  evenBar.classList.add("even-bar");
  const oddBar = document.createElement("div");
  oddBar.classList.add("odd-bar");

  for (let i = 0; i < 6; i++) {
    if (i % 2 === 0) {
      transitionBar.appendChild(oddBar.cloneNode(true));
    } else {
      transitionBar.appendChild(evenBar.cloneNode(true));
    }
  }

  const bars = transitionBar.querySelectorAll(".odd-bar, .even-bar");

  gsap.set(bars, { scaleY: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: transitionBar,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    },
  });

  bars.forEach((bar, index) => {
    const isOdd = index % 2 === 0;
    gsap.set(bar, { transformOrigin: isOdd ? "top center" : "bottom center" });

    tl.to(
      bar,
      {
        scaleY: 1,
        duration: 1,
        ease: "none",
      },
      index * 0.08,
    );
  });
};
