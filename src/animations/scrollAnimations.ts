import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = ["READY", "SET", "GO!"] as const;

const played = new Set<string>();

const checkpoints = [
  { id: "m25", pct: 0.25 },
  { id: "m50", pct: 0.5 },
  { id: "m75", pct: 0.75 },
];

const runners = [
  { id: "runner1", group: "A", pct: 0.03 },
  { id: "runner2", group: "A", pct: 0.25 },
  { id: "runner3", group: "A", pct: 0.5 },
  { id: "runner4", group: "A", pct: 0.75 },
  { id: "runner5", group: "B", pct: 0.03 },
  { id: "runner6", group: "B", pct: 0.25 },
  { id: "runner7", group: "B", pct: 0.5 },
  { id: "runner8", group: "B", pct: 0.75 },
];

export function setupScrollAnimations(): void {
  // --- cache DOM once
  const scrollMouse = document.getElementById("scroll-mouse");
  const wordsWrap = document.getElementById(
    "scroll-words"
  ) as HTMLElement | null;
  const wordsEl = document.getElementById(
    "scroll-words-text"
  ) as HTMLElement | null;

  if (!scrollMouse || !wordsWrap || !wordsEl) {
    console.warn("Scroll animation elements not found");
    return;
  }

  // thresholds across the HERO section scroll
  const T = { show: 0.11, readyEnd: 0.2, setEnd: 0.3, hide: 0.5 };
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
        wordsEl.style.color =
          i === 2 ? "var(--color-t-pink)" : "rgba(43,43,43,0.7)";
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

function isMobile(): boolean {
  return window.matchMedia("(max-width: 640px)").matches;
}

function getActivePath(): SVGPathElement {
  return window.matchMedia("(max-width: 640px)").matches
    ? (document.querySelector("#guide-dotted-mobile") as SVGPathElement)
    : (document.querySelector("#guide-dotted") as SVGPathElement);
}

function svgToScreen(svg: SVGSVGElement, x: number, y: number) {
  const m = svg.getScreenCTM();
  const p = new DOMPoint(x, y).matrixTransform(m!);
  return { x: p.x, y: p.y };
}

export function animateScrollLine(): void {
  const cover = document.querySelector<SVGPathElement>("#guide-cover");
  const dotted = document.querySelector<SVGPathElement>("#guide-dotted");
  const dottedM = document.querySelector<SVGPathElement>(
    "#guide-dotted-mobile"
  )!;
  const svgGuide = document.querySelector<SVGSVGElement>("#svg-guide");
  const hero = document.querySelector<HTMLElement>(".hero-section");
  const footer = document.querySelector<HTMLElement>("footer");
  const layer = document.querySelector<HTMLElement>(".scroll-line-section");
  if (!cover || !dotted || !hero || !footer || !layer || !dottedM || !svgGuide)
    return;

  const pickPath = () => (isMobile() ? dottedM : dotted);

  let active = pickPath();

  const swapPathIfNeeded = () => {
    const newActive = pickPath();

    if (newActive !== active) {
      // Update the active reference
      active = newActive;
    }
    if (isMobile()) {
      svgGuide.setAttribute("viewBox", "0 0 390 2227");
    } else {
      svgGuide.setAttribute("viewBox", "0 0 1285 2100");
    }
  };
  swapPathIfNeeded();

  const init = () => {
    cover.setAttribute("d", active.getAttribute("d") || "");
    const L = cover.getTotalLength();
    cover.style.strokeDasharray = `${L}`;
    cover.style.strokeDashoffset = `0`; // fully covering dots at start
    return L;
  };
  let L = init();

  // Map: start just after hero -> end at footer top
  const heroBottom = hero.offsetTop + hero.offsetHeight;
  const startAt = heroBottom;
  const endAt = footer.offsetTop * 1.05; // Added a bit extra to ensure a full reveal

  // Ensure enough scroll height for the fixed overlay
  if (layer && layer.parentElement) {
    const needed = Math.max(
      endAt - startAt + window.innerHeight,
      layer.parentElement.scrollHeight
    );
    (layer.parentElement as HTMLElement).style.height = `${needed}px`;
  }

  const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

  function positionElements() {
    if (!svgGuide || !layer) return; // Exit if svgGuide is null

    for (const m of checkpoints) {
      const el = document.getElementById(m.id)!;

      const pt = calculatePositionOnScreenBasedOfPercentageOfPath(
        isMobile() && m.id === "m50" ? m.pct - 0.07 : m.pct,
        svgGuide,
        layer
      );

      el.style.position = "absolute";
      el.classList.add("hidden");
      el.style.left = `${pt.x}px`;
      el.style.top = `${pt.y}px`;
      el.style.transform = `translate(-50%, -96%) rotate(${determineAndAdjustRotationOfTheLine(
        pt.angleDeg,
        isMobile() && m.id === "m50" ? m.pct - 0.07 : m.pct
      )}deg)`;
      primeCheckpoint(el);
    }
    for (const r of runners) {
      const el = document.getElementById(r.id)!;
      const pt = calculatePositionOnScreenBasedOfPercentageOfPath(
        r.pct,
        svgGuide,
        layer
      );
      el.style.position = "absolute";
      el.classList.add("hidden");
      el.style.left = `${
        isMobile()
          ? r.group === "A"
            ? pt.x * 0.6
            : pt.x * 1.3
          : r.group === "A"
          ? r.id === "runner1" || r.id === "runner3"
            ? pt.x * 1.28
            : pt.x * 0.6
          : r.id === "runner5" || r.id === "runner7"
          ? pt.x * 1.35
          : pt.x * 0.68
      }px`;
      el.style.top = `${
        isMobile()
          ? r.group === "A"
            ? r.id === "runner4"
              ? pt.y * 1.07
              : pt.y
            : pt.y
          : r.group === "A"
          ? pt.y
          : pt.y
      }px`;
      el.style.transform = `translate(-50%, -50%)`;

      primeRunner(el);
    }
    positionClickArrow();
  }

  function positionClickArrow() {
    const arrow = document.getElementById("click-arrow");
    if (!arrow || !svgGuide || !layer) return;

    // Choose target runner based on screen size
    const targetRunnerId = isMobile() ? "runner1" : "runner5";
    const targetRunner = runners.find((r) => r.id === targetRunnerId);

    if (!targetRunner) return;

    const pt = calculatePositionOnScreenBasedOfPercentageOfPath(
      targetRunner.pct,
      svgGuide,
      layer
    );

    // Initialize with default values
    let runnerX = pt.x;
    let runnerY = pt.y;

    if (targetRunnerId === "runner1") {
      // Runner1 positioning logic
      runnerX = isMobile()
        ? pt.x * 0.6 // Group A on mobile
        : pt.x * 1.28; // runner1 on desktop (runner1 || runner3 case)

      runnerY = isMobile()
        ? pt.y // Group A, not runner4
        : pt.y; // Group A on desktop
    } else if (targetRunnerId === "runner5") {
      // Runner5 positioning logic
      runnerX = isMobile()
        ? pt.x * 1.3 // Group B on mobile
        : pt.x * 1.35; // runner5 on desktop (runner5 || runner7 case)

      runnerY = isMobile()
        ? pt.y // Group B on mobile
        : pt.y; // Group B on desktop
    }
    // Adjust offsets based on screen size
    const offsetX = isMobile() ? -60 : 30;
    const offsetY = isMobile() ? 50 : 60;

    arrow.style.left = `${runnerX + offsetX}px`;
    arrow.style.top = `${runnerY + offsetY}px`;
  }

  positionElements();
  setCheckpointLabel("m25", "10 KM");
  setCheckpointLabel("m50", "20 KM");
  setCheckpointLabel("m75", "30 KM");

  const onScroll = () => {
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const t = clamp01((y - startAt) / Math.max(1, endAt - startAt));
      cover.style.strokeDashoffset = `${-L * t}`;
      const arrow = document.getElementById("click-arrow");

      for (const m of checkpoints) {
        const el = document.getElementById(m.id)!;
        const shouldBeVisible = t >= m.pct;
        const wasHidden = el.classList.contains("hidden");
        el.classList.toggle("hidden", !shouldBeVisible);
        if (shouldBeVisible && wasHidden) playCheckpoint(el);
      }
      for (const r of runners) {
        const el = document.getElementById(r.id)!;
        const shouldBeVisible = t >= r.pct;
        const wasHidden = el.classList.contains("hidden");

        el.classList.toggle("hidden", !shouldBeVisible);
        if (shouldBeVisible && wasHidden) {
          playRunner(el);
        }
        if (r.id === "runner1" && arrow && isMobile()) {
          arrow.classList.toggle("hidden", !shouldBeVisible);
        } else if (r.id === "runner5" && arrow) {
          arrow.classList.toggle("hidden", !shouldBeVisible);
        }
      }
    });
  };

  const onResize = () => {
    swapPathIfNeeded();
    L = init();
    onScroll();
    positionElements();
  };
  window.addEventListener("resize", onResize);

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function calculatePositionOnScreenBasedOfPercentageOfPath(
  pct: number,
  svg: SVGSVGElement,
  relativeTo: HTMLElement
): { x: number; y: number; angleDeg: number } {
  if (isMobile()) {
    svg.setAttribute("viewBox", "0 0 390 2227");
  } else {
    svg.setAttribute("viewBox", "0 0 1285 2100");
  }
  const path = getActivePath();
  const L = path.getTotalLength();
  const s = Math.max(0, Math.min(L, pct * L));

  const p1 = path.getPointAtLength(s);
  const p2 = path.getPointAtLength(Math.min(L, s + 1)); // small step forward

  const sp1 = svgToScreen(svg, p1.x, p1.y);
  const sp2 = svgToScreen(svg, p2.x, p2.y);

  const angleDeg = Math.atan2(sp2.y - sp1.y, sp2.x - sp1.x) * (180 / Math.PI);

  // convert to coordinates relative to your overlay container
  const r = relativeTo.getBoundingClientRect();
  return { x: sp1.x - r.left, y: sp1.y - r.top, angleDeg };
}

function primeCheckpoint(el: HTMLElement) {
  const sign = el.querySelector<SVGGElement>(".sign");
  if (!sign) return;
  gsap.set(sign, {
    transformOrigin: "50% 100%", // hinge at bottom edge (the rope attachment point)
    yPercent: 20,
    willChange: "transform, opacity",
  });
}

function primeRunner(el: HTMLElement) {
  gsap.set(el, {
    willChange: "transform, opacity",
  });
}

function playRunner(el: HTMLElement) {
  const id = el.id;
  if (played.has(id)) return;
  played.add(id);

  gsap
    .timeline()
    .to(
      el,
      {
        rotateY: 60,
        yPercent: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      0
    )
    .to(
      el,
      {
        rotateY: 0,
        duration: 0.3,
        ease: "back.out(1.2)",
      },
      ">-0.1"
    );
}

function playCheckpoint(el: HTMLElement) {
  const id = el.id;
  if (played.has(id)) return;
  played.add(id);

  const sign = el.querySelector<SVGGElement>(".sign");
  if (!sign) return;

  // TODO
  gsap
    .timeline()
    .to(
      sign,
      {
        rotateX: -10,
        yPercent: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      0
    )
    .to(
      sign,
      {
        rotateX: 0,
        duration: 0.3,
        ease: "back.out(1.2)",
      },
      ">-0.1"
    );
}

function setCheckpointLabel(id: string, text: string) {
  const el = document.getElementById(id)!;
  const label = el.querySelector<SVGTextElement>(".label");
  if (label) label.textContent = text;
}

function determineAndAdjustRotationOfTheLine(rotation: number, pct?: number) {
  while (rotation > 180) rotation -= 360;
  while (rotation < -180) rotation += 360;

  if (Math.abs(rotation) > 90) {
    rotation = rotation - 180;
  }

  while (rotation > 180) rotation -= 360;
  while (rotation < -180) rotation += 360;

  // Fix for mobile view
  if (isMobile()) {
    if (pct === 0.5) {
      rotation -= 60;
    } else if (pct === 0.75) {
      rotation -= 30;
    }
  }

  return rotation;
}
