import { useState } from "react";
import PlaceholderImage from "../ui/PlaceholderImage";

/**
 * content-spec.md Design note: "carousel per project where 2+ photos exist;
 * single image where only one exists; never stock." Before/after pairs
 * (before/after pairs) render as a fixed side-by-side, not a carousel, since
 * both images need to stay visible at once for the comparison to land.
 */
export default function ProjectGallery({ images, beforeAfter }) {
  const [index, setIndex] = useState(0);

  if (beforeAfter) {
    return (
      <div className="grid grid-cols-2 gap-2">
        <PlaceholderImage name={beforeAfter.before} caption="Before" aspect="aspect-[4/3]" />
        <PlaceholderImage name={beforeAfter.after} caption="After" aspect="aspect-[4/3]" />
      </div>
    );
  }

  if (!images || images.length === 1) {
    return <PlaceholderImage name={images?.[0]} aspect="aspect-[16/10]" />;
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={img} className="w-full shrink-0" aria-hidden={i !== index}>
            <PlaceholderImage name={img} aspect="aspect-[16/10]" className="[&>*]:rounded-none [&>*]:border-0" />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-navy-900/60 hover:bg-navy-900/80 text-accent-white flex items-center justify-center"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 010 1.06L9.06 10l3.73 3.71a.75.75 0 11-1.06 1.06l-4.25-4.24a.75.75 0 010-1.06l4.25-4.24a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => setIndex((index + 1) % images.length)}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-navy-900/60 hover:bg-navy-900/80 text-accent-white flex items-center justify-center"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 010-1.06L10.94 10 7.21 6.29a.75.75 0 111.06-1.06l4.25 4.24a.75.75 0 010 1.06l-4.25 4.24a.75.75 0 01-1.06 0z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((img, i) => (
          <button
            key={img}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-5 bg-gold-500" : "w-2 bg-accent-white/60 hover:bg-accent-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
