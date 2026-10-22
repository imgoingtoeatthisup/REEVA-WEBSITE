import { useState } from "react";

// Submissions are emailed via FormSubmit (formsubmit.co). The very first
// submission triggers a one-time activation email to this address.
const QUOTE_EMAIL = "operation@reevallc.com";

const serviceOptions = [
  "Fire Alarm / Firefighting",
  "CCTV",
  "Access Control",
  "Gate Barrier",
  "Intercom",
  "Generator / UPS",
  "Electrical",
  "HVAC / Mechanical",
  "Waterproofing",
  "Fit-Out",
  "Other",
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const data = new FormData(e.target);
    data.append("services", selectedServices.join(", ") || "Not specified");
    data.append("_subject", "New quote request from the website");
    data.append("_template", "table");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${QUOTE_EMAIL}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="bg-navy-50">
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900">
          Contact Us
        </h1>
        <p className="mt-3 text-navy-700 max-w-xl mx-auto">
          Tell us what you need and we'll get back to you.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-20">
        {/* Form */}
        <div className="rounded-xl border border-navy-100 bg-white p-6 md:p-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-gold-100 px-3 py-2 text-sm font-semibold text-gold-700">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.3.7l3 3a1 1 0 001.4-1.4L11 9.6V6z" clipRule="evenodd" />
            </svg>
            Typically responds within 24 hours
          </div>

          {submitted ? (
            <div className="rounded-md bg-navy-50 p-8 text-center">
              <p className="text-lg font-semibold text-navy-900">
                Thanks — your message is in.
              </p>
              <p className="mt-2 text-navy-700">
                We'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-navy-900">Name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-md border border-navy-100 px-3 py-2 text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-navy-900">Company</span>
                  <input
                    name="company"
                    type="text"
                    className="mt-1 w-full rounded-md border border-navy-100 px-3 py-2 text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-navy-900">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-md border border-navy-100 px-3 py-2 text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-navy-900">Phone</span>
                  <input
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-md border border-navy-100 px-3 py-2 text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </label>
              </div>

              <fieldset>
                <legend className="text-sm font-medium text-navy-900 mb-2">
                  Service Needed
                </legend>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {serviceOptions.map((service) => {
                    const checked = selectedServices.includes(service);
                    return (
                      <label
                        key={service}
                        className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm cursor-pointer transition-colors ${
                          checked
                            ? "border-gold-500 bg-gold-100/50 text-navy-900"
                            : "border-navy-100 text-navy-700 hover:border-navy-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleService(service)}
                          className="accent-gold-500"
                        />
                        {service}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <label className="block">
                <span className="text-sm font-medium text-navy-900">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-md border border-navy-100 px-3 py-2 text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-navy-900">
                  Upload Drawing <span className="text-navy-400 font-normal">(optional)</span>
                </span>
                <input
                  type="file"
                  name="attachment"
                  className="mt-1 w-full text-sm text-navy-700 file:mr-3 file:rounded-md file:border-0 file:bg-navy-100 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-navy-900 hover:file:bg-navy-100/70"
                />
              </label>

              {error && (
                <p className="text-sm text-red-700" role="alert">
                  Sorry, your message didn't send. Please try again or reach us on WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-md bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-navy-900 font-semibold px-6 py-3 transition-colors sm:w-auto"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

      </section>
    </main>
  );
}
