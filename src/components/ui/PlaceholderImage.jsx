import { useState } from "react";

// Looks for /images/<name> (i.e. public/images/<name>). If the file is there
// it's shown; if not, the dashed placeholder box is rendered instead. To swap
// a stock photo for a real one later, replace the file with the same name.
// The filename label only shows in dev, so the live site shows a plain tile.
export default function PlaceholderImage({
  name,
  caption,
  alt = "",
  className = "",
  aspect = "aspect-[4/3]",
  fill = false,
}) {
  const [missing, setMissing] = useState(!name);
  const boxClass = fill ? "h-full w-full rounded-none" : `${aspect} w-full rounded-lg`;

  return (
    <figure className={`flex flex-col ${fill ? "h-full" : ""} ${className}`}>
      {missing ? (
        <div
          className={`${boxClass} bg-navy-100 flex items-center justify-center text-center p-4 ${
            import.meta.env.DEV ? "border border-dashed border-navy-300" : ""
          }`}
        >
          {import.meta.env.DEV && (
            <span className="text-xs font-medium text-navy-500 break-all">
              {name}
            </span>
          )}
        </div>
      ) : (
        <img
          src={`/images/${name}`}
          alt={alt || caption || ""}
          loading="lazy"
          onError={() => setMissing(true)}
          className={`${boxClass} object-cover`}
        />
      )}
      {caption && (
        <figcaption className="mt-2 text-sm text-navy-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
