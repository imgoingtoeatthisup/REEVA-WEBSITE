import { useId, useState } from "react";
import { glossary } from "../../data/services";

/**
 * Dotted-underline term with a hover/tap tooltip, per content-spec.md's
 * "Jargon Glossary" build note: tooltips on first use within the Services
 * page instead of a separate glossary section.
 */
export default function GlossaryTerm({ term }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const definition = glossary[term];

  if (!definition) return <span>{term}</span>;

  return (
    <span className="relative inline-block">
      <button
        type="button"
        aria-describedby={id}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        className="underline decoration-dotted decoration-navy-300 underline-offset-2 text-navy-900 font-medium"
      >
        {term}
      </button>
      {open && (
        <span
          id={id}
          role="tooltip"
          className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 rounded-md bg-navy-900 text-accent-white text-xs leading-snug p-2 shadow-lg"
        >
          {definition}
        </span>
      )}
    </span>
  );
}
