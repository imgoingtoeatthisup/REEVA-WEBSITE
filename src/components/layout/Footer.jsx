import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-accent-white/80">
      <img
        src="/images/accent-bar.png"
        alt=""
        aria-hidden="true"
        className="w-full h-1 object-cover"
      />
      <div className="max-w-6xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <span className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5">
            <img
              src="/images/full-logo.png"
              alt="Reeva Technical — Act with Integrity"
              className="h-9 w-auto"
            />
          </span>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            SIRA & DCD Approved Technical Contracting for Dubai's Buildings.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-md bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-4 py-2 text-sm transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        <div>
          <p className="font-semibold text-accent-white mb-4 text-xs uppercase tracking-widest">
            Quick Links
          </p>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-gold-500 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-accent-white mb-4 text-xs uppercase tracking-widest">
            Contact
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-white/5 text-gold-500">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M10 2a8 8 0 00-6.9 12l-1 3.6 3.7-1a8 8 0 100.1-14.6zm4.7 11.3c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.5-4-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.1.1.3 0 .4l-.4.5c-.1.1-.2.3-.1.5.2.3.7 1.1 1.5 1.8.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.9 1c.2.1.4.1.5.2.1.2.1.7-.1 1.3z" />
                </svg>
              </span>
              <a
                href="https://wa.me/971549982801"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-500 transition-colors"
              >
                0549982801
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-white/5 text-gold-500">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M2.5 5A1.5 1.5 0 014 3.5h12A1.5 1.5 0 0117.5 5v.4L10 10.1 2.5 5.4V5z" />
                  <path d="M2.5 7.2V15A1.5 1.5 0 004 16.5h12a1.5 1.5 0 001.5-1.5V7.2l-7.1 4.4a.75.75 0 01-.8 0L2.5 7.2z" />
                </svg>
              </span>
              <a
                href="mailto:operation@reevallc.com"
                className="hover:text-gold-500 transition-colors"
              >
                operation@reevallc.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-white/5 text-gold-500">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z" clipRule="evenodd" />
                </svg>
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Arenco+Offices+Building+4+Dubai+Investment+Park+1"
                target="_blank"
                rel="noreferrer"
                className="leading-relaxed hover:text-gold-500 transition-colors"
              >
                Office 217, Building 4, Arenco Offices
                <br />
                74 Ring Street, Dubai Investment Park 1
                <br />
                Jebel Ali, Dubai, UAE
              </a>
            </li>
          </ul>

        </div>
      </div>
      <div className="border-t border-accent-white/10 text-xs text-center py-5 text-accent-white/50">
        © {new Date().getFullYear()} Reeva Technical Services Contracting LLC. All rights reserved.
      </div>
    </footer>
  );
}
