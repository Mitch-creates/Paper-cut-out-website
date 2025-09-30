import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setupScrollAnimations(): void {
  // --- cache DOM once
  const scrollMouse = document.getElementById("scroll-mouse");
  const wordsWrap = document.getElementById(
    "scroll-words"
  ) as HTMLElement | null;
  const wordsEl = document.getElementById(
    "scroll-words-text"
  ) as HTMLElement | null;

  const words = ["READY", "SET", "GO!"] as const;

  if (!scrollMouse || !wordsWrap || !wordsEl) {
    console.warn("Scroll animation elements not found");
    return;
  }

  // thresholds across the HERO section scroll
  const T = { show: 0.11, readyEnd: 0.2, setEnd: 0.3, hide: 0.4 };
  const EPS = 0.003;

  let lastIdx: 0 | 1 | 2 = 0;
  let lastVisible: boolean | null = null;
  let bounceAnimation: gsap.core.Tween | null = null;

  function swapScrollWord(i: 0 | 1 | 2) {
    if (i === lastIdx) return;
    lastIdx = i;

    gsap.to(wordsEl, {
      opacity: 0,
      y: -8,
      duration: 0.15,
      ease: "power2.out",
      onComplete: () => {
        if (!wordsEl) return;
        wordsEl.textContent = words[i];
        wordsEl.style.color = i === 2 ? "#F5A500" : "rgba(43,43,43,0.7)";
        gsap.fromTo(
          wordsEl,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" }
        );
      },
    });
  }

  function updateWords(p: number) {
    let idx: 0 | 1 | 2;
    let visible: boolean;

    if (p < T.show - EPS) {
      idx = 0;
      visible = false;
    } else if (p < T.readyEnd - EPS) {
      idx = 0;
      visible = true;
    } else if (p < T.setEnd - EPS) {
      idx = 1;
      visible = true;
    } else if (p < T.hide - EPS) {
      idx = 2;
      visible = true;
    } else {
      idx = 2;
      visible = false;
    } // hidden after 0.34

    if (visible !== lastVisible && wordsWrap) {
      lastVisible = visible;
      wordsWrap.classList.toggle("invisible", !visible);
      if (visible) swapScrollWord(idx);
      return;
    }

    if (visible) swapScrollWord(idx);
  }

  // delay matches your pattern
  setTimeout(() => {
    gsap.set(scrollMouse, { opacity: 1 });

    // HERO trigger: mouse fade + word sequence (READY → SET → GO!)
    const heroST = ScrollTrigger.create({
      trigger: ".hero-section",
      start: "top top",
      end: "+=2000",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;

        // fade mouse in first 10%
        gsap.set(scrollMouse, { opacity: Math.max(0, 1 - p * 10) });

        // bounce pause/resume
        if (p > 0.08 && bounceAnimation && !bounceAnimation.paused())
          bounceAnimation.pause();
        else if (p < 0.05 && bounceAnimation && bounceAnimation.paused())
          bounceAnimation.resume();

        updateWords(p);
      },
      onRefresh: (self) => updateWords(self.progress),
    });

    // initialize immediately with the current progress
    updateWords(heroST.progress);

    // mouse bounce
    bounceAnimation = gsap.to(scrollMouse, {
      y: "-=15",
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power10.inOut",
    });
  }, 100);
}

export function animateScrollLine(): void {
  const path = document.querySelector("path");

  const heroSection = document.querySelector(
    ".hero-section"
  ) as HTMLElement | null;
  const footer = document.querySelector("footer") as HTMLElement | null;
  const scrolly = document.querySelector(
    ".scroll-line-section"
  ) as HTMLElement | null;

  if (!path || !heroSection || !footer || !scrolly) return;
  const pathLength = path.getTotalLength();

  path.style.strokeDasharray = pathLength + " " + pathLength;

  path.style.strokeDashoffset = pathLength + "px";

  //Where drawing should begin
  const heroTop = heroSection.offsetTop;
  const heroBottom = heroTop + heroSection.offsetHeight;
  const startAt = heroBottom - heroSection.offsetHeight * 0.3; // Means around 30% after heroSection

  //Where drawing should end: at the top of the footer
  const endAt = footer.offsetTop;

  // If your fixed scrolly container needs enough height to cover until footer:
  if (scrolly && scrolly.parentElement) {
    const needed = Math.max(
      endAt + window.innerHeight,
      scrolly.parentElement.scrollHeight
    );
    (scrolly.parentElement as HTMLElement).style.height = `${needed}px`;
  }

  const onScroll = () => {
    requestAnimationFrame(() => {
      const y = window.scrollY;

      const range = Math.max(1, endAt - startAt);
      const tRaw = (y - startAt) / range;
      const t = Math.min(1, Math.max(0, tRaw));

      const drawLength = pathLength * t;
      path.style.strokeDashoffset = `${pathLength - drawLength}px`;
    });
  };
  onScroll();
  window.addEventListener("scroll", onScroll);
}

// () => {
//     // What % down is it?
//     var scrollPercentage =
//       (document.documentElement.scrollTop + document.body.scrollTop) /
//       (document.documentElement.scrollHeight -
//         document.documentElement.clientHeight);

//     // Length to Offset the dashes
//     var drawLength = pathLength * scrollPercentage;

//     // Draw in reverse
//     path.style.strokeDashoffset = pathLength - drawLength + "px";

//     //Code to make the targets move slightly alongside the scrolling line
//     // const target = document.querySelectorAll('.scroll');

//     // var index= 0, length = target.length;
//     // for (index; index < length; index++) {
//     //   var pos = window.pageYOffset * target[index].dataset.rate;

//     //   if (target[index].dataset.direction === 'vertical') {
//     //     target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
//     //   } else {
//     //     var posX = window.pageYOffset * target[index].dataset.ratex;
//     //     var posY = window.pageYOffset * target[index].dataset.ratey;

//     //     target[index].style.transform = 'translate3d('+posX +'px, '+'px, 0px)';
//     //   }
//     // }
