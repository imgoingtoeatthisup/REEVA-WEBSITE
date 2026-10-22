import { Link } from "react-router-dom";
import PlaceholderImage from "../ui/PlaceholderImage";
import { serviceCategories } from "../../data/services";

export default function ServicesTeaser() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900">
          What We Do
        </h2>
        <p className="mt-2 text-navy-700">
          Three core categories, one point of contact for all of them.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {serviceCategories.map((category) => (
          <Link
            key={category.id}
            to={`/services#${category.id}`}
            className="group rounded-xl border border-navy-100 bg-white overflow-hidden hover:shadow-md hover:border-gold-500 transition-all"
          >
            <PlaceholderImage
              name={category.cardImage}
              aspect="aspect-[4/3]"
              className="[&>div]:rounded-none [&>div]:border-0"
            />
            <div className="p-5">
              <h3 className="font-semibold text-navy-900">
                {category.title}
              </h3>
              <p className="mt-1 text-sm text-navy-500">
                {category.items.slice(0, 3).map((i) => i.name.split(" (")[0].split(",")[0]).join(" · ")}
                {category.items.length > 3 ? ` +${category.items.length - 3} more` : ""}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:text-gold-700">
                Explore
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 010-1.06L10.94 10 7.21 6.29a.75.75 0 111.06-1.06l4.25 4.24a.75.75 0 010 1.06l-4.25 4.24a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
