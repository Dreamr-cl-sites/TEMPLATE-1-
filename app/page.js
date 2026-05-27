import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BadgeCheck, CheckCircle2, MapPin, Phone, Star, Wrench } from 'lucide-react';
import { site, images } from '@/lib/site-config';
import { services } from '@/lib/services-data';
import { locations } from '@/lib/locations-data';
import CtaBanner from '@/components/site/CtaBanner';

const city = site.address.city;
const state = site.address.region;

export const metadata = {
  title: `Plumber in ${city}, ${state}`,
  description: `${site.name} is a local plumber in ${city}, ${state}. We provide licensed plumbing service, clear flat-rate pricing, and same-day scheduling across ${site.serviceArea}.`,
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-sky/40" />
        <div className="container relative pt-12 md:pt-16 pb-16 md:pb-24">
          <div className="card-soft p-4 md:p-5 mb-6 reveal">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs md:text-sm">
              <div className="inline-flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-brand-blue" /> Licensed & insured team</div>
              <div className="inline-flex items-center gap-2"><Star className="w-4 h-4 text-brand-accent" /> 340+ verified 5-star reviews</div>
              <div className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Background-checked technicians</div>
              <div className="inline-flex items-center gap-2"><Phone className="w-4 h-4 text-brand-blue" /> Call now: {site.phone}</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center reveal">
            <div>
              <h1 className="h-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
                Local plumbing in
                <br />
                {city}, {state}
              </h1>
              <p className="text-brand-mute mt-3 md:mt-2 text-lg max-w-xl">
                {site.name} handles residential and light commercial plumbing with clear scope, clear pricing, and clean job delivery.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href={`tel:${site.phoneRaw}`} className="btn-primary"><Phone className="w-4 h-4" /> Tap to call</Link>
                <Link href="/book" className="btn-ghost">Book service <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-black/10 aspect-[5/4] md:aspect-[4/3] shadow-xl">
              <Image src={images.heroPlumber} alt={`Local plumber in ${city}`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow"><Wrench className="w-3.5 h-3.5" /> Core services</div>
            <h2 className="h-display text-4xl md:text-6xl leading-[0.95] mt-3">One page per service. One clear intent per page.</h2>
            <p className="mt-3 text-brand-mute">Each service below has a dedicated page with scope, timeline, pricing guidance, FAQs, and job photos.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="card-soft p-6 transition hover:-translate-y-1 hover:shadow-2xl">
                <h3 className="h-display text-2xl leading-tight">{service.name}</h3>
                <p className="text-brand-mute text-sm mt-1">{service.keyword}</p>
                <div className="mt-4 text-sm">
                  <div><span className="font-semibold">From:</span> ${service.priceFrom}</div>
                  <div><span className="font-semibold">Typical time:</span> {service.duration}</div>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">View page <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-black/5 reveal">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <div className="eyebrow"><MapPin className="w-3.5 h-3.5" /> Locations</div>
            <h2 className="h-display text-4xl md:text-6xl leading-[0.95] mt-3">Dedicated pages for every city we serve.</h2>
            <p className="mt-3 text-brand-mute">Each location page references neighborhoods, links to relevant services, and keeps local intent clear for both users and search engines.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {locations.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}`} className="rounded-2xl border border-black/10 bg-brand-cream p-5 hover:bg-white transition">
                <h3 className="font-display font-bold text-2xl">{location.name}, {location.region}</h3>
                <p className="text-sm text-brand-mute mt-1">{location.summary}</p>
                <p className="text-xs text-brand-blue mt-3">Neighborhoods: {location.neighborhoods.join(', ')}</p>
              </Link>
            ))}
          </div>
          <Link href="/locations" className="btn-secondary mt-8 inline-flex">See all location pages <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      <section className="section reveal">
        <div className="container grid lg:grid-cols-2 gap-6">
          <div className="card-soft p-8">
            <h2 className="h-display text-4xl leading-[0.95]">How we keep it clear</h2>
            <div className="mt-4 space-y-3 text-sm text-brand-navy">
              <p><span className="font-semibold">Scope first:</span> every quote states exactly what work is included.</p>
              <p><span className="font-semibold">Price first:</span> flat-rate pricing is shown before tools come out.</p>
              <p><span className="font-semibold">People first:</span> licensed, screened technicians only.</p>
              <p><span className="font-semibold">Guarantee first:</span> one-year labor warranty on completed work.</p>
            </div>
          </div>
          <div className="card-soft p-8">
            <h2 className="h-display text-4xl leading-[0.95]">Site hierarchy</h2>
            <div className="mt-4 space-y-2 text-sm">
              <p>Homepage -&gt; service pages -&gt; related services</p>
              <p>Homepage -&gt; location pages -&gt; location-specific service links</p>
              <p>Blog posts -&gt; service/location pages with buyer-intent CTAs</p>
              <p>Every page is reachable within 2-3 clicks from this homepage.</p>
            </div>
            <div className="mt-6 flex gap-3">
              <Link href="/services" className="btn-ghost">Services</Link>
              <Link href="/locations" className="btn-ghost">Locations</Link>
              <Link href="/blog" className="btn-ghost">Buyer-intent blog</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title={`Need a plumber in ${city} today?`} subtitle="Tap to call now. We confirm scope, give a real ETA, and quote before work starts." />
    </>
  );
}
