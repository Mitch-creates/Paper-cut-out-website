import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setupScrollAnimations(): void {
  // Get all the elements we need
  const scrollMouse = document.getElementById("scroll-mouse");
  const scrollWheel = document.getElementById("scroll-wheel");
  const scrollLine = document.getElementById("scroll-line");
  const scrollText = document.querySelector("#scroll-mouse p");
  const wheelDot = document.querySelector("#scroll-wheel div");

  // Early return if elements don't exist
  if (!scrollMouse || !scrollWheel || !scrollLine || !wheelDot) {
    console.warn("Scroll animation elements not found");
    return;
  }
  let bounceAnimation: gsap.core.Tween | null = null;

  // Get exact position measurements after DOM is fully loaded
  setTimeout(() => {
    // Get positions for precise alignment
    const wheelRect = scrollWheel.getBoundingClientRect();
    const dotRect = wheelDot.getBoundingClientRect();

    // Initial setup
    gsap.set(scrollMouse, { opacity: 1 });
    if (scrollText) gsap.set(scrollText, { opacity: 1 });

    // Position the line to start exactly at the wheel dot
    const dotOffset = dotRect.top - wheelRect.top + 5; // Add small adjustment to center on dot

    gsap.set(scrollLine, {
      top: `${dotOffset}px`,
      height: 0,
      opacity: 0,
    });

    // Create the scroll-triggered animation
    ScrollTrigger.create({
      trigger: ".hero-section",
      start: "top top",
      end: "+=2000",
      scrub: true,
      onUpdate: (self) => {
        const { progress } = self;

        // Control bounce animation based on scroll position TODO edit 0.08 later as the page grows longer
        if (progress > 0.08 && bounceAnimation && !bounceAnimation.paused()) {
          bounceAnimation.pause();
        } else if (
          progress < 0.05 &&
          bounceAnimation &&
          bounceAnimation.paused()
        ) {
          // Resume bounce animation when back at the top
          bounceAnimation.resume();
        }

        // 1. Mouse border fades out
        gsap.set(scrollWheel, {
          borderColor: `rgba(43, 43, 43, ${(1 - progress * 10) * 0.3})`,
          opacity: Math.max(0, 1 - progress * 10),
        });

        // Text fades out
        if (scrollText) {
          gsap.set(scrollText, {
            opacity: Math.max(0, 1 - progress * 10),
          });
        }

        // 2. Mouse shifts up slightly
        gsap.set(scrollMouse, {
          y: progress * -20,
        });

        // 3. Wheel dot stays visible and becomes part of the line
        gsap.set(wheelDot, {
          backgroundColor: `rgba(43, 43, 43, ${0.5 + progress * 0.5})`,
          scale: 1, // Keep the same size
        });

        // 4. Line grows downward
        gsap.set(scrollLine, {
          height: `${progress * 600}px`,
          opacity: gsap.utils.clamp(0, 1, progress * 10), // Quick fade in
        });
      },
    });

    // Add a custom bounce animation
    bounceAnimation = gsap.to(scrollMouse, {
      y: "-=15",
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power10.inOut",
    });
  }, 100);
}
