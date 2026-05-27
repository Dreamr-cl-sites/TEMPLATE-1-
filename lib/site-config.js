// ============================================================
// CLIENT-EDITABLE CONFIG — start here when applying to a new client.
// Replace these values with your client's real business info.
// Every page on the site reads from this file.
// ============================================================

export const site = {
  // EDIT: Business name (used in nav, footer, meta, copyright)
  name: 'BlueLine Plumbing',
  // EDIT: Short tagline used in nav and SEO
  tagline: 'Fast. Honest. Done right.',
  // EDIT: One-sentence description used for SEO and OpenGraph
  description: 'Licensed master plumbers serving homes and businesses with same-day repairs, transparent pricing, and a 100% satisfaction guarantee.',
  // EDIT: Public phone number (tap-to-call on mobile)
  phone: '(555) 234-7867',
  phoneRaw: '+15552347867',
  // EDIT: Public email
  email: 'hello@bluelineplumbing.com',
  // EDIT: Physical address
  address: {
    line1: '1420 Cedar Avenue, Suite 4',
    city: 'Springfield',
    region: 'IL',
    postal: '62704',
    country: 'USA',
  },
  // EDIT: Business hours (shown in header bar and footer)
  hours: '24/7 Emergency · Office Mon–Sat 7a–7p',
  // EDIT: Years in business
  yearsInBusiness: 18,
  // EDIT: Service radius copy
  serviceArea: 'Greater Springfield & 30-mile radius',
  // EDIT: Social links (leave blank to hide that icon)
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    google: 'https://g.page/',
    youtube: '',
  },
  // EDIT: Trust badges — short pill labels in hero & footer
  trustBadges: [
    'Licensed & Insured',
    '5.0 ★ on Google (340+)',
    'Same-Day Service',
    'Upfront Pricing',
  ],
  // EDIT: Service area towns/neighborhoods (shown on home + contact)
  serviceTowns: [
    'Springfield', 'Chatham', 'Rochester', 'Sherman', 'Riverton',
    'Pleasant Plains', 'Auburn', 'Pawnee', 'Jerome', 'Leland Grove',
    'New Berlin', 'Petersburg',
  ],
  // EDIT: Stats shown across the site
  stats: [
    { value: '18+',    label: 'Years in business' },
    { value: '12,000+',label: 'Homes served' },
    { value: '4.9★',   label: 'Avg. customer rating' },
    { value: '60 min', label: 'Avg. arrival time' },
  ],
};

// ============================================================
// IMAGES — swap with the client's real photos when available.
// Keep filenames the same OR change paths here only.
// ============================================================
export const images = {
  heroPlumber:  'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=80',
  plumberTeam:  'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1400&q=80',
  workShot1:    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=80',
  workShot2:    'https://images.unsplash.com/photo-1618221710640-9f2d6fa5c651?auto=format&fit=crop&w=1400&q=80',
  workShot3:    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80',
  bathroom1:    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
  bathroom2:    'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=1400&q=80',
  bathroom3:    'https://images.unsplash.com/photo-1616594039964-3f5e5b8d4cd8?auto=format&fit=crop&w=1400&q=80',
};

// ============================================================
// TESTIMONIALS — replace with real reviews from Google/Yelp/etc.
// ============================================================
export const testimonials = [
  { name: 'Sarah M.', city: 'Springfield', rating: 5, quote: 'My kitchen sink backed up at 9pm on a Sunday. A real person picked up, gave me a price over the phone, and a plumber was here in 40 minutes. No upsell, no mess. I have a plumber for life.', service: 'Drain cleaning' },
  { name: 'David R.', city: 'Chatham',     rating: 5, quote: 'Got three quotes for a tankless water heater. BlueLine was not the cheapest — but they explained everything in plain English and stood behind the work. Two years later, still perfect.', service: 'Water heater install' },
  { name: 'Priya K.', city: 'Rochester',   rating: 5, quote: 'They found a slab leak my last plumber missed. Fixed it the same day for the exact price they quoted. Honest people are hard to find. These are them.', service: 'Leak detection' },
  { name: 'Marcus T.','city': 'Sherman',   rating: 5, quote: 'Whole-house repipe in three days, on budget, on time, and they cleaned up better than they found it. I cannot recommend them enough.', service: 'Repiping' },
  { name: 'Jenna L.', city: 'Riverton',    rating: 5, quote: 'Friendly, on time, and the price they quoted is the price I paid. Refreshing.', service: 'Faucet replacement' },
  { name: 'Eli W.',   city: 'Auburn',      rating: 5, quote: 'They walked my elderly father through every option and never pressured him. That tells me everything I need to know.', service: 'Toilet repair' },
];

// ============================================================
// FAQ — feel free to add/edit. Used on home + dedicated FAQ page.
// ============================================================
export const faqs = [
  { q: 'Do you charge for an estimate?',
    a: 'No. Diagnostic visits and quotes are free for most repairs. If a job needs special equipment (like a camera inspection), we will tell you the price before we do anything.' },
  { q: 'Are your prices fixed or by the hour?',
    a: 'Flat-rate, every time. You get the price before we start. If the job takes longer than expected, you do not pay a penny more.' },
  { q: 'Are you really 24/7?',
    a: 'Yes. A real person answers the phone any time, day or night. Emergency rates apply after 8pm and on holidays, and we will quote them up front.' },
  { q: 'Are you licensed and insured?',
    a: 'Yes — fully licensed master plumbers, bonded, and carry $2M in liability insurance. We will email you proof on request.' },
  { q: 'What is your guarantee?',
    a: '100% satisfaction. If you are not happy, we will come back and make it right at no charge. Parts carry the manufacturer warranty; our labor is guaranteed for one full year.' },
  { q: 'Do you offer payment plans?',
    a: 'Yes — 0% financing for 12 months on jobs over $1,000, subject to credit approval. Ask your technician.' },
  { q: 'What payment methods do you accept?',
    a: 'Cash, all major credit cards, ACH, Apple Pay, and Google Pay. We do not accept checks for emergency calls.' },
  { q: 'Do you offer a membership?',
    a: 'Yes. Our BlueLine Care plan is $14/month and includes one free inspection a year, priority booking, and 15% off all repairs.' },
];
