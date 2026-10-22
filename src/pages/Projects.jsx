import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectGallery from "../components/projects/ProjectGallery";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const go = (next) => setIndex((next + projects.length) % projects.length);

  return (
    <main className="bg-navy-50">
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900">
          Projects
        </h1>
        <p className="mt-3 text-navy-700 max-w-2xl mx-auto">
          A curated selection of the buildings we've delivered for — from
          large-scale installs to quick turnarounds. Every photo here is
          real, never stock.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-6">
        <div className="rounded-xl border border-navy-100 bg-white p-6 md:p-8">
          <ProjectGallery
            key={project.id}
            images={project.images}
            beforeAfter={project.beforeAfter}
          />
          <div className="mt-6">
            <p className="text-xs font-semibold tracking-widest text-gold-600 uppercase mb-1">
              {project.location}
            </p>
            <h2 className="text-xl font-semibold text-navy-900">
              {project.name}
            </h2>
            <p className="mt-3 text-navy-700 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous project"
            className="h-10 w-10 shrink-0 rounded-full border border-navy-200 bg-white flex items-center justify-center text-navy-900 hover:border-navy-900 transition-colors"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12.7 4.3a1 1 0 010 1.4L8.42 10l4.3 4.3a1 1 0 01-1.44 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.42 0z" clipRule="evenodd" />
            </svg>
          </button>

          <div className="flex gap-2">
            {projects.map((p, i) => (
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

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next project"
            className="h-10 w-10 shrink-0 rounded-full border border-navy-200 bg-white flex items-center justify-center text-navy-900 hover:border-navy-900 transition-colors"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.3 15.7a1 1 0 010-1.4l4.29-4.3-4.3-4.3a1 1 0 011.42-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <p className="mt-3 text-center text-sm text-navy-500">
          {index + 1} of {projects.length}
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-20 text-center">
        <p className="text-navy-700">
          Want to see if we're a fit for your building?
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-flex rounded-md bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 transition-colors"
        >
          Get a Quote
        </Link>
      </section>
    </main>
  );
}
