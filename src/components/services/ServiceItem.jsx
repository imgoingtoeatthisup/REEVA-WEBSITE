import PlaceholderImage from "../ui/PlaceholderImage";
import GlossaryTerm from "../ui/GlossaryTerm";
import { glossary } from "../../data/services";

// Wraps any glossary terms found in a description with a tooltip on first use.
function withGlossaryTooltips(text, terms = []) {
  if (!terms.length) return text;
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "g");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    terms.includes(part) ? <GlossaryTerm key={i} term={part} /> : part
  );
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function ServiceItem({ service }) {
  return (
    <div className="grid gap-6 py-6 border-t border-navy-100 first:border-t-0 md:grid-cols-[1fr_1fr] md:items-start">
      <div>
        <h4 className="text-lg font-semibold text-navy-900">
          {service.name}
          {service.comingSoon && (
            <span className="ml-2 align-middle text-xs font-medium uppercase tracking-wide text-gold-600 bg-gold-100 rounded-md px-2 py-0.5">
              Coming Soon
            </span>
          )}
        </h4>
        {service.brands && (
          <p className="mt-1 text-sm text-navy-500">{service.brands}</p>
        )}
        {!service.comingSoon && (
          <p className="mt-3 text-navy-700 leading-relaxed">
            {glossary && service.glossary
              ? withGlossaryTooltips(service.description, service.glossary)
              : service.description}
          </p>
        )}
      </div>

      {!service.comingSoon && (
        <div>
          {service.beforeAfter ? (
            <div className="grid grid-cols-2 gap-3">
              <PlaceholderImage
                name={service.beforeAfter.before}
                caption="Before"
              />
              <PlaceholderImage
                name={service.beforeAfter.after}
                caption="After"
              />
            </div>
          ) : (
            <PlaceholderImage
              name={service.image}
              caption="Example installation"
            />
          )}
        </div>
      )}
    </div>
  );
}
