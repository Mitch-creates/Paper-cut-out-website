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
  const T = { show: 0.11, readyEnd: 0.2, setEnd: 0.28, hide: 0.34 };
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

    // SVG reveal (unchanged)
    const maskPath = document.getElementById(
      "maskPath"
    ) as SVGPathElement | null;
    if (!maskPath) return;

    const total = maskPath.getTotalLength();
    maskPath.style.strokeDasharray = `${total}`;
    maskPath.style.strokeDashoffset = `${total}`;

    gsap.to(maskPath, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".scrolly",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

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
