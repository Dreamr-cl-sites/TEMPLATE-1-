import { site } from '@/lib/site-config';
import { services } from '@/lib/services-data';

const city = site.address.city;

export const locations = [
  { slug: 'springfield-il', name: 'Springfield', region: 'IL', neighborhoods: ['Downtown', 'West Side', 'Harvard Park'], gbpUrl: 'https://g.page/', summary: `Local plumbers serving every Springfield neighborhood with same-day scheduling and flat-rate quotes.` },
  { slug: 'chatham-il', name: 'Chatham', region: 'IL', neighborhoods: ['Breckenridge', 'South Park', 'Briargate'], gbpUrl: 'https://g.page/', summary: `Residential plumbing in Chatham for drain clogs, water heaters, leak detection, and emergency calls.` },
  { slug: 'rochester-il', name: 'Rochester', region: 'IL', neighborhoods: ['Buckley Ridge', 'Pioneer Point', 'Ridgeview'], gbpUrl: 'https://g.page/', summary: `Fast response plumbing for Rochester homes with licensed techs and no-surprise pricing.` },
  { slug: 'sherman-il', name: 'Sherman', region: 'IL', neighborhoods: ['Stonegate', 'Rail Golf Club area', 'Sherman Village'], gbpUrl: 'https://g.page/', summary: `Sherman homeowners call us for sewer issues, fixture replacements, and full-system repairs.` },
  { slug: 'riverton-il', name: 'Riverton', region: 'IL', neighborhoods: ['North Riverton', 'South Riverton', 'Riverfront area'], gbpUrl: 'https://g.page/', summary: `Reliable plumbing service in Riverton with clear timelines, clear scope, and clean job completion.` },
  { slug: 'pleasant-plains-il', name: 'Pleasant Plains', region: 'IL', neighborhoods: ['Village Center', 'North Farm District', 'Route 125 corridor'], gbpUrl: 'https://g.page/', summary: `Pleasant Plains plumbing specialists for water heater installs, drain cleaning, and leak repair.` },
  { slug: 'auburn-il', name: 'Auburn', region: 'IL', neighborhoods: ['Downtown Auburn', 'Prairie View', 'Sangamon edge'], gbpUrl: 'https://g.page/', summary: `Serving Auburn with practical plumbing solutions designed for older and newer homes alike.` },
  { slug: 'pawnee-il', name: 'Pawnee', region: 'IL', neighborhoods: ['Village Core', 'North Pawnee', 'Farm Belt'], gbpUrl: 'https://g.page/', summary: `Pawnee plumbing calls handled by licensed, background-checked technicians with transparent pricing.` },
  { slug: 'jerome-il', name: 'Jerome', region: 'IL', neighborhoods: ['East Jerome', 'Veterans corridor', 'South Jerome'], gbpUrl: 'https://g.page/', summary: `Jerome area plumbing for emergency response, sewer diagnostics, and day-to-day repair work.` },
  { slug: 'leland-grove-il', name: 'Leland Grove', region: 'IL', neighborhoods: ['Leland Grove central', 'Pasfield area', 'West border'], gbpUrl: 'https://g.page/', summary: `Premium residential plumbing in Leland Grove with documented work and long-term repair plans.` },
  { slug: 'new-berlin-il', name: 'New Berlin', region: 'IL', neighborhoods: ['Village Core', 'Old Route corridor', 'North New Berlin'], gbpUrl: 'https://g.page/', summary: `New Berlin service calls focused on efficient repairs, respectful crews, and clear communication.` },
  { slug: 'petersburg-il', name: 'Petersburg', region: 'IL', neighborhoods: ['Historic Square', 'Lincoln district', 'Edge-of-town homes'], gbpUrl: 'https://g.page/', summary: `Petersburg homeowners trust us for repairs, replacements, and inspections with honest recommendations.` },
];

export function getLocation(slug) {
  return locations.find((location) => location.slug === slug);
}

export function getLocationServiceLinks() {
  return services.map((service) => ({
    slug: service.slug,
    name: service.name,
    href: `/services/${service.slug}`,
    keyword: `${service.name.toLowerCase()} ${city}`,
  }));
}
