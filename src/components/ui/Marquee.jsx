import { useEffect, useRef, useState } from "react";

/**
 * Auto-scrolling horizontal marquee — content-spec.md's "Trusted At" and
 * "Brands & Equipment" scrollers.
 * - Scrolls continuously at a steady speed, like a normal marquee.
 * - Pauses on hover (desktop) so text is easy to read.
 * - Left/right arrows let people nudge through the list manually; using
 *   them pauses auto-scroll briefly so it doesn't fight your click.
 */
export default function Marquee({ items, variant = "light" }) {
  const isDark = variant === "dark";
  const trackRef = useRef(null);
  const halfWidthRef = useRef(0);

  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const xRef = useRef(0);
  const resumeTimeoutRef = useRef(null);

  const SPEED = 40; // px per second
  const NUDGE = 260; // px per arrow click

  useEffect(() => {
    if (trackRef.current) {
      halfWidthRef.current = trackRef.current.scrollWidth / 2;
    }
  }, [items]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId;
    let lastTime = performance.now();

    const tick = (now) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (!paused && !hovering && halfWidthRef.current > 0) {
        xRef.current -= SPEED * dt;
        if (xRef.current <= -halfWidthRef.current) {
          xRef.current += halfWidthRef.current;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${xRef.current}px)`;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [paused, hovering]);

  const nudge = (direction) => {
    const half = halfWidthRef.current;
    if (!half || !trackRef.current) return;

    xRef.current += direction * NUDGE;
    if (xRef.current <= -half) xRef.current += half;
    if (xRef.current > 0) xRef.current -= half;

    trackRef.current.style.transition = "transform 0.4s ease";
    trackRef.current.style.transform = `translateX(${xRef.current}px)`;
    window.setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = "";
    }, 400);

    setPaused(true);
    window.clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = window.setTimeout(() => setPaused(false), 2200);
  };

  const arrowBase =
    "absolute top-0 bottom-0 flex items-center px-3 z-10 transition-opacity";
  const arrowColor = isDark ? "text-accent-white" : "text-navy-900";

  return (
    <div
      className={`relative group/marquee overflow-hidden select-none ${
        isDark ? "bg-navy-900" : "bg-white"
      }`}
      role="list"
      aria-label="Scrolling list — hover to pause, use arrows to move manually"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                role="listitem"
                className={`shrink-0 px-8 py-5 text-sm font-semibold tracking-wide whitespace-nowrap border-r ${
                  isDark
                    ? "text-accent-white/70 border-accent-white/10"
                    : "text-navy-700 border-navy-100"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => nudge(1)}
        aria-label="Scroll backward"
        className={`${arrowBase} left-0 opacity-70 hover:opacity-100 focus-visible:opacity-100 ${
          isDark ? "bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent" : "bg-gradient-to-r from-white via-white/90 to-transparent"
        }`}
      >
        <svg viewBox="0 0 20 20" className={`h-5 w-5 ${arrowColor}`} fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M12.7 4.3a1 1 0 010 1.4L8.42 10l4.3 4.3a1 1 0 01-1.44 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.42 0z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => nudge(-1)}
        aria-label="Scroll forward"
        className={`${arrowBase} right-0 opacity-70 hover:opacity-100 focus-visible:opacity-100 ${
          isDark ? "bg-gradient-to-l from-navy-900 via-navy-900/90 to-transparent" : "bg-gradient-to-l from-white via-white/90 to-transparent"
        }`}
      >
        <svg viewBox="0 0 20 20" className={`h-5 w-5 ${arrowColor}`} fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M7.3 15.7a1 1 0 010-1.4l4.29-4.3-4.3-4.3a1 1 0 011.42-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
