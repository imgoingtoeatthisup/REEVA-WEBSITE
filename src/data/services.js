// Source of truth: content-spec.md → "Services" section.
// Each category = one card; each item = one row that appears when the card expands.
// image fields hold the placeholder filename from the spec's Image Naming Guide —
// swap the actual file into src/assets/images/ later without touching this structure.

export const serviceCategories = [
  {
    id: "elv-security",
    title: "ELV & Security Systems",
    cardImage: "services-elv-card-01.jpg",
    items: [
      {
        id: "cctv",
        name: "CCTV System",
        description:
          "Up-to-date, cost-effective CCTV installation, maintenance and fault repair using cameras and accessories from leading manufacturers, carried out by trained, certified engineers to the local authority-approved CCTV code of practice. All installed camera and NVR models carry individual SIRA product-approval certification.",
        image: "services-cctv-01.jpg",
        glossary: ["CCTV", "NVR", "SIRA"],
      },
      {
        id: "access-control",
        name: "Access Control System",
        description:
          "Installation, maintenance and repair of access control systems that recognize, authenticate and authorize entry using cards, PIN codes or biometrics, with auditing and reporting to track access to restricted areas.",
        image: "services-access-control-01.jpg",
        glossary: ["ACS"],
      },
      {
        id: "speed-gate",
        name: "Speed Gates & Turnstiles",
        description:
          "Supply, installation and maintenance of speed gates, speed lanes and turnstiles for building lobbies and staff entrances, integrated with your access control system so only authorized people can pass.",
        image: "services-speed-gate-01.jpg",
      },
      {
        id: "gate-barrier",
        name: "Gate Barrier System",
        description:
          "Installation, maintenance, repair and replacement of automatic parking barriers for residential and commercial properties.",
        image: "services-gate-barrier-01.jpg",
        glossary: ["GB"],
      },
      {
        id: "intercom",
        name: "Intercom System",
        description:
          "Installation and ongoing maintenance of video and audio entry systems with camera integration, designed with accessibility in mind so residents can answer the door remotely.",
        image: "services-intercom-01.jpg",
        glossary: ["IC / ICS"],
      },
    ],
  },
  {
    id: "fire-safety",
    title: "Fire & Life Safety Systems",
    cardImage: "services-fire-card-01.jpg",
    items: [
      {
        id: "fire-alarm",
        name: "Fire Detection & Alarm Systems",
        description:
          "Design, installation and maintenance of conventional and addressable fire alarm systems: control panels, smoke and heat detectors, manual call points, sounders and beacons, installed to Dubai Civil Defence requirements.",
        image: "services-fire-alarm-01.jpg",
        glossary: ["DCD"],
      },
      {
        id: "firefighting",
        name: "Firefighting Systems",
        description:
          "Installation and maintenance of sprinkler systems, fire hose reels and cabinets, wet and dry risers and fire pumps for residential and commercial buildings.",
        image: "services-firefighting-01.jpg",
      },
      {
        id: "fire-suppression",
        name: "Fire Suppression Systems",
        description:
          "Clean agent (FM-200) suppression for server, electrical and LV rooms, and kitchen hood suppression for restaurants and commercial kitchens.",
        // add a photo later: image: "services-fire-suppression-01.jpg",
        glossary: ["LV Room"],
      },
      {
        id: "emergency-lighting",
        name: "Emergency & Exit Lighting",
        description:
          "Installation, testing and maintenance of emergency lighting and illuminated exit signs, so escape routes stay lit and clearly marked during a power cut.",
        image: "services-emergency-lighting-01.jpg",
      },
      {
        id: "voice-evacuation",
        name: "Voice Evacuation & Public Address",
        description:
          "Voice evacuation and public address systems that deliver clear, automatic announcements across every floor during an emergency.",
        image: "services-voice-evac-01.jpg",
      },
      {
        id: "fire-extinguishers",
        name: "Fire Extinguishers & Safety Equipment",
        description:
          "Supply, installation, inspection and refilling of fire extinguishers, fire blankets and other fire safety equipment.",
        // add a photo later: image: "services-fire-extinguishers-01.jpg",
      },
      {
        id: "fire-maintenance",
        name: "Fire System Maintenance & AMC",
        description:
          "Scheduled testing and maintenance of all fire and life safety systems under an annual maintenance contract, keeping your building ready for Civil Defence inspections.",
        // add a photo later: image: "services-fire-maintenance-01.jpg",
        glossary: ["AMC"],
      },
    ],
  },
  {
    id: "mep-power",
    title: "MEP & Power Solutions",
    cardImage: "services-mep-card-01.jpg",
    items: [
      {
        id: "mechanical",
        name: "Mechanical (HVAC, Insulation, Plumbing)",
        description:
          "Maintenance approach matched to whatever system already exists on-site, rather than a fixed one-size-fits-all schedule — a proactive, predictive approach aimed at lowering operating costs.",
        image: "services-mechanical-01.jpg",
      },
      {
        id: "plumbing",
        name: "Plumbing & Sanitary",
        description:
          "Plumbing installation, repair and maintenance matched to the fittings and standards already in place on-site — sinks, faucets, water heaters, soil pipes and drainage.",
        image: "services-plumbing-01.jpg",
      },
      {
        id: "electrical",
        name: "Electrical",
        description:
          "Full range of electrical installation, maintenance and repair by trained electricians — emergency services, system upgrades, breaker replacement, lighting and fixture installation.",
        image: "services-electrical-01.jpg",
      },
      {
        id: "ups-generators",
        name: "UPS & Generators",
        description:
          "Installation, quarterly PPM maintenance and emergency repair of UPS units and generators, from single-unit villa backups to multi-unit commercial installations across control rooms, BMS rooms and LV rooms.",
        image: "services-ups-generator-01.jpg",
        glossary: ["UPS", "PPM", "BMS", "LV Room"],
      },
    ],
  },
  {
    id: "civil-fitout",
    title: "Civil Contracting & Fit-Out",
    cardImage: "services-civil-card-01.jpg",
    items: [
      {
        id: "tiling-ceilings",
        name: "Tiling, False Ceilings & Partitions, Flooring, Access Panels",
        description:
          "Floor and wall tiling, false ceilings, partitions and flooring matched to the existing material, design and colour standard on-site — including access panels for maintenance and inspection access to ducts, pipes and wiring above false ceilings.",
        image: "services-tiling-ceilings-01.jpg",
      },
      {
        id: "painting",
        name: "Painting",
        description:
          "Wall, ceiling and parking-line painting matched to the building's existing colour codes and finish standards.",
        image: "services-painting-01.jpg",
      },
      {
        id: "waterproofing",
        name: "Waterproofing & Leakage Rectification",
        description:
          "Waterproofing and leakage rectification for roofs, terraces, bathrooms and basements, matched to the building's existing structure and materials — diagnosing the source of a leak and fixing it at the root, not just patching the surface.",
        beforeAfter: {
          before: "services-waterproofing-before-01.jpg",
          after: "services-waterproofing-after-01.jpg",
        },
      },
      {
        id: "carpentry",
        name: "Carpentry",
        description:
          "General carpentry as part of your fit-out or repair works — door frames, cabinetry and fixed woodwork, matched to the existing finish and design standard on-site.",
        image: "services-carpentry-01.jpg",
      },
      {
        id: "plaster-insulation",
        name: "Plaster & Insulation",
        description:
          "Wall and ceiling plastering and finishing, alongside thermal and acoustic insulation for walls, ceilings and building envelopes, matched to the existing structure and finish standard on-site.",
        image: "services-plaster-insulation-01.jpg",
      },
      {
        id: "glass-aluminium",
        name: "Glass, Aluminium & Fit-Out Extras",
        description:
          "Supply and installation of double-glazing windows, aluminium and door frames, sliding doors and blinds — customized to size, design and colour as part of your fit-out or renovation.",
        image: "services-glass-aluminium-01.jpg",
      },
    ],
  },
];

// Jargon Glossary section — used to power the tooltip-on-first-use behavior
// noted in content-spec.md's "Jargon Glossary" build note.
export const glossary = {
  CCTV: "Closed-Circuit Television. The security camera system itself.",
  NVR: "Network Video Recorder. The device that stores and manages footage from CCTV cameras.",
  ANPR: "Automatic Number Plate Recognition. Cameras that read car license plates, usually for gate/parking access.",
  ACS: "Access Control System. Card, fob, or biometric systems that control who can open a door.",
  GB: "Gate Barrier. The automatic arm/boom that opens for cars at a parking entrance.",
  "IC / ICS": "Intercom / Intercom System. Video or audio entry systems at a building's door.",
  "SLD / SLDS": "Sliding Door(s) / Sliding Door System.",
  "SHD / SHDS": "Shutter Door(s) / Shutter Door System.",
  PSU: "Power Supply Unit. The component that powers a camera or device.",
  DVR: "Digital Video Recorder, an older-generation version of an NVR.",
  UPS: "Uninterruptible Power Supply. A battery backup that keeps equipment running during a power cut.",
  PPM: "Planned Preventive Maintenance. Scheduled maintenance visits done before something breaks, not after.",
  AMC: "Annual Maintenance Contract. A yearly agreement for ongoing maintenance visits.",
  ELV: "Extra-Low Voltage. The category covering CCTV, access control, intercoms and similar low-power systems.",
  MEP: "Mechanical, Electrical & Plumbing. The category covering generators, HVAC, electrical and plumbing work.",
  BMS: "Building Management System. The central system that monitors a building's mechanical/electrical equipment.",
  "LV Room": "Low Voltage Room. A dedicated room housing a building's electrical/network equipment.",
  DCD: "Dubai Civil Defence, the authority that approves fire and life safety systems and contractors in Dubai.",
  SIRA: "Security Industries Regulatory Agency, Dubai's regulator for security systems and companies.",
  DET: "Dubai Department of Economy and Tourism, which issues trade licenses.",
  TRN: "Tax Registration Number, a company's UAE VAT registration number.",
};
