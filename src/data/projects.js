// Source of truth: content-spec.md → "Projects" section.
// Never use stock photos here — Projects is the proof section. A borrowed
// building photo (e.g. from Wikimedia) needs a `credit` line for its licence. `images`
// holds the placeholder filenames from the spec; swap real files into
// src/assets/images/ later without touching this structure.

export const projects = [
  {
    id: "ubora",
    name: "UBORA Residence Tower",
    location: "Business Bay",
    description:
      "Design, supply and installation of a full CCTV system across all 58 floors, completed with SIRA approval in 2026.",
    images: ["projects-ubora-exterior-01.jpg", "projects-ubora-install-01.jpg"],
    credit: {
      text: "Tower photo: trolvag / Wikimedia, CC BY-SA 3.0",
      href: "https://creativecommons.org/licenses/by-sa/3.0/",
    },
  },
  {
    id: "trident",
    name: "Trident Grand Residence & Retails",
    location: "Dubai Marina",
    description:
      "A complete multi-system installation across all 45 floors and the retail podium — CCTV, Access Control, Gate Barrier, ANPR and Generator — completed with SIRA approval in 2024.",
    images: ["projects-trident-exterior-01.jpg", "projects-trident-install-01.jpg"],
    credit: { text: "Tower photo: EditQ / Wikimedia, CC0" },
  },
  {
    id: "taj-grandeur",
    name: "Taj Grandeur Residences",
    location: "Palm Jumeirah",
    description:
      "Design, supply and installation of a full CCTV system across both towers, completed with SIRA approval in 2024.",
    images: ["projects-taj-grandeur-exterior-01.jpg", "projects-taj-grandeur-install-01.jpg"],
  },
  {
    id: "emirates-sports-hotel",
    name: "Emirates Sports Hotel",
    location: "Sports City",
    description:
      "CCTV, Gate Barrier and ANPR systems designed and installed across both towers, completed with SIRA approval in 2024.",
    images: [
      "projects-emirates-sports-hotel-exterior-01.jpg",
      "projects-emirates-sports-hotel-install-01.jpg",
    ],
  },
  {
    id: "iris-bay",
    name: "Iris Bay",
    location: "Business Bay",
    description:
      "CCTV system upgrade across all floors, plus access control and gate barrier installation, at Business Bay's landmark crescent-shaped office tower, completed in 2024.",
    images: ["projects-iris-bay-exterior-01.jpg", "projects-iris-bay-install-01.jpg"],
    credit: {
      text: "Tower photo: giggel / Wikimedia, CC BY 3.0",
      href: "https://creativecommons.org/licenses/by/3.0/",
    },
  },
  {
    id: "concorde-tower",
    name: "Concorde Tower",
    location: "JLT",
    description:
      "CCTV system upgrade across all 45 floors, plus access control and gate barrier installation, at Concorde Tower in Jumeirah Lake Towers, completed in 2024.",
    images: ["projects-concorde-exterior-01.jpg", "projects-concorde-install-01.jpg"],
    credit: { text: "JLT skyline photo: Nelemson Guevarra / Unsplash" },
  },
];

// content-spec.md "Trusted at" scroller — names/logos only, no photos.
export const trustedAt = [
  "Al Bonian FM",
  "Dubai Aviation Engineering Projects (Maktoum Airport)",
  "Emirates Sports Hotel",
  "UBORA Residence Tower",
  "Trident Grand Residence",
  "Taj Grandeur Residence, Palm Jumeirah",
  "XXII Carat, Palm Jumeirah",
  "Concorde Tower, JLT",
  "Zen Tower, Dubai Marina",
  "Westside Marina",
  "Marina Residence",
  "Iris Bay Tower",
  "Wilton Terraces",
  "American Hospital",
  "Seddiqi Headquarters",
  "Wafi Mall",
];

// content-spec.md "Brands & Equipment" scroller.
export const brands = [
  "Hikvision",
  "Samsung WiseNET",
  "Felix",
  "Manusa",
  "SpaceVision",
  "BFT",
  "CAME",
  "Comelit",
];

// content-spec.md "Testimonials" — quotes pending from these three; the
// person + company are confirmed, so render the section now with a
// clearly-marked "quote pending" state rather than inventing text.
export const testimonials = [
  { name: "Stella", company: "Kingfield Property Management", quote: null },
  { name: "Kardoum Emril", company: null, quote: null },
  { name: "Ambrossia", company: "TGR Mansions", quote: null },
];

// "How We Work" — four steps, one line each.
export const howWeWork = [
  {
    step: "Site Visit",
    detail: "Our engineers survey your building and the systems already in place.",
  },
  {
    step: "Clear Quotation",
    detail: "An itemised quote with approved equipment, scope and timeline.",
  },
  {
    step: "Installation & Testing",
    detail: "Installed by certified engineers, tested and handed over with SIRA approval where required.",
  },
  {
    step: "Maintenance & Support",
    detail: "AMC contracts with quarterly visits and 24-hour emergency response.",
  },
];

// content-spec.md FAQ section.
export const faqs = [
  {
    q: "Do you offer maintenance contracts?",
    a: "We offer AMC contracts, typically on a quarterly maintenance schedule with minor visits each quarter and a major service once a year.",
  },
  {
    q: "What's your warranty?",
    a: "01 Year Manufacturer's Warranty plus 1 Year Workmanship Warranty, across all services.",
  },
  {
    q: "What are your payment terms?",
    a: "50% Advance, 25% Upon Delivery, 25% Upon Completion for larger jobs. AMC contracts are billed upon completion.",
  },
  {
    q: "Do you offer free site inspections?",
    a: "Yes, for existing clients.",
  },
  {
    q: "Which areas do you cover?",
    a: "Across Dubai — including Business Bay, Dubai Marina, Palm Jumeirah, JLT and Sports City, among other areas.",
  },
  {
    q: "What's your emergency response time?",
    a: "High-priority emergency call-outs are attended to within 24 hours.",
  },
  {
    q: "How long does a project take?",
    a: "Small jobs take from same-day to a few weeks, medium projects 2–3 months, and larger projects up to 6 months.",
  },
  {
    q: "Can you provide references?",
    a: "Yes. We can share references from building managers and FM companies we work with on request.",
  },
];
