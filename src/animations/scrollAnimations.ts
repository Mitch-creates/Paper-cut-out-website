import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setupScrollAnimations(): void {
  // Get all the elements we need
  const scrollMouse = document.getElementById("scroll-mouse");

  // Early return if elements don't exist
  if (!scrollMouse) {
    console.warn("Scroll animation elements not found");
    return;
  }
  let bounceAnimation: gsap.core.Tween | null = null;

  // Get exact position measurements after DOM is fully loaded
  setTimeout(() => {
    // Initial setup
    gsap.set(scrollMouse, { opacity: 1 });

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
        gsap.set(scrollMouse, {
          opacity: Math.max(0, 1 - progress * 10),
        });
      },
    });

    const maskPath = document.getElementById(
      "maskPath"
    ) as SVGPathElement | null;
    if (!maskPath) return;

    const total = maskPath.getTotalLength();
    // Prepare mask to be hidden initially
    maskPath.style.strokeDasharray = `${total}`;
    maskPath.style.strokeDashoffset = `${total}`;

    gsap.to(maskPath, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".scrolly",
        start: "top top",
        end: "bottom bottom", // increase this section's height to make reveal longer
        scrub: true,
        // pin: true,          // optional: pin the section while revealing
        // markers: true       // debug
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
