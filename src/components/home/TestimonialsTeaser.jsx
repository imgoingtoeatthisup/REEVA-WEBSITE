import { testimonials } from "../../data/projects";

export default function TestimonialsTeaser() {
  // Hidden until at least one real quote is added in data/projects.js.
  if (!testimonials.some((t) => t.quote)) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900">
          What Clients Say
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-xl border border-navy-100 bg-white p-6 flex flex-col"
          >
            <svg viewBox="0 0 32 24" className="h-6 w-6 text-gold-500 mb-3" fill="currentColor" aria-hidden="true">
              <path d="M0 24V14.4C0 6.4 5.6 0.8 13.6 0L14.4 3.2C9.6 4.8 6.4 8 6.4 12.8H12.8V24H0ZM17.6 24V14.4C17.6 6.4 23.2 0.8 31.2 0L32 3.2C27.2 4.8 24 8 24 12.8H30.4V24H17.6Z" />
            </svg>
            {t.quote ? (
              <p className="text-navy-700 leading-relaxed flex-1">{t.quote}</p>
            ) : (
              <p className="text-navy-400 italic leading-relaxed flex-1">
                Quote coming soon.
              </p>
            )}
            <div className="mt-4 pt-4 border-t border-navy-100">
              <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
              {t.company && (
                <p className="text-xs text-navy-500">{t.company}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
