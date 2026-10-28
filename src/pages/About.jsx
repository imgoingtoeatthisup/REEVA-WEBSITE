import PlaceholderImage from "../components/ui/PlaceholderImage";

// Activities as listed on the DET trade license.
const licensedActivities = [
  "Electromechanical Works Contracting",
  "Security Equipment Installation & Maintenance",
  "Security Systems & Equipment Trading",
  "Technical Services Works",
];

const values = [
  {
    title: "Honesty & Accountability",
    body: "To clients, colleagues, themselves, and the company.",
  },
];

export default function About() {
  return (
    <main>
      {/* Who we are */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-14 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900">
            About Reeva
          </h1>
          <p className="mt-4 text-navy-700 leading-relaxed">
            Reeva Technical Services Contracting LLC is an independent
            organization incorporated in Dubai, UAE in 2021, offering a
            comprehensive range of professional services spanning security
            systems, MEP, and civil/interior fit-out.
          </p>
        </div>
        <PlaceholderImage name="about-team-01.jpg" alt="Reeva engineer servicing a standby generator" aspect="aspect-[4/3]" />
      </section>

      {/* Our story */}
      <section className="bg-navy-50 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">
            Our Story
          </h2>
          <p className="mt-4 text-navy-700 leading-relaxed">
            After 15 years working in the industry, our founders set out to
            build something of their own — a company run the way they always
            believed one should be: hands-on, accountable, and built on
            trust.
          </p>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-navy-100 bg-white p-6">
            <h3 className="font-semibold text-navy-900 text-lg">Vision</h3>
            <p className="mt-2 text-navy-700 leading-relaxed">
              To be a leading service provider offering differentiated,
              high-value products and services with a satisfying ownership
              experience that helps customers achieve their goals.
            </p>
          </div>
          <div className="rounded-xl border border-navy-100 bg-white p-6">
            <h3 className="font-semibold text-navy-900 text-lg">Mission</h3>
            <p className="mt-2 text-navy-700 leading-relaxed">
              To be the customer's first choice by understanding their needs
              and consistently delivering the highest level of service.
            </p>
          </div>
          <div className="rounded-xl border border-navy-100 bg-white p-6">
            <h3 className="font-semibold text-navy-900 text-lg">Values</h3>
            {values.map((v) => (
              <p key={v.title} className="mt-2 text-navy-700 leading-relaxed">
                <span className="font-semibold text-navy-900">{v.title}</span>
                {" — "}
                {v.body}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* How we're run */}
      <section className="bg-navy-900 text-accent-white py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">How We're Run</h2>
          <p className="mt-4 text-accent-white/80 leading-relaxed">
            Reeva is run hands-on by its owners, supported by a small
            dedicated office team and a network of vetted, qualified
            engineers on every project.
          </p>
        </div>
      </section>

      {/* Compliance & Licensing — "why trust us", near the bottom */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 text-center">
          Compliance & Licensing
        </h2>
        <p className="mt-4 text-navy-700 text-center max-w-2xl mx-auto">
          Every CCTV camera and NVR model we install carries individual SIRA
          product approval.
        </p>

        <div className="mt-8 rounded-md border border-navy-100 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-500 text-center">
            Licensed by Dubai DET for
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-navy-900">
            {licensedActivities.map((activity) => (
              <li key={activity} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
