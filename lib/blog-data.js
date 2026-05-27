import { images, site } from '@/lib/site-config';

const city = site.address.city;

export const posts = [
  {
    slug: `water-heater-replacement-cost-${city.toLowerCase()}`,
    title: `Water heater replacement cost in ${city}: what homeowners actually pay`,
    date: 'May 20, 2026',
    read: '6 min',
    tag: 'Buyer Intent',
    img: images.workShot2,
    excerpt: `Real pricing ranges, labor variables, and permit factors that affect water heater replacement cost in ${city}.`,
    body: `Most homeowners in ${city} ask the same thing first: "What will it really cost to replace my water heater?"\n\nIn most homes, standard tank replacement falls in the lower range, while tankless or code-upgrade installs trend higher. The biggest price drivers are venting changes, shutoff upgrades, permit requirements, and access.\n\nWhat matters most is not just equipment price. It is whether the quote includes haul-away, permit handling, expansion tank work, and final testing.\n\nIf you are comparing quotes, ask every contractor to itemize labor, materials, permit fees, and warranty coverage. Apples-to-apples pricing avoids expensive surprises.`,
    serviceSlug: 'water-heaters',
    locationSlug: 'springfield-il',
  },
  {
    slug: `drain-cleaning-vs-sewer-repair-${city.toLowerCase()}`,
    title: `Drain cleaning vs sewer line repair in ${city}: how to tell what you need`,
    date: 'May 15, 2026',
    read: '5 min',
    tag: 'Buyer Intent',
    img: images.workShot3,
    excerpt: `If your home keeps backing up, this guide helps you identify whether you need standard drain cleaning or a main-line repair.`,
    body: `One clog in one fixture usually means local drain cleaning. Multiple backups in sinks, showers, and toilets often point to a main-line issue.\n\nA camera inspection is the fastest way to confirm whether roots, collapses, or grease buildup are causing repeat problems.\n\nFor homeowners in ${city}, the right sequence is: diagnose first, clear safely, then repair only if line condition requires it.\n\nChoosing full replacement before camera evidence is usually unnecessary. Choosing repeated cleanings when the line is damaged is usually expensive.`,
    serviceSlug: 'sewer-line',
    locationSlug: 'chatham-il',
  },
  {
    slug: `is-repiping-worth-it-${city.toLowerCase()}`,
    title: `Is repiping worth it in older ${city} homes?`,
    date: 'May 6, 2026',
    read: '7 min',
    tag: 'Buyer Intent',
    img: images.workShot1,
    excerpt: 'A practical decision framework for aging galvanized lines, recurring leaks, and insurance pressure.',
    body: `Repiping is not for every home. It makes the most sense when leaks are recurring, pressure is poor throughout the house, or insurers are flagging old pipe materials.\n\nIn older ${city} properties, many owners spend more over two years on repeated spot repairs than they would on a planned repipe.\n\nA good repipe quote should include patch/repair scope, inspection support, expected timeline, and nightly water restoration expectations.\n\nIf the plumbing system is failing in multiple zones, repiping is usually the only long-term fix.`,
    serviceSlug: 'repiping',
    locationSlug: 'rochester-il',
  },
  {
    slug: `emergency-plumber-checklist-${city.toLowerCase()}`,
    title: `Emergency plumber checklist for ${city} homeowners`,
    date: 'April 30, 2026',
    read: '4 min',
    tag: 'Emergency',
    img: images.bathroom3,
    excerpt: 'What to do in the first 10 minutes of a plumbing emergency before the technician arrives.',
    body: `In a burst-pipe or overflow event, speed matters more than anything.\n\nStep 1: shut off the nearest fixture valve if possible.\n\nStep 2: if water continues, shut off the home main valve.\n\nStep 3: move valuables, towels, and electronics out of the affected zone.\n\nStep 4: document active damage with photos for insurance records.\n\nStep 5: call a licensed emergency plumber and request a clear ETA plus dispatch pricing before arrival.`,
    serviceSlug: 'emergency-plumbing',
    locationSlug: 'sherman-il',
  },
];
