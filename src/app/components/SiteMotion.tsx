"use client";

import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";

/**
 * Page-level motion, driven by data attributes so sections stay server components:
 * - [data-hero]          hero intro stagger ("item" fades in; "headline"/"media" only rise, so LCP isn't delayed)
 * - [data-reveal]        single fade/slide-in on scroll (section headings, blocks)
 * - [data-reveal-item]   batched, staggered fade/slide-in on scroll (entries, cards)
 * - [data-tilt]          hover lift + tilt on fine pointers
 *
 * Content is visible by default; GSAP only hides what it is about to animate.
 */
export const SiteMotion = () => {
  useGSAP(() => {
    const root = document.documentElement;
    const mm = gsap.matchMedia();

    // Skip anything already on screen (or scrolled past) at init, so nothing visible blinks out.
    const belowFold = (el: Element) => el.getBoundingClientRect().top > window.innerHeight;

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero]");
      if (heroItems.length) {
        // Take over from the CSS pre-state (html.motion-pending) in one synchronous step.
        gsap.set(heroItems, { y: 18 });
        gsap.set('[data-hero="item"]', { opacity: 0 });
        root.classList.remove("motion-pending");
        gsap.to(heroItems, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.09,
          clearProps: "transform,opacity",
        });
      }

      gsap.utils
        .toArray<HTMLElement>("[data-reveal]")
        .filter(belowFold)
        .forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 24,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

      const items = gsap.utils.toArray<HTMLElement>("[data-reveal-item]").filter(belowFold);
      gsap.set(items, { opacity: 0, y: 28 });
      ScrollTrigger.batch(items, {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            clearProps: "transform,opacity",
          }),
      });
    });

    mm.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
      const cleanups = gsap.utils.toArray<HTMLElement>("[data-tilt]").map((card) => {
        gsap.set(card, { transformPerspective: 900 });
        const tween = { duration: 0.5, ease: "power3.out" };
        const rotateX = gsap.quickTo(card, "rotationX", tween);
        const rotateY = gsap.quickTo(card, "rotationY", tween);
        const lift = gsap.quickTo(card, "y", tween);

        const onMove = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          rotateX(-y * 4);
          rotateY(x * 5);
        };
        const onEnter = () => lift(-6);
        const onLeave = () => {
          rotateX(0);
          rotateY(0);
          lift(0);
        };

        card.addEventListener("pointerenter", onEnter);
        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerleave", onLeave);
        return () => {
          card.removeEventListener("pointerenter", onEnter);
          card.removeEventListener("pointermove", onMove);
          card.removeEventListener("pointerleave", onLeave);
        };
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    });

    return () => {
      mm.revert();
      root.classList.remove("motion-pending");
    };
  });

  return null;
};
