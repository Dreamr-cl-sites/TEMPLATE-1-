import Link from 'next/link';
import Image from 'next/image';
import { Newspaper, Clock, ArrowRight } from 'lucide-react';
import { images } from '@/lib/site-config';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = { title: 'Plumbing Blog', description: 'Practical tips, money-saving guides, and the truth about your home’s plumbing.' };

// EDIT: Add your real posts to this array. The detail page reads from here.
export const posts = [
  { slug: '5-signs-water-heater-failing', title: '5 signs your water heater is about to fail', date: 'June 4, 2025', read: '4 min', tag: 'Water Heaters', img: 'https://images.pexels.com/photos/33388390/pexels-photo-33388390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', excerpt: 'A failing water heater rarely just stops. It warns you for weeks. Here are the five signs that mean it is time — before you wake up to a flood.', body: 'Most homeowners replace a water heater in a panic, after a leak has already flooded the basement. The truth is, a tank almost always warns you first. Watch for these five signs and you can replace it on your schedule, not the appliance’s.\n\n1. Hot water that runs out faster than it used to. Sediment build-up takes up space inside the tank — there is less room for actual hot water.\n\n2. Rusty or smelly water. The anode rod inside the tank has likely failed.\n\n3. Pops, bangs, or rumbles. That is sediment hitting the heating element. The element will not last long.\n\n4. Pooling water around the base. A small puddle today is a flood next month. Stop the leak now.\n\n5. The tank is over 10 years old. Most tanks last 8–12 years. Past that, you are gambling.\n\nIf you have two or more of these, schedule a replacement on your terms.' },
  { slug: 'how-to-stop-a-running-toilet',   title: 'How to stop a running toilet (without calling a plumber)', date: 'May 22, 2025', read: '3 min', tag: 'DIY', img: 'https://images.pexels.com/photos/14002094/pexels-photo-14002094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', excerpt: 'A running toilet wastes 200 gallons a day. The fix is usually a $10 part and ten minutes. Here is the simple step-by-step.', body: 'A running toilet is one of the cheapest plumbing problems to fix — if you know which of the three small parts to replace. Most of the time it is the flapper. Sometimes it is the fill valve. Rarely is it both.\n\nStep 1: Lift the lid. Watch the tank refill after a flush. If water keeps trickling into the bowl, the flapper is not sealing.\n\nStep 2: Shut the supply valve under the toilet. Flush to drain the tank.\n\nStep 3: Unclip the old flapper, clip in the new one. $5 at any hardware store.\n\nStep 4: If the toilet still runs, the fill valve is bad. Replace it the same way — about $15.\n\nIf that does not solve it, call us. The next likely cause is a cracked overflow tube and that one is worth a pro.' },
  { slug: 'tankless-vs-tank-water-heaters', title: 'Tankless vs tank water heaters: which is right for you?', date: 'May 8, 2025', read: '6 min', tag: 'Buying Guide', img: images.bathroom1, excerpt: 'Tankless saves space and energy. Tank costs less up front. Here is the honest breakdown so you can pick what fits your home and budget.', body: 'Tankless water heaters get a lot of marketing love — but they are not right for every home. Here is the straight talk.\n\nTankless pros: endless hot water, 20+ year lifespan, half the energy cost, saves 16 square feet of floor space.\n\nTankless cons: 2–3x higher up-front cost, may need an electrical or gas upgrade, lower flow during simultaneous use in big homes.\n\nTank pros: cheap to install ($1,200–$2,000), works with most existing setups, fine for 1–3 person homes.\n\nTank cons: 8–12 year lifespan, runs out of hot water, leaks when it dies.\n\nOur rule of thumb: if you have 4+ people, take long showers, or plan to stay in the home 10+ years — go tankless. Otherwise a quality tank is a fine choice.' },
  { slug: 'when-to-call-a-plumber',          title: '7 problems that mean: stop DIYing, call a plumber', date: 'April 27, 2025', read: '4 min', tag: 'Homeowner Tips', img: images.workShot1, excerpt: 'A YouTube tutorial cannot fix everything. These seven problems are when DIY costs you more than the pro would have.', body: 'We love a handy homeowner. We also fix a lot of jobs that started as a $20 DIY and ended at $2,000. Here is when to put the wrench down.\n\n1. Sewer backing up into multiple drains — main-line clog. Wrong tools and you push it deeper.\n\n2. Slab leak — hot spots on the floor. Needs detection equipment.\n\n3. No hot water and a smell of gas. Stop. Leave the house. Call us.\n\n4. Drain cleaner did not work twice. The third try corrodes the pipe.\n\n5. Recurring clogs in different fixtures. Symptom of a deeper problem.\n\n6. Low pressure throughout the house. Could be a pipe collapse.\n\n7. Anything behind a wall. The wall costs more to fix than the plumbing.' },
  { slug: 'winterize-your-plumbing',         title: 'Winterize your plumbing in 20 minutes',                date: 'October 14, 2024', read: '3 min', tag: 'Seasonal', img: images.workShot2, excerpt: 'Frozen pipes are the #1 cause of winter insurance claims. Twenty minutes now saves $10K of damage later.', body: 'A burst pipe in January is the most preventable plumbing disaster there is. Here is a 20-minute checklist.\n\n1. Disconnect outdoor hoses. A trapped hose freezes water back into the pipe.\n\n2. Insulate hose bibs with $3 foam covers from any hardware store.\n\n3. Open kitchen and bath cabinets on exterior walls during cold snaps.\n\n4. Let faucets drip when temps go below 20°F. Moving water resists freezing.\n\n5. Know where the main shutoff is. If a pipe bursts, you have 60 seconds to save your floor.' },
  { slug: 'low-water-pressure-causes',       title: 'Why your water pressure is low (and what fixes it)',    date: 'March 3, 2025', read: '5 min', tag: 'Troubleshooting', img: images.workShot3, excerpt: 'Low pressure is usually one of five things. Check them in this order — most are free or cheap to fix.', body: 'Low pressure has five common causes. Check them in this order to save a service call.\n\n1. Aerator clogged — unscrew the tip of the faucet and rinse. Free.\n\n2. Shut-off valve partly closed — turn it counter-clockwise all the way.\n\n3. Pressure regulator failing — $250–$400 to replace.\n\n4. Pipe corrosion (old galvanized) — partial or full repipe is the only fix.\n\n5. City supply issue — ask a neighbor. If theirs is low too, call the utility.' },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative pt-16 pb-12 text-center max-w-3xl mx-auto">
          <div className="eyebrow justify-center"><Newspaper className="w-3.5 h-3.5" /> Blog</div>
          <h1 className="h-display text-5xl md:text-6xl mt-3">The plumber’s field notes.</h1>
          <p className="mt-4 text-brand-mute">Practical tips, money-saving guides, and the honest truth about your home&apos;s plumbing.</p>
        </div>
      </section>

      <section className="section -mt-8">
        <div className="container">
          <Link href={`/blog/${featured.slug}`} className="group block card-soft overflow-hidden mb-10 lg:grid lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]"><Image src={featured.img} alt={featured.title} fill className="object-cover group-hover:scale-105 transition duration-700" /></div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-brand-mute"><span className="text-brand-accent font-bold">{featured.tag}</span><span>·</span><Clock className="w-3.5 h-3.5" /><span>{featured.read}</span><span>·</span><span>{featured.date}</span></div>
              <h2 className="h-display text-3xl md:text-4xl mt-3 group-hover:text-brand-blue transition">{featured.title}</h2>
              <p className="mt-4 text-brand-mute leading-relaxed">{featured.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-brand-blue font-semibold">Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></div>
            </div>
          </Link>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group card-soft overflow-hidden hover:-translate-y-1 transition">
                <div className="relative aspect-[16/10]"><Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition duration-700" /></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-brand-mute"><span className="text-brand-accent font-bold">{p.tag}</span><span>·</span><span>{p.read}</span></div>
                  <h3 className="h-display text-xl mt-2 group-hover:text-brand-blue transition">{p.title}</h3>
                  <p className="mt-2 text-sm text-brand-mute">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
