import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { serviceCategories } from "../data/services";
import ServiceCategoryCard from "../components/services/ServiceCategoryCard";

// Maps short hash links (CCTV / Generators / Fit-Out / Emergency)
// to the Services category id whose accordion should open.
export const quickNavMap = {
  cctv: "elv-security",
  generators: "mep-power",
  "fit-out": "civil-fitout",
  emergency: "fire-safety",
  fire: "fire-safety",
};

export default function Services() {
  const location = useLocation();
  const [openIds, setOpenIds] = useState(() => new Set());
  const cardRefs = useRef({});

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // On load (or when navigated here with a #hash from Home's quick-nav),
  // open the matching card and scroll it into view.
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;
    const targetId = quickNavMap[hash] || hash;
    const match = serviceCategories.find((c) => c.id === targetId);
    if (!match) return;

    setOpenIds((prev) => new Set(prev).add(targetId));
    // Wait a tick so the grid-rows expand transition has a target to scroll to.
    requestAnimationFrame(() => {
      cardRefs.current[targetId]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [location.hash]);

  return (
    <main className="bg-navy-50">
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900">
          Services
        </h1>
        <p className="mt-3 text-navy-700 max-w-2xl mx-auto">
          Explore each category to see the specific services, brands and
          work included.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-20 space-y-6">
        {serviceCategories.map((category) => (
          <ServiceCategoryCard
            key={category.id}
            category={category}
            isOpen={openIds.has(category.id)}
            onToggle={toggle}
            ref={(el) => (cardRefs.current[category.id] = el)}
          />
        ))}
      </section>
    </main>
  );
}
