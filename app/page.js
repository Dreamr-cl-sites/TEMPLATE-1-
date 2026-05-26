import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, ArrowRight, Star, ShieldCheck, Clock, BadgeCheck, Sparkles, Wrench, Droplet,
  Siren, Waves, Flame, Droplets, Pipette, GitFork, Building2, CheckCircle2, MapPin, Quote, ChevronRight,
} from 'lucide-react';
import { site, images, testimonials, faqs } from '@/lib/site-config';
import { services } from '@/lib/services-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CtaBanner from '@/components/site/CtaBanner';

// Map icon-name strings (from services data) -> lucide components
const ICONS = { Siren, Waves, Flame, Droplets, Pipette, Wrench, GitFork, Building2 };

export default function HomePage() {
  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container relative grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center pt-14 md:pt-20 pb-20 md:pb-28">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-semibold text-brand-blue">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-60" /><span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" /></span>
              Available now · 60-min response in {site.address.city}
            </div>
            <h1 className="h-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-6">
              Fast, honest plumbing.<br />
              <span className="text-brand-blue">Done right</span> the first time.
            </h1>
            <p className="mt-6 text-lg text-brand-mute max-w-xl leading-relaxed">
              Licensed master plumbers, upfront pricing, and a real human on the phone 24/7.
              No surprises. No upsells. Just clean work and a guarantee that means it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href={`tel:${site.phoneRaw}`} className="btn-primary"><Phone className="w-4 h-4" /> Call {site.phone}</Link>
              <Link href="/book" className="btn-ghost">Book online <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-navy/80">
              {site.trustBadges.map((b) => (
                <div key={b} className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-brand-blue" /> <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-brand-navy/20">
              <Image src={images.heroPlumber} alt="Professional plumber" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
            </div>
            {/* Floating rating card */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 card-soft p-4 md:p-5 w-64 animate-fade-up">
              <div className="flex items-center gap-1 text-brand-accent">
                {[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <div className="mt-2 text-2xl font-display font-extrabold text-brand-navy">4.9 / 5.0</div>
              <div className="text-xs text-brand-mute">from 340+ Google reviews</div>
            </div>
            {/* Floating arrival card */}
            <div className="absolute -top-4 -right-4 md:-right-8 card-soft p-4 flex items-center gap-3 animate-fade-up">
              <div className="w-10 h-10 rounded-full bg-brand-accent/15 grid place-items-center"><Clock className="w-5 h-5 text-brand-accent" /></div>
              <div>
                <div className="text-xs text-brand-mute">Avg. arrival</div>
                <div className="font-display font-extrabold text-brand-navy">~60 min</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-y border-black/5 bg-white/60 backdrop-blur">
          <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {site.stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display text-3xl md:text-4xl font-extrabold text-brand-navy">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-brand-mute mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= SERVICES ============================= */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <div className="eyebrow"><Wrench className="w-3.5 h-3.5" /> What we do</div>
              <h2 className="h-display text-4xl md:text-5xl mt-3">Plumbing services for every home.</h2>
              <p className="mt-4 text-brand-mute">From a leaky faucet to a full repipe — our master plumbers handle it all with flat-rate pricing and a one-year labor warranty.</p>
            </div>
            <Link href="/services" className="btn-ghost self-start md:self-end">All services <ArrowRight className="w-4 h-4" /></Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 6).map((s) => {
              const Icon = ICONS[s.icon] || Wrench;
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card-soft p-7 group hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-navy/10 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brand-sky grid place-items-center group-hover:bg-brand-accent transition">
                    <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">{s.name}</h3>
                  <p className="mt-2 text-sm text-brand-mute leading-relaxed">{s.short}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-brand-mute">From <span className="font-semibold text-brand-navy">${s.priceFrom}</span></span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue group-hover:text-brand-accent transition">Learn more <ChevronRight className="w-4 h-4" /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================= WHY US ============================= */}
      <section className="section bg-white border-y border-black/5">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[5/6] shadow-xl">
              <Image src={images.workShot1} alt="Plumber at work" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 card-soft p-5 w-56">
              <div className="flex items-center gap-2 text-brand-blue">
                <ShieldCheck className="w-5 h-5" /><span className="font-display font-bold">100% Guarantee</span>
              </div>
              <p className="mt-2 text-xs text-brand-mute leading-relaxed">If you are not happy, we fix it free. One-year labor warranty on everything.</p>
            </div>
          </div>
          <div>
            <div className="eyebrow"><Sparkles className="w-3.5 h-3.5" /> Why {site.name}</div>
            <h2 className="h-display text-4xl md:text-5xl mt-3">A plumber you can actually trust.</h2>
            <p className="mt-4 text-brand-mute">We started in {new Date().getFullYear() - site.yearsInBusiness} with one idea: do good work, charge a fair price, and never lie to a customer. {site.yearsInBusiness} years and 12,000+ homes later, that is still the whole strategy.</p>
            <ul className="mt-8 space-y-5">
              {[
                { t: 'Upfront, flat-rate pricing', d: 'You know the price before we start. If the job takes longer, you do not pay more.' },
                { t: 'Master plumbers — not subs', d: 'Every tech on our team is a licensed, background-checked employee. No revolving door.' },
                { t: 'Same-day service, 7 days a week', d: 'Real humans answer the phone 24/7. Most calls are scheduled within the hour.' },
                { t: 'One-year labor warranty', d: 'If something fails, we come back free. No fine print, no run-around.' },
              ].map((x) => (
                <li key={x.t} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display font-bold text-brand-navy">{x.t}</div>
                    <div className="text-sm text-brand-mute mt-1">{x.d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-3">
              <Link href="/about" className="btn-secondary">About us <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/book" className="btn-ghost">Book a job</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= HOW IT WORKS ============================= */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow justify-center"><Clock className="w-3.5 h-3.5" /> How it works</div>
            <h2 className="h-display text-4xl md:text-5xl mt-3">From call to clean-up in 4 simple steps.</h2>
            <p className="mt-4 text-brand-mute">No phone trees. No back-and-forth. No surprise fees.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '01', t: 'Call or book online', d: 'A real person picks up. We confirm your address and the issue in 2 minutes.' },
              { n: '02', t: 'Get a real ETA', d: 'You get a real arrival window — not “sometime between 8 and 5.”' },
              { n: '03', t: 'Flat-rate quote', d: 'We diagnose for free and show you the price before any work begins.' },
              { n: '04', t: 'Done & guaranteed', d: 'Job is finished clean, tested twice, and backed by our one-year warranty.' },
            ].map((step, i) => (
              <div key={step.n} className="relative card-soft p-7">
                <div className="font-display text-5xl font-extrabold text-brand-sky">{step.n}</div>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-navy">{step.t}</h3>
                <p className="mt-2 text-sm text-brand-mute leading-relaxed">{step.d}</p>
                {i < 3 && (<div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-brand-cream border border-black/5 grid place-items-center"><ChevronRight className="w-4 h-4 text-brand-blue" /></div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= TESTIMONIALS ============================= */}
      <section className="section bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
        <div className="container relative">
          <div className="max-w-2xl">
            <div className="eyebrow text-brand-accent"><Star className="w-3.5 h-3.5" /> Real customers</div>
            <h2 className="h-display text-4xl md:text-5xl mt-3 text-white">340+ five-star reviews and counting.</h2>
            <p className="mt-4 text-white/70">These are unedited reviews from real {site.address.city}-area customers.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.slice(0, 6).map((t) => (
              <figure key={t.name} className="rounded-2xl bg-white/5 border border-white/10 p-7 backdrop-blur hover:bg-white/10 transition">
                <Quote className="w-7 h-7 text-brand-accent" />
                <blockquote className="mt-4 text-white/90 leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold">{t.name}</div>
                    <div className="text-xs text-white/60">{t.city} · {t.service}</div>
                  </div>
                  <div className="flex text-brand-accent">{[...Array(t.rating)].map((_,i)=><Star key={i} className="w-4 h-4 fill-current" />)}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= SERVICE AREA ============================= */}
      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow"><MapPin className="w-3.5 h-3.5" /> Where we work</div>
            <h2 className="h-display text-4xl md:text-5xl mt-3">{site.serviceArea}.</h2>
            <p className="mt-4 text-brand-mute">If you are near {site.address.city}, we are probably already in your neighborhood. Not sure? Give us a call — if we cannot help, we will refer you to someone we trust.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {site.serviceTowns.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 rounded-full bg-white border border-black/5 px-3.5 py-1.5 text-sm text-brand-navy">
                  <MapPin className="w-3 h-3 text-brand-blue" /> {t}
                </span>
              ))}
            </div>
            <Link href="/contact" className="btn-secondary mt-10 inline-flex">Check your area <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"><Image src={images.bathroom1} alt="Bathroom" fill className="object-cover" sizes="50vw" /></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mt-8"><Image src={images.bathroom2} alt="Bathroom" fill className="object-cover" sizes="50vw" /></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"><Image src={images.bathroom3} alt="Bathroom" fill className="object-cover" sizes="50vw" /></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mt-8"><Image src={images.workShot2} alt="Work" fill className="object-cover" sizes="50vw" /></div>
          </div>
        </div>
      </section>

      {/* ============================= FAQ ============================= */}
      <section className="section bg-white border-y border-black/5">
        <div className="container grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <div className="eyebrow"><Droplet className="w-3.5 h-3.5" /> Common questions</div>
            <h2 className="h-display text-4xl md:text-5xl mt-3">Answers, before you have to ask.</h2>
            <p className="mt-4 text-brand-mute">If you do not see your question here, give us a call. Real people, no scripts.</p>
            <Link href="/faq" className="btn-ghost mt-8 inline-flex">All FAQs <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(0,6).map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-black/10">
                <AccordionTrigger className="text-left font-display font-bold text-brand-navy text-base md:text-lg hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-brand-mute leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
