import { useCallback, useEffect, useRef, useState } from "react";
import PlaceholderImage from "../ui/PlaceholderImage";

const slides = [
  {
    id: "security",
    image: "hero-main-01.jpg",
    alt: "Security/CCTV installation on site",
    caption: "ELV & Security Systems",
  },
  {
    id: "mep",
    image: "hero-main-02.jpg",
    alt: "Generator/MEP equipment on site",
    caption: "MEP & Power Solutions",
  },
  {
    id: "fitout",
    image: "hero-main-03.jpg",
    alt: "Finished fit-out interior",
    caption: "Civil Contracting & Fit-Out",
  },
];

const INTERVAL_MS = 5000;

// `fill` = render as an absolutely-positioned full-bleed background
// (used behind the Home hero text) instead of a boxed, rounded element.
export default function HeroCarousel({ fill = false }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (paused || prefersReducedMotion.current) return;
    timerRef.current = setTimeout(next, INTERVAL_MS);
    return () => clearTimeout(timerRef.current);
  }, [index, paused, next]);

  return (
    <div
      className={`overflow-hidden ${
        fill ? "absolute inset-0 h-full w-full" : "relative rounded-xl"
      }`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured work across our service categories"
    >
      <div
        className="flex h-full transition-transform duration-700 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={slide.id} className="w-full h-full shrink-0" aria-hidden={i !== index}>
            <PlaceholderImage
              name={slide.image}
              caption={fill ? undefined : slide.caption}
              aspect="aspect-[16/7]"
              fill={fill}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className={`absolute ${
          fill ? "bottom-6" : "top-1/2 -translate-y-1/2"
        } left-2 h-9 w-9 rounded-full bg-navy-900/60 hover:bg-navy-900/80 text-accent-white flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500`}
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 010 1.06L9.06 10l3.73 3.71a.75.75 0 11-1.06 1.06l-4.25-4.24a.75.75 0 010-1.06l4.25-4.24a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className={`absolute ${
          fill ? "bottom-6" : "top-1/2 -translate-y-1/2"
        } right-2 h-9 w-9 rounded-full bg-navy-900/60 hover:bg-navy-900/80 text-accent-white flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500`}
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 010-1.06L10.94 10 7.21 6.29a.75.75 0 111.06-1.06l4.25 4.24a.75.75 0 010 1.06l-4.25 4.24a.75.75 0 01-1.06 0z" clipRule="evenodd" />
        </svg>
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${slide.caption}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-gold-500" : "w-2.5 bg-accent-white/60 hover:bg-accent-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}