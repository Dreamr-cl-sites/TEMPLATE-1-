// ============================================================
// SERVICES — edit this file to change what the company offers.
// `slug` controls the URL: /services/{slug}
// `icon` is a lucide-react icon name (see lucide.dev).
// ============================================================
export const services = [
  {
    slug: 'emergency-plumbing',
    name: 'Emergency Plumbing',
    icon: 'Siren',
    short: '24/7 response for burst pipes, floods, and overflowing toilets — on site in 60 minutes.',
    priceFrom: 149,
    hero: 'A pipe burst at midnight is not a tomorrow problem. We pick up, we quote, we show up — fast.',
    includes: [
      'Live human on the phone, day or night',
      'Average 60-minute arrival in our service area',
      'Shut-off, contain, and stabilize before any repair',
      'Written, upfront price before work starts',
      'Cleanup and disposal included',
    ],
    signs: ['Water actively leaking or pooling','Sewage backing up into the home','No water anywhere in the house','Smell of gas near a water heater','Frozen or burst pipes'],
    faq: [
      { q: 'How fast can you get here?', a: 'Most calls inside our service area are met within 60 minutes. We will give you a real ETA when you call.' },
      { q: 'Is the after-hours rate huge?', a: 'No. We charge a modest after-hours dispatch fee and you see it before we drive over.' },
    ],
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    icon: 'Waves',
    short: 'Slow drains and full blockages cleared with cameras, augers, and hydro-jetting.',
    priceFrom: 99,
    hero: 'We do not just push the clog further. We find the cause and clear it — for good.',
    includes: [
      'Camera inspection on stubborn lines',
      'Mechanical augering for tough clogs',
      'Hydro-jet cleaning for grease and roots',
      'Enzyme treatment to keep drains flowing',
      '30-day clog-free guarantee',
    ],
    signs: ['Water draining slower than usual','Gurgling sounds in pipes','Bad smells from the drain','Multiple drains backing up at once','Water pooling around floor drains'],
    faq: [
      { q: 'Will the chemicals from the store work?', a: 'Sometimes. They also corrode pipes and rarely fix the real cause. A proper cleaning lasts months, not days.' },
      { q: 'Do you offer a camera inspection?', a: 'Yes — included free with most cleanings so you can see exactly what is happening.' },
    ],
  },
  {
    slug: 'water-heaters',
    name: 'Water Heaters',
    icon: 'Flame',
    short: 'Tank, tankless, hybrid, and heat-pump installs, repairs, and same-day swaps.',
    priceFrom: 1295,
    hero: 'No hot water is not just annoying — it is a sign. We diagnose, repair, or replace the same day.',
    includes: [
      'Free in-home sizing assessment',
      'Tank, tankless, and heat-pump options',
      'Permits and code inspection handled',
      'Old unit haul-away included',
      '6–10 year manufacturer warranty',
    ],
    signs: ['No hot water','Hot water runs out fast','Rusty or smelly hot water','Pooling around the base','Loud pops or rumbling from the tank'],
    faq: [
      { q: 'Tank or tankless — which is better?', a: 'Tankless saves space and energy and lasts twice as long, but costs more up front. We will tell you the truth for your home.' },
      { q: 'Can you do same-day install?', a: 'Yes — most standard tanks are in stock and installed the same day you call.' },
    ],
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection',
    icon: 'Droplets',
    short: 'Find hidden leaks without ripping up your home. Acoustic, thermal, and pressure testing.',
    priceFrom: 189,
    hero: 'A small leak doubles your water bill and rots your floor. We find it before it costs you thousands.',
    includes: [
      'Acoustic and thermal-imaging detection',
      'Pressure and moisture testing',
      'Slab and behind-wall leaks',
      'Written report with photos',
      'No-dig, no-demo locating',
    ],
    signs: ['Water bill went up for no reason','Damp spots on walls, floors, or ceilings','Mold or mildew smell','Sound of running water with everything off','Warm spots on the floor (slab leak)'],
    faq: [
      { q: 'Will you tear up my wall to find it?', a: 'Almost never. Our equipment locates leaks to within a few inches before we open anything.' },
      { q: 'Do you fix it too, or just find it?', a: 'Both. Once located, we will quote the repair on the spot.' },
    ],
  },
  {
    slug: 'sewer-line',
    name: 'Sewer & Main Line',
    icon: 'Pipette',
    short: 'Trenchless repair, hydro-jetting, and full main-line replacement when needed.',
    priceFrom: 295,
    hero: 'When the main backs up, your day is over. Our trenchless methods fix the line without destroying your yard.',
    includes: [
      'Camera inspection of the full line',
      'Hydro-jet root and grease removal',
      'Trenchless pipe bursting or lining',
      'Full excavation when needed',
      'City permits and inspection handled',
    ],
    signs: ['All drains in the house back up','Wet patches in the yard','Sewer smell inside or outside','Repeated drain clogs across the home','Sinkholes near the sewer line'],
    faq: [
      { q: 'What is trenchless repair?', a: 'We replace or line the pipe through small access pits — no trenching your lawn or driveway.' },
      { q: 'How long does a job take?', a: 'Most trenchless repairs are done in a single day.' },
    ],
  },
  {
    slug: 'fixtures-faucets',
    name: 'Fixtures & Faucets',
    icon: 'Wrench',
    short: 'Faucets, toilets, garbage disposals, shower valves — replaced or repaired right.',
    priceFrom: 129,
    hero: 'A wobbly toilet or dripping faucet is a small thing — until it floods a floor. We fix it in one visit.',
    includes: [
      'Faucet & shower-valve installs',
      'Toilet replacement and rebuild',
      'Garbage-disposal swaps',
      'Angle-stop and supply-line upgrades',
      'Cleanup and old-fixture haul-away',
    ],
    signs: ['Drips that will not stop','Loose or running toilets','Low pressure at a single fixture','Disposal humming but not spinning','Rust or mineral build-up'],
    faq: [
      { q: 'Should I supply the fixture?', a: 'You can — we will install what you bought. Or we will source it from a trade supplier with a warranty.' },
      { q: 'How long does a faucet swap take?', a: 'Usually under an hour, including testing for leaks.' },
    ],
  },
  {
    slug: 'repiping',
    name: 'Whole-Home Repiping',
    icon: 'GitFork',
    short: 'Old galvanized or polybutylene? We replace your full plumbing system cleanly and quickly.',
    priceFrom: 4500,
    hero: 'If your pipes are 50 years old, they are a leak waiting to happen. A repipe is a one-time fix forever.',
    includes: [
      'PEX or copper, your choice',
      'Minimal drywall opening, full patch',
      'Permits and inspections handled',
      '25-year manufacturer warranty',
      'Most jobs finished in 3–5 days',
    ],
    signs: ['Recurring pinhole leaks','Discolored or metallic-tasting water','Low pressure throughout the home','Pipes over 40 years old','Insurance threatening to drop coverage'],
    faq: [
      { q: 'Do we have to move out?', a: 'No. You keep water on every night and we work in zones during the day.' },
      { q: 'PEX or copper?', a: 'PEX is faster, cheaper, and quieter. Copper lasts longer and looks cleaner. We will help you pick.' },
    ],
  },
  {
    slug: 'commercial',
    name: 'Commercial Plumbing',
    icon: 'Building2',
    short: 'Restaurants, offices, multi-family. Backflow, grease traps, code work, and service contracts.',
    priceFrom: 249,
    hero: 'Plumbing problems shut down businesses. We respond fast, document everything, and bill clean.',
    includes: [
      'Backflow testing and certification',
      'Grease-trap pumping and repair',
      'Code-compliance and permit work',
      'Service contracts with priority SLAs',
      'After-hours work to avoid downtime',
    ],
    signs: ['Failed inspection notice','Backed-up floor drains','Constant tenant complaints','Code-violation citations','High water bills with no leak'],
    faq: [
      { q: 'Do you do after-hours work?', a: 'Yes — most commercial work is scheduled at night or weekends to avoid disrupting your business.' },
      { q: 'Do you bill on net terms?', a: 'Yes — Net 15 and Net 30 available for established commercial accounts.' },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
