import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PlaceholderImage from "../ui/PlaceholderImage";
import { projects } from "../../data/projects";

// Carousel-worthy projects — the ones with real before/gallery imagery,
// capped at 4 so it doesn't run forever on autoplay.
const featured = projects.filter((p) => p.images).slice(0, 4);

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef(null);

  const go = (next) => setIndex((next + featured.length) % featured.length);

  useEffect(() => {
    if (hovering) return undefined;
    timeoutRef.current = window.setTimeout(() => go(index + 1), 6000);
    return () => window.clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, hovering]);

  const project = featured[index];

  return (
    <section className="bg-navy-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900">
              Featured Projects
            </h2>
            <p className="mt-2 text-navy-700">
              A sample of the buildings we've delivered for.
            </p>
          </div>
          <Link
            to="/projects"
            className="hidden md:inline-flex rounded-md border border-navy-300 hover:border-navy-900 text-navy-900 font-semibold px-4 py-2 text-sm transition-colors shrink-0"
          >
            View All Projects
          </Link>
        </div>

        <div
          className="relative rounded-xl border border-navy-100 bg-white overflow-hidden"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="grid md:grid-cols-2">
            <PlaceholderImage
              name={project.images?.[0]}
              className="[&>div]:rounded-none [&>div]:border-0 h-full min-h-[260px]"
              fill
            />
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-widest text-gold-600 uppercase mb-2">
                {project.location}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-navy-900">
                {project.name}
              </h3>
              <p className="mt-3 text-navy-700 leading-relaxed">
                {project.description}
              </p>
              <Link
                to="/projects"
                className="mt-6 inline-flex items-center gap-1.5 font-semibold text-navy-900 hover:text-gold-600 transition-colors w-fit"
              >
                View Details
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.3 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L11.58 10 7.3 5.7a1 1 0 010-1.4z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous project"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/95 shadow-md flex items-center justify-center text-navy-900 hover:bg-white transition-colors"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12.7 4.3a1 1 0 010 1.4L8.42 10l4.3 4.3a1 1 0 01-1.44 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.42 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next project"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/95 shadow-md flex items-center justify-center text-navy-900 hover:bg-white transition-colors"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.3 15.7a1 1 0 010-1.4l4.29-4.3-4.3-4.3a1 1 0 011.42-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {featured.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${p.name}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-gold-500" : "w-2 bg-navy-200 hover:bg-navy-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/projects"
            className="inline-flex rounded-md border border-navy-300 text-navy-900 font-semibold px-4 py-2 text-sm"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
