import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white text-navy-900 sticky top-0 z-30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
          <img
            src="/images/full-logo.png"
            alt="Reeva Technical — Act with Integrity"
            className="h-12 md:h-14 w-auto"
          />
        </NavLink>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-gold-600 ${
                  isActive ? "text-gold-600" : "text-navy-900/80"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <NavLink
            to="/contact"
            className="hidden md:inline-flex rounded-md bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-4 py-2 text-sm transition-colors"
          >
            Get a Quote
          </NavLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-navy-100"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`md:hidden grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden border-t border-navy-100">
          <nav className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-1 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 transition-colors ${
                    isActive
                      ? "bg-gold-100 text-gold-700"
                      : "text-navy-900/80 hover:bg-navy-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-4 py-2.5 transition-colors"
            >
              Get a Quote
            </NavLink>
          </nav>
        </div>
      </div>

      <img src="/images/accent-bar.png" alt="" aria-hidden="true" className="w-full h-1 object-cover" />
    </header>
  );
}