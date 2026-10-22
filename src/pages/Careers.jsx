import PlaceholderImage from "../components/ui/PlaceholderImage";

const roles = [
  {
    title: "Sales Engineer — ELV Systems",
    experience: "3–5 years UAE experience",
    summary:
      "Grow our CCTV, access control, gate barrier and intercom business with building managers, FM companies and developers.",
    duties: [
      "Visit sites, understand requirements and prepare technical proposals and quotations",
      "Follow up on leads through to order and hand over to the installation team",
      "Knowledge of SIRA requirements and brands such as Hikvision or Samsung WiseNET is a plus",
    ],
  },
  {
    title: "Sales Engineer — UPS & Generator",
    experience: "3–5 years UAE experience",
    summary:
      "Sell UPS and generator supply, installation and AMC contracts to residential and commercial clients.",
    duties: [
      "Size systems and prepare quotations with the technical team",
      "Build relationships with building managers and FM companies",
      "Renew and grow quarterly PPM maintenance contracts",
    ],
  },
  {
    title: "Technician — UPS & Generator",
    experience: "3–5 years UAE experience",
    summary:
      "Install, maintain and repair UPS units and generators across villas, towers and control rooms.",
    duties: [
      "Carry out quarterly PPM visits and emergency breakdown calls",
      "Test batteries, load and changeover systems and log findings",
      "Valid UAE driving license preferred",
    ],
  },
  {
    title: "Technician — ELV Systems",
    experience: "3–5 years UAE experience",
    summary:
      "Install and service CCTV, access control, intercom, gate barrier and structured cabling systems.",
    duties: [
      "Install, configure and commission cameras, NVRs and access panels",
      "Fault-find and repair on AMC and call-out visits",
      "Work to SIRA standards and keep clear job records",
    ],
  },
  {
    title: "Admin Coordinator",
    experience: "2–3 years UAE experience",
    summary:
      "Keep the office running: quotations, invoices, scheduling and client follow-up.",
    duties: [
      "Prepare and track quotations, LPOs and invoices",
      "Schedule site visits and AMC maintenance with the technical team",
      "Manage company documents, licenses and renewals",
    ],
  },
  {
    title: "Admin Intern",
    experience: "Fresh graduates welcome",
    summary:
      "A hands-on start in a growing contracting company. We'll teach you how the office runs, from quotations to client follow-ups.",
    duties: [
      "Help prepare quotations and keep them on file",
      "Scan, file and organise documents, invoices and job reports",
      "Answer calls and emails, and support the team with day-to-day admin",
      "Good English, comfortable with Excel/Word, organised and eager to learn",
    ],
  },
  {
    title: "Social Media Intern",
    experience: "Remote or hybrid",
    summary:
      "Run our LinkedIn, Instagram, Facebook and TikTok. Work with our engineers to turn real site photos into posts and short videos, with plenty of creative freedom.",
    duties: [
      "Plan and post content consistently, and keep up with trends",
      "Film and edit short before/after videos on occasional site visits",
      "Reply to comments and messages in the company voice",
      "Send your Instagram/TikTok or a portfolio with your application",
    ],
  },
];

const applyLink = (title) =>
  `mailto:admin@reevallc.com?subject=${encodeURIComponent(`Application: ${title}`)}`;

const benefits = ["Company car", "Visa sponsorship", "Health insurance"];

export default function Careers() {
  return (
    <main>
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-10 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900">
            Careers at Reeva
          </h1>
          <p className="mt-4 text-navy-700 leading-relaxed">
            We work across CCTV, Access Control, Structured Cabling,
            Generators, and UPS — and we're growing. We're looking for
            motivated professionals with strong communication and technical
            skills. Relevant UAE experience is required for experienced
            roles, and immediate joiners are preferred.
          </p>
          <p className="mt-4 text-navy-700">
            Interested in joining the Reeva team? Send your CV to{" "}
            <a href="mailto:admin@reevallc.com" className="font-semibold text-gold-600 hover:text-gold-700">
              admin@reevallc.com
            </a>{" "}
            — we'll be in touch if there's a fit.
          </p>
        </div>
        <PlaceholderImage name="careers-team-01.jpg" alt="Engineer working on an electrical panel" aspect="aspect-[4/3]" />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-navy-900 mb-6">
          Open Positions
        </h2>
        <div className="space-y-3">
          {roles.map((role) => (
            <details
              key={role.title}
              className="group rounded-md border border-navy-100 bg-white"
            >
              <summary className="flex cursor-pointer list-none flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-semibold text-navy-900">{role.title}</span>
                <span className="flex items-center gap-3 text-sm text-navy-500">
                  {role.experience}
                  <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-open:rotate-180" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-navy-100 px-5 pb-5 pt-4 text-navy-700">
                <p className="leading-relaxed">{role.summary}</p>
                <ul className="mt-3 space-y-1 text-sm">
                  {role.duties.map((duty) => (
                    <li key={duty}>• {duty}</li>
                  ))}
                </ul>
                <a
                  href={applyLink(role.title)}
                  className="mt-4 inline-flex rounded-md bg-gold-500 hover:bg-gold-600 text-navy-900 text-sm font-semibold px-4 py-2 transition-colors"
                >
                  Apply for this role
                </a>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-navy-900 mb-3">Benefits</h3>
          <div className="flex flex-wrap gap-2">
            {benefits.map((b) => (
              <span
                key={b}
                className="rounded-md bg-navy-100 text-navy-900 text-sm font-medium px-3 py-1.5"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={applyLink("General")}
            className="inline-flex rounded-md bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 transition-colors"
          >
            Send a general application
          </a>
        </div>
      </section>
    </main>
  );
}
