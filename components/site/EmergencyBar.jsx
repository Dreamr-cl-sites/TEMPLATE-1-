import { Phone, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { site } from '@/lib/site-config';

// EDIT: Top emergency strip — hide by returning null if not desired.
export default function EmergencyBar() {
  return (
    <div className="bg-brand-navy text-white text-xs md:text-sm">
      <div className="container flex flex-wrap items-center justify-between gap-2 py-2">
        <div className="flex items-center gap-4 opacity-90">
          <span className="hidden sm:inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {site.hours}</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-accent" /> Licensed & Insured</span>
        </div>
        <Link href={`tel:${site.phoneRaw}`} className="inline-flex items-center gap-1.5 font-semibold hover:text-brand-accent transition">
          <Phone className="w-3.5 h-3.5" /> 24/7 · {site.phone}
        </Link>
      </div>
    </div>
  );
}
