import { forwardRef } from "react";
import PlaceholderImage from "../ui/PlaceholderImage";
import ServiceItem from "./ServiceItem";

/**
 * One category card (ELV & Security / MEP & Power / Civil & Fit-Out).
 * Collapsed: image + title + "Explore" button.
 * Expanded: same header (button now reads "Collapse") + list of
 * ServiceItem rows underneath, on the same page — content-spec.md's
 * "card-then-expand" behavior.
 *
 * `isOpen` / `onToggle` are controlled by the parent Services page so
 * a quick-nav link from Home (e.g. #elv-security) can open the right
 * card and scroll to it on load.
 */
const ServiceCategoryCard = forwardRef(function ServiceCategoryCard(
  { category, isOpen, onToggle },
  ref
) {
  const panelId = `${category.id}-panel`;
  const buttonId = `${category.id}-trigger`;

  return (
    <div
      ref={ref}
      id={category.id}
      className="scroll-mt-24 rounded-xl border border-navy-100 bg-white shadow-sm overflow-hidden"
    >
      {/* Full-bleed background photo with a dark navy overlay so title/CTA
          stay legible over any image — replaces the earlier boxed-image
          layout for a more industrial, less "startup card" feel. */}
      <div className="relative isolate">
        <PlaceholderImage
          name={category.cardImage}
          fill
          className="absolute inset-0 -z-10"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40" />
        <div className="relative flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-accent-white">
              {category.title}
            </h3>
            <p className="mt-1 text-sm text-accent-white/70">
              {category.items.length} service
              {category.items.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            id={buttonId}
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => onToggle(category.id)}
            className="inline-flex items-center gap-2 self-start rounded-md bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-5 py-2.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-white"
          >
            {isOpen ? "Collapse" : "Explore"}
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className={`h-4 w-4 transition-transform duration-300 motion-reduce:transition-none ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Grid-rows trick animates height without a fixed max-height guess */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            {category.items.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ServiceCategoryCard;
