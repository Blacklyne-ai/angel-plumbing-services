// Central content + data for Angel Plumbing Services Ltd.
// Single source of truth - every page pulls from here.

export const business = {
  name: "Angel Plumbing Services",
  legalName: "Angel Plumbing Services Ltd",
  companyNumber: "04437729",
  tagline: "Period-property plumbing & heating, family-run in Islington since the 1980s.",
  phoneDisplay: "020 7251 3418",
  phoneHref: "+442072513418",
  email: "Info@angelplumbing.london",
  address: {
    line1: "177 Goswell Road",
    line2: "Clerkenwell",
    city: "London",
    postcode: "EC1V 7HJ",
  },
  hours: "Mon–Fri 8.30am–5.00pm · 24-hour emergency cover",
  mapsEmbed:
    "https://www.google.com/maps?q=177+Goswell+Road,+Clerkenwell,+London+EC1V+7HJ&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=177+Goswell+Road+Clerkenwell+London+EC1V+7HJ",
  founded: "1980s",
  incorporated: "2002",
  reviewRating: "8.7/10",
  reviewCount: "60",
} as const;

export const accreditations = [
  { label: "Gas Safe Registered", note: "Statutory gas registration", mark: "gas-safe" },
  { label: "APHC Member", note: "Vetted & competency-checked", mark: "aphc" },
  { label: "Companies House 04437729", note: "Ltd since 2002", mark: "ch" },
  { label: "Fully Insured", note: "Public liability cover", mark: "insured" },
] as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Period property", href: "/period-property" },
  { label: "Areas", href: "/areas" },
  { label: "Landlords", href: "/for-landlords" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

// ---- Service hubs + detail pages ----
export type Service = {
  slug: string;
  title: string;
  tag: string;
  short: string;
  intro: string;
  points: string[];
};

export type ServiceHub = {
  slug: string;
  title: string;
  tag: string;
  blurb: string;
  emoji: string;
  services: Service[];
};

export const serviceHubs: ServiceHub[] = [
  {
    slug: "plumbing",
    title: "Plumbing",
    tag: "01 - Plumbing",
    emoji: "🛁",
    blurb:
      "Bathrooms, kitchens, drainage, hot water and the everyday repairs - fitted with respect for the building they sit in.",
    services: [
      {
        slug: "bathroom-installation",
        title: "Bathroom installation",
        tag: "Plumbing",
        short: "Full bathroom installs, from heritage restoration to clean contemporary.",
        intro:
          "A bathroom in a period building is rarely a simple swap. Floor joists, original soil stacks, lead supply pipework and listed-building constraints all shape what's possible. We install bathrooms that look right for the property and run on sound, accessible modern services beneath.",
        points: [
          "Heritage and contemporary bathroom suites installed end to end",
          "Cast-iron baths, ceramic basins and brass fittings retained or restored where wanted",
          "Concealed modern pipework routed without cutting historic fabric where avoidable",
          "Wet rooms and walk-in showers with proper tanking",
          "Co-ordination with tilers, electricians and decorators on full refurbishments",
        ],
      },
      {
        slug: "kitchen-installation",
        title: "Kitchen installation",
        tag: "Plumbing",
        short: "Kitchen plumbing - supply, waste, appliances and gas where needed.",
        intro:
          "We handle the plumbing and gas side of a kitchen project: feeds and wastes for sinks, dishwashers and washing machines, appliance connections, and any gas hob or cooker work carried out by a Gas Safe engineer.",
        points: [
          "Sink, tap, dishwasher and washing-machine supply and waste",
          "Gas hob and cooker connections (Gas Safe registered)",
          "Boiler and hot-water provision for open-plan kitchen-diners",
          "Sensible pipe routing in solid-floor and period kitchens",
        ],
      },
      {
        slug: "drain-installation-repair",
        title: "Drain installation & repair",
        tag: "Plumbing",
        short: "Blockages, leaks and ageing cast-iron drainage put right.",
        intro:
          "Much of Islington's Victorian housing still runs on cast-iron drainage that is well past its design life - rough internal bores that snag waste, corrosion and recurring blockages. We clear, repair and replace, matching cast-iron appearance where the property's character calls for it.",
        points: [
          "Blocked drains and waste pipes cleared",
          "Ageing cast-iron soil stacks repaired or replaced",
          "Cast-iron-look replacements for facade-visible runs in conservation areas",
          "Leak detection and burst-pipe repair",
        ],
      },
      {
        slug: "hot-water-systems",
        title: "Hot water systems",
        tag: "Plumbing",
        short: "Cylinders, unvented systems and hot-water upgrades.",
        intro:
          "From traditional vented cylinders to modern unvented (mains-pressure) hot water, we upgrade and maintain the system that suits your home, your boiler and the number of bathrooms drawing on it.",
        points: [
          "Hot-water cylinder replacement and upgrades",
          "Unvented (mains-pressure) hot-water systems",
          "Immersion heaters and back-up provision",
          "Balancing hot water across multi-bathroom period homes",
        ],
      },
      {
        slug: "general-repairs",
        title: "General plumbing repairs",
        tag: "Plumbing",
        short: "Taps, toilets, tanks, leaks and the day-to-day jobs.",
        intro:
          "The bread and butter of forty years: dripping taps, running toilets, leaking pipes, failing cylinders and the small jobs that keep a home working. Done properly, tidily, first time.",
        points: [
          "Taps, toilets, sinks and overflows repaired or replaced",
          "Leaking and burst pipes",
          "Tanks, cylinders and stopcocks",
          "Honest assessment - repair where sensible, replace where not",
        ],
      },
    ],
  },
  {
    slug: "heating",
    title: "Heating",
    tag: "02 - Heating",
    emoji: "🔥",
    blurb:
      "Boilers, central heating, radiators and power flushing - installed and serviced by Gas Safe engineers.",
    services: [
      {
        slug: "boiler-installation",
        title: "Boiler installation",
        tag: "Heating",
        short: "New boilers sized and fitted for the property - not over-sold.",
        intro:
          "A new boiler should be sized to the home and the demand on it, not the biggest one a salesperson can shift. We assess the property, recommend honestly, and install to manufacturer and Gas Safe standards with the paperwork to match.",
        points: [
          "Combi, system and regulated boiler installations",
          "Boiler sizing matched to the property and hot-water demand",
          "Gas Safe registered installation and commissioning",
          "Old system drained, flushed and made good",
        ],
      },
      {
        slug: "boiler-repair",
        title: "Boiler repair & servicing",
        tag: "Heating",
        short: "Breakdowns diagnosed, annual servicing, honest fixes.",
        intro:
          "When a boiler fails in a cold house we diagnose the actual fault and tell you straight whether it's a quick fix or end of life - sometimes the cheapest honest answer is a repair, sometimes it isn't. Annual servicing keeps things running and warranties valid.",
        points: [
          "Boiler breakdown diagnosis and repair",
          "Annual boiler servicing",
          "Honest repair-or-replace advice (no scare tactics)",
          "Gas appliance fault-finding",
        ],
      },
      {
        slug: "central-heating",
        title: "Central heating installation",
        tag: "Heating",
        short: "Full and partial central-heating systems, designed to heat evenly.",
        intro:
          "New and upgraded central-heating systems designed so every room actually warms - balanced, with sensible pipe runs through period floors and walls, and controls that make sense.",
        points: [
          "Full central-heating system installation",
          "System upgrades and extensions",
          "Smart and zoned heating controls",
          "Underfloor heating",
        ],
      },
      {
        slug: "power-flush",
        title: "Power flushing",
        tag: "Heating",
        short: "Clears sludge so radiators heat fully and the boiler lasts.",
        intro:
          "Cold spots at the bottom of radiators, slow warm-up and a noisy boiler usually mean magnetite sludge in the system. A power flush clears it, restores circulation and protects the boiler - often the difference between a tired system and a healthy one.",
        points: [
          "Full system power flush",
          "Radiator cold-spot and circulation problems resolved",
          "Inhibitor added to protect against future corrosion",
          "Often recommended before a new boiler is fitted",
        ],
      },
      {
        slug: "radiator-installation",
        title: "Radiator installation",
        tag: "Heating",
        short: "New radiators, replacements and period-style options.",
        intro:
          "Radiator replacements, additions and relocations - including traditional column and cast-iron-style radiators that suit a Georgian or Victorian room far better than a flat modern panel.",
        points: [
          "Radiator replacement and additional radiators",
          "Period-style column and cast-iron-look radiators",
          "Thermostatic valves fitted and balanced",
          "Heated towel rails",
        ],
      },
    ],
  },
  {
    slug: "gas-safety",
    title: "Gas Safety",
    tag: "03 - Gas Safety",
    emoji: "🛡️",
    blurb:
      "Landlord CP12 certificates, appliance servicing and gas leak detection - by a Gas Safe registered firm.",
    services: [
      {
        slug: "landlord-cp12",
        title: "Landlord Gas Safety Certificate (CP12)",
        tag: "Gas Safety",
        short: "Your legal annual gas check - booked, done and certified.",
        intro:
          "Every landlord has a legal duty under the Gas Safety (Installation and Use) Regulations 1998 to have gas appliances, flues and pipework checked at least every 12 months by a Gas Safe registered engineer, and to give tenants the record within 28 days. We carry out the check, issue the CP12, and - if you want - remind you before it's due again.",
        points: [
          "Annual Landlord Gas Safety Record (CP12) for each let property",
          "All gas appliances, flues and pipework checked",
          "Certificate issued promptly for your records and your tenants",
          "Free optional reminder before next year's certificate is due",
          "Portfolio landlords across Islington and Clerkenwell welcome",
        ],
      },
      {
        slug: "appliance-servicing",
        title: "Gas appliance servicing",
        tag: "Gas Safety",
        short: "Boilers, fires and cookers serviced and safety-checked.",
        intro:
          "Annual servicing of gas appliances keeps them safe, efficient and within warranty. Carried out by Gas Safe registered engineers with the checks documented.",
        points: [
          "Boiler, gas fire and cooker servicing",
          "Safety checks and flue testing",
          "Manufacturer-warranty servicing requirements met",
          "Carbon-monoxide safety advice",
        ],
      },
      {
        slug: "leak-detection",
        title: "Gas leak detection",
        tag: "Gas Safety",
        short: "Suspected gas leak? Tightness testing and made safe.",
        intro:
          "If you smell gas, leave it to a registered engineer. We carry out tightness testing, trace leaks on the gas installation and make the system safe - the work only a Gas Safe registered firm may legally do.",
        points: [
          "Gas tightness testing",
          "Leak tracing on pipework and appliances",
          "Installation made safe",
          "Always call the national Gas Emergency line on 0800 111 999 first in an emergency",
        ],
      },
    ],
  },
];

// ---- Period property eras ----
export type Era = {
  slug: string;
  name: string;
  years: string;
  hero: string;
  summary: string;
  considerations: string[];
  listedFlag: string;
  inHub: boolean; // shown on the home + hub era grid
};

export const eras: Era[] = [
  {
    slug: "georgian",
    name: "Georgian",
    years: "pre-1837",
    hero: "Lead, brass and lime plaster",
    summary:
      "Georgian houses around Barnsbury, Canonbury and Clerkenwell have almost always been re-plumbed more than once - expect a mix of original lead supply pipework, early copper and later additions, all running through soft lime plaster and historic timber.",
    considerations: [
      "Original lead supply pipes are common and best replaced on health grounds - there is no safe level of lead in drinking water.",
      "Original brass ironmongery, valves and taps are heritage features: we repair and retain rather than strip out.",
      "Soft lime plaster, lath-and-plaster walls and historic timber floors mean pipe runs must avoid cutting historic fabric.",
      "A high share of Georgian stock here is listed or in a conservation area - assume listed-building consent may apply before chasing into original plaster, stone or beams.",
    ],
    listedFlag:
      "Georgian properties in Islington are frequently listed or within conservation areas. Cutting into original fabric, or altering anything externally visible, typically needs listed-building consent - we'll flag it before work starts.",
    inHub: true,
  },
  {
    slug: "victorian",
    name: "Victorian",
    years: "1837–1901",
    hero: "Cast iron at the end of its life",
    summary:
      "The backbone of Islington's streets. Victorian terraces typically still carry cast-iron drainage and lead supply pipework that is now 120+ years old - often at or beyond the end of its working life, alongside original cast-iron baths and ceramic basins worth keeping.",
    considerations: [
      "Cast-iron drainage and soil stacks corrode internally, snag waste and block - frequently at end of life and due for repair or replacement.",
      "Lead supply pipes are widespread and recommended for replacement with copper or modern plastic.",
      "Original cast-iron baths, high-level cisterns, fireclay basins and brass taps are valued features - restoration plus discreet modern internals is the heritage approach.",
      "Facade-visible work (front soil stacks, hoppers, downpipes) on a listed terrace or in a conservation area usually needs consent; cast-iron-look replacements preserve the appearance.",
    ],
    listedFlag:
      "Externally visible pipework on a Victorian terrace in a conservation area is scrutinised. We use cast-iron-look or painted replacements and flag where consent is needed.",
    inHub: true,
  },
  {
    slug: "edwardian",
    name: "Edwardian",
    years: "1901–1910",
    hero: "The lead-to-copper transition",
    summary:
      "A transitional era. Edwardian houses commonly carry predominantly lead supply pipework with copper appearing as the newer option - you often find both in the same house, sometimes alongside ageing galvanised steel cold pipework.",
    considerations: [
      "Expect a mix of lead and early copper supply pipework - lead is best replaced on health grounds.",
      "Galvanised steel cold pipework, where present, corrodes internally and reduces flow.",
      "Original sanitaryware and joinery is often intact and worth working around carefully.",
      "Listed and conservation-area triggers apply where historic fabric is cut or external runs altered.",
    ],
    listedFlag:
      "Many Edwardian homes sit within conservation areas. We check designation before any work that affects fabric or external appearance.",
    inHub: true,
  },
  {
    slug: "inter-war",
    name: "Inter-war",
    years: "1918–1939",
    hero: "Copper, now ageing",
    summary:
      "By the 1930s copper had become the standard for supply pipework. Inter-war homes are generally simpler to work on than the Victorian stock - but copper of this age has its own ageing concerns, and lead can still survive on the incoming main.",
    considerations: [
      "Copper is standard, but pinhole corrosion, degraded soldered joints and old compression fittings appear with age.",
      "Lead may still survive on the original incoming supply pipe - worth checking and upgrading.",
      "Generally less likely to be listed, though some inter-war stock sits within conservation areas.",
      "Heating systems of this era are usually long replaced - a good moment to assess the whole system.",
    ],
    listedFlag:
      "Inter-war homes are less often listed, but we always check conservation-area designation before externally visible work.",
    inHub: true,
  },
  {
    slug: "post-war",
    name: "Post-war",
    years: "1945–1980",
    hero: "Modern copper, simpler work",
    summary:
      "Post-war homes use modern copper throughout, with early plastics appearing toward the end of the period. Work is more predictable - though anything pre-1970 may still carry lead on the original incoming main.",
    considerations: [
      "Copper throughout; generally straightforward, predictable work.",
      "Pre-1970 properties may still have a lead incoming supply pipe worth replacing.",
      "Early plastic pipework appears late in the period.",
      "Rarely any listed-building constraints.",
    ],
    listedFlag: "Post-war properties rarely carry listed-building constraints.",
    inHub: false,
  },
  {
    slug: "modern",
    name: "Modern",
    years: "1980+",
    hero: "Standard contemporary materials",
    summary:
      "Modern homes use copper, plastic push-fit, PEX and MDPE supply pipe - routine, contemporary work with no heritage constraints.",
    considerations: [
      "Standard copper, push-fit and plastic pipework.",
      "MDPE supply pipe from the main.",
      "No heritage or listed-building constraints.",
      "Straightforward boiler, bathroom and kitchen work.",
    ],
    listedFlag: "No heritage constraints on modern properties.",
    inHub: false,
  },
];

// ---- Areas ----
export type Area = {
  slug: string;
  name: string;
  postcode: string;
  blurb: string;
  primary: boolean;
};

export const areas: Area[] = [
  { slug: "islington", name: "Islington", postcode: "N1", primary: true,
    blurb: "Our home borough - Georgian and Victorian terraces, garden squares and a dense rental market on our doorstep." },
  { slug: "clerkenwell", name: "Clerkenwell", postcode: "EC1", primary: true,
    blurb: "Minutes from our Goswell Road base - period conversions, warehouse flats and City-fringe homes and businesses." },
  { slug: "highbury", name: "Highbury", postcode: "N5", primary: true,
    blurb: "Handsome Victorian and Edwardian terraces around the Fields - classic period-property plumbing territory." },
  { slug: "canonbury", name: "Canonbury", postcode: "N1", primary: true,
    blurb: "One of London's finest Georgian and early-Victorian conservation areas - exactly the work we specialise in." },
  { slug: "barnsbury", name: "Barnsbury", postcode: "N1", primary: true,
    blurb: "Stucco-fronted Georgian terraces and tree-lined squares - listed and conservation-area work we know well." },
  { slug: "angel", name: "Angel", postcode: "N1 / EC1", primary: true,
    blurb: "The heart of our patch - period flats, conversions and busy rental properties around Upper Street." },
  { slug: "kings-cross", name: "King's Cross", postcode: "N1 / WC1", primary: true,
    blurb: "Victorian terraces and new development side by side - homeowner, landlord and commercial work alike." },
  { slug: "holloway", name: "Holloway", postcode: "N7", primary: false,
    blurb: "Victorian terraced streets and conversions throughout N7 - everyday repairs to full refurbishments." },
  { slug: "finsbury", name: "Finsbury", postcode: "EC1", primary: false,
    blurb: "City-fringe period property and commercial premises a short hop from our base." },
];

export const extraAreaNames = [
  "Camden", "Hackney", "Shoreditch", "Old Street", "Farringdon",
  "De Beauvoir Town", "Newington Green", "Stoke Newington", "Pentonville",
];

// ---- Buyer types ----
export const buyerTypes = [
  {
    slug: "for-homeowners",
    title: "Period-property homeowners",
    tag: "Homeowners",
    blurb:
      "Planning a bathroom or kitchen restoration in a Georgian or Victorian home? We work with the building, not against it.",
  },
  {
    slug: "for-landlords",
    title: "Landlords",
    tag: "Landlords",
    blurb:
      "CP12 certificates, repairs and boiler work across Islington and Clerkenwell rental portfolios - with a free reminder so you never miss a renewal.",
  },
  {
    slug: "for-commercial",
    title: "Restaurants & small commercial",
    tag: "Commercial",
    blurb:
      "Clerkenwell and Exmouth Market premises - responsive plumbing, gas and heating for businesses that can't afford downtime.",
  },
];

// ---- Four good reasons ----
export const reasons = [
  {
    n: "01",
    title: "Forty years in Islington",
    body:
      "The same family, the same square mile, since the 1980s. We've worked on hundreds of the period homes that surround our Goswell Road base.",
  },
  {
    n: "02",
    title: "Period-property fluency",
    body:
      "Georgian lead, Victorian cast iron, listed-building consent, fabric-sympathetic pipe runs. We know what your building needs before we lift a floorboard.",
  },
  {
    n: "03",
    title: "Family-run, not a call centre",
    body:
      "You speak to the firm that does the work. Gas Safe registered, APHC member, fully insured, and a limited company since 2002.",
  },
  {
    n: "04",
    title: "24-hour emergency cover",
    body:
      "Out-of-hours and emergency callouts across North London - because a burst pipe in a period home doesn't wait for office hours.",
  },
];

// ---- Heritage timeline ----
export const timeline = [
  { year: "1980s", title: "The family business begins",
    body: "Angel Plumbing starts work in Islington - the same patch of Georgian and Victorian streets we still serve today." },
  { year: "2002", title: "Incorporated as a limited company",
    body: "Registered in England and Wales as Angel Plumbing Services Ltd, Companies House 04437729 - still active, still family-run." },
  { year: "Today", title: "Period-property specialists",
    body: "Gas Safe registered and APHC members, working on the heritage homes of Islington, Clerkenwell, Highbury and Canonbury, with 24-hour emergency cover across North London." },
];

// ---- Verified reviews (Checkatrade - see _harvest research) ----
export const reviews = [
  {
    text: "I have needed to use Angel Plumbing twice recently - once for replacement of radiator valves, quickly achieved at half the price British Gas quoted, and more recently when our 2007 boiler broke down. The lady in the office squeezed the job in, the plumber arrived at the cold house first thing and showed how degraded the boiler was before showing how to do a quick fix.",
    name: "Verified customer",
    place: "EC1V",
    rating: 10,
    source: "Checkatrade",
    date: "January 2026",
  },
  {
    text: "This is my 3rd time using Angel Plumbing Services as I've needed a new shower fitted, a leaky pipe repaired, new taps installed, and drainage and pipework for a washing machine. My experience with them just keeps getting better. From the quotes, to the timeline, to the standard of work, to the follow up support have been spot on. I even got an unexpected refund for work I was quoted for, but decided not to do in the end. Result!!",
    name: "Josie A.",
    place: "WC1X",
    rating: 10,
    source: "Checkatrade",
    date: "September 2025",
  },
  {
    text: "I have used Angel Plumbing in the past and my son has had work done in his home several times too. I recently had a leak and Dan, the plumber, was punctual, conscientious, tidy and polite. I am happy to recommend.",
    name: "Verified customer",
    place: "N8",
    rating: 10,
    source: "Checkatrade",
    date: "November 2025",
  },
];
