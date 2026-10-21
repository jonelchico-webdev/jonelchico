"use client";

import { useEffect, useRef, useState } from "react";

const SPACING = 28;
const RADIUS = 190;
const BASE_ALPHA = 0.08;

/**
 * Interactive dot field behind the hero. Plain 2D canvas, no libraries.
 * Follows the cursor on fine pointers and sweeps with scroll on touch devices.
 * Starts after first paint (idle), pauses off-screen and in hidden tabs,
 * and renders a single static frame for prefers-reduced-motion.
 */
export const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    let teardown = () => {};
    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const start = () => {
      if (cancelled) return;
      teardown = initDotField(canvas);
      setReady(true);
    };

    // Two frames guarantees first paint has happened; then wait for the main thread to go idle.
    const rafId = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (typeof window.requestIdleCallback === "function") {
          idleId = window.requestIdleCallback(start, { timeout: 1500 });
        } else {
          timeoutId = window.setTimeout(start, 300);
        }
      }),
    );

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      teardown();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`hero-dots absolute inset-0 h-full w-full motion-safe:transition-opacity motion-safe:duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
    />
  );
};

function initDotField(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  let width = 0;
  let height = 0;
  let cols = 0;
  let rows = 0;
  let offsetX = 0;
  let offsetY = 0;
  let frameId = 0;
  let running = false;
  let onScreen = true;
  let lastDraw = 0;
  let lastInput = -Infinity;

  // Eased spotlight position and intensity; the targets are set by pointer or scroll.
  const spot = { x: 0, y: 0, strength: 0, tx: 0, ty: 0, targetStrength: 0 };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(width / SPACING) + 1;
    rows = Math.ceil(height / SPACING) + 1;
    offsetX = (width - (cols - 1) * SPACING) / 2;
    offsetY = (height - (rows - 1) * SPACING) / 2;
    if (!running) draw(0);
  };

  const followScroll = (time: number) => {
    // Touch devices: the spotlight sweeps across the grid as the page scrolls.
    const scroll = window.scrollY;
    spot.tx = width * (0.5 + 0.34 * Math.sin(scroll * 0.007 + time * 0.4));
    spot.ty = Math.min(height * 0.28 + scroll * 0.7, height * 0.9);
    spot.targetStrength = 0.7;
  };

  const draw = (now: number) => {
    const time = reducedMotion.matches ? 0 : now * 0.001;
    if (!finePointer.matches && !reducedMotion.matches) followScroll(time);

    spot.x += (spot.tx - spot.x) * 0.1;
    spot.y += (spot.ty - spot.y) * 0.1;
    spot.strength += (spot.targetStrength - spot.strength) * 0.06;

    ctx.clearRect(0, 0, width, height);

    if (spot.strength > 0.01) {
      // Soft spotlight wash under the cursor.
      const glow = ctx.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, RADIUS * 1.3);
      glow.addColorStop(0, `rgba(199, 243, 107, ${0.07 * spot.strength})`);
      glow.addColorStop(1, "rgba(199, 243, 107, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(spot.x - RADIUS * 1.3, spot.y - RADIUS * 1.3, RADIUS * 2.6, RADIUS * 2.6);
    }

    const radiusSq = RADIUS * RADIUS;
    const glowing: number[] = [];

    ctx.fillStyle = "#f2f4ef";
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const baseX = offsetX + col * SPACING;
        const baseY = offsetY + row * SPACING;
        // Ambient: a slow diagonal swell so the field breathes even without input.
        const wave = Math.sin(baseX * 0.011 + baseY * 0.007 - time * 0.8) * Math.cos(baseY * 0.009 - time * 0.5);
        let alpha = BASE_ALPHA + 0.045 * wave;
        let size = 1.3;
        let x = baseX;
        let y = baseY;

        if (spot.strength > 0.01) {
          const dx = baseX - spot.x;
          const dy = baseY - spot.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < radiusSq) {
            const dist = Math.sqrt(distSq) || 1;
            const falloff = 1 - dist / RADIUS;
            const force = falloff * falloff * spot.strength;
            x += (dx / dist) * force * 12;
            y += (dy / dist) * force * 12;
            alpha += force * 0.3;
            size += force * 1.5;
            if (force > 0.02) glowing.push(x, y, size, force);
          }
        }

        ctx.globalAlpha = alpha;
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
      }
    }

    // Accent pass: tint the dots nearest the spotlight lime.
    ctx.fillStyle = "#c7f36b";
    for (let i = 0; i < glowing.length; i += 4) {
      const size = glowing[i + 2];
      ctx.globalAlpha = Math.min(glowing[i + 3] * 1.1, 0.8);
      ctx.fillRect(glowing[i] - size / 2, glowing[i + 1] - size / 2, size, size);
    }
    ctx.globalAlpha = 1;
  };

  const loop = (now: number) => {
    frameId = requestAnimationFrame(loop);
    // Full frame rate while the cursor or page is moving; ~30fps for the slow ambient swell.
    const interacting = now - lastInput < 1500;
    if (!interacting && now - lastDraw < 32) return;
    lastDraw = now;
    draw(now);
  };

  const play = () => {
    if (running || !onScreen || document.hidden || reducedMotion.matches) return;
    running = true;
    frameId = requestAnimationFrame(loop);
  };

  const pause = () => {
    running = false;
    cancelAnimationFrame(frameId);
  };

  const onScroll = () => {
    lastInput = performance.now();
  };

  const onPointerMove = (event: PointerEvent) => {
    if (!finePointer.matches || event.pointerType === "touch") return;
    lastInput = performance.now();
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
    if (inside && spot.strength < 0.01) {
      // Fade in where the cursor is rather than sliding in from the last position.
      spot.x = x;
      spot.y = y;
    }
    spot.tx = x;
    spot.ty = y;
    spot.targetStrength = inside ? 1 : 0;
  };

  const onPointerLeave = () => {
    spot.targetStrength = 0;
  };

  const onVisibility = () => (document.hidden ? pause() : play());

  const onMotionPreference = () => {
    if (reducedMotion.matches) {
      pause();
      spot.strength = spot.targetStrength = 0;
      draw(0);
    } else {
      play();
    }
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  const intersectionObserver = new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    if (onScreen) play();
    else pause();
  });
  intersectionObserver.observe(canvas);

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  document.documentElement.addEventListener("pointerleave", onPointerLeave);
  document.addEventListener("visibilitychange", onVisibility);
  reducedMotion.addEventListener("change", onMotionPreference);

  resize();
  play();

  return () => {
    pause();
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("scroll", onScroll);
    document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    document.removeEventListener("visibilitychange", onVisibility);
    reducedMotion.removeEventListener("change", onMotionPreference);
  };
}
