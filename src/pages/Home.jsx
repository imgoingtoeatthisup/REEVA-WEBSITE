import { Link } from "react-router-dom";
import HeroCarousel from "../components/home/HeroCarousel";
import CountUp from "../components/ui/CountUp";
import TrustedAtSection from "../components/home/TrustedAtSection";
import ServicesTeaser from "../components/home/ServicesTeaser";
import FeaturedProjects from "../components/home/FeaturedProjects";
import TestimonialsTeaser from "../components/home/TestimonialsTeaser";
import BrandsStrip from "../components/home/BrandsStrip";
import HowWeWork from "../components/home/HowWeWork";
import FAQSection from "../components/home/FAQSection";

export default function Home() {
  return (
    <main>
      {/* Hero / Trust strip — HeroCarousel now sits as a full-bleed
          background layer, with a navy scrim so the white text stays
          readable over any photo. */}
      <section className="relative overflow-hidden min-h-[640px] md:min-h-[760px] flex items-center bg-navy-900 text-accent-white">
        <HeroCarousel fill />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/75 to-navy-900/90" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="flex flex-wrap justify-center gap-2 text-xs font-medium text-navy-900 mb-6">
            {["Since 2021", "SIRA Approved", "Serving Dubai", "Abu Dhabi Coming Soon"].map((badge) => (
              <span key={badge} className="rounded-md bg-gold-500 px-3 py-1">
                {badge}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
            SIRA-Approved Technical Contracting for Dubai's Buildings
          </h1>
          <p className="mt-4 text-accent-white/80">
            CCTV systems designed and installed across 40+ major towers since
            2023
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-accent-white/90">
            {[
              "Experienced Engineers",
              "High Quality Materials",
              "On-Time Delivery",
              "Responsive Support",
            ].map((bullet) => (
              <li key={bullet} className="flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" className="h-4 w-4 text-gold-500" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                {bullet}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              to="/projects"
              className="rounded-md border border-accent-white/40 hover:border-accent-white text-accent-white font-semibold px-6 py-3 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip — moved out of the hero badge row (it used to jostle
          the layout as the count animated up). content-spec.md's "64+
          Projects Completed" now lives here alongside a couple of other
          numbers worth surfacing. */}
      <section className="bg-white border-b border-navy-100">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-navy-100">
          {[
            { target: 64, suffix: "+", label: "Projects Completed" },
            { target: 5, suffix: "+", label: "Years in Business" },
            { target: 40, suffix: "+", label: "Major Towers Served" },
            { target: 8, suffix: "+", label: "Brand Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-2">
              <p className="text-2xl md:text-3xl font-bold text-navy-900">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs md:text-sm text-navy-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustedAtSection />
      <ServicesTeaser />
      <FeaturedProjects />
      <TestimonialsTeaser />
      <HowWeWork />
      <BrandsStrip />
      <FAQSection />

      {/* Closing call to action */}
      <section className="bg-navy-900 text-accent-white">
        <div className="max-w-5xl mx-auto px-4 py-14 flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Need a quote for your building?
            </h2>
            <p className="mt-2 text-accent-white/80">
              Tell us what you need and we'll get back to you within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 transition-colors"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/971549982801"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-accent-white/40 hover:border-accent-white font-semibold px-6 py-3 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}