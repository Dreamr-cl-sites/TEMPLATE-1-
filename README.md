# Plumber Website Template (Next.js + Tailwind + MongoDB)

A production-ready, multi-page Next.js template for plumbing businesses. Built for speed, conversion, and effortless re-skinning per client.

---

## 🔍 At a glance

- **7+ pages**: Home, Services, individual Service detail, About, Pricing, FAQ, Contact, Online Booking, Blog index, Blog detail
- **Tailwind + shadcn/ui** for a consistent, refined design system
- **Centralized config**: 90% of client-specific data lives in two files (`/lib/site-config.js` and `/lib/services-data.js`)
- **SEO-ready**: dynamic metadata per page, semantic HTML, fast image loading
- **Lead capture**: contact form + multi-step booking flow saved to MongoDB
- **Reading level grade 9**: clear, conversion-optimized copy throughout
- **Editable comment markers**: every customization point is prefixed with `// EDIT:`

---

## 🚀 New client checklist (15 minutes)

To re-skin this template for a new client, edit only these files:

### 1. `/lib/site-config.js` (the main one)
Business name, tagline, phone, email, address, hours, social links, trust badges, service area towns, stats, testimonials, and FAQ.

```js
export const site = {
  name: 'BlueLine Plumbing',         // ← client name
  phone: '(555) 234-7867',           // ← client phone
  email: 'hello@bluelineplumbing.com',// ← client email
  address: { line1: '...', city: '...', region: '...', postal: '...' },
  // ...etc
};
```

### 2. `/lib/services-data.js`
List of services the client offers, with pricing, signs/symptoms, FAQ.

### 3. `/tailwind.config.js`
Brand colors. Change `brand.navy`, `brand.blue`, `brand.accent`, `brand.cream` to match the client's palette.

### 4. Images (`/lib/site-config.js` -> `images` object)
Drop client photos into `/public` and update the URLs, OR keep stock URLs and swap one by one.

### 5. (Optional) `/components/site/Navbar.jsx`
Replace the `<Droplet />` icon with `<Image src="/logo.svg" />` once the client logo is ready.

That's it. Every page reads from those configs.

---

## 📁 Project structure

```
/app
  /api/[[...path]]/route.js   → contact + booking endpoints (MongoDB)
  /about/page.js              → About
  /services/page.js           → Services index
  /services/[slug]/page.js    → dynamic service detail pages
  /pricing/page.js            → Pricing + membership plans
  /faq/page.js                → Full FAQ page
  /contact/page.js            → Lead form
  /book/page.js               → 4-step booking flow
  /blog/page.js               → Blog index
  /blog/[slug]/page.js        → Blog post detail
  /page.js                    → Home
  /layout.js, /globals.css
/components
  /site/Navbar.jsx, Footer.jsx, EmergencyBar.jsx, CtaBanner.jsx
  /ui/*                       → shadcn primitives (do not edit)
/lib
  site-config.js              ← EDIT for new client
  services-data.js            ← EDIT for new client
```

---

## 🎨 Design system

- **Primary navy** `#0A2540` — trust & headings
- **Brand blue** `#1E6FD9` — links & accents
- **Accent orange** `#FF6B35` — CTAs only (high-contrast pop)
- **Cream** `#FAF8F4` — warm off-white background
- **Fonts**: Plus Jakarta Sans (display), Inter (body) — loaded via `next/font/google`
- **Spacing rhythm**: section `py-20 md:py-28`, cards `rounded-2xl`, buttons `rounded-full`
- **Helper classes** in `globals.css`: `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.card-soft`, `.eyebrow`, `.h-display`, `.section`, `.grid-pattern`

---

## 📊 Conversion features built in

- Sticky **Emergency phone bar** at the top of every page
- Multiple **tap-to-call** CTAs (header, hero, every section CTA)
- **Trust badges** (licensed, insured, 5-star, same-day) in hero and footer
- **Social proof**: 6 testimonials with star ratings + Google review count
- **Scarcity/urgency**: "Available now·60-min response" pulse badge
- **Risk reversal**: 100% satisfaction guarantee, one-year labor warranty
- **Friction reduction**: only name + phone required for any lead form
- **Multi-step booking**: feels like progress, not paperwork (4 steps, 60 sec)

---

## 🔧 API endpoints

All endpoints accept JSON and return JSON. Configured for `/api/*` so Kubernetes ingress routes them correctly.

- `POST /api/contact` — contact form. Body: `{name, phone, email?, service?, message?}`
- `POST /api/book`    — booking form. Body: `{name, phone, service, urgency?, preferredDate?, preferredTime?, address?, notes?}`
- `POST /api/newsletter` — email capture. Body: `{email}`
- `GET  /api/health`  — healthcheck

Leads are stored in MongoDB collection `leads` with a UUID `id`.

---

## ✅ Quality gates

- All routes pass Next.js production build (no client/server mixing issues)
- Mobile-first responsive at 360, 768, 1024, 1440
- Lighthouse-friendly: `next/image`, `next/font`, semantic HTML, low CLS
- Reading level: grade 9 (Flesch–Kincaid) across hero copy and benefits

---

## 📝 Editing tips

Search the codebase for `// EDIT:` to find every spot designed to be changed.
Nothing is hardcoded outside those points — if you want to change anything else, you can, but you shouldn’t need to.

Happy shipping. 🛠️
